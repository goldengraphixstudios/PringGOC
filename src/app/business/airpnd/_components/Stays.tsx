"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, Images, MapPin, X } from "lucide-react";
import { bp } from "@/lib/basePath";
import { stays, type Stay } from "../stays";
import { useInquiry } from "./Inquiry";

type Filter = "all" | "Santa Rosa" | "Cabuyao";

const filters: { id: Filter; label: string }[] = [
  { id: "all", label: "All stays" },
  { id: "Santa Rosa", label: "Santa Rosa" },
  { id: "Cabuyao", label: "Cabuyao" },
];

export default function Stays() {
  const [filter, setFilter] = useState<Filter>("all");
  const [lightbox, setLightbox] = useState<{ stay: Stay; index: number } | null>(null);

  const count = (f: Filter) => (f === "all" ? stays.length : stays.filter((s) => s.city === f).length);

  return (
    <>
      <div className="-mx-5 mb-10 flex gap-2.5 overflow-x-auto px-5 [scrollbar-width:none] sm:mx-0 sm:mb-14 sm:flex-wrap sm:overflow-visible sm:px-0 [&::-webkit-scrollbar]:hidden" role="group" aria-label="Filter stays by city">
        {filters.map((f) => (
          <button key={f.id} type="button" className="ap-chip shrink-0" aria-pressed={filter === f.id} onClick={() => setFilter(f.id)}>
            {f.label}
            <span className="ap-chip-count">{count(f.id)}</span>
          </button>
        ))}
      </div>

      <div className="grid gap-20 md:gap-28">
        {stays.map((stay, i) => (
          <StayRow
            key={stay.id}
            stay={stay}
            index={i}
            hidden={filter !== "all" && stay.city !== filter}
            onOpen={(index) => setLightbox({ stay, index })}
          />
        ))}
      </div>

      {lightbox ? (
        <Lightbox stay={lightbox.stay} start={lightbox.index} onClose={() => setLightbox(null)} />
      ) : null}
    </>
  );
}

