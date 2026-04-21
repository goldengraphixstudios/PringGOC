import Image from "@/components/Img";
import Link from "next/link";
import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import CountUp from "@/components/CountUp";
import { bp } from "@/lib/basePath";
import BusinessNavArrows from "@/components/BusinessNavArrows";
import BusinessPopup from "@/components/BusinessPopup";
import {
  ArrowLeft,
  Facebook,
  Star,
  ChefHat,
  UtensilsCrossed,
  Sparkles,
  ShieldCheck,
  Truck,
  Heart,
  ThumbsUp,
  Eye,
  MessageCircle,
  ArrowRight,
  ExternalLink,
  ChevronRight,
  Gift,
  Tag,
  Package,
  Clock,
  Award,
  Flame,
  CookingPot,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Lucky Finds | Quality Kitchenware You Can Trust",
  description:
    "Brand-new kitchenwares with quality you can trust. Stylish and practical essentials for every home at affordable prices. Shop via Facebook!",
};

const stats = [
  { value: 5000, suffix: "+", label: "Products Sold", icon: Package },
  { value: 4.9, suffix: "★", label: "Average Rating", icon: Star },
  { value: 100, suffix: "%", label: "Brand New", icon: ShieldCheck },
  { value: 24, suffix: "hr", label: "Fast Processing", icon: Clock },
];

const categories = [
  {
    name: "Cookware",
    desc: "Premium pots, pans, and cooking essentials",
    icon: CookingPot,
  },
  {
    name: "Utensils",
    desc: "Spatulas, ladles, and everyday tools",
    icon: UtensilsCrossed,
  },
  {
    name: "Appliances",
    desc: "Blenders, mixers, and handy gadgets",
    icon: Flame,
  },
  {
    name: "Tableware",
    desc: "Plates, bowls, and dining sets",
    icon: ChefHat,
  },
  {
    name: "Storage",
    desc: "Containers, organizers, and racks",
    icon: Package,
  },
  {
    name: "Kitchen Gadgets",
    desc: "Clever tools that make cooking easier",
    icon: Sparkles,
  },
];

const steps = [
  {
    num: "01",
    title: "Browse Our Collection",
    desc: "Explore our daily Facebook posts for the latest kitchenware arrivals and best deals.",
    icon: Eye,
  },
  {
    num: "02",
    title: "Message to Order",
    desc: "Found something you love? Send us a message on Facebook to place your order.",
    icon: MessageCircle,
  },
  {
    num: "03",
    title: "Receive & Enjoy",
    desc: "We ship fast! Unbox your brand new kitchenware and start cooking in style.",
    icon: Gift,
  },
];

const reasons = [
  {
    icon: ShieldCheck,
    title: "100% Brand New",
    desc: "Every item is brand new and quality-checked before shipping. No seconds, no refurbs.",
  },
  {
    icon: Tag,
    title: "Affordable for All",
    desc: "Premium kitchenware doesn't have to break the bank. Lucky prices, every day.",
  },
  {
    icon: Award,
    title: "Stylish Designs",
    desc: "Modern, beautiful kitchenware that looks great on your counter and performs even better.",
  },
  {
    icon: ThumbsUp,
    title: "Trusted Service",
    desc: "Repeat customers and reliable service keep our Lucky family growing.",
  },
  {
    icon: Truck,
    title: "Nationwide Delivery",
    desc: "We ship across the Philippines. Fast processing, reliable couriers, safe packaging.",
  },
  {
    icon: Heart,
    title: "Made with Love",
    desc: "We handpick every product to make sure it brings joy and value to your kitchen.",
  },
];

const gallery = [
  { src: "/lucky-finds/unic-1.jpg",  alt: "Kitchen Collection",   span: true },
  { src: "/lucky-finds/unic-3.jpg",  alt: "Cookware Sets" },
  { src: "/lucky-finds/unic-4.jpg",  alt: "Kitchen Essentials" },
  { src: "/lucky-finds/unic-5.jpg",  alt: "Home Products" },
  { src: "/lucky-finds/unic-6.jpg",  alt: "Quality Finds" },
  { src: "/lucky-finds/unic-2.jpg",  alt: "Premium Items",        span: true },
];

