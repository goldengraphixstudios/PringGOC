import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import {
  ArrowLeft,
  Facebook,
  Star,
  Gem,
  Sparkles,
  ShieldCheck,
  Heart,
  Crown,
  ArrowRight,
  MessageCircle,
  ChevronRight,
  Eye,
  Gift,
  Truck,
  Award,
  MapPin,
} from "lucide-react";

export const metadata: Metadata = {
  title: "LUSSO | Elevate Every Outfit — Fashion Jewelry, Cabuyao",
  description:
    "Trendy. Stylish. Affordable. Your go-to for fashion jewelry that elevates any outfit. From casual looks to glam nights out. Cabuyao, Laguna.",
};

const collections = [
  {
    name: "Necklaces",
    desc: "Statement pieces that command attention",
    image: "/lusso/necklace.jpg",
  },
  {
    name: "Rings",
    desc: "Elegant bands for every occasion",
    image: "/lusso/rings.jpg",
  },
  {
    name: "Earrings",
    desc: "From subtle studs to dramatic drops",
    image: "/lusso/earrings.jpg",
  },
  {
    name: "Bracelets",
    desc: "Wrap your wrist in luxury",
    image: "/lusso/bracelet.jpg",
  },
];

const steps = [
  {
    num: "01",
    title: "Browse Our Collection",
    desc: "Explore our curated jewelry drops on Facebook — new pieces every week.",
    icon: Eye,
  },
  {
    num: "02",
    title: "Claim Your Piece",
    desc: "Message us on Facebook to reserve your favorites before they're gone.",
    icon: MessageCircle,
  },
  {
    num: "03",
    title: "Wear & Shine",
    desc: "Receive your LUSSO jewelry and elevate every outfit you own.",
    icon: Crown,
  },
];

const reasons = [
  {
    icon: Gem,
    title: "Curated Quality",
    desc: "Every piece is handpicked for style, durability, and that luxury feel.",
  },
  {
    icon: Crown,
    title: "Trendy & Timeless",
    desc: "Collections that blend the latest trends with classic elegance.",
  },
  {
    icon: Heart,
    title: "Affordable Luxury",
    desc: "High-end looks without the high-end price. Luxury for everyone.",
  },
  {
    icon: Sparkles,
    title: "Perfect for Gifting",
    desc: "Beautifully presented pieces that make unforgettable gifts.",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    desc: "Quick processing and careful packaging to protect your treasures.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Brand",
    desc: "Part of the Pring Group family. Thousands of happy customers.",
  },
];

/* Marquee images — repeated for seamless loop */
const marqueeImages = [
  { src: "/lusso/necklace.jpg", alt: "Gold Necklace" },
  { src: "/lusso/rings.jpg", alt: "Fashion Rings" },
  { src: "/lusso/earrings.jpg", alt: "Elegant Earrings" },
  { src: "/lusso/bracelet.jpg", alt: "Luxury Bracelet" },
  { src: "/lusso/detail.jpg", alt: "Jewelry Detail" },
  { src: "/lusso/collection.jpg", alt: "LUSSO Collection" },
];

