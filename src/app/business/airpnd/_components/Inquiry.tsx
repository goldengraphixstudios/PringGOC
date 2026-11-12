"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { ArrowRight, Copy, Mail, MessageCircle, Minus, Plus, X } from "lucide-react";
import { GROUP_EMAIL } from "@/data/site";
import { bp } from "@/lib/basePath";
import { AIRPND_MESSENGER, stayLabel, stays, type StayId } from "../stays";

/* ── Draft model ───────────────────────────────────────────── */

export type StayLength = "short" | "monthly";

export interface Draft {
  stay: StayId | "any";
  checkIn: string;
  checkOut: string;
  guests: number;
  length: StayLength;
  name: string;
  note: string;
}

const emptyDraft: Draft = {
  stay: "any",
  checkIn: "",
  checkOut: "",
  guests: 2,
  length: "short",
  name: "",
  note: "",
};

function formatDate(iso: string) {
  if (!iso) return "";
  const d = new Date(`${iso}T00:00:00`);
  return d.toLocaleDateString("en-PH", { month: "short", day: "numeric", year: "numeric" });
}

function nightsBetween(a: string, b: string) {
  if (!a || !b) return 0;
  const diff = (new Date(`${b}T00:00:00`).getTime() - new Date(`${a}T00:00:00`).getTime()) / 86_400_000;
  return diff > 0 ? Math.round(diff) : 0;
}

export function buildMessage(d: Draft) {
  const nights = nightsBetween(d.checkIn, d.checkOut);
  const lines = ["Hi AIRPND! I'd like to check availability."];
  lines.push("");
  lines.push(`Location: ${stayLabel(d.stay)}`);
  if (d.checkIn && d.checkOut) {
    lines.push(
      `Dates: ${formatDate(d.checkIn)} to ${formatDate(d.checkOut)}${nights ? ` (${nights} night${nights > 1 ? "s" : ""})` : ""}`,
    );
  } else if (d.checkIn) {
    lines.push(`Check-in: ${formatDate(d.checkIn)}`);
  } else {
    lines.push("Dates: flexible");
  }
  lines.push(`Guests: ${d.guests}`);
  lines.push(`Stay: ${d.length === "monthly" ? "monthly" : "short stay"}`);
  if (d.note.trim()) lines.push(`Note: ${d.note.trim()}`);
  if (d.name.trim()) {
    lines.push("");
    lines.push(`Thank you! - ${d.name.trim()}`);
  }
  return lines.join("\n");
}

/** Today's date (local), set after mount so the static HTML and the client never disagree. */
export function useToday() {
  const [today, setToday] = useState<string | undefined>(undefined);
  useEffect(() => {
    const d = new Date();
    const iso = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setToday(iso);
  }, []);
  return today;
}

/* ── Context ───────────────────────────────────────────────── */

interface InquiryApi {
  open: (patch?: Partial<Draft>) => void;
}

const InquiryContext = createContext<InquiryApi | null>(null);

export function useInquiry() {
  const ctx = useContext(InquiryContext);
  if (!ctx) throw new Error("useInquiry must be used inside <InquiryProvider>");
  return ctx;
}

/** Shared draft store, so the hero bar, stay cards, modal and inline composer stay in sync. */
const DraftContext = createContext<{
  draft: Draft;
  setDraft: (fn: (d: Draft) => Draft) => void;
  notify: (msg: string) => void;
} | null>(null);

function useDraft() {
  const ctx = useContext(DraftContext);
  if (!ctx) throw new Error("useDraft must be used inside <InquiryProvider>");
  return ctx;
}

export function InquiryProvider({ children }: { children: ReactNode }) {
  const [draft, setDraftState] = useState<Draft>(emptyDraft);
  const [modalOpen, setModalOpen] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const setDraft = useCallback((fn: (d: Draft) => Draft) => setDraftState(fn), []);

  const notify = useCallback((msg: string) => {
    setToast(msg);
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(null), 3200);
  }, []);

  const open = useCallback((patch?: Partial<Draft>) => {
    if (patch) setDraftState((d) => ({ ...d, ...patch }));
    setModalOpen(true);
  }, []);

  const api = useMemo(() => ({ open }), [open]);
  const draftApi = useMemo(() => ({ draft, setDraft, notify }), [draft, setDraft, notify]);

  return (
    <InquiryContext.Provider value={api}>
      <DraftContext.Provider value={draftApi}>
        {children}
        {modalOpen ? <ComposerModal onClose={() => setModalOpen(false)} /> : null}
        {toast ? (
          <div className="ap-toast" role="status">
            {toast}
          </div>
        ) : null}
      </DraftContext.Provider>
    </InquiryContext.Provider>
  );
}