export default function LuckyFindsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#FFFAFA] text-[#1C1917]">
      <BusinessNavArrows currentSlug="lucky-finds" theme="dark" />
      <BusinessPopup config={{
        storageKey: "popup-lucky-finds",
        delay: 2000,
        headerBg: "linear-gradient(135deg, #7C0000 0%, #C00000 50%, #F01818 100%)",
        headerIcon: "⚡",
        modalBg: "#FFFFFF",
        eyebrow: "HOME DEAL ALERT",
        eyebrowColor: "#C00000",
        title: "Fresh home finds are waiting.",
        titleColor: "#1A0000",
        body: "Shop cookware, curtains, and home essentials direct from the supplier through live selling or warehouse visit.",
        bodyColor: "#666666",
        primaryCTA: "See Live Schedule",
        primaryHref: "#schedule",
        ctaBg: "#D83030",
        ctaColor: "#FFFFFF",
        secondaryCTA: "Browse Product Categories",
        secondaryHref: "#products",
        secondaryColor: "#999999",
        badge: "Mon · Wed · Fri",
        badgeBg: "rgba(192,0,0,0.1)",
        badgeColor: "#C00000",
        logoSrc: "/logos/lucky-finds.jpg",
      }} />
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes fadeInUpLucky {
            from { opacity: 0; transform: translateY(28px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes slideInRight {
            from { opacity: 0; transform: translateX(40px); }
            to { opacity: 1; transform: translateX(0); }
          }
          @keyframes floatSoft {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          @keyframes floatReverse {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(10px); }
          }
          @keyframes sparkle {
            0%, 100% { opacity: 0; transform: scale(0) rotate(0deg); }
            50% { opacity: 1; transform: scale(1) rotate(180deg); }
          }
          @keyframes pulseRed {
            0%, 100% { box-shadow: 0 0 0 0 rgba(220,38,38,0.3); }
            50% { box-shadow: 0 0 0 12px rgba(220,38,38,0); }
          }
          @keyframes cloverSpin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .float-soft { animation: floatSoft 6s ease-in-out infinite; }
          .float-reverse { animation: floatReverse 7s ease-in-out infinite; }
          .pulse-red { animation: pulseRed 2s ease-in-out infinite; }
          .card-lift { transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); }
          .card-lift:hover { transform: translateY(-6px); box-shadow: 0 20px 40px rgba(28,25,23,0.06); }
          .red-gradient {
            background: linear-gradient(135deg, #DC2626, #EF4444);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .dark-red-gradient {
            background: linear-gradient(135deg, #991B1B, #DC2626);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
          }
        `,
        }}
      />

      {/* ===== BACKGROUND ===== */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#FFFAFA] via-[#FFF5F5] to-[#FFFAFA]" />
        <div className="absolute top-[-8%] right-[-5%] h-[500px] w-[500px] rounded-full bg-[#DC2626]/[0.02] blur-[120px]" />
        <div className="absolute bottom-[-8%] left-[-5%] h-[400px] w-[400px] rounded-full bg-[#FCA5A5]/[0.03] blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.012]"
          style={{
            backgroundImage: "radial-gradient(circle, #DC2626 0.5px, transparent 0.5px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      {/* ===== NAVIGATION ===== */}
      <nav className="fixed top-0 right-0 left-0 z-50 border-b border-[#DC2626]/[0.06] bg-white/85 backdrop-blur-2xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Link
            href="/"
            className="flex items-center gap-3 text-[#78716C] transition-colors duration-300 hover:text-[#1C1917]"
          >
            <ArrowLeft className="h-4 w-4" />
            <Image
              src="/logos/pring-group.png"
              alt="Pring Group"
              width={28}
              height={28}
              className="rounded"
            />
            <span className="hidden text-sm sm:inline">Pring Group</span>
          </Link>
          <div className="flex items-center gap-4">
            <span className="hidden font-[family-name:var(--font-heading)] text-sm font-bold tracking-wide text-[#991B1B] sm:inline">
              Lucky Finds
            </span>
            <a
              href="https://www.facebook.com/Luckyyfinds"
              target="_blank"
              rel="noopener noreferrer"
              className="flex cursor-pointer items-center gap-2 rounded-full bg-[#DC2626] px-4 py-2 text-xs font-bold tracking-wide text-white uppercase transition-all duration-300 hover:bg-[#B91C1C] hover:shadow-lg hover:shadow-[#DC2626]/20"
            >
              <Facebook className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Shop Now</span>
            </a>
          </div>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <section className="relative z-10 flex min-h-[100dvh] items-start overflow-hidden px-6 pt-28 pb-20 lg:pt-32">
        {/* Decorative sparkles */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute text-[#DC2626]/20"
              style={{
                top: `${15 + Math.random() * 60}%`,
                left: `${10 + Math.random() * 80}%`,
                animation: `sparkle ${3 + i * 0.5}s ease-in-out infinite`,
                animationDelay: `${i * 0.8}s`,
              }}
            >
              <Sparkles className="h-4 w-4" />
            </div>
          ))}
        </div>

        {/* Decorative four-leaf clover watermark */}
        <div className="pointer-events-none absolute top-[20%] right-[5%] opacity-[0.03]">
          <svg width="300" height="300" viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="35" r="15" fill="#DC2626" />
            <circle cx="50" cy="65" r="15" fill="#DC2626" />
            <circle cx="35" cy="50" r="15" fill="#DC2626" />
            <circle cx="65" cy="50" r="15" fill="#DC2626" />
            <rect x="48" y="60" width="4" height="25" rx="2" fill="#DC2626" />
          </svg>
        </div>

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-2">
          {/* Left — Text */}
          <div>
            <div
              style={{
                opacity: 0,
                animationName: "fadeInUpLucky",
                animationDuration: "0.7s",
                animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                animationDelay: "0.2s",
                animationFillMode: "forwards",
              }}
            >
              <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#DC2626]/10 bg-[#FEF2F2] px-4 py-1.5 text-[11px] font-bold tracking-[0.2em] text-[#DC2626] uppercase">
                <Sparkles className="h-3 w-3" />
                Home &amp; Kitchen
              </span>
            </div>

            <h1
              className="mt-6 mb-4 font-[family-name:var(--font-heading)] text-5xl leading-[1.05] font-bold tracking-tight sm:text-6xl lg:text-7xl"
              style={{
                opacity: 0,
                animationName: "fadeInUpLucky",
                animationDuration: "0.9s",
                animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                animationDelay: "0.4s",
                animationFillMode: "forwards",
              }}
            >
              Your{" "}
              <span className="red-gradient">Lucky</span>{" "}
              Kitchen Starts Here
            </h1>

            <p
              className="mb-8 max-w-lg text-lg leading-relaxed text-[#78716C]"
              style={{
                opacity: 0,
                animationName: "fadeInUpLucky",
                animationDuration: "0.7s",
                animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                animationDelay: "0.65s",
                animationFillMode: "forwards",
              }}
            >
              Discover brand-new, stylish kitchenware at prices that feel like
              pure luck. From cookware to gadgets — every find is a winner.
            </p>

            <div
              className="flex flex-wrap gap-4"
              style={{
                opacity: 0,
                animationName: "fadeInUpLucky",
                animationDuration: "0.7s",
                animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                animationDelay: "0.85s",
                animationFillMode: "forwards",
              }}
            >
              <a
                href="https://www.facebook.com/Luckyyfinds"
                target="_blank"
                rel="noopener noreferrer"
                className="pulse-red group inline-flex cursor-pointer items-center gap-2.5 rounded-full bg-[#DC2626] px-8 py-4 text-sm font-bold tracking-wide text-white uppercase transition-all duration-300 hover:bg-[#B91C1C] hover:shadow-xl hover:shadow-[#DC2626]/25"
              >
                <Facebook className="h-4 w-4" />
                Shop on Facebook
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#schedule"
                className="inline-flex cursor-pointer items-center gap-2 rounded-full border-2 border-[#DC2626]/15 px-7 py-4 text-sm font-semibold text-[#991B1B] transition-all duration-300 hover:border-[#DC2626]/30 hover:bg-[#FEF2F2]"
              >
                How to Order
                <ChevronRight className="h-4 w-4" />
              </a>
            </div>

            {/* Social proof */}
            <div
              className="mt-10 flex items-center gap-3"
              style={{
                opacity: 0,
                animationName: "fadeInUpLucky",
                animationDuration: "0.6s",
                animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                animationDelay: "1.1s",
                animationFillMode: "forwards",
              }}
            >
              <div className="flex -space-x-2">
                {[0, 1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white text-[10px] font-bold text-white"
                    style={{
                      background: `linear-gradient(135deg, ${
                        ["#DC2626", "#EF4444", "#B91C1C", "#F87171", "#991B1B"][i]
                      }, ${
                        ["#EF4444", "#F87171", "#DC2626", "#FCA5A5", "#DC2626"][i]
                      })`,
                    }}
                  >
                    {["A", "K", "S", "M", "J"][i]}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-[#FBBF24] text-[#FBBF24]" />
                  ))}
                </div>
                <p className="text-xs text-[#78716C]">
                  Loved by <span className="font-semibold text-[#1C1917]">5,000+</span> home cooks
                </p>
              </div>
            </div>
          </div>

          {/* Right — Hero Image */}
          <div
            className="relative hidden lg:block"
            style={{
              opacity: 0,
              animationName: "slideInRight",
              animationDuration: "1s",
              animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
              animationDelay: "0.6s",
              animationFillMode: "forwards",
            }}
          >
            <div className="float-soft relative overflow-hidden rounded-3xl shadow-2xl shadow-[#DC2626]/[0.08]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={bp("/lucky-finds/unic-7.jpg")}
                alt="Lucky Finds Kitchenware Collection"
                className="h-[480px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#991B1B]/15 to-transparent" />

              {/* Badge */}
              <div className="absolute right-4 bottom-4 rounded-2xl border border-white/20 bg-white/90 px-4 py-3 shadow-lg backdrop-blur-md">
                <p className="text-[10px] font-bold tracking-wider text-[#DC2626] uppercase">
                  New Arrivals
                </p>
                <p className="text-lg font-bold text-[#1C1917]">Fresh Daily</p>
              </div>
            </div>

            {/* Floating quality card */}
            <div className="float-reverse absolute -bottom-5 -left-6 rounded-2xl border border-[#DC2626]/10 bg-white p-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FEF2F2]">
                  <ShieldCheck className="h-5 w-5 text-[#DC2626]" />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#1C1917]">Brand New</p>
                  <p className="text-xs text-[#78716C]">Quality Guaranteed</p>
                </div>
              </div>
            </div>

            {/* Floating price card */}
            <div className="float-soft absolute -top-3 -right-3 rounded-2xl border border-[#DC2626]/10 bg-white p-3 shadow-xl">
              <p className="text-[10px] font-bold tracking-wider text-[#DC2626] uppercase">
                Best Prices
              </p>
              <p className="text-xl font-bold text-[#1C1917]">Sulit na Sulit!</p>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          style={{
            opacity: 0,
            animationName: "fadeInUpLucky",
            animationDuration: "0.5s",
            animationDelay: "1.5s",
            animationFillMode: "forwards",
          }}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] font-semibold tracking-[0.2em] text-[#A8A29E] uppercase">
              Discover more
            </span>
            <div className="h-8 w-5 rounded-full border-2 border-[#D6D3D1]">
              <div
                className="mx-auto mt-1 h-2 w-1 rounded-full bg-[#DC2626]"
                style={{ animation: "fadeInUpLucky 1.5s ease-in-out infinite" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS BAR ===== */}
      <section className="relative z-10 border-y border-[#DC2626]/[0.06] bg-white/70 py-10 backdrop-blur-sm">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 md:grid-cols-4">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} variant="fadeUp" delay={i * 100}>
              <div className="text-center">
                <stat.icon className="mx-auto mb-2 h-5 w-5 text-[#DC2626]" />
                <div className="font-[family-name:var(--font-display)] text-3xl font-bold text-[#1C1917] md:text-4xl">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </div>
                <p className="mt-1 text-sm font-medium text-[#78716C]">{stat.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ===== CATEGORIES ===== */}
      <section id="products" className="relative z-10 py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal variant="fadeUp">
            <div className="mb-16 text-center">
              <span className="mb-3 inline-block text-sm font-bold tracking-[0.2em] text-[#DC2626] uppercase">
                What We Offer
              </span>
              <h2 className="font-[family-name:var(--font-heading)] text-4xl font-bold text-[#1C1917] md:text-5xl">
                Kitchen Essentials,{" "}
                <span className="red-gradient">Lucky Prices</span>
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-[#78716C]">
                Everything you need to create your dream kitchen — all brand new,
                all affordable, all waiting for you.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat, i) => (
              <ScrollReveal key={cat.name} variant="fadeUp" delay={i * 80}>
                <div className="card-lift group rounded-2xl border border-[#FECACA]/40 bg-white p-7">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#FEF2F2] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#FEE2E2]">
                    <cat.icon className="h-6 w-6 text-[#DC2626]" />
                  </div>
                  <h3 className="mb-1.5 text-lg font-bold text-[#1C1917]">{cat.name}</h3>
                  <p className="text-sm leading-relaxed text-[#78716C]">{cat.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== GALLERY ===== */}
      <section className="relative z-10 bg-gradient-to-b from-[#FEF2F2] to-[#FFFAFA] py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal variant="fadeUp">
            <div className="mb-16 text-center">
              <span className="mb-3 inline-block text-sm font-bold tracking-[0.2em] text-[#991B1B] uppercase">
                See Our Collection
              </span>
              <h2 className="font-[family-name:var(--font-heading)] text-4xl font-bold text-[#1C1917] md:text-5xl">
                Every Find, a{" "}
                <span className="red-gradient">Lucky</span> One
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((img, i) => (
              <ScrollReveal
                key={img.alt}
                variant="scale"
                delay={i * 100}
                className={img.span ? "sm:col-span-2 lg:col-span-2" : ""}
              >
                <div
                  className={`group relative overflow-hidden rounded-2xl ${
                    img.span ? "h-[320px]" : "h-[260px]"
                  }`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={bp(img.src)}
                    alt={img.alt}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917]/50 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="absolute bottom-0 left-0 translate-y-4 p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-sm font-bold text-white">{img.alt}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW TO ORDER ===== */}
      <section id="schedule" className="relative z-10 py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal variant="fadeUp">
            <div className="mb-16 text-center">
              <span className="mb-3 inline-block text-sm font-bold tracking-[0.2em] text-[#DC2626] uppercase">
                Simple &amp; Easy
              </span>
              <h2 className="font-[family-name:var(--font-heading)] text-4xl font-bold text-[#1C1917] md:text-5xl">
                How to{" "}
                <span className="dark-red-gradient">Order</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step, i) => (
              <ScrollReveal key={step.num} variant="fadeUp" delay={i * 150}>
                <div className="card-lift relative rounded-2xl border border-[#FECACA]/40 bg-white p-8 text-center">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#DC2626] to-[#EF4444] px-4 py-1 text-xs font-bold tracking-wider text-white">
                    STEP {step.num}
                  </div>
                  <div className="mx-auto mb-5 mt-3 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#FEF2F2]">
                    <step.icon className="h-7 w-7 text-[#DC2626]" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-[#1C1917]">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-[#78716C]">{step.desc}</p>

                  {i < steps.length - 1 && (
                    <div className="absolute top-1/2 -right-5 hidden -translate-y-1/2 md:block">
                      <ArrowRight className="h-5 w-5 text-[#FECACA]" />
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal variant="fadeUp" delay={500}>
            <div className="mt-14 text-center">
              <a
                href="https://www.facebook.com/Luckyyfinds"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex cursor-pointer items-center gap-2.5 rounded-full bg-[#DC2626] px-8 py-4 text-sm font-bold tracking-wide text-white uppercase transition-all duration-300 hover:bg-[#B91C1C] hover:shadow-xl hover:shadow-[#DC2626]/20"
              >
                <Facebook className="h-4 w-4" />
                Start Shopping Now
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== WHY LUCKY FINDS ===== */}
      <section className="relative z-10 bg-gradient-to-b from-[#FEF2F2] to-[#FFFAFA] py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal variant="fadeUp">
            <div className="mb-16 text-center">
              <span className="mb-3 inline-block text-sm font-bold tracking-[0.2em] text-[#991B1B] uppercase">
                The Lucky Difference
              </span>
              <h2 className="font-[family-name:var(--font-heading)] text-4xl font-bold text-[#1C1917] md:text-5xl">
                Why Choose{" "}
                <span className="red-gradient">Lucky Finds</span>
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-[#78716C]">
                We&apos;re not just selling kitchenware — we&apos;re helping you
                build the kitchen you deserve.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((reason, i) => (
              <ScrollReveal key={reason.title} variant="fadeUp" delay={i * 80}>
                <div className="card-lift group flex items-start gap-4 rounded-2xl border border-[#FECACA]/40 bg-white p-6">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FEF2F2] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#FEE2E2]">
                    <reason.icon className="h-5 w-5 text-[#DC2626]" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-base font-bold text-[#1C1917]">{reason.title}</h3>
                    <p className="text-sm leading-relaxed text-[#78716C]">{reason.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="relative z-10 overflow-hidden py-24 px-6">
        <div className="relative mx-auto max-w-5xl">
          <ScrollReveal variant="scale">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#DC2626] via-[#B91C1C] to-[#991B1B] px-8 py-16 text-center md:px-16 md:py-20">
              {/* Background decoration */}
              <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute -top-20 -right-20 h-[300px] w-[300px] rounded-full bg-[#EF4444]/20 blur-[80px]" />
                <div className="absolute -bottom-20 -left-20 h-[250px] w-[250px] rounded-full bg-[#FCA5A5]/10 blur-[80px]" />
                {/* Clover watermark */}
                <svg
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.06]"
                  width="400"
                  height="400"
                  viewBox="0 0 100 100"
                  fill="none"
                >
                  <circle cx="50" cy="35" r="15" fill="white" />
                  <circle cx="50" cy="65" r="15" fill="white" />
                  <circle cx="35" cy="50" r="15" fill="white" />
                  <circle cx="65" cy="50" r="15" fill="white" />
                </svg>
              </div>

              <div className="relative">
                <Image
                  src="/logos/lucky-finds.jpg"
                  alt="Lucky Finds"
                  width={72}
                  height={72}
                  className="mx-auto mb-6 rounded-2xl shadow-2xl"
                />

                <h2 className="mb-4 font-[family-name:var(--font-heading)] text-3xl font-bold text-white md:text-5xl">
                  Ready to Get{" "}
                  <span className="text-[#FDE68A]">Lucky</span>?
                </h2>

                <p className="mx-auto mb-10 max-w-2xl text-lg text-white/60">
                  New kitchenware drops every day. Quality you can trust,
                  prices you&apos;ll love. Message us on Facebook to start
                  building your dream kitchen!
                </p>

                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <a
                    href="https://www.facebook.com/Luckyyfinds"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex cursor-pointer items-center gap-2.5 rounded-full bg-white px-8 py-4 text-sm font-bold tracking-wide text-[#DC2626] uppercase transition-all duration-300 hover:shadow-2xl hover:shadow-white/20"
                  >
                    <Facebook className="h-4 w-4" />
                    Shop on Facebook
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                  <a
                    href="https://www.facebook.com/Luckyyfinds"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex cursor-pointer items-center gap-2 rounded-full border-2 border-white/20 px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:border-white/40 hover:bg-white/[0.06]"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Message Us
                  </a>
                </div>

                <p className="mt-6 text-xs font-medium tracking-wide text-white/30">
                  New stocks daily — your lucky find is waiting!
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== PART OF PRING GROUP ===== */}
      <section className="relative z-10 border-t border-[#DC2626]/[0.06] py-16 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <ScrollReveal variant="scale">
            <Image
              src="/logos/pring-group.png"
              alt="Pring Group"
              width={56}
              height={56}
              className="mx-auto mb-5 rounded"
            />
            <p className="mb-2 text-xs font-semibold tracking-[0.2em] text-[#A8A29E] uppercase">
              Part of
            </p>
            <h2 className="mb-3 font-[family-name:var(--font-heading)] text-2xl font-bold text-[#1C1917] md:text-3xl">
              Pring Group of Companies
            </h2>
            <p className="mx-auto mb-6 max-w-xl text-base text-[#78716C]">
              Lucky Finds is one of 18+ businesses under the Pring Group — a
              family-owned conglomerate building a legacy across the Philippines.
            </p>
            <Link
              href="/"
              className="inline-flex cursor-pointer items-center gap-2 text-sm font-semibold text-[#DC2626] transition-all duration-300 hover:gap-3"
            >
              Explore All Businesses
              <ChevronRight className="h-4 w-4" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="relative z-10 border-t border-[#DC2626]/[0.06] bg-white/60 py-8 px-6 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 sm:flex-row">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logos/pring-group.png"
              alt="Pring Group"
              width={22}
              height={22}
              className="rounded"
            />
            <span className="text-xs text-[#A8A29E]">Pring Group of Companies</span>
          </Link>
          <p className="text-xs text-[#A8A29E]">
            &copy; {new Date().getFullYear()} Lucky Finds. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
