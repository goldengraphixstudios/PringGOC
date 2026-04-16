import { Metadata } from "next";
import Link from "next/link";
import Image from "@/components/Img";
import ScrollReveal from "@/components/ScrollReveal";
import CountUp from "@/components/CountUp";
import BusinessNavArrows from "@/components/BusinessNavArrows";
import {
  ArrowLeft,
  Facebook,
  MapPin,
  Star,
  Heart,
  ShoppingCart,
  ChefHat,
  ChevronRight,
  Flame,
  Truck,
  BadgeCheck,
  Clock,
  Video,
  Sparkles,
  Trophy,
  Gift,
  ThumbsUp,
  CheckCircle2,
  Quote,
  Zap,
  Users,
  Package,
  Timer,
  Radio,
  CookingPot,
  UtensilsCrossed,
  House,
  Shield,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Unic's Collection — Cookwares and So Much More",
  description:
    "Quality cookwares and home essentials at affordable prices. Live selling daily 1PM-10PM. Open Monday-Saturday 8AM-5:30PM.",
};

/* ───── color tokens ─────
   red        #CE1127  (primary, brand)
   darkRed    #9C0D1E  (deep accent)
   warmWhite  #FFF5F5  (background)
   cream      #F0D8D8  (soft accent)
   charcoal   #1A1012  (text)
   gold       #D4A030  (premium accent)
────────────────────────── */

