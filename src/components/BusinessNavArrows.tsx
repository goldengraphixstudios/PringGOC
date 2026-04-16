"use client";

import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { businesses } from "@/data/businesses";

interface Props {
  currentSlug: string;
}

export default function BusinessNavArrows({ currentSlug }: Props) {
  const idx = businesses.findIndex((b) => b.slug === currentSlug);
  const prev = idx > 0 ? businesses[idx - 1] : null;
  const next = idx < businesses.length - 1 ? businesses[idx + 1] : null;

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
              backgroundColor: "rgba(255,255,255,0.10)",
              border: "1px solid rgba(255,255,255,0.16)",
              backdropFilter: "blur(12px)",
              color: "#fff",
              transition: "background-color 200ms, transform 200ms, border-color 200ms",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.backgroundColor = "rgba(255,255,255,0.22)";
              el.style.borderColor = "rgba(255,255,255,0.35)";
              el.style.transform = "scale(1.1)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.backgroundColor = "rgba(255,255,255,0.10)";
              el.style.borderColor = "rgba(255,255,255,0.16)";
              el.style.transform = "scale(1)";
            }}
          >
            <ChevronLeft size={20} />
          </span>
          <span
            style={{
              fontSize: 10,
              fontWeight: 600,
              color: "rgba(255,255,255,0.55)",
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
              backgroundColor: "rgba(255,255,255,0.10)",
              border: "1px solid rgba(255,255,255,0.16)",
              backdropFilter: "blur(12px)",
              color: "#fff",
              transition: "background-color 200ms, transform 200ms, border-color 200ms",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.backgroundColor = "rgba(255,255,255,0.22)";
              el.style.borderColor = "rgba(255,255,255,0.35)";
              el.style.transform = "scale(1.1)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.backgroundColor = "rgba(255,255,255,0.10)";
              el.style.borderColor = "rgba(255,255,255,0.16)";
              el.style.transform = "scale(1)";
            }}
          >
            <ChevronRight size={20} />
          </span>
          <span
            style={{
              fontSize: 10,
              fontWeight: 600,
              color: "rgba(255,255,255,0.55)",
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
