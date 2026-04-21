"use client";

import { useEffect, useState } from "react";
import Image from "@/components/Img";
import { X, ArrowRight, MapPin, Building2 } from "lucide-react";
import { GROUP_BUSINESS_LABEL } from "@/data/site";

export default function WelcomePopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only show once per session
    const seen = sessionStorage.getItem("pgc-welcome-seen");
    if (!seen) {
      const timer = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  function dismiss() {
    sessionStorage.setItem("pgc-welcome-seen", "1");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center px-4"
      style={{ backgroundColor: "rgba(5,13,26,0.75)", backdropFilter: "blur(6px)" }}
      onClick={dismiss}
    >
      <div
        className="relative w-full max-w-[30rem] overflow-hidden rounded-[28px] bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        style={{
          animation: "popupReveal 0.45s cubic-bezier(0.16,1,0.3,1) both",
        }}
      >
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes popupReveal {
            from { opacity: 0; transform: scale(0.92) translateY(24px); }
            to   { opacity: 1; transform: scale(1) translateY(0); }
          }
        `}} />

        {/* Gold top bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-[#C9A84C] via-[#E8C84A] to-[#C9A84C]" />

        {/* Close */}
        <button
          onClick={dismiss}
          className="absolute top-4 right-4 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-black/[0.05] text-black/40 transition-all hover:bg-black/10 hover:text-black/70"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="px-9 pb-11 pt-9 text-center">
          {/* Logo */}
          <div className="mb-5 flex justify-center">
            <div className="relative">
              <div
                className="absolute -inset-3 rounded-2xl opacity-30"
                style={{ background: "radial-gradient(circle, #C9A84C 0%, transparent 70%)", filter: "blur(10px)" }}
              />
              <Image
                src="/logos/pring-group.png"
                alt="Pring Group of Companies"
                width={78}
                height={78}
                className="relative rounded-2xl shadow-md"
              />
            </div>
          </div>

          {/* Label */}
          <p className="mb-2 text-[10px] font-bold tracking-[0.2em] text-[#C9A84C] uppercase">
            Welcome to
          </p>

          {/* Heading */}
          <h2 className="mb-1 font-[family-name:var(--font-heading)] text-2xl font-bold leading-tight text-[#0A1628]">
            Pring Group of Companies
          </h2>

          <p
            className="mb-5 font-[family-name:var(--font-cursive)] text-base italic"
            style={{ color: "#C9A84C" }}
          >
            Building Legacies Across Industries
          </p>

          {/* Stats row */}
          <div className="mb-7 flex items-center justify-center gap-7 rounded-2xl border border-black/[0.04] bg-[#FDFCFA] px-7 py-4.5">
            {[
              { icon: Building2, value: GROUP_BUSINESS_LABEL, label: "Businesses" },
              { icon: MapPin, value: "6+", label: "Locations" },
            ].map(({ icon: Icon, value, label }) => (
              <div key={label} className="text-center">
                <Icon className="mx-auto mb-1 h-4 w-4 text-[#C9A84C]" />
                <div className="font-[family-name:var(--font-heading)] text-xl font-bold text-[#0A1628]">
                  {value}
                </div>
                <div className="text-[10px] font-medium tracking-wide text-[#1B3A5C]/50 uppercase">{label}</div>
              </div>
            ))}
          </div>

          <p className="mb-8 text-[15px] leading-[1.75] text-[#1B3A5C]/60">
            A family-owned conglomerate spanning auction houses, bookstores, cafés,
            fitness gyms, real estate, logistics, fashion, and more — all across
            the Philippines.
          </p>

          {/* CTA */}
          <a
            href="#businesses"
            onClick={dismiss}
            className="group flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-[#0A1628] px-6 py-4 text-[15px] font-semibold text-white shadow-lg transition-all duration-200 hover:bg-[#1B3A5C] hover:shadow-xl active:scale-[0.98]"
          >
            Explore Our Businesses
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </a>

          <button
            onClick={dismiss}
            className="mt-3 cursor-pointer text-[11px] text-[#1B3A5C]/35 underline underline-offset-2 hover:text-[#1B3A5C]/60"
          >
            Skip for now
          </button>
        </div>
      </div>
    </div>
  );
}
