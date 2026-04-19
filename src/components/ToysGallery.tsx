"use client";

import { useState, useEffect } from "react";
import Image from "@/components/Img";

// 5 real store photos — landscape originals, shown at natural ratio
const ALL_IMAGES = [
  { src: "/toys-for-less/store-1.jpg", alt: "Toys for Less — Store View" },
  { src: "/toys-for-less/store-2.jpg", alt: "Toys for Less — Full Selection" },
  { src: "/toys-for-less/store-3.jpg", alt: "Toys for Less — Toy Aisle" },
  { src: "/toys-for-less/store-4.jpg", alt: "Toys for Less — Kids Favourites" },
  { src: "/toys-for-less/store-5.jpg", alt: "Toys for Less — UK Toy Shelves" },
  { src: "/toys-for-less/toy-1.jpg", alt: "UK Toy Collection" },
  { src: "/toys-for-less/toy-2.jpg", alt: "Nothing Above ₱280" },
  { src: "/toys-for-less/toy-3.jpg", alt: "Wholesale Ready" },
  { src: "/toys-for-less/toy-4.jpg", alt: "Walk-In Store" },
];

// Split into groups of 3
const GROUPS = [
  ALL_IMAGES.slice(0, 3),
  ALL_IMAGES.slice(3, 6),
  ALL_IMAGES.slice(6, 9),
];

const BORDER_COLORS = ["#FF6500", "#111111", "#FF8C00"];
const SHADOW_COLORS = ["#111111", "#FF6500", "#111111"];
const ROTATES = ["-1deg", "1deg", "-1deg"];

export default function ToysGallery() {
  const [active, setActive] = useState(0);
  const [phase, setPhase] = useState<"visible" | "exit" | "enter">("visible");

  useEffect(() => {
    const timer = setInterval(() => {
      // Phase 1: exit animation
      setPhase("exit");

      setTimeout(() => {
        // Phase 2: swap group, start enter
        setActive((prev) => (prev + 1) % GROUPS.length);
        setPhase("enter");

        // Phase 3: settle
        setTimeout(() => setPhase("visible"), 420);
      }, 360);
    }, 3200);

    return () => clearInterval(timer);
  }, []);

  const group = GROUPS[active];

  return (
    <div className="flex flex-col gap-5">
      {/* 3 images side-by-side, each at its natural aspect ratio */}
      <div className="flex gap-4 items-end">
        {group.map((img, i) => {
          const bc = BORDER_COLORS[i];
          const sc = SHADOW_COLORS[i];
          const rotate = ROTATES[i];

          const isExit = phase === "exit";
          const isEnter = phase === "enter";

          return (
            <div
              key={`${active}-${i}`}
              className="relative flex-1 overflow-hidden rounded-3xl border-4 bg-white"
              style={{
                borderColor: bc,
                boxShadow: `6px 6px 0 ${sc}`,
                transform: isExit
                  ? `translateY(${i % 2 === 0 ? -20 : 20}px) scale(0.93) rotate(${rotate})`
                  : isEnter
                  ? `translateY(${i % 2 === 0 ? 20 : -20}px) scale(0.93) rotate(${rotate})`
                  : `rotate(${rotate})`,
                opacity: isExit || isEnter ? 0 : 1,
                transition: `opacity 0.36s ease, transform 0.42s cubic-bezier(0.34,1.3,0.64,1)`,
                transitionDelay: `${i * 65}ms`,
              }}
            >
              {/* Use a regular img tag to respect natural aspect ratio */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img.src}
                alt={img.alt}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
              {/* Hover overlay */}
              <div
                className="absolute inset-0 flex items-end bg-gradient-to-t from-[#111111]/65 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"
              >
                <div className="p-3">
                  <span
                    className="text-sm text-white rounded-xl px-3 py-1 border-2 border-white/30 bg-white/10 backdrop-blur-sm"
                    style={{ fontFamily: "'Fredoka One', cursive" }}
                  >
                    {img.alt}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 pt-1">
        {GROUPS.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setPhase("exit");
              setTimeout(() => {
                setActive(i);
                setPhase("enter");
                setTimeout(() => setPhase("visible"), 420);
              }, 360);
            }}
            className="rounded-full border-2 border-[#111111] transition-all duration-300 cursor-pointer"
            style={{
              width: i === active ? 32 : 12,
              height: 12,
              background: i === active ? "#FF6500" : "#FFD200",
              boxShadow: i === active ? "2px 2px 0 #111111" : "1px 1px 0 #111111",
            }}
            aria-label={`View gallery group ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
