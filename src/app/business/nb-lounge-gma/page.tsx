import Image from "@/components/Img";
import Link from "next/link";
import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import CountUp from "@/components/CountUp";
import BusinessNavArrows from "@/components/BusinessNavArrows";
import {
  ArrowLeft,
  Facebook,
  BookOpen,
  Coffee,
  Clock,
  MapPin,
  Star,
  Users,
  Heart,
  ArrowRight,
  MessageCircle,
  ChevronDown,
  Armchair,
  BookMarked,
  GraduationCap,
  Sparkles,
  ShieldCheck,
  Lamp,
  Weight,
  Wifi,
  TreePine,
} from "lucide-react";

export const metadata: Metadata = {
  title: "NB Lounge GMA Cavite | Books Per Kilo Cafe Bookstore — 2nd Branch",
  description:
    "NB Lounge 2nd Branch! The FIRST Books per Kilo Cafe Bookstore in the South. Your Second Home for Books & Coffee. GMA, Cavite. Open Daily 10 AM - 10 PM.",
};

const pillars = [
  {
    title: "The Books",
    desc: "Thousands of titles across every genre — fiction, romance, self-help, children's, textbooks — all priced by the kilo at ₱99/kg.",
    image: "/nb-lounge-gma/bookshelf.jpg",
    icon: BookOpen,
    tags: ["Fiction", "Romance", "Sci-Fi", "Self-Help", "Children's"],
  },
  {
    title: "The Cafe",
    desc: "Handcrafted espresso, lattes, cold brews, frappes, and specialty drinks. Paired perfectly with your next great read.",
    image: "/nb-lounge-gma/coffee-art.jpg",
    icon: Coffee,
    tags: ["Espresso", "Latte Art", "Cold Brew", "Frappe", "Matcha"],
  },
  {
    title: "The Space",
    desc: "Plush seating, ambient lighting, free Wi-Fi, and cozy nooks. Designed for readers, students, and remote workers alike.",
    image: "/nb-lounge-gma/cozy.jpg",
    icon: Armchair,
    tags: ["Cozy Seats", "Wi-Fi", "Study Area", "Reading Nooks", "AC"],
  },
];

const zigzag = [
  {
    title: "Books By The Kilo",
    desc: "Browse our shelves and pick as many books as you like. They're weighed and priced at just ₱99 per kilo — making reading affordable for everyone.",
    image: "/nb-lounge-gma/books-coffee.jpg",
    icon: Weight,
  },
  {
    title: "A Space To Stay",
    desc: "NB Lounge isn't just a store — it's a destination. Stay for hours with your coffee and books. We're open 10 AM to 10 PM every day.",
    image: "/nb-lounge-gma/studying.jpg",
    icon: Lamp,
  },
  {
    title: "Community Hub",
    desc: "From students cramming for exams to friends catching up over coffee and books — NB Lounge GMA is where Cavite's readers gather.",
    image: "/nb-lounge-gma/reading-cafe.jpg",
    icon: Users,
  },
];

const reasons = [
  { icon: Star, title: "Original Concept", desc: "The books-per-kilo cafe bookstore that started a movement." },
  { icon: MapPin, title: "GMA, Cavite", desc: "Conveniently located and easy to find in the heart of GMA." },
  { icon: Clock, title: "10 AM – 10 PM", desc: "12 hours daily — morning coffee to evening reads." },
  { icon: Wifi, title: "Free Wi-Fi", desc: "Stay connected while you read, study, or work." },
  { icon: ShieldCheck, title: "Curated Books", desc: "Every book is hand-selected and quality-checked." },
  { icon: Heart, title: "Built for You", desc: "A space designed around comfort and community." },
];

const filmstrip = [
  { src: "/nb-lounge-gma/hero.jpg", alt: "NB Lounge GMA interior" },
  { src: "/nb-lounge-gma/bookshelf.jpg", alt: "Book shelves" },
  { src: "/nb-lounge-gma/coffee-art.jpg", alt: "Latte art" },
  { src: "/nb-lounge-gma/cozy.jpg", alt: "Cozy seating" },
  { src: "/nb-lounge-gma/studying.jpg", alt: "Study space" },
  { src: "/nb-lounge-gma/interior2.jpg", alt: "Cafe atmosphere" },
  { src: "/nb-lounge-gma/books-coffee.jpg", alt: "Books and coffee" },
  { src: "/nb-lounge-gma/reading-cafe.jpg", alt: "Reading at NB Lounge" },
];

