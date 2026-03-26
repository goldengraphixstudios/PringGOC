"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

interface LogoItem {
  slug: string;
  name: string;
  logo: string;
}

interface LogoMarqueeProps {
  logos: LogoItem[];
  speed?: number;
  className?: string;
  direction?: "left" | "right";
  showNames?: boolean;
}

export default function LogoMarquee({
  logos,
  speed = 1,
  className = "",
  direction = "left",
  showNames = true,
}: LogoMarqueeProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const posRef = useRef(0);
  const pausedRef = useRef(false);

  // Triple the logos for seamless looping
  const items = [...logos, ...logos, ...logos];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Get 1/3 of track width (one set of logos)
    const getResetWidth = () => track.scrollWidth / 3;

    // Initialize position for right-scrolling
    if (direction === "right") {
      posRef.current = -getResetWidth();
      track.style.transform = `translate3d(${posRef.current}px, 0, 0)`;
    }

    let animId: number;

    const step = () => {
      if (!pausedRef.current) {
        const resetWidth = getResetWidth();

        if (direction === "right") {
          posRef.current += speed;
          if (posRef.current >= 0) {
            posRef.current = -resetWidth;
          }
        } else {
          posRef.current -= speed;
          if (posRef.current <= -resetWidth) {
            posRef.current = 0;
          }
        }

        track.style.transform = `translate3d(${posRef.current}px, 0, 0)`;
      }
      animId = requestAnimationFrame(step);
    };

    animId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animId);
  }, [speed, direction]);

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      aria-label="Business logos"
    >
      {/* Edge fades */}
      <div className="pointer-events-none absolute top-0 bottom-0 left-0 z-10 w-16 bg-gradient-to-r from-warm-50 to-transparent" />
      <div className="pointer-events-none absolute top-0 right-0 bottom-0 z-10 w-16 bg-gradient-to-l from-warm-50 to-transparent" />

      <div
        ref={trackRef}
        className="flex w-max items-center whitespace-nowrap"
        style={{ gap: showNames ? "2rem" : "1.5rem" }}
        onMouseEnter={() => { pausedRef.current = true; }}
        onMouseLeave={() => { pausedRef.current = false; }}
      >
        {items.map((logo, i) => (
          <Link
            key={`${logo.slug}-${i}`}
            href={`/business/${logo.slug}`}
            className="flex shrink-0 cursor-pointer items-center gap-2.5 rounded-xl px-3 py-2 opacity-80 transition-all duration-300 hover:bg-navy-700/[0.03] hover:opacity-100"
          >
            <Image
              src={logo.logo}
              alt={logo.name}
              width={36}
              height={36}
              className="h-9 w-9 rounded-lg object-contain"
            />
            {showNames && (
              <span className="text-sm font-medium text-navy-800/80">
                {logo.name}
              </span>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