export default function LussoPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#060606] text-white">
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes fadeInUpLusso {
            from { opacity: 0; transform: translateY(32px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes slideInLeft {
            from { opacity: 0; transform: translateX(-50px); }
            to { opacity: 1; transform: translateX(0); }
          }
          @keyframes slideInRight {
            from { opacity: 0; transform: translateX(50px); }
            to { opacity: 1; transform: translateX(0); }
          }
          @keyframes goldShimmer {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
          }
          @keyframes floatJewelry {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            33% { transform: translateY(-8px) rotate(0.5deg); }
            66% { transform: translateY(4px) rotate(-0.5deg); }
          }
          @keyframes floatReverse {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(10px); }
          }
          @keyframes diamondSpin {
            0% { transform: rotate(0deg) scale(1); opacity: 0.3; }
            50% { transform: rotate(180deg) scale(1.1); opacity: 0.6; }
            100% { transform: rotate(360deg) scale(1); opacity: 0.3; }
          }
          @keyframes drawLine {
            from { width: 0; }
            to { width: 100%; }
          }
          @keyframes pulseGold {
            0%, 100% { box-shadow: 0 0 0 0 rgba(212,175,55,0.3); }
            50% { box-shadow: 0 0 0 14px rgba(212,175,55,0); }
          }
          @keyframes heroReveal {
            from { opacity: 0; transform: scale(1.08); }
            to { opacity: 1; transform: scale(1); }
          }
          @keyframes jewelryBelt {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes sparkleFloat {
            0%, 100% { opacity: 0; transform: translateY(0) scale(0); }
            20% { opacity: 1; transform: translateY(-10px) scale(1); }
            80% { opacity: 0.5; transform: translateY(-40px) scale(0.5); }
          }
          .gold-text {
            background: linear-gradient(135deg, #D4AF37, #F0D8A8, #C9A84C, #F0D8A8, #D4AF37);
            background-size: 200% 100%;
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: goldShimmer 4s linear infinite;
          }
          .gold-text-static {
            background: linear-gradient(135deg, #D4AF37, #F0D8A8, #C9A84C);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .float-jewelry { animation: floatJewelry 8s ease-in-out infinite; }
          .float-reverse { animation: floatReverse 7s ease-in-out infinite; }
          .pulse-gold { animation: pulseGold 2.5s ease-in-out infinite; }
          .hero-img { animation: heroReveal 2s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
          .jewelry-belt {
            animation: jewelryBelt 30s linear infinite;
          }
          .card-luxury {
            transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          }
          .card-luxury:hover {
            transform: translateY(-8px);
            box-shadow: 0 24px 48px rgba(212,175,55,0.08);
          }
          .gold-line {
            height: 1px;
            background: linear-gradient(90deg, transparent, #D4AF37, transparent);
          }
          .gold-border {
            border-image: linear-gradient(135deg, #D4AF3730, #F0D8A830, #D4AF3730) 1;
          }
        `,
        }}
      />

      {/* ===== AMBIENT BACKGROUND ===== */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#060606] via-[#0A0808] to-[#060606]" />
        <div className="absolute top-[-10%] right-[-5%] h-[600px] w-[600px] rounded-full bg-[#D4AF37]/[0.02] blur-[150px]" />
        <div className="absolute bottom-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-[#A89060]/[0.015] blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: "linear-gradient(rgba(212,175,55,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.3) 1px, transparent 1px)",
            backgroundSize: "120px 120px",
          }}
        />
      </div>

      {/* ===== NAVIGATION ===== */}
      <nav className="fixed top-0 right-0 left-0 z-50 border-b border-[#D4AF37]/[0.08] bg-[#060606]/80 backdrop-blur-2xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Link
            href="/"
            className="flex items-center gap-3 text-white/40 transition-colors duration-300 hover:text-white/70"
          >
            <ArrowLeft className="h-4 w-4" />
            <Image src="/logos/pring-group.png" alt="Pring Group" width={28} height={28} className="rounded" />
            <span className="hidden text-sm sm:inline">Pring Group</span>
          </Link>
          <div className="flex items-center gap-4">
            <span className="font-[family-name:var(--font-cursive)] text-lg font-semibold tracking-[0.15em] text-[#D4AF37]">
              LUSSO
            </span>
            <a
              href="https://www.facebook.com/vintagehubs"
              target="_blank"
              rel="noopener noreferrer"
              className="flex cursor-pointer items-center gap-2 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/[0.06] px-4 py-2 text-xs font-bold tracking-wider text-[#D4AF37] uppercase transition-all duration-300 hover:bg-[#D4AF37]/10 hover:shadow-lg hover:shadow-[#D4AF37]/10"
            >
              <Facebook className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Shop</span>
            </a>
          </div>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <section className="relative z-10 flex min-h-[100dvh] items-center overflow-hidden px-6 pt-16">
        {/* Floating diamond particles */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute"
              style={{
                top: `${10 + i * 18}%`,
                left: `${5 + i * 20}%`,
                animation: `diamondSpin ${6 + i * 2}s ease-in-out infinite`,
                animationDelay: `${i * 1.2}s`,
              }}
            >
              <Gem className="h-3 w-3 text-[#D4AF37]/20" />
            </div>
          ))}
        </div>

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-2">
          {/* Left — Text */}
          <div>
            <div
              style={{
                opacity: 0,
                animationName: "fadeInUpLusso",
                animationDuration: "0.7s",
                animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                animationDelay: "0.3s",
                animationFillMode: "forwards",
              }}
            >
              <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/15 bg-[#D4AF37]/[0.04] px-4 py-1.5 text-[10px] font-bold tracking-[0.25em] text-[#D4AF37] uppercase">
                <MapPin className="h-3 w-3" />
                Cabuyao, Laguna
              </span>
            </div>

            <h1
              className="mt-6 mb-2 font-[family-name:var(--font-cursive)] text-6xl leading-[1.05] font-bold tracking-tight sm:text-7xl lg:text-8xl"
              style={{
                opacity: 0,
                animationName: "fadeInUpLusso",
                animationDuration: "1s",
                animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                animationDelay: "0.5s",
                animationFillMode: "forwards",
              }}
            >
              <span className="gold-text">LUSSO</span>
            </h1>

            <p
              className="mb-3 font-[family-name:var(--font-cursive)] text-xl italic text-[#D4AF37]/60 sm:text-2xl"
              style={{
                opacity: 0,
                animationName: "fadeInUpLusso",
                animationDuration: "0.8s",
                animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                animationDelay: "0.7s",
                animationFillMode: "forwards",
              }}
            >
              Elevate Every Outfit
            </p>

            <p
              className="mb-8 max-w-md text-base leading-relaxed text-white/40 sm:text-lg"
              style={{
                opacity: 0,
                animationName: "fadeInUpLusso",
                animationDuration: "0.7s",
                animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                animationDelay: "0.9s",
                animationFillMode: "forwards",
              }}
            >
              Trendy. Stylish. Affordable. Curated fashion jewelry for every
              occasion — from casual to glam nights out.
            </p>

            {/* Gold line divider */}
            <div
              className="mb-8 h-[1px] max-w-[200px]"
              style={{
                background: "linear-gradient(90deg, #D4AF37, transparent)",
                opacity: 0,
                animationName: "fadeInUpLusso",
                animationDuration: "0.5s",
                animationDelay: "1s",
                animationFillMode: "forwards",
              }}
            />

            <div
              className="flex flex-wrap gap-4"
              style={{
                opacity: 0,
                animationName: "fadeInUpLusso",
                animationDuration: "0.7s",
                animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                animationDelay: "1.1s",
                animationFillMode: "forwards",
              }}
            >
              <a
                href="https://www.facebook.com/vintagehubs"
                target="_blank"
                rel="noopener noreferrer"
                className="pulse-gold group inline-flex cursor-pointer items-center gap-2.5 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#C9A84C] px-8 py-4 text-sm font-bold tracking-wider text-[#060606] uppercase transition-all duration-300 hover:shadow-xl hover:shadow-[#D4AF37]/20"
              >
                <Facebook className="h-4 w-4" />
                Shop Collection
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#collections"
                className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-[#D4AF37]/20 px-7 py-4 text-sm font-semibold tracking-wide text-[#D4AF37]/80 transition-all duration-300 hover:border-[#D4AF37]/40 hover:text-[#D4AF37]"
              >
                View Pieces
                <ChevronRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Right — Hero Image */}
          <div
            className="relative hidden lg:block"
            style={{
              opacity: 0,
              animationName: "slideInRight",
              animationDuration: "1.2s",
              animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
              animationDelay: "0.8s",
              animationFillMode: "forwards",
            }}
          >
            <div className="float-jewelry relative">
              {/* Main image */}
              <div className="relative overflow-hidden rounded-[2rem] border border-[#D4AF37]/10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/lusso/hero.jpg"
                  alt="LUSSO Fashion Jewelry"
                  className="h-[520px] w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060606]/40 via-transparent to-[#060606]/10" />

                {/* Gold corner accents */}
                <div className="absolute top-4 left-4 h-12 w-12 border-t-2 border-l-2 border-[#D4AF37]/30 rounded-tl-lg" />
                <div className="absolute right-4 bottom-4 h-12 w-12 border-r-2 border-b-2 border-[#D4AF37]/30 rounded-br-lg" />
              </div>

              {/* Floating badge */}
              <div className="float-reverse absolute -bottom-4 -left-4 rounded-2xl border border-[#D4AF37]/15 bg-[#0A0A0A]/90 p-4 shadow-2xl backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#D4AF37]/10">
                    <Crown className="h-5 w-5 text-[#D4AF37]" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">Premium</p>
                    <p className="text-xs text-white/40">Curated Pieces</p>
                  </div>
                </div>
              </div>

              {/* Floating star rating */}
              <div className="float-jewelry absolute -top-3 -right-3 rounded-2xl border border-[#D4AF37]/15 bg-[#0A0A0A]/90 p-3 shadow-2xl backdrop-blur-xl" style={{ animationDelay: "2s" }}>
                <div className="flex items-center gap-1.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-[#D4AF37] text-[#D4AF37]" />
                  ))}
                </div>
                <p className="mt-1 text-[10px] font-semibold text-white/50">Thousands love us</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          style={{
            opacity: 0,
            animationName: "fadeInUpLusso",
            animationDuration: "0.5s",
            animationDelay: "1.8s",
            animationFillMode: "forwards",
          }}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] font-semibold tracking-[0.25em] text-[#D4AF37]/30 uppercase">
              Explore
            </span>
            <div className="h-8 w-5 rounded-full border border-[#D4AF37]/20">
              <div
                className="mx-auto mt-1.5 h-2 w-1 rounded-full bg-[#D4AF37]/50"
                style={{ animation: "fadeInUpLusso 1.5s ease-in-out infinite" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== JEWELRY MARQUEE BELT ===== */}
      <section className="relative z-10 overflow-hidden border-y border-[#D4AF37]/[0.06] bg-[#060606] py-10">
        <div className="gold-line mx-auto mb-8 max-w-xs" />

        <ScrollReveal variant="fadeUp">
          <p className="mb-8 text-center text-[10px] font-bold tracking-[0.4em] text-[#D4AF37]/40 uppercase">
            The Collection
          </p>
        </ScrollReveal>

        {/* Scrolling belt */}
        <div className="relative overflow-hidden" style={{ maskImage: "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)", WebkitMaskImage: "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)" }}>
          <div className="jewelry-belt flex gap-5 whitespace-nowrap">
            {[...marqueeImages, ...marqueeImages].map((img, i) => (
              <div
                key={`${img.alt}-${i}`}
                className="group relative h-[220px] w-[180px] shrink-0 overflow-hidden rounded-2xl border border-[#D4AF37]/10"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060606]/70 via-transparent to-transparent" />
                <p className="absolute bottom-3 left-3 text-[10px] font-bold tracking-wider text-[#D4AF37]/70 uppercase">
                  {img.alt}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="gold-line mx-auto mt-8 max-w-xs" />
      </section>

      {/* ===== COLLECTIONS — TRANSITIONAL REVEALS ===== */}
      <section id="collections" className="relative z-10 py-28 px-6">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal variant="fadeUp">
            <div className="mb-20 text-center">
              <span className="mb-3 inline-block text-[10px] font-bold tracking-[0.4em] text-[#D4AF37]/50 uppercase">
                Curated For You
              </span>
              <h2 className="font-[family-name:var(--font-cursive)] text-4xl font-bold md:text-6xl">
                Our <span className="gold-text-static">Collections</span>
              </h2>
            </div>
          </ScrollReveal>

          {/* Alternating editorial layout — creates transitional feel */}
          <div className="space-y-24">
            {collections.map((col, i) => (
              <div key={col.name} className={`grid items-center gap-12 md:grid-cols-2 ${i % 2 === 1 ? "md:direction-rtl" : ""}`}>
                {/* Image — alternates sides */}
                <ScrollReveal variant={i % 2 === 0 ? "fadeRight" : "fadeLeft"} delay={100} className={i % 2 === 1 ? "md:order-2" : ""}>
                  <div className="group relative overflow-hidden rounded-[2rem] border border-[#D4AF37]/10">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={col.image}
                      alt={col.name}
                      className="h-[380px] w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#060606]/50 via-transparent to-[#060606]/10" />

                    {/* Gold corner */}
                    <div className="absolute top-4 left-4 h-8 w-8 border-t border-l border-[#D4AF37]/25 rounded-tl-md" />
                    <div className="absolute right-4 bottom-4 h-8 w-8 border-r border-b border-[#D4AF37]/25 rounded-br-md" />

                    {/* Label */}
                    <div className="absolute right-5 bottom-5 rounded-full border border-[#D4AF37]/20 bg-[#060606]/70 px-4 py-1.5 backdrop-blur-md">
                      <p className="text-[10px] font-bold tracking-[0.2em] text-[#D4AF37] uppercase">{col.name}</p>
                    </div>
                  </div>
                </ScrollReveal>

                {/* Text */}
                <ScrollReveal variant={i % 2 === 0 ? "fadeLeft" : "fadeRight"} delay={200} className={i % 2 === 1 ? "md:order-1" : ""}>
                  <div className={i % 2 === 1 ? "md:text-right" : ""}>
                    <span className="mb-2 inline-block text-[10px] font-bold tracking-[0.3em] text-[#D4AF37]/40 uppercase">
                      Collection 0{i + 1}
                    </span>
                    <h3 className="mb-4 font-[family-name:var(--font-cursive)] text-4xl font-bold text-white md:text-5xl">
                      {col.name}
                    </h3>
                    <p className="mb-6 max-w-sm text-base leading-relaxed text-white/40">
                      {col.desc}. Each piece is carefully selected for quality,
                      style, and that unmistakable LUSSO elegance.
                    </p>
                    <div className={`mb-6 h-[1px] max-w-[120px] ${i % 2 === 1 ? "ml-auto" : ""}`} style={{ background: "linear-gradient(90deg, #D4AF37, transparent)" }} />
                    <a
                      href="https://www.facebook.com/vintagehubs"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex cursor-pointer items-center gap-2 text-sm font-semibold tracking-wide text-[#D4AF37] transition-all duration-300 hover:gap-3"
                    >
                      Shop {col.name}
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                  </div>
                </ScrollReveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== EDITORIAL FULL-WIDTH IMAGE ===== */}
      <section className="relative z-10 overflow-hidden">
        <ScrollReveal variant="scale">
          <div className="relative h-[50vh] min-h-[400px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/lusso/model.jpg"
              alt="LUSSO Fashion"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#060606]/80 via-[#060606]/30 to-[#060606]/80" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <p className="mb-3 text-[10px] font-bold tracking-[0.5em] text-[#D4AF37]/60 uppercase">
                  Adorn Yourself
                </p>
                <h2 className="font-[family-name:var(--font-cursive)] text-4xl font-bold text-white md:text-7xl">
                  <span className="gold-text-static">Wear</span> Your
                  Confidence
                </h2>
                <div className="gold-line mx-auto mt-6 max-w-xs" />
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="relative z-10 py-28 px-6">
        <div className="mx-auto max-w-5xl">
          <ScrollReveal variant="fadeUp">
            <div className="mb-20 text-center">
              <span className="mb-3 inline-block text-[10px] font-bold tracking-[0.4em] text-[#D4AF37]/50 uppercase">
                Simple &amp; Elegant
              </span>
              <h2 className="font-[family-name:var(--font-cursive)] text-4xl font-bold md:text-5xl">
                How to <span className="gold-text-static">Shop</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step, i) => (
              <ScrollReveal key={step.num} variant="fadeUp" delay={i * 150}>
                <div className="card-luxury group rounded-2xl border border-[#D4AF37]/[0.08] bg-[#0A0A0A]/80 p-8 text-center backdrop-blur-sm">
                  <div className="mx-auto mb-2 font-[family-name:var(--font-cursive)] text-4xl font-bold text-[#D4AF37]/15">
                    {step.num}
                  </div>
                  <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-xl border border-[#D4AF37]/10 bg-[#D4AF37]/[0.04] transition-all duration-300 group-hover:bg-[#D4AF37]/[0.08]">
                    <step.icon className="h-6 w-6 text-[#D4AF37]" />
                  </div>
                  <h3 className="mb-3 text-lg font-bold text-white">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-white/35">{step.desc}</p>

                  {i < steps.length - 1 && (
                    <div className="absolute top-1/2 -right-5 hidden -translate-y-1/2 md:block">
                      <ArrowRight className="h-4 w-4 text-[#D4AF37]/20" />
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal variant="fadeUp" delay={500}>
            <div className="mt-14 text-center">
              <a
                href="https://www.facebook.com/vintagehubs"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex cursor-pointer items-center gap-2.5 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#C9A84C] px-8 py-4 text-sm font-bold tracking-wider text-[#060606] uppercase transition-all duration-300 hover:shadow-xl hover:shadow-[#D4AF37]/15"
              >
                <Facebook className="h-4 w-4" />
                Start Shopping
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== WHY LUSSO ===== */}
      <section className="relative z-10 border-t border-[#D4AF37]/[0.06] bg-[#0A0808]/50 py-28 px-6">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal variant="fadeUp">
            <div className="mb-20 text-center">
              <span className="mb-3 inline-block text-[10px] font-bold tracking-[0.4em] text-[#D4AF37]/50 uppercase">
                The LUSSO Difference
              </span>
              <h2 className="font-[family-name:var(--font-cursive)] text-4xl font-bold md:text-5xl">
                Why <span className="gold-text-static">LUSSO</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((reason, i) => (
              <ScrollReveal key={reason.title} variant="fadeUp" delay={i * 80}>
                <div className="card-luxury group flex items-start gap-4 rounded-2xl border border-[#D4AF37]/[0.06] bg-[#0A0A0A]/60 p-6 backdrop-blur-sm">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#D4AF37]/10 bg-[#D4AF37]/[0.04] transition-all duration-300 group-hover:bg-[#D4AF37]/[0.08] group-hover:scale-110">
                    <reason.icon className="h-5 w-5 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-base font-bold text-white">{reason.title}</h3>
                    <p className="text-sm leading-relaxed text-white/30">{reason.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="relative z-10 overflow-hidden py-28 px-6">
        <div className="relative mx-auto max-w-5xl">
          <ScrollReveal variant="scale">
            <div className="relative overflow-hidden rounded-3xl border border-[#D4AF37]/10 bg-gradient-to-br from-[#0A0A0A] via-[#0F0D08] to-[#0A0808] px-8 py-20 text-center md:px-16">
              {/* Decorative */}
              <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute -top-20 -right-20 h-[300px] w-[300px] rounded-full bg-[#D4AF37]/[0.04] blur-[100px]" />
                <div className="absolute -bottom-20 -left-20 h-[250px] w-[250px] rounded-full bg-[#C9A84C]/[0.03] blur-[80px]" />
                {/* Gold corner frames */}
                <div className="absolute top-6 left-6 h-16 w-16 border-t border-l border-[#D4AF37]/15 rounded-tl-xl" />
                <div className="absolute right-6 bottom-6 h-16 w-16 border-r border-b border-[#D4AF37]/15 rounded-br-xl" />
              </div>

              <div className="relative">
                <Image
                  src="/logos/lusso.jpg"
                  alt="LUSSO"
                  width={72}
                  height={72}
                  className="mx-auto mb-8 rounded-2xl shadow-2xl shadow-[#D4AF37]/10"
                />

                <h2 className="mb-4 font-[family-name:var(--font-cursive)] text-3xl font-bold text-white md:text-5xl">
                  Ready to Shine with{" "}
                  <span className="gold-text-static">LUSSO</span>?
                </h2>

                <p className="mx-auto mb-10 max-w-2xl text-base text-white/35 sm:text-lg">
                  New collections drop weekly on our Facebook page.
                  Don&apos;t miss out on pieces that sell out fast —
                  message us to claim yours today.
                </p>

                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <a
                    href="https://www.facebook.com/vintagehubs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex cursor-pointer items-center gap-2.5 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#C9A84C] px-8 py-4 text-sm font-bold tracking-wider text-[#060606] uppercase transition-all duration-300 hover:shadow-2xl hover:shadow-[#D4AF37]/20"
                  >
                    <Facebook className="h-4 w-4" />
                    Shop on Facebook
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                  <a
                    href="https://www.facebook.com/vintagehubs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-[#D4AF37]/20 px-7 py-4 text-sm font-semibold tracking-wide text-[#D4AF37]/80 transition-all duration-300 hover:border-[#D4AF37]/40 hover:bg-[#D4AF37]/[0.04]"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Message Us
                  </a>
                </div>

                <p className="mt-8 text-[10px] font-semibold tracking-[0.3em] text-[#D4AF37]/20 uppercase">
                  Limited pieces — shop before they&apos;re gone
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== PART OF PRING GROUP ===== */}
      <section className="relative z-10 border-t border-[#D4AF37]/[0.06] py-16 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <ScrollReveal variant="scale">
            <Image src="/logos/pring-group.png" alt="Pring Group" width={56} height={56} className="mx-auto mb-5 rounded" />
            <p className="mb-2 text-[10px] font-bold tracking-[0.3em] text-white/20 uppercase">Part of</p>
            <h2 className="mb-3 font-[family-name:var(--font-heading)] text-2xl font-bold text-white md:text-3xl">
              Pring Group of Companies
            </h2>
            <p className="mx-auto mb-6 max-w-xl text-base text-white/30">
              LUSSO is one of 16+ businesses under the Pring Group — a
              family-owned conglomerate building a legacy across the Philippines.
            </p>
            <Link
              href="/"
              className="inline-flex cursor-pointer items-center gap-2 text-sm font-semibold text-[#D4AF37] transition-all duration-300 hover:gap-3"
            >
              Explore All Businesses
              <ChevronRight className="h-4 w-4" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="relative z-10 border-t border-[#D4AF37]/[0.06] py-8 px-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 sm:flex-row">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logos/pring-group.png" alt="Pring Group" width={22} height={22} className="rounded" />
            <span className="text-xs text-white/20">Pring Group of Companies</span>
          </Link>
          <p className="text-xs text-white/20">
            &copy; {new Date().getFullYear()} LUSSO. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
