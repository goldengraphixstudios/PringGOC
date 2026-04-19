"use client";

import { useEffect, useState } from "react";
import { X, ArrowRight } from "lucide-react";
import Popup3DIcon from "@/components/Popup3DIcon";
import Image from "@/components/Img";

export interface BusinessPopupConfig {
  /** sessionStorage key — unique per page */
  storageKey: string;
  /** delay in ms before showing */
  delay: number;

  /** header section gradient/color */
  headerBg: string;
  /** semantic icon token or legacy emoji token */
  headerIcon: string;
  /** optional sub-label inside header */
  headerLabel?: string;
  headerLabelColor?: string;

  /** card body background */
  modalBg: string;

  /** text content */
  eyebrow: string;
  eyebrowColor: string;
  title: string;
  titleColor: string;
  body: string;
  bodyColor: string;

  /** primary CTA */
  primaryCTA: string;
  primaryHref: string;
  primaryExternal?: boolean;
  ctaBg: string;
  ctaColor: string;
  ctaBorder?: string;

  /** secondary / skip */
  secondaryCTA?: string;
  secondaryColor?: string;

  /** badge pill */
  badge?: string;
  badgeBg?: string;
  badgeColor?: string;

  /** special effects */
  shimmer?: boolean;       // animated shimmer on header
  livePulse?: boolean;     // pulsing live dot
  locationChips?: string[]; // row of location chips
  accentLine?: string;     // colored bottom accent line color
  logoSrc?: string;        // business logo — shown instead of 3D icon when provided
}

interface Props {
  config: BusinessPopupConfig;
}

function LogoDisplay({ src }: { src: string }) {
  return (
    <div
      className="relative mb-3"
      style={{ animation: "bpIconFloat 3s ease-in-out infinite" }}
    >
      {/* outer glow ring */}
      <div
        className="absolute -inset-1.5 rounded-[1.6rem]"
        style={{ background: "rgba(255,255,255,0.08)", filter: "blur(6px)" }}
      />
      <div
        className="relative flex h-[4.25rem] w-[4.25rem] items-center justify-center overflow-hidden rounded-[1.35rem] bg-white shadow-lg"
        style={{ border: "1px solid rgba(255,255,255,0.22)" }}
      >
        <Image
          src={src}
          alt=""
          width={68}
          height={68}
          className="h-full w-full object-contain p-1"
        />
      </div>
    </div>
  );
}

function HeaderIcon({ token }: { token: string }) {
  if (!token) {
    return (
      <span
        className="mb-3 select-none leading-none"
        style={{ fontSize: "2.95rem", animation: "bpIconFloat 3s ease-in-out infinite" }}
      >
        ?
      </span>
    );
  }

  return (
    <div
      className="relative mb-3 flex h-[4.25rem] w-[4.25rem] items-center justify-center rounded-[1.35rem] border border-white/20 bg-white/12 shadow-lg shadow-black/10 backdrop-blur-sm"
      style={{ animation: "bpIconFloat 3s ease-in-out infinite" }}
      aria-hidden="true"
    >
      <div className="absolute inset-[1px] rounded-[1.25rem] border border-white/10" />
      <div
        className="absolute inset-0 rounded-[1.35rem]"
        style={{ background: "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.18), transparent 68%)" }}
      />
      <div className="relative drop-shadow-[0_8px_18px_rgba(0,0,0,0.16)]">
        <Popup3DIcon token={token} />
      </div>
    </div>
  );
}

