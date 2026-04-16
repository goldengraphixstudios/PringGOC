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
  Users,
  Sparkles,
  Crown,
  Star,
  Heart,
  Music,
  Utensils,
  Camera,
  Calendar,
  Clock,
  Wind,
  ChevronRight,
  Gift,
  Gem,
  PartyPopper,
  GlassWater,
  Phone,
  CheckCircle2,
  Quote,
  Mic2,
  Projector,
  Armchair,
} from "lucide-react";

export const metadata: Metadata = {
  title: "RFG Events Place — Your Premier Events Destination in Santa Rosa",
  description:
    "We accept all kinds of events. Venue capacity 150-250 pax, fully air conditioned. RFG Events Place, Santa Rosa.",
};

export default function RFGEventsPlacePage() {
  const services = [
    {
      icon: Heart,
      title: "Weddings",
      desc: "Celebrate your love story in an elegant, fully air-conditioned venue with gold-accented decor and up to 250 guests.",
      img: "/rfg-events-place/event-xmas-473571.jpg",
    },
    {
      icon: Utensils,
      title: "Corporate Events",
      desc: "Seminars, product launches, and company dinners — professional setup with full AV support.",
      img: "/rfg-events-place/venue-3.jpg",
    },
    {
      icon: PartyPopper,
      title: "Birthday Celebrations",
      desc: "From intimate gatherings to grand parties, create unforgettable birthday memories with style.",
      img: "/rfg-events-place/event-birthday-500909.jpg",
    },
    {
      icon: GlassWater,
      title: "Social Gatherings",
      desc: "Reunions, debuts, anniversaries, and more — a versatile space for every milestone.",
      img: "/rfg-events-place/event-christening-473360.jpg",
    },
  ];

  const amenities = [
    { icon: Wind, label: "Fully Air Conditioned" },
    { icon: Music, label: "Sound System" },
    { icon: Projector, label: "Projector & Screen" },
    { icon: Armchair, label: "150-250 Pax Seating" },
    { icon: Camera, label: "Photo-Ready Backdrop" },
    { icon: Mic2, label: "Wireless Microphones" },
  ];

  const steps = [
    {
      num: "01",
      title: "Inquire",
      desc: "Message us on Facebook or visit our venue to check availability and discuss your event needs.",
      icon: Phone,
    },
    {
      num: "02",
      title: "Plan",
      desc: "Work with our team to customize every detail — layout, catering, decor, and timeline.",
      icon: Calendar,
    },
    {
      num: "03",
      title: "Celebrate",
      desc: "Arrive to a venue that's ready to impress. We handle the setup so you can enjoy your event.",
      icon: PartyPopper,
    },
    {
      num: "04",
      title: "Cherish",
      desc: "Take home memories that last a lifetime. Share your experience and tag us on Facebook!",
      icon: Camera,
    },
  ];

  const stats = [
    { value: 9578, suffix: "+", label: "Facebook Likes", icon: Heart },
    { value: 250, suffix: "", label: "Max Capacity", icon: Users },
    { value: 328, suffix: "+", label: "Events Hosted", icon: Calendar },
    { value: 5, suffix: "★", label: "Star Reviews", icon: Star },
  ];

  return (
    <main className="relative overflow-hidden bg-[#0A0A0A]">
      <BusinessNavArrows currentSlug="rfg-events-place" />
      <style
        dangerouslySetInnerHTML={{
          __html: `
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap');

@keyframes evGoldPulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(201,168,76,0.4); }
  50% { box-shadow: 0 0 50px 15px rgba(201,168,76,0.08); }
}
@keyframes evFloat {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  33% { transform: translateY(-18px) rotate(0.4deg); }
  66% { transform: translateY(8px) rotate(-0.3deg); }
}
@keyframes evReveal {
  from { opacity: 0; transform: translateY(35px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes evShimmer {
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
}
@keyframes evGlow {
  0%, 100% { opacity: 0.3; filter: blur(60px); }
  50% { opacity: 0.55; filter: blur(85px); }
}
@keyframes evOrb {
  0%, 100% { transform: translate(0, 0) scale(1); }
  25% { transform: translate(25px, -18px) scale(1.08); }
  50% { transform: translate(-15px, 22px) scale(0.94); }
  75% { transform: translate(-20px, -12px) scale(1.04); }
}
@keyframes evSparkle {
  0%, 100% { opacity: 0; transform: scale(0.5) rotate(0deg); }
  50% { opacity: 1; transform: scale(1) rotate(180deg); }
}
@keyframes evBorderGlow {
  0%, 100% { border-color: rgba(201,168,76,0.08); }
  50% { border-color: rgba(201,168,76,0.22); }
}
@keyframes evLineExpand {
  from { width: 0; }
  to { width: 80px; }
}
@keyframes evLogoFloat {
  0%, 100% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-12px) scale(1.02); }
}
@keyframes evScanDown {
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100vh); }
}

.ev-hero-stagger > * {
  opacity: 0;
  animation: evReveal 0.9s cubic-bezier(0.16,1,0.3,1) forwards;
}
.ev-hero-stagger > *:nth-child(1) { animation-delay: 0.2s; }
.ev-hero-stagger > *:nth-child(2) { animation-delay: 0.4s; }
.ev-hero-stagger > *:nth-child(3) { animation-delay: 0.6s; }
.ev-hero-stagger > *:nth-child(4) { animation-delay: 0.8s; }
.ev-hero-stagger > *:nth-child(5) { animation-delay: 1.0s; }
.ev-hero-stagger > *:nth-child(6) { animation-delay: 1.2s; }

.ev-shimmer-text {
  background: linear-gradient(90deg, #C9A84C 0%, #F5E6CC 30%, #C9A84C 60%, #A08030 100%);
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: evShimmer 5s linear infinite;
}

.ev-card {
  transition: all 0.45s cubic-bezier(0.16,1,0.3,1);
  animation: evBorderGlow 5s ease-in-out infinite;
}
.ev-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 0 50px rgba(201,168,76,0.07), 0 25px 60px rgba(0,0,0,0.4);
  border-color: rgba(201,168,76,0.35) !important;
}
.ev-card:hover .ev-card-icon {
  box-shadow: 0 0 25px rgba(201,168,76,0.2);
  background: rgba(201,168,76,0.12);
}
.ev-card:hover .ev-card-img {
  transform: scale(1.05);
}

.ev-btn {
  position: relative;
  transition: all 0.3s cubic-bezier(0.16,1,0.3,1);
}
.ev-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 0 35px rgba(201,168,76,0.3), 0 15px 50px rgba(201,168,76,0.15);
}
.ev-btn-pulse { animation: evGoldPulse 3s ease-in-out infinite; }

.ev-step {
  transition: all 0.4s cubic-bezier(0.16,1,0.3,1);
}
.ev-step:hover {
  transform: translateX(10px);
  background: rgba(201,168,76,0.04);
  border-color: rgba(201,168,76,0.3);
}
.ev-step:hover .ev-step-num {
  color: #C9A84C;
  text-shadow: 0 0 35px rgba(201,168,76,0.35);
}
.ev-step:hover .ev-step-line {
  background: #C9A84C;
  width: 60px;
}

.ev-amenity {
  transition: all 0.35s cubic-bezier(0.16,1,0.3,1);
}
.ev-amenity:hover {
  transform: translateY(-4px);
  background: rgba(201,168,76,0.08);
  border-color: rgba(201,168,76,0.25);
}

.ev-gallery-item {
  transition: all 0.5s cubic-bezier(0.16,1,0.3,1);
}
.ev-gallery-item:hover {
  transform: scale(1.04);
  box-shadow: 0 0 50px rgba(201,168,76,0.12);
}
.ev-gallery-item:hover .ev-gallery-overlay {
  opacity: 1;
}

.font-display { font-family: 'Playfair Display', Georgia, serif; }

.ev-divider {
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(201,168,76,0.25), transparent);
}

@media (prefers-reduced-motion: reduce) {
  .ev-hero-stagger > * { opacity: 1; animation: none; }
  .ev-shimmer-text { animation: none; }
  .ev-btn-pulse { animation: none; }
  .ev-card { animation: none; }
}
`,
        }}
      />

      {/* ═══ NAVIGATION ═══ */}
      <nav className="fixed top-0 right-0 left-0 z-50 border-b border-[#C9A84C]/[0.06] bg-[#0A0A0A]/90 backdrop-blur-2xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
          <Link
            href="/"
            className="flex cursor-pointer items-center gap-2 text-sm font-medium text-white/40 transition-colors hover:text-[#C9A84C]"
          >
            <ArrowLeft size={16} />
            <span className="hidden sm:inline">Back to Pring Group</span>
          </Link>
          <div className="flex items-center gap-3">
            <Image
              src="/logos/rfg-events-place.jpg"
              alt="RFG Events Place"
              width={36}
              height={36}
              className="rounded-lg ring-1 ring-[#C9A84C]/20"
            />
            <div className="hidden sm:block">
              <div className="text-sm font-bold text-white">
                RFG Events Place
              </div>
              <div className="text-[10px] tracking-wider text-[#C9A84C] uppercase">
                Santa Rosa
              </div>
            </div>
          </div>
          <a
            href="https://www.facebook.com/officialRFGeventsplace"
            target="_blank"
            rel="noopener noreferrer"
            className="ev-btn inline-flex cursor-pointer items-center gap-2 rounded-lg bg-[#C9A84C] px-4 py-2 text-sm font-bold text-[#0A0A0A]"
          >
            <Facebook size={16} />
            <span className="hidden sm:inline">Follow Us</span>
          </a>
        </div>
      </nav>

      {/* ═══ HERO SECTION ═══ */}
      <section className="relative min-h-screen overflow-hidden pt-16">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/rfg-events-place/event-xmas-473571.jpg"
            alt="RFG Events Place Venue"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/95 to-[#0A0A0A]/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent" />
        </div>

        {/* Gold ambient orbs */}
        <div
          className="pointer-events-none absolute top-24 left-[8%] h-80 w-80 rounded-full bg-[#C9A84C]/15"
          style={{
            animation:
              "evOrb 14s ease-in-out infinite, evGlow 7s ease-in-out infinite",
          }}
        />
        <div
          className="pointer-events-none absolute top-[35%] right-[3%] h-64 w-64 rounded-full bg-[#A08030]/12"
          style={{
            animation:
              "evOrb 18s ease-in-out infinite reverse, evGlow 9s ease-in-out infinite 2s",
          }}
        />
        <div
          className="pointer-events-none absolute bottom-[15%] left-[25%] h-48 w-48 rounded-full bg-[#C9A84C]/8"
          style={{
            animation:
              "evOrb 11s ease-in-out infinite 4s, evGlow 6s ease-in-out infinite 1s",
          }}
        />

        {/* Subtle gold scanline */}
        <div
          className="pointer-events-none absolute left-0 right-0 h-40 opacity-[0.015]"
          style={{
            background:
              "linear-gradient(transparent, #C9A84C, transparent)",
            animation: "evScanDown 12s linear infinite",
          }}
        />

        <div className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-10 px-6 md:grid-cols-[1fr_auto] md:px-12">
          {/* Left: content */}
          <div className="ev-hero-stagger py-24 md:py-20">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#C9A84C]/20 bg-[#C9A84C]/[0.06] px-4 py-1.5">
              <Crown size={13} className="text-[#C9A84C]" />
              <span className="text-[11px] font-bold tracking-[0.15em] text-[#C9A84C] uppercase">
                Premier Events Destination
              </span>
            </div>

            <h1 className="font-display mb-6 text-5xl leading-[1.1] font-bold tracking-tight text-white md:text-7xl">
              Where Every
              <br />
              <span className="ev-shimmer-text">Celebration</span>
              <br />
              Becomes{" "}
              <span className="italic text-[#C9A84C]">Legendary</span>
            </h1>

            <p className="mb-8 max-w-lg text-lg leading-relaxed text-white/55">
              Fully air-conditioned venue in Santa Rosa with 150-250 pax
              capacity. From weddings to corporate events — we make every
              occasion unforgettable.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://www.facebook.com/officialRFGeventsplace"
                target="_blank"
                rel="noopener noreferrer"
                className="ev-btn ev-btn-pulse inline-flex cursor-pointer items-center gap-2.5 rounded-xl bg-[#C9A84C] px-7 py-3.5 text-base font-bold text-[#0A0A0A]"
              >
                <Facebook size={18} />
                Book Your Event
              </a>
              <a
                href="#services"
                className="ev-btn inline-flex cursor-pointer items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-6 py-3.5 text-base font-medium text-white/70 backdrop-blur-sm"
              >
                Explore Venue
                <ChevronRight size={16} />
              </a>
            </div>

            {/* Social proof */}
            <div className="mt-10 flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#0A0A0A] bg-gradient-to-br from-[#C9A84C]/30 to-[#A08030]/20"
                  >
                    <Users size={13} className="text-[#C9A84C]/70" />
                  </div>
                ))}
              </div>
              <div>
                <div className="text-sm font-semibold text-white/80">
                  9,500+ people love us
                </div>
                <div className="text-xs text-white/35">
                  Join our community on Facebook
                </div>
              </div>
            </div>
          </div>

          {/* Right: floating logo */}
          <div className="hidden md:flex md:items-center md:justify-center">
            <div className="relative">
              {/* Glow behind logo */}
              <div
                className="absolute -inset-8 rounded-full bg-[#C9A84C]/10 blur-3xl"
                style={{ animation: "evGlow 5s ease-in-out infinite" }}
              />
              {/* Logo ring decoration */}
              <div
                className="absolute -inset-6 rounded-3xl border border-[#C9A84C]/15"
                style={{ animation: "evBorderGlow 4s ease-in-out infinite" }}
              />
              <div
                className="absolute -inset-10 rounded-[2rem] border border-[#C9A84C]/8"
                style={{
                  animation:
                    "evBorderGlow 4s ease-in-out infinite 1s",
                }}
              />
              <Image
                src="/logos/rfg-events-place.jpg"
                alt="RFG Events Place Logo"
                width={220}
                height={220}
                className="relative rounded-2xl shadow-2xl ring-1 ring-[#C9A84C]/25"
                style={{ animation: "evLogoFloat 6s ease-in-out infinite" }}
              />
              {/* Sparkle decorations */}
              <div
                className="absolute -top-3 -right-3 text-[#C9A84C]"
                style={{ animation: "evSparkle 3s ease-in-out infinite" }}
              >
                <Sparkles size={16} />
              </div>
              <div
                className="absolute -bottom-2 -left-4 text-[#C9A84C]"
                style={{
                  animation: "evSparkle 3s ease-in-out infinite 1.5s",
                }}
              >
                <Sparkles size={12} />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute right-0 bottom-0 left-0 h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
      </section>

      {/* ═══ STATS RIBBON ═══ */}
      <section className="relative z-10 border-y border-[#C9A84C]/[0.06] bg-[#0A0A0A]">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-px md:grid-cols-4">
          {stats.map((s, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div className="group flex flex-col items-center gap-2 border-r border-[#C9A84C]/[0.06] px-6 py-10 last:border-r-0">
                <s.icon
                  size={22}
                  className="mb-1 text-[#C9A84C]/60 transition-colors group-hover:text-[#C9A84C]"
                />
                <div className="font-display text-3xl font-bold text-white md:text-4xl">
                  <CountUp end={s.value} suffix={s.suffix} />
                </div>
                <div className="text-xs tracking-wider text-white/35 uppercase">
                  {s.label}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ═══ SERVICES / EVENT TYPES ═══ */}
      <section id="services" className="relative py-24 md:py-32">
        {/* Subtle background texture */}
        <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #C9A84C 1px, transparent 0)", backgroundSize: "48px 48px" }} />

        <div className="relative mx-auto max-w-7xl px-6 md:px-12">
          <ScrollReveal>
            <div className="mb-16 text-center">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#C9A84C]/15 bg-[#C9A84C]/[0.05] px-4 py-1.5">
                <Gem size={13} className="text-[#C9A84C]" />
                <span className="text-[11px] font-bold tracking-[0.15em] text-[#C9A84C] uppercase">
                  Our Services
                </span>
              </div>
              <h2 className="font-display mb-4 text-3xl font-bold text-white md:text-5xl">
                Events We <span className="ev-shimmer-text">Specialize</span>{" "}
                In
              </h2>
              <p className="mx-auto max-w-2xl text-base text-white/40">
                From intimate gatherings to grand celebrations, our versatile
                venue transforms to match your vision.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-6 md:grid-cols-2">
            {services.map((svc, i) => (
              <ScrollReveal key={i} delay={i * 120} variant="fadeUp">
                <div className="ev-card group overflow-hidden rounded-2xl border border-[#C9A84C]/[0.08] bg-[#111111]">
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={svc.img}
                      alt={svc.title}
                      fill
                      className="ev-card-img object-cover transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/40 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className="ev-card-icon flex h-11 w-11 items-center justify-center rounded-xl border border-[#C9A84C]/15 bg-[#C9A84C]/[0.07] backdrop-blur-sm transition-all duration-300">
                        <svc.icon size={20} className="text-[#C9A84C]" />
                      </div>
                    </div>
                  </div>
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-display mb-2 text-xl font-bold text-white">
                      {svc.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-white/45">
                      {svc.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ GOLD DIVIDER ═══ */}
      <div className="ev-divider mx-auto max-w-4xl" />

      {/* ═══ AMENITIES ═══ */}
      <section className="relative py-24 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <ScrollReveal>
            <div className="mb-14 text-center">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#C9A84C]/15 bg-[#C9A84C]/[0.05] px-4 py-1.5">
                <Sparkles size={13} className="text-[#C9A84C]" />
                <span className="text-[11px] font-bold tracking-[0.15em] text-[#C9A84C] uppercase">
                  Venue Features
                </span>
              </div>
              <h2 className="font-display mb-4 text-3xl font-bold text-white md:text-5xl">
                Everything You{" "}
                <span className="ev-shimmer-text">Need</span>
              </h2>
              <p className="mx-auto max-w-xl text-base text-white/40">
                Our fully-equipped venue ensures your event runs flawlessly from
                start to finish.
              </p>
            </div>
          </ScrollReveal>

          <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-3">
            {amenities.map((a, i) => (
              <ScrollReveal key={i} delay={i * 80} variant="scale">
                <div className="ev-amenity flex flex-col items-center gap-3 rounded-2xl border border-[#C9A84C]/[0.06] bg-[#111111]/80 px-5 py-8 text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-[#C9A84C]/10 bg-[#C9A84C]/[0.05]">
                    <a.icon size={24} className="text-[#C9A84C]" />
                  </div>
                  <span className="text-sm font-medium text-white/65">
                    {a.label}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ GOLD DIVIDER ═══ */}
      <div className="ev-divider mx-auto max-w-4xl" />

      {/* ═══ HOW IT WORKS — TIMELINE ═══ */}
      <section className="relative py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <ScrollReveal>
            <div className="mb-14 text-center">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#C9A84C]/15 bg-[#C9A84C]/[0.05] px-4 py-1.5">
                <Clock size={13} className="text-[#C9A84C]" />
                <span className="text-[11px] font-bold tracking-[0.15em] text-[#C9A84C] uppercase">
                  How It Works
                </span>
              </div>
              <h2 className="font-display mb-4 text-3xl font-bold text-white md:text-5xl">
                Four Steps to Your{" "}
                <span className="ev-shimmer-text">Dream Event</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="mx-auto max-w-3xl space-y-4">
            {steps.map((step, i) => (
              <ScrollReveal key={i} delay={i * 120} variant="fadeLeft">
                <div className="ev-step group flex items-start gap-6 rounded-2xl border border-[#C9A84C]/[0.06] bg-[#111111]/60 px-6 py-6 md:px-8">
                  <div className="flex flex-col items-center">
                    <span className="ev-step-num font-display text-4xl font-bold text-white/10 transition-all duration-300 md:text-5xl">
                      {step.num}
                    </span>
                  </div>
                  <div className="flex-1 pt-1">
                    <div className="mb-1 flex items-center gap-3">
                      <step.icon
                        size={18}
                        className="text-[#C9A84C]/60 transition-colors group-hover:text-[#C9A84C]"
                      />
                      <h3 className="font-display text-lg font-bold text-white">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-sm leading-relaxed text-white/40">
                      {step.desc}
                    </p>
                    <div
                      className="ev-step-line mt-3 h-px w-10 bg-[#C9A84C]/20 transition-all duration-500"
                    />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ GALLERY MOSAIC ═══ */}
      <section className="relative py-24 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <ScrollReveal>
            <div className="mb-14 text-center">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#C9A84C]/15 bg-[#C9A84C]/[0.05] px-4 py-1.5">
                <Camera size={13} className="text-[#C9A84C]" />
                <span className="text-[11px] font-bold tracking-[0.15em] text-[#C9A84C] uppercase">
                  Gallery
                </span>
              </div>
              <h2 className="font-display mb-4 text-3xl font-bold text-white md:text-5xl">
                Moments That{" "}
                <span className="ev-shimmer-text">Shine</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
            {[
              { src: "/rfg-events-place/venue-1.jpg", alt: "Grand Ballroom", span: "md:col-span-2 md:row-span-2" },
              { src: "/rfg-events-place/event-xmas-473571.jpg", alt: "Wedding Setup", span: "" },
              { src: "/rfg-events-place/venue-3.jpg", alt: "Corporate Event", span: "" },
              { src: "/rfg-events-place/event-christening-473360.jpg", alt: "Dining Setup", span: "" },
              { src: "/rfg-events-place/event-birthday-500909.jpg", alt: "Celebration", span: "" },
            ].map((img, i) => (
              <ScrollReveal key={i} delay={i * 100} variant="scale">
                <div
                  className={`ev-gallery-item group relative overflow-hidden rounded-xl ${img.span}`}
                  style={{ minHeight: img.span ? "380px" : "200px" }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/80 via-transparent to-transparent" />
                  <div className="ev-gallery-overlay absolute inset-0 flex items-end justify-start p-4 opacity-0 transition-opacity duration-300">
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

      {/* ═══ GOLD DIVIDER ═══ */}
      <div className="ev-divider mx-auto max-w-4xl" />

      {/* ═══ TESTIMONIAL / SOCIAL PROOF ═══ */}
      <section className="relative py-24 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <Quote
                size={40}
                className="mx-auto mb-6 text-[#C9A84C]/25"
              />
              <blockquote className="font-display mb-6 text-2xl leading-relaxed font-medium text-white/80 italic md:text-3xl">
                &ldquo;The venue was absolutely stunning. RFG Events Place made
                our wedding dream come true — the team was so attentive and
                everything was perfect from setup to cleanup.&rdquo;
              </blockquote>
              <div className="flex items-center justify-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#C9A84C]/30 to-[#A08030]/20">
                  <Heart size={16} className="text-[#C9A84C]" />
                </div>
                <div className="text-left">
                  <div className="text-sm font-semibold text-white/70">
                    Happy Client
                  </div>
                  <div className="text-xs text-white/35">
                    Wedding Reception, 2024
                  </div>
                </div>
              </div>
              <div className="mt-8 flex items-center justify-center gap-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star
                    key={s}
                    size={18}
                    className="fill-[#C9A84C] text-[#C9A84C]"
                  />
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ LOCATION SPLIT ═══ */}
      <section className="relative py-24 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <ScrollReveal>
            <div className="overflow-hidden rounded-3xl border border-[#C9A84C]/10 bg-[#111111]">
              <div className="grid md:grid-cols-2">
                {/* Map / Image side */}
                <div className="relative min-h-[280px] md:min-h-[380px]">
                  <Image
                    src="/rfg-events-place/venue-2.jpg"
                    alt="RFG Events Place Venue"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#111111]/50 md:bg-gradient-to-r md:from-transparent md:to-[#111111]" />
                </div>
                {/* Info side */}
                <div className="flex flex-col justify-center px-8 py-10 md:px-12">
                  <div className="mb-4 flex items-center gap-2">
                    <MapPin size={18} className="text-[#C9A84C]" />
                    <span className="text-xs font-bold tracking-wider text-[#C9A84C] uppercase">
                      Find Us
                    </span>
                  </div>
                  <h3 className="font-display mb-3 text-2xl font-bold text-white md:text-3xl">
                    RFG Events Place
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-white/45">
                    VC2 Lot 11 Villa de Pring Subd, Santa Rosa, Laguna.
                    Conveniently located and easily accessible for your guests.
                  </p>
                  <div className="mb-6 space-y-2">
                    <div className="flex items-center gap-2 text-sm text-white/50">
                      <CheckCircle2 size={14} className="text-[#C9A84C]/60" />
                      Ample parking space
                    </div>
                    <div className="flex items-center gap-2 text-sm text-white/50">
                      <CheckCircle2 size={14} className="text-[#C9A84C]/60" />
                      Easy access from main road
                    </div>
                    <div className="flex items-center gap-2 text-sm text-white/50">
                      <CheckCircle2 size={14} className="text-[#C9A84C]/60" />
                      Near Santa Rosa city center
                    </div>
                  </div>
                  <a
                    href="https://www.facebook.com/officialRFGeventsplace"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ev-btn inline-flex w-fit cursor-pointer items-center gap-2 rounded-xl bg-[#C9A84C] px-6 py-3 text-sm font-bold text-[#0A0A0A]"
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
        {/* BG treatment */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, #C9A84C 1px, transparent 0)",
              backgroundSize: "32px 32px",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#0A0A0A]/95 to-[#0A0A0A]" />
        </div>

        {/* Gold orbs */}
        <div
          className="pointer-events-none absolute top-[20%] left-[15%] h-56 w-56 rounded-full bg-[#C9A84C]/10"
          style={{ animation: "evOrb 14s ease-in-out infinite, evGlow 7s ease-in-out infinite" }}
        />
        <div
          className="pointer-events-none absolute bottom-[20%] right-[10%] h-48 w-48 rounded-full bg-[#A08030]/8"
          style={{ animation: "evOrb 16s ease-in-out infinite reverse, evGlow 8s ease-in-out infinite 3s" }}
        />

        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <ScrollReveal variant="scale">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#C9A84C]/20 bg-[#C9A84C]/[0.06] px-5 py-2">
              <Gift size={14} className="text-[#C9A84C]" />
              <span className="text-xs font-bold tracking-[0.15em] text-[#C9A84C] uppercase">
                Your Dream Event Awaits
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h2 className="font-display mb-6 text-4xl font-bold text-white md:text-6xl">
              Ready to Create
              <br />
              <span className="ev-shimmer-text">Something Beautiful?</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="mx-auto mb-10 max-w-xl text-lg text-white/45">
              Whether it&apos;s a wedding, birthday, corporate event, or any
              special celebration — we&apos;re ready to make it extraordinary.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <a
              href="https://www.facebook.com/officialRFGeventsplace"
              target="_blank"
              rel="noopener noreferrer"
              className="ev-btn ev-btn-pulse inline-flex cursor-pointer items-center gap-3 rounded-2xl bg-[#C9A84C] px-10 py-5 text-lg font-bold text-[#0A0A0A] shadow-lg shadow-[#C9A84C]/15"
            >
              <Facebook size={22} />
              Book on Facebook Now
            </a>
            <div className="mt-5 text-xs text-white/30">
              Message us directly on Facebook for inquiries and reservations
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer className="border-t border-[#C9A84C]/[0.06] bg-[#0A0A0A] py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-5 px-6 md:flex-row md:justify-between md:px-12">
          <div className="flex items-center gap-3">
            <Image
              src="/logos/rfg-events-place.jpg"
              alt="RFG Events Place"
              width={32}
              height={32}
              className="rounded-lg ring-1 ring-[#C9A84C]/15"
            />
            <span className="font-display text-sm font-semibold text-white/60">
              RFG Events Place
            </span>
          </div>
          <p className="text-center text-xs text-white/25 md:text-right">
            VC2 Lot 11 Villa de Pring Subd, Santa Rosa, Laguna
            <br />
            &copy; {new Date().getFullYear()} RFG Events Place &middot; A Pring
            Group Company
          </p>
        </div>
      </footer>
    </main>
  );
}
