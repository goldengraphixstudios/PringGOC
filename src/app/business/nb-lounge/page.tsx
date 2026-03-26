import Image from "@/components/Img";
import Link from "next/link";
import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import CountUp from "@/components/CountUp";
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
  Globe,
} from "lucide-react";

export const metadata: Metadata = {
  title: "NB Lounge | The FIRST Books Per Kilo Cafe Bookstore in the South — Cabuyao",
  description:
    "The FIRST Books per Kilo Cafe Bookstore in the South! Read. Sip. Relax. Open Daily 9 AM - 10 PM. Cabuyao, Laguna.",
};

const offerings = [
  { icon: BookOpen, title: "Books Per Kilo", desc: "Thousands of titles priced by weight — affordable reading for all" },
  { icon: Coffee, title: "Specialty Coffee", desc: "Handcrafted lattes, espresso, and cold brews to fuel your reading" },
  { icon: Armchair, title: "Cozy Lounge", desc: "Plush seating, warm lighting, and the perfect reading atmosphere" },
  { icon: GraduationCap, title: "Study Hub", desc: "Wi-Fi ready space for students and remote workers" },
  { icon: Lamp, title: "Reading Nooks", desc: "Quiet corners designed for getting lost in a good book" },
  { icon: Heart, title: "Community Events", desc: "Book clubs, open mics, and literary gatherings" },
];

const steps = [
  { num: "1", title: "Walk In", desc: "Step into our warm, welcoming cafe bookstore. No membership needed.", icon: MapPin },
  { num: "2", title: "Browse & Read", desc: "Explore thousands of books across every genre on our shelves.", icon: BookOpen },
  { num: "3", title: "Grab a Coffee", desc: "Order your favorite brew from our cafe counter.", icon: Coffee },
  { num: "4", title: "Weigh & Pay", desc: "Pick your books, weigh them at ₱99/kg, and they're yours!", icon: Weight },
];

const reasons = [
  { icon: Star, title: "First of Its Kind", desc: "The original books-per-kilo cafe bookstore concept in Southern Luzon." },
  { icon: Clock, title: "Open 9AM–10PM", desc: "Generous hours so you can visit any time — morning coffee or evening reads." },
  { icon: Coffee, title: "Real Cafe, Real Books", desc: "Not just a bookstore with coffee — a full cafe experience meets literature." },
  { icon: ShieldCheck, title: "Curated Selection", desc: "Every book is hand-selected and inspected for quality." },
  { icon: Users, title: "Community Space", desc: "A gathering place for readers, students, and coffee lovers alike." },
  { icon: Globe, title: "Expanding Fast", desc: "Multiple branches proving the concept that readers love." },
];

const galleryImages = [
  { src: "/nb-lounge/interior.jpg", alt: "Cafe interior", span: "col-span-2 row-span-2" },
  { src: "/nb-lounge/coffee.jpg", alt: "Specialty coffee", span: "" },
  { src: "/nb-lounge/shelf.jpg", alt: "Book shelves", span: "" },
  { src: "/nb-lounge/study.jpg", alt: "Study space", span: "col-span-2" },
  { src: "/nb-lounge/nook.jpg", alt: "Reading nook", span: "" },
  { src: "/nb-lounge/reading.jpg", alt: "Reading at NB Lounge", span: "" },
];

