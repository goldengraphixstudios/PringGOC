import Link from "next/link";
import type { Metadata, Viewport } from "next";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarRange,
  Cctv,
  Droplets,
  Facebook,
  Mail,
  Plus,
  ShowerHead,
  Wifi,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import BusinessNavArrows from "@/components/BusinessNavArrows";
import BusinessPopup from "@/components/BusinessPopup";
import { bp } from "@/lib/basePath";
import { GROUP_BUSINESS_LABEL, GROUP_EMAIL } from "@/data/site";
import { businesses } from "@/data/businesses";
import { airpndDisplay, airpndSans } from "./fonts";
import { AIRPND_FACEBOOK, stays, totalUnits } from "./stays";
import { AskAboutButton, Composer, InquiryProvider } from "./_components/Inquiry";
import Nav from "./_components/Nav";
import HeroBooker from "./_components/HeroBooker";
import Stays from "./_components/Stays";
import Neighborhood from "./_components/Neighborhood";
import BookingCurve from "./_components/BookingCurve";
import Slideshow, { type Slide } from "./_components/Slideshow";
import "./airpnd.css";

export const metadata: Metadata = {
  title: "AIRPND Rentals | Short & Monthly Stays in Santa Rosa and Cabuyao, Laguna",
  description:
    "Book a short or monthly stay at AIRPND Rentals: studio and one-bedroom units in Macabling and Golden City, Santa Rosa, and Mamatid, Cabuyao. 24/7 CCTV and free WiFi.",
  icons: { icon: "/airpnd/brand/mark.png" },
};

export const viewport: Viewport = {
  themeColor: "#f5eae4",
};

const bizIndex = businesses.findIndex((b) => b.slug === "airpnd");
const prevBiz = bizIndex > 0 ? businesses[bizIndex - 1] : null;
const nextBiz = bizIndex >= 0 && bizIndex < businesses.length - 1 ? businesses[bizIndex + 1] : null;

const amenities = [
  { icon: Wifi, title: "Free WiFi", body: "In every unit, at all three locations." },
  { icon: Cctv, title: "24/7 CCTV", body: "Cameras watch the premises around the clock." },
  { icon: Droplets, title: "Jetmatic water pump", body: "Steady water pressure, every shower." },
  { icon: ShowerHead, title: "Your own bathroom", body: "One private bathroom per unit." },
  { icon: CalendarRange, title: "Nightly or monthly", body: "Book a quick stay or settle in for the month." },
];

/** Interior-first slideshow for "The basics, done properly" (no bathroom shots, per the client). */
const unitSlides: Slide[] = [
  { src: "/airpnd/mamatid-8.jpg", alt: "Mamatid unit interior with warm cove lighting", place: "Mamatid", label: "One2011bedroom unit" },
  { src: "/airpnd/golden-city-4.jpg", alt: "Golden City open living space leading to the kitchen", place: "Golden City", label: "Open living space" },
  { src: "/airpnd/mamatid-5.jpg", alt: "Mamatid skylit corridor lined with unit doors", place: "Mamatid", label: "Skylit corridor" },
  { src: "/airpnd/golden-city-2.jpg", alt: "Golden City kitchen wall with wood-front cabinets", place: "Golden City", label: "Kitchen cabinets" },
  { src: "/airpnd/macabling-5.jpg", alt: "Macabling studio unit with glossy tile floor and window", place: "Macabling", label: "Studio unit" },
  { src: "/airpnd/mamatid-4.jpg", alt: "Mamatid unit with marble-look floor and kitchen counter", place: "Mamatid", label: "Kitchen counter" },
  { src: "/airpnd/macabling-4.jpg", alt: "Macabling upper-floor balcony corridor", place: "Macabling", label: "Balcony corridor" },
  { src: "/airpnd/golden-city-3.jpg", alt: "Golden City bedroom with window and wood-look floor", place: "Golden City", label: "Bedroom" },
];