function StayRow({
  stay,
  index,
  hidden,
  onOpen,
}: {
  stay: Stay;
  index: number;
  hidden: boolean;
  onOpen: (index: number) => void;
}) {
  const { open } = useInquiry();
  const flip = index % 2 === 1;
  const [a, b, c] = stay.photos;
  const extra = stay.photos.length - 3;

  return (
    <article
      id={`stay-${stay.id}`}
      className="ap-stay grid scroll-mt-24 items-center gap-8 sm:gap-10 lg:grid-cols-12 lg:gap-14"
      data-hidden={hidden}
      aria-labelledby={`stay-${stay.id}-title`}
    >
      {/* Photos, phones: a swipeable strip of every photo */}
      <SwipeGallery stay={stay} onOpen={onOpen} />

      {/* Photos, tablet and up: arch + two squares */}
      <div className={`hidden grid-cols-[1.35fr_1fr] gap-3 sm:grid sm:gap-4 lg:col-span-7 ${flip ? "lg:order-2" : ""}`}>
        <button
          type="button"
          className="ap-photo-btn ap-arch row-span-2 aspect-[3/4] bg-[var(--ap-sand)]"
          onClick={() => onOpen(0)}
          aria-label={`Open ${stay.name} photos: ${a.alt}`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={bp(a.src)} alt={a.alt} loading="lazy" className="h-full w-full object-cover" />
        </button>
        <button
          type="button"
          className="ap-photo-btn aspect-square rounded-[22px] bg-[var(--ap-sand)]"
          onClick={() => onOpen(1)}
          aria-label={`Open ${stay.name} photos: ${b.alt}`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={bp(b.src)} alt={b.alt} loading="lazy" className="h-full w-full object-cover" />
        </button>
        <button
          type="button"
          className="ap-photo-btn aspect-square rounded-[22px] bg-[var(--ap-sand)]"
          onClick={() => onOpen(2)}
          aria-label={`Open all ${stay.photos.length} ${stay.name} photos`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={bp(c.src)} alt={c.alt} loading="lazy" className="h-full w-full object-cover" />
          {extra > 0 ? (
            <span className="absolute inset-0 grid place-items-center bg-[rgba(41,38,31,0.42)] text-[var(--ap-paper)] transition hover:bg-[rgba(41,38,31,0.55)]">
              <span className="flex flex-col items-center gap-1">
                <span className="ap-display text-[2.4rem] leading-none text-[var(--ap-paper)]">+{extra}</span>
                <span className="text-[13px] font-bold tracking-[0.14em] uppercase">photos</span>
              </span>
            </span>
          ) : null}
        </button>
      </div>

      {/* Details */}
      <div className={`lg:col-span-5 ${flip ? "lg:order-1" : ""}`}>
        <div className="mb-4 flex items-end gap-4 sm:mb-6 sm:gap-5">
          <span className="ap-house-no" aria-hidden="true">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div className="pb-1">
            <p className="flex items-center gap-1.5 text-[15px] font-semibold text-[var(--ap-sage-deep)]">
              <MapPin className="h-4 w-4" />
              {stay.city}, Laguna
            </p>
          </div>
        </div>

        <h3 id={`stay-${stay.id}-title`} className="ap-display ap-h2 mb-4 sm:mb-5">
          {stay.name}
        </h3>
        <p className="ap-lede mb-7 max-w-[34rem]">{stay.blurb}</p>

        <div className="mb-7 flex items-baseline gap-3 border-y border-[rgba(41,38,31,0.12)] py-5">
          <span className="ap-display text-[3rem] leading-none text-[var(--ap-clay)]">{stay.units}</span>
          <span className="text-[17px] font-semibold text-[var(--ap-ink)]">{stay.unitType.toLowerCase()}</span>
        </div>

        <ul className="mb-8 grid grid-cols-1 gap-x-5 gap-y-3 min-[400px]:grid-cols-2 sm:mb-9">
          {stay.features.map((f) => (
            <li key={f} className="flex items-center gap-3 text-[15.5px] font-medium text-[var(--ap-ink)]">
              <span className="h-2 w-2 shrink-0 rounded-full bg-[var(--ap-clay)]" aria-hidden="true" />
              {f}
            </li>
          ))}
        </ul>

        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <button type="button" className="ap-btn ap-btn-primary w-full sm:w-auto" onClick={() => open({ stay: stay.id })}>
            Ask about {stay.name}
            <ArrowRight className="ap-arrow h-4 w-4" />
          </button>
          <div className="grid grid-cols-2 gap-3 sm:contents">
            <button type="button" className="ap-btn ap-btn-ghost w-full sm:w-auto" onClick={() => onOpen(0)}>
              <Images className="h-4 w-4" />
              {stay.photos.length} photos
            </button>
            <button
              type="button"
              className="ap-btn ap-btn-ghost w-full sm:w-auto"
              onClick={() => window.dispatchEvent(new CustomEvent("ap:map", { detail: stay.id }))}
            >
              <MapPin className="h-4 w-4" />
              Map
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

function SwipeGallery({ stay, onOpen }: { stay: Stay; onOpen: (index: number) => void }) {
  const [current, setCurrent] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setCurrent(Number((e.target as HTMLElement).dataset.i));
      },
      { root: track, threshold: 0.6 },
    );
    Array.from(track.children).forEach((c) => io.observe(c));
    return () => io.disconnect();
  }, []);

  return (
    <div className="-mx-5 sm:hidden">
      <div ref={trackRef} className="ap-swipe px-5" aria-label={`${stay.name} photos, swipe to see more`}>
        {stay.photos.map((p, i) => (
          <button
            key={p.src}
            data-i={i}
            type="button"
            onClick={() => onOpen(i)}
            aria-label={`Open ${stay.name} photo ${i + 1} of ${stay.photos.length}: ${p.alt}`}
            className={`ap-photo-btn aspect-[4/5] bg-[var(--ap-sand)] ${i === 0 ? "ap-arch" : "rounded-[22px]"}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={bp(p.src)} alt={p.alt} loading="lazy" className="h-full w-full object-cover" />
          </button>
        ))}
      </div>
      <div className="mt-4 flex items-center justify-center gap-1.5" aria-hidden="true">
        {stay.photos.map((p, i) => (
          <span
            key={p.src}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === current ? "w-6 bg-[var(--ap-clay)]" : "w-1.5 bg-[rgba(126,122,93,0.4)]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function Lightbox({ stay, start, onClose }: { stay: Stay; start: number; onClose: () => void }) {
  const [index, setIndex] = useState(start);
  const total = stay.photos.length;
  const closeRef = useRef<HTMLButtonElement>(null);
  const touchX = useRef<number | null>(null);

  const go = useCallback((dir: number) => setIndex((i) => (i + dir + total) % total), [total]);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [go, onClose]);

  const photo = stay.photos[index];

  return (
    <div className="ap-lightbox" role="dialog" aria-modal="true" aria-label={`${stay.name} photos`}>
      <div className="flex items-center justify-between px-4 pt-[max(1rem,env(safe-area-inset-top))] pb-3 text-[var(--ap-paper)] sm:px-8 sm:py-4">
        <div>
          <p className="ap-display text-[1.5rem] leading-tight text-[var(--ap-paper)]">{stay.name}</p>
          <p className="text-[14px] text-[rgba(251,246,242,0.7)]">
            {index + 1} of {total}
          </p>
        </div>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close photos"
          className="grid h-12 w-12 cursor-pointer place-items-center rounded-full bg-[rgba(251,246,242,0.1)] transition hover:bg-[rgba(251,246,242,0.2)]"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <div
        className="relative flex min-h-0 flex-1 touch-pan-y items-center justify-center px-2 sm:px-20"
        onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
        onTouchEnd={(e) => {
          if (touchX.current === null) return;
          const dx = e.changedTouches[0].clientX - touchX.current;
          if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
          touchX.current = null;
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          key={photo.src}
          src={bp(photo.src)}
          alt={photo.alt}
          className="ap-rise max-h-full max-w-full rounded-[14px] object-contain select-none sm:rounded-[18px]"
          draggable={false}
          style={{ animationDuration: "0.5s" }}
        />
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous photo"
          className="absolute left-3 grid h-11 w-11 cursor-pointer place-items-center rounded-full bg-[rgba(251,246,242,0.92)] text-[var(--ap-ink)] shadow-lg transition active:scale-95 sm:left-6 sm:h-12 sm:w-12"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next photo"
          className="absolute right-3 grid h-11 w-11 cursor-pointer place-items-center rounded-full bg-[rgba(251,246,242,0.92)] text-[var(--ap-ink)] shadow-lg transition active:scale-95 sm:right-6 sm:h-12 sm:w-12"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <p className="ap-lightbox-extra px-6 pt-3 text-center text-[14.5px] leading-snug text-[rgba(251,246,242,0.85)] sm:pt-4 sm:text-[15px]">{photo.alt}</p>
      <div className="ap-lightbox-extra overflow-x-auto px-4 pt-4 pb-[max(1.25rem,env(safe-area-inset-bottom))] [scrollbar-width:none] sm:px-5 [&::-webkit-scrollbar]:hidden">
        <div className="mx-auto flex w-max gap-2">
        {stay.photos.map((p, i) => (
          <button
            key={p.src}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Show photo ${i + 1}`}
            aria-current={i === index}
            className={`h-14 w-14 shrink-0 cursor-pointer overflow-hidden rounded-[12px] transition ${
              i === index ? "opacity-100 ring-2 ring-[var(--ap-clay)] ring-offset-2 ring-offset-[#1e1b15]" : "opacity-45 hover:opacity-80"
            }`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={bp(p.src)} alt="" className="h-full w-full object-cover" />
          </button>
        ))}
        </div>
      </div>
    </div>
  );
}
