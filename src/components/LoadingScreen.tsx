"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function LoadingScreen() {
  const [phase, setPhase] = useState<"loading" | "reveal" | "done">("loading");

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPhase("done");
      return;
    }

    const revealTimer = setTimeout(() => setPhase("reveal"), 2000);
    const doneTimer = setTimeout(() => setPhase("done"), 2800);

    return () => {
      clearTimeout(revealTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center transition-all duration-700 ${
        phase === "reveal"
          ? "pointer-events-none scale-105 opacity-0"
          : "opacity-100"
      }`}
      style={{ backgroundColor: "#FDFCFA" }}
    >
      {/* Radial glow */}
      <div
        className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(27,58,92,0.04) 0%, transparent 70%)",
          animationName: "loadingPulse",
          animationDuration: "2.5s",
          animationTimingFunction: "ease-in-out",
          animationIterationCount: "infinite",
        }}
      />

      <div className="relative flex flex-col items-center gap-8">
        {/* Logo */}
        <div
          style={{
            animationName: "logoReveal",
            animationDuration: "0.8s",
            animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
            animationFillMode: "forwards",
          }}
        >
          <Image
            src="/logos/pring-group.png"
            alt="Pring Group"
            width={64}
            height={64}
            className="rounded-lg"
            priority
          />
        </div>

        {/* Brand text */}
        <div
          className="flex flex-col items-center gap-2"
          style={{
            opacity: 0,
            animationName: "fadeInUp",
            animationDuration: "0.6s",
            animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
            animationDelay: "0.3s",
            animationFillMode: "forwards",
          }}
        >
          <span
            className="text-lg font-semibold tracking-[0.2em] text-navy-800"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            PRING GROUP
          </span>
          <span className="text-[11px] tracking-[0.35em] text-navy-700/35 uppercase">
            of Companies
          </span>
        </div>

        {/* Progress line */}
        <div
          className="h-[1.5px] w-24 overflow-hidden rounded-full bg-navy-700/5"
          style={{
            opacity: 0,
            animationName: "fadeInUp",
            animationDuration: "0.5s",
            animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
            animationDelay: "0.5s",
            animationFillMode: "forwards",
          }}
        >
          <div
            className="h-full rounded-full"
            style={{
              background: "linear-gradient(90deg, var(--color-navy-700), var(--color-gold-500), var(--color-navy-700))",
              animationName: "loadingBar",
              animationDuration: "2s",
              animationTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
              animationFillMode: "forwards",
            }}
          />
        </div>
      </div>
    </div>
  );
}
