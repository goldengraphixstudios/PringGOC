"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { bp } from "@/lib/basePath";

export interface Slide {
  src: string;
  alt: string;
  place: string;
  label: string;
}

const INTERVAL = 5000;

/**
 * Story-style slideshow: segmented progress bars, crossfade with a slow zoom,
 * swipe on touch, arrow keys when focused, pauses on hover, off-screen, hidden tab
 * or reduced motion.
 */
export default function Slideshow({ slides, className = "" }: { slides: Slide[]; className?: string }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false); // user toggle
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);
  const [reduced, setReduced] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const touchX = useRef<number | null>(null);
  const total = slides.length;

  const go = useCallback((dir: number) => setIndex((i) => (i + dir + total) % total), [total]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.35 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const running = visible && !paused && !hovered && !reduced;

  // Timer that survives pauses: it resumes with the time that was left, in step with the progress bar.
  const remaining = useRef(INTERVAL);
  useEffect(() => {
    remaining.current = INTERVAL;
  }, [index]);
  useEffect(() => {
    if (!running) return;
    const startedAt = Date.now();
    const t = window.setTimeout(() => go(1), remaining.current);
    return () => {
      window.clearTimeout(t);
      remaining.current = Math.max(0, remaining.current - (Date.now() - startedAt));
    };
  }, [running, index, go]);

  // Warm the next image so the crossfade never shows a blank frame
  useEffect(() => {
    const next = slides[(index + 1) % total];
    const img = new Image();
    img.src = bp(next.src);
  }, [index, slides, total]);

  const slide = slides[index];

  return (
    <div
      ref={rootRef}
      className={`ap-slideshow group relative h-full overflow-hidden bg-[var(--ap-sand-deep)] ${className}`}
      role="region"
      aria-roledescription="carousel"
      aria-label="Photos from our units"
      tabIndex={0}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") go(1);
        if (e.key === "ArrowLeft") go(-1);
      }}
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
        touchX.current = null;
      }}
    >
      {slides.map((s, i) => (
        <div
          key={s.src}
          className="ap-slide absolute inset-0"
          data-active={i === index}
          aria-hidden={i !== index}
          role="group"
          aria-roledescription="slide"
          aria-label={`${i + 1} of ${total}`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={bp(s.src)}
            alt={s.alt}
            loading={i < 2 ? "eager" : "lazy"}
            draggable={false}
            className="h-full w-full object-cover select-none"
          />
        </div>
      ))}

      {/* legibility gradients */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[rgba(41,38,31,0.45)] to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[rgba(41,38,31,0.6)] to-transparent" />

      {/* segmented progress */}
      <div className="absolute inset-x-4 top-3 flex gap-1.5 sm:inset-x-5 sm:top-4">
        {slides.map((s, i) => (
          <button
            key={s.src}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Show photo ${i + 1}: ${s.label}, ${s.place}`}
            aria-current={i === index}
            className="group/seg relative h-8 flex-1 cursor-pointer"
          >
            <span className="absolute inset-x-0 top-1/2 h-[3px] -translate-y-1/2 overflow-hidden rounded-full bg-[rgba(251,246,242,0.35)]">
              <span
                key={i === index ? `current-${index}` : `other-${i}`}
                className="ap-seg-fill absolute inset-y-0 left-0 rounded-full bg-[var(--ap-paper)]"
                data-state={i < index ? "done" : i === index ? "current" : "todo"}
                style={{ animationDuration: `${INTERVAL}ms`, animationPlayState: running ? "running" : "paused" }}
              />
            </span>
          </button>
        ))}
      </div>

      {/* caption */}
      <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-3 sm:inset-x-5 sm:bottom-5">
        <div key={slide.src} className="ap-rise min-w-0 text-[var(--ap-paper)]" style={{ animationDuration: "0.6s" }} aria-live={running ? "off" : "polite"}>
          <p className="mb-1 text-[11.5px] font-bold tracking-[0.22em] text-[rgba(251,246,242,0.85)] uppercase sm:text-[12px]">{slide.place}</p>
          <p className="ap-display text-[1.25rem] leading-[1.1] text-balance text-[var(--ap-paper)] sm:text-[1.6rem]">{slide.label}</p>
        </div>
        <div className="flex shrink-0 items-center gap-1.5">
          <button
            type="button"
            onClick={() => setPaused((p) => !p)}
            aria-label={paused ? "Play slideshow" : "Pause slideshow"}
            className="grid h-10 w-10 cursor-pointer place-items-center rounded-full bg-[rgba(251,246,242,0.18)] text-[var(--ap-paper)] backdrop-blur-md transition hover:bg-[rgba(251,246,242,0.3)]"
          >
            {paused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
          </button>
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous photo"
            className="grid h-10 w-10 cursor-pointer place-items-center rounded-full bg-[rgba(251,246,242,0.18)] text-[var(--ap-paper)] backdrop-blur-md transition hover:bg-[rgba(251,246,242,0.3)]"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next photo"
            className="grid h-10 w-10 cursor-pointer place-items-center rounded-full bg-[var(--ap-paper)] text-[var(--ap-ink)] transition hover:scale-105"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