export default function NBLoungeGMAPage() {
  return (
    <main className="relative overflow-hidden bg-[#F4F4EC]">
      <BusinessNavArrows currentSlug="nb-lounge-gma" />
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-25px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes marqueeFlow {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes breathe {
          0%, 100% { opacity: 0.04; transform: scale(1); }
          50% { opacity: 0.1; transform: scale(1.08); }
        }
        @keyframes floatSoft {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes bounceIn {
          0% { opacity: 0; transform: scale(0.3); }
          50% { opacity: 1; transform: scale(1.06); }
          70% { transform: scale(0.96); }
          100% { transform: scale(1); }
        }
        @keyframes shimmerSage {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes pulseSage {
          0%, 100% { box-shadow: 0 0 0 0 rgba(91,117,83,0.4); }
          50% { box-shadow: 0 0 0 14px rgba(91,117,83,0); }
        }
        @keyframes borderGlow {
          0%, 100% { border-color: rgba(91,117,83,0.08); }
          50% { border-color: rgba(91,117,83,0.25); }
        }
        @keyframes logoGlow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(91,117,83,0.3), 0 0 30px rgba(91,117,83,0.05); }
          50% { box-shadow: 0 0 0 8px rgba(91,117,83,0), 0 0 40px rgba(91,117,83,0.1); }
        }
        @keyframes expandLine {
          from { width: 0; }
          to { width: 100%; }
        }
        @keyframes particle {
          0% { opacity: 0; transform: translateY(0) scale(0); }
          30% { opacity: 0.7; transform: translateY(-25px) scale(1); }
          100% { opacity: 0; transform: translateY(-70px) scale(0.2); }
        }
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes bgPan {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes filmScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-wrap {
          overflow: hidden;
          mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
          -webkit-mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
        }
        .marquee-track { display: flex; width: max-content; }
        .sage-shimmer {
          background: linear-gradient(90deg, #5B7553, #8BA882, #5B7553, #7A9B72, #5B7553);
          background-size: 300% auto;
          animation: shimmerSage 3s linear infinite;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .pillar-card {
          transition: transform 0.45s cubic-bezier(0.22,1,0.36,1), box-shadow 0.45s ease;
        }
        .pillar-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 24px 48px -12px rgba(91,117,83,0.18);
        }
        .zigzag-img {
          transition: transform 0.6s cubic-bezier(0.22,1,0.36,1);
        }
        .zigzag-img:hover {
          transform: scale(1.04);
        }
        .reason-pill {
          transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
        }
        .reason-pill:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 24px -6px rgba(91,117,83,0.12);
          background-color: #fff;
        }
        .filmstrip-track { display: flex; width: max-content; }
        .film-frame {
          transition: transform 0.4s cubic-bezier(0.22,1,0.36,1);
        }
        .film-frame:hover {
          transform: scale(1.05);
        }
        .animated-underline { position: relative; display: inline-block; }
        .animated-underline::after {
          content: ''; position: absolute; bottom: -6px; left: 0;
          height: 3px; width: 0;
          background: linear-gradient(90deg, #5B7553, #8BA882);
          border-radius: 2px; animation: expandLine 1s ease-out 0.5s forwards;
        }
        .bg-pan-forest {
          background: linear-gradient(135deg, #1A1E18, #232B20, #1A1E18, #232B20);
          background-size: 400% 400%;
          animation: bgPan 14s ease infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}} />

      {/* ───── AMBIENT PARTICLES ───── */}
      <div className="pointer-events-none fixed inset-0 z-[1] overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="absolute rounded-full bg-[#5B7553]"
            style={{ width: `${3 + i * 2}px`, height: `${3 + i * 2}px`,
              left: `${10 + i * 18}%`, top: `${18 + (i % 3) * 25}%`, opacity: 0.05,
              animation: `floatSoft ${7 + i * 1.4}s ease-in-out infinite ${i * 0.8}s` }} />
        ))}
      </div>

      {/* ───── NAV ───── */}
      <div className="fixed top-0 right-0 left-0 z-50 bg-[#F4F4EC]/80 backdrop-blur-md"
        style={{ animation: "fadeInDown 0.6s ease both" }}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <Link href="/" className="flex items-center gap-2 text-sm font-medium text-[#6B706A] transition-colors hover:text-[#1A1E18]">
            <ArrowLeft className="h-4 w-4" /> Back
          </Link>
          <Link href="/business/nb-lounge-gma" className="absolute left-1/2 -translate-x-1/2">
            <Image src="/logos/nb-lounge-gma.jpg" alt="NB Lounge GMA" width={40} height={40}
              className="rounded-full shadow-sm transition-transform hover:scale-110" />
          </Link>
          <a href="https://www.facebook.com/people/NB-Lounge-GMA-Cavite/61582687594838/" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-[#1A1E18] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#5B7553] hover:scale-105">
            <Facebook className="h-4 w-4" /> Follow Us
          </a>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          HERO — Logo-first centered dark section
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#1A1E18] px-6 pt-20 pb-12">
        {/* Bg image faded */}
        <div className="pointer-events-none absolute inset-0 z-0">
          <Image src="/nb-lounge-gma/hero.jpg" alt="NB Lounge GMA" fill priority
            className="object-cover opacity-[0.12]" sizes="100vw" />
        </div>
        {/* Ambient orbs */}
        <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-[#5B7553]/10 blur-3xl"
          style={{ animation: "breathe 10s ease-in-out infinite" }} />
        <div className="pointer-events-none absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-[#5B7553]/10 blur-3xl"
          style={{ animation: "breathe 12s ease-in-out infinite 3s" }} />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          {/* Logo — large, prominent */}
          <div className="mb-8" style={{ animation: "bounceIn 0.8s ease both 0.2s" }}>
            <Image src="/logos/nb-lounge-gma.jpg" alt="NB Lounge GMA Cavite" width={120} height={120}
              className="mx-auto rounded-3xl shadow-2xl"
              style={{ animation: "logoGlow 3s ease-in-out infinite 1.5s" }} />
          </div>

          {/* Branch badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#5B7553]/30 bg-[#5B7553]/10 px-5 py-2 backdrop-blur-sm"
            style={{ animation: "fadeInUp 0.7s ease both 0.4s" }}>
            <TreePine className="h-4 w-4 text-[#8BA882]" />
            <span className="text-sm font-medium text-[#8BA882]">2nd Branch · GMA, Cavite</span>
          </div>

          <h1 className="mb-4 font-[family-name:var(--font-display)] leading-[0.9] font-bold tracking-tight">
            <span className="block text-lg tracking-[0.25em] font-medium text-[#8BA882] uppercase sm:text-xl"
              style={{ animation: "fadeInUp 0.7s ease both 0.5s" }}>
              The FIRST Books Per Kilo
            </span>
            <span className="sage-shimmer mt-2 block text-5xl uppercase sm:text-6xl md:text-7xl lg:text-8xl"
              style={{ animation: "fadeInUp 0.8s ease both 0.65s" }}>
              Cafe Bookstore
            </span>
            <span className="mt-1 block text-3xl text-white sm:text-4xl md:text-5xl"
              style={{ animation: "fadeInUp 0.8s ease both 0.8s" }}>
              in the South!
            </span>
          </h1>

          <p className="mb-3 font-[family-name:var(--font-cursive)] text-2xl text-white/50 italic sm:text-3xl"
            style={{ animation: "fadeInUp 0.7s ease both 0.95s" }}>
            Your Second Home for Books &amp; Coffee
          </p>

          {/* Hours */}
          <div className="mb-8 flex items-center justify-center gap-2 text-sm text-white/40"
            style={{ animation: "fadeInUp 0.6s ease both 1.05s" }}>
            <Clock className="h-4 w-4 text-[#8BA882]" />
            <span>Open Daily · 10 AM – 10 PM</span>
          </div>

          {/* Hero image inset */}
          <div className="relative mx-auto mb-10 max-w-2xl overflow-hidden rounded-2xl shadow-2xl"
            style={{ animation: "fadeInUp 0.9s ease both 1.15s" }}>
            <div className="aspect-[16/9] relative">
              <Image src="/nb-lounge-gma/hero.jpg" alt="NB Lounge GMA Cavite interior" fill
                className="object-cover" sizes="(max-width: 768px) 100vw, 672px" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1E18]/40 to-transparent" />
            </div>
            {/* Price badge on image */}
            <div className="absolute bottom-4 right-4 rounded-xl bg-[#5B7553]/90 px-4 py-2 backdrop-blur-sm">
              <span className="font-[family-name:var(--font-display)] text-xl font-bold text-white">₱99</span>
              <span className="ml-1 text-xs text-white/70">/kg</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
            style={{ animation: "fadeInUp 0.8s ease both 1.3s" }}>
            <a href="https://www.facebook.com/people/NB-Lounge-GMA-Cavite/61582687594838/" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#5B7553] px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:bg-[#4A6344] hover:shadow-xl hover:scale-105"
              style={{ animation: "pulseSage 2.5s ease-in-out infinite 2.5s" }}>
              <MessageCircle className="h-5 w-5" /> Visit Us on Facebook
            </a>
            <a href="#three-pillars"
              className="group inline-flex items-center gap-2 rounded-full border-2 border-white/15 px-8 py-4 text-base font-semibold text-white transition-all hover:border-[#5B7553]/40 hover:bg-white/5">
              Explore <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* Scroll */}
        <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2"
          style={{ animation: "fadeInUp 0.7s ease both 1.6s" }}>
          <div className="flex flex-col items-center gap-2 text-white/30">
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <ChevronDown className="h-4 w-4 animate-bounce" />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          MARQUEE BELT
      ═══════════════════════════════════════════════════════════ */}
      <section className="border-y border-[#5B7553]/10 bg-[#5B7553] py-4 select-none">
        <div className="marquee-wrap">
          <div className="marquee-track" style={{ animation: "marqueeFlow 20s linear infinite" }}>
            {[1, 2].map((set) => (
              <div key={set} className="flex shrink-0">
                {["Read", "Sip", "Relax", "Study", "Discover", "Connect", "Create", "Unwind", "Browse", "Stay"].map((w, i) => (
                  <span key={`${set}-${i}`}
                    className="mx-6 whitespace-nowrap font-[family-name:var(--font-display)] text-xl font-bold tracking-wider uppercase sm:mx-10 sm:text-2xl"
                    style={{ color: i % 2 === 0 ? "rgba(255,255,255,0.4)" : "rgba(255,255,255,0.2)" }}>
                    {w} <span className="mx-6 text-white/10 sm:mx-10">·</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          THREE PILLARS — Books / Cafe / Space
      ═══════════════════════════════════════════════════════════ */}
      <section id="three-pillars" className="relative px-6 py-24 md:py-32">
        <div className="pointer-events-none absolute -top-20 right-0 h-[400px] w-[400px] rounded-full bg-[#5B7553]/[0.03]"
          style={{ animation: "breathe 12s ease-in-out infinite" }} />

        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <div className="mb-16 text-center">
              <p className="mb-3 font-[family-name:var(--font-cursive)] text-lg text-[#5B7553] italic">Three experiences, one home</p>
              <h2 className="animated-underline mx-auto inline-block font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight text-[#1A1E18] uppercase sm:text-5xl">
                What Awaits You
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid gap-6 md:grid-cols-3">
            {pillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <ScrollReveal key={i} delay={i * 0.12}>
                  <div className="pillar-card group overflow-hidden rounded-3xl border border-[#1A1E18]/5 bg-white">
                    <div className="relative h-56 overflow-hidden sm:h-64">
                      <Image src={p.image} alt={p.title} fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 33vw" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                      <div className="absolute bottom-4 left-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white/90 shadow-md backdrop-blur-sm">
                        <Icon className="h-5 w-5 text-[#5B7553]" />
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="mb-2 font-[family-name:var(--font-display)] text-2xl font-bold text-[#1A1E18]">{p.title}</h3>
                      <p className="mb-4 text-sm leading-relaxed text-[#6B706A]">{p.desc}</p>
                      <div className="flex flex-wrap gap-2">
                        {p.tags.map((t, j) => (
                          <span key={j} className="rounded-full bg-[#5B7553]/8 px-3 py-1 text-xs font-medium text-[#5B7553] transition-colors hover:bg-[#5B7553]/15">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          ATMOSPHERIC QUOTE — Full bleed
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden">
        <Image src="/nb-lounge-gma/interior2.jpg" alt="Cafe atmosphere" fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-[#1A1E18]/60" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#5B7553]/10 to-transparent"
          style={{ animation: "breathe 9s ease-in-out infinite" }} />
        <ScrollReveal className="relative z-10 mx-auto max-w-3xl px-6 text-center">
          <Sparkles className="mx-auto mb-5 h-7 w-7 text-[#8BA882]" style={{ animation: "spinSlow 8s linear infinite" }} />
          <blockquote className="mb-5 font-[family-name:var(--font-cursive)] text-3xl leading-snug font-light text-white sm:text-4xl lg:text-5xl">
            &ldquo;Your second home
            <br />for <span className="text-[#8BA882]">books &amp; coffee.</span>&rdquo;
          </blockquote>
          <p className="text-sm tracking-widest font-medium text-white/40 uppercase">— NB Lounge GMA, Cavite</p>
        </ScrollReveal>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          ZIGZAG FEATURES — Alternating image/text
      ═══════════════════════════════════════════════════════════ */}
      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl space-y-20 md:space-y-28">
          {zigzag.map((item, i) => {
            const Icon = item.icon;
            const isEven = i % 2 === 0;
            return (
              <ScrollReveal key={i}>
                <div className={`flex flex-col items-center gap-10 md:flex-row ${!isEven ? "md:flex-row-reverse" : ""}`}>
                  {/* Image */}
                  <div className="zigzag-img relative w-full overflow-hidden rounded-3xl shadow-xl md:w-1/2">
                    <div className="aspect-[4/3] relative">
                      <Image src={item.image} alt={item.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                    </div>
                  </div>
                  {/* Text */}
                  <div className="w-full md:w-1/2">
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#5B7553]/10"
                      style={{ animation: `bounceIn 0.6s ease both ${0.3 + i * 0.15}s` }}>
                      <Icon className="h-7 w-7 text-[#5B7553]" />
                    </div>
                    <h3 className="mb-3 font-[family-name:var(--font-display)] text-3xl font-bold text-[#1A1E18] sm:text-4xl">{item.title}</h3>
                    <p className="mb-6 max-w-md text-base leading-relaxed text-[#6B706A]">{item.desc}</p>
                    <a href="https://www.facebook.com/people/NB-Lounge-GMA-Cavite/61582687594838/" target="_blank" rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 text-sm font-semibold text-[#5B7553] transition-colors hover:text-[#4A6344]">
                      Learn more on Facebook <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          FILMSTRIP GALLERY — Horizontal auto-scroll
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-[#1A1E18] py-20 md:py-28">
        <ScrollReveal>
          <div className="mb-12 text-center px-6">
            <p className="mb-3 font-[family-name:var(--font-cursive)] text-lg text-[#8BA882] italic">A glimpse inside</p>
            <h2 className="font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight text-white uppercase sm:text-5xl">
              The Space
            </h2>
          </div>
        </ScrollReveal>

        <div className="marquee-wrap">
          <div className="filmstrip-track gap-4" style={{ animation: "filmScroll 35s linear infinite" }}>
            {[...filmstrip, ...filmstrip].map((img, i) => (
              <div key={i} className="film-frame relative h-52 w-72 shrink-0 overflow-hidden rounded-2xl sm:h-64 sm:w-80 md:h-72 md:w-96">
                <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="384px" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity hover:opacity-100">
                  <span className="absolute bottom-3 left-4 text-xs font-medium tracking-wider text-white uppercase">{img.alt}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          WHY NB LOUNGE GMA — Pill grid
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative px-6 py-24 md:py-32">
        <div className="pointer-events-none absolute bottom-0 left-0 h-80 w-80 rounded-full bg-[#5B7553]/[0.03]"
          style={{ animation: "breathe 11s ease-in-out infinite 2s" }} />

        <div className="mx-auto max-w-5xl">
          <ScrollReveal>
            <div className="mb-16 text-center">
              <p className="mb-3 font-[family-name:var(--font-cursive)] text-lg text-[#5B7553] italic">Why people love us</p>
              <h2 className="animated-underline mx-auto inline-block font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight text-[#1A1E18] uppercase sm:text-5xl">
                Why NB Lounge GMA
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((r, i) => {
              const Icon = r.icon;
              return (
                <ScrollReveal key={i} delay={i * 0.08}>
                  <div className="reason-pill flex items-start gap-4 rounded-2xl border border-[#1A1E18]/5 bg-[#F4F4EC] p-5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#5B7553]/10 transition-colors hover:bg-[#5B7553]/20">
                      <Icon className="h-5 w-5 text-[#5B7553]" />
                    </div>
                    <div>
                      <h3 className="mb-0.5 font-[family-name:var(--font-display)] text-base font-bold text-[#1A1E18]">{r.title}</h3>
                      <p className="text-sm text-[#6B706A]">{r.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          CTA FINALE
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-pan-forest relative overflow-hidden px-6 py-28 md:py-36">
        <div className="pointer-events-none absolute -top-16 -right-16 h-72 w-72 rounded-full bg-[#5B7553]/15 blur-3xl"
          style={{ animation: "breathe 8s ease-in-out infinite" }} />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-[#5B7553]/10 blur-3xl"
          style={{ animation: "breathe 10s ease-in-out infinite 2s" }} />
        {[...Array(4)].map((_, i) => (
          <div key={i} className="pointer-events-none absolute h-1.5 w-1.5 rounded-full bg-[#8BA882]/25"
            style={{ left: `${15 + i * 20}%`, top: `${20 + (i % 3) * 22}%`,
              animation: `particle ${4 + i}s ease-in-out infinite ${i * 0.8}s` }} />
        ))}

        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <ScrollReveal>
            <div className="mb-6" style={{ animation: "floatSoft 4s ease-in-out infinite" }}>
              <Image src="/logos/nb-lounge-gma.jpg" alt="NB Lounge GMA" width={80} height={80}
                className="mx-auto rounded-2xl shadow-xl" />
            </div>

            <h2 className="mb-4 font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight text-white uppercase sm:text-5xl lg:text-6xl">
              Come Home to
              <br />
              <span className="sage-shimmer">NB Lounge GMA.</span>
            </h2>
            <p className="mx-auto mb-6 max-w-md font-[family-name:var(--font-cursive)] text-xl text-white/50">
              Grab a book. Order a coffee. Stay a while.
            </p>

            <div className="mx-auto mb-10 flex max-w-sm flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm sm:flex-row sm:items-center sm:justify-center sm:gap-6 sm:rounded-full">
              <span className="flex items-center justify-center gap-2 text-sm text-white/60">
                <Clock className="h-4 w-4 text-[#8BA882]" /> 10 AM – 10 PM Daily
              </span>
              <span className="hidden h-4 w-px bg-white/10 sm:block" />
              <span className="flex items-center justify-center gap-2 text-sm text-white/60">
                <MapPin className="h-4 w-4 text-[#8BA882]" /> GMA, Cavite
              </span>
            </div>

            <a href="https://www.facebook.com/people/NB-Lounge-GMA-Cavite/61582687594838/" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-[#5B7553] px-10 py-5 text-lg font-bold text-white shadow-xl transition-all hover:bg-[#4A6344] hover:shadow-2xl hover:scale-105"
              style={{ animation: "pulseSage 2.5s ease-in-out infinite" }}>
              <Facebook className="h-6 w-6" /> Visit Our Facebook Page
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* ───── PRING GROUP ───── */}
      <section className="border-t border-[#1A1E18]/5 bg-[#F4F4EC] px-6 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <ScrollReveal>
            <p className="mb-2 text-xs tracking-[0.2em] font-medium text-[#6B706A] uppercase">A Business Under</p>
            <Link href="/" className="inline-block font-[family-name:var(--font-heading)] text-2xl font-bold text-[#1A1E18] transition-colors hover:text-[#5B7553]">
              Pring Group of Companies
            </Link>
            <p className="mt-3 text-sm text-[#6B706A]">Diversified Filipino business conglomerate based in Cabuyao, Laguna.</p>
          </ScrollReveal>
        </div>
      </section>

      {/* ───── FOOTER ───── */}
      <footer className="border-t border-[#1A1E18]/5 bg-[#F4F4EC] px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-[#6B706A] sm:flex-row">
          <span>&copy; 2025 NB Lounge GMA Cavite. All rights reserved.</span>
          <a href="https://www.facebook.com/people/NB-Lounge-GMA-Cavite/61582687594838/" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 transition-colors hover:text-[#5B7553]">
            <Facebook className="h-4 w-4" /> NB Lounge GMA Cavite
          </a>
        </div>
      </footer>
    </main>
  );
}
