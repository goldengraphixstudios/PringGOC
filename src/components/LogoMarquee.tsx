"use client";

import Image from "@/components/Img";
import Link from "next/link";
import { useState } from "react";

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
  const [hovered, setHovered] = useState(false);

  const items = [...logos, ...logos];
  const duration = Math.max(20, logos.length * 5 / Math.max(speed, 0.25));

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      aria-label="Business logos"
    >
      {/* Edge fades */}
      <div className="pointer-events-none absolute top-0 bottom-0 left-0 z-10 w-16 bg-gradient-to-r from-warm-50 to-transparent" />
      <div className="pointer-events-none absolute top-0 right-0 bottom-0 z-10 w-16 bg-gradient-to-l from-warm-50 to-transparent" />

      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes pgc-logo-marquee-left {
              from { transform: translate3d(0, 0, 0); }
              to { transform: translate3d(-50%, 0, 0); }
            }
            @keyframes pgc-logo-marquee-right {
              from { transform: translate3d(-50%, 0, 0); }
              to { transform: translate3d(0, 0, 0); }
            }
          `,
        }}
      />

      <div
        className="flex w-max items-center whitespace-nowrap will-change-transform"
        style={{
          gap: showNames ? "2rem" : "1.5rem",
          animation: `${direction === "right" ? "pgc-logo-marquee-right" : "pgc-logo-marquee-left"} ${duration}s linear infinite`,
          animationPlayState: hovered ? "paused" : "running",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
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
