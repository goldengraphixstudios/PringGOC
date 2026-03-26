"use client";

import { useEffect, useRef } from "react";
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
  const track1 = useRef<HTMLDivElement>(null);
  const track2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf: number;
    let pos1 = 0;
    let pos2 = 0;

    const speed = 0.5; // px per frame (~30px/s → full loop in ~60s for typical content width)

    function tick() {
      if (track1.current && track2.current) {
        const w1 = track1.current.scrollWidth / 3;
        const w2 = track2.current.scrollWidth / 3;

        pos1 -= speed;
        pos2 += speed;

        if (pos1 <= -w1) pos1 = 0;
        if (pos2 >= 0) pos2 = -w2;

        track1.current.style.transform = `translateX(${pos1}px)`;
        track2.current.style.transform = `translateX(${pos2}px)`;
      }
      raf = requestAnimationFrame(tick);
    }

    // Start row2 offset
    if (track2.current) {
      const w2 = track2.current.scrollWidth / 3;
      pos2 = -w2;
    }

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

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
    <section className="relative z-10 overflow-hidden border-y border-black/[0.04] bg-warm-100/50 py-5">
      <div className="mb-3 overflow-hidden">
        <div ref={track1} className="flex w-max items-center gap-5">
          {renderItems([...row1, ...row1, ...row1], "r1")}
        </div>
      </div>
      <div className="overflow-hidden">
        <div ref={track2} className="flex w-max items-center gap-5">
          {renderItems([...row2, ...row2, ...row2], "r2")}
        </div>
      </div>
    </section>
  );
}
