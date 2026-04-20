"use client";

import { useState } from "react";
import Image from "@/components/Img";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface HouseOfGarmentsShowcaseImage {
  src: string;
  title: string;
  subtitle: string;
}

interface Props {
  images: HouseOfGarmentsShowcaseImage[];
}

export default function HouseOfGarmentsShowcase({ images }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (images.length === 0) return null;

  const activeImage = images[activeIndex];

  function goPrev() {
    setActiveIndex((current) => (current === 0 ? images.length - 1 : current - 1));
  }

  function goNext() {
    setActiveIndex((current) => (current === images.length - 1 ? 0 : current + 1));
  }

  return (
    <div className="mx-auto max-w-6xl">
      <div className="relative overflow-hidden rounded-[28px] border border-[#F0C048]/10 bg-[#110E04] shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
        <div className="grid gap-0 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="relative min-h-[340px] sm:min-h-[460px]">
            <Image
              src={activeImage.src}
              alt={activeImage.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0C0800]/88 via-[#0C0800]/12 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-4 p-5 sm:p-7">
              <div>
                <div className="font-display text-2xl font-bold text-white sm:text-3xl">
                  {activeImage.title}
                </div>
                <div className="font-body mt-1 text-sm text-white/55 sm:text-base">
                  {activeImage.subtitle}
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={goPrev}
                  aria-label="Previous product image"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[#F0C048]/25 bg-[#0C0800]/80 text-[#F0C048] transition-all duration-200 hover:border-[#F0C048]/45 hover:bg-[#F0C048]/10"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  aria-label="Next product image"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[#F0C048]/25 bg-[#0C0800]/80 text-[#F0C048] transition-all duration-200 hover:border-[#F0C048]/45 hover:bg-[#F0C048]/10"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-[#F0C048]/8 p-4 lg:border-t-0 lg:border-l">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2">
              {images.map((image, index) => {
                const isActive = index === activeIndex;

                return (
                  <button
                    key={image.src}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`group relative overflow-hidden rounded-2xl border text-left transition-all duration-200 ${
                      isActive
                        ? "border-[#F0C048]/55 shadow-[0_0_0_1px_rgba(240,192,72,0.18)]"
                        : "border-[#F0C048]/10 hover:border-[#F0C048]/25"
                    }`}
                  >
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={image.src}
                        alt={image.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0C0800]/82 via-[#0C0800]/18 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-3">
                        <div className="font-display text-sm font-semibold text-white">
                          {image.title}
                        </div>
                        <div className="font-body mt-0.5 text-[11px] text-white/55">
                          {image.subtitle}
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
