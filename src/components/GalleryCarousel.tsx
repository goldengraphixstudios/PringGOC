"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { bp } from "@/lib/basePath";

interface GalleryImage {
  src: string;
  alt: string;
}

interface Props {
  images: GalleryImage[];
}

const ACTIVE_W = 400;
const ADJ_W = 280;
const FAR_W = 210;
const GAP = 20;

// X center of each slot relative to the center (offset=0 position)
function slotX(offset: number): number {
  const sign = offset < 0 ? -1 : 1;
  const abs = Math.abs(offset);
  if (abs === 0) return 0;
  if (abs === 1) return sign * (ACTIVE_W / 2 + GAP + ADJ_W / 2);
  if (abs === 2) return sign * (ACTIVE_W / 2 + GAP + ADJ_W + GAP + FAR_W / 2);
  return sign * 9999; // hidden
}

export default function GalleryCarousel({ images }: Props) {
  const [active, setActive] = useState(0);
  const n = images.length;

  const prev = () => setActive((i) => (i - 1 + n) % n);
  const next = () => setActive((i) => (i + 1) % n);

  const getOffset = (i: number) => {
    let d = i - active;
    if (d > n / 2) d -= n;
    if (d < -n / 2) d += n;
    return d;
  };

  return (
    <div style={{ position: "relative", width: "100%", paddingBottom: 48 }}>
      {/* Track */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: 660,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        {images.map((img, i) => {
          const offset = getOffset(i);
          const abs = Math.abs(offset);
          const isActive = abs === 0;
          const isAdjacent = abs === 1;
          const isVisible = abs <= 2;

          if (!isVisible) return null;

          const cardW = isActive ? ACTIVE_W : isAdjacent ? ADJ_W : FAR_W;
          const x = slotX(offset);
          const scale = isActive ? 1 : isAdjacent ? 0.93 : 0.85;
          const opacity = isActive ? 1 : isAdjacent ? 0.6 : 0.3;

          return (
            <div
              key={img.src}
              onClick={() => !isActive && setActive(i)}
              style={{
                position: "absolute",
                width: cardW,
                borderRadius: 20,
                overflow: "hidden",
                cursor: isActive ? "default" : "pointer",
                transform: `translateX(${x}px) scale(${scale})`,
                transition: "transform 500ms cubic-bezier(0.4, 0, 0.2, 1), opacity 500ms cubic-bezier(0.4, 0, 0.2, 1), width 500ms cubic-bezier(0.4, 0, 0.2, 1)",
                opacity,
                border: isActive
                  ? "1px solid rgba(255,255,255,0.15)"
                  : "1px solid rgba(255,255,255,0.06)",
                boxShadow: isActive
                  ? "0 24px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.08)"
                  : "0 8px 24px rgba(0,0,0,0.3)",
                zIndex: isActive ? 10 : isAdjacent ? 5 : 1,
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={bp(img.src)}
                alt={img.alt}
                style={{
                  width: "100%",
                  aspectRatio: "2/3",
                  objectFit: "cover",
                  display: "block",
                }}
              />
              {/* Gradient overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 55%)",
                  opacity: isActive ? 1 : 0.4,
                  transition: "opacity 500ms",
                }}
              />
              {/* Caption on active */}
              {isActive && (
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: "16px 20px",
                  }}
                >
                  <p
                    style={{
                      margin: 0,
                      fontSize: 13,
                      fontWeight: 600,
                      color: "rgba(255,255,255,0.9)",
                      letterSpacing: "0.04em",
                      fontStyle: "italic",
                    }}
                  >
                    {img.alt}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Left arrow */}
      <button
        onClick={prev}
        aria-label="Previous"
        style={{
          position: "absolute",
          left: 0,
          top: "50%",
          transform: "translateY(-50%)",
          width: 44,
          height: 44,
          borderRadius: "50%",
          backgroundColor: "rgba(255,255,255,0.08)",
          border: "1px solid rgba(255,255,255,0.14)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          color: "#fff",
          backdropFilter: "blur(8px)",
          transition: "background-color 200ms",
          zIndex: 20,
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.18)")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.08)")
        }
      >
        <ChevronLeft size={18} />
      </button>

      {/* Right arrow */}
      <button
        onClick={next}
        aria-label="Next"
        style={{
          position: "absolute",
          right: 0,
          top: "50%",
          transform: "translateY(-50%)",
          width: 44,
          height: 44,
          borderRadius: "50%",
          backgroundColor: "rgba(255,255,255,0.08)",
          border: "1px solid rgba(255,255,255,0.14)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          color: "#fff",
          backdropFilter: "blur(8px)",
          transition: "background-color 200ms",
          zIndex: 20,
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.18)")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.08)")
        }
      >
        <ChevronRight size={18} />
      </button>

      {/* Dot indicators */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          gap: 8,
        }}
      >
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={`Go to image ${i + 1}`}
            style={{
              width: i === active ? 24 : 8,
              height: 8,
              borderRadius: 4,
              backgroundColor:
                i === active
                  ? "rgba(255,255,255,0.9)"
                  : "rgba(255,255,255,0.25)",
              border: "none",
              cursor: "pointer",
              padding: 0,
              transition: "all 300ms",
            }}
          />
        ))}
      </div>
    </div>
  );
}
