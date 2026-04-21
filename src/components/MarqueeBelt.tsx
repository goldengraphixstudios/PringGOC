"use client";

import { useState } from "react";
import Image from "@/components/Img";
import Link from "next/link";

interface Business {
  slug: string;
  name: string;
  logo: string;
}

export default function MarqueeBelt({
  row1,
  row2,
}: {
  row1: Business[];
  row2: Business[];
}) {
  const [hovered, setHovered] = useState(false);

  const renderItems = (items: Business[], prefix: string) =>
    items.map((biz, i) => (
      <Link
        key={`${prefix}-${biz.slug}-${i}`}
        href={`/business/${biz.slug}`}
        className="flex shrink-0 cursor-pointer items-center gap-2.5 rounded-xl border border-transparent px-3.5 py-2 opacity-70 transition-all duration-200 hover:border-gold-500/15 hover:bg-white/60 hover:opacity-100"
      >
        <Image
          src={biz.logo}
          alt={biz.name}
          width={36}
          height={36}
          className="h-9 w-9 rounded-lg object-contain"
        />
        <span className="whitespace-nowrap text-sm font-medium text-navy-800/75">
          {biz.name}
        </span>
      </Link>
    ));

  return (
    <section
      className="relative z-10 overflow-hidden border-y border-black/[0.04] bg-warm-100/50 py-5"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes pgc-marquee-left {
              from { transform: translate3d(0, 0, 0); }
              to { transform: translate3d(-50%, 0, 0); }
            }
            @keyframes pgc-marquee-right {
              from { transform: translate3d(-50%, 0, 0); }
              to { transform: translate3d(0, 0, 0); }
            }
          `,
        }}
      />
      <div className="mb-3 overflow-hidden">
        <div
          className="flex w-max items-center gap-5 will-change-transform"
          style={{
            animation: `pgc-marquee-left ${Math.max(26, row1.length * 4.8)}s linear infinite`,
            animationPlayState: hovered ? "paused" : "running",
          }}
        >
          {renderItems([...row1, ...row1], "r1")}
        </div>
      </div>
      <div className="overflow-hidden">
        <div
          className="flex w-max items-center gap-5 will-change-transform"
          style={{
            animation: `pgc-marquee-right ${Math.max(28, row2.length * 5.2)}s linear infinite`,
            animationPlayState: hovered ? "paused" : "running",
          }}
        >
          {renderItems([...row2, ...row2], "r2")}
        </div>
      </div>
    </section>
  );
}
