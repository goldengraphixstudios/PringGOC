import Image from "@/components/Img";
import Link from "next/link";
import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import { bp } from "@/lib/basePath";
import BusinessNavArrows from "@/components/BusinessNavArrows";
import BusinessPopup from "@/components/BusinessPopup";
import { businesses } from "@/data/businesses";
import { GROUP_BUSINESS_LABEL } from "@/data/site";
import {
  ArrowLeft,
  Facebook,
  MapPin,
  Dumbbell,
  Users,
  Trophy,
  Flame,
  Clock,
  ChevronDown,
  ArrowRight,
  ExternalLink,
  Zap,
  Target,
  Heart,
  Shield,
  Phone,
  Calendar,
  Star,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Extreme Gainz Fitness Gym | Your Gains Start Here — Laguna & Cavite",
  description:
    "Train with Extreme Gainz across Laguna and Cavite. Inquire for branch schedules, membership details, and the best location for your fitness goals.",
};

const extremeGainzBusiness = businesses.find((business) => business.slug === "extreme-gainz");
const branches = extremeGainzBusiness?.branches ?? [];

const stats = [
  { value: branches.length, label: "Branches", icon: MapPin },
  { value: 2, label: "Provinces", icon: Target },
  { value: 7, label: "Days / Week", icon: Calendar },
  { value: 1, label: "Inquiry Form", icon: Phone },
];

const programs = [
  {
    icon: Dumbbell,
    title: "Strength Training",
    desc: "Build raw power with our premium BUILDFIT equipment. Squat racks, deadlift platforms, and heavy iron.",
  },
  {
    icon: Zap,
    title: "Personal Training",
    desc: "One-on-one coaching from certified trainers who push you past your limits and track your progress.",
  },
  {
    icon: Users,
    title: "Group Classes",
    desc: "High-energy group sessions — HIIT, circuit training, and functional fitness with a motivated crew.",
  },
  {
    icon: Heart,
    title: "Cardio Zone",
    desc: "Spin bikes, treadmills, and battle ropes to torch calories and build endurance that lasts.",
  },
];


const equipment = [
  { src: "/extreme-gainz/gym-1.jpg", alt: "Full Gym Floor — State-of-the-Art Equipment", span: true },
  { src: "/extreme-gainz/gym-2.jpg", alt: "Power Rack & Cable Machine" },
  { src: "/extreme-gainz/gym-3.jpg", alt: "Leg Press & Incline Bench" },
  { src: "/extreme-gainz/gym-4.jpg", alt: "BUILDFIT Premium Machines" },
  { src: "/extreme-gainz/gym-5.jpg", alt: "Cardio — Spin Bike Station" },
  { src: "/extreme-gainz/gym-6.jpg", alt: "Cable Station & Free Weights" },
];

