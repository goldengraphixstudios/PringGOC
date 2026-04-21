"use client";

import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { businesses } from "@/data/businesses";

interface Props {
  currentSlug: string;
  theme?: "light" | "dark";
}

export default function BusinessNavArrows({ currentSlug, theme = "light" }: Props) {
  const idx = businesses.findIndex((b) => b.slug === currentSlug);
  const prev = idx > 0 ? businesses[idx - 1] : null;
  const next = idx < businesses.length - 1 ? businesses[idx + 1] : null;
  const isDark = theme === "dark";
  const bubbleBg = isDark ? "rgba(15,23,42,0.72)" : "rgba(255,255,255,0.10)";
  const bubbleBorderColor = isDark ? "rgba(15,23,42,0.55)" : "rgba(255,255,255,0.16)";
  const bubbleHoverBg = isDark ? "rgba(15,23,42,0.88)" : "rgba(255,255,255,0.22)";
  const bubbleHoverBorder = isDark ? "rgba(15,23,42,0.88)" : "rgba(255,255,255,0.35)";
  const iconColor = "#fff";
  const labelColor = isDark ? "rgba(15,23,42,0.82)" : "rgba(255,255,255,0.55)";

  return (
    <>
      {/* LEFT ARROW */}
      {prev && (
        <Link
          href={`/business/${prev.slug}`}
          title={prev.name}
          style={{
            position: "fixed",
            left: 16,
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 100,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 6,
            textDecoration: "none",
          }}
        >
          <span
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 44,
              height: 44,
              borderRadius: "50%",
              backgroundColor: bubbleBg,
              border: `1px solid ${bubbleBorderColor}`,
              backdropFilter: "blur(12px)",
              color: iconColor,
              transition: "background-color 200ms, transform 200ms, border-color 200ms",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.backgroundColor = bubbleHoverBg;
              el.style.borderColor = bubbleHoverBorder;
              el.style.transform = "scale(1.1)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.backgroundColor = bubbleBg;
              el.style.borderColor = bubbleBorderColor;
              el.style.transform = "scale(1)";
            }}
          >
            <ChevronLeft size={20} />
          </span>
          <span
            style={{
              fontSize: 10,
              fontWeight: 600,
              color: labelColor,
              textAlign: "center",
              maxWidth: 70,
              lineHeight: 1.3,
              letterSpacing: "0.02em",
              overflow: "hidden",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
            }}
          >
            {prev.name}
          </span>
        </Link>
      )}

      {/* RIGHT ARROW */}
      {next && (
        <Link
          href={`/business/${next.slug}`}
          title={next.name}
          style={{
            position: "fixed",
            right: 16,
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 100,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 6,
            textDecoration: "none",
          }}
        >
          <span
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 44,
              height: 44,
              borderRadius: "50%",
              backgroundColor: bubbleBg,
              border: `1px solid ${bubbleBorderColor}`,
              backdropFilter: "blur(12px)",
              color: iconColor,
              transition: "background-color 200ms, transform 200ms, border-color 200ms",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.backgroundColor = bubbleHoverBg;
              el.style.borderColor = bubbleHoverBorder;
              el.style.transform = "scale(1.1)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.backgroundColor = bubbleBg;
              el.style.borderColor = bubbleBorderColor;
              el.style.transform = "scale(1)";
            }}
          >
            <ChevronRight size={20} />
          </span>
          <span
            style={{
              fontSize: 10,
              fontWeight: 600,
              color: labelColor,
              textAlign: "center",
              maxWidth: 70,
              lineHeight: 1.3,
              letterSpacing: "0.02em",
              overflow: "hidden",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
            }}
          >
            {next.name}
          </span>
        </Link>
      )}
    </>
  );
}
