import { Metadata } from "next";
import Link from "next/link";
import Image from "@/components/Img";
import ScrollReveal from "@/components/ScrollReveal";
import CountUp from "@/components/CountUp";
import BusinessNavArrows from "@/components/BusinessNavArrows";
import BusinessPopup from "@/components/BusinessPopup";
import ToysGallery from "@/components/ToysGallery";
import {
  ArrowLeft,
  Facebook,
  MapPin,
  Star,
  Heart,
  ShoppingCart,
  Package,
  Gift,
  ChevronRight,
  Tag,
  Truck,
  BadgeCheck,
  PartyPopper,
  Crown,
  Smile,
  ThumbsUp,
  CheckCircle2,
  Quote,
  Zap,
  Trophy,
  Clock,
  Sparkles,
  Shield,
  Users,
  Boxes,
  Store,
  Coins,
  Rocket,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Toys for Less — UK Toys | Nothing Above ₱280 | Cabuyao",
  description:
    "Supplier of UK Toys in the PH since 2024. Nothing above ₱280. Affordable, quality UK-imported toys for kids. Toys for Less, Cabuyao.",
};

/* ───── color tokens ─────
   orange   #FF6500  (primary brand)
   yellow   #FFD200  (highlight, accent)
   black    #111111  (dark bg, text)
   white    #FFFFFF  (light bg)
   orange2  #FF8C00  (secondary orange)
────────────────────────── */

