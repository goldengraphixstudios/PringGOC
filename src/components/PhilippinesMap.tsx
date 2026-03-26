"use client";

import { useEffect, useRef } from "react";

export default function PhilippinesMap() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("ph-map-visible");
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="ph-map-container relative flex items-center justify-center py-2">
      <style dangerouslySetInnerHTML={{ __html: `
        .ph-map-visible .ph-map-img {
          animation: phMapFloat 6s ease-in-out infinite;
        }
        @keyframes phMapFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @media (prefers-reduced-motion: reduce) {
          .ph-map-visible .ph-map-img { animation: none; }
        }
      `}} />

      <div className="relative w-full max-w-[500px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/ph_mapsicon.svg"
          alt="Philippines Map"
          className="ph-map-img relative h-auto w-full"
          draggable={false}
          style={{ opacity: 0.3 }}
        />
      </div>
    </div>
  );
}
