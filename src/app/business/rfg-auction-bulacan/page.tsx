import { Metadata } from "next";
import Link from "next/link";
import Image from "@/components/Img";
import ScrollReveal from "@/components/ScrollReveal";
import CountUp from "@/components/CountUp";
import BusinessNavArrows from "@/components/BusinessNavArrows";
import BusinessPopup from "@/components/BusinessPopup";
import {
  Gavel,
  Package,
  Globe,
  TrendingUp,
  ShieldCheck,
  Truck,
  ArrowLeft,
  ArrowRight,
  MapPin,
  Users,
  Zap,
  Facebook,
  Flame,
  Timer,
  Warehouse,
  Tag,
  Star,
  ChevronDown,
  BadgeCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "RFG Auction House Bulacan — Meycauayan's Best Surplus Destination",
  description:
    "Quality surplus items, regular auction events, and brand new products at unbeatable prices. Brgy. Pajo, Meycauayan, Bulacan.",
};

export default function RFGAuctionBulacanPage() {
  const services = [
    {
      icon: Gavel,
      title: "Live Auction Events",
      desc: "Regular scheduled auctions with massive crowd energy — bid live and win quality items at rock-bottom prices.",
      stat: "Weekly",
    },
    {
      icon: Package,
      title: "Brand New Products",
      desc: "Factory-direct merchandise and overstock items. Same quality, fraction of the mall price.",
      stat: "500+",
    },
    {
      icon: Globe,
      title: "Imported Surplus",
      desc: "Curated surplus from UK and Japan — premium quality electronics, appliances, and furniture.",
      stat: "Global",
    },
    {
      icon: Truck,
      title: "Wholesale Supply",
      desc: "Bulk pricing for resellers and sari-sari store owners. Build your inventory for less.",
      stat: "Bulk",
    },
  ];

  const processSteps = [
    {
      num: "01",
      title: "Visit Our Warehouse",
      desc: "Walk in to Brgy. Pajo, Meycauayan. Browse thousands of surplus items across our massive showroom floor.",
      icon: Warehouse,
    },
    {
      num: "02",
      title: "Find Your Deal",
      desc: "From electronics to furniture — everything is priced to move. Spot the items, check the quality.",
      icon: Tag,
    },
    {
      num: "03",
      title: "Bid or Buy",
      desc: "Join our live auction for the biggest savings, or purchase brand new items outright at warehouse prices.",
      icon: Gavel,
    },
    {
      num: "04",
      title: "Take It Home",
      desc: "Pay, load up, and go. We also offer delivery for large items across Bulacan and Metro Manila.",
      icon: Truck,
    },
  ];

  const trustBadges = [
    { icon: ShieldCheck, text: "Legit & DTI Registered" },
    { icon: Users, text: "12,000+ Followers" },
    { icon: Star, text: "Top-Rated in Bulacan" },
    { icon: MapPin, text: "Brgy. Pajo, Meycauayan" },
    { icon: Flame, text: "Weekly Auction Events" },
    { icon: BadgeCheck, text: "Quality Guaranteed" },
  ];

  const stats = [
    { value: 12000, suffix: "+", label: "Followers" },
    { value: 500, suffix: "+", label: "Items Weekly" },
    { value: 73, suffix: "+", label: "Store Visits" },
    { value: 1, suffix: "", label: "Mega Warehouse" },
  ];

  return (
    <main className="relative overflow-hidden bg-[#0A0A0A]">
      <BusinessNavArrows currentSlug="rfg-auction-bulacan" />
      <BusinessPopup config={{
        storageKey: "popup-rfg-auction-bulacan",
        delay: 2000,
        headerBg: "linear-gradient(135deg, #080200 0%, #2A0C00 50%, #904818 100%)",
        headerIcon: "📅",
        modalBg: "#120600",
        eyebrow: "BULACAN AUCTION",
        eyebrowColor: "#E87030",
        title: "Meycauayan\u2019s Friday auction is waiting.",
        titleColor: "#F5E8D8",
        body: "Check branch schedule, directions, and what to expect before visiting the next live auction in Bulacan.",
        bodyColor: "rgba(245,232,216,0.48)",
        primaryCTA: "View Bulacan Schedule",
        primaryHref: "#schedule",
        ctaBg: "#904818",
        ctaColor: "#F5E8D8",
        secondaryCTA: "Get Directions",
        secondaryColor: "rgba(232,112,48,0.45)",
        badge: "Every Friday",
        badgeBg: "rgba(144,72,24,0.3)",
        badgeColor: "#E87030",
        logoSrc: "/logos/rfg-auction-bulacan.jpg",
      }} />
      <style
        dangerouslySetInnerHTML={{
          __html: `
@keyframes rfbScanline {
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100vh); }
}
@keyframes rfbPulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(232,101,10,0.4); }
  50% { box-shadow: 0 0 30px 8px rgba(232,101,10,0.15); }
}
@keyframes rfbFloat {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  33% { transform: translateY(-14px) rotate(0.5deg); }
  66% { transform: translateY(6px) rotate(-0.3deg); }
}
@keyframes rfbReveal {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes rfbLineGrow {
  from { transform: scaleX(0); }
  to { transform: scaleX(1); }
}
@keyframes rfbGlow {
  0%, 100% { opacity: 0.4; }
  50% { opacity: 0.8; }
}
@keyframes rfbBorderTrace {
  0%, 100% { background-position: 0% 0%; }
  100% { background-position: 200% 0%; }
}
.rfb-hero-content > * {
  opacity: 0;
  animation: rfbReveal 0.7s cubic-bezier(0.16,1,0.3,1) forwards;
}
.rfb-hero-content > *:nth-child(1) { animation-delay: 0.2s; }
.rfb-hero-content > *:nth-child(2) { animation-delay: 0.35s; }
.rfb-hero-content > *:nth-child(3) { animation-delay: 0.5s; }
.rfb-hero-content > *:nth-child(4) { animation-delay: 0.65s; }
.rfb-hero-content > *:nth-child(5) { animation-delay: 0.8s; }
.rfb-hero-content > *:nth-child(6) { animation-delay: 0.95s; }
.rfb-card {
  transition: transform 0.35s cubic-bezier(0.16,1,0.3,1), box-shadow 0.35s ease, border-color 0.35s ease;
}
.rfb-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 50px rgba(232,101,10,0.1);
  border-color: rgba(232,101,10,0.3);
}
.rfb-step-card {
  transition: all 0.4s cubic-bezier(0.16,1,0.3,1);
}
.rfb-step-card:hover {
  transform: translateY(-4px) scale(1.02);
  background: rgba(232,101,10,0.06);
  border-color: rgba(232,101,10,0.25);
}
.rfb-cta-btn {
  position: relative;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.16,1,0.3,1);
}
.rfb-cta-btn::after {
  content: '';
  position: absolute;
  inset: -2px;
  border-radius: inherit;
  background: linear-gradient(90deg, transparent, rgba(232,101,10,0.4), transparent);
  background-size: 200% 100%;
  animation: rfbBorderTrace 3s linear infinite;
  z-index: -1;
  opacity: 0;
  transition: opacity 0.3s;
}
.rfb-cta-btn:hover::after { opacity: 1; }
.rfb-cta-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 40px rgba(232,101,10,0.3);
}
@media (prefers-reduced-motion: reduce) {
  .rfb-hero-content > * { opacity: 1; animation: none; }
  .rfb-cta-btn::after { animation: none; }
}
`,
        }}
      />

      {/* NAV */}
      <nav className="fixed top-0 right-0 left-0 z-50 border-b border-white/[0.06] bg-[#0A0A0A]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
          <Link href="/" className="flex cursor-pointer items-center gap-2 text-sm font-medium text-white/60 transition-colors hover:text-[#E8650A]">
            <ArrowLeft size={16} />
            <span className="hidden sm:inline">Back to Pring Group</span>
          </Link>
          <div className="flex items-center gap-3">
            <Image src="/logos/rfg-auction-bulacan.jpg" alt="RFG Auction House Bulacan" width={36} height={36} className="rounded-lg" />
            <div className="hidden sm:block">
              <div className="text-sm font-bold text-white">RFG Auction House</div>
              <div className="text-[10px] tracking-wider text-[#E8650A] uppercase">Bulacan Branch</div>
            </div>
          </div>
          <a href="https://www.facebook.com/RFGauctionhousebulacan" target="_blank" rel="noopener noreferrer" className="rfb-cta-btn inline-flex cursor-pointer items-center gap-2 rounded-lg bg-[#E8650A] px-4 py-2 text-sm font-bold text-white">
            <Facebook size={16} />
            <span className="hidden sm:inline">Visit Page</span>
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden pt-16">
        <div className="absolute inset-0">
          <Image src="/rfg-auction-bulacan/hero.jpg" alt="Warehouse" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/90 to-[#0A0A0A]/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
        </div>
        <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(232,101,10,0.15) 2px, rgba(232,101,10,0.15) 4px)" }} />
        <div className="pointer-events-none absolute left-0 right-0 h-20 opacity-[0.04]" style={{ background: "linear-gradient(transparent, rgba(232,101,10,0.5), transparent)", animation: "rfbScanline 8s linear infinite" }} />
        <div className="absolute top-0 bottom-0 left-0 w-1 bg-gradient-to-b from-transparent via-[#E8650A]/60 to-transparent" />

        <div className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-8 px-6 md:grid-cols-2 md:px-12">
          <div className="rfb-hero-content py-20">
            <div className="mb-6 inline-flex items-center gap-2 rounded border border-[#E8650A]/30 bg-[#E8650A]/10 px-4 py-1.5 text-[11px] font-bold tracking-[0.2em] text-[#E8650A] uppercase">
              <MapPin size={12} /> Brgy. Pajo, Meycauayan, Bulacan
            </div>
            <h1 className="mb-6 text-4xl leading-[1.05] font-black tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Bulacan&apos;s<br /><span className="text-[#E8650A]">Best Surplus</span><br />Destination
            </h1>
            <div className="mb-6 h-1 w-24 origin-left bg-gradient-to-r from-[#E8650A] to-[#F09030]" style={{ animation: "rfbLineGrow 1s cubic-bezier(0.16,1,0.3,1) 0.6s both" }} />
            <p className="mb-8 max-w-lg text-lg leading-relaxed text-white/60">
              Quality imported surplus from UK and Japan. Brand new products, regular auction events, and wholesale supply — all under one massive warehouse roof.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a href="https://www.facebook.com/RFGauctionhousebulacan" target="_blank" rel="noopener noreferrer" className="rfb-cta-btn group inline-flex cursor-pointer items-center gap-3 rounded-xl bg-[#E8650A] px-7 py-4 text-base font-bold text-white shadow-xl shadow-[#E8650A]/20">
                <Facebook size={20} /> Visit Us on Facebook <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#how-it-works" className="inline-flex cursor-pointer items-center gap-2 rounded-xl border border-white/15 px-6 py-4 text-sm font-semibold text-white/80 transition-all hover:border-[#E8650A]/30 hover:text-white">
                How It Works <ChevronDown size={14} />
              </a>
            </div>
            <div className="mt-16 flex items-center gap-3 text-white/30">
              <div className="h-8 w-px bg-gradient-to-b from-[#E8650A]/50 to-transparent" />
              <span className="text-[10px] tracking-[0.2em] uppercase">Scroll to explore</span>
            </div>
          </div>
          <div className="hidden items-center justify-center md:flex">
            <div className="relative" style={{ animation: "rfbFloat 5s ease-in-out infinite" }}>
              <div className="absolute -inset-8 rounded-full opacity-40" style={{ background: "radial-gradient(circle, rgba(232,101,10,0.2) 0%, transparent 70%)", animation: "rfbGlow 4s ease-in-out infinite" }} />
              <Image src="/logos/rfg-auction-bulacan.jpg" alt="RFG Auction House Bulacan" width={280} height={280} className="relative z-10 rounded-3xl border-2 border-[#E8650A]/20 shadow-2xl shadow-[#E8650A]/10" priority />
              <div className="absolute -top-3 -right-3 h-6 w-6 border-t-2 border-r-2 border-[#E8650A]/40 rounded-tr-lg" />
              <div className="absolute -bottom-3 -left-3 h-6 w-6 border-b-2 border-l-2 border-[#E8650A]/40 rounded-bl-lg" />
            </div>
          </div>
        </div>
        <div className="absolute right-0 bottom-0 left-0 h-24">
          <svg viewBox="0 0 1440 96" fill="none" className="absolute bottom-0 w-full" preserveAspectRatio="none">
            <polygon points="0,96 1440,96 1440,0" fill="#0A0A0A" />
          </svg>
        </div>
      </section>

      {/* TRUST BADGES */}
      <section className="relative z-10 border-y border-white/[0.04] bg-[#0A0A0A] py-4">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-4 px-4 md:gap-6">
          {trustBadges.map((badge) => (
            <div key={badge.text} className="flex items-center gap-2 rounded-full border border-white/[0.06] px-4 py-2 text-[11px] font-medium text-white/50">
              <badge.icon size={13} className="text-[#E8650A]" /> {badge.text}
            </div>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="relative z-10 bg-gradient-to-r from-[#0F0F0F] via-[#141414] to-[#0F0F0F] py-12">
        <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(232,101,10,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(232,101,10,0.5) 1px, transparent 1px)", backgroundSize: "80px 80px" }} />
        <div className="relative mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-8 px-6">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} variant="scale" delay={i * 120}>
              <div className="text-center">
                <div className="text-3xl font-black text-[#E8650A] md:text-4xl">
                  <CountUp end={stat.value} suffix={stat.suffix} duration={2500} className="text-[#E8650A]" />
                </div>
                <div className="mt-1 text-[10px] font-semibold tracking-[0.2em] text-white/40 uppercase">{stat.label}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative z-10 bg-[#0A0A0A] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal variant="fadeUp">
            <div className="mb-16 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <span className="mb-3 inline-block text-[11px] font-bold tracking-[0.25em] text-[#E8650A] uppercase">What We Offer</span>
                <h2 className="text-3xl font-black leading-tight text-white md:text-4xl">Premium Surplus.<br /><span className="text-white/40">Warehouse Prices.</span></h2>
              </div>
              <p className="max-w-sm text-sm leading-relaxed text-white/40">Everything you need at prices that make sense. From imported UK goods to Japan surplus — all quality-checked.</p>
            </div>
          </ScrollReveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((svc, i) => (
              <ScrollReveal key={svc.title} variant="fadeUp" delay={i * 100}>
                <div className="rfb-card group relative h-full rounded-2xl border border-white/[0.06] bg-[#111111] p-6">
                  <div className="absolute top-4 right-4 rounded-full bg-[#E8650A]/10 px-3 py-1 text-[10px] font-bold text-[#E8650A]">{svc.stat}</div>
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-[#E8650A]/20 bg-[#E8650A]/5 text-[#E8650A] transition-all duration-300 group-hover:bg-[#E8650A]/10 group-hover:shadow-lg group-hover:shadow-[#E8650A]/10">
                    <svc.icon size={24} />
                  </div>
                  <h3 className="mb-2 text-base font-bold text-white">{svc.title}</h3>
                  <p className="text-sm leading-relaxed text-white/40">{svc.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="relative z-10 overflow-hidden bg-[#0F0F0F] px-6 py-20 md:py-28">
        <div className="absolute inset-0"><Image src="/rfg-auction-bulacan/warehouse.jpg" alt="Warehouse" fill className="object-cover opacity-[0.04]" /></div>
        <div className="relative mx-auto max-w-5xl">
          <ScrollReveal variant="fadeUp">
            <div className="mb-16 text-center">
              <span className="mb-3 inline-block text-[11px] font-bold tracking-[0.25em] text-[#E8650A] uppercase">The Process</span>
              <h2 className="text-3xl font-black text-white md:text-4xl">Walk In. <span className="text-[#E8650A]">Win Big.</span> Walk Out.</h2>
            </div>
          </ScrollReveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => (
              <ScrollReveal key={step.num} variant="fadeUp" delay={i * 120}>
                <div className="rfb-step-card relative rounded-2xl border border-white/[0.06] bg-[#0A0A0A]/80 p-6">
                  <div className="mb-4 font-mono text-5xl font-black text-[#E8650A]/15">{step.num}</div>
                  <step.icon size={20} className="mb-3 text-[#E8650A]" />
                  <h3 className="mb-2 text-sm font-bold text-white">{step.title}</h3>
                  <p className="text-[13px] leading-relaxed text-white/40">{step.desc}</p>
                  {i < 3 && <div className="absolute -right-3 top-1/2 hidden h-px w-6 bg-gradient-to-r from-[#E8650A]/30 to-transparent lg:block" />}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="relative z-10 bg-[#0A0A0A] py-20">
        <div className="mx-auto max-w-6xl px-6">
          <ScrollReveal variant="fadeUp">
            <div className="mb-12 text-center">
              <span className="mb-3 inline-block text-[11px] font-bold tracking-[0.25em] text-[#E8650A] uppercase">Inside the Warehouse</span>
              <h2 className="text-3xl font-black text-white md:text-4xl">See What&apos;s <span className="text-[#E8650A]">In Stock</span></h2>
            </div>
          </ScrollReveal>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { src: "/rfg-auction-bulacan/warehouse.jpg", label: "Warehouse Floor", tag: "1000+ sqm" },
              { src: "/rfg-auction-bulacan/surplus.jpg", label: "Surplus Collection", tag: "UK & Japan" },
              { src: "/rfg-auction-bulacan/auction.jpg", label: "Auction Day", tag: "Live Bidding" },
              { src: "/rfg-auction-bulacan/deals.jpg", label: "Crowd Favorites", tag: "Best Sellers" },
              { src: "/rfg-auction-bulacan/industrial.jpg", label: "Premium Quality", tag: "Imported" },
              { src: "/rfg-auction-bulacan/hero.jpg", label: "The Showroom", tag: "Walk In" },
            ].map((img, i) => (
              <ScrollReveal key={img.label} variant="scale" delay={i * 80}>
                <div className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-white/[0.04]">
                  <Image src={img.src} alt={img.label} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute top-3 right-3 rounded-full bg-[#E8650A]/90 px-3 py-1 text-[10px] font-bold text-white">{img.tag}</div>
                  <div className="absolute right-4 bottom-4 left-4"><div className="text-sm font-bold text-white">{img.label}</div></div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="relative z-10 overflow-hidden border-y border-white/[0.04] bg-[#0F0F0F] px-6 py-16 md:py-20">
        <div className="relative mx-auto max-w-4xl text-center">
          <ScrollReveal variant="fadeUp">
            <div className="mb-6 flex items-center justify-center gap-1">
              {[...Array(5)].map((_, i) => (<Star key={i} size={18} className="fill-[#E8650A] text-[#E8650A]" />))}
            </div>
            <blockquote className="mb-6 text-xl leading-relaxed font-medium text-white/80 md:text-2xl">
              &ldquo;Sobrang sulit dito! Quality pa ng mga items na nabili namin. Lagi kaming bumabalik every auction day. Solid!&rdquo;
            </blockquote>
            <div className="text-sm text-white/40">— Trusted by repeat bidders and walk-in buyers across Bulacan</div>
          </ScrollReveal>
        </div>
      </section>

      {/* LOCATION */}
      <section className="relative z-10 bg-[#0A0A0A] px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <ScrollReveal variant="fadeUp">
            <div className="overflow-hidden rounded-2xl border border-white/[0.06] bg-[#111111]">
              <div className="grid items-center md:grid-cols-2">
                <div className="p-8 md:p-12">
                  <span className="mb-3 inline-block text-[11px] font-bold tracking-[0.25em] text-[#E8650A] uppercase">Find Us</span>
                  <h2 className="mb-6 text-2xl font-black text-white md:text-3xl">Visit Our<br /><span className="text-[#E8650A]">Meycauayan Warehouse</span></h2>
                  <div className="mb-8 space-y-4">
                    <div className="flex items-start gap-3"><MapPin size={18} className="mt-0.5 shrink-0 text-[#E8650A]" /><div><div className="text-sm font-semibold text-white">Address</div><div className="text-sm text-white/50">Brgy. Pajo, Meycauayan, Bulacan</div></div></div>
                    <div className="flex items-start gap-3"><Timer size={18} className="mt-0.5 shrink-0 text-[#E8650A]" /><div><div className="text-sm font-semibold text-white">Store Hours</div><div className="text-sm text-white/50">Open daily — Check Facebook for auction schedule</div></div></div>
                    <div className="flex items-start gap-3"><Zap size={18} className="mt-0.5 shrink-0 text-[#E8650A]" /><div><div className="text-sm font-semibold text-white">Auction Days</div><div className="text-sm text-white/50">Weekly live auctions — follow our page for updates</div></div></div>
                  </div>
                  <a href="https://www.facebook.com/RFGauctionhousebulacan" target="_blank" rel="noopener noreferrer" className="rfb-cta-btn inline-flex cursor-pointer items-center gap-3 rounded-xl bg-[#E8650A] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#E8650A]/20">
                    <Facebook size={18} /> Follow for Auction Updates <ArrowRight size={14} />
                  </a>
                </div>
                <div className="relative aspect-square md:aspect-auto md:h-full">
                  <Image src="/rfg-auction-bulacan/deals.jpg" alt="RFG Bulacan Warehouse" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-transparent to-transparent md:bg-gradient-to-r" />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative z-10 overflow-hidden px-6 py-24 md:py-32">
        <div className="absolute inset-0">
          <Image src="/rfg-auction-bulacan/industrial.jpg" alt="Industrial" fill className="object-cover opacity-[0.08]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/95 to-[#0A0A0A]/80" />
        </div>
        <div className="pointer-events-none absolute top-1/2 left-1/2 h-[400px] w-[400px] rounded-full" style={{ transform: "translate(-50%, -50%)", background: "radial-gradient(circle, rgba(232,101,10,0.08) 0%, transparent 70%)", animation: "rfbGlow 5s ease-in-out infinite" }} />
        <div className="relative mx-auto max-w-2xl text-center">
          <ScrollReveal variant="fadeUp">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#E8650A]/30 bg-[#E8650A]/10 px-5 py-2 text-[11px] font-bold tracking-[0.15em] text-[#E8650A] uppercase">
              <Flame size={14} /> Don&apos;t Miss the Next Auction
            </div>
            <h2 className="mb-6 text-3xl font-black leading-tight text-white sm:text-4xl md:text-5xl">
              Ready to Score<br /><span className="text-[#E8650A]">Unbeatable Deals?</span>
            </h2>
            <p className="mx-auto mb-10 max-w-md text-base leading-relaxed text-white/50">
              Follow our Facebook page to get notified about upcoming auctions, new arrivals, and exclusive warehouse sales.
            </p>
            <a href="https://www.facebook.com/RFGauctionhousebulacan" target="_blank" rel="noopener noreferrer" className="rfb-cta-btn group inline-flex cursor-pointer items-center gap-3 rounded-2xl bg-[#E8650A] px-10 py-5 text-lg font-black text-white shadow-2xl shadow-[#E8650A]/25" style={{ animation: "rfbPulse 3s ease-in-out infinite" }}>
              <Facebook size={22} /> Follow RFG Auction Bulacan <ArrowRight size={18} className="transition-transform group-hover:translate-x-1.5" />
            </a>
            <div className="mt-8 flex items-center justify-center gap-6 text-[11px] text-white/30">
              <span className="flex items-center gap-1.5"><Users size={12} /> 12,000+ followers</span>
              <span className="flex items-center gap-1.5"><Flame size={12} /> 279 talking about this</span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/[0.04] bg-[#0A0A0A] px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center sm:flex-row sm:justify-between">
          <div className="flex items-center gap-3">
            <Image src="/logos/rfg-auction-bulacan.jpg" alt="RFG Auction Bulacan" width={28} height={28} className="rounded" />
            <span className="text-xs text-white/40">RFG Auction House Bulacan &middot; Brgy. Pajo, Meycauayan</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://www.facebook.com/RFGauctionhousebulacan" target="_blank" rel="noopener noreferrer" className="cursor-pointer text-white/30 transition-colors hover:text-[#E8650A]"><Facebook size={18} /></a>
            <span className="text-[11px] text-white/20">A Pring Group Company &copy; {new Date().getFullYear()}</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
