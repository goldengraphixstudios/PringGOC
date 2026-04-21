"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "@/components/Img";

export interface HouseOfGarmentsCarryItem {
  src: string;
  title: string;
  badge: string;
  subtitle: string;
}

interface Props {
  items: HouseOfGarmentsCarryItem[];
}

export default function HouseOfGarmentsCarryCards({ items }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [phase, setPhase] = useState<"visible" | "exit" | "enter">("visible");
  const enterTimerRef = useRef<number | null>(null);
  const swapTimerRef = useRef<number | null>(null);

  useEffect(() => {
    if (items.length <= 1) return;

    const timer = window.setInterval(() => {
      setPhase("exit");

      swapTimerRef.current = window.setTimeout(() => {
        setActiveIndex((current) => (current + 1) % items.length);
        setPhase("enter");

        enterTimerRef.current = window.setTimeout(() => {
          setPhase("visible");
        }, 70);
      }, 360);
    }, 3000);

    return () => {
      window.clearInterval(timer);
      if (swapTimerRef.current) window.clearTimeout(swapTimerRef.current);
      if (enterTimerRef.current) window.clearTimeout(enterTimerRef.current);
    };
  }, [items.length]);

  const visibleItems = useMemo(() => {
    if (items.length === 0) return [];

    return [
      items[activeIndex % items.length],
      items[(activeIndex + 1) % items.length],
      items[(activeIndex + 2) % items.length],
    ];
  }, [activeIndex, items]);

  return (
    <div className="mx-auto max-w-6xl">
      <div
        className={`grid gap-5 transition-all duration-500 md:grid-cols-3 ${
          phase === "exit"
            ? "translate-x-10 opacity-0"
            : phase === "enter"
              ? "-translate-x-10 opacity-0"
              : "translate-x-0 opacity-100"
        }`}
      >
        {visibleItems.map((item, index) => {
          const isLead = index === 1;

          return (
            <article
              key={`${item.src}-${activeIndex}-${index}`}
              className={`overflow-hidden rounded-[28px] border bg-[#110E04] transition-all duration-700 ${
                isLead
                  ? "border-[#F0C048]/28 shadow-[0_22px_80px_rgba(0,0,0,0.38)] md:-translate-y-3"
                  : "border-[#F0C048]/10 shadow-[0_12px_40px_rgba(0,0,0,0.22)]"
              }`}
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-[#1A1206]">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C0800]/95 via-[#0C0800]/38 to-transparent" />

                <div className="absolute top-4 left-4">
                  <span className="font-body rounded-full border border-[#F0C048]/18 bg-[#F0C048]/10 px-3 py-1 text-[10px] font-bold tracking-[0.16em] text-[#F0C048] uppercase backdrop-blur-sm">
                    {item.badge}
                  </span>
                </div>

                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <h3 className="font-display text-2xl font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="font-body mt-2 text-sm leading-relaxed text-white/58">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <div className="mt-6 flex justify-center gap-2">
        {items.map((item, index) => (
          <button
            key={item.src}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`Show ${item.title}`}
            className="cursor-pointer rounded-full border-0 p-0 transition-all duration-300"
            style={{
              width: index === activeIndex ? 28 : 8,
              height: 8,
              background: index === activeIndex ? "#F0C048" : "rgba(240,192,72,0.22)",
            }}
          />
        ))}
      </div>
    </div>
  );
}
