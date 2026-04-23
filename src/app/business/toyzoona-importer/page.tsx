"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { bp } from "@/lib/basePath";
import {
  ArrowLeft, ArrowRight, Facebook, Tv, Trophy, Package,
  Truck, ShoppingBag, Warehouse, Users, Star, Zap,
  CheckCircle2, Clock, Sparkles, Globe, Youtube, Tag, Crown, Linkedin, Music2, Newspaper,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import BusinessNavArrows from "@/components/BusinessNavArrows";
import BusinessPopup from "@/components/BusinessPopup";

/* ── BRAND COLORS ───────────────────────────────────────────────────────── */
const C = {
  blue:    "#1E90FF",
  red:     "#E8350A",
  orange:  "#FF6500",
  yellow:  "#FFD700",
  green:   "#00C853",
  purple:  "#AA00FF",
  cyan:    "#00C8D8",
  black:   "#111111",
  white:   "#FFFFFF",
  darkBg:  "#0D0D1A",
  cardBg:  "#16162A",
};
const RAINBOW = [C.blue, C.red, C.yellow, C.green, C.purple, C.orange, C.cyan];

const FACEBOOK_GROUP  = "https://www.facebook.com/groups/642834551000763";
const YOUTUBE_CHANNEL = "https://www.youtube.com/@toyzoonaimporter";
const LINKEDIN_URL = "https://www.linkedin.com/company/toyzoona-importer";
const TIKTOK_URL = "https://www.tiktok.com/@toyzoonaimporter";
const YOUTUBE_VIDEO_ID = "eAGbGMUIzhY";
const YOUTUBE_VIDEO_ID_2 = "xCed6-vE4Ko";
const FB_VIDEO_1 = "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F2064629281014506%2F&show_text=0&width=560";
const FB_VIDEO_2 = "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FToyzoonaLaguna%2Fvideos%2F7153440271404393%2F&show_text=0&width=560";
const FB_VIDEO_3 = "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1601263954151179%2F&show_text=0&width=560";

/* ── BRANDS ─────────────────────────────────────────────────────────────── */
const BRANDS = [
  { name: "Barbie",       color: C.red,    slug: "barbie"       },
  { name: "LEGO",         color: C.yellow, slug: "lego"         },
  { name: "Bluey",        color: C.blue,   slug: "bluey"        },
  { name: "Disney",       color: C.purple, slug: "disney"       },
  { name: "Blippi",       color: C.orange, slug: "blippi"       },
  { name: "Cocomelon",    color: C.red,    slug: "cocomelon"    },
  { name: "Fisher-Price", color: C.green,  slug: "fisher-price" },
  { name: "VTech",        color: C.cyan,   slug: "vtech"        },
  { name: "Nerf",         color: C.orange, slug: "nerf"         },
  { name: "Hot Wheels",   color: C.red,    slug: "hot-wheels"   },
  { name: "Little Tikes", color: C.green,  slug: "little-tikes" },
  { name: "Paw Patrol",   color: C.blue,   slug: "paw-patrol"   },
  { name: "Peppa Pig",    color: C.red,    slug: "peppa-pig"    },
  { name: "Lamaze",       color: C.yellow, slug: "lamaze"       },
  { name: "Chicco",       color: C.blue,   slug: "chicco"       },
  { name: "Marvel",       color: C.red,    slug: "marvel"       },
];

/* ── GALLERY ─────────────────────────────────────────────────────────────── */
const GALLERY_GROUPS = [
  ["/toyzoona-importer/new-1.jpg",  "/toyzoona-importer/new-2.jpg",  "/toyzoona-importer/new-3.jpg",  "/toyzoona-importer/new-4.jpg"],
  ["/toyzoona-importer/new-5.jpg",  "/toyzoona-importer/new-6.jpg",  "/toyzoona-importer/new-7.jpg",  "/toyzoona-importer/new-8.jpg"],
  ["/toyzoona-importer/new-9.jpg",  "/toyzoona-importer/new-10.jpg", "/toyzoona-importer/new-11.jpg", "/toyzoona-importer/new-12.jpg"],
  ["/toyzoona-importer/new-13.jpg", "/toyzoona-importer/new-14.jpg", "/toyzoona-importer/new-15.jpg", "/toyzoona-importer/new-16.jpg"],
];

const howToBuy = [
  { icon: ShoppingBag, title: "Saturday Auction",  badge: "Every Sat",    desc: "Join our live auction every Saturday at 10:00 AM. Bid per kilogram at competitive prices.", color: C.yellow, step: "01" },
  { icon: Tv,          title: "Live Selling",       badge: "Mon–Sat",      desc: "Watch and shop live on Facebook! Mon–Sat, 9AM–6:30PM (some sessions go until midnight).",  color: C.orange, step: "02" },
  { icon: Warehouse,   title: "Warehouse Visit",    badge: "Mon–Sat",      desc: "Visit us in Cabuyao, Laguna. Browse and pick toys by the kilo. Open 9AM–6:30PM.",          color: C.red,    step: "03" },
  { icon: Facebook,    title: "Facebook Group",     badge: "24/7 Updates", desc: "Get exclusive deals, live alerts, and member-only promos in our private FB group.",        color: C.blue,   step: "04", link: FACEBOOK_GROUP },
];

const reasons = [
  { icon: Trophy,  title: "Pioneer in the South",     desc: "First in Southern Luzon to sell toys by the kilogram — blazing a trail no one else had.", color: C.yellow },
  { icon: Tv,      title: "TV-Verified Credibility",   desc: "Featured on national television — our story and mission reached Filipino viewers nationwide.", color: C.blue   },
  { icon: Globe,   title: "Nationwide Delivery",       desc: "From Cabuyao to Cagayan de Oro — we ship anywhere in the Philippines.", color: C.green  },
  { icon: Package, title: "Direct UK & China Imports", desc: "Straight from source — no middlemen, unbeatable prices, max value per kilo.", color: C.orange },
  { icon: Star,    title: "Toyfair Presence",          desc: "Represented at major toyfairs, showcasing per-kilo toys to the biggest events nationwide.", color: C.purple },
  { icon: Users,   title: "Thriving Community",        desc: "Join parents, resellers & toy lovers in our exclusive Facebook group with live deals.", color: C.cyan   },
];

const tvPhotos = [
  { src: "/toyzoona-importer/tv-1.jpg", caption: "Featured on TV5 – National Coverage" },
  { src: "/toyzoona-importer/tv-2.jpg", caption: "Live TV Interview – Toys Per Kilo" },
  { src: "/toyzoona-importer/tv-3.jpg", caption: "Studio Appearance – National TV" },
  { src: "/toyzoona-importer/tv-4.jpg", caption: "Media Feature – Cabuyao, Laguna" },
  { src: "/toyzoona-importer/tv-5.jpg", caption: "National Broadcast Spotlight" },
];

const toyfairPhotos = [
  "/toyzoona-importer/toyfair-1.jpg",
  "/toyzoona-importer/toyfair-2.jpg",
  "/toyzoona-importer/toyfair-3.jpg",
  "/toyzoona-importer/toyfair-4.jpg",
];

/* ── GALLERY COMPONENT ───────────────────────────────────────────────────── */
function ToyGallery() {
  const [group, setGroup] = useState(0);
  const [phase, setPhase] = useState<"in"|"out">("in");

  useEffect(() => {
    const t = setInterval(() => {
      setPhase("out");
      setTimeout(() => { setGroup(g => (g + 1) % GALLERY_GROUPS.length); setPhase("in"); }, 350);
    }, 3500);
    return () => clearInterval(t);
  }, []);

  const imgs = GALLERY_GROUPS[group];
  const colors  = [C.blue, C.red, C.yellow, C.green];
  const shadows  = [C.red, C.yellow, C.blue, C.red];

  return (
    <div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16 }}>
        {imgs.map((src, i) => (
          <div key={`${group}-${i}`} style={{
            borderRadius: 20, overflow: "hidden",
            border: `4px solid ${colors[i]}`, boxShadow: `6px 6px 0 ${shadows[i]}`,
            transform: `rotate(${i % 2 === 0 ? -1.2 : 1.2}deg)`,
            opacity: phase === "out" ? 0 : 1,
            transition: `opacity 0.35s ease, transform 0.38s cubic-bezier(.34,1.3,.64,1)`,
            transitionDelay: `${i * 60}ms`,
          }}>
            <img src={bp(src)} alt={`Toy ${i + 1}`} style={{ width: "100%", aspectRatio: "4/3", objectFit: "cover", display: "block" }} />
          </div>
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 20 }}>
        {GALLERY_GROUPS.map((_, i) => (
          <button key={i} onClick={() => setGroup(i)} style={{
            width: i === group ? 32 : 12, height: 12, borderRadius: 99,
            border: `2px solid ${C.black}`, background: i === group ? C.yellow : C.blue,
            boxShadow: i === group ? `2px 2px 0 ${C.black}` : "none",
            cursor: "pointer", transition: "all .3s ease",
          }} />
        ))}
      </div>
    </div>
  );
}

