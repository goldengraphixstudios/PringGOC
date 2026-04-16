import Image from "@/components/Img";
import Link from "next/link";
import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import CountUp from "@/components/CountUp";
import { bp } from "@/lib/basePath";
import BusinessNavArrows from "@/components/BusinessNavArrows";
import {
  ArrowLeft,
  Facebook,
  MapPin,
  Package,
  ShieldCheck,
  Truck,
  Star,
  MessageCircle,
  Eye,
  Heart,
  Zap,
  ThumbsUp,
  Clock,
  BadgeCheck,
  ArrowRight,
  ExternalLink,
  ChevronRight,
  Sparkles,
  Gift,
  ShoppingBag,
  Users,
  Tag,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Infinity Auction House | Brand New Finds, Unbeatable Prices — Cabuyao, Laguna",
  description:
    "Online supplier and seller of brand new items. Quality products, best customer service, and the most affordable prices. Shop via Facebook!",
};

const stats = [
  { value: 1000, suffix: "+", label: "Items Sold", icon: Package },
  { value: 5, suffix: "★", label: "Customer Rating", icon: Star },
  { value: 10, suffix: "K+", label: "Happy Buyers", icon: Heart },
  { value: 24, suffix: "/7", label: "Online Support", icon: Clock },
];

const categories = [
  {
    name: "Electronics",
    desc: "Gadgets, speakers, accessories & more",
    icon: Zap,
    color: "#3B82F6",
  },
  {
    name: "Home & Living",
    desc: "Decor, organizers, and essentials",
    icon: Gift,
    color: "#DC2626",
  },
  {
    name: "Fashion",
    desc: "Bags, watches, accessories",
    icon: ShoppingBag,
    color: "#3B82F6",
  },
  {
    name: "Kitchen",
    desc: "Cookware, appliances, utensils",
    icon: Sparkles,
    color: "#DC2626",
  },
  {
    name: "Toys & Kids",
    desc: "Fun finds for all ages",
    icon: Heart,
    color: "#3B82F6",
  },
  {
    name: "General Goods",
    desc: "Everyday items at great prices",
    icon: Tag,
    color: "#DC2626",
  },
];

const steps = [
  {
    num: "01",
    title: "Browse Our Page",
    desc: "Check out our latest items on Facebook — new stocks drop regularly!",
    icon: Eye,
  },
  {
    num: "02",
    title: "Message Us",
    desc: "Send us a message to claim your item. Fast replies guaranteed!",
    icon: MessageCircle,
  },
  {
    num: "03",
    title: "Receive & Enjoy",
    desc: "Get your brand new items delivered. Satisfaction guaranteed!",
    icon: Truck,
  },
];

const reasons = [
  {
    icon: BadgeCheck,
    title: "100% Brand New",
    desc: "Every item we sell is brand new — never used, never refurbished.",
  },
  {
    icon: Tag,
    title: "Unbeatable Prices",
    desc: "We source directly so you get the best deals, always.",
  },
  {
    icon: ThumbsUp,
    title: "Top-Rated Service",
    desc: "Thousands of 5-star reviews. We treat every customer like family.",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    desc: "Quick processing and nationwide shipping to your doorstep.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Seller",
    desc: "Verified and trusted by thousands of Filipino online shoppers.",
  },
  {
    icon: Users,
    title: "Growing Community",
    desc: "Join 10,000+ happy buyers in our growing Facebook family.",
  },
];

const gallery = [
  { src: "/infinity-auction-house/hero.jpg", alt: "Product Collection", span: true },
  { src: "/infinity-auction-house/products.jpg", alt: "Brand New Products" },
  { src: "/infinity-auction-house/deals.jpg", alt: "Amazing Deals" },
  { src: "/infinity-auction-house/customer.jpg", alt: "Happy Customer" },
  { src: "/infinity-auction-house/store.jpg", alt: "Our Store" },
  { src: "/infinity-auction-house/unboxing.jpg", alt: "Unboxing Experience" },
];