export default function ExtremeGainzPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <BusinessNavArrows currentSlug="extreme-gainz" />
      <BusinessPopup config={{
        storageKey: "popup-extreme-gainz",
        delay: 1700,
        headerBg: "linear-gradient(135deg, #080400 0%, #2C0E00 30%, #6C2400 65%, #F0C030 100%)",
        headerIcon: "🔥",
        modalBg: "#080808",
        eyebrow: "YOUR GAINS START HERE",
        eyebrowColor: "#F0C030",
        title: "Find your nearest Extreme Gainz branch.",
        titleColor: "#F0C030",
        body: "Choose the branch closest to you and inquire about gym access, classes, coaching, or membership details.",
        bodyColor: "rgba(255,255,255,0.48)",
        primaryCTA: "Select a Branch",
        primaryHref: "#branches",
        ctaBg: "#F0C030",
        ctaColor: "#080808",
        secondaryCTA: "Open Inquiry Form",
        secondaryColor: "rgba(240,192,48,0.45)",
        badge: "8 BRANCHES",
        badgeBg: "rgba(240,192,48,0.2)",
        badgeColor: "#F0C030",
        accentLine: "#F0C030",
        logoSrc: "/logos/extreme-gainz.jpg",
      }} />
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes fireGlow {
            0%, 100% { text-shadow: 0 0 20px rgba(240,192,48,0.4), 0 0 40px rgba(255,140,0,0.15); }
            50% { text-shadow: 0 0 30px rgba(240,192,48,0.6), 0 0 60px rgba(255,140,0,0.25); }
          }
          @keyframes ember {
            0% { transform: translateY(0) translateX(0) scale(1); opacity: 0; }
            10% { opacity: 1; }
            100% { transform: translateY(-120px) translateX(20px) scale(0); opacity: 0; }
          }
          @keyframes fadeInUpGym {
            from { opacity: 0; transform: translateY(40px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes pulseFireBorder {
            0%, 100% { border-color: rgba(240,192,48,0.3); }
            50% { border-color: rgba(255,140,0,0.6); }
          }
          @keyframes scaleIn {
            from { opacity: 0; transform: scale(1.1); }
            to { opacity: 1; transform: scale(1); }
          }
          .fire-text {
            background: linear-gradient(90deg, #F0C030, #FF8C00, #FF4500);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .fire-glow {
            animation: fireGlow 3s ease-in-out infinite;
          }
          .fire-border {
            animation: pulseFireBorder 2s ease-in-out infinite;
          }
          .hero-zoom {
            animation: scaleIn 2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }
          .fire-gradient-bg {
            background: linear-gradient(135deg, #F0C030, #FF8C00, #FF4500);
          }
          .fire-gradient-border {
            background: linear-gradient(135deg, #F0C030, #FF8C00, #FF4500);
          }
        `,
        }}
      />

      {/* ===== NAVIGATION ===== */}
      <nav className="fixed top-0 right-0 left-0 z-50 border-b border-white/[0.06] bg-black/70 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Link
            href="/"
            className="flex items-center gap-3 text-white/50 transition-colors duration-300 hover:text-white/80"
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
            <span className="font-[family-name:var(--font-display)] text-sm font-bold tracking-[0.15em] text-white uppercase">
              Extreme Gainz
            </span>
            <a
              href="https://www.facebook.com/profile.php?id=61586473550426"
              target="_blank"
              rel="noopener noreferrer"
              className="flex cursor-pointer items-center gap-2 rounded-full border border-[#F0C030]/30 bg-[#F0C030]/10 px-4 py-2 text-xs font-bold tracking-wide text-[#F0C030] uppercase transition-all duration-300 hover:bg-[#F0C030]/20"
            >
              <Facebook className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Follow</span>
            </a>
          </div>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <section className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden">
        {/* Background — gym wide shot */}
        <div className="hero-zoom absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={bp("/extreme-gainz/gym-1.jpg")}
            alt="Extreme Gainz Gym"
            className="h-full w-full object-cover"
          />
          {/* Dark overlay with fire gradient at bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/50" />
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#FF4500]/[0.08] to-transparent" />
        </div>

        {/* Ember particles */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-[#F0C030]"
              style={{
                width: `${2 + Math.random() * 3}px`,
                height: `${2 + Math.random() * 3}px`,
                left: `${15 + Math.random() * 70}%`,
                bottom: `${5 + Math.random() * 15}%`,
                animation: `ember ${3 + Math.random() * 4}s ease-out infinite`,
                animationDelay: `${Math.random() * 5}s`,
                opacity: 0,
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          {/* Logo */}
          <div
            style={{
              opacity: 0,
              animationName: "fadeInUpGym",
              animationDuration: "0.8s",
              animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
              animationDelay: "0.2s",
              animationFillMode: "forwards",
            }}
          >
            <Image
              src="/logos/extreme-gainz.jpg"
              alt="Extreme Gainz Logo"
              width={90}
              height={90}
              className="mx-auto mb-6 rounded-2xl shadow-2xl shadow-[#F0C030]/10"
              priority
            />
          </div>

          {/* Badge */}
          <div
            style={{
              opacity: 0,
              animationName: "fadeInUpGym",
              animationDuration: "0.7s",
              animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
              animationDelay: "0.4s",
              animationFillMode: "forwards",
            }}
          >
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#F0C030]/20 bg-[#F0C030]/[0.06] px-5 py-1.5 text-[11px] font-bold tracking-[0.2em] text-[#F0C030] uppercase">
              <MapPin className="h-3 w-3" />
              Laguna & Cavite
            </span>
          </div>

          {/* Headline */}
          <h1
            className="mb-4 font-[family-name:var(--font-display)] text-5xl leading-[0.95] font-bold tracking-tight text-white uppercase sm:text-6xl md:text-7xl lg:text-8xl"
            style={{
              opacity: 0,
              animationName: "fadeInUpGym",
              animationDuration: "0.9s",
              animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
              animationDelay: "0.6s",
              animationFillMode: "forwards",
              textShadow: "0 0 20px rgba(240,192,48,0.4), 0 0 40px rgba(255,140,0,0.15)",
            }}
          >
            Extreme <span className="fire-text">Gainz</span>
          </h1>

          {/* Tagline */}
          <p
            className="mb-8 font-[family-name:var(--font-display)] text-xl font-light tracking-[0.3em] text-white/50 uppercase sm:text-2xl"
            style={{
              opacity: 0,
              animationName: "fadeInUpGym",
              animationDuration: "0.7s",
              animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
              animationDelay: "0.85s",
              animationFillMode: "forwards",
            }}
          >
            Your Gains Start Here
          </p>

          {/* Fire line divider */}
          <div
            className="mx-auto mb-8 h-[2px] w-32"
            style={{
              opacity: 0,
              background: "linear-gradient(90deg, transparent, #F0C030, #FF8C00, #F0C030, transparent)",
              animationName: "fadeInUpGym",
              animationDuration: "0.6s",
              animationDelay: "1s",
              animationFillMode: "forwards",
            }}
          />

          {/* Subtitle */}
          <p
            className="mx-auto mb-10 max-w-lg text-base leading-relaxed text-white/40 sm:text-lg"
            style={{
              opacity: 0,
              animationName: "fadeInUpGym",
              animationDuration: "0.7s",
              animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
              animationDelay: "1.1s",
              animationFillMode: "forwards",
            }}
          >
            From beginners to pros — train with Extreme Gainz across multiple
            branches in Laguna and Cavite, backed by serious equipment and a
            community built for consistency.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
            style={{
              opacity: 0,
              animationName: "fadeInUpGym",
              animationDuration: "0.7s",
              animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
              animationDelay: "1.3s",
              animationFillMode: "forwards",
            }}
          >
            <a
              href="#branches"
              className="fire-gradient-bg group flex cursor-pointer items-center gap-2 rounded-full px-8 py-4 text-sm font-bold tracking-wide text-black uppercase shadow-lg shadow-[#F0C030]/20 transition-all duration-300 hover:shadow-xl hover:shadow-[#F0C030]/30 active:scale-[0.97]"
            >
              <MapPin className="h-4 w-4" />
              Find a Branch
            </a>
            <a
              href="#equipment"
              className="flex cursor-pointer items-center gap-2 rounded-full border border-white/20 px-8 py-4 text-sm font-bold tracking-wide text-white uppercase transition-all duration-300 hover:border-[#F0C030]/40 hover:text-[#F0C030] active:scale-[0.97]"
            >
              See Our Gym
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          style={{
            opacity: 0,
            animationName: "fadeInUpGym",
            animationDuration: "0.5s",
            animationDelay: "1.8s",
            animationFillMode: "forwards",
          }}
        >
          <a
            href="#stats"
            className="flex flex-col items-center gap-2 text-[#F0C030]/40 transition-colors hover:text-[#F0C030]/70"
          >
            <span className="font-[family-name:var(--font-display)] text-[10px] tracking-[0.3em] uppercase">
              Scroll
            </span>
            <ChevronDown className="h-4 w-4 animate-bounce" />
          </a>
        </div>
      </section>

      {/* ===== STATS BAR ===== */}
      <section id="stats" className="relative z-10 border-y border-[#F0C030]/10 bg-[#0a0a0a]">
        {/* Fire gradient top edge */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#F0C030]/40 to-transparent" />

        <div className="mx-auto grid max-w-5xl grid-cols-2 md:grid-cols-4">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} variant="fadeUp" delay={i * 100}>
              <div className="flex flex-col items-center gap-2 border-r border-white/[0.04] px-6 py-10 last:border-r-0 md:py-12">
                <stat.icon className="mb-2 h-5 w-5 text-[#F0C030]/60" />
                <span className="fire-text font-[family-name:var(--font-display)] text-3xl font-bold md:text-4xl">
                  {stat.value}
                </span>
                <span className="font-[family-name:var(--font-display)] text-[11px] tracking-[0.2em] text-white/30 uppercase">
                  {stat.label}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section className="relative px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* Image */}
            <ScrollReveal variant="fadeRight">
              <div className="relative aspect-[3/4] max-h-[600px] overflow-hidden rounded-2xl border border-white/[0.06]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={bp("/extreme-gainz/gym-3.jpg")}
                  alt="BUILDFIT Equipment"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                {/* Fire accent corner */}
                <div className="absolute bottom-0 left-0 h-1 w-1/2 bg-gradient-to-r from-[#F0C030] via-[#FF8C00] to-transparent" />
              </div>
            </ScrollReveal>

            {/* Text */}
            <ScrollReveal variant="fadeLeft" delay={150}>
              <div>
                <span className="mb-4 inline-block font-[family-name:var(--font-display)] text-sm font-bold tracking-[0.2em] text-[#F0C030]/60 uppercase">
                  About The Gym
                </span>
                <h2 className="mb-6 font-[family-name:var(--font-display)] text-4xl leading-[1.05] font-bold text-white uppercase md:text-5xl">
                  Where{" "}
                  <span className="fire-text">Legends</span>
                  <br />
                  Are Made
                </h2>
                <div className="mb-8 h-[2px] w-20 bg-gradient-to-r from-[#F0C030] to-[#FF8C00]" />
                <p className="mb-6 text-base leading-[1.8] text-white/50">
                  Extreme Gainz isn&apos;t just a gym &mdash; it&apos;s a
                  training ground. Built from the ground up with premium BUILDFIT
                  equipment, our all-black facility is designed for serious
                  lifters who demand the best.
                </p>
                <p className="mb-8 text-base leading-[1.8] text-white/50">
                  From power racks and cable stations to cardio machines and free
                  weights, every piece of equipment is hand-selected to help you
                  achieve maximum results. No shortcuts. No excuses. Just raw,
                  unfiltered gains.
                </p>

                {/* Highlights */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "State-of-the-art Equipment",
                    "Expert Personal Trainers",
                    "Supportive Community",
                    "Programs for All Levels",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 text-sm text-white/40"
                    >
                      <Flame className="h-3.5 w-3.5 shrink-0 text-[#F0C030]/60" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== EQUIPMENT GALLERY ===== */}
      <section
        id="equipment"
        className="relative border-t border-white/[0.04] bg-[#050505] px-6 py-24 md:py-32"
      >
        <div className="mx-auto max-w-6xl">
          <ScrollReveal variant="fadeUp">
            <div className="mb-16 text-center">
              <span className="mb-4 inline-block font-[family-name:var(--font-display)] text-sm font-bold tracking-[0.2em] text-[#F0C030]/60 uppercase">
                Our Arsenal
              </span>
              <h2 className="font-[family-name:var(--font-display)] text-4xl font-bold text-white uppercase md:text-5xl">
                Premium{" "}
                <span className="fire-text">Equipment</span>
              </h2>
            </div>
          </ScrollReveal>

          {/* Gallery grid */}
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {equipment.map((img, i) => (
              <ScrollReveal
                key={img.alt}
                variant="fadeUp"
                delay={i * 80}
                className={img.span ? "sm:col-span-2 lg:col-span-2" : ""}
              >
                <div className="group relative overflow-hidden rounded-xl border border-white/[0.04] transition-all duration-500 hover:border-[#F0C030]/20">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={bp(img.src)}
                    alt={img.alt}
                    className={`w-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-110 ${
                      img.span ? "aspect-[16/9]" : "aspect-[3/4]"
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  {/* Fire accent line on hover */}
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#F0C030] via-[#FF8C00] to-[#FF4500] transition-all duration-500 group-hover:w-full" />
                  <div className="absolute bottom-0 left-0 translate-y-4 px-6 pb-5 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <span className="font-[family-name:var(--font-display)] text-sm font-medium tracking-wide text-white/80 uppercase">
                      {img.alt}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROGRAMS ===== */}
      <section className="relative border-t border-white/[0.04] px-6 py-24 md:py-32">
        {/* Subtle fire glow */}
        <div
          className="pointer-events-none absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(240,192,48,0.03) 0%, transparent 70%)",
          }}
        />

        <div className="relative mx-auto max-w-6xl">
          <ScrollReveal variant="fadeUp">
            <div className="mb-16 text-center">
              <span className="mb-4 inline-block font-[family-name:var(--font-display)] text-sm font-bold tracking-[0.2em] text-[#F0C030]/60 uppercase">
                Training Programs
              </span>
              <h2 className="font-[family-name:var(--font-display)] text-4xl font-bold text-white uppercase md:text-5xl">
                Forge Your{" "}
                <span className="fire-text">Path</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {programs.map((prog, i) => (
              <ScrollReveal key={prog.title} variant="fadeUp" delay={i * 100}>
                <div className="group h-full rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 transition-all duration-500 hover:border-[#F0C030]/20 hover:bg-white/[0.04]">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[#F0C030]/10 transition-all duration-500 group-hover:bg-[#F0C030]/20 group-hover:shadow-lg group-hover:shadow-[#F0C030]/10">
                    <prog.icon className="h-6 w-6 text-[#F0C030]" />
                  </div>
                  <h3 className="mb-3 font-[family-name:var(--font-display)] text-lg font-bold tracking-wide text-white uppercase">
                    {prog.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/40">
                    {prog.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MOTIVATION BREAK ===== */}
      <section className="relative overflow-hidden border-y border-white/[0.04] py-32">
        {/* Background image */}
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={bp("/extreme-gainz/gym-7.jpg")}
            alt="Gym atmosphere"
            className="h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black" />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#FF4500]/[0.05] to-transparent" />
        </div>

        {/* Ember particles */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-[#FF8C00]"
              style={{
                width: `${2 + Math.random() * 2}px`,
                height: `${2 + Math.random() * 2}px`,
                left: `${20 + Math.random() * 60}%`,
                bottom: `${10 + Math.random() * 20}%`,
                animation: `ember ${4 + Math.random() * 3}s ease-out infinite`,
                animationDelay: `${Math.random() * 4}s`,
                opacity: 0,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <ScrollReveal variant="scale">
            <p className="mb-6 font-[family-name:var(--font-display)] text-lg font-light tracking-[0.4em] text-[#F0C030]/50 uppercase">
              No Excuses
            </p>
            <h2 className="fire-glow mb-6 font-[family-name:var(--font-display)] text-5xl leading-[0.95] font-bold text-white uppercase md:text-7xl lg:text-8xl">
              Just{" "}
              <span className="fire-text">Results</span>
            </h2>
            <div className="mx-auto h-[2px] w-32 bg-gradient-to-r from-transparent via-[#F0C030] to-transparent" />
          </ScrollReveal>
        </div>
      </section>

      {/* ===== BRANCHES ===== */}
      <section id="branches" className="relative border-t border-white/[0.04] bg-[#050505] px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal variant="fadeUp">
            <div className="mb-16 text-center">
              <span className="mb-4 inline-block font-[family-name:var(--font-display)] text-sm font-bold tracking-[0.2em] text-[#F0C030]/60 uppercase">
                {branches.length} Locations
              </span>
              <h2 className="font-[family-name:var(--font-display)] text-4xl font-bold text-white uppercase md:text-5xl">
                Find Your{" "}
                <span className="fire-text">Branch</span>
              </h2>
              <div className="mx-auto mt-6 h-[2px] w-20 bg-gradient-to-r from-transparent via-[#F0C030] to-transparent" />
            </div>
          </ScrollReveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {branches.map((branch, i) => (
              <ScrollReveal key={branch.name} variant="fadeUp" delay={i * 70}>
                <div className="group h-full rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 transition-all duration-300 hover:border-[#F0C030]/25 hover:bg-white/[0.04]">
                  {/* Branch number + name */}
                  <div className="mb-3 flex items-start justify-between gap-2">
                    <span className="fire-text font-[family-name:var(--font-display)] text-xs font-bold tracking-[0.15em] uppercase">
                      EXG {String(i + 1).padStart(2, "0")}
                    </span>
                    <MapPin className="h-3.5 w-3.5 shrink-0 text-[#F0C030]/40 mt-0.5" />
                  </div>
                  <h4 className="mb-2 font-[family-name:var(--font-display)] text-base font-bold tracking-wide text-white uppercase">
                    {branch.name}
                  </h4>
                  <div className="mb-3 h-px w-full bg-white/[0.05]" />
                  <p className="text-xs leading-relaxed text-white/35">
                    {branch.address}
                  </p>
                  {/* Fire accent bottom line on hover */}
                  <div className="mt-4 h-[1.5px] w-0 bg-gradient-to-r from-[#F0C030] to-[#FF8C00] transition-all duration-500 group-hover:w-full" />
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Inquire CTA */}
          <ScrollReveal variant="fadeUp" delay={200}>
            <div className="mt-14 flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-center">
              <a
                href="https://www.facebook.com/profile.php?id=61586473550426"
                target="_blank"
                rel="noopener noreferrer"
                className="fire-gradient-bg flex cursor-pointer items-center gap-2 rounded-full px-8 py-3.5 text-sm font-bold tracking-wide text-black uppercase shadow-lg shadow-[#F0C030]/20 transition-all duration-300 hover:shadow-xl hover:shadow-[#F0C030]/30"
              >
                <Phone className="h-4 w-4" />
                Inquire on Facebook
              </a>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfi18lhUo0KSjcFDeVH81tmy7C4iiLqt9rksS0gRcSfUdKNHg/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="flex cursor-pointer items-center gap-2 rounded-full border border-white/15 px-8 py-3.5 text-sm font-bold tracking-wide text-white/60 uppercase transition-all duration-300 hover:border-[#F0C030]/30 hover:text-[#F0C030]"
              >
                <ExternalLink className="h-4 w-4" />
                Membership Inquiry Form
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="relative overflow-hidden border-t border-white/[0.04] px-6 py-24 md:py-32">
        {/* Fire glow background */}
        <div
          className="pointer-events-none absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(255,140,0,0.05) 0%, transparent 70%)",
          }}
        />

        {/* Ember particles */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-[#F0C030]"
              style={{
                width: `${2 + Math.random() * 2}px`,
                height: `${2 + Math.random() * 2}px`,
                left: `${30 + Math.random() * 40}%`,
                bottom: `${10 + Math.random() * 20}%`,
                animation: `ember ${3 + Math.random() * 4}s ease-out infinite`,
                animationDelay: `${Math.random() * 5}s`,
                opacity: 0,
              }}
            />
          ))}
        </div>

        <div className="relative mx-auto max-w-3xl text-center">
          <ScrollReveal variant="fadeUp">
            <Trophy className="mx-auto mb-6 h-10 w-10 text-[#F0C030]/40" />
            <h2 className="fire-glow mb-4 font-[family-name:var(--font-display)] text-4xl font-bold text-white uppercase md:text-6xl">
              Join The{" "}
              <span className="fire-text">Movement</span>
            </h2>
            <div className="mx-auto mb-6 h-[2px] w-24 bg-gradient-to-r from-transparent via-[#F0C030] to-transparent" />
            <p className="mx-auto mb-10 max-w-md text-base leading-relaxed text-white/40">
              Stop waiting. Start training. Your transformation begins the moment
              you walk through our doors.
            </p>
          </ScrollReveal>

          <ScrollReveal variant="fadeUp" delay={100}>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="https://www.facebook.com/profile.php?id=61586473550426"
                target="_blank"
                rel="noopener noreferrer"
                className="fire-gradient-bg group flex cursor-pointer items-center gap-2 rounded-full px-10 py-4 text-sm font-bold tracking-wide text-black uppercase shadow-lg shadow-[#F0C030]/20 transition-all duration-300 hover:shadow-xl hover:shadow-[#F0C030]/30 active:scale-[0.97]"
              >
                <Flame className="h-4 w-4" />
                Start Now
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61586473550426"
                target="_blank"
                rel="noopener noreferrer"
                className="flex cursor-pointer items-center gap-2 rounded-full border border-white/15 px-10 py-4 text-sm font-bold tracking-wide text-white/60 uppercase transition-all duration-300 hover:border-[#F0C030]/30 hover:text-[#F0C030]"
              >
                <Facebook className="h-4 w-4" />
                Follow Us
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== PRING GROUP ===== */}
      <section className="relative border-t border-white/[0.04] bg-[#050505] px-6 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <ScrollReveal variant="scale">
            <Image
              src="/logos/pring-group.png"
              alt="Pring Group"
              width={44}
              height={44}
              className="mx-auto mb-4 rounded opacity-50"
            />
            <p className="mb-2 font-[family-name:var(--font-display)] text-[10px] tracking-[0.25em] text-white/20 uppercase">
              A Member Of
            </p>
            <h3 className="mb-3 text-lg font-semibold text-white/40">
              Pring Group of Companies
            </h3>
            <p className="mx-auto mb-5 max-w-md text-sm text-white/20">
              Extreme Gainz is one of {GROUP_BUSINESS_LABEL} businesses under the Pring Group
              &mdash; a family-owned conglomerate across the Philippines.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-[family-name:var(--font-display)] text-sm font-medium tracking-wide text-white/25 uppercase transition-colors duration-300 hover:text-[#F0C030]/60"
            >
              Explore All Businesses
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="border-t border-white/[0.04] px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-3">
            <Image
              src="/logos/extreme-gainz.jpg"
              alt="Extreme Gainz"
              width={24}
              height={24}
              className="rounded"
            />
            <span className="font-[family-name:var(--font-display)] text-xs font-bold tracking-[0.1em] text-white/25 uppercase">
              Extreme Gainz Fitness Gym
            </span>
          </div>
          <p className="text-[11px] text-white/15">
            &copy; {new Date().getFullYear()} Extreme Gainz &mdash; A Pring
            Group Company. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
