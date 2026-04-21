"use client";

import { useEffect, useState } from "react";
import { X, ArrowRight, MapPin, Clock } from "lucide-react";
import Image from "@/components/Img";

const STORAGE_KEY = "popup-rfg-auction-house";
const DELAY_MS = 2000;

export default function RFGAuctionPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!sessionStorage.getItem(STORAGE_KEY)) {
      const t = setTimeout(() => setVisible(true), DELAY_MS);
      return () => clearTimeout(t);
    }
  }, []);

  function dismiss() {
    sessionStorage.setItem(STORAGE_KEY, "1");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center px-4"
      style={{ backgroundColor: "rgba(2,1,10,0.82)", backdropFilter: "blur(10px)" }}
      onClick={dismiss}
    >
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes rfgPopReveal {
          from { opacity: 0; transform: scale(0.88) translateY(32px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes rfgTopBar {
          0%   { background-position: 0% center; }
          100% { background-position: 300% center; }
        }
        @keyframes rfgLiveDot {
          0%, 100% { opacity: 1; box-shadow: 0 0 0 0 rgba(255,122,26,0.7); }
          60%       { opacity: 0.6; box-shadow: 0 0 0 6px rgba(255,122,26,0); }
        }
        @keyframes rfgIconFloat {
          0%, 100% { transform: translateY(0px) scale(1); }
          50%       { transform: translateY(-5px) scale(1.03); }
        }
        @keyframes rfgGlowPulse {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50%       { opacity: 0.85; transform: scale(1.12); }
        }
        @keyframes rfgShimmer {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
      `}} />

      {/* ── Card ── */}
      <div
        className="relative w-full overflow-hidden"
        style={{
          maxWidth: "22rem",
          borderRadius: "28px",
          background: "#0B0620",
          boxShadow: "0 32px 80px rgba(2,1,10,0.85), 0 0 0 1px rgba(124,58,237,0.18), 0 0 60px rgba(124,58,237,0.08)",
          animation: "rfgPopReveal 0.45s cubic-bezier(0.16,1,0.3,1) both",
        }}
        onClick={(e) => e.stopPropagation()}
      >

        {/* ── ANIMATED TOP LINE ─────────────────────────────────────── */}
        <div
          style={{
            height: "2.5px",
            background: "linear-gradient(90deg, #7C3AED, #E8650A, #F59E0B, #E8650A, #7C3AED)",
            backgroundSize: "300% 100%",
            animation: "rfgTopBar 3s linear infinite",
          }}
        />

        {/* ── HEADER ZONE ───────────────────────────────────────────── */}
        <div
          className="relative flex flex-col items-center justify-center px-6 pt-7 pb-5 overflow-hidden"
          style={{
            background: "linear-gradient(160deg, #0F0828 0%, #1C0B40 45%, #360E00 100%)",
            minHeight: "148px",
          }}
        >
          {/* Radial glow behind icon */}
          <div
            className="pointer-events-none absolute"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -60%)",
              width: "200px",
              height: "200px",
              background: "radial-gradient(circle, rgba(232,101,10,0.22) 0%, rgba(124,58,237,0.12) 45%, transparent 70%)",
              filter: "blur(18px)",
              animation: "rfgGlowPulse 3.5s ease-in-out infinite",
            }}
          />

          {/* Shimmer sweep */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background: "linear-gradient(105deg, transparent 25%, rgba(255,255,255,0.045) 50%, transparent 75%)",
              backgroundSize: "200% 100%",
              animation: "rfgShimmer 3s linear infinite",
            }}
          />

          {/* Close */}
          <button
            onClick={dismiss}
            className="absolute top-3 right-3 flex h-7 w-7 cursor-pointer items-center justify-center rounded-full transition-all hover:bg-white/10"
            style={{ background: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.45)" }}
            aria-label="Close"
          >
            <X className="h-3.5 w-3.5" />
          </button>

          {/* RFG Logo */}
          <div style={{ animation: "rfgIconFloat 3.8s ease-in-out infinite" }} className="mb-3 relative">
            {/* glow ring */}
            <div
              className="absolute -inset-3 rounded-[1.6rem]"
              style={{
                background: "radial-gradient(circle, rgba(232,101,10,0.3) 0%, rgba(124,58,237,0.12) 55%, transparent 75%)",
                filter: "blur(10px)",
              }}
            />
            <div
              className="relative flex h-[4.5rem] w-[4.5rem] items-center justify-center overflow-hidden rounded-[1.35rem] bg-white shadow-xl"
              style={{ border: "1px solid rgba(255,255,255,0.2)" }}
            >
              <Image
                src="/logos/rfg-auction.jpg"
                alt="RFG Auction House"
                width={72}
                height={72}
                className="h-full w-full object-contain p-1"
              />
            </div>
          </div>

          {/* Live badge */}
          <div
            className="flex items-center gap-2 rounded-full px-3.5 py-1"
            style={{
              background: "rgba(232,101,10,0.15)",
              border: "1px solid rgba(232,101,10,0.35)",
            }}
          >
            <span
              className="h-2 w-2 rounded-full"
              style={{
                background: "#FF7A1A",
                animation: "rfgLiveDot 1.8s ease-in-out infinite",
              }}
            />
            <span
              className="text-[10px] font-bold tracking-[0.2em] uppercase"
              style={{ color: "#FF9A50" }}
            >
              Live Auction Alert
            </span>
          </div>
        </div>

        {/* ── BODY ──────────────────────────────────────────────────── */}
        <div className="px-6 pt-5 pb-6">

          {/* Eyebrow */}
          <p
            className="mb-1.5 text-[10px] font-bold tracking-[0.25em] uppercase"
            style={{ color: "#A78BFA" }}
          >
            Next Auction
          </p>

          {/* Headline */}
          <h2
            className="mb-4 text-[1.28rem] font-extrabold leading-snug"
            style={{ color: "#F5F3FF" }}
          >
            Ready for the next round of bidding?
          </h2>

          {/* Schedule card */}
          <div
            className="mb-4 rounded-xl px-4 py-3"
            style={{
              background: "#150D35",
              border: "1px solid rgba(124,58,237,0.2)",
            }}
          >
            <div className="flex items-start gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0" style={{ color: "#E8650A" }} />
              <div className="space-y-1">
                <p className="text-[12px] font-semibold" style={{ color: "#F5F3FF" }}>
                  Cabuyao — <span style={{ color: "#F59E0B" }}>Every Saturday, 10AM</span>
                </p>
                <p className="text-[12px] font-semibold" style={{ color: "#F5F3FF" }}>
                  Bulacan & Davao — <span style={{ color: "#F59E0B" }}>Every Friday, 10AM</span>
                </p>
              </div>
            </div>
          </div>

          {/* Branch chips */}
          <div className="mb-4 flex flex-wrap gap-1.5">
            {["Cabuyao", "Bulacan", "Davao"].map((branch) => (
              <span
                key={branch}
                className="flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[10.5px] font-semibold"
                style={{
                  background: "rgba(124,58,237,0.1)",
                  border: "1px solid rgba(124,58,237,0.25)",
                  color: "#C4B5FD",
                }}
              >
                <MapPin className="h-2.5 w-2.5" />
                {branch}
              </span>
            ))}
          </div>

          {/* Body copy */}
          <p
            className="mb-5 text-[12.5px] leading-[1.65]"
            style={{ color: "rgba(196,181,253,0.55)" }}
          >
            UK &amp; Japan imports, brand-new items, and wholesale lots across three branches — prepare before the best pieces are taken.
          </p>

          {/* CTA */}
          <a
            href="#schedule"
            onClick={dismiss}
            className="group flex w-full cursor-pointer items-center justify-center gap-2 rounded-full py-3.5 text-sm font-bold text-white transition-all duration-200 hover:opacity-90 active:scale-[0.97]"
            style={{
              background: "linear-gradient(135deg, #B85010 0%, #E8650A 50%, #F59E0B 100%)",
              boxShadow: "0 6px 28px rgba(232,101,10,0.38)",
            }}
          >
            View Auction Schedule
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
          </a>

          {/* Skip */}
          <a
            href="#categories"
            onClick={dismiss}
            className="mt-3 block w-full cursor-pointer text-center text-[11px] underline underline-offset-2 transition-opacity hover:opacity-80"
            style={{ color: "rgba(124,58,237,0.5)" }}
          >
            Explore page first
          </a>
        </div>
      </div>
    </div>
  );
}
