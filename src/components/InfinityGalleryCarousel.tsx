"use client";

import { useState } from "react";
import Image from "@/components/Img";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface InfinityGalleryImage {
  src: string;
  title: string;
  subtitle: string;
}

interface Props {
  images: InfinityGalleryImage[];
}

export default function InfinityGalleryCarousel({ images }: Props) {
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
      <div className="overflow-hidden rounded-[30px] border border-[#1E3A8A]/10 bg-white shadow-[0_30px_100px_rgba(15,23,42,0.12)]">
        <div className="grid gap-0 lg:grid-cols-[1.18fr_0.82fr]">
          <div className="relative min-h-[360px] bg-gradient-to-br from-[#F8FBFF] via-white to-[#EEF4FF] sm:min-h-[520px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.12),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(220,38,38,0.08),transparent_30%)]" />
            <div className="relative flex h-full flex-col p-5 sm:p-7">
              <div className="mb-4 flex items-center justify-between gap-3">
                <div>
                  <p className="text-[11px] font-bold tracking-[0.24em] text-[#DC2626] uppercase">
                    Latest Product Picks
                  </p>
                  <p className="mt-1 text-sm text-[#64748B]">
                    Scroll through the newest Infinity arrivals.
                  </p>
                </div>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={goPrev}
                    aria-label="Previous gallery image"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-[#1E3A8A]/15 bg-white text-[#1E3A8A] transition-all duration-200 hover:border-[#1E3A8A]/35 hover:bg-[#EFF6FF]"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    type="button"
                    onClick={goNext}
                    aria-label="Next gallery image"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-[#DC2626]/15 bg-white text-[#DC2626] transition-all duration-200 hover:border-[#DC2626]/35 hover:bg-[#FEF2F2]"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>

              <div className="relative flex-1 overflow-hidden rounded-[28px] border border-[#E2E8F0] bg-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.6)]">
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.98),rgba(248,250,252,0.88))]" />
                <div className="relative flex h-full items-center justify-center p-6 sm:p-10">
                  <div className="relative h-full w-full">
                    <Image
                      src={activeImage.src}
                      alt={activeImage.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0F172A]/92 via-[#0F172A]/58 to-transparent px-6 pb-6 pt-16 text-white">
                  <div className="text-2xl font-bold sm:text-3xl">
                    {activeImage.title}
                  </div>
                  <div className="mt-1 text-sm text-white/70 sm:text-base">
                    {activeImage.subtitle}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-[#E2E8F0] bg-[#F8FBFF] p-4 sm:p-5 lg:border-t-0 lg:border-l">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2">
              {images.map((image, index) => {
                const isActive = index === activeIndex;

                return (
                  <button
                    key={image.src}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`group overflow-hidden rounded-2xl border bg-white text-left transition-all duration-200 ${
                      isActive
                        ? "border-[#3B82F6]/45 shadow-[0_0_0_1px_rgba(59,130,246,0.18)]"
                        : "border-[#E2E8F0] hover:border-[#CBD5E1] hover:shadow-md"
                    }`}
                  >
                    <div className="relative aspect-[4/3] bg-[linear-gradient(135deg,#FFFFFF,#F8FAFC)]">
                      <Image
                        src={image.src}
                        alt={image.title}
                        fill
                        className="object-contain p-3 transition-transform duration-300 group-hover:scale-[1.03]"
                      />
                    </div>
                    <div className="p-3">
                      <div className="text-sm font-semibold text-[#0F172A]">
                        {image.title}
                      </div>
                      <div className="mt-1 text-[11px] leading-relaxed text-[#64748B]">
                        {image.subtitle}
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