export default function ToysForLessPage() {
  const services = [
    {
      icon: Crown,
      title: "UK Imported Toys",
      desc: "Straight from the UK! Premium-quality toys that kids in Britain love — now available in the Philippines at unbeatable prices.",
      img: "/toys-for-less/toy-1.jpg",
      badge: "UK Quality",
      color: "#FF6500",
      rotate: "-rotate-1",
    },
    {
      icon: Tag,
      title: "Nothing Above ₱280",
      desc: "Every single toy in our store is ₱280 or less. No surprises, no hidden costs — just pure affordable fun for every family.",
      img: "/toys-for-less/toy-2.jpg",
      badge: "Best Deal",
      color: "#FFD200",
      rotate: "rotate-1",
    },
    {
      icon: Boxes,
      title: "Wholesale Supply",
      desc: "Resellers, event organizers, schools — get wholesale pricing on bulk orders. The more you buy, the more you save.",
      img: "/toys-for-less/toy-3.jpg",
      badge: "Bulk Ready",
      color: "#FF6500",
      rotate: "-rotate-1",
    },
    {
      icon: Store,
      title: "Retail Toy Sales",
      desc: "Walk in and browse our full collection. Every visit is a treasure hunt — new UK toy drops arrive regularly!",
      img: "/toys-for-less/toy-4.jpg",
      badge: "Walk-In",
      color: "#FFD200",
      rotate: "rotate-1",
    },
  ];

  const reasons = [
    { icon: Crown, title: "UK Quality Toys", desc: "Imported directly from the United Kingdom — safe, durable, and fun.", bg: "#FF6500", text: "white" },
    { icon: Coins, title: "Nothing Above ₱280", desc: "Our iron-clad promise. Every toy in the store fits any family's budget.", bg: "#FFD200", text: "#111111" },
    { icon: Shield, title: "Safe & Certified", desc: "All toys pass quality standards — safe for kids of all ages to play with.", bg: "#111111", text: "white" },
    { icon: Truck, title: "Wholesale Ready", desc: "Bulk orders for resellers, events, schools, and charity drives.", bg: "#FF8C00", text: "white" },
    { icon: Zap, title: "Supplier Since 2024", desc: "Trusted UK toy supplier in the Philippines — growing every month.", bg: "#FFD200", text: "#111111" },
    { icon: Smile, title: "Kids Love It", desc: "Happy kids, happy parents. Our customers keep coming back for more!", bg: "#FF6500", text: "white" },
  ];

  const steps = [
    { num: "01", title: "Visit or Follow Us", desc: "Come to our Cabuyao store or follow us on Facebook to see the latest UK toy drops and exclusive deals.", icon: MapPin, color: "#FF6500" },
    { num: "02", title: "Browse Our Collection", desc: "Hundreds of UK-imported toys organized by type. Action figures, dolls, vehicles, educational — something for everyone!", icon: ShoppingCart, color: "#FFD200" },
    { num: "03", title: "Pick Your Favorites", desc: "Every toy is ₱280 or less. Grab as many as you want — no calculator needed. Fill that bag with joy!", icon: Gift, color: "#FF6500" },
    { num: "04", title: "Happy Kids, Happy Life", desc: "Take home UK-quality toys at Philippine-friendly prices. Watch your kids light up — priceless!", icon: Heart, color: "#FFD200" },
  ];

  const stats = [
    { value: 280, prefix: "₱", label: "Max Price Ever", icon: Tag, bg: "#FF6500", fg: "white" },
    { value: 6, suffix: "", label: "Days Open/Week", icon: Clock, bg: "#FFD200", fg: "#111111" },
    { value: 2024, suffix: "", label: "Est. Year", icon: Crown, bg: "#111111", fg: "white" },
    { value: 1, suffix: "", label: "Laguna Store", icon: Store, bg: "#FF8C00", fg: "white" },
  ];

  return (
    <main className="relative overflow-hidden" style={{ background: "#FFFFFF" }}>
      <BusinessNavArrows currentSlug="toys-for-less" />
      <BusinessPopup config={{
        storageKey: "popup-toys-for-less",
        delay: 1500,
        headerBg: "linear-gradient(135deg, #D84000 0%, #F06018 55%, #F0A800 100%)",
        headerIcon: "🏷️",
        modalBg: "#FFFFFF",
        eyebrow: "BUDGET-FRIENDLY TOYS",
        eyebrowColor: "#D84000",
        title: "Every toy is \u20b1280 or less.",
        titleColor: "#1A0800",
        body: "Affordable UK-imported toys for parents, resellers, schools, giveaways, and gift shopping without going over budget.",
        bodyColor: "#666666",
        primaryCTA: "Shop Affordable Toys",
        primaryHref: "#services",
        ctaBg: "#0060A8",
        ctaColor: "#FFFFFF",
        secondaryCTA: "See What\u2019s New",
        secondaryHref: "#gallery",
        secondaryColor: "#999999",
        badge: "\u20b1280 Max",
        badgeBg: "rgba(240,96,24,0.1)",
        badgeColor: "#D84000",
        logoSrc: "/logos/toys-for-less.jpg",
      }} />
      <style
        dangerouslySetInnerHTML={{
          __html: `
@import url('https://fonts.googleapis.com/css2?family=Fredoka+One&family=Nunito:wght@400;600;700;800;900&display=swap');

/* ── Keyframes ── */
@keyframes tfFloat {
  0%, 100% { transform: translateY(0) rotate(-2deg); }
  50% { transform: translateY(-18px) rotate(2deg); }
}
@keyframes tfBounce {
  0%, 100% { transform: translateY(0) scale(1); }
  30% { transform: translateY(-20px) scale(1.05); }
  60% { transform: translateY(-8px) scale(1.02); }
}
@keyframes tfReveal {
  from { opacity: 0; transform: translateY(36px) scale(0.93); }
  to   { opacity: 1; transform: translateY(0)   scale(1); }
}
@keyframes tfWiggle {
  0%, 100% { transform: rotate(0deg) scale(1); }
  20%  { transform: rotate(-8deg) scale(1.1); }
  40%  { transform: rotate(8deg) scale(1.1); }
  60%  { transform: rotate(-5deg) scale(1.05); }
  80%  { transform: rotate(5deg) scale(1.05); }
}
@keyframes tfPulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(255,101,0,0.45); }
  50%       { box-shadow: 0 0 0 22px rgba(255,101,0,0); }
}
@keyframes tfSpin {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}
@keyframes tfSpinRev {
  from { transform: rotate(0deg); }
  to   { transform: rotate(-360deg); }
}
@keyframes tfStarburst {
  0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.15; }
  50%       { transform: scale(1.06) rotate(4deg); opacity: 0.22; }
}
@keyframes tfPriceTag {
  0%, 100% { transform: rotate(-4deg) scale(1); }
  50%       { transform: rotate(4deg) scale(1.06); }
}
@keyframes tfConfettiDrop {
  0%   { opacity: 1; transform: translateY(0) rotate(0deg) scale(1); }
  100% { opacity: 0; transform: translateY(-60px) rotate(360deg) scale(0.6); }
}
@keyframes tfLogoFloat {
  0%, 100% { transform: translateY(0) rotate(-2deg) scale(1); }
  50%       { transform: translateY(-20px) rotate(2deg) scale(1.02); }
}
@keyframes tfShine {
  0%   { background-position: -200% center; }
  100% { background-position: 200% center; }
}
@keyframes tfZap {
  0%, 90%, 100% { opacity: 1; transform: scale(1); }
  95%            { opacity: 0.6; transform: scale(1.3); }
}

/* ── Hero stagger ── */
.tf-hero-stagger > * {
  opacity: 0;
  animation: tfReveal 0.65s cubic-bezier(0.34,1.56,0.64,1) forwards;
}
.tf-hero-stagger > *:nth-child(1) { animation-delay: 0.05s; }
.tf-hero-stagger > *:nth-child(2) { animation-delay: 0.18s; }
.tf-hero-stagger > *:nth-child(3) { animation-delay: 0.30s; }
.tf-hero-stagger > *:nth-child(4) { animation-delay: 0.42s; }
.tf-hero-stagger > *:nth-child(5) { animation-delay: 0.54s; }
.tf-hero-stagger > *:nth-child(6) { animation-delay: 0.66s; }

/* ── Card interactions ── */
.tf-card {
  transition: transform 0.35s cubic-bezier(0.34,1.56,0.64,1),
              box-shadow 0.35s ease;
}
.tf-card:hover {
  transform: translateY(-12px) scale(1.02);
  box-shadow: 0 24px 60px rgba(255,101,0,0.18), 0 8px 24px rgba(0,0,0,0.10);
}
.tf-card:hover .tf-card-icon { animation: tfWiggle 0.55s ease-in-out; }
.tf-card:hover .tf-card-img  { transform: scale(1.07); }
.tf-card:hover .tf-card-badge{ transform: scale(1.12) rotate(-3deg); }

/* ── Reason tiles ── */
.tf-reason {
  transition: transform 0.32s cubic-bezier(0.34,1.56,0.64,1),
              box-shadow 0.32s ease;
}
.tf-reason:hover {
  transform: translateY(-10px) rotate(-1deg);
  box-shadow: 0 20px 45px rgba(0,0,0,0.15);
}
.tf-reason:hover .tf-reason-icon { animation: tfBounce 0.65s ease-out; }

/* ── Buttons ── */
.tf-btn {
  transition: transform 0.28s cubic-bezier(0.34,1.56,0.64,1),
              box-shadow 0.28s ease;
}
.tf-btn:hover    { transform: translateY(-4px) scale(1.04); }
.tf-btn:active   { transform: translateY(0) scale(0.98); }
.tf-btn-pulse    { animation: tfPulse 2.4s ease-in-out infinite; }

/* ── Steps ── */
.tf-step {
  transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1);
}
.tf-step:hover { transform: translateX(10px); }
.tf-step:hover .tf-step-num { animation: tfWiggle 0.5s ease-in-out; }

/* ── Gallery ── */
.tf-gallery-item {
  transition: transform 0.4s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.4s ease;
}
.tf-gallery-item:hover {
  transform: scale(1.04) rotate(-1.5deg);
  box-shadow: 0 16px 40px rgba(255,101,0,0.25);
}
.tf-gallery-item:hover .tf-gallery-overlay { opacity: 1; }

/* ── Zigzag ── */
.tf-zigzag-top {
  clip-path: polygon(
    0% 16px, 2.5% 0%, 5% 16px, 7.5% 0%, 10% 16px,
    12.5% 0%, 15% 16px, 17.5% 0%, 20% 16px,
    22.5% 0%, 25% 16px, 27.5% 0%, 30% 16px,
    32.5% 0%, 35% 16px, 37.5% 0%, 40% 16px,
    42.5% 0%, 45% 16px, 47.5% 0%, 50% 16px,
    52.5% 0%, 55% 16px, 57.5% 0%, 60% 16px,
    62.5% 0%, 65% 16px, 67.5% 0%, 70% 16px,
    72.5% 0%, 75% 16px, 77.5% 0%, 80% 16px,
    82.5% 0%, 85% 16px, 87.5% 0%, 90% 16px,
    92.5% 0%, 95% 16px, 97.5% 0%, 100% 16px,
    100% 100%, 0% 100%
  );
  padding-top: 20px;
}
.tf-zigzag-bottom {
  clip-path: polygon(
    0% 0%, 100% 0%,
    100% calc(100% - 16px),
    97.5% 100%, 95% calc(100% - 16px),
    92.5% 100%, 90% calc(100% - 16px),
    87.5% 100%, 85% calc(100% - 16px),
    82.5% 100%, 80% calc(100% - 16px),
    77.5% 100%, 75% calc(100% - 16px),
    72.5% 100%, 70% calc(100% - 16px),
    67.5% 100%, 65% calc(100% - 16px),
    62.5% 100%, 60% calc(100% - 16px),
    57.5% 100%, 55% calc(100% - 16px),
    52.5% 100%, 50% calc(100% - 16px),
    47.5% 100%, 45% calc(100% - 16px),
    42.5% 100%, 40% calc(100% - 16px),
    37.5% 100%, 35% calc(100% - 16px),
    32.5% 100%, 30% calc(100% - 16px),
    27.5% 100%, 25% calc(100% - 16px),
    22.5% 100%, 20% calc(100% - 16px),
    17.5% 100%, 15% calc(100% - 16px),
    12.5% 100%, 10% calc(100% - 16px),
    7.5%  100%, 5%  calc(100% - 16px),
    2.5%  100%, 0%  calc(100% - 16px)
  );
  padding-bottom: 20px;
}

/* ── Starburst ── */
.tf-starburst {
  animation: tfStarburst 8s ease-in-out infinite;
}

/* ── Shine text ── */
.tf-shine {
  background: linear-gradient(90deg, #FFD200 0%, #FF6500 30%, #FFD200 60%, #FF8C00 80%, #FFD200 100%);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: tfShine 3s linear infinite;
}

/* ── Polka dots ── */
.tf-polka {
  background-image: radial-gradient(circle, rgba(255,101,0,0.08) 2px, transparent 2px);
  background-size: 28px 28px;
}
.tf-polka-yellow {
  background-image: radial-gradient(circle, rgba(255,210,0,0.12) 2px, transparent 2px);
  background-size: 32px 32px;
}
.tf-polka-white {
  background-image: radial-gradient(circle, rgba(255,255,255,0.10) 2px, transparent 2px);
  background-size: 28px 28px;
}

/* ── Checkerboard accent ── */
.tf-checker {
  background-image:
    linear-gradient(45deg, rgba(255,210,0,0.12) 25%, transparent 25%),
    linear-gradient(-45deg, rgba(255,210,0,0.12) 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, rgba(255,210,0,0.12) 75%),
    linear-gradient(-45deg, transparent 75%, rgba(255,210,0,0.12) 75%);
  background-size: 18px 18px;
  background-position: 0 0, 0 9px, 9px -9px, -9px 0;
}

/* ── Fonts ── */
.font-display { font-family: 'Fredoka One', 'Baloo 2', cursive, system-ui; }
.font-body    { font-family: 'Nunito', 'Comic Neue', system-ui, sans-serif; }

@media (prefers-reduced-motion: reduce) {
  .tf-hero-stagger > * { opacity: 1; animation: none; }
  .tf-btn-pulse { animation: none; }
  .tf-starburst { animation: none; }
  .tf-shine { animation: none; -webkit-text-fill-color: #FF6500; }
}
`,
        }}
      />

      {/* ═══════════════════════════════ NAV ═══════════════════════════════ */}
      <nav className="fixed top-0 right-0 left-0 z-50 border-b-4 border-[#111111]" style={{ background: "#FFFFFF" }}>
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
          <Link
            href="/"
            className="flex cursor-pointer items-center gap-2 text-sm font-bold text-[#111111]/50 transition-colors hover:text-[#FF6500]"
          >
            <ArrowLeft size={16} />
            <span className="font-body hidden sm:inline">Back to Pring Group</span>
          </Link>

          <div className="flex items-center gap-3">
            <Image
              src="/logos/toys-for-less.jpg"
              alt="Toys for Less"
              width={40}
              height={40}
              className="rounded-xl border-4 border-[#FF6500]"
            />
            <div className="hidden sm:block">
              <div className="font-display text-sm tracking-wide text-[#111111]">Toys for Less</div>
              <div className="font-body text-[10px] font-bold tracking-widest text-[#FF6500] uppercase">UK Toys · Cabuyao</div>
            </div>
          </div>

          <a
            href="https://www.facebook.com/ToyssforLess"
            target="_blank"
            rel="noopener noreferrer"
            className="tf-btn inline-flex items-center gap-2 rounded-xl border-3 border-[#111111] bg-[#FF6500] px-4 py-2 text-sm font-bold text-white shadow-[3px_3px_0_#111111]"
          >
            <Facebook size={16} />
            <span className="font-body hidden font-bold sm:inline">Follow Us</span>
          </a>
        </div>
      </nav>

      {/* ═══════════════════════════════ HERO ═══════════════════════════════ */}
      <section className="relative min-h-screen overflow-hidden pt-16" style={{ background: "#111111" }}>
        {/* Starburst background */}
        <div
          className="tf-starburst pointer-events-none absolute inset-0"
          style={{
            backgroundImage: `
              conic-gradient(
                from 0deg at 50% 55%,
                #FF6500 0deg 10deg, #111111 10deg 20deg,
                #FF6500 20deg 30deg, #111111 30deg 40deg,
                #FF6500 40deg 50deg, #111111 50deg 60deg,
                #FF6500 60deg 70deg, #111111 70deg 80deg,
                #FF6500 80deg 90deg, #111111 90deg 100deg,
                #FF6500 100deg 110deg, #111111 110deg 120deg,
                #FF6500 120deg 130deg, #111111 130deg 140deg,
                #FF6500 140deg 150deg, #111111 150deg 160deg,
                #FF6500 160deg 170deg, #111111 170deg 180deg,
                #FF6500 180deg 190deg, #111111 190deg 200deg,
                #FF6500 200deg 210deg, #111111 210deg 220deg,
                #FF6500 220deg 230deg, #111111 230deg 240deg,
                #FF6500 240deg 250deg, #111111 250deg 260deg,
                #FF6500 260deg 270deg, #111111 270deg 280deg,
                #FF6500 280deg 290deg, #111111 290deg 300deg,
                #FF6500 300deg 310deg, #111111 310deg 320deg,
                #FF6500 320deg 330deg, #111111 330deg 340deg,
                #FF6500 340deg 350deg, #111111 350deg 360deg
              )
            `,
            opacity: 0.25,
          }}
        />
        {/* Polka dot overlay */}
        <div className="tf-polka-white pointer-events-none absolute inset-0" />

        {/* Floating confetti bits */}
        {[
          { top: "15%", left: "8%", delay: "0s", color: "#FFD200", size: 18, rotate: "12deg" },
          { top: "25%", left: "18%", delay: "1.2s", color: "#FF6500", size: 14, rotate: "-20deg" },
          { top: "12%", right: "12%", delay: "0.5s", color: "#FFD200", size: 22, rotate: "30deg" },
          { top: "35%", right: "8%", delay: "1.8s", color: "#FF8C00", size: 12, rotate: "-10deg" },
          { bottom: "30%", left: "5%", delay: "2.1s", color: "#FFD200", size: 16, rotate: "45deg" },
          { bottom: "22%", right: "15%", delay: "0.9s", color: "#FF6500", size: 20, rotate: "-35deg" },
        ].map((c, i) => (
          <div
            key={i}
            className="pointer-events-none absolute"
            style={{
              top: c.top,
              left: (c as any).left,
              right: (c as any).right,
              bottom: c.bottom,
              animation: `tfFloat ${5 + i * 0.7}s ease-in-out infinite ${c.delay}`,
            }}
          >
            <Star
              size={c.size}
              style={{ color: c.color, transform: `rotate(${c.rotate})`, filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.4))" }}
              fill={c.color}
            />
          </div>
        ))}

        {/* Hero content */}
        <div className="relative mx-auto grid min-h-[100vh] max-w-7xl items-center gap-12 px-6 md:grid-cols-[1.15fr_1fr] md:px-12">
          {/* Left */}
          <div className="tf-hero-stagger py-20 md:py-16">
            {/* Pill badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border-4 border-[#FFD200] bg-[#FFD200] px-4 py-1.5 shadow-[3px_3px_0_#FF6500]">
              <Crown size={14} className="text-[#111111]" />
              <span className="font-body text-xs font-black tracking-widest text-[#111111] uppercase">
                UK Toys Supplier Since 2024
              </span>
            </div>

            {/* Main headline */}
            <h1 className="font-display mb-5 text-[3.8rem] leading-[1.0] text-white md:text-[5.8rem]">
              Nothing
              <br />
              <span style={{ color: "#FFD200" }}>Above</span>
              <br />
              <span
                style={{
                  display: "inline-block",
                  background: "#FF6500",
                  color: "white",
                  padding: "4px 24px 8px",
                  borderRadius: "16px",
                  border: "4px solid #FFD200",
                  transform: "rotate(-2deg)",
                  boxShadow: "5px 5px 0 #FFD200",
                }}
              >
                ₱280!
              </span>
            </h1>

            <p className="font-body mb-8 max-w-lg text-lg font-bold leading-relaxed text-white/75">
              Quality UK-imported toys at prices every Filipino family can afford.
              Walk in, grab a bag, fill it up — all for under ₱280 each!
            </p>

            {/* Price tag bounce badge */}
            <div
              className="mb-10 inline-flex items-center gap-3 rounded-2xl border-4 border-[#FFD200] bg-[#FFD200] px-6 py-3 shadow-[5px_5px_0_#FF6500]"
              style={{ animation: "tfPriceTag 3.5s ease-in-out infinite" }}
            >
              <Tag size={20} className="text-[#111111]" />
              <span className="font-display text-xl tracking-wide text-[#111111]">Up to ₱280 Only!</span>
              <Zap size={18} className="text-[#FF6500]" style={{ animation: "tfZap 2s ease-in-out infinite" }} />
            </div>

            {/* CTA row */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://www.facebook.com/ToyssforLess"
                target="_blank"
                rel="noopener noreferrer"
                className="tf-btn tf-btn-pulse inline-flex items-center gap-2.5 rounded-2xl border-4 border-[#111111] bg-[#FF6500] px-8 py-4 font-black text-white shadow-[5px_5px_0_#FFD200]"
              >
                <Facebook size={20} />
                <span className="font-display text-lg tracking-wide">Shop on Facebook</span>
              </a>
              <a
                href="#services"
                className="tf-btn inline-flex items-center gap-2 rounded-2xl border-4 border-[#FFD200] bg-transparent px-6 py-3.5 font-black text-[#FFD200] backdrop-blur-sm"
              >
                <span className="font-body text-base font-black">See Our Toys</span>
                <ChevronRight size={16} />
              </a>
            </div>

            {/* Trust pills */}
            <div className="mt-10 flex flex-wrap items-center gap-3">
              {[
                { icon: Crown, label: "UK Imported" },
                { icon: Tag, label: "₱280 Max" },
                { icon: Clock, label: "Mon–Sat" },
              ].map((t, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 rounded-full border-2 border-white/20 bg-white/8 px-4 py-1.5"
                >
                  <t.icon size={13} className="text-[#FFD200]" />
                  <span className="font-body text-xs font-bold text-white/70">{t.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — floating logo card */}
          <div className="hidden md:flex md:items-center md:justify-center">
            <div className="relative">
              {/* Outer spinning ring */}
              <div
                className="absolute -inset-12 rounded-[3rem] border-[6px] border-dashed border-[#FFD200]/40"
                style={{ animation: "tfSpin 30s linear infinite" }}
              />
              {/* Inner spin reverse */}
              <div
                className="absolute -inset-6 rounded-[2.5rem] border-[4px] border-dotted border-[#FF6500]/30"
                style={{ animation: "tfSpinRev 22s linear infinite" }}
              />
              {/* Glow blob */}
              <div
                className="absolute -inset-8 rounded-full"
                style={{
                  background: "radial-gradient(circle, rgba(255,101,0,0.35) 0%, transparent 70%)",
                  animation: "tfStarburst 5s ease-in-out infinite",
                }}
              />

              {/* Floating corner tags */}
              <div
                className="absolute -top-10 -left-10 flex h-16 w-16 items-center justify-center rounded-2xl border-4 border-[#111111] bg-[#FFD200] shadow-[4px_4px_0_#111111]"
                style={{ animation: "tfFloat 4s ease-in-out infinite" }}
              >
                <Tag size={26} className="text-[#111111]" />
              </div>
              <div
                className="absolute -right-9 -top-8 flex h-14 w-14 items-center justify-center rounded-full border-4 border-[#111111] bg-[#FF6500] shadow-[4px_4px_0_#111111]"
                style={{ animation: "tfFloat 5.5s ease-in-out infinite 1.3s" }}
              >
                <Crown size={22} className="text-white" />
              </div>
              <div
                className="absolute -bottom-9 -left-9 flex h-14 w-14 items-center justify-center rounded-2xl border-4 border-[#111111] bg-white shadow-[4px_4px_0_#111111]"
                style={{ animation: "tfFloat 6s ease-in-out infinite 0.7s" }}
              >
                <Gift size={22} className="text-[#FF6500]" />
              </div>
              <div
                className="absolute -right-8 -bottom-8 flex h-12 w-12 items-center justify-center rounded-full border-4 border-[#111111] bg-[#FFD200] shadow-[4px_4px_0_#111111]"
                style={{ animation: "tfFloat 4.8s ease-in-out infinite 2s" }}
              >
                <Star size={20} className="fill-[#FF6500] text-[#FF6500]" />
              </div>

              {/* Logo image */}
              <Image
                src="/logos/toys-for-less.jpg"
                alt="Toys for Less - UK Toys Logo"
                width={280}
                height={280}
                className="relative rounded-[2rem] border-[6px] border-[#FFD200] shadow-[10px_10px_0_#FF6500]"
                style={{ animation: "tfLogoFloat 6s ease-in-out infinite" }}
              />

              {/* Sparkle top */}
              <div
                className="absolute -top-3 left-1/2 -translate-x-1/2"
                style={{ animation: "tfConfettiDrop 2.8s ease-in-out infinite" }}
              >
                <Sparkles size={28} className="text-[#FFD200] drop-shadow-lg" fill="#FFD200" />
              </div>
            </div>
          </div>
        </div>

        {/* Zigzag bottom transition */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-[0]">
          <svg viewBox="0 0 1440 60" className="w-full" preserveAspectRatio="none">
            <polyline
              points="0,60 30,20 60,60 90,20 120,60 150,20 180,60 210,20 240,60 270,20 300,60 330,20 360,60 390,20 420,60 450,20 480,60 510,20 540,60 570,20 600,60 630,20 660,60 690,20 720,60 750,20 780,60 810,20 840,60 870,20 900,60 930,20 960,60 990,20 1020,60 1050,20 1080,60 1110,20 1140,60 1170,20 1200,60 1230,20 1260,60 1290,20 1320,60 1350,20 1380,60 1410,20 1440,60"
              fill="#FFFFFF"
            />
          </svg>
        </div>
      </section>

      {/* ═══════════════════════════════ STATS RIBBON ═══════════════════════════════ */}
      <section className="relative z-10 overflow-hidden">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <ScrollReveal key={i} delay={i * 80}>
              <div
                className="group flex flex-col items-center gap-2 px-6 py-10 text-center border-r-4 border-b-4 border-[#111111] last:border-r-0 md:border-b-0"
                style={{ background: s.bg, borderColor: "#111111" }}
              >
                <div
                  className="mb-1 flex h-14 w-14 items-center justify-center rounded-2xl border-4 border-[#111111] transition-transform group-hover:scale-110 group-hover:rotate-6"
                  style={{ background: s.fg === "white" ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.08)" }}
                >
                  <s.icon size={24} style={{ color: s.fg }} />
                </div>
                <div className="font-display text-4xl leading-none md:text-5xl" style={{ color: s.fg }}>
                  {s.prefix && <span>{s.prefix}</span>}
                  <CountUp end={s.value} suffix={s.suffix ?? ""} />
                </div>
                <div
                  className="font-body text-[11px] font-black tracking-widest uppercase"
                  style={{ color: s.fg === "white" ? "rgba(255,255,255,0.6)" : "rgba(0,0,0,0.5)" }}
                >
                  {s.label}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
        {/* Bottom thick border */}
        <div className="h-1.5 bg-[#111111]" />
      </section>

      {/* ═══════════════════════════════ SERVICES ═══════════════════════════════ */}
      <section id="services" className="relative py-24 md:py-32" style={{ background: "#FFFFFF" }}>
        <div className="tf-polka pointer-events-none absolute inset-0" />

        <div className="relative mx-auto max-w-7xl px-6 md:px-12">
          <ScrollReveal>
            <div className="mb-16 text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border-4 border-[#111111] bg-[#FF6500] px-5 py-2 shadow-[4px_4px_0_#111111]">
                <ShoppingCart size={14} className="text-white" />
                <span className="font-body text-xs font-black tracking-widest text-white uppercase">What We Offer</span>
              </div>
              <h2 className="font-display text-4xl text-[#111111] md:text-6xl">
                UK Toys,{" "}
                <span
                  className="inline-block rounded-2xl border-4 border-[#111111] bg-[#FFD200] px-4 pb-1 shadow-[5px_5px_0_#FF6500]"
                  style={{ transform: "rotate(-1deg)" }}
                >
                  Pinoy Prices!
                </span>
              </h2>
              <p className="font-body mx-auto mt-5 max-w-xl text-base font-bold text-[#111111]/50">
                Premium toys imported from the United Kingdom — all priced at ₱280 and below.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((svc, i) => (
              <ScrollReveal key={i} delay={i * 100} variant="fadeUp">
                <div
                  className={`tf-card group overflow-hidden rounded-3xl border-4 border-[#111111] bg-white shadow-[6px_6px_0_#111111] ${svc.rotate}`}
                >
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={svc.img}
                      alt={svc.title}
                      fill
                      className="tf-card-img object-cover transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/10 to-transparent" />
                    {/* Badge */}
                    <div className="absolute top-3 right-3">
                      <span
                        className="tf-card-badge font-body inline-block rounded-xl border-2 border-[#111111] px-3 py-1 text-[11px] font-black tracking-wider uppercase shadow-[3px_3px_0_#111111]"
                        style={{ background: svc.color, color: svc.color === "#FFD200" ? "#111111" : "white" }}
                      >
                        {svc.badge}
                      </span>
                    </div>
                    {/* Icon */}
                    <div className="absolute bottom-3 left-3">
                      <div
                        className="tf-card-icon flex h-12 w-12 items-center justify-center rounded-2xl border-3 border-[#111111] bg-white shadow-[3px_3px_0_#111111]"
                      >
                        <svc.icon size={22} style={{ color: svc.color }} />
                      </div>
                    </div>
                  </div>
                  {/* Text */}
                  <div className="p-5">
                    <h3 className="font-display mb-2 text-xl text-[#111111]">{svc.title}</h3>
                    <p className="font-body text-sm font-semibold leading-relaxed text-[#111111]/50">{svc.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════ WHY CHOOSE US ═══════════════════════════════ */}
      {/* Top zigzag */}
      <div className="relative overflow-hidden leading-[0]" style={{ background: "#FFFFFF" }}>
        <svg viewBox="0 0 1440 60" className="w-full" preserveAspectRatio="none" style={{ display: "block" }}>
          <polyline
            points="0,0 30,40 60,0 90,40 120,0 150,40 180,0 210,40 240,0 270,40 300,0 330,40 360,0 390,40 420,0 450,40 480,0 510,40 540,0 570,40 600,0 630,40 660,0 690,40 720,0 750,40 780,0 810,40 840,0 870,40 900,0 930,40 960,0 990,40 1020,0 1050,40 1080,0 1110,40 1140,0 1170,40 1200,0 1230,40 1260,0 1290,40 1320,0 1350,40 1380,0 1410,40 1440,0 1440,60 0,60"
            fill="#111111"
          />
        </svg>
      </div>

      <section className="relative overflow-hidden py-20 md:py-28" style={{ background: "#111111" }}>
        <div className="tf-polka-white pointer-events-none absolute inset-0" />
        {/* Floating stars */}
        {[
          { top: "10%", left: "5%", d: "0.3s", s: 20 },
          { top: "60%", left: "2%", d: "1.5s", s: 14 },
          { top: "20%", right: "4%", d: "0.8s", s: 18 },
          { bottom: "15%", right: "7%", d: "2s", s: 22 },
        ].map((p, i) => (
          <div
            key={i}
            className="pointer-events-none absolute"
            style={{
              top: p.top, left: (p as any).left, right: (p as any).right, bottom: p.bottom,
              animation: `tfFloat ${5 + i}s ease-in-out infinite ${p.d}`,
            }}
          >
            <Star size={p.s} fill="#FFD200" style={{ color: "#FFD200", opacity: 0.25 }} />
          </div>
        ))}

        <div className="relative mx-auto max-w-7xl px-6 md:px-12">
          <ScrollReveal>
            <div className="mb-14 text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border-4 border-[#FFD200] bg-[#FFD200] px-5 py-2 shadow-[4px_4px_0_#FF6500]">
                <Trophy size={14} className="text-[#111111]" />
                <span className="font-body text-xs font-black tracking-widest text-[#111111] uppercase">Why Toys for Less</span>
              </div>
              <h2 className="font-display text-4xl text-white md:text-6xl">
                The{" "}
                <span style={{ color: "#FFD200" }}>Smart Choice</span>
                <br />
                for Parents!
              </h2>
            </div>
          </ScrollReveal>

          <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-2 lg:grid-cols-3">
            {reasons.map((item, i) => (
              <ScrollReveal key={i} delay={i * 75} variant="scale">
                <div
                  className="tf-reason rounded-3xl border-4 border-[#111111] p-6 shadow-[5px_5px_0_rgba(255,210,0,0.5)]"
                  style={{ background: item.bg }}
                >
                  <div className="tf-reason-icon mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border-4 border-[#111111] bg-white shadow-[3px_3px_0_#111111]">
                    <item.icon size={24} className="text-[#FF6500]" />
                  </div>
                  <h3 className="font-display mb-2 text-lg" style={{ color: item.text }}>
                    {item.title}
                  </h3>
                  <p
                    className="font-body text-sm font-semibold leading-relaxed"
                    style={{ color: item.text === "white" ? "rgba(255,255,255,0.65)" : "rgba(0,0,0,0.55)" }}
                  >
                    {item.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom zigzag */}
      <div className="relative overflow-hidden leading-[0]" style={{ background: "#FFFFFF" }}>
        <svg viewBox="0 0 1440 60" className="w-full" preserveAspectRatio="none" style={{ display: "block" }}>
          <polyline
            points="0,60 30,20 60,60 90,20 120,60 150,20 180,60 210,20 240,60 270,20 300,60 330,20 360,60 390,20 420,60 450,20 480,60 510,20 540,60 570,20 600,60 630,20 660,60 690,20 720,60 750,20 780,60 810,20 840,60 870,20 900,60 930,20 960,60 990,20 1020,60 1050,20 1080,60 1110,20 1140,60 1170,20 1200,60 1230,20 1260,60 1290,20 1320,60 1350,20 1380,60 1410,20 1440,60 1440,0 0,0"
            fill="#111111"
          />
        </svg>
      </div>

      {/* ═══════════════════════════════ HOW IT WORKS ═══════════════════════════════ */}
      <section className="relative py-24 md:py-32" style={{ background: "#FFFFFF" }}>
        <div className="tf-polka pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-7xl px-6 md:px-12">
          <ScrollReveal>
            <div className="mb-14 text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border-4 border-[#111111] bg-[#FFD200] px-5 py-2 shadow-[4px_4px_0_#111111]">
                <Rocket size={14} className="text-[#111111]" />
                <span className="font-body text-xs font-black tracking-widest text-[#111111] uppercase">How It Works</span>
              </div>
              <h2 className="font-display text-4xl text-[#111111] md:text-6xl">
                Your{" "}
                <span
                  className="inline-block rounded-2xl border-4 border-[#111111] bg-[#FF6500] px-4 pb-1 text-white shadow-[5px_5px_0_#111111]"
                  style={{ transform: "rotate(1deg)" }}
                >
                  Shopping Guide!
                </span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="mx-auto max-w-3xl space-y-5">
            {steps.map((step, i) => (
              <ScrollReveal key={i} delay={i * 110} variant="fadeLeft">
                <div
                  className="tf-step group flex items-start gap-5 rounded-3xl border-4 border-[#111111] bg-white px-6 py-6 shadow-[5px_5px_0_#111111] transition-all md:px-8"
                >
                  {/* Big number circle */}
                  <div
                    className="tf-step-num flex-shrink-0 flex h-16 w-16 items-center justify-center rounded-2xl border-4 border-[#111111] font-display text-2xl shadow-[3px_3px_0_#111111]"
                    style={{ background: step.color, color: step.color === "#FFD200" ? "#111111" : "white" }}
                  >
                    {step.num}
                  </div>
                  <div className="flex-1 pt-1">
                    <div className="mb-2 flex items-center gap-3">
                      <div
                        className="flex h-9 w-9 items-center justify-center rounded-xl border-2 border-[#111111]"
                        style={{ background: step.color + "20" }}
                      >
                        <step.icon size={16} style={{ color: step.color }} />
                      </div>
                      <h3 className="font-display text-xl text-[#111111]">{step.title}</h3>
                    </div>
                    <p className="font-body text-sm font-semibold leading-relaxed text-[#111111]/50">{step.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════ GALLERY ═══════════════════════════════ */}
      <section id="gallery" className="relative py-20 md:py-24" style={{ background: "#FFD200" }}>
        {/* Checker pattern */}
        <div className="tf-checker pointer-events-none absolute inset-0" />
        {/* Top thick border */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-[#111111]" />
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-[#111111]" />

        <div className="relative mx-auto max-w-7xl px-6 md:px-12">
          <ScrollReveal>
            <div className="mb-14 text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border-4 border-[#111111] bg-[#111111] px-5 py-2 shadow-[4px_4px_0_#FF6500]">
                <Sparkles size={14} className="text-[#FFD200]" />
                <span className="font-body text-xs font-black tracking-widest text-[#FFD200] uppercase">Gallery</span>
              </div>
              <h2 className="font-display text-4xl text-[#111111] md:text-6xl">
                Peek at Our{" "}
                <span
                  className="inline-block rounded-2xl border-4 border-[#111111] bg-[#FF6500] px-4 pb-1 text-white shadow-[5px_5px_0_#111111]"
                >
                  UK Toys!
                </span>
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <ToysGallery />
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════ TESTIMONIAL ═══════════════════════════════ */}
      <section className="relative overflow-hidden py-20 md:py-24" style={{ background: "#FF6500" }}>
        <div className="tf-polka-white pointer-events-none absolute inset-0" />
        <div className="absolute top-0 left-0 right-0 h-2 bg-[#111111]" />
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-[#111111]" />

        {/* Speech bubble floating decorations */}
        <div
          className="pointer-events-none absolute top-[15%] left-[6%] flex h-16 w-16 items-center justify-center rounded-full border-4 border-[#111111] bg-[#FFD200] shadow-[4px_4px_0_#111111]"
          style={{ animation: "tfFloat 5s ease-in-out infinite" }}
        >
          <Heart size={26} fill="#FF6500" className="text-[#FF6500]" />
        </div>
        <div
          className="pointer-events-none absolute bottom-[18%] right-[5%] flex h-14 w-14 items-center justify-center rounded-2xl border-4 border-[#111111] bg-[#111111] shadow-[4px_4px_0_#FFD200]"
          style={{ animation: "tfFloat 6.5s ease-in-out infinite 1.5s" }}
        >
          <ThumbsUp size={22} className="text-[#FFD200]" />
        </div>

        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <ScrollReveal>
            <div className="inline-block rounded-3xl border-4 border-[#111111] bg-white p-8 shadow-[8px_8px_0_#111111] md:p-12">
              <div className="mb-5 flex justify-center gap-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={24} fill="#FFD200" className="text-[#FFD200] drop-shadow" />
                ))}
              </div>
              <Quote size={36} className="mx-auto mb-5 text-[#FF6500]/20" />
              <blockquote className="font-display mb-6 text-xl leading-relaxed text-[#111111] md:text-2xl">
                &ldquo;I couldn&apos;t believe it — premium UK toys for less than
                ₱280 each! My kids were so happy, and my wallet didn&apos;t suffer.
                We&apos;ll be regular customers for sure!&rdquo;
              </blockquote>
              <div className="flex items-center justify-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border-3 border-[#111111] bg-[#FF6500] shadow-[3px_3px_0_#111111]">
                  <Heart size={18} fill="white" className="text-white" />
                </div>
                <div className="text-left">
                  <div className="font-display text-sm text-[#111111]">Happy Customer</div>
                  <div className="font-body text-xs font-bold text-[#111111]/40">Regular Buyer, Cabuyao</div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════ LOCATION ═══════════════════════════════ */}
      <section className="relative py-24 md:py-28" style={{ background: "#FFFFFF" }}>
        <div className="tf-polka pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-7xl px-6 md:px-12">
          <ScrollReveal>
            <div className="overflow-hidden rounded-[2rem] border-4 border-[#111111] bg-white shadow-[8px_8px_0_#FF6500]">
              <div className="grid md:grid-cols-2">
                {/* Image side */}
                <div className="relative min-h-[280px] md:min-h-[400px]">
                  <Image src="/toys-for-less/toy-5.jpg" alt="Toys for Less Store" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 md:to-white/50" />
                  {/* Tag overlay */}
                  <div
                    className="absolute top-5 left-5 rounded-2xl border-4 border-[#111111] bg-[#FFD200] px-4 py-2 shadow-[4px_4px_0_#111111]"
                    style={{ animation: "tfPriceTag 4s ease-in-out infinite" }}
                  >
                    <span className="font-display text-lg text-[#111111]">₱280 Max!</span>
                  </div>
                </div>
                {/* Info side */}
                <div className="flex flex-col justify-center px-8 py-10 md:px-12">
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full border-3 border-[#111111] bg-[#FF6500] px-4 py-1.5 shadow-[3px_3px_0_#111111] w-fit">
                    <MapPin size={14} className="text-white" />
                    <span className="font-body text-xs font-black tracking-wider text-white uppercase">Visit Our Store</span>
                  </div>
                  <h3 className="font-display mb-3 text-3xl text-[#111111] md:text-4xl">
                    Toys for Less
                    <br />
                    <span style={{ color: "#FF6500" }}>UK Toys</span>
                  </h3>
                  <p className="font-body mb-5 text-sm font-semibold leading-relaxed text-[#111111]/50">
                    Cabuyao, Laguna. Walk in and discover hundreds of UK-imported toys — all ₱280 and below. New drops from the UK every week!
                  </p>
                  <div className="mb-7 space-y-3">
                    {[
                      { label: "Walk-in shopping welcome", color: "#FF6500" },
                      { label: "Wholesale orders available", color: "#111111" },
                      { label: "New UK drops weekly", color: "#FF6500" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div
                          className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-xl border-2 border-[#111111] shadow-[2px_2px_0_#111111]"
                          style={{ background: item.color }}
                        >
                          <CheckCircle2 size={14} className="text-white" />
                        </div>
                        <span className="font-body text-sm font-bold text-[#111111]/65">{item.label}</span>
                      </div>
                    ))}
                  </div>
                  <a
                    href="https://www.facebook.com/ToyssforLess"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tf-btn inline-flex w-fit items-center gap-2.5 rounded-2xl border-4 border-[#111111] bg-[#FF6500] px-6 py-3 font-black text-white shadow-[5px_5px_0_#111111]"
                  >
                    <Facebook size={18} />
                    <span className="font-display text-base tracking-wide">Message on Facebook</span>
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════ FINAL CTA ═══════════════════════════════ */}
      <section className="relative overflow-hidden py-28 md:py-36" style={{ background: "#111111" }}>
        {/* Giant starburst */}
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{
            width: "110vw",
            height: "110vw",
            backgroundImage: `
              conic-gradient(
                from 0deg,
                #FF6500 0deg 8deg, #111111 8deg 16deg,
                #FF6500 16deg 24deg, #111111 24deg 32deg,
                #FF6500 32deg 40deg, #111111 40deg 48deg,
                #FF6500 48deg 56deg, #111111 56deg 64deg,
                #FF6500 64deg 72deg, #111111 72deg 80deg,
                #FF6500 80deg 88deg, #111111 88deg 96deg,
                #FF6500 96deg 104deg, #111111 104deg 112deg,
                #FF6500 112deg 120deg, #111111 120deg 128deg,
                #FF6500 128deg 136deg, #111111 136deg 144deg,
                #FF6500 144deg 152deg, #111111 152deg 160deg,
                #FF6500 160deg 168deg, #111111 168deg 176deg,
                #FF6500 176deg 184deg, #111111 184deg 192deg,
                #FF6500 192deg 200deg, #111111 200deg 208deg,
                #FF6500 208deg 216deg, #111111 216deg 224deg,
                #FF6500 224deg 232deg, #111111 232deg 240deg,
                #FF6500 240deg 248deg, #111111 248deg 256deg,
                #FF6500 256deg 264deg, #111111 264deg 272deg,
                #FF6500 272deg 280deg, #111111 280deg 288deg,
                #FF6500 288deg 296deg, #111111 296deg 304deg,
                #FF6500 304deg 312deg, #111111 312deg 320deg,
                #FF6500 320deg 328deg, #111111 328deg 336deg,
                #FF6500 336deg 344deg, #111111 344deg 352deg,
                #FF6500 352deg 360deg
              )
            `,
            opacity: 0.18,
            animation: "tfStarburst 10s ease-in-out infinite",
          }}
        />
        <div className="tf-polka-white pointer-events-none absolute inset-0" />

        {/* Floating confetti stars */}
        {[
          { style: { top: "12%", left: "7%" }, delay: "0s", size: 22 },
          { style: { top: "70%", left: "3%" }, delay: "1.2s", size: 16 },
          { style: { top: "20%", right: "6%" }, delay: "0.6s", size: 26 },
          { style: { bottom: "16%", right: "9%" }, delay: "1.8s", size: 18 },
          { style: { top: "45%", left: "15%" }, delay: "2.4s", size: 14 },
          { style: { top: "35%", right: "20%" }, delay: "0.9s", size: 20 },
        ].map((p, i) => (
          <div
            key={i}
            className="pointer-events-none absolute"
            style={{ ...p.style, animation: `tfFloat ${5 + i * 0.8}s ease-in-out infinite ${p.delay}` }}
          >
            <Star size={p.size} fill="#FFD200" style={{ color: "#FFD200", opacity: 0.5 }} />
          </div>
        ))}

        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <ScrollReveal variant="scale">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border-4 border-[#FFD200] bg-[#FFD200] px-5 py-2 shadow-[4px_4px_0_#FF6500]">
              <PartyPopper size={15} className="text-[#111111]" />
              <span className="font-body text-xs font-black tracking-widest text-[#111111] uppercase">Start Shopping!</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h2 className="font-display mb-7 text-5xl text-white md:text-7xl">
              UK Toys at
              <br />
              <span
                className="inline-block rounded-2xl border-4 border-[#FFD200] bg-[#FFD200] px-6 pb-2 text-[#111111] shadow-[6px_6px_0_#FF6500]"
                style={{ transform: "rotate(-2deg)" }}
              >
                ₱280 & Below!
              </span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="font-body mx-auto mb-10 max-w-xl text-lg font-bold text-white/65">
              Follow us on Facebook for fresh UK arrivals, flash deals, and exclusive promos.
              Nothing above ₱280 — that&apos;s our promise!
            </p>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <a
              href="https://www.facebook.com/ToyssforLess"
              target="_blank"
              rel="noopener noreferrer"
              className="tf-btn tf-btn-pulse inline-flex items-center gap-3 rounded-2xl border-4 border-[#FFD200] bg-[#FF6500] px-10 py-5 shadow-[6px_6px_0_#FFD200]"
            >
              <Facebook size={24} className="text-white" />
              <span className="font-display text-xl tracking-wide text-white">Follow Toys for Less</span>
              <Star size={20} fill="#FFD200" className="text-[#FFD200]" />
            </a>
            <div className="font-body mt-6 text-xs font-bold text-white/35">
              Be the first to know about new UK toy drops and mega deals!
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════ FOOTER ═══════════════════════════════ */}
      <footer className="border-t-4 border-[#111111] py-10" style={{ background: "#FFFFFF" }}>
        {/* Rainbow stripe */}
        <div className="mb-8 flex h-2">
          <div className="flex-1 bg-[#FF6500]" />
          <div className="flex-1 bg-[#FFD200]" />
          <div className="flex-1 bg-[#111111]" />
          <div className="flex-1 bg-[#FF8C00]" />
          <div className="flex-1 bg-[#FFD200]" />
          <div className="flex-1 bg-[#FF6500]" />
        </div>
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-5 px-6 md:flex-row md:justify-between md:px-12">
          <div className="flex items-center gap-3">
            <Image
              src="/logos/toys-for-less.jpg"
              alt="Toys for Less"
              width={40}
              height={40}
              className="rounded-xl border-4 border-[#FF6500] shadow-[3px_3px_0_#111111]"
            />
            <div>
              <span className="font-display text-sm text-[#111111]">Toys for Less — UK Toys</span>
              <div className="font-body text-[10px] font-black text-[#FF6500] uppercase tracking-wider">Nothing Above ₱280</div>
            </div>
          </div>
          <p className="font-body text-center text-xs font-bold text-[#111111]/35 md:text-right">
            Cabuyao, Laguna
            <br />
            &copy; {new Date().getFullYear()} Toys for Less &middot; A Pring Group Company
          </p>
        </div>
      </footer>
    </main>
  );
}
