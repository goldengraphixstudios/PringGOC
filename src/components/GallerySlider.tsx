"use client";

import { useState, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { bp } from "@/lib/basePath";

interface GallerySlide {
  src: string;
  alt: string;
  caption?: string;
}

interface GallerySliderProps {
  slides: GallerySlide[];
  accentColor?: string;
}

export default function GallerySlider({
  slides,
  accentColor = "#C9A84C",
}: GallerySliderProps) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [animating, setAnimating] = useState(false);

  const go = useCallback(
    (next: number, dir: "left" | "right") => {
      if (animating) return;
      setDirection(dir);
      setAnimating(true);
      setTimeout(() => {
        setCurrent(next);
        setAnimating(false);
      }, 380);
    },
    [animating],
  );

  const prev = useCallback(() => {
    go((current - 1 + slides.length) % slides.length, "left");
  }, [current, slides.length, go]);

  const next = useCallback(() => {
    go((current + 1) % slides.length, "right");
  }, [current, slides.length, go]);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [prev, next]);

  const exitClass =
    direction === "right" ? "slide-exit-left" : "slide-exit-right";
  const enterClass =
    direction === "right" ? "slide-enter-right" : "slide-enter-left";

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes slideFromRight {
          from { opacity: 0; transform: translateX(60px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideFromLeft {
          from { opacity: 0; transform: translateX(-60px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideToLeft {
          from { opacity: 1; transform: translateX(0); }
          to   { opacity: 0; transform: translateX(-60px); }
        }
        @keyframes slideToRight {
          from { opacity: 1; transform: translateX(0); }
          to   { opacity: 0; transform: translateX(60px); }
        }
        .slide-enter-right { animation: slideFromRight 0.38s cubic-bezier(0.16,1,0.3,1) forwards; }
        .slide-enter-left  { animation: slideFromLeft  0.38s cubic-bezier(0.16,1,0.3,1) forwards; }
        .slide-exit-left   { animation: slideToLeft    0.38s cubic-bezier(0.16,1,0.3,1) forwards; }
        .slide-exit-right  { animation: slideToRight   0.38s cubic-bezier(0.16,1,0.3,1) forwards; }
        .gallery-arrow {
          transition: all 0.25s cubic-bezier(0.16,1,0.3,1);
        }
        .gallery-arrow:hover {
          transform: scale(1.08);
        }
        .gallery-arrow:active {
          transform: scale(0.95);
        }
        .gallery-dot {
          transition: all 0.3s cubic-bezier(0.16,1,0.3,1);
        }
      `}} />

      <div className="relative w-full select-none">
        {/* ── Main slide area ── */}
        <div className="relative overflow-hidden rounded-2xl" style={{ aspectRatio: "16/9" }}>
          {/* Exiting slide */}
          {animating && (
            <div className={`absolute inset-0 ${exitClass}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={bp(slides[current].src)}
                alt={slides[current].alt}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            </div>
          )}

          {/* Entering / current slide */}
          <div
            key={current}
            className={`absolute inset-0 ${animating ? enterClass : ""}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={bp(slides[animating ? (direction === "right"
                  ? (current + 1) % slides.length
                  : (current - 1 + slides.length) % slides.length
                ) : current].src)}
              alt={slides[current].alt}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 px-6 pb-5">
              <p
                className="font-display text-base font-semibold text-white drop-shadow"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                {slides[animating
                    ? (direction === "right"
                        ? (current + 1) % slides.length
                        : (current - 1 + slides.length) % slides.length)
                    : current].alt}
              </p>
              {slides[current].caption && (
                <p className="mt-0.5 text-xs text-white/50">
                  {slides[current].caption}
                </p>
              )}
            </div>

            {/* Counter */}
            <div
              className="absolute top-4 right-4 rounded-full px-3 py-1 text-xs font-bold backdrop-blur-md"
              style={{
                background: "rgba(0,0,0,0.55)",
                color: accentColor,
                border: `1px solid ${accentColor}30`,
              }}
            >
              {(animating
                ? direction === "right"
                  ? (current + 1) % slides.length
                  : (current - 1 + slides.length) % slides.length
                : current) + 1}{" "}
              / {slides.length}
            </div>
          </div>

          {/* Left arrow */}
          <button
            onClick={prev}
            aria-label="Previous"
            className="gallery-arrow absolute left-3 top-1/2 -translate-y-1/2 z-10 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full backdrop-blur-md"
            style={{
              background: "rgba(0,0,0,0.55)",
              border: `1px solid ${accentColor}25`,
            }}
          >
            <ChevronLeft className="h-5 w-5" style={{ color: accentColor }} />
          </button>

          {/* Right arrow */}
          <button
            onClick={next}
            aria-label="Next"
            className="gallery-arrow absolute right-3 top-1/2 -translate-y-1/2 z-10 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full backdrop-blur-md"
            style={{
              background: "rgba(0,0,0,0.55)",
              border: `1px solid ${accentColor}25`,
            }}
          >
            <ChevronRight className="h-5 w-5" style={{ color: accentColor }} />
          </button>
        </div>

        {/* ── Thumbnail strip ── */}
        <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
          {slides.map((slide, i) => (
            <button
              key={i}
              onClick={() => go(i, i > current ? "right" : "left")}
              aria-label={`Go to ${slide.alt}`}
              className="relative shrink-0 overflow-hidden rounded-lg transition-all duration-300 cursor-pointer"
              style={{
                width: "80px",
                height: "54px",
                outline: i === current ? `2px solid ${accentColor}` : "2px solid transparent",
                outlineOffset: "2px",
                opacity: i === current ? 1 : 0.45,
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={bp(slide.src)}
                alt={slide.alt}
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>

        {/* ── Dot indicators ── */}
        <div className="mt-4 flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i, i > current ? "right" : "left")}
              aria-label={`Slide ${i + 1}`}
              className="gallery-dot cursor-pointer rounded-full"
              style={{
                width: i === current ? "24px" : "6px",
                height: "6px",
                background: i === current ? accentColor : `${accentColor}30`,
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
}
