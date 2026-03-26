import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import {
  ArrowLeft,
  Facebook,
  MapPin,
  Wifi,
  AirVent,
  Car,
  Tv,
  ShowerHead,
  UtensilsCrossed,
  ChevronDown,
  Shield,
  Sparkles,
  BedDouble,
  Bath,
  Maximize,
  Clock,
  Phone,
  ExternalLink,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "AIRPND | Premium Rental Apartments — Santa Rosa, Laguna",
  description:
    "Modern design apartments with affordable prices. Short-term and monthly rental options in prime Santa Rosa, Laguna. Fully furnished, move-in ready.",
};

const amenities = [
  { icon: Wifi, label: "High-Speed WiFi" },
  { icon: AirVent, label: "Air Conditioning" },
  { icon: UtensilsCrossed, label: "Fully-Equipped Kitchen" },
  { icon: Car, label: "Parking Space" },
  { icon: Tv, label: "Smart TV" },
  { icon: ShowerHead, label: "Hot & Cold Shower" },
  { icon: Shield, label: "24/7 Security" },
  { icon: Sparkles, label: "Weekly Housekeeping" },
];

const units = [
  {
    name: "Studio Suite",
    size: "25 sqm",
    beds: "1 Bed",
    bath: "1 Bath",
    price: "₱1,500",
    period: "/ night",
  },
  {
    name: "One-Bedroom Deluxe",
    size: "35 sqm",
    beds: "1 Bed",
    bath: "1 Bath",
    price: "₱2,200",
    period: "/ night",
  },
  {
    name: "Two-Bedroom Premium",
    size: "45 sqm",
    beds: "2 Beds",
    bath: "1 Bath",
    price: "₱3,000",
    period: "/ night",
  },
];

const gallery = [
  { src: "/airpnd/living.jpg", alt: "Modern Living Room" },
  { src: "/airpnd/bedroom.jpg", alt: "Elegant Bedroom" },
  { src: "/airpnd/kitchen.jpg", alt: "Fully-Equipped Kitchen" },
  { src: "/airpnd/bathroom.jpg", alt: "Modern Bathroom" },
  { src: "/airpnd/interior.jpg", alt: "Interior Design" },
];