/* ── PAGE ────────────────────────────────────────────────────────────────── */
export default function ToyZoonaImporterPage() {
  return (
    <main style={{ background: C.darkBg, color: C.white, overflowX: "hidden", fontFamily: "'Nunito','Inter',system-ui,sans-serif" }}>
      <BusinessNavArrows currentSlug="toyzoona-importer" />
      <BusinessPopup config={{
        storageKey: "popup-toyzoona-importer",
        delay: 1800,
        headerBg: "linear-gradient(135deg, #9C0A00 0%, #C91800 50%, #E8350A 100%)",
        headerIcon: "🧸",
        modalBg: "#FFFFFF",
        eyebrow: "EXCLUSIVE TOY DROPS",
        eyebrowColor: "#C91800",
        title: "Want first access to toy deals?",
        titleColor: "#1A0000",
        body: "Join the Toyzoona Facebook group for live selling alerts, kilo deals, restock updates, and member-only promos.",
        bodyColor: "#666666",
        primaryCTA: "Join Facebook Group",
        primaryHref: "https://www.facebook.com/groups/642834551000763",
        primaryExternal: true,
        ctaBg: "#E8350A",
        ctaColor: "#FFFFFF",
        secondaryCTA: "Watch Live Content",
        secondaryHref: "#videos",
        secondaryColor: "#999999",
        badge: "AS SEEN ON TV",
        badgeBg: "rgba(232,53,10,0.1)",
        badgeColor: "#C91800",
        logoSrc: "/logos/toyzoona-importer-logo-transparent.png",
      }} />

      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Fredoka+One&family=Nunito:wght@400;600;700;800;900&display=swap');
        .tz-font { font-family: 'Fredoka One', cursive; letter-spacing: 0.01em; }
        .tz-body { font-family: 'Nunito', system-ui, sans-serif; }

        @keyframes tzFloat    { 0%,100%{transform:translateY(0)rotate(-2deg)}50%{transform:translateY(-20px)rotate(2deg)} }
        @keyframes tzSpin     { to{transform:rotate(360deg)} }
        @keyframes tzSpinRev  { to{transform:rotate(-360deg)} }
        @keyframes tzPulse    { 0%,100%{box-shadow:0 0 0 0 rgba(255,215,0,.55)}50%{box-shadow:0 0 0 22px rgba(255,215,0,0)} }
        @keyframes tzBounce   { 0%,100%{transform:translateY(0)}40%{transform:translateY(-18px)}70%{transform:translateY(-6px)} }
        @keyframes tzReveal   { from{opacity:0;transform:translateY(36px)scale(.93)}to{opacity:1;transform:translateY(0)scale(1)} }
        @keyframes tzWiggle   { 0%,100%{transform:rotate(0)}25%{transform:rotate(-10deg)}75%{transform:rotate(10deg)} }
        @keyframes tzGlow     { 0%,100%{opacity:.3;transform:scale(1)}50%{opacity:.55;transform:scale(1.08)} }
        @keyframes tzShine    {
          0%   { background-position: -200% center }
          100% { background-position:  200% center }
        }
        @keyframes tzMarquee  { from{transform:translateX(0)} to{transform:translateX(-50%)} }
        @keyframes tzMarqueeR { from{transform:translateX(-50%)} to{transform:translateX(0)} }
        @keyframes tzFadeUp   { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
        @keyframes tzHeroLogo {
          0%,100% { transform: translateY(0) scale(1); }
          50%     { transform: translateY(-14px) scale(1.02); }
        }

        .tz-hero-stagger > * { opacity:0; animation:tzReveal .7s cubic-bezier(.34,1.56,.64,1) forwards; }
        .tz-hero-stagger > *:nth-child(1){animation-delay:.08s}
        .tz-hero-stagger > *:nth-child(2){animation-delay:.20s}
        .tz-hero-stagger > *:nth-child(3){animation-delay:.32s}
        .tz-hero-stagger > *:nth-child(4){animation-delay:.44s}
        .tz-hero-stagger > *:nth-child(5){animation-delay:.56s}
        .tz-hero-stagger > *:nth-child(6){animation-delay:.68s}

        .tz-card { transition:transform .32s cubic-bezier(.34,1.56,.64,1),box-shadow .32s ease; }
        .tz-card:hover { transform:translateY(-10px) scale(1.02); }
        .tz-btn  { transition:transform .28s cubic-bezier(.34,1.56,.64,1); cursor:pointer; }
        .tz-btn:hover  { transform:translateY(-4px) scale(1.04); }
        .tz-btn:active { transform:translateY(0) scale(.98); }
        .tz-pulse { animation:tzPulse 2.5s ease-in-out infinite; }

        .tz-shine {
          background: linear-gradient(90deg,#FFD700 0%,#FF6500 22%,#E8350A 44%,#AA00FF 66%,#1E90FF 88%,#FFD700 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: tzShine 4s linear infinite;
        }

        .tz-polka {
          background-image: radial-gradient(circle,rgba(255,255,255,.05) 2px,transparent 2px);
          background-size: 28px 28px;
          pointer-events: none;
        }

        .tz-marquee-track { display:flex; width:max-content; animation:tzMarquee 180s linear infinite; }
        .tz-marquee-track:hover { animation-play-state:paused; }

        .tz-rainbow-border {
          background: linear-gradient(${C.darkBg}, ${C.darkBg}) padding-box,
                      linear-gradient(135deg,#E8350A,#FF6500,#FFD700,#00C853,#1E90FF,#AA00FF) border-box;
          border: 4px solid transparent;
        }

        @media(max-width:768px){
          .tz-grid-2{grid-template-columns:1fr !important}
          .tz-grid-3{grid-template-columns:1fr 1fr !important}
          .tz-grid-4{grid-template-columns:1fr 1fr !important}
          .tz-hide-mobile{display:none !important}
        }
      `}} />

      {/* ══ NAV ══════════════════════════════════════════════════════════════ */}
      <nav style={{
        position:"fixed",top:0,left:0,right:0,zIndex:50,
        background:"rgba(13,13,26,0.94)",backdropFilter:"blur(16px)",
        borderBottom:`3px solid ${C.yellow}`,
      }}>
        <div style={{ maxWidth:1280,margin:"0 auto",padding:"0 24px",height:64,display:"flex",alignItems:"center",justifyContent:"space-between" }}>
          <Link href="/" style={{ display:"flex",alignItems:"center",gap:8,color:"rgba(255,255,255,.5)",textDecoration:"none",fontSize:14,fontWeight:700,transition:"color .2s" }}
            onMouseEnter={e=>(e.currentTarget as HTMLElement).style.color=C.white}
            onMouseLeave={e=>(e.currentTarget as HTMLElement).style.color="rgba(255,255,255,.5)"}
          >
            <ArrowLeft size={16}/><span className="tz-body">All Businesses</span>
          </Link>

          <div style={{ display:"flex",alignItems:"center",gap:10 }}>
            <img src={bp("/logos/toyzoona-importer-logo-transparent.png")} alt="Toyzoona Importer"
              style={{ height:40,objectFit:"contain" }} />
          </div>

          <a href={FACEBOOK_GROUP} target="_blank" rel="noopener noreferrer" className="tz-btn"
            style={{
              display:"flex",alignItems:"center",gap:6,
              background:C.red,color:C.white,textDecoration:"none",
              borderRadius:12,padding:"8px 16px",fontSize:13,fontWeight:800,
              border:`3px solid ${C.black}`,boxShadow:`3px 3px 0 ${C.black}`,
            }}
          >
            <Facebook size={14}/><span className="tz-body">Join Group</span>
          </a>
        </div>
      </nav>

      {/* ══ HERO — centered logo focal point ═════════════════════════════════ */}
      <section style={{ position:"relative",minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",paddingTop:64,overflow:"hidden" }}>
        {/* BG gradient */}
        <div style={{
          position:"absolute",inset:0,zIndex:0,
          background:`radial-gradient(ellipse at 50% 40%, rgba(30,144,255,.18) 0%, rgba(170,0,255,.10) 40%, rgba(13,13,26,1) 75%)`,
        }}/>
        <div className="tz-polka" style={{ position:"absolute",inset:0,zIndex:0 }}/>

        {/* Glowing rings behind logo */}
        <div style={{ position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-55%)",zIndex:0,pointerEvents:"none" }}>
          <div style={{ width:500,height:500,borderRadius:"50%",border:`2px dashed rgba(255,215,0,.15)`,animation:"tzSpin 40s linear infinite" }}/>
          <div style={{ position:"absolute",inset:40,borderRadius:"50%",border:`2px dotted rgba(30,144,255,.12)`,animation:"tzSpinRev 28s linear infinite" }}/>
          <div style={{ position:"absolute",inset:80,borderRadius:"50%",background:`radial-gradient(circle,rgba(255,215,0,.12) 0%,transparent 70%)`,animation:"tzGlow 5s ease-in-out infinite" }}/>
        </div>

        {/* Floating stars */}
        {[
          {top:"12%",left:"6%", c:C.yellow,s:24,d:"0s"},
          {top:"20%",left:"18%",c:C.red,   s:14,d:"1.2s"},
          {top:"8%", right:"7%",c:C.cyan,  s:20,d:"0.5s"},
          {top:"32%",right:"4%",c:C.green, s:16,d:"1.8s"},
          {bottom:"25%",left:"4%",  c:C.purple,s:18,d:"2.1s"},
          {bottom:"18%",right:"10%",c:C.orange,s:22,d:"0.9s"},
          {top:"55%",left:"10%",c:C.blue,  s:12,d:"1.5s"},
          {top:"45%",right:"12%",c:C.yellow,s:16,d:"2.5s"},
        ].map((p,i)=>(
          <div key={i} style={{
            position:"absolute",zIndex:1,
            top:(p as any).top,left:(p as any).left,right:(p as any).right,bottom:(p as any).bottom,
            animation:`tzFloat ${5+i*.7}s ease-in-out infinite ${p.d}`,
            pointerEvents:"none",
          }}>
            <Star size={p.s} fill={p.c} style={{color:p.c,filter:"drop-shadow(0 2px 8px rgba(0,0,0,.6))",opacity:.7}}/>
          </div>
        ))}

        {/* Content — centered stack */}
        <div style={{ position:"relative",zIndex:2,textAlign:"center",padding:"80px 24px 100px",maxWidth:900,margin:"0 auto" }}
          className="tz-hero-stagger"
        >
          {/* Badges row */}
          <div style={{ display:"flex",flexWrap:"wrap",gap:10,justifyContent:"center",marginBottom:36 }}>
            {[
              {icon:Tv,        label:"AS SEEN ON TV5",       bg:C.yellow, tc:C.black },
              {icon:Truck,     label:"SHIPS NATIONWIDE",     bg:C.green,  tc:C.black },
              {icon:Trophy,    label:"TOYFAIR PARTICIPANT",  bg:C.purple, tc:C.white },
              {icon:Package,   label:"DIRECT IMPORTER",      bg:C.blue,   tc:C.white },
            ].map(({icon:Icon,label,bg,tc},i)=>(
              <span key={i} style={{
                display:"inline-flex",alignItems:"center",gap:6,
                background:bg,color:tc,fontWeight:900,fontSize:12,padding:"8px 16px",
                borderRadius:40,border:`3px solid ${C.black}`,boxShadow:`3px 3px 0 ${C.black}`,
              }} className="tz-body"><Icon size={13}/>{label}</span>
            ))}
          </div>

          {/* Logo — big, centered, animated */}
          <div style={{ display:"flex",justifyContent:"center",marginBottom:32 }}>
            <div style={{ position:"relative",display:"inline-block" }}>
              {/* Glow blob */}
              <div style={{
                position:"absolute",inset:-24,
                background:`radial-gradient(circle,rgba(255,215,0,.25) 0%,transparent 70%)`,
                borderRadius:"50%",animation:"tzGlow 4s ease-in-out infinite",
              }}/>
              <img
                src={bp("/logos/toyzoona-importer-logo-transparent.png")}
                alt="Toyzoona Importer"
                style={{
                  height:200,objectFit:"contain",position:"relative",
                  filter:"drop-shadow(0 8px 32px rgba(255,215,0,.35))",
                  animation:"tzHeroLogo 5s ease-in-out infinite",
                }}
              />
            </div>
          </div>

          {/* Headline */}
          <h1 className="tz-font" style={{ fontSize:"clamp(48px,7vw,96px)",lineHeight:1,marginBottom:16 }}>
            <span className="tz-shine">Toys Per Kilo</span>
          </h1>
          <h2 className="tz-font" style={{
            fontSize:"clamp(22px,3.5vw,42px)",
            color:C.white,marginBottom:20,fontWeight:400,
          }}>
            #1 Toys Per Kilo Supplier in the Philippines
          </h2>

          {/* Sub */}
          <p className="tz-body" style={{
            fontSize:18,lineHeight:1.7,color:"rgba(255,255,255,.65)",
            maxWidth:560,margin:"0 auto 36px",fontWeight:600,
          }}>
            Direct importer of <strong style={{color:C.yellow}}>UK & China toys</strong> sold
            by the kilogram — featured on <strong style={{color:C.yellow}}>TV5</strong>, shipping
            nationwide. Bringing joy to every Filipino family!
          </p>

          {/* CTAs */}
          <div style={{ display:"flex",gap:14,justifyContent:"center",flexWrap:"wrap",marginBottom:40 }}>
            <a href={FACEBOOK_GROUP} target="_blank" rel="noopener noreferrer"
              className="tz-btn tz-pulse"
              style={{
                display:"inline-flex",alignItems:"center",gap:10,
                background:C.red,color:C.white,textDecoration:"none",
                padding:"16px 36px",borderRadius:18,fontWeight:900,
                border:`4px solid ${C.black}`,boxShadow:`6px 6px 0 ${C.black}`,
              }}
            >
              <Facebook size={20}/>
              <span className="tz-font" style={{fontSize:20}}>Join Facebook Group</span>
              <ArrowRight size={18}/>
            </a>
            <a href="#videos" className="tz-btn"
              style={{
                display:"inline-flex",alignItems:"center",gap:10,
                background:C.yellow,color:C.black,textDecoration:"none",
                padding:"16px 28px",borderRadius:18,fontWeight:900,
                border:`4px solid ${C.black}`,boxShadow:`6px 6px 0 ${C.black}`,
              }}
            >
              <Youtube size={20}/>
              <span className="tz-font" style={{fontSize:20}}>Watch Videos</span>
            </a>
          </div>

          {/* Trust micro row */}
          <div style={{ display:"flex",gap:24,justifyContent:"center",flexWrap:"wrap" }}>
            {[
              {icon:CheckCircle2,text:"Direct Importer",c:C.green },
              {icon:CheckCircle2,text:"Sold Per Kilo",  c:C.yellow},
              {icon:CheckCircle2,text:"Safe & Quality", c:C.cyan  },
              {icon:CheckCircle2,text:"Ships Nationwide",c:C.blue },
            ].map(({icon:Icon,text,c})=>(
              <div key={text} style={{display:"flex",alignItems:"center",gap:7}}>
                <Icon size={16} style={{color:c}}/>
                <span className="tz-body" style={{fontSize:14,color:"rgba(255,255,255,.6)",fontWeight:700}}>{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Zigzag bottom */}
        <div style={{position:"absolute",bottom:0,left:0,right:0,overflow:"hidden",lineHeight:0}}>
          <svg viewBox="0 0 1440 56" style={{width:"100%",display:"block"}} preserveAspectRatio="none">
            <polyline
              points="0,56 30,18 60,56 90,18 120,56 150,18 180,56 210,18 240,56 270,18 300,56 330,18 360,56 390,18 420,56 450,18 480,56 510,18 540,56 570,18 600,56 630,18 660,56 690,18 720,56 750,18 780,56 810,18 840,56 870,18 900,56 930,18 960,56 990,18 1020,56 1050,18 1080,56 1110,18 1140,56 1170,18 1200,56 1230,18 1260,56 1290,18 1320,56 1350,18 1380,56 1410,18 1440,56 1440,0 0,0"
              fill={C.darkBg}
            />
          </svg>
        </div>
      </section>

      {/* ══ STATS RIBBON ═════════════════════════════════════════════════════ */}
      <section style={{background:C.black,borderTop:`3px solid ${C.yellow}`,borderBottom:`3px solid ${C.yellow}`}}>
        <div style={{maxWidth:1280,margin:"0 auto",display:"grid",gridTemplateColumns:"repeat(4,1fr)"}} className="tz-grid-4">
          {[
            {val:"1st",  label:"in the South",      sub:"toys per kilo",bg:C.red,    tc:C.white},
            {val:"TV5",  label:"Featured On",        sub:"national TV",  bg:C.yellow, tc:C.black},
            {val:"2+",   label:"Toyfairs",           sub:"participated", bg:C.blue,   tc:C.white},
            {val:"PH",   label:"Ships Nationwide",   sub:"door to door", bg:C.green,  tc:C.black},
          ].map((s,i)=>(
            <ScrollReveal key={i} delay={i*80}>
              <div className="tz-card" style={{
                background:s.bg,padding:"28px 16px",textAlign:"center",
                borderRight:i<3?`3px solid ${C.black}`:"none",
              }}>
                <div className="tz-font" style={{fontSize:46,lineHeight:1,color:s.tc}}>{s.val}</div>
                <div className="tz-body" style={{fontSize:13,fontWeight:900,color:s.tc,marginTop:6,textTransform:"uppercase",letterSpacing:"0.05em"}}>{s.label}</div>
                <div className="tz-body" style={{fontSize:11,color:s.tc,opacity:.65,marginTop:2}}>{s.sub}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ══ BRANDS MARQUEE ═══════════════════════════════════════════════════ */}
      <section style={{padding:"80px 0",background:C.cardBg,position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",top:0,left:0,right:0,height:4,display:"flex"}}>
          {RAINBOW.map((c,i)=><div key={i} style={{flex:1,background:c}}/>)}
        </div>
        <div style={{position:"absolute",bottom:0,left:0,right:0,height:4,display:"flex"}}>
          {[...RAINBOW].reverse().map((c,i)=><div key={i} style={{flex:1,background:c}}/>)}
        </div>

        <ScrollReveal>
          <div style={{textAlign:"center",marginBottom:40,padding:"0 24px"}}>
            <div style={{
              display:"inline-flex",alignItems:"center",gap:8,marginBottom:14,
              background:C.orange,color:C.black,fontWeight:900,fontSize:12,padding:"8px 20px",
              borderRadius:40,border:`3px solid ${C.black}`,boxShadow:`4px 4px 0 ${C.black}`,
            }} className="tz-body"><Sparkles size={14}/> TOY BRANDS</div>
            <h2 className="tz-font" style={{fontSize:"clamp(28px,4vw,48px)",marginBottom:10}}>
              <span style={{color:C.white}}>Explore Our </span>
              <span style={{color:C.yellow}}>Toy Brands</span>
            </h2>
            <p className="tz-body" style={{color:"rgba(255,255,255,.55)",fontSize:16,maxWidth:600,margin:"0 auto",fontWeight:600}}>
              Discover top toy brands available at Toyzoona Importer — perfect for resellers, parents, collectors, and live selling business.
            </p>
          </div>
        </ScrollReveal>

        {/* Marquee — row 1 left, row 2 right */}
        {[false, true].map((reverse, rowIdx) => (
          <div key={rowIdx} style={{overflow:"hidden",marginBottom:rowIdx===0?16:0}}>
            <div style={{
              display:"flex",width:"max-content",
              animation:`${reverse?"tzMarqueeR":"tzMarquee"} ${180+rowIdx*20}s linear infinite`,
            }}>
              {/* Double the brands so the loop is seamless */}
              {[...BRANDS, ...BRANDS].map((b, i) => (
                <div key={i} style={{
                  display:"inline-flex",alignItems:"center",gap:12,
                  margin:"0 10px",padding:"12px 22px",
                  borderRadius:20,border:`3px solid ${b.color}`,
                  background:`${b.color}18`,
                  boxShadow:`4px 4px 0 ${C.black}`,
                  flexShrink:0,
                }}>
                  {/* Logo image with white pill background */}
                  <div style={{
                    width:52,height:36,borderRadius:10,
                    background:C.white,
                    display:"flex",alignItems:"center",justifyContent:"center",
                    border:`2px solid ${C.black}`,boxShadow:`2px 2px 0 ${C.black}`,
                    overflow:"hidden",padding:4,flexShrink:0,
                  }}>
                    <img
                      src={bp(`/brand-logos/${b.slug}.png`)}
                      alt={b.name}
                      style={{maxWidth:"100%",maxHeight:"100%",objectFit:"contain",display:"block"}}
                      onError={(e)=>{
                        const el = e.currentTarget;
                        el.style.display="none";
                        const parent = el.parentElement;
                        if(parent&&!parent.querySelector(".tz-fb")){
                          const span=document.createElement("span");
                          span.className="tz-fb";
                          span.style.cssText=`font-size:14px;font-weight:900;color:${b.color};font-family:'Fredoka One',cursive`;
                          span.textContent=b.name[0];
                          parent.appendChild(span);
                        }
                      }}
                    />
                  </div>
                  <span className="tz-font" style={{fontSize:18,color:C.white,whiteSpace:"nowrap"}}>{b.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* ══ VIDEOS ═══════════════════════════════════════════════════════════ */}
      <section id="videos" style={{padding:"96px 24px",background:C.darkBg,position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",top:0,left:0,right:0,height:5,display:"flex"}}>
          {RAINBOW.map((c,i)=><div key={i} style={{flex:1,background:c}}/>)}
        </div>
        <div className="tz-polka" style={{position:"absolute",inset:0}}/>

        <div style={{position:"relative",maxWidth:1280,margin:"0 auto"}}>
          {/* Featured media row */}
          <ScrollReveal>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:20,marginBottom:24}} className="tz-grid-2">
              <div style={{
                borderRadius:20,overflow:"hidden",
                border:`5px solid ${C.blue}`,boxShadow:`7px 7px 0 ${C.black}`,
                aspectRatio:"16/9",position:"relative",
                background:C.cardBg,
              }}>
                <iframe
                  src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?rel=0&modestbranding=1`}
                  title="Toyzoona Importer — Toys Per Kilo"
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture"
                  allowFullScreen
                  style={{width:"100%",height:"100%",border:"none",display:"block"}}
                />
              </div>
              {[{src:FB_VIDEO_2, border:C.red}].map((v,i)=>(
                <div key={i} style={{
                  borderRadius:20,overflow:"hidden",
                  border:`5px solid ${v.border}`,boxShadow:`7px 7px 0 ${C.black}`,
                  aspectRatio:"16/9",position:"relative",
                  background:C.cardBg,
                }}>
                  <iframe
                    src={v.src}
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    style={{width:"100%",height:"100%",border:"none",display:"block"}}
                    scrolling="no"
                    frameBorder="0"
                    allow="autoplay;clipboard-write;encrypted-media;picture-in-picture;web-share"
                    allowFullScreen
                  />
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Added media row */}
          <ScrollReveal delay={100}>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:20,marginBottom:24}} className="tz-grid-2">
              <div style={{
                borderRadius:20,overflow:"hidden",
                border:`5px solid ${C.green}`,boxShadow:`7px 7px 0 ${C.black}`,
                aspectRatio:"16/9",position:"relative",
                background:C.cardBg,
              }}>
                <iframe
                  src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID_2}?rel=0&modestbranding=1`}
                  title="Toyzoona Importer — Additional Showcase"
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture"
                  allowFullScreen
                  style={{width:"100%",height:"100%",border:"none",display:"block"}}
                />
              </div>
              <div style={{
                borderRadius:20,overflow:"hidden",
                border:`5px solid ${C.purple}`,boxShadow:`7px 7px 0 ${C.black}`,
                aspectRatio:"16/9",position:"relative",
                background:C.cardBg,
              }}>
                <iframe
                  src={FB_VIDEO_3}
                  title="Toyzoona Importer — Facebook Reel"
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  scrolling="no"
                  frameBorder="0"
                  allow="autoplay;clipboard-write;encrypted-media;picture-in-picture;web-share"
                  allowFullScreen
                  style={{width:"100%",height:"100%",border:"none",display:"block"}}
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Facebook video underneath */}
          <ScrollReveal delay={160}>
            <div style={{
              borderRadius:24,overflow:"hidden",
              border:`5px solid ${C.yellow}`,boxShadow:`8px 8px 0 ${C.black}`,
              aspectRatio:"16/9",position:"relative",
            }}>
              <iframe
                src={FB_VIDEO_1}
                title="Toyzoona Importer — Live Content"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                scrolling="no"
                frameBorder="0"
                allow="autoplay;clipboard-write;encrypted-media;picture-in-picture;web-share"
                allowFullScreen
                style={{width:"100%",height:"100%",border:"none",display:"block"}}
              />
            </div>
          </ScrollReveal>

          {/* Channel links strip */}
          <ScrollReveal delay={240}>
            <div style={{
              marginTop:40,padding:"20px 28px",
              background:C.yellow,borderRadius:18,
              border:`4px solid ${C.black}`,boxShadow:`6px 6px 0 ${C.black}`,
              display:"flex",gap:16,flexWrap:"wrap",alignItems:"center",justifyContent:"center",
            }}>
              <a href={YOUTUBE_CHANNEL} target="_blank" rel="noopener noreferrer" className="tz-btn"
                style={{
                  display:"inline-flex",alignItems:"center",gap:8,
                  background:"#FF0000",color:C.white,textDecoration:"none",
                  padding:"10px 22px",borderRadius:12,fontWeight:900,
                  border:`3px solid ${C.black}`,boxShadow:`3px 3px 0 ${C.black}`,
                }}
              >
                <Youtube size={18}/><span className="tz-font" style={{fontSize:16}}>YouTube Channel</span>
              </a>
              <a href={FACEBOOK_GROUP} target="_blank" rel="noopener noreferrer" className="tz-btn"
                style={{
                  display:"inline-flex",alignItems:"center",gap:8,
                  background:"#1877F2",color:C.white,textDecoration:"none",
                  padding:"10px 22px",borderRadius:12,fontWeight:900,
                  border:`3px solid ${C.black}`,boxShadow:`3px 3px 0 ${C.black}`,
                }}
              >
                <Facebook size={18}/><span className="tz-font" style={{fontSize:16}}>Facebook Group</span>
              </a>
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="tz-btn"
                style={{
                  display:"inline-flex",alignItems:"center",gap:8,
                  background:"#0A66C2",color:C.white,textDecoration:"none",
                  padding:"10px 22px",borderRadius:12,fontWeight:900,
                  border:`3px solid ${C.black}`,boxShadow:`3px 3px 0 ${C.black}`,
                }}
              >
                <Linkedin size={18}/><span className="tz-font" style={{fontSize:16}}>LinkedIn</span>
              </a>
              <a href={TIKTOK_URL} target="_blank" rel="noopener noreferrer" className="tz-btn"
                style={{
                  display:"inline-flex",alignItems:"center",gap:8,
                  background:"#111111",color:C.white,textDecoration:"none",
                  padding:"10px 22px",borderRadius:12,fontWeight:900,
                  border:`3px solid ${C.black}`,boxShadow:`3px 3px 0 ${C.black}`,
                }}
              >
                <Music2 size={18}/><span className="tz-font" style={{fontSize:16}}>TikTok</span>
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={260}>
            {/* ── Philippine Star Feature Card ── */}
            <div style={{
              marginTop:28,
              borderRadius:24,
              border:`5px solid ${C.yellow}`,
              background:"linear-gradient(135deg,#1a1200 0%,#0d0d0d 60%,#1a1200 100%)",
              boxShadow:`6px 6px 0 ${C.black}, 0 0 0 2px ${C.yellow}40`,
              padding:"24px 24px 20px",
              position:"relative",
              overflow:"hidden",
            }}>
              {/* comic burst background decoration */}
              <div style={{
                position:"absolute",top:-30,right:-30,
                width:160,height:160,
                background:`radial-gradient(circle, ${C.yellow}22 0%, transparent 70%)`,
                borderRadius:"50%",
                pointerEvents:"none",
              }}/>
              <div style={{
                position:"absolute",bottom:-20,left:-20,
                width:120,height:120,
                background:`radial-gradient(circle, ${C.red}18 0%, transparent 70%)`,
                borderRadius:"50%",
                pointerEvents:"none",
              }}/>

              {/* header row */}
              <div style={{display:"flex",alignItems:"center",gap:14,marginBottom:18,flexWrap:"wrap"}}>
                <div style={{
                  width:52,height:52,borderRadius:16,
                  background:C.yellow,color:C.black,
                  display:"flex",alignItems:"center",justifyContent:"center",
                  border:`3px solid ${C.black}`,boxShadow:`4px 4px 0 ${C.black}`,
                  flexShrink:0,
                }}>
                  <Newspaper size={24} />
                </div>
                <div style={{flex:1}}>
                  <div className="tz-font" style={{fontSize:22,color:C.yellow,lineHeight:1.1}}>
                    Philippine Star
                  </div>
                  <div className="tz-body" style={{fontSize:13,color:"rgba(255,255,255,.65)",marginTop:2}}>
                    Toyzoona featured in the country&apos;s leading broadsheet! 🌟
                  </div>
                </div>
                {/* "FEATURED!" starburst badge */}
                <div style={{
                  background:C.red,color:C.white,
                  padding:"7px 16px",borderRadius:999,
                  border:`3px solid ${C.black}`,boxShadow:`3px 3px 0 ${C.black}`,
                  fontWeight:900,fontSize:12,letterSpacing:"0.12em",textTransform:"uppercase",
                  flexShrink:0,
                }} className="tz-body">
                  ⭐ Featured!
                </div>
              </div>

              {/* iframe wrapper — centred, cartoon-bordered */}
              <div style={{
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
              }}>
                <div style={{
                  borderRadius:18,
                  border:`4px solid ${C.black}`,
                  boxShadow:`7px 7px 0 ${C.black}, 0 0 0 2px ${C.yellow}`,
                  overflow:"hidden",
                  background:"#fff",
                  maxWidth:"100%",
                  lineHeight:0,
                }}>
                  <iframe
                    src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FPhilippineSTAR%2Fposts%2Fpfbid0vDA7WywnMQrir75SeeJAMSqHE7fmWNawG82k2HSZgN4VK6BnmXwREjtNrGGZLohUl&show_text=false&width=500"
                    width="500"
                    height="498"
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    style={{border:"none",overflow:"hidden",display:"block",maxWidth:"100%"}}
                    scrolling="no"
                    frameBorder={0}
                    allowFullScreen
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  />
                </div>
              </div>

              {/* bottom caption */}
              <div style={{
                marginTop:16,
                display:"flex",alignItems:"center",justifyContent:"center",gap:8,
              }}>
                <span className="tz-body" style={{
                  fontSize:12,color:"rgba(255,255,255,.5)",textAlign:"center",
                }}>
                  📰 As featured in <strong style={{color:C.yellow}}>Philippine Star</strong> — sharing the joy of collectibles nationwide!
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══ TV5 SHOWCASE ═════════════════════════════════════════════════════ */}
      <section style={{padding:"96px 24px",background:C.cardBg,position:"relative",overflow:"hidden"}}>
        <div style={{position:"relative",maxWidth:1280,margin:"0 auto"}}>
          <ScrollReveal>
            <div style={{textAlign:"center",marginBottom:52}}>
              <div style={{
                display:"inline-flex",alignItems:"center",gap:8,marginBottom:14,
                background:C.yellow,color:C.black,fontWeight:900,fontSize:12,padding:"8px 20px",
                borderRadius:40,border:`3px solid ${C.black}`,boxShadow:`4px 4px 0 ${C.black}`,
              }} className="tz-body"><Tv size={14}/> AS SEEN ON NATIONAL TV</div>
              <h2 className="tz-font" style={{fontSize:"clamp(30px,4vw,52px)"}}>
                <span style={{color:C.white}}>TV5 </span><span style={{color:C.yellow}}>Showcase</span>
              </h2>
            </div>
          </ScrollReveal>

          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16}} className="tz-grid-2">
            <ScrollReveal variant="fadeRight">
              <div style={{position:"relative",borderRadius:22,overflow:"hidden",border:`5px solid ${C.yellow}`,boxShadow:`8px 8px 0 ${C.black}`}}>
                <img src={bp("/toyzoona-importer/tv-5.jpg")} alt="Toyzoona on TV5" style={{width:"100%",height:440,objectFit:"cover",display:"block"}}/>
                <div style={{position:"absolute",inset:0,background:"linear-gradient(to top,rgba(13,13,26,.85) 0%,transparent 50%)"}}/>
                <div style={{position:"absolute",top:16,left:16}}>
                  <span style={{display:"inline-flex",alignItems:"center",gap:6,background:C.yellow,color:C.black,fontWeight:900,fontSize:11,padding:"5px 12px",borderRadius:40,border:`2px solid ${C.black}`}} className="tz-body"><Tv size={10}/> TV5 · NATIONAL TV</span>
                </div>
                <div style={{position:"absolute",bottom:22,left:22}}>
                  <p className="tz-font" style={{fontSize:22,color:C.white,margin:0}}>Featured: Toys Per Kilo Revolution</p>
                  <p className="tz-body" style={{fontSize:13,color:"rgba(255,255,255,.7)",marginTop:4}}>National broadcast spotlight on Toyzoona Importer</p>
                </div>
              </div>
            </ScrollReveal>

            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14}}>
              {tvPhotos.slice(0,4).map((p,i)=>(
                <ScrollReveal key={i} delay={i*80}>
                  <div style={{position:"relative",borderRadius:16,overflow:"hidden",border:`4px solid ${RAINBOW[i]}`,boxShadow:`5px 5px 0 ${C.black}`}}>
                    <img src={bp(p.src)} alt={p.caption} style={{width:"100%",height:200,objectFit:"cover",display:"block"}}/>
                    <div style={{position:"absolute",inset:0,background:"linear-gradient(to top,rgba(13,13,26,.8) 0%,transparent 55%)"}}/>
                    <div style={{position:"absolute",bottom:10,left:10}}>
                      <span style={{display:"inline-flex",alignItems:"center",gap:4,background:C.yellow,color:C.black,fontWeight:900,fontSize:9,padding:"3px 8px",borderRadius:40}} className="tz-body"><Tv size={8}/> TV5</span>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ GALLERY ══════════════════════════════════════════════════════════ */}
      <section style={{padding:"96px 24px",background:C.darkBg,position:"relative"}}>
        <div style={{position:"absolute",top:0,left:0,right:0,height:5,display:"flex"}}>
          {RAINBOW.map((c,i)=><div key={i} style={{flex:1,background:c}}/>)}
        </div>
        <div className="tz-polka" style={{position:"absolute",inset:0}}/>
        <div style={{position:"relative",maxWidth:1280,margin:"0 auto"}}>
          <ScrollReveal>
            <div style={{textAlign:"center",marginBottom:48}}>
              <div style={{
                display:"inline-flex",alignItems:"center",gap:8,marginBottom:14,
                background:C.purple,color:C.white,fontWeight:900,fontSize:12,padding:"8px 20px",
                borderRadius:40,border:`3px solid ${C.black}`,boxShadow:`4px 4px 0 ${C.black}`,
              }} className="tz-body"><Sparkles size={14}/> TOY GALLERY</div>
              <h2 className="tz-font" style={{fontSize:"clamp(30px,4vw,52px)"}}>
                <span style={{color:C.white}}>Peek at Our </span><span style={{color:C.cyan}}>Toy Collection!</span>
              </h2>
            </div>
          </ScrollReveal>
          <ToyGallery/>
        </div>
      </section>

      {/* ══ WHY TOYZOONA ═════════════════════════════════════════════════════ */}
      <section style={{padding:"96px 24px",background:C.black}}>
        <div style={{maxWidth:1280,margin:"0 auto"}}>
          <ScrollReveal>
            <div style={{textAlign:"center",marginBottom:52}}>
              <div style={{
                display:"inline-flex",alignItems:"center",gap:8,marginBottom:14,
                background:C.orange,color:C.black,fontWeight:900,fontSize:12,padding:"8px 20px",
                borderRadius:40,border:`3px solid ${C.black}`,boxShadow:`4px 4px 0 ${C.black}`,
              }} className="tz-body"><Zap size={14}/> WHY CHOOSE US</div>
              <h2 className="tz-font" style={{fontSize:"clamp(30px,4vw,52px)",color:C.white}}>
                Why <span style={{color:C.orange}}>Toyzoona</span> Importer?
              </h2>
            </div>
          </ScrollReveal>
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:20}} className="tz-grid-3">
            {reasons.map(({icon:Icon,title,desc,color},i)=>(
              <ScrollReveal key={i} delay={i*80}>
                <div className="tz-card" style={{
                  borderRadius:24,padding:"28px 22px",height:"100%",background:C.cardBg,
                  border:`4px solid ${color}`,boxShadow:`6px 6px 0 ${color}40`,
                }}>
                  <div style={{
                    width:56,height:56,borderRadius:16,marginBottom:16,background:color,
                    display:"flex",alignItems:"center",justifyContent:"center",
                    border:`3px solid ${C.black}`,boxShadow:`3px 3px 0 ${C.black}`,
                  }}>
                    <Icon size={26} style={{color:[C.black,C.white,C.black,C.black,C.white,C.black][i]}}/>
                  </div>
                  <h3 className="tz-font" style={{fontSize:20,color:C.white,marginBottom:8}}>{title}</h3>
                  <p className="tz-body" style={{fontSize:14,color:"rgba(255,255,255,.6)",lineHeight:1.6,margin:0}}>{desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ HOW TO BUY ═══════════════════════════════════════════════════════ */}
      <section id="how-to-buy" style={{padding:"96px 24px",background:C.darkBg,position:"relative",overflow:"hidden"}}>
        <div className="tz-polka" style={{position:"absolute",inset:0}}/>
        <div style={{position:"relative",maxWidth:1280,margin:"0 auto"}}>
          <ScrollReveal>
            <div style={{textAlign:"center",marginBottom:52}}>
              <div style={{
                display:"inline-flex",alignItems:"center",gap:8,marginBottom:14,
                background:C.blue,color:C.white,fontWeight:900,fontSize:12,padding:"8px 20px",
                borderRadius:40,border:`3px solid ${C.black}`,boxShadow:`4px 4px 0 ${C.black}`,
              }} className="tz-body"><ShoppingBag size={14}/> HOW TO BUY</div>
              <h2 className="tz-font" style={{fontSize:"clamp(30px,4vw,52px)",color:C.white}}>
                4 Ways to Get <span style={{color:C.blue}}>Your Toys!</span>
              </h2>
            </div>
          </ScrollReveal>
          <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:20}} className="tz-grid-2">
            {howToBuy.map((m,i)=>{
              const Icon=m.icon;
              return (
                <ScrollReveal key={i} delay={i*80}>
                  <div className="tz-card" style={{
                    position:"relative",borderRadius:24,padding:"32px 28px",
                    background:C.cardBg,border:`4px solid ${m.color}`,
                    boxShadow:`7px 7px 0 ${C.black}`,overflow:"hidden",
                  }}>
                    <div className="tz-font" style={{position:"absolute",top:14,right:20,fontSize:80,lineHeight:1,color:`${m.color}10`,userSelect:"none"}}>{m.step}</div>
                    <div style={{display:"flex",alignItems:"flex-start",gap:18}}>
                      <div style={{width:58,height:58,borderRadius:16,flexShrink:0,background:m.color,display:"flex",alignItems:"center",justifyContent:"center",border:`3px solid ${C.black}`,boxShadow:`3px 3px 0 ${C.black}`}}>
                        <Icon size={26} style={{color:m.color===C.yellow?C.black:C.white}}/>
                      </div>
                      <div style={{flex:1}}>
                        <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:8}}>
                          <h3 className="tz-font" style={{fontSize:22,color:C.white,margin:0}}>{m.title}</h3>
                          <span style={{background:`${m.color}25`,color:m.color,fontSize:11,fontWeight:900,padding:"4px 12px",borderRadius:40,border:`2px solid ${m.color}`}} className="tz-body">{m.badge}</span>
                        </div>
                        <p className="tz-body" style={{fontSize:14,color:"rgba(255,255,255,.6)",lineHeight:1.6,margin:0}}>{m.desc}</p>
                        {(m as any).link&&(
                          <a href={(m as any).link} target="_blank" rel="noopener noreferrer" style={{display:"inline-flex",alignItems:"center",gap:6,color:m.color,textDecoration:"none",fontSize:13,fontWeight:800,marginTop:12}}>
                            Join the Group <ArrowRight size={13}/>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
          {/* Schedule strip */}
          <ScrollReveal delay={200}>
            <div style={{
              marginTop:36,padding:"22px 32px",background:C.yellow,borderRadius:20,
              border:`4px solid ${C.black}`,boxShadow:`6px 6px 0 ${C.black}`,
              display:"flex",gap:32,flexWrap:"wrap",justifyContent:"center",alignItems:"center",
            }}>
              {[
                {icon:Clock,     label:"Live Selling",time:"Mon–Sat 9AM–6:30PM"},
                {icon:Warehouse, label:"Warehouse",   time:"Mon–Sat 9AM–6:30PM"},
                {icon:ShoppingBag,label:"Auction",    time:"Every Saturday 10AM"},
              ].map(({icon:Icon,label,time},i)=>(
                <div key={i} style={{display:"flex",alignItems:"center",gap:10}}>
                  <div style={{width:40,height:40,borderRadius:12,background:C.black,display:"flex",alignItems:"center",justifyContent:"center",border:`3px solid ${C.black}`,boxShadow:`2px 2px 0 ${C.orange}`}}>
                    <Icon size={18} style={{color:C.yellow}}/>
                  </div>
                  <div>
                    <div className="tz-font" style={{fontSize:16,color:C.black}}>{label}</div>
                    <div className="tz-body" style={{fontSize:12,color:"#333",fontWeight:700}}>{time}</div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══ TOYFAIR ══════════════════════════════════════════════════════════ */}
      <section style={{padding:"96px 24px",background:C.cardBg}}>
        <div style={{maxWidth:1280,margin:"0 auto"}}>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:72,alignItems:"center"}} className="tz-grid-2">
            <ScrollReveal variant="fadeRight">
              <div>
                <div style={{display:"inline-flex",alignItems:"center",gap:8,marginBottom:20,background:C.purple,color:C.white,fontWeight:900,fontSize:12,padding:"8px 20px",borderRadius:40,border:`3px solid ${C.black}`,boxShadow:`4px 4px 0 ${C.black}`}} className="tz-body"><Trophy size={13}/> TOYFAIR PARTICIPANT</div>
                <h2 className="tz-font" style={{fontSize:"clamp(28px,3.5vw,46px)",marginBottom:20}}>
                  <span style={{color:C.white}}>Proudly Representing</span><br/>
                  <span style={{color:C.purple}}>at Major Toyfairs!</span>
                </h2>
                <p className="tz-body" style={{fontSize:16,color:"rgba(255,255,255,.6)",lineHeight:1.7,marginBottom:28}}>
                  Participating in the biggest toy events in the Philippines — showcasing our per-kilo concept to enthusiasts, resellers, and families nationwide.
                </p>
                <div style={{display:"flex",flexDirection:"column",gap:12}}>
                  {[
                    {text:"Pioneer per-kilo concept at national events",c:C.yellow},
                    {text:"Connecting directly with resellers & wholesalers",c:C.cyan},
                    {text:"Showcasing UK & China imported toy collections",c:C.green},
                    {text:"Building the biggest toy buyer community in the South",c:C.orange},
                  ].map(({text,c},i)=>(
                    <div key={i} style={{display:"flex",alignItems:"flex-start",gap:10}}>
                      <div style={{width:28,height:28,borderRadius:8,flexShrink:0,marginTop:1,background:c,display:"flex",alignItems:"center",justifyContent:"center",border:`2px solid ${C.black}`,boxShadow:`2px 2px 0 ${C.black}`}}>
                        <CheckCircle2 size={14} style={{color:C.black}}/>
                      </div>
                      <span className="tz-body" style={{fontSize:14,color:"rgba(255,255,255,.7)",lineHeight:1.5}}>{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal variant="fadeLeft">
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14}}>
                {toyfairPhotos.map((src,i)=>(
                  <div key={i} className="tz-card" style={{borderRadius:18,overflow:"hidden",border:`4px solid ${RAINBOW[i]}`,boxShadow:`6px 6px 0 ${C.black}`,transform:`rotate(${i%2===0?-1.5:1.5}deg)`}}>
                    <img src={bp(src)} alt={`Toyfair ${i+1}`} style={{width:"100%",height:180,objectFit:"cover",display:"block"}}/>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ══ FINAL CTA ════════════════════════════════════════════════════════ */}
      <section style={{padding:"100px 24px",background:C.black,position:"relative",overflow:"hidden"}}>
        <div style={{
          position:"absolute",left:"50%",top:"50%",transform:"translate(-50%,-50%)",
          width:"110vw",height:"110vw",
          backgroundImage:`conic-gradient(from 0deg,${C.blue}15 0deg 8deg,transparent 8deg 16deg,${C.yellow}15 16deg 24deg,transparent 24deg 32deg,${C.red}15 32deg 40deg,transparent 40deg 48deg,${C.green}15 48deg 56deg,transparent 56deg 64deg,${C.purple}15 64deg 72deg,transparent 72deg 80deg,${C.orange}15 80deg 88deg,transparent 88deg 360deg)`,
          animation:"tzSpin 60s linear infinite",opacity:.2,
        }}/>
        <div className="tz-polka" style={{position:"absolute",inset:0}}/>

        <div style={{position:"relative",zIndex:1,maxWidth:800,margin:"0 auto",textAlign:"center"}}>
          <ScrollReveal variant="scale">
            <div style={{display:"inline-flex",alignItems:"center",gap:8,marginBottom:28,background:C.yellow,color:C.black,fontWeight:900,fontSize:13,padding:"10px 24px",borderRadius:40,border:`4px solid ${C.black}`,boxShadow:`5px 5px 0 ${C.black}`,animation:"tzBounce 2.5s ease-in-out infinite"}} className="tz-body">
              <Zap size={16}/> JOIN THE MOVEMENT
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="tz-font" style={{fontSize:"clamp(40px,6vw,72px)",lineHeight:1.05,marginBottom:24}}>
              <span style={{color:C.white}}>Ready to Shop</span><br/>
              <span className="tz-shine" style={{fontSize:"clamp(48px,7vw,88px)"}}>Toys Per Kilo?</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="tz-body" style={{fontSize:18,color:"rgba(255,255,255,.6)",marginBottom:44,lineHeight:1.7,fontWeight:600}}>
              Join thousands of customers and resellers in our Facebook group. Live deals, flash sales, UK &amp; China drops — all for free!
            </p>
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <div style={{display:"flex",gap:16,justifyContent:"center",flexWrap:"wrap"}}>
              <a href={FACEBOOK_GROUP} target="_blank" rel="noopener noreferrer" className="tz-btn tz-pulse"
                style={{display:"inline-flex",alignItems:"center",gap:12,background:C.red,color:C.white,textDecoration:"none",padding:"20px 40px",borderRadius:18,fontWeight:900,border:`5px solid ${C.black}`,boxShadow:`7px 7px 0 ${C.black}`}}
              >
                <Facebook size={24}/><span className="tz-font" style={{fontSize:22}}>Join Facebook Group</span><ArrowRight size={20}/>
              </a>
              <a href={YOUTUBE_CHANNEL} target="_blank" rel="noopener noreferrer" className="tz-btn"
                style={{display:"inline-flex",alignItems:"center",gap:12,background:C.yellow,color:C.black,textDecoration:"none",padding:"20px 32px",borderRadius:18,fontWeight:900,border:`5px solid ${C.black}`,boxShadow:`7px 7px 0 ${C.black}`}}
              >
                <Youtube size={22}/><span className="tz-font" style={{fontSize:22}}>YouTube Channel</span>
              </a>
              <a href={TIKTOK_URL} target="_blank" rel="noopener noreferrer" className="tz-btn"
                style={{display:"inline-flex",alignItems:"center",gap:12,background:C.white,color:C.black,textDecoration:"none",padding:"20px 32px",borderRadius:18,fontWeight:900,border:`5px solid ${C.black}`,boxShadow:`7px 7px 0 ${C.black}`}}
              >
                <Music2 size={22}/><span className="tz-font" style={{fontSize:22}}>TikTok</span>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══ FOOTER ═══════════════════════════════════════════════════════════ */}
      <footer style={{background:C.darkBg,borderTop:`3px solid ${C.yellow}`,padding:"32px 24px"}}>
        <div style={{display:"flex",height:4,marginBottom:28}}>
          {RAINBOW.map((c,i)=><div key={i} style={{flex:1,background:c}}/>)}
        </div>
        <div style={{maxWidth:1280,margin:"0 auto",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:16}}>
          <div style={{display:"flex",alignItems:"center",gap:12}}>
              <img src={bp("/logos/toyzoona-importer-logo-transparent.png")} alt="Toyzoona Importer" style={{height:44,objectFit:"contain"}}/>
            <div>
              <div className="tz-font" style={{fontSize:18,color:C.white}}>Toyzoona Importer</div>
              <div className="tz-body" style={{fontSize:11,color:"rgba(255,255,255,.4)"}}>Part of Pring Group of Companies</div>
            </div>
          </div>
          <div style={{display:"flex",gap:16,flexWrap:"wrap"}}>
            <a href={FACEBOOK_GROUP} target="_blank" rel="noopener noreferrer" style={{display:"flex",alignItems:"center",gap:6,color:"rgba(255,255,255,.5)",textDecoration:"none",fontSize:13,fontWeight:700}}>
              <Facebook size={14}/> Facebook Group
            </a>
            <a href={YOUTUBE_CHANNEL} target="_blank" rel="noopener noreferrer" style={{display:"flex",alignItems:"center",gap:6,color:"rgba(255,255,255,.5)",textDecoration:"none",fontSize:13,fontWeight:700}}>
              <Youtube size={14}/> YouTube
            </a>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" style={{display:"flex",alignItems:"center",gap:6,color:"rgba(255,255,255,.5)",textDecoration:"none",fontSize:13,fontWeight:700}}>
              <Linkedin size={14}/> LinkedIn
            </a>
            <a href={TIKTOK_URL} target="_blank" rel="noopener noreferrer" style={{display:"flex",alignItems:"center",gap:6,color:"rgba(255,255,255,.5)",textDecoration:"none",fontSize:13,fontWeight:700}}>
              <Music2 size={14}/> TikTok
            </a>
            <Link href="/" style={{color:"rgba(255,255,255,.5)",textDecoration:"none",fontSize:13,fontWeight:700}}>Pring Group</Link>
          </div>
          <div className="tz-body" style={{fontSize:12,color:"rgba(255,255,255,.3)"}}>
            © {new Date().getFullYear()} Pring Group of Companies · Cabuyao, Laguna
          </div>
        </div>
      </footer>
    </main>
  );
}