export default function NBLoungePage() {
  return (
    <main className="relative overflow-hidden bg-[#F8F4EE]">
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
        @keyframes steam {
          0% { opacity: 0; transform: translateY(0) scaleX(1); }
          50% { opacity: 0.6; transform: translateY(-16px) scaleX(1.2); }
          100% { opacity: 0; transform: translateY(-32px) scaleX(0.8); }
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
        @keyframes shimmerWarm {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes pulseWarm {
          0%, 100% { box-shadow: 0 0 0 0 rgba(139,109,75,0.4); }
          50% { box-shadow: 0 0 0 14px rgba(139,109,75,0); }
        }
        @keyframes borderGlow {
          0%, 100% { border-color: rgba(139,109,75,0.08); }
          50% { border-color: rgba(139,109,75,0.25); }
        }
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes expandLine {
          from { width: 0; }
          to { width: 100%; }
        }
        @keyframes slideReveal {
          from { opacity: 0; transform: translateY(50px) scale(0.96); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes particle {
          0% { opacity: 0; transform: translateY(0) scale(0); }
          30% { opacity: 0.8; transform: translateY(-20px) scale(1); }
          100% { opacity: 0; transform: translateY(-60px) scale(0.3); }
        }
        @keyframes bgPan {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .marquee-wrap {
          overflow: hidden;
          mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
          -webkit-mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
        }
        .marquee-track {
          display: flex;
          width: max-content;
        }
        .warm-shimmer {
          background: linear-gradient(90deg, #8B6D4B, #C4956A, #8B6D4B, #B08860, #8B6D4B);
          background-size: 300% auto;
          animation: shimmerWarm 3s linear infinite;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .offering-card {
          transition: transform 0.4s cubic-bezier(0.22,1,0.36,1), box-shadow 0.4s ease, border-color 0.4s ease;
        }
        .offering-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 40px -10px rgba(139,109,75,0.15);
          border-color: rgba(139,109,75,0.3);
        }
        .gallery-item {
          transition: transform 0.5s cubic-bezier(0.22,1,0.36,1);
        }
        .gallery-item:hover {
          transform: scale(1.03);
        }
        .gallery-item:hover .gallery-overlay {
          opacity: 1;
        }
        .reason-row {
          transition: transform 0.35s ease, box-shadow 0.35s ease;
        }
        .reason-row:hover {
          transform: translateX(8px);
          box-shadow: -4px 0 0 0 #8B6D4B;
        }
        .animated-underline {
          position: relative;
          display: inline-block;
        }
        .animated-underline::after {
          content: '';
          position: absolute;
          bottom: -6px;
          left: 0;
          height: 3px;
          width: 0;
          background: linear-gradient(90deg, #8B6D4B, #C4956A);
          border-radius: 2px;
          animation: expandLine 1s ease-out 0.5s forwards;
        }
        .bg-pan-warm {
          background: linear-gradient(135deg, #1C1410, #2A1F18, #1C1410, #2A1F18);
          background-size: 400% 400%;
          animation: bgPan 15s ease infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}} />

      {/* ───── FLOATING AMBIENT PARTICLES ───── */}
      <div className="pointer-events-none fixed inset-0 z-[1] overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="absolute rounded-full bg-[#8B6D4B]"
            style={{
              width: `${3 + i * 2}px`, height: `${3 + i * 2}px`,
              left: `${12 + i * 18}%`, top: `${15 + (i % 3) * 28}%`,
              opacity: 0.06,
              animation: `floatSoft ${7 + i * 1.5}s ease-in-out infinite ${i * 0.9}s`,
            }} />
        ))}
      </div>

      {/* ───── NAV BAR ───── */}
      <div className="fixed top-0 right-0 left-0 z-50 bg-[#F8F4EE]/80 backdrop-blur-md"
        style={{ animation: "fadeInDown 0.6s ease both" }}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <Link href="/" className="flex items-center gap-2 text-sm font-medium text-[#8C7E72] transition-colors hover:text-[#1C1410]">
            <ArrowLeft className="h-4 w-4" /> Back
          </Link>
          <Link href="/business/nb-lounge" className="absolute left-1/2 -translate-x-1/2">
            <Image src="/logos/nb-lounge.jpg" alt="NB Lounge" width={44} height={44}
              className="rounded-full shadow-sm transition-transform hover:scale-110" />
          </Link>
          <a href="https://www.facebook.com/nblounge2023" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-[#1C1410] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#8B6D4B] hover:scale-105">
            <Facebook className="h-4 w-4" /> Follow Us
          </a>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          THE ENTRANCE — Hero with frosted overlay card
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative flex min-h-screen items-end px-6 pb-24 pt-20 lg:items-center lg:pb-0">
        {/* Full background image */}
        <div className="absolute inset-0 z-0">
          <Image src="/nb-lounge/hero.jpg" alt="NB Lounge cafe bookstore" fill priority
            className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C1410]/80 via-[#1C1410]/40 to-[#1C1410]/20 lg:bg-gradient-to-r lg:from-[#1C1410]/80 lg:via-[#1C1410]/50 lg:to-transparent" />
        </div>

        {/* Breathing ambient orb */}
        <div className="pointer-events-none absolute top-20 right-20 z-[1] h-64 w-64 rounded-full bg-[#8B6D4B]/10 blur-3xl"
          style={{ animation: "breathe 10s ease-in-out infinite" }} />

        {/* Frosted card content — asymmetric left */}
        <div className="relative z-10 w-full max-w-xl lg:ml-[5%]">
          {/* Hours badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md"
            style={{ animation: "fadeInLeft 0.7s ease both 0.3s" }}>
            <Clock className="h-4 w-4 text-[#C4956A]" />
            <span className="text-sm font-medium text-white/90">Open Daily · 9 AM – 10 PM</span>
          </div>

          <h1 className="mb-3 font-[family-name:var(--font-display)] leading-[0.92] font-bold tracking-tight text-white">
            <span className="block text-lg tracking-[0.2em] font-medium text-[#C4956A] uppercase sm:text-xl"
              style={{ animation: "fadeInLeft 0.7s ease both 0.4s" }}>
              The FIRST
            </span>
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
              style={{ animation: "fadeInLeft 0.8s ease both 0.5s" }}>
              BOOKS PER KILO
            </span>
            <span className="warm-shimmer block text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
              style={{ animation: "fadeInLeft 0.8s ease both 0.65s" }}>
              CAFE BOOKSTORE
            </span>
          </h1>
          <p className="mb-2 font-[family-name:var(--font-cursive)] text-2xl text-white/70 italic sm:text-3xl"
            style={{ animation: "fadeInLeft 0.7s ease both 0.8s" }}>
            in the South!
          </p>
          <p className="mb-8 font-[family-name:var(--font-body)] text-base text-white/50 sm:text-lg"
            style={{ animation: "fadeInUp 0.7s ease both 0.9s" }}>
            Read. Sip. Relax. — Where every cup comes with a story.
          </p>

          {/* CTAs */}
          <div className="flex flex-col gap-4 sm:flex-row" style={{ animation: "fadeInUp 0.8s ease both 1.1s" }}>
            <a href="https://www.facebook.com/nblounge2023" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#8B6D4B] px-8 py-4 font-[family-name:var(--font-body)] text-base font-semibold text-white shadow-lg transition-all hover:bg-[#7A5E3E] hover:shadow-xl hover:scale-105"
              style={{ animation: "pulseWarm 2.5s ease-in-out infinite 2s" }}>
              <MessageCircle className="h-5 w-5" /> Visit Us on Facebook
            </a>
            <a href="#the-experience"
              className="group inline-flex items-center gap-2 rounded-full border-2 border-white/20 px-8 py-4 font-[family-name:var(--font-body)] text-base font-semibold text-white transition-all hover:border-[#C4956A]/40 hover:bg-white/5">
              Explore The Space <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Mini stats */}
          <div className="mt-10 flex gap-8" style={{ animation: "fadeInUp 0.7s ease both 1.3s" }}>
            {[
              { val: "1st", label: "Per Kilo Cafe" },
              { val: "13h", label: "Open Daily" },
              { val: "₱99", label: "Per Kilo" },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <span className="block font-[family-name:var(--font-display)] text-2xl font-bold text-[#C4956A]">{s.val}</span>
                <span className="text-xs tracking-wider text-white/40 uppercase">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
          style={{ animation: "fadeInUp 0.8s ease both 1.6s" }}>
          <div className="flex flex-col items-center gap-2 text-white/40">
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <ChevronDown className="h-4 w-4 animate-bounce" />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          EXPERIENCE MARQUEE — Flowing keywords
      ═══════════════════════════════════════════════════════════ */}
      <section className="border-y border-[#1C1410]/5 bg-[#1C1410] py-5 select-none">
        <div className="marquee-wrap">
          <div className="marquee-track" style={{ animation: "marqueeFlow 18s linear infinite" }}>
            {[1, 2].map((set) => (
              <div key={set} className="flex shrink-0">
                {["Books", "Coffee", "Relax", "Study", "Read", "Sip", "Discover", "Unwind", "Connect", "Create"].map((w, i) => (
                  <span key={`${set}-${i}`}
                    className="mx-6 whitespace-nowrap font-[family-name:var(--font-display)] text-xl font-bold tracking-wider uppercase sm:mx-10 sm:text-2xl"
                    style={{ color: i % 2 === 0 ? "rgba(255,255,255,0.2)" : "rgba(196,149,106,0.35)" }}>
                    {w} <span className="mx-6 text-white/10 sm:mx-10">·</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          THE DUAL EXPERIENCE — Coffee × Books side by side
      ═══════════════════════════════════════════════════════════ */}
      <section id="the-experience" className="relative px-6 py-24 md:py-32">
        <div className="pointer-events-none absolute -top-20 right-0 h-[400px] w-[400px] rounded-full bg-[#8B6D4B]/[0.03]"
          style={{ animation: "breathe 12s ease-in-out infinite" }} />

        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <p className="mb-3 text-center font-[family-name:var(--font-cursive)] text-lg text-[#8B6D4B] italic">Two worlds, one space</p>
            <h2 className="mb-16 text-center font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight text-[#1C1410] uppercase sm:text-5xl lg:text-6xl">
              The Cafe <span className="warm-shimmer">&</span> The Bookstore
            </h2>
          </ScrollReveal>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* THE CAFE */}
            <ScrollReveal>
              <div className="group relative overflow-hidden rounded-3xl bg-[#1C1410]">
                <div className="relative h-64 overflow-hidden sm:h-80">
                  <Image src="/nb-lounge/coffee.jpg" alt="NB Lounge coffee" fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 1024px) 100vw, 50vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C1410] to-transparent" />
                </div>
                <div className="relative p-8">
                  {/* Steam particles */}
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="pointer-events-none absolute h-1 w-1 rounded-full bg-[#C4956A]/40"
                      style={{ top: "-8px", left: `${30 + i * 20}%`,
                        animation: `steam ${2.5 + i * 0.5}s ease-in-out infinite ${i * 0.4}s` }} />
                  ))}
                  <Coffee className="mb-4 h-8 w-8 text-[#C4956A]" style={{ animation: "floatSoft 5s ease-in-out infinite" }} />
                  <h3 className="mb-2 font-[family-name:var(--font-display)] text-2xl font-bold text-white">The Cafe</h3>
                  <p className="mb-4 text-white/60">Handcrafted espresso, artisan lattes, cold brews, and specialty drinks. Every cup made with care to accompany your reading journey.</p>
                  <div className="flex flex-wrap gap-2">
                    {["Espresso", "Latte Art", "Cold Brew", "Frappe", "Matcha", "Hot Choco"].map((item, i) => (
                      <span key={i} className="rounded-full border border-white/10 px-3 py-1 text-xs font-medium text-white/50 transition-colors hover:border-[#C4956A]/30 hover:text-[#C4956A]">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* THE BOOKSTORE */}
            <ScrollReveal delay={0.15}>
              <div className="group relative overflow-hidden rounded-3xl bg-[#1C1410]">
                <div className="relative h-64 overflow-hidden sm:h-80">
                  <Image src="/nb-lounge/books.jpg" alt="NB Lounge books" fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 1024px) 100vw, 50vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C1410] to-transparent" />
                </div>
                <div className="relative p-8">
                  <BookOpen className="mb-4 h-8 w-8 text-[#C4956A]" style={{ animation: "floatSoft 6s ease-in-out infinite 0.5s" }} />
                  <h3 className="mb-2 font-[family-name:var(--font-display)] text-2xl font-bold text-white">The Bookstore</h3>
                  <p className="mb-4 text-white/60">Thousands of titles across every genre, priced by the kilo. Browse at your leisure and take home as many as you want — affordably.</p>
                  <div className="flex flex-wrap gap-2">
                    {["Fiction", "Romance", "Sci-Fi", "Self-Help", "Children's", "Textbooks"].map((item, i) => (
                      <span key={i} className="rounded-full border border-white/10 px-3 py-1 text-xs font-medium text-white/50 transition-colors hover:border-[#C4956A]/30 hover:text-[#C4956A]">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          ATMOSPHERIC FULL-BLEED — Quote overlay
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative flex min-h-[55vh] items-center justify-center overflow-hidden">
        <Image src="/nb-lounge/interior.jpg" alt="NB Lounge interior" fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-[#1C1410]/65" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#8B6D4B]/10 to-transparent"
          style={{ animation: "breathe 9s ease-in-out infinite" }} />

        <ScrollReveal className="relative z-10 mx-auto max-w-3xl px-6 text-center">
          <Sparkles className="mx-auto mb-6 h-7 w-7 text-[#C4956A]" style={{ animation: "spinSlow 8s linear infinite" }} />
          <blockquote className="mb-5 font-[family-name:var(--font-cursive)] text-3xl leading-snug font-light text-white sm:text-4xl lg:text-5xl">
            &ldquo;Where every cup
            <br />comes with <span className="text-[#C4956A]">a story.</span>&rdquo;
          </blockquote>
          <p className="text-sm tracking-widest font-medium text-white/40 uppercase">— NB Lounge, Cabuyao</p>
        </ScrollReveal>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          THE SHELF — What you'll find (offering cards)
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative px-6 py-24 md:py-32">
        <div className="pointer-events-none absolute bottom-0 left-0 h-[350px] w-[350px] rounded-full bg-[#8B6D4B]/[0.03]"
          style={{ animation: "breathe 11s ease-in-out infinite 2s" }} />

        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <div className="mb-16 text-center">
              <p className="mb-3 font-[family-name:var(--font-cursive)] text-lg text-[#8B6D4B] italic">Everything under one roof</p>
              <h2 className="animated-underline mx-auto inline-block font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight text-[#1C1410] uppercase sm:text-5xl">
                What You&apos;ll Find
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {offerings.map((item, i) => {
              const Icon = item.icon;
              return (
                <ScrollReveal key={i} delay={i * 0.08}>
                  <div className="offering-card group flex h-full flex-col rounded-2xl border border-[#1C1410]/5 bg-white p-7"
                    style={{ animation: `borderGlow 5s ease-in-out infinite ${i * 0.7}s` }}>
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#8B6D4B]/10 transition-all group-hover:bg-[#8B6D4B]/20 group-hover:scale-110">
                      <Icon className="h-6 w-6 text-[#8B6D4B] transition-transform group-hover:rotate-6" />
                    </div>
                    <h3 className="mb-2 font-[family-name:var(--font-display)] text-xl font-bold text-[#1C1410]">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-[#8C7E72]">{item.desc}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          YOUR VISIT — Horizontal 4-step flow
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-[#1C1410] px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <div className="mb-16 text-center">
              <p className="mb-3 font-[family-name:var(--font-cursive)] text-lg text-[#C4956A] italic">Simple as 1-2-3-4</p>
              <h2 className="font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight text-white uppercase sm:text-5xl">
                Your Visit
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <ScrollReveal key={i} delay={i * 0.12}>
                  <div className="relative text-center">
                    {/* Connector arrow (not on last) */}
                    {i < steps.length - 1 && (
                      <div className="pointer-events-none absolute top-10 -right-3 z-10 hidden text-[#C4956A]/30 lg:block">
                        <ArrowRight className="h-5 w-5" />
                      </div>
                    )}
                    {/* Step number */}
                    <span className="mb-4 block font-[family-name:var(--font-display)] text-6xl font-bold text-white/[0.06]">{step.num}</span>
                    {/* Icon circle */}
                    <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#C4956A]/20 bg-[#C4956A]/10 transition-transform hover:scale-110"
                      style={{ animation: `bounceIn 0.6s ease both ${0.5 + i * 0.15}s` }}>
                      <Icon className="h-7 w-7 text-[#C4956A]" />
                    </div>
                    <h3 className="mb-2 font-[family-name:var(--font-display)] text-xl font-bold text-white">{step.title}</h3>
                    <p className="mx-auto max-w-[200px] text-sm text-white/50">{step.desc}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          THE SPACE — Masonry gallery
      ═══════════════════════════════════════════════════════════ */}
      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <div className="mb-16 text-center">
              <p className="mb-3 font-[family-name:var(--font-cursive)] text-lg text-[#8B6D4B] italic">Step inside</p>
              <h2 className="animated-underline mx-auto inline-block font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight text-[#1C1410] uppercase sm:text-5xl">
                The Space
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid auto-rows-[200px] grid-cols-2 gap-4 md:grid-cols-4 md:auto-rows-[220px]">
            {galleryImages.map((img, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className={`gallery-item group relative h-full overflow-hidden rounded-2xl ${img.span}`}>
                  <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" />
                  <div className="gallery-overlay absolute inset-0 flex items-end bg-gradient-to-t from-[#1C1410]/70 to-transparent p-4 opacity-0 transition-opacity duration-300">
                    <span className="text-sm font-medium tracking-wider text-white uppercase">{img.alt}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          WHY NB LOUNGE — Alternating feature rows
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative px-6 py-24 md:py-32">
        <div className="pointer-events-none absolute top-10 right-0 h-72 w-72 rounded-full bg-[#8B6D4B]/[0.03]"
          style={{ animation: "breathe 10s ease-in-out infinite 1s" }} />

        <div className="mx-auto max-w-4xl">
          <ScrollReveal>
            <div className="mb-16 text-center">
              <p className="mb-3 font-[family-name:var(--font-cursive)] text-lg text-[#8B6D4B] italic">Why people love us</p>
              <h2 className="animated-underline mx-auto inline-block font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight text-[#1C1410] uppercase sm:text-5xl">
                Why NB Lounge
              </h2>
            </div>
          </ScrollReveal>

          <div className="space-y-4">
            {reasons.map((r, i) => {
              const Icon = r.icon;
              return (
                <ScrollReveal key={i} delay={i * 0.08}>
                  <div className="reason-row flex items-start gap-5 rounded-2xl border border-[#1C1410]/5 bg-white p-6">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#8B6D4B]/10 transition-all hover:bg-[#8B6D4B]/20">
                      <Icon className="h-5 w-5 text-[#8B6D4B]" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-[family-name:var(--font-display)] text-lg font-bold text-[#1C1410]">{r.title}</h3>
                      <p className="text-sm leading-relaxed text-[#8C7E72]">{r.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          CTA FINALE — Visit us
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-pan-warm relative overflow-hidden px-6 py-28 md:py-36">
        {/* Glowing orbs */}
        <div className="pointer-events-none absolute -top-16 -right-16 h-72 w-72 rounded-full bg-[#8B6D4B]/15 blur-3xl"
          style={{ animation: "breathe 8s ease-in-out infinite" }} />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-[#8B6D4B]/10 blur-3xl"
          style={{ animation: "breathe 10s ease-in-out infinite 2s" }} />
        {/* Floating particles */}
        {[...Array(4)].map((_, i) => (
          <div key={i} className="pointer-events-none absolute h-1.5 w-1.5 rounded-full bg-[#C4956A]/25"
            style={{ left: `${18 + i * 20}%`, top: `${25 + (i % 3) * 20}%`,
              animation: `particle ${4 + i}s ease-in-out infinite ${i * 0.9}s` }} />
        ))}

        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <ScrollReveal>
            <div className="mb-6 inline-flex items-center gap-2" style={{ animation: "floatSoft 4s ease-in-out infinite" }}>
              <Coffee className="h-10 w-10 text-[#C4956A]" strokeWidth={1.5} />
              <span className="mx-2 text-2xl text-white/20">×</span>
              <BookOpen className="h-10 w-10 text-[#C4956A]" strokeWidth={1.5} />
            </div>

            <h2 className="mb-4 font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight text-white uppercase sm:text-5xl lg:text-6xl">
              Your Next Chapter
              <br />
              <span className="warm-shimmer">Starts Here.</span>
            </h2>
            <p className="mx-auto mb-6 max-w-md font-[family-name:var(--font-cursive)] text-xl text-white/50">
              Grab a book, order a coffee, and stay as long as you&apos;d like.
            </p>

            {/* Hours + Location */}
            <div className="mx-auto mb-10 flex max-w-sm flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm sm:flex-row sm:items-center sm:justify-center sm:gap-6 sm:rounded-full">
              <span className="flex items-center justify-center gap-2 text-sm text-white/60">
                <Clock className="h-4 w-4 text-[#C4956A]" /> 9 AM – 10 PM Daily
              </span>
              <span className="hidden h-4 w-px bg-white/10 sm:block" />
              <span className="flex items-center justify-center gap-2 text-sm text-white/60">
                <MapPin className="h-4 w-4 text-[#C4956A]" /> Cabuyao, Laguna
              </span>
            </div>

            <a href="https://www.facebook.com/nblounge2023" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-[#8B6D4B] px-10 py-5 text-lg font-bold text-white shadow-xl transition-all hover:bg-[#7A5E3E] hover:shadow-2xl hover:scale-105"
              style={{ animation: "pulseWarm 2.5s ease-in-out infinite" }}>
              <Facebook className="h-6 w-6" /> Visit Our Facebook Page
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* ───── PRING GROUP ───── */}
      <section className="border-t border-[#1C1410]/5 bg-[#F8F4EE] px-6 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <ScrollReveal>
            <p className="mb-2 text-xs tracking-[0.2em] font-medium text-[#8C7E72] uppercase">A Business Under</p>
            <Link href="/" className="inline-block font-[family-name:var(--font-heading)] text-2xl font-bold text-[#1C1410] transition-colors hover:text-[#8B6D4B]">
              Pring Group of Companies
            </Link>
            <p className="mt-3 text-sm text-[#8C7E72]">Diversified Filipino business conglomerate based in Cabuyao, Laguna.</p>
          </ScrollReveal>
        </div>
      </section>

      {/* ───── FOOTER ───── */}
      <footer className="border-t border-[#1C1410]/5 bg-[#F8F4EE] px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-[#8C7E72] sm:flex-row">
          <span>&copy; 2025 NB Lounge. All rights reserved.</span>
          <a href="https://www.facebook.com/nblounge2023" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 transition-colors hover:text-[#8B6D4B]">
            <Facebook className="h-4 w-4" /> nblounge2023
          </a>
        </div>
      </footer>
    </main>
  );
}
