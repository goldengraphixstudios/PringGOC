import { Metadata } from "next";
import Link from "next/link";
import Image from "@/components/Img";
import ScrollReveal from "@/components/ScrollReveal";
import CountUp from "@/components/CountUp";
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
  Crown,
  Sparkles,
  CircleDollarSign,
  Eye,
} from "lucide-react";

export const metadata: Metadata = {
  title: "RFG Auction House Davao — UK & Japan Quality in Davao City",
  description:
    "UK and Japan surplus items at unbeatable prices. Quality imported goods in Davao City. RFG Auction House Davao.",
};

export default function RFGAuctionDavaoPage() {
  const services = [
    {
      icon: Globe,
      title: "UK Surplus Items",
      desc: "Premium surplus directly sourced from the United Kingdom — electronics, furniture, appliances, and more.",
    },
    {
      icon: Star,
      title: "Japan Surplus Items",
      desc: "Japanese-quality surplus goods known for durability and precision. From tools to home essentials.",
    },
    {
      icon: Package,
      title: "Retail Sales",
      desc: "Walk in and buy quality items at warehouse prices. No bidding required — grab what you need.",
    },
    {
      icon: Truck,
      title: "Bulk Orders",
      desc: "Wholesale pricing for resellers across Mindanao. Build your inventory with imported quality.",
    },
    {
      icon: CircleDollarSign,
      title: "Unbeatable Prices",
      desc: "Save up to 80% compared to retail. Premium quality goods at a fraction of the cost.",
    },
    {
      icon: Eye,
      title: "Inspect Before You Buy",
      desc: "Every item on display. Walk the floor, check the quality — what you see is what you get.",
    },
  ];

  const steps = [
    {
      num: "01",
      title: "Follow Our Page",
      desc: "Stay updated on new arrivals, flash sales, and exclusive Davao deals.",
      icon: Facebook,
    },
    {
      num: "02",
      title: "Visit Our Store",
      desc: "Come to our Davao City location. Browse UK and Japan surplus across our showroom.",
      icon: Warehouse,
    },
    {
      num: "03",
      title: "Pick Your Items",
      desc: "From electronics to home goods — everything is quality-checked and priced to move.",
      icon: Tag,
    },
    {
      num: "04",
      title: "Take It Home",
      desc: "Pay and go. Delivery available across Davao City and surrounding areas.",
      icon: Truck,
    },
  ];

  const stats = [
    { value: 3800, suffix: "+", label: "Followers", icon: Users },
    { value: 300, suffix: "+", label: "Items in Stock", icon: Package },
    { value: 2, suffix: "", label: "Countries Sourced", icon: Globe },
    { value: 1, suffix: "", label: "Davao Store", icon: Warehouse },
  ];

  return (
    <main className="relative overflow-hidden bg-[#09090B]">
      <style
        dangerouslySetInnerHTML={{
          __html: `
@keyframes ylwPulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(250,204,21,0.35); }
  50% { box-shadow: 0 0 40px 12px rgba(250,204,21,0.12); }
}
@keyframes ylwFloat {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  33% { transform: translateY(-14px) rotate(0.5deg); }
  66% { transform: translateY(6px) rotate(-0.3deg); }
}
@keyframes ylwReveal {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes ylwLineGrow {
  from { transform: scaleX(0); }
  to { transform: scaleX(1); }
}
@keyframes ylwGlow {
  0%, 100% { opacity: 0.35; filter: blur(60px); }
  50% { opacity: 0.6; filter: blur(80px); }
}
@keyframes ylwShimmer {
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
}
@keyframes ylwOrb {
  0%, 100% { transform: translate(0, 0) scale(1); }
  25% { transform: translate(30px, -20px) scale(1.1); }
  50% { transform: translate(-10px, 20px) scale(0.95); }
  75% { transform: translate(-25px, -10px) scale(1.05); }
}
@keyframes ylwScanDown {
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100vh); }
}
@keyframes ylwBorderGlow {
  0%, 100% { border-color: rgba(250,204,21,0.1); }
  50% { border-color: rgba(250,204,21,0.25); }
}
.ylw-hero-stagger > * {
  opacity: 0;
  animation: ylwReveal 0.8s cubic-bezier(0.16,1,0.3,1) forwards;
}
.ylw-hero-stagger > *:nth-child(1) { animation-delay: 0.15s; }
.ylw-hero-stagger > *:nth-child(2) { animation-delay: 0.3s; }
.ylw-hero-stagger > *:nth-child(3) { animation-delay: 0.45s; }
.ylw-hero-stagger > *:nth-child(4) { animation-delay: 0.6s; }
.ylw-hero-stagger > *:nth-child(5) { animation-delay: 0.75s; }
.ylw-hero-stagger > *:nth-child(6) { animation-delay: 0.9s; }
.ylw-card {
  transition: all 0.4s cubic-bezier(0.16,1,0.3,1);
  animation: ylwBorderGlow 4s ease-in-out infinite;
}
.ylw-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 0 40px rgba(250,204,21,0.08), 0 20px 60px rgba(0,0,0,0.3);
  border-color: rgba(250,204,21,0.35) !important;
}
.ylw-card:hover .ylw-card-icon {
  box-shadow: 0 0 20px rgba(250,204,21,0.2);
  background: rgba(250,204,21,0.12);
}
.ylw-shimmer-text {
  background: linear-gradient(90deg, #FACC15 0%, #FEF9C3 30%, #FACC15 60%, #EAB308 100%);
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ylwShimmer 6s linear infinite;
}
.ylw-btn {
  position: relative;
  transition: all 0.3s cubic-bezier(0.16,1,0.3,1);
}
.ylw-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 0 30px rgba(250,204,21,0.25), 0 12px 40px rgba(250,204,21,0.15);
}
.ylw-btn-pulse { animation: ylwPulse 3s ease-in-out infinite; }
.ylw-step {
  transition: all 0.4s cubic-bezier(0.16,1,0.3,1);
}
.ylw-step:hover {
  transform: translateX(8px);
  border-color: rgba(250,204,21,0.3);
}
.ylw-step:hover .ylw-step-num {
  color: #FACC15;
  text-shadow: 0 0 30px rgba(250,204,21,0.3);
}
.ylw-gallery-item {
  transition: all 0.5s cubic-bezier(0.16,1,0.3,1);
}
.ylw-gallery-item:hover {
  transform: scale(1.03);
  box-shadow: 0 0 40px rgba(250,204,21,0.1);
}
@media (prefers-reduced-motion: reduce) {
  .ylw-hero-stagger > * { opacity: 1; animation: none; }
  .ylw-shimmer-text { animation: none; }
  .ylw-btn-pulse { animation: none; }
  .ylw-card { animation: none; }
}
`,
        }}
      />

      {/* NAV */}
      <nav className="fixed top-0 right-0 left-0 z-50 border-b border-[#FACC15]/[0.08] bg-[#09090B]/85 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
          <Link href="/" className="flex cursor-pointer items-center gap-2 text-sm font-medium text-white/50 transition-colors hover:text-[#FACC15]">
            <ArrowLeft size={16} />
            <span className="hidden sm:inline">Back to Pring Group</span>
          </Link>
          <div className="flex items-center gap-3">
            <Image src="/logos/rfg-auction-davao.jpg" alt="RFG Auction House Davao" width={36} height={36} className="rounded-lg ring-1 ring-[#FACC15]/20" />
            <div className="hidden sm:block">
              <div className="text-sm font-bold text-white">RFG Auction House</div>
              <div className="text-[10px] tracking-wider text-[#FACC15] uppercase">Davao City</div>
            </div>
          </div>
          <a href="https://www.facebook.com/rfgauctionhousedavao" target="_blank" rel="noopener noreferrer" className="ylw-btn inline-flex cursor-pointer items-center gap-2 rounded-lg bg-[#FACC15] px-4 py-2 text-sm font-bold text-[#09090B]">
            <Facebook size={16} />
            <span className="hidden sm:inline">Follow Us</span>
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden pt-16">
        <div className="absolute inset-0">
          <Image src="/rfg-auction-davao/hero.jpg" alt="Warehouse" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-[#09090B] via-[#09090B]/95 to-[#09090B]/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-[#09090B]/30 to-transparent" />
        </div>

        {/* Glow orbs */}
        <div className="pointer-events-none absolute top-20 left-[10%] h-72 w-72 rounded-full bg-[#FACC15]/20" style={{ animation: "ylwOrb 12s ease-in-out infinite, ylwGlow 6s ease-in-out infinite" }} />
        <div className="pointer-events-none absolute top-[40%] right-[5%] h-56 w-56 rounded-full bg-[#EAB308]/15" style={{ animation: "ylwOrb 15s ease-in-out infinite reverse, ylwGlow 8s ease-in-out infinite 2s" }} />
        <div className="pointer-events-none absolute bottom-[20%] left-[30%] h-40 w-40 rounded-full bg-[#FACC15]/10" style={{ animation: "ylwOrb 10s ease-in-out infinite 3s, ylwGlow 5s ease-in-out infinite 1s" }} />

        {/* Scanline */}
        <div className="pointer-events-none absolute left-0 right-0 h-32 opacity-[0.02]" style={{ background: "linear-gradient(transparent, #FACC15, transparent)", animation: "ylwScanDown 10s linear infinite" }} />

        <div className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-6 md:grid-cols-[1fr_auto] md:px-12">
          <div className="ylw-hero-stagger py-24 md:py-20">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#FACC15]/25 bg-[#FACC15]/[0.07] px-4 py-1.5">
              <Crown size={13} className="text-[#FACC15]" />
              <span className="text-[11px] font-bold tracking-[0.15em] text-[#FACC15] uppercase">UK &amp; Japan Quality in Davao</span>
            </div>

            <h1 className="mb-6 text-4xl leading-[1.05] font-black tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[4.5rem]">
              Premium
              <br />
              <span className="ylw-shimmer-text">Imported Surplus</span>
              <br />
              in Davao
            </h1>

            <div className="mb-6 h-1 w-28 origin-left rounded-full bg-gradient-to-r from-[#FACC15] to-[#EAB308]/40" style={{ animation: "ylwLineGrow 1s cubic-bezier(0.16,1,0.3,1) 0.5s both" }} />

            <p className="mb-8 max-w-md text-lg leading-relaxed text-white/55">
              Quality imported surplus from the UK and Japan — now available in
              Davao City. Electronics, home goods, and more at prices you
              won&apos;t believe.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a href="https://www.facebook.com/rfgauctionhousedavao" target="_blank" rel="noopener noreferrer" className="ylw-btn ylw-btn-pulse group inline-flex cursor-pointer items-center gap-3 rounded-xl bg-[#FACC15] px-7 py-4 text-base font-black text-[#09090B] shadow-lg shadow-[#FACC15]/15">
                <Facebook size={20} /> Visit Us on Facebook <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#how-it-works" className="ylw-btn inline-flex cursor-pointer items-center gap-2 rounded-xl border border-[#FACC15]/15 bg-white/[0.03] px-6 py-4 text-sm font-semibold text-white/70 backdrop-blur-sm transition-all hover:border-[#FACC15]/30 hover:text-white">
                How It Works <ChevronDown size={14} />
              </a>
            </div>

            <div className="mt-10 flex items-center gap-4">
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#09090B] bg-[#18181B] text-[10px] font-bold text-[#FACC15]">
                    {["JP", "UK", "PH", "DV"][i]}
                  </div>
                ))}
              </div>
              <div className="text-sm text-white/40">
                <span className="font-semibold text-[#FACC15]">3,800+</span> happy customers
              </div>
            </div>
          </div>

          {/* Floating logo */}
          <div className="hidden items-center justify-center md:flex">
            <div className="relative" style={{ animation: "ylwFloat 6s ease-in-out infinite" }}>
              <div className="absolute -inset-12 rounded-full" style={{ background: "radial-gradient(circle, rgba(250,204,21,0.12) 0%, transparent 70%)", animation: "ylwGlow 4s ease-in-out infinite" }} />
              <Image src="/logos/rfg-auction-davao.jpg" alt="RFG Auction House Davao" width={260} height={260} className="relative z-10 rounded-3xl ring-2 ring-[#FACC15]/20 drop-shadow-2xl" priority />
              <div className="absolute -top-4 -right-4 h-8 w-8 border-t-2 border-r-2 border-[#FACC15]/30 rounded-tr-xl" />
              <div className="absolute -bottom-4 -left-4 h-8 w-8 border-b-2 border-l-2 border-[#FACC15]/30 rounded-bl-xl" />
              <div className="absolute -top-4 -left-4 h-8 w-8 border-t-2 border-l-2 border-[#FACC15]/10 rounded-tl-xl" />
              <div className="absolute -right-4 -bottom-4 h-8 w-8 border-r-2 border-b-2 border-[#FACC15]/10 rounded-br-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="relative z-10 border-y border-[#FACC15]/[0.06] bg-[#09090B]">
        <div className="absolute top-0 right-0 left-0 h-px bg-gradient-to-r from-transparent via-[#FACC15]/20 to-transparent" />
        <div className="mx-auto grid max-w-5xl grid-cols-2 divide-x divide-[#FACC15]/[0.06] md:grid-cols-4">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} variant="fadeUp" delay={i * 100}>
              <div className="group py-8 text-center transition-colors hover:bg-[#FACC15]/[0.02]">
                <stat.icon size={18} className="mx-auto mb-2 text-[#FACC15]/60 transition-colors group-hover:text-[#FACC15]" />
                <div className="text-2xl font-black text-white md:text-3xl">
                  <CountUp end={stat.value} suffix={stat.suffix} duration={2500} className="text-white" />
                </div>
                <div className="mt-1 text-[10px] font-semibold tracking-[0.18em] text-white/35 uppercase">{stat.label}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative z-10 bg-[#09090B] px-6 py-20 md:py-28">
        <div className="pointer-events-none absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FACC15]/[0.03]" style={{ filter: "blur(100px)" }} />
        <div className="relative mx-auto max-w-6xl">
          <ScrollReveal variant="fadeUp">
            <div className="mb-14 text-center">
              <span className="mb-3 inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.25em] text-[#FACC15]/70 uppercase"><Sparkles size={13} /> What We Offer</span>
              <h2 className="text-3xl font-black text-white md:text-4xl lg:text-5xl">UK &amp; Japan Surplus. <span className="ylw-shimmer-text">Davao Prices.</span></h2>
              <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-white/40">Imported quality you can trust, at prices that make Davao the best place to shop surplus.</p>
            </div>
          </ScrollReveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((svc, i) => (
              <ScrollReveal key={svc.title} variant="fadeUp" delay={i * 80}>
                <div className="ylw-card group relative h-full rounded-2xl border border-[#FACC15]/[0.08] bg-[#111113] p-7">
                  <div className="ylw-card-icon mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-[#FACC15]/15 bg-[#FACC15]/[0.05] text-[#FACC15] transition-all duration-300">
                    <svc.icon size={22} />
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
      <section id="how-it-works" className="relative z-10 overflow-hidden bg-[#0D0D0F] px-6 py-20 md:py-28">
        <div className="absolute inset-0"><Image src="/rfg-auction-davao/warehouse.jpg" alt="" fill className="object-cover opacity-[0.03]" /></div>
        <div className="relative mx-auto max-w-5xl">
          <ScrollReveal variant="fadeUp">
            <div className="mb-14 text-center">
              <span className="mb-3 inline-block text-[11px] font-bold tracking-[0.25em] text-[#FACC15]/70 uppercase">The Process</span>
              <h2 className="text-3xl font-black text-white md:text-4xl">Walk In. <span className="ylw-shimmer-text">Win Big.</span> Walk Out.</h2>
            </div>
          </ScrollReveal>
          <div className="space-y-3">
            {steps.map((step, i) => (
              <ScrollReveal key={step.num} variant="fadeUp" delay={i * 100}>
                <div className="ylw-step flex items-center gap-6 rounded-2xl border border-white/[0.04] bg-[#111113]/80 p-5 md:p-6">
                  <div className="ylw-step-num shrink-0 font-mono text-4xl font-black text-white/[0.07] transition-all duration-500 md:text-5xl">{step.num}</div>
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#FACC15]/15 bg-[#FACC15]/[0.05] text-[#FACC15]"><step.icon size={20} /></div>
                  <div>
                    <h3 className="text-sm font-bold text-white md:text-base">{step.title}</h3>
                    <p className="mt-1 text-[13px] leading-relaxed text-white/40">{step.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="relative z-10 bg-[#09090B] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal variant="fadeUp">
            <div className="mb-12 text-center">
              <span className="mb-3 inline-block text-[11px] font-bold tracking-[0.25em] text-[#FACC15]/70 uppercase">Inside the Store</span>
              <h2 className="text-3xl font-black text-white md:text-4xl">See What&apos;s <span className="ylw-shimmer-text">In Stock</span></h2>
            </div>
          </ScrollReveal>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { src: "/rfg-auction-davao/warehouse.jpg", label: "Store Floor", span: "lg:col-span-2 lg:row-span-2" },
              { src: "/rfg-auction-davao/auction.jpg", label: "Premium Goods", span: "" },
              { src: "/rfg-auction-davao/surplus.jpg", label: "UK & Japan Items", span: "" },
              { src: "/rfg-auction-davao/deals.jpg", label: "Happy Customers", span: "sm:col-span-2 lg:col-span-1" },
              { src: "/rfg-auction-davao/industrial.jpg", label: "Quality Selection", span: "lg:col-span-2" },
            ].map((img, i) => (
              <ScrollReveal key={img.label} variant="scale" delay={i * 80}>
                <div className={`ylw-gallery-item group relative overflow-hidden rounded-2xl border border-white/[0.04] ${img.span}`}>
                  <div className={`relative ${img.span.includes("row-span-2") ? "aspect-square" : "aspect-[16/10]"}`}>
                    <Image src={img.src} alt={img.label} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#09090B]/80 via-transparent to-transparent" />
                    <div className="pointer-events-none absolute inset-0 bg-[#FACC15]/0 transition-colors duration-500 group-hover:bg-[#FACC15]/[0.03]" />
                    <div className="absolute right-4 bottom-4 left-4 flex items-center justify-between">
                      <span className="text-sm font-bold text-white">{img.label}</span>
                      <span className="rounded-full bg-[#FACC15]/10 px-3 py-1 text-[10px] font-bold text-[#FACC15]">View</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="relative z-10 border-y border-[#FACC15]/[0.06] bg-[#0D0D0F] px-6 py-16 md:py-20">
        <div className="relative mx-auto max-w-3xl text-center">
          <ScrollReveal variant="fadeUp">
            <div className="mb-5 flex items-center justify-center gap-1">
              {[...Array(5)].map((_, i) => (<Star key={i} size={20} className="fill-[#FACC15] text-[#FACC15]" />))}
            </div>
            <blockquote className="mb-6 text-xl leading-relaxed font-medium text-white/80 md:text-2xl">
              &ldquo;First time ko makakita ng ganito kagandang quality ng surplus dito sa Davao. UK at Japan pa talaga ang origin. Babalik-balik kami!&rdquo;
            </blockquote>
            <p className="text-sm text-white/35">— Growing community of happy customers in Davao City</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {[
                { icon: ShieldCheck, text: "Quality Guaranteed" },
                { icon: BadgeCheck, text: "Authentic Imports" },
                { icon: Globe, text: "UK & Japan Source" },
                { icon: Star, text: "Trusted in Davao" },
              ].map((badge) => (
                <div key={badge.text} className="flex items-center gap-1.5 rounded-full border border-[#FACC15]/[0.08] bg-[#FACC15]/[0.03] px-3.5 py-1.5 text-[10px] font-semibold text-white/45">
                  <badge.icon size={12} className="text-[#FACC15]/60" /> {badge.text}
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* LOCATION */}
      <section className="relative z-10 bg-[#09090B] px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <ScrollReveal variant="fadeUp">
            <div className="overflow-hidden rounded-3xl border border-[#FACC15]/[0.08] bg-[#111113]">
              <div className="grid items-center md:grid-cols-2">
                <div className="p-8 md:p-12">
                  <span className="mb-3 inline-block text-[11px] font-bold tracking-[0.25em] text-[#FACC15]/70 uppercase">Find Us</span>
                  <h2 className="mb-6 text-2xl font-black text-white md:text-3xl">Visit Our<br /><span className="ylw-shimmer-text">Davao City Store</span></h2>
                  <div className="mb-8 space-y-4">
                    {[
                      { icon: MapPin, title: "Location", desc: "Davao City" },
                      { icon: Timer, title: "Store Hours", desc: "Check our Facebook page for schedule" },
                      { icon: Zap, title: "New Arrivals", desc: "Fresh UK & Japan surplus every week" },
                    ].map((item) => (
                      <div key={item.title} className="flex items-start gap-3">
                        <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[#FACC15]/15 bg-[#FACC15]/[0.05]">
                          <item.icon size={14} className="text-[#FACC15]" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-white">{item.title}</div>
                          <div className="text-sm text-white/45">{item.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <a href="https://www.facebook.com/rfgauctionhousedavao" target="_blank" rel="noopener noreferrer" className="ylw-btn inline-flex cursor-pointer items-center gap-3 rounded-xl bg-[#FACC15] px-6 py-3.5 text-sm font-bold text-[#09090B] shadow-lg shadow-[#FACC15]/10">
                    <Facebook size={18} /> Follow for Updates <ArrowRight size={14} />
                  </a>
                </div>
                <div className="relative aspect-square md:aspect-auto md:h-full">
                  <Image src="/rfg-auction-davao/deals.jpg" alt="RFG Davao" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#111113] via-transparent to-transparent md:bg-gradient-to-r" />
                  <div className="pointer-events-none absolute bottom-0 left-0 h-1/2 w-full bg-gradient-to-t from-[#FACC15]/[0.04] to-transparent" />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative z-10 overflow-hidden px-6 py-24 md:py-32">
        <div className="absolute inset-0">
          <Image src="/rfg-auction-davao/industrial.jpg" alt="" fill className="object-cover opacity-[0.05]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-[#09090B]/95 to-[#09090B]/80" />
        </div>
        <div className="pointer-events-none absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FACC15]/[0.06]" style={{ filter: "blur(80px)", animation: "ylwGlow 6s ease-in-out infinite" }} />
        <div className="relative mx-auto max-w-2xl text-center">
          <ScrollReveal variant="fadeUp">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#FACC15]/25 bg-[#FACC15]/[0.07] px-5 py-2">
              <Flame size={14} className="text-[#FACC15]" />
              <span className="text-[11px] font-bold tracking-[0.15em] text-[#FACC15] uppercase">New Arrivals Every Week</span>
            </div>
            <h2 className="mb-6 text-3xl font-black leading-tight text-white sm:text-4xl md:text-5xl">
              Ready for<br /><span className="ylw-shimmer-text">Premium Surplus?</span>
            </h2>
            <p className="mx-auto mb-10 max-w-md text-base leading-relaxed text-white/45">
              Follow our Facebook page for new UK &amp; Japan arrivals, exclusive deals, and store updates in Davao City.
            </p>
            <a href="https://www.facebook.com/rfgauctionhousedavao" target="_blank" rel="noopener noreferrer" className="ylw-btn ylw-btn-pulse group inline-flex cursor-pointer items-center gap-3 rounded-2xl bg-[#FACC15] px-10 py-5 text-lg font-black text-[#09090B] shadow-2xl shadow-[#FACC15]/15">
              <Facebook size={22} /> Follow RFG Auction Davao <ArrowRight size={18} className="transition-transform group-hover:translate-x-1.5" />
            </a>
            <div className="mt-8 flex items-center justify-center gap-6 text-[11px] text-white/30">
              <span className="flex items-center gap-1.5"><Users size={12} /> 3,800+ followers</span>
              <span className="flex items-center gap-1.5"><TrendingUp size={12} /> Growing daily</span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#FACC15]/[0.06] bg-[#09090B] px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center sm:flex-row sm:justify-between">
          <div className="flex items-center gap-3">
            <Image src="/logos/rfg-auction-davao.jpg" alt="RFG Davao" width={28} height={28} className="rounded" />
            <span className="text-xs text-white/35">RFG Auction House Davao &middot; Davao City</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://www.facebook.com/rfgauctionhousedavao" target="_blank" rel="noopener noreferrer" className="cursor-pointer text-white/25 transition-colors hover:text-[#FACC15]"><Facebook size={18} /></a>
            <span className="text-[11px] text-white/20">A Pring Group Company &copy; {new Date().getFullYear()}</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