export default function AirpndPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#060606] text-white">
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes fadeInUpAirpnd {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes scaleReveal {
            from { opacity: 0; transform: scale(1.08); }
            to { opacity: 1; transform: scale(1); }
          }
          .hero-bg-zoom {
            animation: scaleReveal 1.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }
        `,
        }}
      />

      {/* ===== NAVIGATION ===== */}
      <nav className="fixed top-0 right-0 left-0 z-50 border-b border-white/[0.06] bg-black/60 backdrop-blur-xl">
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
            <span className="font-[family-name:var(--font-cursive)] text-lg font-semibold tracking-wide text-white">
              AIRPND
            </span>
            <a
              href="https://www.facebook.com/modernapartment2023"
              target="_blank"
              rel="noopener noreferrer"
              className="flex cursor-pointer items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs font-medium text-white/70 transition-all duration-300 hover:border-white/30 hover:text-white"
            >
              <Facebook className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Follow</span>
            </a>
          </div>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <section className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="hero-bg-zoom absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/airpnd/hero.jpg"
            alt="AIRPND Luxury Apartments"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40" />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          {/* Logo */}
          <div
            className="mb-8"
            style={{
              opacity: 0,
              animationName: "fadeInUpAirpnd",
              animationDuration: "0.8s",
              animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
              animationDelay: "0.3s",
              animationFillMode: "forwards",
            }}
          >
            <Image
              src="/logos/airpnd.jpg"
              alt="AIRPND Logo"
              width={80}
              height={80}
              className="mx-auto rounded-2xl shadow-2xl"
              priority
            />
          </div>

          {/* Location badge */}
          <div
            style={{
              opacity: 0,
              animationName: "fadeInUpAirpnd",
              animationDuration: "0.7s",
              animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
              animationDelay: "0.5s",
              animationFillMode: "forwards",
            }}
          >
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-1.5 text-[11px] font-medium tracking-[0.2em] text-white/60 uppercase backdrop-blur-sm">
              <MapPin className="h-3 w-3" />
              Santa Rosa, Laguna
            </span>
          </div>

          {/* Headline */}
          <h1
            className="mb-6 font-[family-name:var(--font-cursive)] text-5xl leading-[1.1] font-light italic tracking-wide text-white sm:text-6xl md:text-7xl lg:text-8xl"
            style={{
              opacity: 0,
              animationName: "fadeInUpAirpnd",
              animationDuration: "0.9s",
              animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
              animationDelay: "0.7s",
              animationFillMode: "forwards",
            }}
          >
            Modern Living,
            <br />
            Affordable Price
          </h1>

          {/* Decorative line */}
          <div
            className="mx-auto mb-6 h-px w-24 bg-gradient-to-r from-transparent via-white/40 to-transparent"
            style={{
              opacity: 0,
              animationName: "fadeInUpAirpnd",
              animationDuration: "0.6s",
              animationDelay: "0.9s",
              animationFillMode: "forwards",
            }}
          />

          {/* Subtitle */}
          <p
            className="mx-auto mb-10 max-w-lg text-base leading-relaxed text-white/50 sm:text-lg"
            style={{
              opacity: 0,
              animationName: "fadeInUpAirpnd",
              animationDuration: "0.7s",
              animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
              animationDelay: "1s",
              animationFillMode: "forwards",
            }}
          >
            Premium furnished apartments designed for modern living.
            Short-term and monthly stays in the heart of Laguna.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
            style={{
              opacity: 0,
              animationName: "fadeInUpAirpnd",
              animationDuration: "0.7s",
              animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
              animationDelay: "1.15s",
              animationFillMode: "forwards",
            }}
          >
            <a
              href="#units"
              className="group flex cursor-pointer items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:bg-white/90 hover:shadow-xl hover:shadow-white/10 active:scale-[0.97]"
            >
              Explore Units
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
            <a
              href="https://www.facebook.com/modernapartment2023"
              target="_blank"
              rel="noopener noreferrer"
              className="flex cursor-pointer items-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-white/40 hover:bg-white/[0.05] active:scale-[0.97]"
            >
              <Phone className="h-4 w-4" />
              Inquire Now
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          style={{
            opacity: 0,
            animationName: "fadeInUpAirpnd",
            animationDuration: "0.5s",
            animationDelay: "1.5s",
            animationFillMode: "forwards",
          }}
        >
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-white/30 transition-colors hover:text-white/50"
          >
            <span className="text-[10px] tracking-[0.2em] uppercase">
              Discover
            </span>
            <ChevronDown className="h-4 w-4 animate-bounce" />
          </a>
        </div>
      </section>

      {/* ===== ABOUT / OVERVIEW ===== */}
      <section
        id="about"
        className="relative border-t border-white/[0.06] px-6 py-24 md:py-32"
      >
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* Image */}
            <ScrollReveal variant="fadeRight">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/airpnd/living.jpg"
                  alt="Modern Living Space"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </ScrollReveal>

            {/* Text */}
            <ScrollReveal variant="fadeLeft" delay={150}>
              <div>
                <span className="mb-4 inline-block font-[family-name:var(--font-cursive)] text-sm italic tracking-[0.15em] text-white/40 uppercase">
                  About AIRPND
                </span>
                <h2 className="mb-6 font-[family-name:var(--font-cursive)] text-3xl font-light italic leading-tight text-white md:text-4xl lg:text-5xl">
                  Where Design
                  <br />
                  Meets Comfort
                </h2>
                <div className="mb-8 h-px w-16 bg-white/20" />
                <p className="mb-6 text-base leading-[1.8] text-white/50">
                  AIRPND offers premium rental apartments in Santa Rosa,
                  Laguna &mdash; designed with modern aesthetics and equipped
                  with everything you need. Whether you&apos;re staying for a
                  night or settling in for months, our fully furnished units
                  deliver luxury living at an accessible price point.
                </p>
                <p className="mb-8 text-base leading-[1.8] text-white/50">
                  Each unit is thoughtfully designed with contemporary interiors,
                  high-quality furnishings, and smart amenities that make you
                  feel right at home &mdash; without the premium price tag.
                </p>

                {/* Key stats */}
                <div className="grid grid-cols-3 gap-6">
                  {[
                    { value: "25–45", unit: "sqm", label: "Unit Sizes" },
                    { value: "100%", unit: "", label: "Furnished" },
                    { value: "24/7", unit: "", label: "Security" },
                  ].map((stat) => (
                    <div key={stat.label}>
                      <div className="font-[family-name:var(--font-cursive)] text-2xl font-semibold text-white">
                        {stat.value}
                        <span className="text-sm text-white/40">
                          {stat.unit}
                        </span>
                      </div>
                      <div className="text-[11px] tracking-[0.1em] text-white/30 uppercase">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== UNIT TYPES ===== */}
      <section
        id="units"
        className="relative border-t border-white/[0.06] bg-[#0a0a0a] px-6 py-24 md:py-32"
      >
        <div className="mx-auto max-w-6xl">
          <ScrollReveal variant="fadeUp">
            <div className="mb-16 text-center">
              <span className="mb-4 inline-block font-[family-name:var(--font-cursive)] text-sm italic tracking-[0.15em] text-white/40 uppercase">
                Our Residences
              </span>
              <h2 className="font-[family-name:var(--font-cursive)] text-3xl font-light italic text-white md:text-4xl lg:text-5xl">
                Choose Your Space
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid gap-6 md:grid-cols-3">
            {units.map((unit, i) => (
              <ScrollReveal key={unit.name} variant="fadeUp" delay={i * 120}>
                <div className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 transition-all duration-500 hover:border-white/15 hover:bg-white/[0.04]">
                  <h3 className="mb-4 font-[family-name:var(--font-cursive)] text-xl font-semibold italic text-white">
                    {unit.name}
                  </h3>
                  <div className="mb-6 h-px w-full bg-white/[0.06]" />

                  <div className="mb-8 grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2 text-sm text-white/40">
                      <Maximize className="h-4 w-4" />
                      {unit.size}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-white/40">
                      <BedDouble className="h-4 w-4" />
                      {unit.beds}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-white/40">
                      <Bath className="h-4 w-4" />
                      {unit.bath}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-white/40">
                      <Clock className="h-4 w-4" />
                      Flexible Stay
                    </div>
                  </div>

                  <div className="mb-6">
                    <span className="font-[family-name:var(--font-cursive)] text-3xl font-bold text-white">
                      {unit.price}
                    </span>
                    <span className="text-sm text-white/30">{unit.period}</span>
                  </div>

                  <a
                    href="https://www.facebook.com/modernapartment2023"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn flex w-full cursor-pointer items-center justify-center gap-2 rounded-full border border-white/15 py-3 text-sm font-medium text-white/70 transition-all duration-300 hover:border-white/30 hover:bg-white hover:text-black"
                  >
                    Inquire Now
                    <ExternalLink className="h-3.5 w-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5" />
                  </a>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal variant="fadeUp" delay={200}>
            <p className="mt-8 text-center text-sm text-white/25">
              Monthly rates available &mdash; contact us for special long-term
              pricing.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== AMENITIES ===== */}
      <section className="relative border-t border-white/[0.06] px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <ScrollReveal variant="fadeRight">
              <div>
                <span className="mb-4 inline-block font-[family-name:var(--font-cursive)] text-sm italic tracking-[0.15em] text-white/40 uppercase">
                  Premium Amenities
                </span>
                <h2 className="mb-6 font-[family-name:var(--font-cursive)] text-3xl font-light italic leading-tight text-white md:text-4xl lg:text-5xl">
                  Everything You Need,
                  <br />
                  Nothing You Don&apos;t
                </h2>
                <div className="mb-8 h-px w-16 bg-white/20" />
                <p className="text-base leading-[1.8] text-white/50">
                  Every AIRPND unit comes equipped with premium amenities
                  designed for your comfort. From high-speed WiFi to fully
                  equipped kitchens, we&apos;ve thought of everything so you can
                  focus on what matters.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fadeLeft" delay={150}>
              <div className="grid grid-cols-2 gap-4">
                {amenities.map((amenity) => (
                  <div
                    key={amenity.label}
                    className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] px-5 py-4 transition-all duration-300 hover:border-white/15 hover:bg-white/[0.05]"
                  >
                    <amenity.icon className="h-5 w-5 shrink-0 text-white/40" />
                    <span className="text-sm font-medium text-white/60">
                      {amenity.label}
                    </span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== GALLERY ===== */}
      <section className="relative border-t border-white/[0.06] bg-[#0a0a0a] px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal variant="fadeUp">
            <div className="mb-16 text-center">
              <span className="mb-4 inline-block font-[family-name:var(--font-cursive)] text-sm italic tracking-[0.15em] text-white/40 uppercase">
                Gallery
              </span>
              <h2 className="font-[family-name:var(--font-cursive)] text-3xl font-light italic text-white md:text-4xl lg:text-5xl">
                A Glimpse Inside
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((img, i) => (
              <ScrollReveal
                key={img.alt}
                variant="fadeUp"
                delay={i * 80}
                className={i === 0 ? "sm:col-span-2 sm:row-span-2" : ""}
              >
                <div className="group relative overflow-hidden rounded-2xl">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={img.src}
                    alt={img.alt}
                    className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                      i === 0 ? "aspect-[4/3]" : "aspect-[3/2]"
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute bottom-0 left-0 translate-y-4 px-6 pb-5 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <span className="font-[family-name:var(--font-cursive)] text-sm italic text-white/80">
                      {img.alt}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== LOCATION ===== */}
      <section className="relative border-t border-white/[0.06] px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <ScrollReveal variant="fadeRight">
              <div>
                <span className="mb-4 inline-block font-[family-name:var(--font-cursive)] text-sm italic tracking-[0.15em] text-white/40 uppercase">
                  Prime Location
                </span>
                <h2 className="mb-6 font-[family-name:var(--font-cursive)] text-3xl font-light italic leading-tight text-white md:text-4xl lg:text-5xl">
                  The Heart of
                  <br />
                  Santa Rosa
                </h2>
                <div className="mb-8 h-px w-16 bg-white/20" />
                <p className="mb-8 text-base leading-[1.8] text-white/50">
                  Strategically located in Santa Rosa, Laguna &mdash; one of the
                  fastest-growing cities in the Philippines. Enjoy easy access to
                  major commercial centers, restaurants, and transportation hubs.
                </p>

                <div className="space-y-4">
                  {[
                    "SM City Santa Rosa — 10 min drive",
                    "Nuvali — 15 min drive",
                    "Enchanted Kingdom — 10 min drive",
                    "SLEX / CALAX Access — 5 min drive",
                    "Paseo de Santa Rosa — 8 min drive",
                  ].map((place) => (
                    <div
                      key={place}
                      className="flex items-center gap-3 text-sm text-white/40"
                    >
                      <div className="h-1 w-1 rounded-full bg-white/30" />
                      {place}
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Location card */}
            <ScrollReveal variant="fadeLeft" delay={150}>
              <div className="relative aspect-square overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8">
                {/* Subtle grid pattern */}
                <div
                  className="absolute inset-0 opacity-[0.03]"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                  }}
                />
                <div className="relative flex h-full flex-col items-center justify-center text-center">
                  <MapPin className="mb-4 h-10 w-10 text-white/20" />
                  <h3 className="mb-2 font-[family-name:var(--font-cursive)] text-2xl font-semibold italic text-white">
                    Santa Rosa, Laguna
                  </h3>
                  <p className="mb-6 text-sm text-white/30">
                    The Lion City of South Luzon
                  </p>
                  <div className="h-px w-16 bg-white/10" />
                  <p className="mt-6 font-[family-name:var(--font-cursive)] text-lg italic text-white/20">
                    14.3147&deg; N, 121.1113&deg; E
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="relative border-t border-white/[0.06] bg-[#0a0a0a] px-6 py-24 md:py-32">
        <div
          className="pointer-events-none absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,0.02) 0%, transparent 70%)",
          }}
        />
        <div className="relative mx-auto max-w-3xl text-center">
          <ScrollReveal variant="fadeUp">
            <span className="mb-4 inline-block font-[family-name:var(--font-cursive)] text-sm italic tracking-[0.15em] text-white/40 uppercase">
              Ready to Move In?
            </span>
            <h2 className="mb-6 font-[family-name:var(--font-cursive)] text-4xl font-light italic leading-tight text-white md:text-5xl lg:text-6xl">
              Your New Home
              <br />
              Awaits
            </h2>
            <div className="mx-auto mb-8 h-px w-24 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <p className="mx-auto mb-10 max-w-md text-base leading-relaxed text-white/40">
              Contact us today to schedule a viewing or book your stay.
              Available for daily, weekly, and monthly rentals.
            </p>
          </ScrollReveal>

          <ScrollReveal variant="fadeUp" delay={100}>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="https://www.facebook.com/modernapartment2023"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex cursor-pointer items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition-all duration-300 hover:shadow-xl hover:shadow-white/10 active:scale-[0.97]"
              >
                <Facebook className="h-4 w-4" />
                Message Us on Facebook
              </a>
              <a
                href="https://www.facebook.com/modernapartment2023"
                target="_blank"
                rel="noopener noreferrer"
                className="flex cursor-pointer items-center gap-2 rounded-full border border-white/15 px-8 py-4 text-sm font-medium text-white/60 transition-all duration-300 hover:border-white/30 hover:text-white"
              >
                <Phone className="h-4 w-4" />
                Call for Inquiries
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== PART OF PRING GROUP ===== */}
      <section className="relative border-t border-white/[0.06] px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <ScrollReveal variant="scale">
            <Image
              src="/logos/pring-group.png"
              alt="Pring Group"
              width={48}
              height={48}
              className="mx-auto mb-5 rounded opacity-60"
            />
            <p className="mb-2 text-[11px] tracking-[0.2em] text-white/20 uppercase">
              A Member Of
            </p>
            <h3 className="mb-3 font-[family-name:var(--font-cursive)] text-xl font-semibold italic text-white/50">
              Pring Group of Companies
            </h3>
            <p className="mx-auto mb-6 max-w-md text-sm text-white/25">
              AIRPND is one of 16+ businesses under the Pring Group &mdash; a
              family-owned conglomerate building a legacy across the Philippines.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-white/30 transition-colors duration-300 hover:text-white/60"
            >
              Explore All Businesses
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="border-t border-white/[0.06] px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-3">
            <Image
              src="/logos/airpnd.jpg"
              alt="AIRPND"
              width={24}
              height={24}
              className="rounded"
            />
            <span className="font-[family-name:var(--font-cursive)] text-sm italic text-white/30">
              AIRPND
            </span>
          </div>
          <p className="text-[11px] text-white/20">
            &copy; {new Date().getFullYear()} AIRPND &mdash; A Pring Group
            Company. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
