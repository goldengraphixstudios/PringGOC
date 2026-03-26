import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import CountUp from "@/components/CountUp";
import {
  ArrowLeft,
  Facebook,
  BookOpen,
  Star,
  MapPin,
  Truck,
  ShieldCheck,
  Heart,
  Users,
  ArrowRight,
  MessageCircle,
  Eye,
  Package,
  Globe,
  Award,
  Sparkles,
  Library,
  GraduationCap,
  Baby,
  BookMarked,
  Scale,
  ChevronDown,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Nameless Books | First Books Per Kilo Supplier in the Philippines — Cabuyao",
  description:
    "FIRST BOOKS PER KILO SUPPLIER IN THE PHILIPPINES. Affordable books for everyone. Nationwide wholesale and retail. Cabuyao, Laguna.",
};

const genres = [
  "Fiction",
  "Romance",
  "Mystery",
  "Self-Help",
  "History",
  "Sci-Fi",
  "Philosophy",
  "Biography",
  "Poetry",
  "Thriller",
  "Fantasy",
  "Classics",
];
const genresAlt = [
  "Children's",
  "Textbooks",
  "Comics",
  "Young Adult",
  "Horror",
  "Cooking",
  "Travel",
  "Business",
  "Art",
  "Psychology",
  "Drama",
  "Religion",
];

const categories = [
  { name: "Fiction", desc: "Novels, literary gems, and short stories", icon: BookMarked, size: "large" as const },
  { name: "Non-Fiction", desc: "History, science, self-help", icon: Library, size: "medium" as const },
  { name: "Children's", desc: "Reads for little learners", icon: Baby, size: "medium" as const },
  { name: "Textbooks", desc: "Academic reference", icon: GraduationCap, size: "small" as const },
  { name: "Romance", desc: "Love stories", icon: Heart, size: "small" as const },
  { name: "Mixed Bundles", desc: "Surprise kilo bundles", icon: Package, size: "small" as const },
];

const steps = [
  { num: "01", title: "Browse or Visit", desc: "Check our Facebook for available stocks or visit our Cabuyao warehouse.", icon: Eye },
  { num: "02", title: "Pick Your Books", desc: "Choose from thousands of titles across every genre you can imagine.", icon: BookOpen },
  { num: "03", title: "Weigh & Pay", desc: "Books are weighed and you pay per kilo. More books, more savings!", icon: Scale },
];

const reasons = [
  { icon: Award, title: "The Pioneer", desc: "We started books-per-kilo in the Philippines. The original." },
  { icon: Star, title: "Unbeatable Prices", desc: "Get 5-10 books for the price of one brand new book." },
  { icon: Package, title: "Massive Selection", desc: "Thousands of titles always in stock. Every genre." },
  { icon: Truck, title: "Nationwide", desc: "We supply bookstores and schools across the Philippines." },
  { icon: Users, title: "Community", desc: "Join thousands of readers who discovered affordable books." },
  { icon: ShieldCheck, title: "Quality Assured", desc: "Every book is inspected before it reaches your hands." },
];

const gallery = [
  { src: "/nameless-books/stacks.jpg", alt: "Book stacks", rotate: "-3deg" },
  { src: "/nameless-books/reading.jpg", alt: "Reading", rotate: "2deg" },
  { src: "/nameless-books/kids.jpg", alt: "Children reading", rotate: "-1.5deg" },
  { src: "/nameless-books/bookstore.jpg", alt: "Bookstore interior", rotate: "2.5deg" },
];

