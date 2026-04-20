import { Metadata } from "next";
import Link from "next/link";
import Image from "@/components/Img";
import ScrollReveal from "@/components/ScrollReveal";
import CountUp from "@/components/CountUp";
import BusinessNavArrows from "@/components/BusinessNavArrows";
import BusinessPopup from "@/components/BusinessPopup";
import {
  ArrowLeft,
  Facebook,
  MapPin,
  Users,
  Sparkles,
  Crown,
  Star,
  Heart,
  ShoppingBag,
  Shirt,
  Package,
  Globe,
  ChevronRight,
  Gem,
  Tag,
  Truck,
  BadgeCheck,
  Scissors,
  Layers,
  Quote,
  Flame,
  TrendingUp,
  Eye,
  Gift,
  CheckCircle2,
  Palette,
  Award,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "The House of Garments PH — European Quality, Philippine Prices | Cabuyao",
  description:
    "High-quality European items at affordable prices. Retail and bundle sales. The House of Garments PH, Cabuyao.",
};

export default function HouseOfGarmentsPage() {
  const collections = [
    {
      icon: Globe,
      title: "European Clothing",
      desc: "Premium imported garments straight from Europe — timeless cuts, superior fabrics, and authentic labels at unbeatable prices.",
      img: "/house-of-garments/hog-3.jpg",
      badge: "Imported",
    },
    {
      icon: ShoppingBag,
      title: "Retail Sales",
      desc: "Browse and pick your favorite pieces one by one. Every visit is a new treasure hunt of European fashion finds.",
      img: "/house-of-garments/hog-4.jpg",
      badge: "Walk-In",
    },
    {
      icon: Package,
      title: "Bundle Deals",
      desc: "Get more for less with our curated bundles. Perfect for resellers or anyone who loves a good wardrobe refresh.",
      img: "/house-of-garments/hog-5.jpg",
      badge: "Best Value",
    },
    {
      icon: Palette,
      title: "Fashion Accessories",
      desc: "Complete your look with imported accessories — bags, belts, scarves, and more to elevate any outfit.",
      img: "/house-of-garments/hog-6.jpg",
      badge: "Trending",
    },
  ];

  const whyUs = [
    {
      icon: Globe,
      title: "Authentic European",
      desc: "Directly sourced from Europe — genuine labels, premium fabrics, original quality.",
    },
    {
      icon: Tag,
      title: "Affordable Prices",
      desc: "Luxury doesn't have to break the bank. European fashion at Philippine-friendly prices.",
    },
    {
      icon: Layers,
      title: "Retail & Bundle",
      desc: "Buy a single piece or grab bundles for reselling — flexible options for every buyer.",
    },
    {
      icon: BadgeCheck,
      title: "Quality Guaranteed",
      desc: "Every item is hand-picked and inspected. We stand behind the quality of our garments.",
    },
    {
      icon: TrendingUp,
      title: "Trendy Selections",
      desc: "Constantly refreshed inventory with the latest European styles and timeless classics.",
    },
    {
      icon: Truck,
      title: "Wholesale Supply",
      desc: "Bulk orders welcome for resellers across the Philippines. Build your brand with our stock.",
    },
  ];

  const steps = [
    {
      num: "01",
      title: "Follow Our Page",
      desc: "Stay updated on new arrivals, flash deals, and exclusive drops by following us on Facebook.",
      icon: Facebook,
    },
    {
      num: "02",
      title: "Browse Collections",
      desc: "Visit our store in Cabuyao or check our Facebook page for the latest European arrivals.",
      icon: Eye,
    },
    {
      num: "03",
      title: "Pick Your Style",
      desc: "Choose retail pieces or grab a bundle. Every item is European quality at Philippine prices.",
      icon: Shirt,
    },
    {
      num: "04",
      title: "Look & Feel Premium",
      desc: "Wear authentic European fashion that turns heads without emptying your wallet.",
      icon: Crown,
    },
  ];

  const stats = [
    { value: 500, suffix: "+", label: "European Items", icon: Shirt },
    { value: 4, suffix: "", label: "Service Categories", icon: ShoppingBag },
    { value: 100, suffix: "%", label: "Authentic Imports", icon: Globe },
    { value: 1, suffix: "", label: "Cabuyao Store", icon: MapPin },
  ];

  return (
    <main className="relative overflow-hidden bg-[#0C0800]">
      <BusinessNavArrows currentSlug="house-of-garments" />
      <BusinessPopup config={{
        storageKey: "popup-house-of-garments",
        delay: 2100,
        headerBg: "linear-gradient(135deg, #0A0400 0%, #2A1400 50%, #6B4818 100%)",
        headerIcon: "🍳",
        modalBg: "#1A0C04",
        eyebrow: "DIRECT SUPPLIER",
        eyebrowColor: "#F0C048",
        title: "Premium essentials, better value.",
        titleColor: "#F5EBD4",
        body: "Browse quality cookware and household products sourced directly from China without middleman markup.",
        bodyColor: "rgba(245,235,212,0.48)",
        primaryCTA: "View Product Categories",
        primaryHref: "#products",
        ctaBg: "#F0C048",
        ctaColor: "#1A0C04",
        secondaryCTA: "Follow Live Selling",
        secondaryColor: "rgba(240,192,72,0.45)",
        badge: "100% Quality",
        badgeBg: "rgba(240,192,72,0.2)",
        badgeColor: "#F0C048",
        logoSrc: "/logos/house-of-garments.jpg",
      }} />
      <style
        dangerouslySetInnerHTML={{
          __html: `
@import url('https://fonts.googleapis.com/css2?family=Cormorant:wght@400;500;600;700&family=Montserrat:wght@300;400;500;600;700&display=swap');

@keyframes hogPulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(240,192,72,0.35); }
  50% { box-shadow: 0 0 50px 14px rgba(240,192,72,0.08); }
}
@keyframes hogFloat {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  33% { transform: translateY(-16px) rotate(0.3deg); }
  66% { transform: translateY(7px) rotate(-0.25deg); }
}
@keyframes hogReveal {
  from { opacity: 0; transform: translateY(32px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes hogShimmer {
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
}
@keyframes hogGlow {
  0%, 100% { opacity: 0.3; filter: blur(65px); }
  50% { opacity: 0.55; filter: blur(90px); }
}
@keyframes hogOrb {
  0%, 100% { transform: translate(0, 0) scale(1); }
  25% { transform: translate(22px, -20px) scale(1.07); }
  50% { transform: translate(-12px, 18px) scale(0.95); }
  75% { transform: translate(-18px, -10px) scale(1.03); }
}
@keyframes hogBorderGlow {
  0%, 100% { border-color: rgba(240,192,72,0.06); }
  50% { border-color: rgba(240,192,72,0.2); }
}
@keyframes hogLogoFloat {
  0%, 100% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-14px) scale(1.015); }
}
@keyframes hogFabricWave {
  0% { transform: translateX(-100%) skewX(-5deg); }
  100% { transform: translateX(100%) skewX(-5deg); }
}
@keyframes hogSparkle {
  0%, 100% { opacity: 0; transform: scale(0.5) rotate(0deg); }
  50% { opacity: 1; transform: scale(1) rotate(180deg); }
}
@keyframes hogTagSwing {
  0%, 100% { transform: rotate(-3deg); }
  50% { transform: rotate(3deg); }
}

.hog-hero-stagger > * {
  opacity: 0;
  animation: hogReveal 0.85s cubic-bezier(0.16,1,0.3,1) forwards;
}
.hog-hero-stagger > *:nth-child(1) { animation-delay: 0.15s; }
.hog-hero-stagger > *:nth-child(2) { animation-delay: 0.35s; }
.hog-hero-stagger > *:nth-child(3) { animation-delay: 0.55s; }
.hog-hero-stagger > *:nth-child(4) { animation-delay: 0.7s; }
.hog-hero-stagger > *:nth-child(5) { animation-delay: 0.85s; }
.hog-hero-stagger > *:nth-child(6) { animation-delay: 1.0s; }

.hog-shimmer {
  background: linear-gradient(90deg, #F0C048 0%, #F0D878 28%, #F0C048 56%, #D4A030 100%);
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: hogShimmer 5s linear infinite;
}

.hog-card {
  transition: all 0.45s cubic-bezier(0.16,1,0.3,1);
  animation: hogBorderGlow 5s ease-in-out infinite;
}
.hog-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 0 50px rgba(240,192,72,0.06), 0 25px 60px rgba(0,0,0,0.45);
  border-color: rgba(240,192,72,0.3) !important;
}
.hog-card:hover .hog-card-icon {
  box-shadow: 0 0 22px rgba(240,192,72,0.2);
  background: rgba(240,192,72,0.1);
}
.hog-card:hover .hog-card-img {
  transform: scale(1.06);
}
.hog-card:hover .hog-card-badge {
  background: rgba(240,192,72,0.2);
  border-color: rgba(240,192,72,0.4);
}

.hog-why-card {
  transition: all 0.4s cubic-bezier(0.16,1,0.3,1);
}
.hog-why-card:hover {
  transform: translateY(-6px);
  background: rgba(240,192,72,0.03);
  border-color: rgba(240,192,72,0.2);
}
.hog-why-card:hover .hog-why-icon {
  background: rgba(240,192,72,0.1);
  box-shadow: 0 0 20px rgba(240,192,72,0.15);
}

.hog-btn {
  position: relative;
  transition: all 0.3s cubic-bezier(0.16,1,0.3,1);
}
.hog-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 0 35px rgba(240,192,72,0.25), 0 14px 45px rgba(240,192,72,0.12);
}
.hog-btn-pulse { animation: hogPulse 3s ease-in-out infinite; }

.hog-step {
  transition: all 0.4s cubic-bezier(0.16,1,0.3,1);
}
.hog-step:hover {
  transform: translateX(10px);
  background: rgba(240,192,72,0.03);
  border-color: rgba(240,192,72,0.25);
}
.hog-step:hover .hog-step-num {
  color: #F0C048;
  text-shadow: 0 0 30px rgba(240,192,72,0.3);
}
.hog-step:hover .hog-step-line {
  background: #F0C048;
  width: 60px;
}

.hog-gallery-item {
  transition: all 0.5s cubic-bezier(0.16,1,0.3,1);
}
.hog-gallery-item:hover {
  transform: scale(1.04);
  box-shadow: 0 0 50px rgba(240,192,72,0.1);
}
.hog-gallery-item:hover .hog-gallery-overlay {
  opacity: 1;
}

.font-display { font-family: 'Cormorant', Georgia, serif; }
.font-body { font-family: 'Montserrat', system-ui, sans-serif; }

.hog-divider {
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(240,192,72,0.2), transparent);
}

@media (prefers-reduced-motion: reduce) {
  .hog-hero-stagger > * { opacity: 1; animation: none; }
  .hog-shimmer { animation: none; }
  .hog-btn-pulse { animation: none; }
  .hog-card { animation: none; }
}
`,
        }}
      />

      {/* ═══ NAVIGATION ═══ */}
      <nav className="fixed top-0 right-0 left-0 z-50 border-b border-[#F0C048]/[0.05] bg-[#0C0800]/90 backdrop-blur-2xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
          <Link
            href="/"
            className="flex cursor-pointer items-center gap-2 text-sm font-medium text-white/40 transition-colors hover:text-[#F0C048]"
          >
            <ArrowLeft size={16} />
            <span className="font-body hidden sm:inline">Back to Pring Group</span>
          </Link>
          <div className="flex items-center gap-3">
            <Image
              src="/logos/house-of-garments.jpg"
              alt="The House of Garments PH"
              width={36}
              height={36}
              className="rounded-lg ring-1 ring-[#F0C048]/20"
            />
            <div className="hidden sm:block">
              <div className="font-body text-sm font-bold text-white">
                House of Garments
              </div>
              <div className="font-body text-[10px] tracking-wider text-[#F0C048] uppercase">
                Cabuyao
              </div>
            </div>
          </div>
          <a
            href="https://www.facebook.com/houseofgarmentsph"
            target="_blank"
            rel="noopener noreferrer"
            className="hog-btn font-body inline-flex cursor-pointer items-center gap-2 rounded-lg bg-[#F0C048] px-4 py-2 text-sm font-bold text-[#0C0800]"
          >
            <Facebook size={16} />
            <span className="hidden sm:inline">Follow Us</span>
          </a>
        </div>
      </nav>

      {/* ═══ HERO — SPLIT DIAGONAL ═══ */}
      <section className="relative min-h-screen overflow-hidden pt-16">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/house-of-garments/hog-2.jpg"
            alt="House of Garments Collection"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0C0800] via-[#0C0800]/95 to-[#0C0800]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C0800] via-[#0C0800]/30 to-transparent" />
        </div>

        {/* Warm amber orbs */}
        <div
          className="pointer-events-none absolute top-20 left-[6%] h-80 w-80 rounded-full bg-[#F0C048]/12"
          style={{
            animation: "hogOrb 15s ease-in-out infinite, hogGlow 8s ease-in-out infinite",
          }}
        />
        <div
          className="pointer-events-none absolute top-[40%] right-[4%] h-60 w-60 rounded-full bg-[#D4A030]/10"
          style={{
            animation: "hogOrb 18s ease-in-out infinite reverse, hogGlow 9s ease-in-out infinite 2s",
          }}
        />
        <div
          className="pointer-events-none absolute bottom-[18%] left-[28%] h-44 w-44 rounded-full bg-[#F0D878]/8"
          style={{
            animation: "hogOrb 12s ease-in-out infinite 3s, hogGlow 6s ease-in-out infinite 1s",
          }}
        />

        {/* Fabric wave accent */}
        <div
          className="pointer-events-none absolute top-[30%] left-0 h-px w-full opacity-[0.06]"
          style={{
            background: "linear-gradient(90deg, transparent, #F0C048, transparent)",
            animation: "hogFabricWave 20s linear infinite",
          }}
        />

        <div className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-8 px-6 md:grid-cols-[1fr_auto] md:px-12">
          {/* Left: Content */}
          <div className="hog-hero-stagger py-24 md:py-20">
            {/* Badge */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#F0C048]/20 bg-[#F0C048]/[0.06] px-4 py-1.5">
              <Crown size={13} className="text-[#F0C048]" />
              <span className="font-body text-[11px] font-bold tracking-[0.15em] text-[#F0C048] uppercase">
                European Quality, Philippine Prices
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display mb-5 text-5xl leading-[1.08] font-bold tracking-tight text-white md:text-7xl">
              Dress in
              <br />
              <span className="hog-shimmer">European</span>
              <br />
              Elegance{" "}
              <span className="italic text-[#F0C048]">for Less</span>
            </h1>

            {/* Subheadline */}
            <p className="font-body mb-8 max-w-lg text-lg leading-relaxed text-white/50">
              Premium imported garments from Europe — authentic labels,
              superior fabrics, at prices you won&apos;t believe. Retail and
              bundle options available.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://www.facebook.com/houseofgarmentsph"
                target="_blank"
                rel="noopener noreferrer"
                className="hog-btn hog-btn-pulse font-body inline-flex cursor-pointer items-center gap-2.5 rounded-xl bg-[#F0C048] px-7 py-3.5 text-base font-bold text-[#0C0800]"
              >
                <Facebook size={18} />
                Shop on Facebook
              </a>
              <a
                href="#collections"
                className="hog-btn font-body inline-flex cursor-pointer items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-6 py-3.5 text-base font-medium text-white/65 backdrop-blur-sm"
              >
                View Collections
                <ChevronRight size={16} />
              </a>
            </div>

            {/* Trust markers */}
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2">
                <Globe size={14} className="text-[#F0C048]/60" />
                <span className="font-body text-xs text-white/40">
                  European Imports
                </span>
              </div>
              <div className="flex items-center gap-2">
                <BadgeCheck size={14} className="text-[#F0C048]/60" />
                <span className="font-body text-xs text-white/40">
                  Authenticity Guaranteed
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Tag size={14} className="text-[#F0C048]/60" />
                <span className="font-body text-xs text-white/40">
                  Retail & Bundle
                </span>
              </div>
            </div>
          </div>

          {/* Right: Floating Logo with decorative frame */}
          <div className="hidden md:flex md:items-center md:justify-center">
            <div className="relative">
              {/* Ambient glow */}
              <div
                className="absolute -inset-10 rounded-full bg-[#F0C048]/8 blur-3xl"
                style={{ animation: "hogGlow 6s ease-in-out infinite" }}
              />
              {/* Decorative rings */}
              <div
                className="absolute -inset-7 rounded-3xl border border-[#F0C048]/12"
                style={{ animation: "hogBorderGlow 4s ease-in-out infinite" }}
              />
              <div
                className="absolute -inset-12 rounded-[2rem] border border-[#F0C048]/6"
                style={{ animation: "hogBorderGlow 4s ease-in-out infinite 1.2s" }}
              />
              {/* Tag decoration */}
              <div
                className="absolute -top-5 -left-5 flex h-12 w-12 items-center justify-center rounded-xl border border-[#F0C048]/15 bg-[#0C0800]/80 backdrop-blur-sm"
                style={{ animation: "hogTagSwing 4s ease-in-out infinite" }}
              >
                <Shirt size={18} className="text-[#F0C048]" />
              </div>
              {/* Logo */}
              <Image
                src="/logos/house-of-garments.jpg"
                alt="The House of Garments PH Logo"
                width={230}
                height={230}
                className="relative rounded-2xl shadow-2xl ring-1 ring-[#F0C048]/20"
                style={{ animation: "hogLogoFloat 7s ease-in-out infinite" }}
              />
              {/* Sparkles */}
              <div
                className="absolute -right-3 -bottom-2 text-[#F0C048]"
                style={{ animation: "hogSparkle 3.5s ease-in-out infinite" }}
              >
                <Sparkles size={14} />
              </div>
              <div
                className="absolute -top-2 right-4 text-[#F0D878]"
                style={{ animation: "hogSparkle 3.5s ease-in-out infinite 1.8s" }}
              >
                <Sparkles size={10} />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute right-0 bottom-0 left-0 h-32 bg-gradient-to-t from-[#0C0800] to-transparent" />
      </section>

      {/* ═══ STATS RIBBON ═══ */}
      <section className="relative z-10 border-y border-[#F0C048]/[0.05] bg-[#0C0800]">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-px md:grid-cols-4">
          {stats.map((s, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div className="group flex flex-col items-center gap-2 border-r border-[#F0C048]/[0.05] px-6 py-10 last:border-r-0">
                <s.icon
                  size={22}
                  className="mb-1 text-[#F0C048]/50 transition-colors group-hover:text-[#F0C048]"
                />
                <div className="font-display text-3xl font-bold text-white md:text-4xl">
                  <CountUp end={s.value} suffix={s.suffix} />
                </div>
                <div className="font-body text-[10px] tracking-wider text-white/30 uppercase">
                  {s.label}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ═══ COLLECTIONS ═══ */}
      <section id="collections" className="relative py-24 md:py-32">
        {/* Dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.012]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, #F0C048 1px, transparent 0)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6 md:px-12">
          <ScrollReveal>
            <div className="mb-16 text-center">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#F0C048]/12 bg-[#F0C048]/[0.04] px-4 py-1.5">
                <Gem size={13} className="text-[#F0C048]" />
                <span className="font-body text-[11px] font-bold tracking-[0.15em] text-[#F0C048] uppercase">
                  Our Collections
                </span>
              </div>
              <h2 className="font-display mb-4 text-3xl font-bold text-white md:text-5xl">
                What We{" "}
                <span className="hog-shimmer">Offer</span>
              </h2>
              <p className="font-body mx-auto max-w-2xl text-base text-white/35">
                From individual retail pieces to bulk bundles — discover
                European fashion that fits your style and budget.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-6 md:grid-cols-2">
            {collections.map((col, i) => (
              <ScrollReveal key={i} delay={i * 120} variant="fadeUp">
                <div className="hog-card group overflow-hidden rounded-2xl border border-[#F0C048]/[0.06] bg-[#110E04]">
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={col.img}
                      alt={col.title}
                      fill
                      className="hog-card-img object-cover transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#110E04] via-[#110E04]/30 to-transparent" />
                    {/* Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="hog-card-badge font-body rounded-full border border-[#F0C048]/15 bg-[#F0C048]/[0.08] px-3 py-1 text-[10px] font-bold tracking-wider text-[#F0C048] uppercase backdrop-blur-sm transition-all duration-300">
                        {col.badge}
                      </span>
                    </div>
                    {/* Icon */}
                    <div className="absolute bottom-4 left-4">
                      <div className="hog-card-icon flex h-11 w-11 items-center justify-center rounded-xl border border-[#F0C048]/12 bg-[#F0C048]/[0.06] backdrop-blur-sm transition-all duration-300">
                        <col.icon size={20} className="text-[#F0C048]" />
                      </div>
                    </div>
                  </div>
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-display mb-2 text-xl font-bold text-white">
                      {col.title}
                    </h3>
                    <p className="font-body text-sm leading-relaxed text-white/40">
                      {col.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ DIVIDER ═══ */}
      <div className="hog-divider mx-auto max-w-4xl" />

      {/* ═══ WHY CHOOSE US — BENTO GRID ═══ */}
      <section className="relative py-24 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <ScrollReveal>
            <div className="mb-14 text-center">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#F0C048]/12 bg-[#F0C048]/[0.04] px-4 py-1.5">
                <Award size={13} className="text-[#F0C048]" />
                <span className="font-body text-[11px] font-bold tracking-[0.15em] text-[#F0C048] uppercase">
                  Why Choose Us
                </span>
              </div>
              <h2 className="font-display mb-4 text-3xl font-bold text-white md:text-5xl">
                The{" "}
                <span className="hog-shimmer">House</span> Advantage
              </h2>
            </div>
          </ScrollReveal>

          <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-2 lg:grid-cols-3">
            {whyUs.map((item, i) => (
              <ScrollReveal key={i} delay={i * 80} variant="scale">
                <div className="hog-why-card rounded-2xl border border-[#F0C048]/[0.05] bg-[#110E04]/80 p-6">
                  <div className="hog-why-icon mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-[#F0C048]/10 bg-[#F0C048]/[0.04] transition-all duration-300">
                    <item.icon size={22} className="text-[#F0C048]" />
                  </div>
                  <h3 className="font-display mb-2 text-lg font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="font-body text-sm leading-relaxed text-white/38">
                    {item.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ DIVIDER ═══ */}
      <div className="hog-divider mx-auto max-w-4xl" />

      {/* ═══ HOW IT WORKS ═══ */}
      <section className="relative py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <ScrollReveal>
            <div className="mb-14 text-center">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#F0C048]/12 bg-[#F0C048]/[0.04] px-4 py-1.5">
                <Flame size={13} className="text-[#F0C048]" />
                <span className="font-body text-[11px] font-bold tracking-[0.15em] text-[#F0C048] uppercase">
                  How It Works
                </span>
              </div>
              <h2 className="font-display mb-4 text-3xl font-bold text-white md:text-5xl">
                Your Path to{" "}
                <span className="hog-shimmer">European Style</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="mx-auto max-w-3xl space-y-4">
            {steps.map((step, i) => (
              <ScrollReveal key={i} delay={i * 120} variant="fadeLeft">
                <div className="hog-step group flex items-start gap-6 rounded-2xl border border-[#F0C048]/[0.05] bg-[#110E04]/60 px-6 py-6 md:px-8">
                  <div className="flex flex-col items-center">
                    <span className="hog-step-num font-display text-4xl font-bold text-white/8 transition-all duration-300 md:text-5xl">
                      {step.num}
                    </span>
                  </div>
                  <div className="flex-1 pt-1">
                    <div className="mb-1 flex items-center gap-3">
                      <step.icon
                        size={18}
                        className="text-[#F0C048]/55 transition-colors group-hover:text-[#F0C048]"
                      />
                      <h3 className="font-display text-lg font-bold text-white">
                        {step.title}
                      </h3>
                    </div>
                    <p className="font-body text-sm leading-relaxed text-white/38">
                      {step.desc}
                    </p>
                    <div className="hog-step-line mt-3 h-px w-10 bg-[#F0C048]/15 transition-all duration-500" />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ GALLERY SHOWCASE ═══ */}
      <section className="relative py-24 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <ScrollReveal>
            <div className="mb-14 text-center">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#F0C048]/12 bg-[#F0C048]/[0.04] px-4 py-1.5">
                <Eye size={13} className="text-[#F0C048]" />
                <span className="font-body text-[11px] font-bold tracking-[0.15em] text-[#F0C048] uppercase">
                  Gallery
                </span>
              </div>
              <h2 className="font-display mb-4 text-3xl font-bold text-white md:text-5xl">
                Style{" "}
                <span className="hog-shimmer">Showcase</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
            {[
              { src: "/house-of-garments/hog-2.jpg",  alt: "Premium Collection",    span: "md:col-span-2 md:row-span-2" },
              { src: "/house-of-garments/hog-7.jpg",  alt: "European Imports",      span: "" },
              { src: "/house-of-garments/hog-8.jpg",  alt: "Latest Arrivals",       span: "" },
              { src: "/house-of-garments/hog-9.jpg",  alt: "Fashion Accessories",   span: "" },
              { src: "/house-of-garments/hog-10.jpg", alt: "Bundle Deals",          span: "" },
            ].map((img, i) => (
              <ScrollReveal key={i} delay={i * 100} variant="scale">
                <div
                  className={`hog-gallery-item group relative overflow-hidden rounded-xl ${img.span}`}
                  style={{ minHeight: img.span ? "400px" : "200px" }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C0800]/80 via-transparent to-transparent" />
                  <div className="hog-gallery-overlay absolute inset-0 flex items-end justify-start p-4 opacity-0 transition-opacity duration-300">
                    <span className="font-display text-sm font-semibold text-white">
                      {img.alt}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ DIVIDER ═══ */}
      <div className="hog-divider mx-auto max-w-4xl" />

      {/* ═══ TESTIMONIAL ═══ */}
      <section className="relative py-24 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <Quote
                size={40}
                className="mx-auto mb-6 text-[#F0C048]/20"
              />
              <blockquote className="font-display mb-6 text-2xl leading-relaxed font-medium text-white/75 italic md:text-3xl">
                &ldquo;I couldn&apos;t believe the quality for the price.
                Authentic European brands at a fraction of the cost — this
                place is a hidden gem for fashion lovers!&rdquo;
              </blockquote>
              <div className="flex items-center justify-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#F0C048]/25 to-[#D4A030]/15">
                  <Heart size={16} className="text-[#F0C048]" />
                </div>
                <div className="text-left">
                  <div className="font-body text-sm font-semibold text-white/65">
                    Satisfied Shopper
                  </div>
                  <div className="font-body text-xs text-white/30">
                    Repeat Customer, Cabuyao
                  </div>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-center gap-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star
                    key={s}
                    size={18}
                    className="fill-[#F0C048] text-[#F0C048]"
                  />
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ LOCATION ═══ */}
      <section className="relative py-24 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <ScrollReveal>
            <div className="overflow-hidden rounded-3xl border border-[#F0C048]/8 bg-[#110E04]">
              <div className="grid md:grid-cols-2">
                {/* Image side */}
                <div className="relative min-h-[280px] md:min-h-[380px]">
                  <Image
                    src="/house-of-garments/hog-4.jpg"
                    alt="House of Garments Store"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#110E04]/50 md:bg-gradient-to-r md:from-transparent md:to-[#110E04]" />
                </div>
                {/* Info side */}
                <div className="flex flex-col justify-center px-8 py-10 md:px-12">
                  <div className="mb-4 flex items-center gap-2">
                    <MapPin size={18} className="text-[#F0C048]" />
                    <span className="font-body text-xs font-bold tracking-wider text-[#F0C048] uppercase">
                      Visit Our Store
                    </span>
                  </div>
                  <h3 className="font-display mb-3 text-2xl font-bold text-white md:text-3xl">
                    The House of Garments PH
                  </h3>
                  <p className="font-body mb-4 text-sm leading-relaxed text-white/40">
                    Cabuyao, Laguna. Drop by our store for the full European
                    fashion experience — browse, try, and discover styles you
                    won&apos;t find anywhere else.
                  </p>
                  <div className="mb-6 space-y-2">
                    <div className="flex items-center gap-2 text-sm text-white/45">
                      <CheckCircle2
                        size={14}
                        className="text-[#F0C048]/55"
                      />
                      <span className="font-body">Walk-in retail shopping</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-white/45">
                      <CheckCircle2
                        size={14}
                        className="text-[#F0C048]/55"
                      />
                      <span className="font-body">Bundle deals available</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-white/45">
                      <CheckCircle2
                        size={14}
                        className="text-[#F0C048]/55"
                      />
                      <span className="font-body">New European arrivals weekly</span>
                    </div>
                  </div>
                  <a
                    href="https://www.facebook.com/houseofgarmentsph"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hog-btn font-body inline-flex w-fit cursor-pointer items-center gap-2 rounded-xl bg-[#F0C048] px-6 py-3 text-sm font-bold text-[#0C0800]"
                  >
                    <Facebook size={16} />
                    Message Us on Facebook
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ FINAL CTA ═══ */}
      <section className="relative overflow-hidden py-28 md:py-36">
        {/* BG */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage: "radial-gradient(circle at 1px 1px, #F0C048 1px, transparent 0)",
              backgroundSize: "32px 32px",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0C0800] via-[#0C0800]/95 to-[#0C0800]" />
        </div>

        {/* Gold orbs */}
        <div
          className="pointer-events-none absolute top-[18%] left-[12%] h-56 w-56 rounded-full bg-[#F0C048]/8"
          style={{
            animation: "hogOrb 15s ease-in-out infinite, hogGlow 8s ease-in-out infinite",
          }}
        />
        <div
          className="pointer-events-none absolute bottom-[18%] right-[8%] h-48 w-48 rounded-full bg-[#D4A030]/6"
          style={{
            animation: "hogOrb 17s ease-in-out infinite reverse, hogGlow 9s ease-in-out infinite 3s",
          }}
        />

        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <ScrollReveal variant="scale">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#F0C048]/18 bg-[#F0C048]/[0.05] px-5 py-2">
              <Gift size={14} className="text-[#F0C048]" />
              <span className="font-body text-xs font-bold tracking-[0.15em] text-[#F0C048] uppercase">
                Your Wardrobe Upgrade Awaits
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h2 className="font-display mb-6 text-4xl font-bold text-white md:text-6xl">
              Ready to Wear
              <br />
              <span className="hog-shimmer">European Fashion?</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="font-body mx-auto mb-10 max-w-xl text-lg text-white/40">
              Follow us on Facebook for new arrivals, flash sales, and
              exclusive deals. Authentic European garments at prices that
              make luxury accessible.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <a
              href="https://www.facebook.com/houseofgarmentsph"
              target="_blank"
              rel="noopener noreferrer"
              className="hog-btn hog-btn-pulse font-body inline-flex cursor-pointer items-center gap-3 rounded-2xl bg-[#F0C048] px-10 py-5 text-lg font-bold text-[#0C0800] shadow-lg shadow-[#F0C048]/12"
            >
              <Facebook size={22} />
              Follow Us on Facebook
            </a>
            <div className="font-body mt-5 text-xs text-white/25">
              Shop, inquire, and stay updated on our latest European arrivals
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer className="border-t border-[#F0C048]/[0.05] bg-[#0C0800] py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-5 px-6 md:flex-row md:justify-between md:px-12">
          <div className="flex items-center gap-3">
            <Image
              src="/logos/house-of-garments.jpg"
              alt="The House of Garments PH"
              width={32}
              height={32}
              className="rounded-lg ring-1 ring-[#F0C048]/12"
            />
            <span className="font-display text-sm font-semibold text-white/55">
              The House of Garments PH
            </span>
          </div>
          <p className="font-body text-center text-xs text-white/22 md:text-right">
            Cabuyao, Laguna
            <br />
            &copy; {new Date().getFullYear()} The House of Garments PH
            &middot; A Pring Group Company
          </p>
        </div>
      </footer>
    </main>
  );
}