export default function InfinityAuctionHousePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#FAFBFF] text-[#0F172A]">
      <BusinessNavArrows currentSlug="infinity-auction-house" />
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes infinityDraw {
            0% { stroke-dashoffset: 400; opacity: 0; }
            10% { opacity: 1; }
            100% { stroke-dashoffset: 0; opacity: 1; }
          }
          @keyframes fadeInUpAuction {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes floatSlow {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-12px) rotate(1deg); }
          }
          @keyframes floatReverse {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(12px) rotate(-1deg); }
          }
          @keyframes shimmer {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
          }
          @keyframes pulseGlow {
            0%, 100% { box-shadow: 0 0 0 0 rgba(59,130,246,0.3); }
            50% { box-shadow: 0 0 0 12px rgba(59,130,246,0); }
          }
          @keyframes scaleIn {
            from { opacity: 0; transform: scale(1.05); }
            to { opacity: 1; transform: scale(1); }
          }
          @keyframes slideInRight {
            from { opacity: 0; transform: translateX(40px); }
            to { opacity: 1; transform: translateX(0); }
          }
          .infinity-path {
            stroke-dasharray: 400;
            stroke-dashoffset: 400;
            animation: infinityDraw 2.5s cubic-bezier(0.4, 0, 0.2, 1) 0.5s forwards;
          }
          .float-slow { animation: floatSlow 6s ease-in-out infinite; }
          .float-reverse { animation: floatReverse 7s ease-in-out infinite; }
          .shimmer-btn {
            background: linear-gradient(90deg, #1E3A8A 0%, #3B82F6 25%, #1E3A8A 50%, #3B82F6 75%, #1E3A8A 100%);
            background-size: 200% 100%;
            animation: shimmer 3s linear infinite;
          }
          .pulse-cta { animation: pulseGlow 2s ease-in-out infinite; }
          .hero-reveal { animation: scaleIn 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
          .card-hover { transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); }
          .card-hover:hover { transform: translateY(-6px); box-shadow: 0 20px 40px rgba(15,23,42,0.08); }
          .gradient-text {
            background: linear-gradient(135deg, #1E3A8A, #3B82F6);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .red-gradient-text {
            background: linear-gradient(135deg, #DC2626, #EF4444);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
          }
        `,
        }}
      />

      {/* ===== SUBTLE BACKGROUND ELEMENTS ===== */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAFBFF] via-[#F1F5FF] to-[#FAFBFF]" />
        <div className="absolute top-[-10%] right-[-5%] h-[500px] w-[500px] rounded-full bg-[#3B82F6]/[0.03] blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-5%] h-[400px] w-[400px] rounded-full bg-[#DC2626]/[0.02] blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #1E3A8A 0.5px, transparent 0.5px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* ===== NAVIGATION ===== */}
      <nav className="fixed top-0 right-0 left-0 z-50 border-b border-[#1E3A8A]/[0.06] bg-white/80 backdrop-blur-2xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Link
            href="/"
            className="flex items-center gap-3 text-[#64748B] transition-colors duration-300 hover:text-[#0F172A]"
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
            <span className="hidden font-[family-name:var(--font-heading)] text-sm font-bold tracking-wide text-[#1E3A8A] sm:inline">
              Infinity Auction House
            </span>
            <a
              href="https://www.facebook.com/infinityauctionhousephofficial"
              target="_blank"
              rel="noopener noreferrer"
              className="flex cursor-pointer items-center gap-2 rounded-full bg-[#1E3A8A] px-4 py-2 text-xs font-bold tracking-wide text-white uppercase transition-all duration-300 hover:bg-[#1E3A8A]/90 hover:shadow-lg hover:shadow-[#1E3A8A]/20"
            >
              <Facebook className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Shop Now</span>
            </a>
          </div>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <section className="relative z-10 flex min-h-[100dvh] items-start overflow-hidden px-6 pt-28 pb-20 lg:pt-32">
        {/* Decorative Infinity Symbol — large background */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.04]">
          <svg
            width="900"
            height="450"
            viewBox="0 0 200 100"
            fill="none"
            className="h-auto w-[80%] max-w-[900px]"
          >
            <path
              d="M50 50 C50 20, 10 20, 10 50 C10 80, 50 80, 50 50 C50 20, 90 20, 90 50 C90 80, 50 80, 50 50"
              transform="translate(50, 0)"
              stroke="#1E3A8A"
              strokeWidth="1.5"
              className="infinity-path"
            />
          </svg>
        </div>

        {/* Red accent orb */}
        <div className="pointer-events-none absolute top-[15%] right-[10%] h-[300px] w-[300px] rounded-full bg-[#DC2626]/[0.04] blur-[80px]" />

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-2">
          {/* Left — Text Content */}
          <div>
            <div
              style={{
                opacity: 0,
                animationName: "fadeInUpAuction",
                animationDuration: "0.7s",
                animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                animationDelay: "0.2s",
                animationFillMode: "forwards",
              }}
            >
              <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#1E3A8A]/10 bg-[#1E3A8A]/[0.04] px-4 py-1.5 text-[11px] font-bold tracking-[0.2em] text-[#1E3A8A] uppercase">
                <MapPin className="h-3 w-3" />
                Cabuyao, Laguna
              </span>
            </div>

            <h1
              className="mt-6 mb-4 font-[family-name:var(--font-heading)] text-5xl leading-[1.05] font-bold tracking-tight sm:text-6xl lg:text-7xl"
              style={{
                opacity: 0,
                animationName: "fadeInUpAuction",
                animationDuration: "0.9s",
                animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                animationDelay: "0.4s",
                animationFillMode: "forwards",
              }}
            >
              <span className="gradient-text">Infinite</span>{" "}
              Finds,{" "}
              <span className="red-gradient-text">Unbeatable</span>{" "}
              Prices
            </h1>

            <p
              className="mb-8 max-w-lg text-lg leading-relaxed text-[#475569]"
              style={{
                opacity: 0,
                animationName: "fadeInUpAuction",
                animationDuration: "0.7s",
                animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                animationDelay: "0.65s",
                animationFillMode: "forwards",
              }}
            >
              Your one-stop online shop for brand new, quality items at prices
              that can&apos;t be beat. From gadgets to home essentials — we&apos;ve got
              everything you need.
            </p>

            <div
              className="flex flex-wrap gap-4"
              style={{
                opacity: 0,
                animationName: "fadeInUpAuction",
                animationDuration: "0.7s",
                animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                animationDelay: "0.85s",
                animationFillMode: "forwards",
              }}
            >
              <a
                href="https://www.facebook.com/infinityauctionhousephofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="pulse-cta group inline-flex cursor-pointer items-center gap-2.5 rounded-full bg-[#1E3A8A] px-8 py-4 text-sm font-bold tracking-wide text-white uppercase transition-all duration-300 hover:bg-[#1E3A8A]/90 hover:shadow-xl hover:shadow-[#1E3A8A]/25"
              >
                <Facebook className="h-4 w-4" />
                Shop on Facebook
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#how-it-works"
                className="inline-flex cursor-pointer items-center gap-2 rounded-full border-2 border-[#1E3A8A]/15 px-7 py-4 text-sm font-semibold text-[#1E3A8A] transition-all duration-300 hover:border-[#1E3A8A]/30 hover:bg-[#1E3A8A]/[0.04]"
              >
                How It Works
                <ChevronRight className="h-4 w-4" />
              </a>
            </div>

            {/* Mini social proof */}
            <div
              className="mt-10 flex items-center gap-3"
              style={{
                opacity: 0,
                animationName: "fadeInUpAuction",
                animationDuration: "0.6s",
                animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                animationDelay: "1.1s",
                animationFillMode: "forwards",
              }}
            >
              <div className="flex -space-x-2">
                {[0, 1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white text-[10px] font-bold text-white"
                    style={{
                      background:
                        i % 2 === 0
                          ? "linear-gradient(135deg, #1E3A8A, #3B82F6)"
                          : "linear-gradient(135deg, #DC2626, #EF4444)",
                    }}
                  >
                    {["J", "M", "R", "A"][i]}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-3 w-3 fill-[#FBBF24] text-[#FBBF24]"
                    />
                  ))}
                </div>
                <p className="text-xs text-[#64748B]">
                  Trusted by <span className="font-semibold text-[#0F172A]">10,000+</span> buyers
                </p>
              </div>
            </div>
          </div>

          {/* Right — Hero Visual */}
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
            {/* Main product image */}
            <div className="float-slow relative overflow-hidden rounded-3xl shadow-2xl shadow-[#1E3A8A]/10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={bp("/infinity-auction-house/hero.jpg")}
                alt="Infinity Auction House Products"
                className="h-[500px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A8A]/20 to-transparent" />

              {/* Floating badge */}
              <div className="absolute right-4 bottom-4 rounded-2xl border border-white/20 bg-white/90 px-4 py-3 shadow-lg backdrop-blur-md">
                <p className="text-[10px] font-bold tracking-wider text-[#DC2626] uppercase">
                  New Arrivals Daily
                </p>
                <p className="text-lg font-bold text-[#0F172A]">
                  1,000+ Items
                </p>
              </div>
            </div>

            {/* Floating secondary card */}
            <div className="float-reverse absolute -bottom-6 -left-8 rounded-2xl border border-[#1E3A8A]/10 bg-white p-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#DC2626]/10">
                  <ShieldCheck className="h-5 w-5 text-[#DC2626]" />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#0F172A]">
                    Verified Seller
                  </p>
                  <p className="text-xs text-[#64748B]">
                    100% Authentic Items
                  </p>
                </div>
              </div>
            </div>

            {/* Floating price tag */}
            <div className="float-slow absolute -top-4 -right-4 rounded-2xl border border-[#3B82F6]/10 bg-white p-3 shadow-xl">
              <p className="text-[10px] font-bold tracking-wider text-[#3B82F6] uppercase">
                Best Price
              </p>
              <p className="text-xl font-bold text-[#0F172A]">
                Up to 70% Off
              </p>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          style={{
            opacity: 0,
            animationName: "fadeInUpAuction",
            animationDuration: "0.5s",
            animationDelay: "1.5s",
            animationFillMode: "forwards",
          }}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] font-semibold tracking-[0.2em] text-[#94A3B8] uppercase">
              Scroll to explore
            </span>
            <div className="h-8 w-5 rounded-full border-2 border-[#CBD5E1]">
              <div
                className="mx-auto mt-1 h-2 w-1 rounded-full bg-[#3B82F6]"
                style={{
                  animation: "fadeInUpAuction 1.5s ease-in-out infinite",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS BAR ===== */}
      <section className="relative z-10 border-y border-[#1E3A8A]/[0.06] bg-white/60 py-10 backdrop-blur-sm">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 md:grid-cols-4">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} variant="fadeUp" delay={i * 100}>
              <div className="text-center">
                <stat.icon className="mx-auto mb-2 h-5 w-5 text-[#3B82F6]" />
                <div className="font-[family-name:var(--font-display)] text-3xl font-bold text-[#0F172A] md:text-4xl">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </div>
                <p className="mt-1 text-sm font-medium text-[#64748B]">
                  {stat.label}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ===== CATEGORIES ===== */}
      <section className="relative z-10 py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal variant="fadeUp">
            <div className="mb-16 text-center">
              <span className="mb-3 inline-block text-sm font-bold tracking-[0.2em] text-[#DC2626] uppercase">
                What We Sell
              </span>
              <h2 className="font-[family-name:var(--font-heading)] text-4xl font-bold text-[#0F172A] md:text-5xl">
                Endless{" "}
                <span className="gradient-text">Categories</span>
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-[#64748B]">
                From electronics to home essentials — brand new items across
                every category, all at unbeatable prices.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat, i) => (
              <ScrollReveal key={cat.name} variant="fadeUp" delay={i * 80}>
                <div className="card-hover group rounded-2xl border border-[#E2E8F0] bg-white p-7">
                  <div
                    className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${cat.color}10` }}
                  >
                    <cat.icon
                      className="h-6 w-6"
                      style={{ color: cat.color }}
                    />
                  </div>
                  <h3 className="mb-1.5 text-lg font-bold text-[#0F172A]">
                    {cat.name}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#64748B]">
                    {cat.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section
        id="how-it-works"
        className="relative z-10 bg-gradient-to-b from-[#F1F5FF] to-[#FAFBFF] py-24 px-6"
      >
        {/* Decorative infinity in background */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.02]">
          <svg width="600" height="300" viewBox="0 0 200 100" fill="none">
            <path
              d="M50 50 C50 20, 10 20, 10 50 C10 80, 50 80, 50 50 C50 20, 90 20, 90 50 C90 80, 50 80, 50 50"
              transform="translate(50, 0)"
              stroke="#1E3A8A"
              strokeWidth="2"
            />
          </svg>
        </div>

        <div className="relative mx-auto max-w-6xl">
          <ScrollReveal variant="fadeUp">
            <div className="mb-16 text-center">
              <span className="mb-3 inline-block text-sm font-bold tracking-[0.2em] text-[#3B82F6] uppercase">
                Simple Process
              </span>
              <h2 className="font-[family-name:var(--font-heading)] text-4xl font-bold text-[#0F172A] md:text-5xl">
                How It{" "}
                <span className="red-gradient-text">Works</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step, i) => (
              <ScrollReveal key={step.num} variant="fadeUp" delay={i * 150}>
                <div className="card-hover relative rounded-2xl border border-[#E2E8F0] bg-white p-8 text-center">
                  {/* Step number */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] px-4 py-1 text-xs font-bold tracking-wider text-white">
                    STEP {step.num}
                  </div>

                  <div className="mx-auto mb-5 mt-3 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#1E3A8A]/[0.06]">
                    <step.icon className="h-7 w-7 text-[#1E3A8A]" />
                  </div>

                  <h3 className="mb-3 text-xl font-bold text-[#0F172A]">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#64748B]">
                    {step.desc}
                  </p>

                  {/* Connector arrow (not on last) */}
                  {i < steps.length - 1 && (
                    <div className="absolute top-1/2 -right-5 hidden -translate-y-1/2 md:block">
                      <ArrowRight className="h-5 w-5 text-[#CBD5E1]" />
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* CTA after steps */}
          <ScrollReveal variant="fadeUp" delay={500}>
            <div className="mt-14 text-center">
              <a
                href="https://www.facebook.com/infinityauctionhousephofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex cursor-pointer items-center gap-2.5 rounded-full bg-[#DC2626] px-8 py-4 text-sm font-bold tracking-wide text-white uppercase transition-all duration-300 hover:bg-[#DC2626]/90 hover:shadow-xl hover:shadow-[#DC2626]/20"
              >
                <Facebook className="h-4 w-4" />
                Start Shopping Now
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== GALLERY ===== */}
      <section className="relative z-10 py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal variant="fadeUp">
            <div className="mb-16 text-center">
              <span className="mb-3 inline-block text-sm font-bold tracking-[0.2em] text-[#DC2626] uppercase">
                See For Yourself
              </span>
              <h2 className="font-[family-name:var(--font-heading)] text-4xl font-bold text-[#0F172A] md:text-5xl">
                The{" "}
                <span className="gradient-text">Infinity</span>{" "}
                Experience
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
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="absolute bottom-0 left-0 translate-y-4 p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-sm font-bold text-white">{img.alt}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="relative z-10 bg-gradient-to-b from-[#F1F5FF] to-[#FAFBFF] py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal variant="fadeUp">
            <div className="mb-16 text-center">
              <span className="mb-3 inline-block text-sm font-bold tracking-[0.2em] text-[#3B82F6] uppercase">
                Why Choose Us
              </span>
              <h2 className="font-[family-name:var(--font-heading)] text-4xl font-bold text-[#0F172A] md:text-5xl">
                The{" "}
                <span className="red-gradient-text">Infinity</span>{" "}
                Advantage
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-[#64748B]">
                We&apos;re not just another online seller. Here&apos;s why
                thousands trust Infinity Auction House.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((reason, i) => (
              <ScrollReveal
                key={reason.title}
                variant="fadeUp"
                delay={i * 80}
              >
                <div className="card-hover group flex items-start gap-4 rounded-2xl border border-[#E2E8F0] bg-white p-6">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#1E3A8A]/10 to-[#3B82F6]/10 transition-all duration-300 group-hover:scale-110">
                    <reason.icon className="h-5 w-5 text-[#1E3A8A]" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-base font-bold text-[#0F172A]">
                      {reason.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-[#64748B]">
                      {reason.desc}
                    </p>
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
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1E3A8A] via-[#1E3A8A] to-[#0F172A] px-8 py-16 text-center md:px-16 md:py-20">
              {/* Background decorative elements */}
              <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute -top-20 -right-20 h-[300px] w-[300px] rounded-full bg-[#3B82F6]/15 blur-[80px]" />
                <div className="absolute -bottom-20 -left-20 h-[250px] w-[250px] rounded-full bg-[#DC2626]/10 blur-[80px]" />
                {/* Infinity watermark */}
                <svg
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.04]"
                  width="500"
                  height="250"
                  viewBox="0 0 200 100"
                  fill="none"
                >
                  <path
                    d="M50 50 C50 20, 10 20, 10 50 C10 80, 50 80, 50 50 C50 20, 90 20, 90 50 C90 80, 50 80, 50 50"
                    transform="translate(50, 0)"
                    stroke="white"
                    strokeWidth="2"
                  />
                </svg>
              </div>

              <div className="relative">
                {/* Logo */}
                <Image
                  src="/logos/infinity-auction.jpg"
                  alt="Infinity Auction House"
                  width={72}
                  height={72}
                  className="mx-auto mb-6 rounded-2xl shadow-2xl"
                />

                <h2 className="mb-4 font-[family-name:var(--font-heading)] text-3xl font-bold text-white md:text-5xl">
                  Ready to Find Your Next{" "}
                  <span className="text-[#FBBF24]">Best Deal</span>?
                </h2>

                <p className="mx-auto mb-10 max-w-2xl text-lg text-white/60">
                  New items drop every day. Don&apos;t miss out on quality
                  products at the most affordable prices in the Philippines.
                  Message us on Facebook to start shopping!
                </p>

                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <a
                    href="https://www.facebook.com/infinityauctionhousephofficial"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex cursor-pointer items-center gap-2.5 rounded-full bg-white px-8 py-4 text-sm font-bold tracking-wide text-[#1E3A8A] uppercase transition-all duration-300 hover:shadow-2xl hover:shadow-white/20"
                  >
                    <Facebook className="h-4 w-4" />
                    Shop on Facebook
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                  <a
                    href="https://www.facebook.com/infinityauctionhousephofficial"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex cursor-pointer items-center gap-2 rounded-full border-2 border-white/20 px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:border-white/40 hover:bg-white/[0.06]"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Message Us
                  </a>
                </div>

                {/* Urgency micro-text */}
                <p className="mt-6 text-xs font-medium tracking-wide text-white/30">
                  New stocks arriving daily — items sell out fast!
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== PART OF PRING GROUP ===== */}
      <section className="relative z-10 border-t border-[#1E3A8A]/[0.06] py-16 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <ScrollReveal variant="scale">
            <Image
              src="/logos/pring-group.png"
              alt="Pring Group"
              width={56}
              height={56}
              className="mx-auto mb-5 rounded"
            />
            <p className="mb-2 text-xs font-semibold tracking-[0.2em] text-[#94A3B8] uppercase">
              Part of
            </p>
            <h2 className="mb-3 font-[family-name:var(--font-heading)] text-2xl font-bold text-[#0F172A] md:text-3xl">
              Pring Group of Companies
            </h2>
            <p className="mx-auto mb-6 max-w-xl text-base text-[#64748B]">
              Infinity Auction House is one of 16+ businesses under the Pring
              Group — a family-owned conglomerate building a legacy across the
              Philippines.
            </p>
            <Link
              href="/"
              className="inline-flex cursor-pointer items-center gap-2 text-sm font-semibold text-[#1E3A8A] transition-all duration-300 hover:gap-3"
            >
              Explore All Businesses
              <ChevronRight className="h-4 w-4" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="relative z-10 border-t border-[#1E3A8A]/[0.06] bg-white/60 py-8 px-6 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 sm:flex-row">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logos/pring-group.png"
              alt="Pring Group"
              width={22}
              height={22}
              className="rounded"
            />
            <span className="text-xs text-[#94A3B8]">
              Pring Group of Companies
            </span>
          </Link>
          <p className="text-xs text-[#94A3B8]">
            &copy; {new Date().getFullYear()} Infinity Auction House. All
            rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
