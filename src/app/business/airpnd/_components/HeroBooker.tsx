"use client";

import { ArrowRight, Minus, Plus } from "lucide-react";
import { stays } from "../stays";
import { useInquiry, useSharedDraft, useToday, type Draft } from "./Inquiry";

/** The hero's booking bar. It fills the shared draft, then opens the message composer. */
/** Tapping anywhere on a date field opens the native picker, not just the tiny calendar icon. */
function openPicker(e: React.MouseEvent<HTMLLabelElement>) {
  const input = e.currentTarget.querySelector("input");
  if (!input || e.target === input) return;
  try {
    input.showPicker?.();
  } catch {
    input.focus();
  }
}

export default function HeroBooker() {
  const { open } = useInquiry();
  const { draft, setDraft } = useSharedDraft();
  const today = useToday();

  const set = <K extends keyof Draft>(key: K, value: Draft[K]) =>
    setDraft((d) => {
      const next = { ...d, [key]: value };
      if (key === "checkIn" && next.checkOut && next.checkOut <= String(value)) next.checkOut = "";
      return next;
    });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        open();
      }}
      className="relative grid grid-cols-2 gap-1 rounded-[26px] bg-[var(--ap-paper)] p-2 shadow-[0_30px_60px_-32px_rgba(85,82,59,0.6),0_0_0_1px_rgba(126,122,93,0.14)] sm:rounded-[28px] md:grid-cols-4 xl:grid-cols-[1.25fr_1fr_1fr_0.9fr_auto] xl:items-center xl:rounded-full xl:p-2 xl:pl-3"
      aria-label="Check availability"
    >
      <label className="ap-field col-span-2 md:col-span-1 xl:rounded-full">
        <span className="ap-field-label">Where</span>
        <select value={draft.stay} onChange={(e) => set("stay", e.target.value as Draft["stay"])}>
          <option value="any">Any location</option>
          {stays.map((s) => (
            <option key={s.id} value={s.id}>
              {s.name}, {s.city}
            </option>
          ))}
        </select>
      </label>

      <label className="ap-field max-[359px]:col-span-2 xl:rounded-full" onClick={openPicker}>
        <span className="ap-field-label">Check-in</span>
        <input type="date" min={today} value={draft.checkIn} onChange={(e) => set("checkIn", e.target.value)} />
      </label>

      <label className="ap-field max-[359px]:col-span-2 xl:rounded-full" onClick={openPicker}>
        <span className="ap-field-label">Check-out</span>
        <input
          type="date"
          min={draft.checkIn || today}
          value={draft.checkOut}
          onChange={(e) => set("checkOut", e.target.value)}
        />
      </label>

      <div className="ap-field col-span-2 !flex-row items-center justify-between md:col-span-1 md:!flex-col md:items-stretch md:justify-start xl:rounded-full">
        <span className="ap-field-label" id="ap-guests-label">Guests</span>
        <div className="flex items-center gap-3" role="group" aria-labelledby="ap-guests-label">
          <button
            type="button"
            aria-label="Fewer guests"
            disabled={draft.guests <= 1}
            onClick={() => set("guests", Math.max(1, draft.guests - 1))}
            className="grid h-10 w-10 cursor-pointer place-items-center rounded-full border md:h-9 md:w-9 border-[rgba(41,38,31,0.2)] text-[var(--ap-clay)] transition hover:border-[var(--ap-clay)] disabled:opacity-30"
          >
            <Minus className="h-3.5 w-3.5" />
          </button>
          <span className="w-5 text-center text-[17px] font-semibold tabular-nums md:text-[16px]">{draft.guests}</span>
          <button
            type="button"
            aria-label="More guests"
            disabled={draft.guests >= 8}
            onClick={() => set("guests", Math.min(8, draft.guests + 1))}
            className="grid h-10 w-10 cursor-pointer place-items-center rounded-full border md:h-9 md:w-9 border-[rgba(41,38,31,0.2)] text-[var(--ap-clay)] transition hover:border-[var(--ap-clay)] disabled:opacity-30"
          >
            <Plus className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      <button type="submit" className="ap-btn ap-btn-primary col-span-2 m-1 !min-h-[54px] md:col-span-4 xl:col-span-1 xl:m-0 xl:!min-h-[60px] xl:!px-7">
        Check availability
        <ArrowRight className="ap-arrow h-4 w-4" />
      </button>
    </form>
  );
}