export default function UnicsCollectionPage() {
  const services = [
    {
      icon: CookingPot,
      title: "Premium Cookware",
      desc: "From pots and pans to specialty cookware — we have everything your kitchen needs to level up your home cooking game.",
      img: "/unics-collection/product-1.jpg",
      badge: "Best Seller",
      accent: "#CE1127",
    },
    {
      icon: UtensilsCrossed,
      title: "Kitchen Essentials",
      desc: "Spatulas, ladles, chopping boards, containers — every little tool that makes meal prep faster and easier.",
      img: "/unics-collection/product-2.jpg",
      badge: "Must Have",
      accent: "#D4A030",
    },
    {
      icon: Video,
      title: "Daily Live Selling",
      desc: "Catch us LIVE on Facebook every day from 1PM to 10PM! Exclusive deals, flash sales, and first-dibs on new arrivals.",
      img: "/unics-collection/product-3.jpg",
      badge: "LIVE Daily",
      accent: "#CE1127",
    },
    {
      icon: House,
      title: "Home Items",
      desc: "Beyond the kitchen — home organizers, storage solutions, and everyday essentials that keep your home running smooth.",
      img: "/unics-collection/product-4.jpg",
      badge: "New Drops",
      accent: "#D4A030",
    },
  ];

  const reasons = [
    { icon: CookingPot, title: "Quality Cookware", desc: "Durable pots, pans, and cookware built to last — no flimsy knock-offs.", color: "#CE1127" },
    { icon: Video, title: "Live Selling Daily", desc: "Join our Facebook Live every day 1PM-10PM for exclusive deals and promos.", color: "#D4A030" },
    { icon: Shield, title: "Trusted Seller", desc: "Thousands of satisfied customers and growing. Real reviews, real quality.", color: "#CE1127" },
    { icon: Truck, title: "Fast Delivery", desc: "We ship nationwide. Order today and get your items delivered quick.", color: "#D4A030" },
    { icon: Gift, title: "Affordable Prices", desc: "Premium quality doesn't have to break the bank. Best value guaranteed.", color: "#CE1127" },
    { icon: Clock, title: "Open Mon-Sat", desc: "Visit or message us 8AM-5:30PM Monday to Saturday. Always ready to serve.", color: "#D4A030" },
  ];

  const steps = [
    { num: "01", title: "Follow Us on Facebook", desc: "Hit that follow button to stay updated on new arrivals, flash sales, and our daily live selling schedule.", icon: Facebook },
    { num: "02", title: "Join Our Live Selling", desc: "Tune in every day 1PM-10PM! Comment 'MINE' to claim your items. It's fast, fun, and interactive.", icon: Radio },
    { num: "03", title: "Place Your Order", desc: "Message us directly or comment during live. We'll confirm your order and arrange payment & shipping.", icon: ShoppingCart },
    { num: "04", title: "Enjoy Your Purchase", desc: "Receive quality cookware and home essentials right at your doorstep. Cook, organize, and enjoy!", icon: Heart },
  ];

  const stats = [
    { value: 1, suffix: "PM", label: "Live Starts", icon: Timer },
    { value: 10, suffix: "PM", label: "Live Ends", icon: Video },
    { value: 6, suffix: "", label: "Days a Week", icon: Clock },
    { value: 100, suffix: "%", label: "Quality", icon: BadgeCheck },
  ];

  return (
    <main className="relative overflow-hidden" style={{ background: "#FFFAFA" }}>
      <BusinessNavArrows currentSlug="unics-collection" />
      <style
        dangerouslySetInnerHTML={{
          __html: `
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700;800;900&family=Nunito+Sans:wght@300;400;500;600;700;800&display=swap');

@keyframes ucFloat {
  0%, 100% { transform: translateY(0) rotate(-1deg); }
  50% { transform: translateY(-14px) rotate(1.5deg); }
}
@keyframes ucReveal {
  from { opacity: 0; transform: translateY(28px) scale(0.96); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}
@keyframes ucPulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(206,17,39,0.35); }
  50% { box-shadow: 0 0 0 18px rgba(206,17,39,0); }
}
@keyframes ucGlow {
  0%, 100% { box-shadow: 0 8px 32px rgba(206,17,39,0.12); }
  50% { box-shadow: 0 16px 56px rgba(206,17,39,0.28); }
}
@keyframes ucLogoFloat {
  0%, 100% { transform: translateY(0) scale(1) rotate(-1.5deg); }
  50% { transform: translateY(-16px) scale(1.02) rotate(1.5deg); }
}
@keyframes ucSpin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
@keyframes ucLive {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.6; transform: scale(1.3); }
}
@keyframes ucWiggle {
  0%, 100% { transform: rotate(0deg); }
  20% { transform: rotate(-5deg); }
  40% { transform: rotate(5deg); }
  60% { transform: rotate(-3deg); }
  80% { transform: rotate(3deg); }
}
@keyframes ucShimmer {
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
}

.uc-hero-stagger > * {
  opacity: 0;
  animation: ucReveal 0.7s cubic-bezier(0.34,1.56,0.64,1) forwards;
}
.uc-hero-stagger > *:nth-child(1) { animation-delay: 0.1s; }
.uc-hero-stagger > *:nth-child(2) { animation-delay: 0.25s; }
.uc-hero-stagger > *:nth-child(3) { animation-delay: 0.4s; }
.uc-hero-stagger > *:nth-child(4) { animation-delay: 0.55s; }
.uc-hero-stagger > *:nth-child(5) { animation-delay: 0.7s; }
.uc-hero-stagger > *:nth-child(6) { animation-delay: 0.85s; }

.uc-card {
  transition: all 0.4s cubic-bezier(0.34,1.56,0.64,1);
}
.uc-card:hover {
  transform: translateY(-10px) rotate(-0.5deg);
  box-shadow: 0 20px 50px rgba(206,17,39,0.08), 0 8px 20px rgba(0,0,0,0.06);
}
.uc-card:hover .uc-card-icon {
  animation: ucWiggle 0.5s ease-in-out;
}
.uc-card:hover .uc-card-img {
  transform: scale(1.06);
}
.uc-card:hover .uc-card-badge {
  transform: scale(1.1) rotate(-2deg);
}

.uc-reason {
  transition: all 0.35s cubic-bezier(0.34,1.56,0.64,1);
}
.uc-reason:hover {
  transform: translateY(-8px);
  box-shadow: 0 16px 40px rgba(0,0,0,0.08);
}
.uc-reason:hover .uc-reason-icon {
  animation: ucWiggle 0.5s ease-out;
  transform: scale(1.1);
}

.uc-btn {
  position: relative;
  transition: all 0.3s cubic-bezier(0.34,1.56,0.64,1);
  cursor: pointer;
}
.uc-btn:hover {
  transform: translateY(-3px) scale(1.03);
}
.uc-btn-pulse { animation: ucPulse 2.5s ease-in-out infinite; }

.uc-step {
  transition: all 0.35s cubic-bezier(0.34,1.56,0.64,1);
}
.uc-step:hover {
  transform: translateX(8px);
}
.uc-step:hover .uc-step-num {
  transform: scale(1.15) rotate(-5deg);
}
.uc-step:hover .uc-step-bar {
  width: 48px;
}

.uc-gallery-item {
  transition: all 0.45s cubic-bezier(0.34,1.56,0.64,1);
}
.uc-gallery-item:hover {
  transform: scale(1.04) rotate(-1deg);
}
.uc-gallery-item:hover .uc-gallery-overlay {
  opacity: 1;
}

@keyframes ucMarquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
@keyframes ucGlowOrb {
  0%, 100% { opacity: 0.12; transform: scale(1); }
  50% { opacity: 0.22; transform: scale(1.12); }
}
@keyframes ucDrawLine {
  from { transform: scaleX(0); }
  to { transform: scaleX(1); }
}
@keyframes ucDiamondFloat {
  0%, 100% { transform: rotate(45deg) translateY(0); }
  50% { transform: rotate(45deg) translateY(-10px); }
}

.uc-marquee { animation: ucMarquee 35s linear infinite; width: max-content; }

.font-display { font-family: 'Rubik', system-ui, sans-serif; }
.font-body { font-family: 'Nunito Sans', system-ui, sans-serif; }

@media (prefers-reduced-motion: reduce) {
  .uc-hero-stagger > * { opacity: 1; animation: none; }
  .uc-btn-pulse { animation: none; }
  .uc-card:hover .uc-card-icon { animation: none; }
  .uc-reason:hover .uc-reason-icon { animation: none; }
  .uc-marquee { animation: none; }
}
`,
        }}
      />

      {/* ═══ NAV ═══ */}
      <nav className="fixed top-0 right-0 left-0 z-50 border-b border-[#CE1127]/8 bg-[#FFFAFA]/95 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
          <Link
            href="/"
            className="flex cursor-pointer items-center gap-2 text-sm font-medium text-[#1A1012]/40 transition-colors hover:text-[#CE1127]"
          >
            <ArrowLeft size={16} />
            <span className="font-body hidden font-semibold sm:inline">Back to Pring Group</span>
          </Link>
          <div className="flex items-center gap-3">
            <Image
              src="/logos/unics-collection.jpg"
              alt="Unic's Collection"
              width={40}
              height={40}
              className="rounded-xl border-2 border-[#CE1127]/12"
            />
            <div className="hidden sm:block">
              <div className="font-display text-sm font-bold text-[#1A1012]">Unic&apos;s Collection</div>
              <div className="font-body text-[10px] font-bold tracking-wider text-[#CE1127] uppercase">Cookwares &amp; More</div>
            </div>
          </div>
          <a
            href="https://www.facebook.com/people/Unics-Collection/100086783301845/"
            target="_blank"
            rel="noopener noreferrer"
            className="uc-btn inline-flex items-center gap-2 rounded-xl bg-[#CE1127] px-4 py-2 text-sm font-bold text-white shadow-md shadow-[#CE1127]/20"
          >
            <Facebook size={16} />
            <span className="font-body hidden font-bold sm:inline">Follow Us</span>
          </a>
        </div>
      </nav>

      {/* ═══ HERO ═══ */}
      <section className="relative min-h-screen overflow-hidden pt-16" style={{ background: "#0D0809" }}>
        {/* Background glow orb */}
        <div
          className="pointer-events-none absolute top-1/2 left-1/4 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full md:h-[700px] md:w-[700px]"
          style={{ background: "radial-gradient(circle, rgba(206,17,39,0.12) 0%, transparent 70%)", animation: "ucGlowOrb 8s ease-in-out infinite" }}
        />
        {/* Secondary gold glow */}
        <div
          className="pointer-events-none absolute right-[10%] bottom-[20%] hidden h-[300px] w-[300px] rounded-full md:block"
          style={{ background: "radial-gradient(circle, rgba(212,160,48,0.06) 0%, transparent 70%)", animation: "ucGlowOrb 10s ease-in-out infinite 3s" }}
        />

        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)", backgroundSize: "36px 36px" }}
        />

        {/* ── Red diagonal panel (desktop) ── */}
        <div
          className="pointer-events-none absolute top-16 right-0 bottom-0 hidden w-[47%] md:block"
          style={{ background: "#CE1127", clipPath: "polygon(17% 0, 100% 0, 100% 100%, 0% 100%)" }}
        >
          {/* Diagonal stripe texture */}
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{ backgroundImage: "repeating-linear-gradient(135deg, transparent, transparent 22px, rgba(0,0,0,0.12) 22px, rgba(0,0,0,0.12) 44px)" }}
          />
        </div>

        {/* Gold accent stripe at diagonal edge */}
        <div
          className="pointer-events-none absolute top-16 right-0 bottom-0 hidden w-[47%] md:block"
          style={{ clipPath: "polygon(16.5% 0, 17.5% 0, 0.5% 100%, 0% 100%)", background: "linear-gradient(to bottom, rgba(212,160,48,0.5), rgba(212,160,48,0.15))" }}
        />

        {/* Hero image inside diagonal (desktop) */}
        <div
          className="pointer-events-none absolute top-16 right-0 bottom-0 hidden w-[44%] overflow-hidden md:block"
          style={{ clipPath: "polygon(21% 0, 100% 0, 100% 100%, 3% 100%)" }}
        >
          <Image src="/unics-collection/product-1.jpg" alt="Premium Kitchen Cookware" fill className="object-cover" style={{ objectPosition: "center 30%" }} />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D0809]/70 via-[#0D0809]/15 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D0809]/50 via-transparent to-[#0D0809]/15" />
          {/* Live selling overlay badge */}
          <div className="absolute top-8 right-8 flex items-center gap-2 rounded-full border border-white/20 bg-[#CE1127]/80 px-4 py-2 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-white opacity-75" style={{ animation: "ucLive 1.5s infinite" }} />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
            </span>
            <span className="font-display text-[10px] font-bold tracking-wider text-white uppercase">Live Selling</span>
          </div>
        </div>

        {/* Mobile hero image */}
        <div className="relative h-[42vh] overflow-hidden md:hidden">
          <Image src="/unics-collection/product-1.jpg" alt="Premium Kitchen Cookware" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0D0809]/25 via-transparent to-[#0D0809]" />
          <div className="absolute right-0 bottom-0 left-0 h-1 bg-gradient-to-r from-[#CE1127] via-[#D4A030] to-[#CE1127]" />
          {/* Mobile live badge */}
          <div className="absolute top-4 right-4 flex items-center gap-2 rounded-full bg-[#CE1127]/80 px-3 py-1.5 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-white opacity-75" style={{ animation: "ucLive 1.5s infinite" }} />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
            </span>
            <span className="font-display text-[9px] font-bold tracking-wider text-white uppercase">Live Daily</span>
          </div>
        </div>

        {/* ── Content ── */}
        <div className="relative mx-auto max-w-7xl px-6 md:px-12">
          <div className="uc-hero-stagger flex min-h-[52vh] flex-col justify-center py-10 md:min-h-[calc(100vh-4rem)] md:max-w-[50%] md:py-20">

            {/* Logo + brand badge */}
            <div className="mb-7 flex items-center gap-3 md:mb-9">
              <Image
                src="/logos/unics-collection.jpg"
                alt="Unic's Collection"
                width={44}
                height={44}
                className="rounded-xl border-2 border-[#CE1127]/20 shadow-lg shadow-[#CE1127]/10"
              />
              <div>
                <div className="font-display text-xs font-bold tracking-wider text-white/70 uppercase">Unic&apos;s Collection</div>
                <div className="font-body text-[10px] font-semibold text-[#D4A030]/60">Est. Kitchen &amp; Home</div>
              </div>
            </div>

            {/* Giant editorial headline */}
            <h1 className="mb-7 md:mb-9">
              <span
                className="font-display block text-[clamp(2.6rem,7.2vw,6.2rem)] leading-[0.88] font-black tracking-tight"
                style={{ WebkitTextStroke: "1.5px rgba(206,17,39,0.5)", color: "transparent" }}
              >
                QUALITY
              </span>
              <span className="font-display block text-[clamp(2.6rem,7.2vw,6.2rem)] leading-[0.88] font-black tracking-tight text-white">
                KITCHEN
              </span>
              <span className="font-display block text-[clamp(2.6rem,7.2vw,6.2rem)] leading-[0.88] font-black tracking-tight text-[#D4A030]">
                ESSENTIALS
              </span>
            </h1>

            {/* Gold accent line + tagline */}
            <div className="mb-6 flex items-center gap-4 md:mb-8">
              <div
                className="h-[2px] w-16 rounded-full bg-[#D4A030] md:w-20"
                style={{ transformOrigin: "left", animation: "ucDrawLine 1s ease-out 0.9s both" }}
              />
              <p className="font-body text-xs font-semibold tracking-widest text-white/35 uppercase md:text-sm">
                Cookwares &amp; So Much More
              </p>
            </div>

            {/* Schedule badge */}
            <div className="mb-8 inline-flex items-center gap-2.5 rounded-xl border border-[#D4A030]/18 bg-[#D4A030]/6 px-4 py-2 md:mb-10">
              <Clock size={15} className="text-[#D4A030]/70" />
              <span className="font-display text-xs font-bold text-[#D4A030]/80 md:text-sm">Open Mon&ndash;Sat &middot; 8AM&ndash;5:30PM</span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 md:gap-4">
              <a
                href="https://www.facebook.com/people/Unics-Collection/100086783301845/"
                target="_blank"
                rel="noopener noreferrer"
                className="uc-btn uc-btn-pulse inline-flex items-center gap-2.5 rounded-2xl bg-[#CE1127] px-7 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-[#CE1127]/25 md:px-8 md:py-4 md:text-base"
              >
                <Facebook size={18} />
                <span className="font-display">Shop on Facebook</span>
              </a>
              <a
                href="#services"
                className="uc-btn inline-flex items-center gap-2 rounded-2xl border border-white/12 bg-white/[0.04] px-5 py-3 text-sm font-bold text-white/80 backdrop-blur-sm md:px-6 md:py-3.5 md:text-base"
              >
                <span className="font-body">See Our Products</span>
                <ChevronRight size={15} />
              </a>
            </div>

            {/* Trust signals */}
            <div className="mt-8 flex flex-wrap items-center gap-5 md:mt-10">
              {[
                { icon: Video, label: "Daily Live" },
                { icon: BadgeCheck, label: "Quality Items" },
                { icon: ThumbsUp, label: "Trusted Seller" },
              ].map((t, i) => (
                <div key={i} className="flex items-center gap-1.5">
                  <t.icon size={13} className="text-[#D4A030]/45" />
                  <span className="font-body text-[11px] font-semibold text-white/25">{t.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Scrolling marquee band ── */}
        <div className="absolute right-0 bottom-0 left-0 overflow-hidden border-t border-white/[0.04] py-4">
          <div className="uc-marquee flex whitespace-nowrap">
            {[0, 1].map((s) => (
              <div key={s} className="flex shrink-0 items-center">
                {["COOKWARES", "HOME ESSENTIALS", "LIVE SELLING", "QUALITY KITCHEN", "PREMIUM COOKWARE", "DAILY DEALS"].map((text, i) => (
                  <span key={i} className="font-display mx-5 text-xl font-black tracking-wider text-white/[0.03] uppercase md:mx-8 md:text-4xl">
                    {text}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Floating geometric accents (desktop) */}
        <div className="pointer-events-none absolute top-[24%] left-[37%] hidden h-2.5 w-2.5 bg-[#D4A030]/15 md:block" style={{ animation: "ucDiamondFloat 5s ease-in-out infinite" }} />
        <div className="pointer-events-none absolute top-[58%] left-[45%] hidden h-1.5 w-1.5 rounded-full bg-[#CE1127]/10 md:block" style={{ animation: "ucFloat 7s ease-in-out infinite 2s" }} />
        <div className="pointer-events-none absolute top-[40%] left-[50%] hidden h-5 w-px bg-[#D4A030]/10 md:block" style={{ animation: "ucFloat 4.5s ease-in-out infinite 1s" }} />
      </section>

      {/* ═══ STATS — Red ribbon ═══ */}
      <section className="relative z-10 overflow-hidden bg-[#1A1012]">
        <div className="flex h-1.5">
          <div className="flex-1 bg-[#CE1127]" />
          <div className="flex-1 bg-[#D4A030]" />
          <div className="flex-1 bg-[#CE1127]" />
          <div className="flex-1 bg-[#D4A030]" />
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => {
            const colors = ["#CE1127", "#D4A030", "#CE1127", "#D4A030"];
            return (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="group flex flex-col items-center gap-1.5 px-6 py-9 text-center">
                  <s.icon size={24} style={{ color: colors[i] }} className="mb-1 transition-transform group-hover:scale-110" />
                  <div className="font-display text-3xl font-extrabold text-white md:text-4xl">
                    <CountUp end={s.value} suffix={s.suffix} />
                  </div>
                  <div className="font-body text-[11px] font-bold tracking-wider text-white/40 uppercase">{s.label}</div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
        <div className="flex h-1.5">
          <div className="flex-1 bg-[#D4A030]" />
          <div className="flex-1 bg-[#CE1127]" />
          <div className="flex-1 bg-[#D4A030]" />
          <div className="flex-1 bg-[#CE1127]" />
        </div>
      </section>

      {/* ═══ SERVICES — Bento Grid ═══ */}
      <section id="services" className="relative py-24 md:py-32">
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "radial-gradient(circle, #CE1127 1px, transparent 1px)", backgroundSize: "30px 30px" }} />

        <div className="relative mx-auto max-w-7xl px-6 md:px-12">
          <ScrollReveal>
            <div className="mb-16 text-center">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border-2 border-[#CE1127]/15 bg-[#CE1127]/[0.05] px-4 py-1.5">
                <ShoppingCart size={14} className="text-[#CE1127]" />
                <span className="font-display text-xs font-bold tracking-wider text-[#CE1127] uppercase">What We Offer</span>
              </div>
              <h2 className="font-display mb-4 text-3xl font-extrabold text-[#1A1012] md:text-5xl">
                Everything Your <span className="text-[#CE1127]">Kitchen Needs!</span>
              </h2>
              <p className="font-body mx-auto max-w-2xl text-base font-semibold text-[#1A1012]/40">
                Quality cookware, kitchen tools, and home essentials — all at prices that make sense.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-5 md:grid-cols-12">
            {services.map((svc, i) => {
              const spanClass = i === 0 ? "md:col-span-7" : i === 1 ? "md:col-span-5" : i === 2 ? "md:col-span-5" : "md:col-span-7";
              return (
                <ScrollReveal key={i} delay={i * 120} variant="fadeUp" className={spanClass}>
                  <div className="uc-card group h-full overflow-hidden rounded-3xl border-2 bg-white shadow-lg" style={{ borderColor: svc.accent + "12" }}>
                    <div className="relative h-52 overflow-hidden md:h-56">
                      <Image src={svc.img} alt={svc.title} fill className="uc-card-img object-cover transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/25 to-transparent" />
                      <div className="absolute top-4 right-4">
                        <span className="uc-card-badge font-display inline-block rounded-xl px-3 py-1 text-[11px] font-bold tracking-wider text-white uppercase shadow-md transition-transform duration-300" style={{ background: svc.accent }}>
                          {svc.badge}
                        </span>
                      </div>
                      <div className="absolute bottom-4 left-4">
                        <div className="uc-card-icon flex h-12 w-12 items-center justify-center rounded-2xl border-2 bg-white shadow-lg" style={{ borderColor: svc.accent + "25" }}>
                          <svc.icon size={22} style={{ color: svc.accent }} />
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-display mb-2 text-xl font-bold text-[#1A1012]">{svc.title}</h3>
                      <p className="font-body text-sm leading-relaxed font-semibold text-[#1A1012]/40">{svc.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ RED WAVE ═══ */}
      <div className="relative h-20 overflow-hidden">
        <svg viewBox="0 0 1440 80" className="absolute bottom-0 w-full" preserveAspectRatio="none">
          <path d="M0,35 C180,70 400,5 660,40 C880,70 1100,10 1440,40 L1440,80 L0,80 Z" fill="#CE1127" />
        </svg>
      </div>

      {/* ═══ WHY CHOOSE US ═══ */}
      <section className="relative overflow-hidden bg-[#CE1127] py-20 md:py-24">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "repeating-linear-gradient(135deg, transparent, transparent 24px, rgba(255,255,255,0.3) 24px, rgba(255,255,255,0.3) 48px)" }} />

        <div className="relative mx-auto max-w-7xl px-6 md:px-12">
          <ScrollReveal>
            <div className="mb-14 text-center">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border-2 border-white/20 bg-white/10 px-4 py-1.5">
                <Trophy size={14} className="text-[#D4A030]" />
                <span className="font-display text-xs font-bold tracking-wider text-white uppercase">Why Unic&apos;s Collection</span>
              </div>
              <h2 className="font-display mb-4 text-3xl font-extrabold text-white md:text-5xl">
                Your Trusted <span className="text-[#D4A030]">Kitchen Partner!</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-2 lg:grid-cols-3">
            {reasons.map((item, i) => (
              <ScrollReveal key={i} delay={i * 80} variant="scale">
                <div className="uc-reason rounded-3xl border-2 border-white/10 bg-white p-6 shadow-lg">
                  <div className="uc-reason-icon mb-4 flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-300" style={{ background: item.color + "10", border: `2px solid ${item.color}20` }}>
                    <item.icon size={24} style={{ color: item.color }} />
                  </div>
                  <h3 className="font-display mb-2 text-lg font-bold text-[#1A1012]">{item.title}</h3>
                  <p className="font-body text-sm leading-relaxed font-semibold text-[#1A1012]/40">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ RED → WHITE WAVE ═══ */}
      <div className="relative h-20 overflow-hidden bg-[#CE1127]">
        <svg viewBox="0 0 1440 80" className="absolute bottom-0 w-full" preserveAspectRatio="none">
          <path d="M0,30 C320,65 700,5 1050,45 C1280,65 1400,40 1440,30 L1440,80 L0,80 Z" fill="#FFFAFA" />
        </svg>
      </div>

      {/* ═══ HOW IT WORKS ═══ */}
      <section className="relative py-24 md:py-32">
        <div className="relative mx-auto max-w-7xl px-6 md:px-12">
          <ScrollReveal>
            <div className="mb-14 text-center">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border-2 border-[#D4A030]/25 bg-[#D4A030]/[0.06] px-4 py-1.5">
                <Zap size={14} className="text-[#CE1127]" />
                <span className="font-display text-xs font-bold tracking-wider text-[#CE1127] uppercase">How It Works</span>
              </div>
              <h2 className="font-display mb-4 text-3xl font-extrabold text-[#1A1012] md:text-5xl">
                Shop in <span className="text-[#CE1127]">4 Easy Steps!</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="mx-auto max-w-3xl space-y-4">
            {steps.map((step, i) => {
              const stepColors = ["#CE1127", "#D4A030", "#CE1127", "#D4A030"];
              const c = stepColors[i];
              return (
                <ScrollReveal key={i} delay={i * 120} variant="fadeLeft">
                  <div className="uc-step group flex items-start gap-5 rounded-3xl border-2 border-transparent bg-white px-6 py-6 shadow-sm transition-all hover:shadow-md md:px-8">
                    <div>
                      <span className="uc-step-num font-display text-4xl font-extrabold transition-all duration-300 md:text-5xl" style={{ color: c + "25" }}>
                        {step.num}
                      </span>
                    </div>
                    <div className="flex-1 pt-1">
                      <div className="mb-1.5 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl" style={{ background: c + "10" }}>
                          <step.icon size={18} style={{ color: c }} />
                        </div>
                        <h3 className="font-display text-lg font-bold text-[#1A1012]">{step.title}</h3>
                      </div>
                      <p className="font-body text-sm leading-relaxed font-semibold text-[#1A1012]/40">{step.desc}</p>
                      <div className="uc-step-bar mt-3 h-1 w-8 rounded-full transition-all duration-400" style={{ background: c }} />
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ GALLERY ═══ */}
      <section className="relative py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <ScrollReveal>
            <div className="mb-14 text-center">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border-2 border-[#CE1127]/15 bg-[#CE1127]/[0.05] px-4 py-1.5">
                <Sparkles size={14} className="text-[#CE1127]" />
                <span className="font-display text-xs font-bold tracking-wider text-[#CE1127] uppercase">Gallery</span>
              </div>
              <h2 className="font-display mb-4 text-3xl font-extrabold text-[#1A1012] md:text-5xl">
                See What We <span className="text-[#CE1127]">Have in Store!</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {[
              { src: "/unics-collection/product-1.jpg", alt: "Kitchen Collection", span: "md:col-span-2 md:row-span-2", border: "#CE1127" },
              { src: "/unics-collection/product-2.jpg", alt: "Cookware", span: "", border: "#D4A030" },
              { src: "/unics-collection/product-3.jpg", alt: "Cooking", span: "", border: "#CE1127" },
              { src: "/unics-collection/product-4.jpg", alt: "Essentials", span: "", border: "#D4A030" },
              { src: "/unics-collection/product-5.jpg", alt: "Kitchen Setup", span: "", border: "#CE1127" },
            ].map((img, i) => (
              <ScrollReveal key={i} delay={i * 100} variant="scale">
                <div
                  className={`uc-gallery-item group relative overflow-hidden rounded-3xl border-2 bg-white shadow-sm ${img.span}`}
                  style={{ minHeight: img.span ? "420px" : "210px", borderColor: img.border + "18" }}
                >
                  <Image src={img.src} alt={img.alt} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="uc-gallery-overlay absolute inset-0 flex items-end bg-gradient-to-t from-[#1A1012]/60 via-transparent to-transparent opacity-0 transition-opacity duration-300">
                    <div className="p-5">
                      <span className="font-display text-sm font-bold text-white">{img.alt}</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIAL — Gold accent section ═══ */}
      <section className="relative overflow-hidden bg-[#D4A030] py-20 md:py-24">
        <div className="absolute top-0 right-0 left-0 flex h-1.5">
          <div className="flex-1 bg-[#CE1127]" />
          <div className="flex-1 bg-[#D4A030]" />
          <div className="flex-1 bg-[#CE1127]" />
          <div className="flex-1 bg-[#D4A030]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 md:px-12">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <Quote size={44} className="mx-auto mb-6 text-[#1A1012]/15" />
              <blockquote className="font-display mb-6 text-2xl leading-relaxed font-bold text-[#1A1012]/80 italic md:text-3xl">
                &ldquo;Love Unic&apos;s Collection! The cookware quality is amazing
                for the price. I always watch their live selling — super sulit
                and the customer service is A+!&rdquo;
              </blockquote>
              <div className="flex items-center justify-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#CE1127]/20 bg-[#CE1127]/10">
                  <Heart size={18} className="text-[#CE1127]" />
                </div>
                <div className="text-left">
                  <div className="font-display text-sm font-bold text-[#1A1012]/75">Happy Customer</div>
                  <div className="font-body text-xs font-semibold text-[#1A1012]/40">Regular Live Buyer</div>
                </div>
              </div>
              <div className="mt-5 flex items-center justify-center gap-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={20} className="fill-[#CE1127] text-[#CE1127]" />
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        <div className="absolute right-0 bottom-0 left-0 flex h-1.5">
          <div className="flex-1 bg-[#D4A030]" />
          <div className="flex-1 bg-[#CE1127]" />
          <div className="flex-1 bg-[#D4A030]" />
          <div className="flex-1 bg-[#CE1127]" />
        </div>
      </section>

      {/* ═══ LOCATION ═══ */}
      <section className="relative py-24 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <ScrollReveal>
            <div className="overflow-hidden rounded-[2rem] border-2 border-[#CE1127]/10 bg-white shadow-xl">
              <div className="grid md:grid-cols-2">
                <div className="relative min-h-[280px] md:min-h-[380px]">
                  <Image src="/unics-collection/product-6.jpg" alt="Unic's Collection" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/50 md:to-white/80" />
                </div>
                <div className="flex flex-col justify-center px-8 py-10 md:px-12">
                  <div className="mb-4 flex items-center gap-2">
                    <Video size={18} className="text-[#CE1127]" />
                    <span className="font-display text-xs font-bold tracking-wider text-[#CE1127] uppercase">Shop With Us</span>
                  </div>
                  <h3 className="font-display mb-3 text-2xl font-extrabold text-[#1A1012] md:text-3xl">Unic&apos;s Collection</h3>
                  <p className="font-body mb-4 text-sm leading-relaxed font-semibold text-[#1A1012]/40">
                    Cookwares and so much more! Join our daily Facebook Live from 1PM to 10PM
                    for the best deals on kitchen essentials and home items.
                  </p>
                  <div className="mb-6 space-y-2.5">
                    {[
                      { label: "Live selling daily 1PM-10PM", color: "#CE1127" },
                      { label: "Open Mon-Sat 8AM-5:30PM", color: "#D4A030" },
                      { label: "Nationwide delivery available", color: "#CE1127" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 size={15} style={{ color: item.color }} />
                        <span className="font-body font-semibold text-[#1A1012]/55">{item.label}</span>
                      </div>
                    ))}
                  </div>
                  <a
                    href="https://www.facebook.com/people/Unics-Collection/100086783301845/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="uc-btn inline-flex w-fit items-center gap-2 rounded-2xl bg-[#CE1127] px-6 py-3 font-bold text-white shadow-md shadow-[#CE1127]/15"
                  >
                    <Facebook size={16} />
                    <span className="font-display text-sm">Message on Facebook</span>
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ FINAL CTA ═══ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#CE1127] via-[#B00E22] to-[#7A0918] py-28 md:py-36">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "repeating-linear-gradient(135deg, transparent, transparent 24px, rgba(255,255,255,0.3) 24px, rgba(255,255,255,0.3) 48px)" }} />
        {/* Floating accents */}
        <div className="pointer-events-none absolute top-[14%] left-[7%] flex h-16 w-16 items-center justify-center rounded-2xl bg-[#D4A030]/12" style={{ animation: "ucFloat 6s ease-in-out infinite" }}>
          <CookingPot size={28} className="text-[#D4A030]/60" />
        </div>
        <div className="pointer-events-none absolute right-[8%] bottom-[14%] flex h-14 w-14 items-center justify-center rounded-full bg-white/8" style={{ animation: "ucFloat 5s ease-in-out infinite 2s" }}>
          <Star size={22} className="text-white/40" />
        </div>

        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <ScrollReveal variant="scale">
            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border-2 border-white/15 bg-white/8 px-5 py-2 backdrop-blur-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" style={{ animation: "ucLive 1.5s infinite" }} />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-300" />
              </span>
              <span className="font-display text-xs font-bold tracking-wider text-white uppercase">Join Our Live Now!</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h2 className="font-display mb-6 text-4xl font-extrabold text-white md:text-6xl">
              Don&apos;t Miss
              <br />
              <span className="text-[#D4A030]">Today&apos;s Deals!</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="font-body mx-auto mb-10 max-w-xl text-lg font-semibold text-white/65">
              Follow us on Facebook and catch our daily live selling from 1PM to 10PM.
              Quality cookware and home essentials at unbeatable prices!
            </p>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <a
              href="https://www.facebook.com/people/Unics-Collection/100086783301845/"
              target="_blank"
              rel="noopener noreferrer"
              className="uc-btn uc-btn-pulse inline-flex items-center gap-3 rounded-2xl bg-white px-10 py-5 text-lg font-extrabold text-[#CE1127] shadow-xl shadow-white/10"
            >
              <Facebook size={22} />
              <span className="font-display">Follow Unic&apos;s Collection</span>
            </a>
            <div className="font-body mt-5 text-xs font-semibold text-white/35">
              Live selling daily &middot; Mon-Sat 1PM-10PM
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer className="py-10" style={{ background: "#FFFAFA" }}>
        <div className="mb-8 flex h-1">
          <div className="flex-1 bg-[#CE1127]" />
          <div className="flex-1 bg-[#D4A030]" />
          <div className="flex-1 bg-[#CE1127]" />
          <div className="flex-1 bg-[#D4A030]" />
        </div>
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-5 px-6 md:flex-row md:justify-between md:px-12">
          <div className="flex items-center gap-3">
            <Image src="/logos/unics-collection.jpg" alt="Unic's Collection" width={36} height={36} className="rounded-xl border-2 border-[#CE1127]/10" />
            <div>
              <span className="font-display text-sm font-bold text-[#1A1012]">Unic&apos;s Collection</span>
              <div className="font-body text-[10px] font-bold text-[#CE1127]">Cookwares &amp; So Much More</div>
            </div>
          </div>
          <p className="font-body text-center text-xs font-semibold text-[#1A1012]/30 md:text-right">
            Open Mon-Sat 8AM-5:30PM<br />
            &copy; {new Date().getFullYear()} Unic&apos;s Collection &middot; A Pring Group Company
          </p>
        </div>
      </footer>
    </main>
  );
}