/* ── Small helpers used by other client components ─────────── */

/** Hero booking bar fields read/write the shared draft. */
export function useSharedDraft() {
  const { draft, setDraft } = useDraft();
  return { draft, setDraft };
}

export function AskAboutButton({
  stay,
  className,
  children,
}: {
  stay?: StayId;
  className?: string;
  children: ReactNode;
}) {
  const { open } = useInquiry();
  return (
    <button type="button" className={className} onClick={() => open(stay ? { stay } : undefined)}>
      {children}
    </button>
  );
}

/* ── Composer (used inline and inside the modal) ───────────── */

export function Composer({ tone = "light", idPrefix = "c" }: { tone?: "light" | "inline"; idPrefix?: string }) {
  const { draft, setDraft, notify } = useDraft();
  const message = buildMessage(draft);
  const today = useToday();

  const update = <K extends keyof Draft>(key: K, value: Draft[K]) =>
    setDraft((d) => {
      const next = { ...d, [key]: value };
      // keep check-out after check-in
      if (key === "checkIn" && next.checkOut && next.checkOut <= String(value)) next.checkOut = "";
      return next;
    });

  async function copy() {
    try {
      await navigator.clipboard.writeText(message);
      return true;
    } catch {
      return false;
    }
  }

  async function messenger() {
    const ok = await copy();
    window.open(AIRPND_MESSENGER, "_blank", "noopener,noreferrer");
    notify(ok ? "Message copied. Paste it into Messenger." : "Opening Messenger…");
  }

  const subject = `AIRPND stay inquiry - ${stayLabel(draft.stay)}`;
  const mailto = `mailto:${GROUP_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;

  return (
    <div className="@container grid gap-6 sm:gap-8 lg:grid-cols-[1.05fr_1fr]">
      {/* Form */}
      <div className="grid content-start gap-5">
        <div>
          <span className="ap-input-label">Where would you like to stay?</span>
          <div className="flex flex-wrap gap-2">
            {(["any", ...stays.map((s) => s.id)] as const).map((id) => (
              <button
                key={id}
                type="button"
                className="ap-chip"
                aria-pressed={draft.stay === id}
                onClick={() => update("stay", id)}
              >
                {id === "any" ? "Any" : stays.find((s) => s.id === id)?.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 @min-[18rem]:grid-cols-2">
          <label className="min-w-0">
            <span className="ap-input-label">Check-in</span>
            <input
              id={`${idPrefix}-in`}
              type="date"
              className="ap-input"
              min={today}
              value={draft.checkIn}
              onChange={(e) => update("checkIn", e.target.value)}
            />
          </label>
          <label className="min-w-0">
            <span className="ap-input-label">Check-out</span>
            <input
              id={`${idPrefix}-out`}
              type="date"
              className="ap-input"
              min={draft.checkIn || today}
              value={draft.checkOut}
              onChange={(e) => update("checkOut", e.target.value)}
            />
          </label>
        </div>

        <div className="grid grid-cols-1 gap-3 @min-[20rem]:grid-cols-2">
          <div>
            <span className="ap-input-label">Guests</span>
            <div className="flex h-[50px] items-center justify-between rounded-[14px] border-[1.5px] border-[rgba(41,38,31,0.16)] bg-[var(--ap-paper)] px-1.5">
              <button
                type="button"
                aria-label="Fewer guests"
                className="grid h-10 w-10 cursor-pointer place-items-center rounded-full text-[var(--ap-clay)] transition hover:bg-[var(--ap-sand)] disabled:opacity-30"
                disabled={draft.guests <= 1}
                onClick={() => update("guests", Math.max(1, draft.guests - 1))}
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="text-[17px] font-bold tabular-nums" aria-live="polite">
                {draft.guests}
              </span>
              <button
                type="button"
                aria-label="More guests"
                className="grid h-10 w-10 cursor-pointer place-items-center rounded-full text-[var(--ap-clay)] transition hover:bg-[var(--ap-sand)] disabled:opacity-30"
                disabled={draft.guests >= 8}
                onClick={() => update("guests", Math.min(8, draft.guests + 1))}
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
          </div>
          <div>
            <span className="ap-input-label">Length of stay</span>
            <div className="ap-seg">
              <button type="button" aria-pressed={draft.length === "short"} onClick={() => update("length", "short")}>
                Short
              </button>
              <button type="button" aria-pressed={draft.length === "monthly"} onClick={() => update("length", "monthly")}>
                Monthly
              </button>
            </div>
          </div>
        </div>

        <label>
          <span className="ap-input-label">Your name <span className="font-normal text-[var(--ap-ink-soft)]">(optional)</span></span>
          <input
            type="text"
            className="ap-input"
            autoComplete="given-name"
            placeholder="e.g. Maria"
            value={draft.name}
            onChange={(e) => update("name", e.target.value)}
          />
        </label>

        <label>
          <span className="ap-input-label">Anything we should know? <span className="font-normal text-[var(--ap-ink-soft)]">(optional)</span></span>
          <textarea
            className="ap-input"
            placeholder="Arrival time, work trip, travelling with family…"
            value={draft.note}
            onChange={(e) => update("note", e.target.value)}
          />
        </label>
      </div>

      {/* Live preview */}
      <div className={`flex flex-col rounded-[22px] p-4 sm:rounded-[26px] sm:p-6 ${tone === "inline" ? "bg-[var(--ap-sand)]" : "bg-[var(--ap-cream)]"}`}>
        <div className="mb-4 flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={bp("/airpnd/brand/mark.png")} alt="" className="h-9 w-auto" />
          <div className="leading-tight">
            <p className="text-[15px] font-bold text-[var(--ap-ink)]">Your message</p>
            <p className="text-[13.5px] text-[var(--ap-ink-soft)]">Updates as you fill in the form</p>
          </div>
        </div>
        <div className="ap-bubble mb-5 flex-1" aria-live="polite">
          {message}
        </div>
        <div className="grid gap-2.5">
          <button type="button" className="ap-btn ap-btn-primary w-full" onClick={messenger}>
            <MessageCircle className="h-[18px] w-[18px]" />
            Send on Messenger
            <ArrowRight className="ap-arrow h-4 w-4" />
          </button>
          <div className="grid grid-cols-2 gap-2.5">
            <a href={mailto} className="ap-btn ap-btn-ghost w-full !px-3">
              <Mail className="h-4 w-4" />
              Email
            </a>
            <button
              type="button"
              className="ap-btn ap-btn-ghost w-full !px-3"
              onClick={async () => notify((await copy()) ? "Message copied." : "Couldn't copy. Select the text instead.")}
            >
              <Copy className="h-4 w-4" />
              Copy
            </button>
          </div>
        </div>
        <p className="mt-4 text-[13.5px] leading-snug text-[var(--ap-ink-soft)]">
          We reply with availability and the current rate for your dates.
        </p>
      </div>
    </div>
  );
}

/* ── Modal ─────────────────────────────────────────────────── */

function ComposerModal({ onClose }: { onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div className="ap-modal-backdrop flex items-end justify-center sm:items-center sm:p-6" onClick={onClose}>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="ap-modal-title"
        className="ap-sheet ap-safe-bottom relative max-h-[94dvh] w-full max-w-5xl overflow-y-auto overscroll-contain rounded-t-[28px] bg-[var(--ap-paper)] px-4 sm:max-h-[92dvh] sm:rounded-[30px] sm:px-9 sm:pb-9"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 -mx-4 mb-5 bg-[var(--ap-paper)] px-4 pt-3 pb-4 sm:static sm:mx-0 sm:mb-7 sm:px-0 sm:pt-9 sm:pb-0">
          <div className="mx-auto mb-3 h-1.5 w-11 rounded-full bg-[var(--ap-sand-deep)] sm:hidden" aria-hidden="true" />
          <div className="flex items-start justify-between gap-4 sm:gap-6">
          <div>
            <p className="ap-label mb-2">Check availability</p>
            <h2 id="ap-modal-title" className="ap-display ap-h3 !text-[clamp(1.4rem,5.4vw,2.15rem)]">
              Tell us your dates. We&apos;ll handle the rest.
            </h2>
          </div>
          <button
            ref={closeRef}
            type="button"
            aria-label="Close"
            onClick={onClose}
            className="grid h-11 w-11 shrink-0 cursor-pointer place-items-center rounded-full border-[1.5px] border-[rgba(41,38,31,0.16)] text-[var(--ap-ink)] transition hover:bg-[var(--ap-sand)]"
          >
            <X className="h-5 w-5" />
          </button>
          </div>
        </div>
        <Composer idPrefix="m" />
      </div>
    </div>
  );
}