const faqs = [
  {
    q: "Why aren't rates shown on the website?",
    a: "Rates depend on the unit, your dates and how long you stay. Send us your dates and we'll reply with the current rate.",
  },
  {
    q: "Can I stay for a month or longer?",
    a: "Yes. We take both short stays and monthly stays. Pick “Monthly” when you message us.",
  },
  {
    q: "Is it safe?",
    a: "All three locations have 24/7 CCTV on the premises.",
  },
  {
    q: "Which location should I choose?",
    a: "Macabling has the most units (studios). Golden City is our smallest building, with four one-bedroom units. Mamatid in Cabuyao has ten one-bedroom units around a garden courtyard. Not sure? Choose “Any” and we'll suggest what's free.",
  },
  {
    q: "How do I book?",
    a: "Use “Check availability” anywhere on this page. It writes the message for you; send it on Messenger or by email.",
  },
];

const marquee = [
  `${totalUnits} units`,
  "3 neighborhoods",
  "24/7 CCTV",
  "Free WiFi",
  "Short & monthly stays",
  "Santa Rosa",
  "Cabuyao",
];

export default function AirpndPage() {
  return (
    <div id="top" className={`ap ${airpndDisplay.variable} ${airpndSans.variable} relative min-h-screen overflow-x-clip`}>
      <InquiryProvider>
        <div className="ap-grain" aria-hidden="true" />
        <div className="ap-bizarrows">
          <BusinessNavArrows currentSlug="airpnd" theme="dark" />
        </div>
        <BusinessPopup
          config={{
            storageKey: "popup-airpnd-rentals",
            delay: 4200,
            headerBg: "linear-gradient(140deg, #7f3b19 0%, #ab582c 60%, #c27245 100%)",
            headerIcon: "",
            modalBg: "#fbf6f2",
            eyebrow: "NOW TAKING STAYS",
            eyebrowColor: "#7f3b19",
            title: "Need a place in Laguna?",
            titleColor: "#29261f",
            body: "Short or monthly stays in Santa Rosa and Cabuyao. Send your dates and we'll reply with what's open.",
            bodyColor: "#57524a",
            primaryCTA: "See the stays",
            primaryHref: "#stays",
            ctaBg: "#9e4d24",
            ctaColor: "#fbf6f2",
            secondaryCTA: "Message us on Facebook",
            secondaryHref: AIRPND_FACEBOOK,
            secondaryExternal: true,
            secondaryColor: "#55523b",
            badge: "3 locations",
            badgeBg: "rgba(126,122,93,0.16)",
            badgeColor: "#55523b",
            locationChips: stays.map((s) => s.name),
            accentLine: "#ab582c",
            logoSrc: "/airpnd/brand/logo.png",
          }}
        />

        <Nav />

        <main>
          {/* ═════════ HERO ═════════ */}
          <section className="relative px-5 pt-[100px] pb-14 sm:px-8 sm:pt-[110px] lg:px-20 lg:pt-[120px] lg:pb-24">
            {/* roofline clip path, in the photo's own coordinates */}
            <svg width="0" height="0" className="absolute" aria-hidden="true">
              <defs>
                <clipPath id="ap-roof-clip" clipPathUnits="objectBoundingBox">
                  <path d="M0,1 L0,0.36 C0.17,0.31 0.31,0.22 0.41,0.09 Q0.5,-0.03 0.585,0.1 C0.68,0.25 0.8,0.31 1,0.3 L1,1 Z" />
                </clipPath>
              </defs>
            </svg>

            <div className="mx-auto grid max-w-[1320px] items-end gap-10 md:grid-cols-12 md:gap-8 lg:gap-10">
              <div className="md:col-span-6 md:pb-4 lg:pb-28">
                <p className="ap-label ap-rise mb-7" style={{ animationDelay: "0.1s" }}>
                  AIRPND Rentals · Laguna
                </p>
                <h1 className="ap-display ap-h1 ap-rise mb-8" style={{ animationDelay: "0.2s" }}>
                  A place to land
                  <br />
                  in <span className="ap-accent">Laguna</span>.
                </h1>
                <p className="ap-lede ap-rise mb-10 max-w-[33rem]" style={{ animationDelay: "0.35s" }}>
                  Clean, secure studio and one-bedroom stays in Santa Rosa and Cabuyao. Book for a few nights or
                  settle in for the month.
                </p>
                <div className="ap-rise flex flex-wrap items-center gap-x-8 gap-y-4" style={{ animationDelay: "0.5s" }}>
                  <a href="#stays" className="ap-btn ap-btn-ghost">
                    Browse the stays
                    <ArrowRight className="ap-arrow h-4 w-4" />
                  </a>
                  <dl className="flex gap-8">
                    <div>
                      <dt className="text-[13px] font-semibold text-[var(--ap-ink-soft)]">Units</dt>
                      <dd className="ap-display text-[1.9rem] leading-none">{totalUnits}</dd>
                    </div>
                    <div>
                      <dt className="text-[13px] font-semibold text-[var(--ap-ink-soft)]">Locations</dt>
                      <dd className="ap-display text-[1.9rem] leading-none">{stays.length}</dd>
                    </div>
                  </dl>
                </div>
              </div>

              <div className="relative md:col-span-6">
                {/* the dot from the logo, hovering over the roof peak */}
                <span
                  className="ap-sun absolute top-[1%] left-[49.5%] z-10 h-[clamp(26px,3.6vw,46px)] w-[clamp(26px,3.6vw,46px)] -translate-x-1/2 rounded-full bg-[var(--ap-clay)]"
                  aria-hidden="true"
                />
                <div className="relative pt-[9%]">
                  <div className="relative">
                  <div className="ap-roof-photo relative aspect-[5/5.4] w-full overflow-hidden bg-[var(--ap-sand)] sm:aspect-[5/4.4] md:aspect-[5/5.8] lg:aspect-[5/5.1]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={bp("/airpnd/mamatid-1.jpg")}
                      alt="Garden courtyard with a stone lantern at AIRPND Mamatid"
                      className="ap-zoom-in h-full w-full object-cover"
                      fetchPriority="high"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[rgba(41,38,31,0.45)] via-transparent to-transparent" />
                    <div className="absolute right-5 bottom-5 left-5 flex items-end justify-between gap-4 text-[var(--ap-paper)]">
                      <p className="max-w-[16rem] text-[13.5px] leading-snug font-semibold sm:text-[14.5px]">
                        The garden courtyard at Mamatid, Cabuyao
                      </p>
                      <a
                        href="#stay-mamatid"
                        className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[var(--ap-paper)] text-[var(--ap-ink)] transition hover:scale-105"
                        aria-label="See the Mamatid stay"
                      >
                        <ArrowUpRight className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                  {/* roofline stroke, drawn on load */}
                  <svg
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                    className="ap-roof-line pointer-events-none absolute inset-0 h-full w-full overflow-visible"
                    aria-hidden="true"
                  >
                    <path
                      d="M0,36 C17,31 31,22 41,9 Q50,-3 58.5,10 C68,25 80,31 100,30"
                      pathLength={1}
                      fill="none"
                      stroke="var(--ap-clay)"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      transform="translate(0,-2.4)"
                    />
                  </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="ap-rise relative z-20 mx-auto mt-10 max-w-[1320px] lg:-mt-14" style={{ animationDelay: "0.7s" }}>
              <HeroBooker />
            </div>
          </section>

          {/* ═════════ MARQUEE ═════════ */}
          <div className="ap-belt bg-[var(--ap-sage-deep)] py-3 text-[var(--ap-paper)] sm:py-3.5" aria-hidden="true">
            <div className="ap-marquee">
              <div className="ap-marquee-track">
                {[...marquee, ...marquee].map((m, i) => (
                  <span
                    key={i}
                    className="flex items-center gap-5 px-2.5 text-[12px] font-semibold tracking-[0.2em] whitespace-nowrap text-[var(--ap-paper)] uppercase sm:gap-6 sm:px-3 sm:text-[13px]"
                  >
                    {m}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={bp("/airpnd/brand/mark-cream.png")} alt="" className="ap-belt-mark" />
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ═════════ STAYS ═════════ */}
          <section id="stays" className="scroll-mt-20 px-5 py-20 sm:px-8 sm:py-24 lg:px-20 md:py-36">
            <div className="mx-auto max-w-[1320px]">
              <ScrollReveal>
                <div className="mb-10 grid gap-6 lg:grid-cols-12 lg:items-end">
                  <div className="lg:col-span-7">
                    <p className="ap-label mb-5">The stays</p>
                    <h2 className="ap-display ap-h2">
                      Three addresses,
                      <br />
                      one way of <span className="ap-accent">hosting</span>.
                    </h2>
                  </div>
                  <p className="ap-lede lg:col-span-5">
                    All three are run by the same AIRPND team. Pick the neighborhood that fits your trip, then tap
                    any photo to look around.
                  </p>
                </div>
              </ScrollReveal>
              <Stays />
            </div>
          </section>

          {/* ═════════ INSIDE / AMENITIES ═════════ */}
          <section id="inside" className="scroll-mt-20 bg-[var(--ap-sand)] px-5 py-20 sm:px-8 sm:py-24 lg:px-20 md:py-36">
            <div className="mx-auto max-w-[1320px]">
              {/* Phones: heading → slideshow → list. Desktop: slideshow left, heading + list right. */}
              <div className="grid gap-8 sm:gap-10 lg:grid-cols-12 lg:grid-rows-[auto_1fr] lg:gap-x-14 lg:gap-y-0">
                <ScrollReveal className="lg:col-span-5 lg:col-start-8 lg:row-start-1 lg:pt-2">
                  <p className="ap-label mb-5">In every stay</p>
                  <h2 className="ap-display ap-h2">The basics, done properly.</h2>
                  <p className="ap-lede mt-5">
                    Nothing fancy, just the things that make a stay easy. Same standard at all three addresses.
                  </p>
                </ScrollReveal>

                <ScrollReveal className="lg:col-span-7 lg:col-start-1 lg:row-span-2 lg:row-start-1" variant="scale">
                  <Slideshow
                    slides={unitSlides}
                    className="aspect-[4/5] rounded-[24px] min-[480px]:aspect-[4/3] sm:rounded-[30px] lg:aspect-auto lg:min-h-[620px]"
                  />
                </ScrollReveal>

                <div className="lg:col-span-5 lg:col-start-8 lg:row-start-2">
                  <ul className="ap-amenity-list lg:mt-10">
                    {amenities.map((a, i) => (
                      <li key={a.title}>
                      <ScrollReveal delay={i * 70}>
                        <div className="ap-amenity">
                          <span className="ap-tile-icon !h-11 !w-11 shrink-0">
                            <a.icon className="h-5 w-5" strokeWidth={1.8} />
                          </span>
                          <div className="min-w-0">
                            <h3 className="ap-display text-[1.12rem] leading-tight sm:text-[1.25rem]">{a.title}</h3>
                            <p className="ap-body mt-0.5 text-[14.5px] leading-snug sm:text-[15px]">{a.body}</p>
                          </div>
                        </div>
                      </ScrollReveal>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* ═════════ NEIGHBORHOOD ═════════ */}
          <section id="neighborhood" className="scroll-mt-20 px-5 py-20 sm:px-8 sm:py-24 lg:px-20 md:py-36">
            <div className="mx-auto max-w-[1320px]">
              <ScrollReveal>
                <div className="mb-12 grid gap-6 lg:grid-cols-12 lg:items-end">
                  <div className="lg:col-span-7">
                    <p className="ap-label mb-5">The neighborhood</p>
                    <h2 className="ap-display ap-h2">
                      South of Manila,
                      <br />
                      close to <span className="ap-accent">everything</span>.
                    </h2>
                  </div>
                  <p className="ap-lede lg:col-span-5">
                    Santa Rosa and Cabuyao sit along SLEX, with Enchanted Kingdom, Nuvali and the malls of Santa Rosa
                    nearby. Pick a location to see it on the map.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <Neighborhood />
              </ScrollReveal>
            </div>
          </section>

          {/* ═════════ HOW TO BOOK ═════════ */}
          <section id="how" className="scroll-mt-20 border-t border-[rgba(126,122,93,0.2)] bg-[var(--ap-paper)] px-5 py-20 sm:px-8 sm:py-24 lg:px-20 md:py-36">
            <div className="mx-auto max-w-[1320px]">
              <ScrollReveal>
                <div className="mb-10 max-w-[46rem] md:mb-4">
                  <p className="ap-label mb-5">How booking works</p>
                  <h2 className="ap-display ap-h2">Three steps to your key.</h2>
                </div>
              </ScrollReveal>
              <BookingCurve />
            </div>
          </section>

          {/* ═════════ FAQ ═════════ */}
          <section id="faq" className="scroll-mt-20 px-5 py-20 sm:px-8 sm:py-24 lg:px-20 md:py-36">
            <div className="mx-auto grid max-w-[1320px] gap-12 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <ScrollReveal>
                  <p className="ap-label mb-5">Good to know</p>
                  <h2 className="ap-display ap-h2 mb-6">Questions, answered.</h2>
                  <p className="ap-body mb-8 max-w-[22rem]">Something else on your mind? Ask us directly.</p>
                  <AskAboutButton className="ap-btn ap-btn-ghost">
                    Ask a question
                    <ArrowRight className="ap-arrow h-4 w-4" />
                  </AskAboutButton>
                </ScrollReveal>
              </div>
              <div className="lg:col-span-8">
                {faqs.map((f) => (
                  <details key={f.q} name="ap-faq" className="ap-faq">
                    <summary>
                      {f.q}
                      <span className="ap-faq-icon" aria-hidden="true">
                        <Plus className="h-4 w-4" />
                      </span>
                    </summary>
                    <p className="ap-faq-body">{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>

          {/* ═════════ BOOK / COMPOSER ═════════ */}
          <section id="book" className="scroll-mt-20 px-2 pb-2 sm:px-5 sm:pb-5">
            <div className="relative mx-auto max-w-[1400px] overflow-hidden rounded-[28px] bg-[var(--ap-clay)] px-3 py-14 sm:rounded-[36px] sm:px-10 sm:py-16 md:py-24">
              {/* oversized mark, cropped, as texture */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={bp("/airpnd/brand/mark-cream.png")}
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute -top-10 -right-28 w-[380px] max-w-none opacity-[0.09] select-none sm:-top-16 sm:-right-24 sm:w-[620px]"
              />
              <div className="relative mx-auto max-w-[1200px]">
                <ScrollReveal>
                  <div className="mb-10 grid gap-5 px-2 text-[var(--ap-paper)] sm:mb-12 sm:gap-6 sm:px-0 lg:grid-cols-12 lg:items-end">
                    <div className="lg:col-span-7">
                      <p className="mb-5 text-[12.5px] font-bold tracking-[0.26em] text-[rgba(251,246,242,0.85)] uppercase">
                        Check availability
                      </p>
                      <h2 className="ap-display ap-h2 !text-[var(--ap-paper)]">Tell us your dates.</h2>
                    </div>
                    <p className="text-[1.12rem] leading-relaxed text-[rgba(251,246,242,0.9)] lg:col-span-5">
                      Fill this in and we&apos;ll write the message for you. Send it on Messenger or by email, and we
                      reply with what&apos;s open.
                    </p>
                  </div>
                </ScrollReveal>
                <div className="rounded-[22px] bg-[var(--ap-paper)] p-4 sm:rounded-[28px] sm:p-8">
                  <Composer tone="inline" idPrefix="inline" />
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* ═════════ FOOTER ═════════ */}
        <footer className="ap-safe-bottom px-5 pt-16 sm:px-8 sm:pt-20 sm:pb-10 lg:px-20">
          <div className="mx-auto max-w-[1320px]">
            <div className="grid gap-10 border-b border-[rgba(41,38,31,0.12)] pb-12 sm:grid-cols-2 sm:gap-12 sm:pb-14 md:grid-cols-12">
              <div className="sm:col-span-2 md:col-span-5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={bp("/airpnd/brand/logo.png")} alt="AIRPND Rentals" className="mb-6 h-24 w-auto sm:h-28" />
                <p className="ap-body max-w-[22rem]">
                  Short and monthly stays in Santa Rosa and Cabuyao, Laguna.
                </p>
              </div>
              <div className="md:col-span-3">
                <p className="ap-label mb-3">Stays</p>
                <ul className="grid">
                  {stays.map((s) => (
                    <li key={s.id}>
                      <a href={`#stay-${s.id}`} className="inline-flex min-h-[44px] items-center text-[16px] font-medium text-[var(--ap-ink)] transition hover:text-[var(--ap-clay)]">
                        {s.name}, {s.city}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:col-span-4">
                <p className="ap-label mb-3">Get in touch</p>
                <ul className="grid">
                  <li>
                    <a
                      href={AIRPND_FACEBOOK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[44px] items-center gap-2.5 text-[16px] font-medium text-[var(--ap-ink)] transition hover:text-[var(--ap-clay)]"
                    >
                      <Facebook className="h-4 w-4" /> AIRPND on Facebook
                    </a>
                  </li>
                  <li>
                    <a
                      href={`mailto:${GROUP_EMAIL}?subject=${encodeURIComponent("AIRPND stay inquiry")}`}
                      className="inline-flex min-h-[44px] items-center gap-2.5 text-[16px] font-medium break-all text-[var(--ap-ink)] transition hover:text-[var(--ap-clay)]"
                    >
                      <Mail className="h-4 w-4 shrink-0" /> {GROUP_EMAIL}
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {prevBiz || nextBiz ? (
              <nav aria-label="Other Pring Group businesses" className="grid grid-cols-2 gap-3 border-b border-[rgba(41,38,31,0.12)] py-6 sm:max-w-xl lg:hidden">
                {prevBiz ? (
                  <Link href={`/business/${prevBiz.slug}`} prefetch={false} className="flex min-h-[64px] flex-col justify-center rounded-[18px] bg-[var(--ap-paper)] px-4 py-3">
                    <span className="text-[12.5px] font-semibold text-[var(--ap-ink-soft)]">← Previous</span>
                    <span className="text-[15px] font-semibold leading-tight text-[var(--ap-ink)]">{prevBiz.name}</span>
                  </Link>
                ) : <span />}
                {nextBiz ? (
                  <Link href={`/business/${nextBiz.slug}`} prefetch={false} className="flex min-h-[64px] flex-col items-end justify-center rounded-[18px] bg-[var(--ap-paper)] px-4 py-3 text-right">
                    <span className="text-[12.5px] font-semibold text-[var(--ap-ink-soft)]">Next →</span>
                    <span className="text-[15px] font-semibold leading-tight text-[var(--ap-ink)]">{nextBiz.name}</span>
                  </Link>
                ) : null}
              </nav>
            ) : null}

            <div className="flex flex-col items-start justify-between gap-5 pt-8 md:flex-row md:items-center">
              <Link href="/" className="group inline-flex items-center gap-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={bp("/logos/pring-group.png")} alt="" className="h-9 w-9 rounded" />
                <span className="text-[15px] text-[var(--ap-ink-soft)]">
                  A <span className="font-semibold text-[var(--ap-ink)] group-hover:text-[var(--ap-clay)]">Pring Group</span>{" "}
                  company, one of {GROUP_BUSINESS_LABEL} family businesses
                </span>
              </Link>
              <p className="text-[14px] text-[var(--ap-ink-soft)]">
                © {new Date().getFullYear()} AIRPND Rentals. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </InquiryProvider>
    </div>
  );
}