export default function NamelessBooksPage() {
  return (
    <main className="relative overflow-hidden bg-[#FAF7F1]">
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes marqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marqueeScrollReverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        @keyframes floatBook {
          0%, 100% { transform: translateY(0) rotate(-3deg); }
          50% { transform: translateY(-18px) rotate(3deg); }
        }
        @keyframes floatBookAlt {
          0%, 100% { transform: translateY(0) rotate(2deg); }
          50% { transform: translateY(-14px) rotate(-2deg); }
        }
        @keyframes floatSoft {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes scaleRock {
          0%, 100% { transform: rotate(-3deg) scale(1); }
          25% { transform: rotate(3deg) scale(1.05); }
          50% { transform: rotate(-2deg) scale(1); }
          75% { transform: rotate(2deg) scale(1.02); }
        }
        @keyframes pulseCopper {
          0%, 100% { box-shadow: 0 0 0 0 rgba(194,114,74,0.5); }
          50% { box-shadow: 0 0 0 16px rgba(194,114,74,0); }
        }
        @keyframes bounceIn {
          0% { opacity: 0; transform: scale(0.3); }
          50% { opacity: 1; transform: scale(1.08); }
          70% { transform: scale(0.95); }
          100% { transform: scale(1); }
        }
        @keyframes shimmerCopper {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes breathe {
          0%, 100% { opacity: 0.05; transform: scale(1); }
          50% { opacity: 0.12; transform: scale(1.1); }
        }
        @keyframes borderGlow {
          0%, 100% { border-color: rgba(194,114,74,0.1); }
          50% { border-color: rgba(194,114,74,0.35); }
        }
        @keyframes gentleFloat {
          0%, 100% { transform: translateY(0) rotate(var(--r, 0deg)); }
          50% { transform: translateY(-12px) rotate(var(--r, 0deg)); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(60px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes expandLine {
          from { width: 0; }
          to { width: 100%; }
        }
        @keyframes iconPop {
          0% { transform: scale(0) rotate(-15deg); }
          60% { transform: scale(1.15) rotate(5deg); }
          100% { transform: scale(1) rotate(0deg); }
        }
        @keyframes bgPan {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes particle {
          0% { opacity: 0; transform: translateY(0) scale(0); }
          20% { opacity: 1; transform: translateY(-20px) scale(1); }
          100% { opacity: 0; transform: translateY(-80px) scale(0.3); }
        }
        @keyframes wiggle {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-5deg); }
          75% { transform: rotate(5deg); }
        }
        @keyframes countPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.06); }
        }
        .marquee-track {
          display: flex;
          width: max-content;
        }
        .marquee-belt-wrap {
          overflow: hidden;
          mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
          -webkit-mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
        }
        .copper-shimmer {
          background: linear-gradient(90deg, #C2724A, #E8A87C, #C2724A, #D4956A, #C2724A);
          background-size: 300% auto;
          animation: shimmerCopper 2.5s linear infinite;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .bento-card {
          transition: transform 0.4s cubic-bezier(0.22,1,0.36,1), box-shadow 0.4s ease, border-color 0.4s ease;
        }
        .bento-card:hover {
          transform: translateY(-6px) scale(1.02);
          box-shadow: 0 24px 48px -12px rgba(194,114,74,0.15);
        }
        .gallery-card {
          transition: transform 0.5s cubic-bezier(0.22,1,0.36,1), box-shadow 0.5s ease;
        }
        .gallery-card:hover {
          transform: translateY(-12px) rotate(0deg) scale(1.04) !important;
          box-shadow: 0 30px 60px -12px rgba(194,114,74,0.3);
        }
        .reason-card {
          transition: transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease;
        }
        .reason-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 32px -8px rgba(194,114,74,0.12);
          border-color: rgba(194,114,74,0.3);
        }
        .animated-underline {
          position: relative;
        }
        .animated-underline::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          height: 3px;
          width: 0;
          background: linear-gradient(90deg, #C2724A, #D4956A);
          border-radius: 2px;
          animation: expandLine 1s ease-out 0.5s forwards;
        }
        .bg-pan-gradient {
          background: linear-gradient(135deg, #0F172A, #1E293B, #0F172A, #1E293B);
          background-size: 400% 400%;
          animation: bgPan 12s ease infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}} />

      {/* ───── FLOATING PARTICLES (global decorative) ───── */}
      <div className="pointer-events-none fixed inset-0 z-[1] overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="absolute rounded-full bg-[#C2724A]"
            style={{
              width: `${4 + i * 2}px`, height: `${4 + i * 2}px`,
              left: `${10 + i * 16}%`, top: `${20 + (i % 3) * 25}%`,
              opacity: 0.08,
              animation: `floatSoft ${6 + i * 1.5}s ease-in-out infinite ${i * 0.8}s`,
            }}
          />
        ))}
      </div>

      {/* ───── BACK NAV ───── */}
      <div className="fixed top-0 right-0 left-0 z-50 bg-[#FAF7F1]/80 backdrop-blur-md"
        style={{ animation: "fadeInDown 0.6s ease both" }}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <Link href="/"
            className="flex items-center gap-2 text-sm font-medium text-[#78716C] transition-colors hover:text-[#0F172A]">
            <ArrowLeft className="h-4 w-4" /> Back
          </Link>
          <Link href="/business/nameless-books" className="absolute left-1/2 -translate-x-1/2">
            <Image src="/logos/nameless-books.jpg" alt="Nameless Books" width={44} height={44}
              className="rounded-full shadow-sm transition-transform hover:scale-110" />
          </Link>
          <a href="https://www.facebook.com/Nameless.books" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-[#0F172A] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#C2724A] hover:scale-105">
            <Facebook className="h-4 w-4" /> Follow Us
          </a>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          HERO — Cinematic full viewport
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-20">
        {/* Background image */}
        <div className="pointer-events-none absolute inset-0 z-0">
          <Image src="/nameless-books/hero.jpg" alt="Books" fill priority
            className="object-cover opacity-[0.07]" sizes="100vw" />
        </div>

        {/* Animated decorative circles */}
        <div className="pointer-events-none absolute -top-32 -right-32 z-0 h-96 w-96 rounded-full bg-[#C2724A]/5"
          style={{ animation: "breathe 8s ease-in-out infinite" }} />
        <div className="pointer-events-none absolute -bottom-24 -left-24 z-0 h-72 w-72 rounded-full bg-[#C2724A]/5"
          style={{ animation: "breathe 10s ease-in-out infinite 2s" }} />

        {/* Floating book icons */}
        <div className="pointer-events-none absolute top-[12%] left-[6%] z-[1] hidden opacity-20 lg:block"
          style={{ animation: "floatBook 6s ease-in-out infinite" }}>
          <BookOpen className="h-20 w-20 text-[#C2724A]" strokeWidth={0.8} />
        </div>
        <div className="pointer-events-none absolute right-[8%] bottom-[18%] z-[1] hidden opacity-15 lg:block"
          style={{ animation: "floatBookAlt 7s ease-in-out infinite 1s" }}>
          <BookMarked className="h-16 w-16 text-[#C2724A]" strokeWidth={0.8} />
        </div>
        <div className="pointer-events-none absolute top-[35%] right-[5%] z-[1] hidden opacity-10 lg:block"
          style={{ animation: "floatSoft 9s ease-in-out infinite 0.5s" }}>
          <Library className="h-12 w-12 text-[#C2724A]" strokeWidth={0.8} />
        </div>
        <div className="pointer-events-none absolute bottom-[30%] left-[4%] z-[1] hidden opacity-10 lg:block"
          style={{ animation: "floatSoft 8s ease-in-out infinite 2s" }}>
          <Star className="h-10 w-10 text-[#C2724A]" strokeWidth={0.8} />
        </div>

        {/* Hero content */}
        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <span className="mb-4 inline-block font-[family-name:var(--font-body)] text-sm tracking-[0.3em] font-medium text-[#C2724A] uppercase sm:text-base"
            style={{ animation: "fadeInUp 0.8s ease both 0.2s" }}>
            The Philippines&apos; Pioneer
          </span>

          <h1 className="mb-2 font-[family-name:var(--font-display)] leading-[0.9] font-bold tracking-tight text-[#0F172A]">
            <span className="block text-5xl sm:text-7xl md:text-8xl lg:text-[7rem]"
              style={{ animation: "fadeInUp 0.9s ease both 0.4s" }}>
              FIRST BOOKS
            </span>
            <span className="copper-shimmer block text-6xl sm:text-8xl md:text-9xl lg:text-[9rem]"
              style={{ animation: "fadeInUp 0.9s ease both 0.6s" }}>
              PER KILO
            </span>
          </h1>
          <p className="mb-8 font-[family-name:var(--font-body)] text-lg tracking-[0.15em] font-medium text-[#78716C] uppercase sm:text-xl"
            style={{ animation: "fadeInUp 0.8s ease both 0.8s" }}>
            In the Philippines
          </p>

          {/* Price badge */}
          <div className="mb-10 inline-flex items-center gap-3 rounded-2xl border-2 bg-white/80 px-8 py-4 backdrop-blur-sm"
            style={{ animation: "bounceIn 0.8s ease both 1s, borderGlow 3s ease-in-out infinite 2s" }}>
            <Scale className="h-8 w-8 text-[#C2724A]"
              style={{ animation: "scaleRock 2.5s ease-in-out infinite" }} />
            <div className="text-left">
              <span className="block font-[family-name:var(--font-display)] text-3xl font-bold text-[#0F172A] sm:text-4xl">₱99</span>
              <span className="text-xs tracking-widest font-medium text-[#78716C] uppercase">per kilo</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
            style={{ animation: "fadeInUp 0.8s ease both 1.2s" }}>
            <a href="https://www.facebook.com/Nameless.books" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#C2724A] px-8 py-4 font-[family-name:var(--font-body)] text-base font-semibold text-white shadow-lg transition-all hover:bg-[#A85D3A] hover:shadow-xl hover:scale-105"
              style={{ animation: "pulseCopper 2.5s ease-in-out infinite 2s" }}>
              <MessageCircle className="h-5 w-5" /> Shop on Facebook
            </a>
            <a href="#the-pioneer"
              className="group inline-flex items-center gap-2 rounded-full border-2 border-[#0F172A]/10 px-8 py-4 font-[family-name:var(--font-body)] text-base font-semibold text-[#0F172A] transition-all hover:border-[#C2724A]/30 hover:bg-white">
              Discover Our Story
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
          style={{ animation: "fadeInUp 0.8s ease both 1.6s" }}>
          <div className="flex flex-col items-center gap-2 text-[#78716C]">
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <ChevronDown className="h-4 w-4 animate-bounce" />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          DUAL MARQUEE BELT — Forced CSS scroll animation
      ═══════════════════════════════════════════════════════════ */}
      <section className="border-y border-[#0F172A]/5 bg-[#0F172A] py-5 select-none">
        {/* Row 1 → scrolling left */}
        <div className="marquee-belt-wrap mb-3">
          <div className="marquee-track" style={{ animation: "marqueeScroll 20s linear infinite" }}>
            {[1, 2].map((set) => (
              <div key={set} className="flex shrink-0">
                {genres.map((g, i) => (
                  <span key={`${set}-${i}`}
                    className="mx-5 whitespace-nowrap font-[family-name:var(--font-display)] text-lg font-bold tracking-wider text-white/25 uppercase sm:mx-8 sm:text-2xl">
                    {g} <span className="mx-5 text-[#C2724A]/40 sm:mx-8">·</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
        {/* Row 2 ← scrolling right */}
        <div className="marquee-belt-wrap">
          <div className="marquee-track" style={{ animation: "marqueeScrollReverse 25s linear infinite" }}>
            {[1, 2].map((set) => (
              <div key={set} className="flex shrink-0">
                {genresAlt.map((g, i) => (
                  <span key={`${set}-${i}`}
                    className="mx-5 whitespace-nowrap font-[family-name:var(--font-display)] text-lg font-bold tracking-wider text-[#C2724A]/30 uppercase sm:mx-8 sm:text-2xl">
                    {g} <span className="mx-5 text-white/15 sm:mx-8">·</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          THE PIONEER — Editorial story + stats
      ═══════════════════════════════════════════════════════════ */}
      <section id="the-pioneer" className="relative px-6 py-24 md:py-32">
        {/* Animated bg circle */}
        <div className="pointer-events-none absolute top-10 right-0 h-[500px] w-[500px] rounded-full bg-[#C2724A]/[0.03]"
          style={{ animation: "breathe 12s ease-in-out infinite" }} />

        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <span className="mb-4 inline-block font-[family-name:var(--font-cursive)] text-lg text-[#C2724A] italic"
              style={{ animation: "fadeInLeft 0.6s ease both" }}>
              Chapter I
            </span>
            <h2 className="animated-underline mb-8 inline-block font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight text-[#0F172A] uppercase sm:text-5xl lg:text-6xl">
              The Pioneer
            </h2>
          </ScrollReveal>

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <ScrollReveal>
              <p className="font-[family-name:var(--font-cursive)] text-2xl leading-relaxed font-light text-[#1E293B] sm:text-3xl lg:text-4xl">
                We didn&apos;t just open a bookstore.
                <span className="text-[#C2724A]"> We started a movement.</span>{" "}
                Nameless Books became the first-ever books-per-kilo supplier in
                the Philippines, making reading accessible to everyone.
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-2 gap-6">
              {[
                { value: 100, suffix: "K+", label: "Books Sold", icon: BookOpen },
                { value: 50, suffix: "K+", label: "Kilos Shipped", icon: Scale },
                { value: 1, suffix: "st", label: "Per Kilo in PH", icon: Award },
                { value: 16, suffix: "+", label: "Provinces Served", icon: Globe },
              ].map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <ScrollReveal key={i} delay={i * 0.12}>
                    <div className="group rounded-2xl border border-[#0F172A]/5 bg-white p-6 text-center transition-all hover:border-[#C2724A]/20 hover:shadow-lg">
                      <Icon className="mx-auto mb-2 h-5 w-5 text-[#C2724A] transition-transform group-hover:scale-125"
                        style={{ animation: `iconPop 0.5s ease both ${0.8 + i * 0.15}s` }} />
                      <span className="block font-[family-name:var(--font-display)] text-3xl font-bold text-[#C2724A] sm:text-4xl"
                        style={{ animation: `countPulse 3s ease-in-out infinite ${i * 0.5}s` }}>
                        <CountUp end={stat.value} suffix={stat.suffix} />
                      </span>
                      <span className="mt-1 block text-sm font-medium text-[#78716C]">{stat.label}</span>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          THE VALUE SPLIT — VS price comparison
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative">
        <div className="grid min-h-[500px] lg:grid-cols-2">
          {/* THEM */}
          <ScrollReveal className="relative flex flex-col items-center justify-center overflow-hidden bg-[#0F172A] px-8 py-20 text-center">
            <div className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-white/[0.03]"
              style={{ animation: "breathe 7s ease-in-out infinite" }} />
            <span className="mb-2 text-xs tracking-[0.3em] font-semibold text-white/30 uppercase"
              style={{ animation: "fadeInDown 0.6s ease both" }}>Traditional Bookstore</span>
            <span className="mb-4 font-[family-name:var(--font-display)] text-6xl font-bold text-white sm:text-7xl lg:text-8xl"
              style={{ animation: "slideUp 0.8s ease both 0.2s" }}>₱500</span>
            <span className="mb-6 text-lg text-white/50" style={{ animation: "fadeInUp 0.6s ease both 0.4s" }}>for 1 book</span>
            <div className="relative h-48 w-40 overflow-hidden rounded-xl opacity-40 transition-opacity hover:opacity-60"
              style={{ animation: "fadeInUp 0.7s ease both 0.5s" }}>
              <Image src="/nameless-books/open-book.jpg" alt="Single book" fill className="object-cover" sizes="160px" />
            </div>
          </ScrollReveal>

          {/* US */}
          <ScrollReveal delay={0.15} className="relative flex flex-col items-center justify-center overflow-hidden bg-[#C2724A] px-8 py-20 text-center">
            <div className="pointer-events-none absolute -top-10 -right-10 h-40 w-40 rounded-full bg-white/[0.08]"
              style={{ animation: "breathe 8s ease-in-out infinite 1s" }} />
            {/* Animated sparkle particles */}
            {[...Array(4)].map((_, i) => (
              <div key={i} className="pointer-events-none absolute h-2 w-2 rounded-full bg-white/30"
                style={{
                  left: `${20 + i * 20}%`, bottom: `${15 + i * 10}%`,
                  animation: `particle ${3 + i}s ease-in-out infinite ${i * 0.7}s`,
                }} />
            ))}
            <span className="mb-2 text-xs tracking-[0.3em] font-semibold text-white/60 uppercase"
              style={{ animation: "fadeInDown 0.6s ease both" }}>Nameless Books</span>
            <span className="mb-4 font-[family-name:var(--font-display)] text-6xl font-bold text-white sm:text-7xl lg:text-8xl"
              style={{ animation: "slideUp 0.8s ease both 0.2s" }}>₱99</span>
            <span className="mb-6 text-lg text-white/80" style={{ animation: "fadeInUp 0.6s ease both 0.4s" }}>
              per kilo — 5 to 10 books
            </span>
            <div className="relative h-48 w-56 overflow-hidden rounded-xl shadow-xl transition-transform hover:scale-105"
              style={{ animation: "fadeInUp 0.7s ease both 0.5s" }}>
              <Image src="/nameless-books/stacks.jpg" alt="Stack of affordable books" fill className="object-cover" sizes="224px" />
            </div>
          </ScrollReveal>

          {/* VS badge */}
          <div className="pointer-events-none absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
            <div className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-[#FAF7F1] bg-[#0F172A] font-[family-name:var(--font-display)] text-2xl font-bold text-white shadow-2xl"
              style={{ animation: "bounceIn 0.7s ease both 0.3s, pulseCopper 3s ease-in-out infinite 2s" }}>
              VS
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          BENTO COLLECTION — Asymmetric genre grid
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative px-6 py-24 md:py-32">
        <div className="pointer-events-none absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-[#C2724A]/[0.03]"
          style={{ animation: "breathe 10s ease-in-out infinite 3s" }} />

        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <div className="mb-16 text-center">
              <span className="mb-4 inline-block font-[family-name:var(--font-cursive)] text-lg text-[#C2724A] italic">
                Chapter II
              </span>
              <h2 className="animated-underline mx-auto inline-block font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight text-[#0F172A] uppercase sm:text-5xl">
                The Collection
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid auto-rows-[180px] grid-cols-2 gap-4 sm:auto-rows-[200px] md:grid-cols-4 md:gap-5">
            {categories.map((cat, i) => {
              const Icon = cat.icon;
              const span = cat.size === "large" ? "md:col-span-2 md:row-span-2"
                : cat.size === "medium" ? "md:col-span-2" : "";
              return (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className={`bento-card group flex h-full cursor-default flex-col justify-between rounded-2xl border border-[#0F172A]/5 bg-white p-6 ${span}`}
                    style={{ animation: `borderGlow 4s ease-in-out infinite ${i * 0.6}s` }}>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#C2724A]/10 transition-all group-hover:bg-[#C2724A]/20 group-hover:scale-110">
                      <Icon className="h-6 w-6 text-[#C2724A] transition-transform group-hover:rotate-12" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-[family-name:var(--font-display)] text-xl font-bold text-[#0F172A]">{cat.name}</h3>
                      <p className="text-sm text-[#78716C]">{cat.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          EDITORIAL QUOTE — Full-bleed image
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden">
        <Image src="/nameless-books/reading.jpg" alt="Person reading a book" fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-[#0F172A]/70" />
        {/* Animated overlay glow */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#C2724A]/10 to-transparent opacity-50"
          style={{ animation: "breathe 8s ease-in-out infinite" }} />
        <ScrollReveal className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <Sparkles className="mx-auto mb-6 h-8 w-8 text-[#C2724A]" style={{ animation: "spinSlow 6s linear infinite" }} />
          <blockquote className="mb-6 font-[family-name:var(--font-cursive)] text-3xl leading-snug font-light text-white sm:text-4xl lg:text-5xl">
            &ldquo;Every book deserves a reader.
            <br />
            Every reader deserves
            <span className="text-[#C2724A]"> affordable books.</span>&rdquo;
          </blockquote>
          <p className="text-sm tracking-widest font-medium text-white/50 uppercase">
            — Nameless Books, Cabuyao
          </p>
        </ScrollReveal>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          THE JOURNEY — Connected timeline steps
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative px-6 py-24 md:py-32">
        <div className="mx-auto max-w-5xl">
          <ScrollReveal>
            <div className="mb-16 text-center">
              <span className="mb-4 inline-block font-[family-name:var(--font-cursive)] text-lg text-[#C2724A] italic">
                Chapter III
              </span>
              <h2 className="animated-underline mx-auto inline-block font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight text-[#0F172A] uppercase sm:text-5xl">
                The Journey
              </h2>
            </div>
          </ScrollReveal>

          <div className="relative">
            {/* Vertical connecting line */}
            <div className="absolute top-0 bottom-0 left-8 hidden w-px md:left-1/2 md:block"
              style={{ background: "linear-gradient(to bottom, transparent, #C2724A, transparent)" }} />

            {steps.map((step, i) => {
              const Icon = step.icon;
              const isEven = i % 2 === 0;
              return (
                <ScrollReveal key={i} delay={i * 0.2}>
                  <div className={`relative mb-20 flex items-start gap-6 last:mb-0 md:items-center ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    <div className={`flex-1 ${isEven ? "md:text-right" : "md:text-left"}`}>
                      <span className="mb-2 block font-[family-name:var(--font-display)] text-6xl font-bold text-[#C2724A]/10"
                        style={{ animation: `fadeIn${isEven ? "Right" : "Left"} 0.6s ease both` }}>
                        {step.num}
                      </span>
                      <h3 className="mb-2 font-[family-name:var(--font-display)] text-2xl font-bold text-[#0F172A]">{step.title}</h3>
                      <p className="max-w-sm text-[#78716C] md:ml-auto md:max-w-xs">{step.desc}</p>
                    </div>
                    {/* Circle node with icon animation */}
                    <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-4 border-[#FAF7F1] bg-[#C2724A] shadow-lg transition-transform hover:scale-110"
                      style={{ animation: `bounceIn 0.6s ease both ${0.3 + i * 0.2}s` }}>
                      <Icon className="h-7 w-7 text-white" style={{ animation: `wiggle 3s ease-in-out infinite ${i}s` }} />
                    </div>
                    <div className="hidden flex-1 md:block" />
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SCATTERED GALLERY — Floating rotated images
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-[#0F172A] px-6 py-24 md:py-32">
        {/* Animated bg glow */}
        <div className="pointer-events-none absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C2724A]/[0.04]"
          style={{ animation: "breathe 10s ease-in-out infinite" }} />

        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <div className="mb-16 text-center">
              <span className="mb-4 inline-block font-[family-name:var(--font-cursive)] text-lg text-[#C2724A] italic">
                A Glimpse Inside
              </span>
              <h2 className="font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight text-white uppercase sm:text-5xl">
                Our World of Books
              </h2>
            </div>
          </ScrollReveal>

          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-0">
            {gallery.map((img, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <div className="gallery-card relative h-56 w-44 overflow-hidden rounded-xl shadow-2xl sm:h-72 sm:w-56 md:-mx-3 md:h-80 md:w-64"
                  style={{
                    transform: `rotate(${img.rotate})`,
                    zIndex: i + 1,
                    ["--r" as string]: img.rotate,
                    animation: `gentleFloat ${5 + i * 1.2}s ease-in-out infinite ${i * 0.6}s`,
                  }}>
                  <Image src={img.src} alt={img.alt} fill className="object-cover transition-transform duration-700 hover:scale-110"
                    sizes="(max-width: 768px) 176px, 256px" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="text-xs font-medium tracking-wider text-white/70 uppercase">{img.alt}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          TRUST WALL — Why choose Nameless Books
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative px-6 py-24 md:py-32">
        <div className="pointer-events-none absolute top-20 right-10 h-64 w-64 rounded-full bg-[#C2724A]/[0.03]"
          style={{ animation: "breathe 9s ease-in-out infinite 1s" }} />

        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <div className="mb-16 text-center">
              <span className="mb-4 inline-block font-[family-name:var(--font-cursive)] text-lg text-[#C2724A] italic">
                Chapter IV
              </span>
              <h2 className="animated-underline mx-auto inline-block font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight text-[#0F172A] uppercase sm:text-5xl">
                Why Nameless Books
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((r, i) => {
              const Icon = r.icon;
              return (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className="reason-card group flex gap-4 rounded-2xl border border-[#0F172A]/5 bg-white p-6">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border-2 border-[#C2724A]/15 text-[#C2724A] transition-all group-hover:border-[#C2724A]/40 group-hover:bg-[#C2724A]/5 group-hover:scale-110">
                      <Icon className="h-5 w-5 transition-transform group-hover:rotate-12" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-[family-name:var(--font-display)] text-lg font-bold text-[#0F172A]">{r.title}</h3>
                      <p className="text-sm leading-relaxed text-[#78716C]">{r.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          DRAMATIC CTA FINALE
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-pan-gradient relative overflow-hidden px-6 py-28 md:py-36">
        {/* Animated decorative orbs */}
        <div className="pointer-events-none absolute -top-20 -right-20 h-80 w-80 rounded-full bg-[#C2724A]/10 blur-3xl"
          style={{ animation: "breathe 7s ease-in-out infinite" }} />
        <div className="pointer-events-none absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-[#C2724A]/10 blur-3xl"
          style={{ animation: "breathe 9s ease-in-out infinite 2s" }} />
        {/* Floating particles */}
        {[...Array(5)].map((_, i) => (
          <div key={i} className="pointer-events-none absolute h-1.5 w-1.5 rounded-full bg-[#C2724A]/30"
            style={{
              left: `${15 + i * 18}%`, top: `${30 + (i % 3) * 20}%`,
              animation: `particle ${4 + i}s ease-in-out infinite ${i * 0.8}s`,
            }} />
        ))}

        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <ScrollReveal>
            <BookOpen className="mx-auto mb-6 h-12 w-12 text-[#C2724A]" strokeWidth={1.5}
              style={{ animation: "floatSoft 4s ease-in-out infinite" }} />
            <h2 className="mb-4 font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight text-white uppercase sm:text-5xl lg:text-6xl">
              Turn the Page.
              <br />
              <span className="copper-shimmer">Start Reading Today.</span>
            </h2>
            <p className="mx-auto mb-10 max-w-lg font-[family-name:var(--font-cursive)] text-xl text-white/60">
              Visit our Facebook page to browse available stocks, place orders,
              or find our Cabuyao warehouse.
            </p>

            <a href="https://www.facebook.com/Nameless.books" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-[#C2724A] px-10 py-5 text-lg font-bold text-white shadow-xl transition-all hover:bg-[#A85D3A] hover:shadow-2xl hover:scale-105"
              style={{ animation: "pulseCopper 2.5s ease-in-out infinite" }}>
              <Facebook className="h-6 w-6" /> Visit Our Facebook Page
            </a>

            <div className="mt-10 flex items-center justify-center gap-6 text-sm text-white/30">
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4" style={{ animation: "floatSoft 3s ease-in-out infinite" }} />
                Cabuyao, Laguna
              </span>
              <span className="h-4 w-px bg-white/10" />
              <span className="flex items-center gap-2">
                <Globe className="h-4 w-4" style={{ animation: "spinSlow 12s linear infinite" }} />
                Nationwide Shipping
              </span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ───── PRING GROUP ───── */}
      <section className="border-t border-[#0F172A]/5 bg-[#FAF7F1] px-6 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <ScrollReveal>
            <p className="mb-2 text-xs tracking-[0.2em] font-medium text-[#78716C] uppercase">A Business Under</p>
            <Link href="/" className="inline-block font-[family-name:var(--font-heading)] text-2xl font-bold text-[#0F172A] transition-colors hover:text-[#C2724A]">
              Pring Group of Companies
            </Link>
            <p className="mt-3 text-sm text-[#78716C]">Diversified Filipino business conglomerate based in Cabuyao, Laguna.</p>
          </ScrollReveal>
        </div>
      </section>

      {/* ───── FOOTER ───── */}
      <footer className="border-t border-[#0F172A]/5 bg-[#FAF7F1] px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-[#78716C] sm:flex-row">
          <span>&copy; 2025 Nameless Books. All rights reserved.</span>
          <a href="https://www.facebook.com/Nameless.books" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 transition-colors hover:text-[#C2724A]">
            <Facebook className="h-4 w-4" /> Nameless.books
          </a>
        </div>
      </footer>
    </main>
  );
}
