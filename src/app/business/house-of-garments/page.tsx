import { Metadata } from "next";
import Link from "next/link";
import Image from "@/components/Img";
import ScrollReveal from "@/components/ScrollReveal";
import CountUp from "@/components/CountUp";
import BusinessNavArrows from "@/components/BusinessNavArrows";
import BusinessPopup from "@/components/BusinessPopup";
import HouseOfGarmentsShowcase from "@/components/HouseOfGarmentsShowcase";
import HouseOfGarmentsCarryCards from "@/components/HouseOfGarmentsCarryCards";
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
  Package,
  Globe,
  ChevronRight,
  Gem,
  Tag,
  Truck,
  BadgeCheck,
  Layers,
  Quote,
  Flame,
  TrendingUp,
  Eye,
  Gift,
  CheckCircle2,
  Award,
  UtensilsCrossed,
  CookingPot,
  Boxes,
  Banknote,
  MessageCircle,
  Phone,
  Tv2,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "The House of Garments PH — Quality Kitchenware & Household Finds | Cabuyao",
  description:
    "Premium cookware, plates, bowls, and household essentials at affordable prices. Live selling on Facebook. The House of Garments PH, Cabuyao, Laguna.",
};

export default function HouseOfGarmentsPage() {
  const collections = [
    {
      title: "SMEG Red Casserole",
      subtitle: "Statement cookware piece presented in a premium showroom display.",
      src: "/house-of-garments/carry-smeg-red.jpg",
      badge: "SHOWROOM PICK",
    },
    {
      title: "SMEG Cream Kitchen Set",
      subtitle: "A coordinated cream collection for polished modern kitchen setups.",
      src: "/house-of-garments/carry-smeg-cream.jpg",
      badge: "KITCHEN SET",
    },
    {
      title: "Grey Cookware Bundle",
      subtitle: "Minimal cookware collection with matching lids and wood-accent handles.",
      src: "/house-of-garments/carry-grey-cookware.jpg",
      badge: "COOKWARE",
    },
    {
      title: "Window Curtain Set",
      subtitle: "Textured curtain stock for home refreshes, decor bundles, and resale.",
      src: "/house-of-garments/carry-curtains.jpg",
      badge: "HOME DECOR",
    },
    {
      title: "Cookware Warehouse Mix",
      subtitle: "Assorted pans, kettles, and casseroles ready for live selling and bulk buyers.",
      src: "/house-of-garments/carry-cookware-haul.jpg",
      badge: "WAREHOUSE STOCK",
    },
    {
      title: "Orange Cookware Display",
      subtitle: "Bright display-ready pot and pan sets for standout countertop presentation.",
      src: "/house-of-garments/carry-orange-cookware.jpg",
      badge: "DISPLAY SET",
    },
  ];

  const showcaseImages = [
    {
      src: "/house-of-garments/hog-10.jpg",
      title: "Ceramic Pot Set",
      subtitle: "Featured cookware piece for premium kitchen setups.",
    },
    {
      src: "/house-of-garments/hog-11.jpg",
      title: "Classic Kettle",
      subtitle: "Clean countertop piece for modern and minimalist kitchens.",
    },
    {
      src: "/house-of-garments/hog-8.jpg",
      title: "Tuscan Water Pitcher Set",
      subtitle: "7-piece glass pitcher bundle with matching drinkware.",
    },
    {
      src: "/house-of-garments/hog-6.jpg",
      title: "Silicone Utensil Set",
      subtitle: "6-piece cooking set with mixed essential tools.",
    },
    {
      src: "/house-of-garments/hog-7.jpg",
      title: "Silicone Ladle Set",
      subtitle: "4-piece pink utensil set for serving and everyday prep.",
    },
    {
      src: "/house-of-garments/hog-3.jpg",
      title: "Gold Spoon Set",
      subtitle: "Warm-toned 6-piece spoon set for table service.",
    },
    {
      src: "/house-of-garments/hog-2.jpg",
      title: "Gold Knife Set",
      subtitle: "Matching 6-piece knife set with polished finish.",
    },
    {
      src: "/house-of-garments/hog-1.jpg",
      title: "Gold Teaspoon Set",
      subtitle: "Compact 6-piece teaspoon set for coffee and dessert use.",
    },
  ];

  const whyUs = [
    {
      icon: Globe,
      title: "Quality Imports",
      desc: "Directly sourced premium cookware and household items — genuine quality at prices you won't find in department stores.",
    },
    {
      icon: Tag,
      title: "Affordable Prices",
      desc: "No middleman markup. We bring quality household essentials straight to you at Philippine-friendly prices.",
    },
    {
      icon: Layers,
      title: "Retail & Bundle",
      desc: "Buy a single piece or grab bundles for your home or reselling — flexible options for every buyer.",
    },
    {
      icon: BadgeCheck,
      title: "Quality Guaranteed",
      desc: "Every item is hand-picked and inspected. We stand behind the quality and durability of our products.",
    },
    {
      icon: TrendingUp,
      title: "Fresh Stock",
      desc: "Constantly refreshed inventory with new arrivals. Tune in to our morning live sales for the latest finds.",
    },
    {
      icon: Truck,
      title: "Multiple Delivery",
      desc: "Ship via Shopee Checkout (J&T / SPX), Lalamove, TokTok, or Bus Shipping — we'll get it to you.",
    },
  ];

  const steps = [
    {
      num: "01",
      title: "Watch Our Live Selling",
      desc: "Tune in to our Morning Live on Facebook — we showcase items one by one at Retail and Bundle prices. Follow our page to get notified.",
      icon: Tv2,
    },
    {
      num: "02",
      title: "Comment MINE + Item Code",
      desc: "See something you love? Comment \"MINE\" followed by the item code to claim it. First valid comment wins the item.",
      icon: MessageCircle,
    },
    {
      num: "03",
      title: "Provide Your Details",
      desc: "New miners must send: Full Name, Complete Address, and Contact Number. We'll confirm your order via Facebook Messenger.",
      icon: Users,
    },
    {
      num: "04",
      title: "Pay & We Ship",
      desc: "Settle via GCash or BDO — no COD. Choose your delivery: Shopee Checkout (J&T/SPX), Lalamove, TokTok, or Bus Shipping.",
      icon: Banknote,
    },
  ];

  const stats = [
    { value: 500, suffix: "+", label: "Quality Items", icon: CookingPot },
    { value: 4, suffix: "", label: "Product Categories", icon: ShoppingBag },
    { value: 100, suffix: "%", label: "Quality Guaranteed", icon: BadgeCheck },
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
        body: "Browse quality cookware and household products sourced directly without middleman markup.",
        bodyColor: "rgba(245,235,212,0.48)",
        primaryCTA: "View Product Categories",
        primaryHref: "#products",
        ctaBg: "#F0C048",
        ctaColor: "#1A0C04",
        secondaryCTA: "Follow Live Selling",
        secondaryHref: "#how-to-order",
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

.hog-live-badge {
  animation: hogPulse 2s ease-in-out infinite;
}

@media (prefers-reduced-motion: reduce) {
  .hog-hero-stagger > * { opacity: 1; animation: none; }
  .hog-shimmer { animation: none; }
  .hog-btn-pulse { animation: none; }
  .hog-card { animation: none; }
  .hog-live-badge { animation: none; }
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

      {/* ═══ HERO ═══ */}
      <section className="relative min-h-screen overflow-hidden pt-16">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/house-of-garments/hog-10.jpg"
            alt="House of Garments Kitchen Collection"
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

        {/* Wave accent */}
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
              <Flame size={13} className="text-[#F0C048]" />
              <span className="font-body text-[11px] font-bold tracking-[0.15em] text-[#F0C048] uppercase">
                Quality Finds, Everyday Prices
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display mb-5 text-5xl leading-[1.08] font-bold tracking-tight text-white md:text-7xl">
              Premium
              <br />
              <span className="hog-shimmer">Kitchen &amp;</span>
              <br />
              Home Finds{" "}
              <span className="italic text-[#F0C048]">for Less</span>
            </h1>

            {/* Subheadline */}
            <p className="font-body mb-8 max-w-lg text-lg leading-relaxed text-white/50">
              Cookware, plates, bowls, and household essentials — quality
              imports at prices you won&apos;t believe. Retail and bundle
              options via live selling on Facebook.
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
                Watch Live Selling
              </a>
              <a
                href="#products"
                className="hog-btn font-body inline-flex cursor-pointer items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-6 py-3.5 text-base font-medium text-white/65 backdrop-blur-sm"
              >
                View Products
                <ChevronRight size={16} />
              </a>
            </div>

            {/* Trust markers */}
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2">
                <CookingPot size={14} className="text-[#F0C048]/60" />
                <span className="font-body text-xs text-white/40">
                  Cookware &amp; Tableware
                </span>
              </div>
              <div className="flex items-center gap-2">
                <BadgeCheck size={14} className="text-[#F0C048]/60" />
                <span className="font-body text-xs text-white/40">
                  Quality Guaranteed
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Tag size={14} className="text-[#F0C048]/60" />
                <span className="font-body text-xs text-white/40">
                  Retail &amp; Bundle
                </span>
              </div>
            </div>
          </div>

          {/* Right: Floating Logo */}
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
              {/* Kitchen icon decoration */}
              <div
                className="absolute -top-5 -left-5 flex h-12 w-12 items-center justify-center rounded-xl border border-[#F0C048]/15 bg-[#0C0800]/80 backdrop-blur-sm"
                style={{ animation: "hogTagSwing 4s ease-in-out infinite" }}
              >
                <CookingPot size={18} className="text-[#F0C048]" />
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

      {/* ═══ LIVE SELLING BANNER ═══ */}
      <section className="relative overflow-hidden py-14 md:py-16">
        <div className="absolute inset-0 bg-gradient-to-br from-[#F0C048]/[0.04] via-transparent to-[#D4A030]/[0.02]" />
        <div className="mx-auto max-w-5xl px-6 md:px-12">
          <ScrollReveal>
            <div className="rounded-3xl border border-[#F0C048]/15 bg-[#110E04] px-8 py-10 md:px-14">
              <div className="flex flex-col gap-8 md:flex-row md:items-center md:gap-12">
                {/* Left */}
                <div className="flex-1">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="hog-live-badge inline-flex items-center gap-1.5 rounded-full bg-red-600/90 px-3 py-1 text-[11px] font-bold tracking-wider text-white uppercase">
                      <span className="h-1.5 w-1.5 rounded-full bg-white" />
                      Live Selling
                    </span>
                    <span className="font-body text-xs text-white/35">Morning Live on Facebook</span>
                  </div>
                  <h2 className="font-display mb-3 text-2xl font-bold text-white md:text-3xl">
                    How to Claim During{" "}
                    <span className="hog-shimmer">Live Selling</span>
                  </h2>
                  <p className="font-body mb-0 text-sm leading-relaxed text-white/40">
                    Comment <span className="font-bold text-[#F0C048]">MINE + ITEM CODE</span> to claim your item during live. First valid comment wins. No joy miners — strict policy enforced.
                  </p>
                </div>
                {/* Right: rules */}
                <div className="space-y-3 md:min-w-[260px]">
                  {[
                    "Comment MINE + Item Code to claim",
                    "New miners: send Full Name, Address & Contact No.",
                    "Payment via GCash or BDO only (No COD)",
                    "Ships via Shopee, Lalamove, TokTok, or Bus",
                  ].map((rule, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 size={15} className="mt-0.5 flex-shrink-0 text-[#F0C048]/70" />
                      <span className="font-body text-sm text-white/50">{rule}</span>
                    </div>
                  ))}
                  <div className="pt-2">
                    <a
                      href="https://www.facebook.com/houseofgarmentsph"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hog-btn font-body inline-flex cursor-pointer items-center gap-2 rounded-xl bg-[#F0C048] px-5 py-2.5 text-sm font-bold text-[#0C0800]"
                    >
                      <Facebook size={15} />
                      Join Live Selling
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ PRODUCTS ═══ */}
      <section id="products" className="relative py-24 md:py-32">
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
                  Our Products
                </span>
              </div>
              <h2 className="font-display mb-4 text-3xl font-bold text-white md:text-5xl">
                What We{" "}
                <span className="hog-shimmer">Carry</span>
              </h2>
              <p className="font-body mx-auto max-w-2xl text-base text-white/35">
                From everyday cookware to elegant tableware — quality
                household essentials for every home and budget.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={120} variant="fadeUp">
            <HouseOfGarmentsCarryCards items={collections} />
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ DIVIDER ═══ */}
      <div className="hog-divider mx-auto max-w-4xl" />

      {/* ═══ WHY CHOOSE US ═══ */}
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

      {/* ═══ HOW TO ORDER ═══ */}
      <section id="how-to-order" className="relative py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <ScrollReveal>
            <div className="mb-14 text-center">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#F0C048]/12 bg-[#F0C048]/[0.04] px-4 py-1.5">
                <Flame size={13} className="text-[#F0C048]" />
                <span className="font-body text-[11px] font-bold tracking-[0.15em] text-[#F0C048] uppercase">
                  How to Order
                </span>
              </div>
              <h2 className="font-display mb-4 text-3xl font-bold text-white md:text-5xl">
                Claim Your{" "}
                <span className="hog-shimmer">Finds</span>
              </h2>
              <p className="font-body mx-auto max-w-xl text-base text-white/35">
                Our live selling format is simple — watch, claim, and we ship right to your door.
              </p>
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

          {/* Payment & Delivery Info */}
          <ScrollReveal delay={200}>
            <div className="mx-auto mt-10 max-w-3xl grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-[#F0C048]/[0.08] bg-[#110E04]/80 p-6">
                <div className="mb-3 flex items-center gap-2">
                  <Banknote size={18} className="text-[#F0C048]" />
                  <h4 className="font-display text-base font-bold text-white">Payment Methods</h4>
                </div>
                <div className="space-y-1.5">
                  {["GCash", "BDO Bank Transfer"].map((method) => (
                    <div key={method} className="flex items-center gap-2">
                      <CheckCircle2 size={13} className="text-[#F0C048]/60" />
                      <span className="font-body text-sm text-white/50">{method}</span>
                    </div>
                  ))}
                  <div className="flex items-center gap-2 mt-1">
                    <span className="font-body text-xs text-red-400/70 italic">✕ No COD accepted</span>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border border-[#F0C048]/[0.08] bg-[#110E04]/80 p-6">
                <div className="mb-3 flex items-center gap-2">
                  <Truck size={18} className="text-[#F0C048]" />
                  <h4 className="font-display text-base font-bold text-white">Delivery Options</h4>
                </div>
                <div className="space-y-1.5">
                  {["Shopee Checkout (J&T / SPX)", "Lalamove", "TokTok", "Bus Shipping"].map((option) => (
                    <div key={option} className="flex items-center gap-2">
                      <CheckCircle2 size={13} className="text-[#F0C048]/60" />
                      <span className="font-body text-sm text-white/50">{option}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
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
                Product{" "}
                <span className="hog-shimmer">Showcase</span>
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={80}>
            <HouseOfGarmentsShowcase images={showcaseImages} />
          </ScrollReveal>
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
                &ldquo;The cookware sets are amazing quality for the price! I
                got a full bundle during their morning live and it arrived
                super fast. Will definitely be a regular!&rdquo;
              </blockquote>
              <div className="flex items-center justify-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#F0C048]/25 to-[#D4A030]/15">
                  <Heart size={16} className="text-[#F0C048]" />
                </div>
                <div className="text-left">
                  <div className="font-body text-sm font-semibold text-white/65">
                    Happy Customer
                  </div>
                  <div className="font-body text-xs text-white/30">
                    Regular Buyer, Laguna
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

      {/* ═══ LOCATION & CONTACT ═══ */}
      <section className="relative py-24 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <ScrollReveal>
            <div className="overflow-hidden rounded-3xl border border-[#F0C048]/8 bg-[#110E04]">
              <div className="grid md:grid-cols-2">
                {/* Image side */}
                <div className="relative min-h-[280px] md:min-h-[380px]">
                  <Image
                    src="/house-of-garments/hog-11.jpg"
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
                      Find Us
                    </span>
                  </div>
                  <h3 className="font-display mb-3 text-2xl font-bold text-white md:text-3xl">
                    The House of Garments PH
                  </h3>
                  <p className="font-body mb-4 text-sm leading-relaxed text-white/40">
                    Gatchalian Subdivision, Brgy Banay-Banay,
                    Cabuyao, Laguna. Follow us on Facebook for
                    morning live selling schedules and new arrivals.
                  </p>
                  <div className="mb-6 space-y-2">
                    <div className="flex items-center gap-2 text-sm text-white/45">
                      <Phone size={14} className="text-[#F0C048]/55 flex-shrink-0" />
                      <span className="font-body">0967 445 4591</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-white/45">
                      <Tv2 size={14} className="text-[#F0C048]/55 flex-shrink-0" />
                      <span className="font-body">TikTok: @thehouseofgarments_ph</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-white/45">
                      <CheckCircle2 size={14} className="text-[#F0C048]/55 flex-shrink-0" />
                      <span className="font-body">Morning Live Selling on Facebook</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-white/45">
                      <CheckCircle2 size={14} className="text-[#F0C048]/55 flex-shrink-0" />
                      <span className="font-body">Retail &amp; Bundle options</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-white/45">
                      <CheckCircle2 size={14} className="text-[#F0C048]/55 flex-shrink-0" />
                      <span className="font-body">New stock regularly</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="https://www.facebook.com/houseofgarmentsph"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hog-btn font-body inline-flex cursor-pointer items-center gap-2 rounded-xl bg-[#F0C048] px-6 py-3 text-sm font-bold text-[#0C0800]"
                    >
                      <Facebook size={16} />
                      Message on Facebook
                    </a>
                    <a
                      href="tel:09674454591"
                      className="hog-btn font-body inline-flex cursor-pointer items-center gap-2 rounded-xl border border-[#F0C048]/20 bg-[#F0C048]/[0.05] px-6 py-3 text-sm font-medium text-[#F0C048]"
                    >
                      <Phone size={16} />
                      Call Us
                    </a>
                  </div>
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
                Your Home Upgrade Awaits
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h2 className="font-display mb-6 text-4xl font-bold text-white md:text-6xl">
              Ready to Find Your
              <br />
              <span className="hog-shimmer">Kitchen Essentials?</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="font-body mx-auto mb-10 max-w-xl text-lg text-white/40">
              Follow us on Facebook and join our morning live selling for the
              best deals on cookware, tableware, and household essentials.
              Quality finds at prices that make sense.
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
              Morning live selling &middot; Retail &amp; Bundle &middot; Ships nationwide
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
            Gatchalian Subdivision, Brgy Banay-Banay, Cabuyao, Laguna
            <br />
            &copy; {new Date().getFullYear()} The House of Garments PH
            &middot; A Pring Group Company
          </p>
        </div>
      </footer>
    </main>
  );
}