export default function BusinessPopup({ config }: Props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem(config.storageKey);
    if (!seen) {
      const t = setTimeout(() => setVisible(true), config.delay);
      return () => clearTimeout(t);
    }
  }, [config.storageKey, config.delay]);

  function dismiss() {
    sessionStorage.setItem(config.storageKey, "1");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center px-4"
      style={{ backgroundColor: "rgba(4,8,16,0.78)", backdropFilter: "blur(8px)" }}
      onClick={dismiss}
    >
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes bpReveal {
          from { opacity: 0; transform: scale(0.90) translateY(28px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes bpShimmer {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes bpPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.4; transform: scale(0.85); }
        }
        @keyframes bpIconFloat {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-4px); }
        }
      `}} />

      <div
        className="relative w-full max-w-[27rem] overflow-hidden shadow-2xl"
        style={{
          borderRadius: "26px",
          animation: "bpReveal 0.42s cubic-bezier(0.16,1,0.3,1) both",
          background: config.modalBg,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* ── HEADER ZONE ──────────────────────────────────────────────────── */}
        <div
          className="relative flex flex-col items-center justify-center px-7 pb-6 pt-8"
          style={{ background: config.headerBg, minHeight: "124px" }}
        >
          {/* Shimmer overlay */}
          {config.shimmer && (
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background: "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.12) 50%, transparent 70%)",
                backgroundSize: "200% 100%",
                animation: "bpShimmer 2.4s linear infinite",
              }}
            />
          )}

          {/* Close button */}
          <button
            onClick={dismiss}
            className="absolute top-3 right-3 flex h-7 w-7 cursor-pointer items-center justify-center rounded-full transition-all"
            style={{ background: "rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.6)" }}
            aria-label="Close"
          >
            <X className="h-3.5 w-3.5" />
          </button>

          {/* Logo or 3D icon */}
          {config.logoSrc
            ? <LogoDisplay src={config.logoSrc} />
            : <HeaderIcon token={config.headerIcon} />
          }

          {/* Badge */}
          {config.badge && (
            <span
              className="inline-block rounded-full px-3 py-0.5 text-[10px] font-bold tracking-widest uppercase"
              style={{
                background: config.badgeBg ?? "rgba(255,255,255,0.18)",
                color: config.badgeColor ?? "rgba(255,255,255,0.9)",
              }}
            >
              {config.badge}
            </span>
          )}

          {/* Live pulse badge */}
          {config.livePulse && (
            <span
              className="flex items-center gap-1.5 rounded-full px-3 py-0.5 text-[10px] font-bold tracking-widest uppercase"
              style={{ background: "rgba(255,255,255,0.18)", color: "rgba(255,255,255,0.9)" }}
            >
              <span
                className="h-2 w-2 rounded-full bg-white"
                style={{ animation: "bpPulse 1.4s ease-in-out infinite" }}
              />
              LIVE NOW
            </span>
          )}
        </div>

        {/* ── BODY ZONE ────────────────────────────────────────────────────── */}
        <div className="px-7 pb-8 pt-6" style={{ background: config.modalBg }}>

          {/* Eyebrow */}
          <p
            className="mb-2 text-[10.5px] font-bold tracking-[0.22em] uppercase"
            style={{ color: config.eyebrowColor }}
          >
            {config.eyebrow}
          </p>

          {/* Title */}
          <h2
            className="mb-3 text-[1.32rem] font-extrabold leading-tight"
            style={{ color: config.titleColor }}
          >
            {config.title}
          </h2>

          {/* Location chips */}
          {config.locationChips && config.locationChips.length > 0 && (
            <div className="mb-3 flex flex-wrap gap-1.5">
              {config.locationChips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border px-2.5 py-0.5 text-[10px] font-semibold tracking-wide"
                  style={{ borderColor: config.eyebrowColor + "55", color: config.eyebrowColor }}
                >
                  {chip}
                </span>
              ))}
            </div>
          )}

          {/* Body */}
          <p
            className="mb-6 text-[13.5px] leading-[1.7]"
            style={{ color: config.bodyColor }}
          >
            {config.body}
          </p>

          {/* Primary CTA */}
          {config.primaryExternal ? (
            <a
              href={config.primaryHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={dismiss}
              className="group flex w-full cursor-pointer items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[15px] font-bold transition-all duration-200 hover:opacity-90 active:scale-[0.97]"
              style={{
                background: config.ctaBg,
                color: config.ctaColor,
                border: config.ctaBorder ?? "none",
                boxShadow: `0 4px 20px ${config.ctaBg === "transparent" ? "transparent" : config.ctaBg + "55"}`,
              }}
            >
              {config.primaryCTA}
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
          ) : (
            <a
              href={config.primaryHref}
              onClick={dismiss}
              className="group flex w-full cursor-pointer items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[15px] font-bold transition-all duration-200 hover:opacity-90 active:scale-[0.97]"
              style={{
                background: config.ctaBg,
                color: config.ctaColor,
                border: config.ctaBorder ?? "none",
                boxShadow: `0 4px 20px ${config.ctaBg === "transparent" ? "transparent" : config.ctaBg + "55"}`,
              }}
            >
              {config.primaryCTA}
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
          )}

          {/* Skip */}
          <button
            onClick={dismiss}
            className="mt-3.5 w-full cursor-pointer text-center text-[11.5px] underline underline-offset-2 transition-opacity hover:opacity-80"
            style={{ color: config.secondaryColor ?? config.bodyColor }}
          >
            {config.secondaryCTA ?? "Skip for now"}
          </button>
        </div>

        {/* Optional bottom accent line */}
        {config.accentLine && (
          <div className="h-1 w-full" style={{ background: config.accentLine }} />
        )}
      </div>
    </div>
  );
}
