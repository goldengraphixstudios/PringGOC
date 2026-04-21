"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { bp } from "@/lib/basePath";
import {
  ArrowLeft, ArrowRight, CheckCircle2, Clock, Mail,
  MapPin, Package, Phone, Shield, Star, Truck,
  Zap, Warehouse, Route, Users, Award, ChevronRight,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import BusinessNavArrows from "@/components/BusinessNavArrows";
import BusinessPopup from "@/components/BusinessPopup";

/* ── COLORS ──────────────────────────────────────────────────────────────── */
const C = {
  navy:   "#0A1628",
  blue:   "#1A3A5C",
  mid:    "#2B5A8C",
  gold:   "#C9A84C",
  yellow: "#E8C84A",
  white:  "#FFFFFF",
  gray:   "#8A9BB0",
  bg:     "#06101E",
  card:   "#0F1E30",
};

const EMAIL    = "mailto:official.pringgroupofcompany@gmail.com";
const FACEBOOK = "https://www.facebook.com/RFGauctionhouse";

const SERVICES = [
  { icon: Truck,     title: "Truck Rental",           desc: "Flexible truck hire for any duration — by the day, week, or project. Fleet of ~10 units ready to deploy.", color: C.gold   },
  { icon: Package,   title: "Hauling Services",        desc: "Safe transport of cargo, materials, and goods. We handle the loading, logistics, and timely delivery.",     color: C.mid    },
  { icon: Route,     title: "Materials Transport",     desc: "Construction materials, bulk goods, industrial cargo — we move it all safely across Laguna and beyond.",    color: C.gold   },
  { icon: Warehouse, title: "Logistics Solutions",     desc: "End-to-end logistics support for businesses that need a dependable ground transport partner.",               color: C.mid    },
];

const HIGHLIGHTS = [
  { icon: Star,         text: "Fleet of ~10 well-maintained trucks",     color: C.gold   },
  { icon: Users,        text: "Professional & reliable drivers",          color: C.yellow },
  { icon: Shield,       text: "Safe and timely deliveries guaranteed",    color: C.gold   },
  { icon: Award,        text: "Handles small to large-scale loads",       color: C.yellow },
  { icon: Clock,        text: "Available for urgent & scheduled bookings",color: C.gold   },
  { icon: CheckCircle2, text: "Well-maintained & regularly inspected",    color: C.yellow },
];

const STEPS = [
  { n:"01", icon: Mail,   title: "Send Your Inquiry",  desc: "Email us your requirements — cargo type, destination, volume, and preferred schedule.",            color: C.gold },
  { n:"02", icon: Truck,  title: "We Match Your Truck", desc: "We assign the right truck size from our fleet based on your load and route requirements.",         color: C.mid  },
  { n:"03", icon: Route,  title: "Pickup & Delivery",   desc: "Our professional driver handles the entire trip — punctual pickup, safe transport, on-time drop.",  color: C.gold },
];

/* ── TRUCK GALLERY ─────────────────────────────────────────────────────────── */
function TruckGallery() {
  const IMGS = [
    "/pring-trucking/truck-1.jpg",
    "/pring-trucking/truck-2.jpg",
    "/pring-trucking/truck-3.jpg",
    "/pring-trucking/truck-4.jpg",
    "/pring-trucking/truck-5.jpg",
  ];
  const [active, setActive] = useState(0);
  const [phase, setPhase] = useState<"in"|"out">("in");

  useEffect(() => {
    const t = setInterval(() => {
      setPhase("out");
      setTimeout(() => { setActive(a => (a + 1) % IMGS.length); setPhase("in"); }, 360);
    }, 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <div>
      <div style={{
        position:"relative",borderRadius:24,overflow:"hidden",
        border:`4px solid ${C.gold}`,
        boxShadow:`0 0 0 1px ${C.blue}, 8px 8px 0 ${C.navy}`,
        aspectRatio:"16/9",
        opacity: phase === "out" ? 0 : 1,
        transform: phase === "out" ? "scale(0.98)" : "scale(1)",
        transition:"opacity 0.36s ease, transform 0.4s cubic-bezier(.34,1.3,.64,1)",
      }}>
        <img src={bp(IMGS[active])} alt={`Truck ${active+1}`}
          style={{width:"100%",height:"100%",objectFit:"cover",display:"block"}}/>
        {/* Overlay */}
        <div style={{position:"absolute",inset:0,background:"linear-gradient(to top,rgba(6,16,30,.7) 0%,transparent 55%)"}}/>
        <div style={{position:"absolute",bottom:16,left:20,display:"flex",alignItems:"center",gap:8}}>
          <div style={{background:C.gold,color:C.navy,fontSize:11,fontWeight:900,padding:"4px 12px",borderRadius:20,letterSpacing:"0.08em"}}>
            PRING TRUCKING FLEET
          </div>
        </div>
        {/* Frame corners */}
        <div style={{position:"absolute",top:12,left:12,width:24,height:24,borderTop:`3px solid ${C.gold}`,borderLeft:`3px solid ${C.gold}`,borderRadius:"4px 0 0 0",opacity:.6}}/>
        <div style={{position:"absolute",bottom:12,right:12,width:24,height:24,borderBottom:`3px solid ${C.gold}`,borderRight:`3px solid ${C.gold}`,borderRadius:"0 0 4px 0",opacity:.6}}/>
      </div>
      {/* Thumbnails */}
      <div style={{display:"flex",gap:8,marginTop:12}}>
        {IMGS.map((_,i)=>(
          <button key={i} onClick={()=>setActive(i)} style={{
            flex:1,height:56,borderRadius:10,overflow:"hidden",cursor:"pointer",padding:0,
            border:`3px solid ${i===active?C.gold:"transparent"}`,
            boxShadow:i===active?`0 0 0 1px ${C.gold}40`:"none",
            transition:"all .25s ease",opacity:i===active?1:0.45,
          }}>
            <img src={bp(IMGS[i])} alt="" style={{width:"100%",height:"100%",objectFit:"cover",display:"block"}}/>
          </button>
        ))}
      </div>
    </div>
  );
}

/* ── PAGE ─────────────────────────────────────────────────────────────────── */
export default function PringTruckingPage() {
  return (
    <main style={{ background:C.bg,color:C.white,overflowX:"hidden",fontFamily:"'Inter',system-ui,sans-serif" }}>
      <BusinessNavArrows currentSlug="pring-trucking" />
      <BusinessPopup config={{
        storageKey: "popup-pring-trucking",
        delay: 2200,
        headerBg: "linear-gradient(135deg, #040C1C 0%, #0A1628 50%, #1A3A5C 100%)",
        headerIcon: "🚛",
        modalBg: "#0A1628",
        eyebrow: "TRUCK RENTAL INQUIRY",
        eyebrowColor: "#C9A84C",
        title: "Need a truck for hauling or delivery?",
        titleColor: "#E8F0F8",
        body: "Tell us what needs to be moved and we\u2019ll help match the right truck for your transport or logistics requirement.",
        bodyColor: "rgba(232,240,248,0.48)",
        primaryCTA: "Request a Quote",
        primaryHref: "#contact",
        ctaBg: "#C9A84C",
        ctaColor: "#0A1628",
        secondaryCTA: "Email an Inquiry",
        secondaryHref: "#contact",
        secondaryColor: "rgba(201,168,76,0.5)",
        badge: "~10 Trucks",
        badgeBg: "rgba(201,168,76,0.2)",
        badgeColor: "#C9A84C",
        accentLine: "#C9A84C",
        logoSrc: "/logos/pring-trucking.svg",
      }} />

      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;800;900&family=Inter:wght@400;500;600;700;800&display=swap');

        .pt-heading { font-family: 'Barlow Condensed', system-ui, sans-serif; letter-spacing: 0.01em; }
        .pt-body    { font-family: 'Inter', system-ui, sans-serif; }

        @keyframes ptReveal  { from{opacity:0;transform:translateY(28px)}to{opacity:1;transform:translateY(0)} }
        @keyframes ptSlideR  { from{opacity:0;transform:translateX(-40px)}to{opacity:1;transform:translateX(0)} }
        @keyframes ptPulse   { 0%,100%{box-shadow:0 0 0 0 rgba(201,168,76,.4)}50%{box-shadow:0 0 0 18px rgba(201,168,76,0)} }
        @keyframes ptSpin    { to{transform:rotate(360deg)} }
        @keyframes ptDrive   { 0%{transform:translateX(-60px) scaleX(-1)}100%{transform:translateX(60px) scaleX(-1)} }
        @keyframes ptGlow    { 0%,100%{opacity:.18}50%{opacity:.35} }
        @keyframes ptMarquee { from{transform:translateX(0)}to{transform:translateX(-50%)} }
        @keyframes ptBounce  { 0%,100%{transform:translateY(0)}45%{transform:translateY(-10px)}70%{transform:translateY(-3px)} }

        .pt-stagger > * { opacity:0; animation:ptReveal .6s cubic-bezier(.34,1.4,.64,1) forwards; }
        .pt-stagger > *:nth-child(1){animation-delay:.06s}
        .pt-stagger > *:nth-child(2){animation-delay:.16s}
        .pt-stagger > *:nth-child(3){animation-delay:.26s}
        .pt-stagger > *:nth-child(4){animation-delay:.36s}
        .pt-stagger > *:nth-child(5){animation-delay:.46s}
        .pt-stagger > *:nth-child(6){animation-delay:.56s}

        .pt-card { transition:transform .3s cubic-bezier(.34,1.56,.64,1),box-shadow .3s ease; }
        .pt-card:hover { transform:translateY(-7px) scale(1.02); }
        .pt-btn  { transition:transform .26s cubic-bezier(.34,1.56,.64,1); cursor:pointer; }
        .pt-btn:hover  { transform:translateY(-3px) scale(1.03); }
        .pt-btn:active { transform:scale(.97); }
        .pt-pulse { animation:ptPulse 2.5s ease-in-out infinite; }

        .pt-gold-shine {
          background: linear-gradient(90deg,#C9A84C 0%,#F0D87A 35%,#C9A84C 65%,#E8C84A 100%);
          background-size:200% auto;
          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
          background-clip:text;
        }

        .pt-grid {
          background-image: linear-gradient(rgba(201,168,76,.04) 1px,transparent 1px),
                            linear-gradient(90deg,rgba(201,168,76,.04) 1px,transparent 1px);
          background-size:44px 44px;
        }

        @media(max-width:768px){
          .pt-2col{grid-template-columns:1fr !important}
          .pt-4col{grid-template-columns:1fr 1fr !important}
          .pt-3col{grid-template-columns:1fr !important}
        }
      `}} />

      {/* ══ NAV ══════════════════════════════════════════════════════════════ */}
      <nav style={{
        position:"fixed",top:0,left:0,right:0,zIndex:50,
        background:"rgba(6,16,30,0.96)",backdropFilter:"blur(20px)",
        borderBottom:`1px solid rgba(201,168,76,.15)`,
      }}>
        <div style={{ maxWidth:1280,margin:"0 auto",padding:"0 28px",height:64,display:"flex",alignItems:"center",justifyContent:"space-between" }}>
          <Link href="/" style={{ display:"flex",alignItems:"center",gap:8,color:C.gray,textDecoration:"none",fontSize:14,fontWeight:500,transition:"color .2s" }}
            onMouseEnter={e=>(e.currentTarget as HTMLElement).style.color=C.white}
            onMouseLeave={e=>(e.currentTarget as HTMLElement).style.color=C.gray}
          >
            <ArrowLeft size={16}/><span className="pt-body">All Businesses</span>
          </Link>

          {/* Logo SVG inline */}
          <div style={{ display:"flex",alignItems:"center",gap:10 }}>
            <img src={bp("/logos/pring-trucking.svg")} alt="Pring Trucking"
              style={{ height:38,objectFit:"contain" }} />
          </div>

          <a href={EMAIL} className="pt-btn"
            style={{
              display:"flex",alignItems:"center",gap:7,
              background:C.gold,color:C.navy,textDecoration:"none",
              borderRadius:10,padding:"9px 18px",fontSize:13,fontWeight:700,
              boxShadow:`0 4px 20px rgba(201,168,76,.3)`,
            }}
          >
            <Mail size={14}/><span className="pt-body">Get a Quote</span>
          </a>
        </div>
      </nav>

      {/* ══ HERO ═════════════════════════════════════════════════════════════ */}
      <section style={{ position:"relative",minHeight:"100vh",display:"flex",alignItems:"center",paddingTop:64,overflow:"hidden" }}>
        {/* BG layers */}
        <div style={{position:"absolute",inset:0,background:`radial-gradient(ellipse at 30% 50%,rgba(27,58,92,.4) 0%,rgba(6,16,30,1) 65%)`}}/>
        <div className="pt-grid" style={{position:"absolute",inset:0,pointerEvents:"none"}}/>
        {/* Gold glow */}
        <div style={{position:"absolute",top:"30%",right:"10%",width:500,height:500,borderRadius:"50%",background:`radial-gradient(circle,rgba(201,168,76,.07) 0%,transparent 70%)`,animation:"ptGlow 6s ease-in-out infinite",pointerEvents:"none"}}/>

        <div style={{ position:"relative",zIndex:2,maxWidth:1280,margin:"0 auto",padding:"60px 32px 100px",width:"100%",display:"grid",gridTemplateColumns:"1fr 1fr",gap:64,alignItems:"center" }} className="pt-2col">

          {/* Left */}
          <div className="pt-stagger">
            {/* Eyebrow */}
            <div style={{ display:"flex",alignItems:"center",gap:8,marginBottom:24 }}>
              <div style={{ width:32,height:3,background:C.gold,borderRadius:2 }}/>
              <span className="pt-body" style={{ fontSize:12,fontWeight:700,color:C.gold,letterSpacing:"0.18em",textTransform:"uppercase" }}>
                Laguna, Philippines
              </span>
            </div>

            {/* Headline */}
            <h1 className="pt-heading" style={{ fontSize:"clamp(52px,7vw,96px)",lineHeight:0.92,fontWeight:900,marginBottom:24 }}>
              <span style={{color:C.white}}>RELIABLE</span><br/>
              <span className="pt-gold-shine">HAULING.</span><br/>
              <span style={{color:C.white}}>ON TIME,</span><br/>
              <span style={{color:C.white}}>EVERY</span>{" "}
              <span style={{color:C.gold}}>TIME.</span>
            </h1>

            <p className="pt-body" style={{ fontSize:17,lineHeight:1.75,color:C.gray,maxWidth:460,marginBottom:36,fontWeight:500 }}>
              Professional truck rental and hauling services across Laguna. Fleet of ~10 well-maintained trucks with experienced drivers — ready for small deliveries or large-scale logistics.
            </p>

            {/* CTAs */}
            <div style={{ display:"flex",gap:14,flexWrap:"wrap",marginBottom:44 }}>
              <a href={EMAIL} className="pt-btn pt-pulse"
                style={{
                  display:"inline-flex",alignItems:"center",gap:10,
                  background:C.gold,color:C.navy,textDecoration:"none",
                  padding:"16px 32px",borderRadius:12,fontWeight:800,fontSize:15,
                  boxShadow:`0 8px 32px rgba(201,168,76,.35)`,
                }}
              >
                <Mail size={18}/>
                <span className="pt-body">Get a Free Quote</span>
                <ArrowRight size={16}/>
              </a>
              <a href="#fleet" className="pt-btn"
                style={{
                  display:"inline-flex",alignItems:"center",gap:10,
                  background:"transparent",color:C.gold,textDecoration:"none",
                  padding:"16px 28px",borderRadius:12,fontWeight:700,fontSize:15,
                  border:`2px solid rgba(201,168,76,.35)`,
                }}
              >
                <Truck size={18}/>
                <span className="pt-body">View Fleet</span>
              </a>
            </div>

            {/* Trust row */}
            <div style={{ display:"flex",gap:24,flexWrap:"wrap" }}>
              {[
                {icon:CheckCircle2,text:"~10 Truck Fleet",   c:C.gold  },
                {icon:CheckCircle2,text:"Pro Drivers",       c:C.yellow},
                {icon:CheckCircle2,text:"Laguna-Based",      c:C.gold  },
              ].map(({icon:Icon,text,c})=>(
                <div key={text} style={{display:"flex",alignItems:"center",gap:7}}>
                  <Icon size={15} style={{color:c}}/>
                  <span className="pt-body" style={{fontSize:13,color:C.gray,fontWeight:600}}>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — gallery */}
          <div style={{ position:"relative" }}>
            <TruckGallery/>

            {/* Floating stats */}
            <div style={{
              position:"absolute",top:-16,left:-20,
              background:C.navy,color:C.white,
              padding:"14px 20px",borderRadius:16,
              border:`1px solid rgba(201,168,76,.25)`,
              boxShadow:`0 8px 32px rgba(0,0,0,.5),0 0 0 1px rgba(201,168,76,.1)`,
              backdropFilter:"blur(12px)",
              animation:"ptBounce 4s ease-in-out infinite",
              zIndex:3,
            }}>
              <div className="pt-heading" style={{fontSize:32,fontWeight:900,color:C.gold,lineHeight:1}}>~10</div>
              <div className="pt-body" style={{fontSize:11,color:C.gray,fontWeight:600,marginTop:2}}>Trucks in Fleet</div>
            </div>

            <div style={{
              position:"absolute",bottom:-14,right:-16,
              background:C.navy,color:C.white,
              padding:"12px 18px",borderRadius:14,
              border:`1px solid rgba(201,168,76,.2)`,
              boxShadow:`0 8px 32px rgba(0,0,0,.5)`,
              backdropFilter:"blur(12px)",
              animation:"ptBounce 5s ease-in-out infinite 1.2s",
              zIndex:3,
            }}>
              <div style={{display:"flex",alignItems:"center",gap:8}}>
                <div style={{width:8,height:8,borderRadius:"50%",background:"#4CAF50",boxShadow:"0 0 8px #4CAF50"}}/>
                <span className="pt-body" style={{fontSize:12,fontWeight:700,color:C.white}}>Available Now</span>
              </div>
              <div className="pt-body" style={{fontSize:11,color:C.gray,marginTop:2}}>Ready to dispatch</div>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div style={{position:"absolute",bottom:0,left:0,right:0,height:100,background:`linear-gradient(to top,${C.bg},transparent)`,pointerEvents:"none"}}/>
      </section>

      {/* ══ GOLD STRIP ═══════════════════════════════════════════════════════ */}
      <div style={{ background:C.gold,overflow:"hidden",padding:"14px 0",borderTop:`1px solid ${C.yellow}`,borderBottom:`1px solid ${C.yellow}` }}>
        <div style={{ display:"flex",width:"max-content",animation:"ptMarquee 200s linear infinite" }}>
          {[...Array(6)].map((_,set)=>
            ["🚛 Truck Rental Available", "📦 Hauling Services", "🛣️ Laguna Coverage", "⚡ Fast Dispatch", "🔒 Safe & Reliable", "📧 Inquire Now"].map((item,i)=>(
              <span key={`${set}-${i}`} className="pt-heading" style={{ fontSize:17,fontWeight:800,color:C.navy,whiteSpace:"nowrap",padding:"0 32px",letterSpacing:"0.04em" }}>{item}</span>
            ))
          )}
        </div>
      </div>

      {/* ══ SERVICES ═════════════════════════════════════════════════════════ */}
      <section style={{ padding:"96px 32px",background:C.bg,position:"relative" }}>
        <div className="pt-grid" style={{position:"absolute",inset:0,pointerEvents:"none",opacity:.5}}/>
        <div style={{ position:"relative",maxWidth:1280,margin:"0 auto" }}>
          <ScrollReveal>
            <div style={{ marginBottom:56 }}>
              <div style={{ display:"flex",alignItems:"center",gap:12,marginBottom:16 }}>
                <div style={{ width:4,height:36,background:C.gold,borderRadius:2 }}/>
                <span className="pt-body" style={{ fontSize:12,fontWeight:700,color:C.gold,textTransform:"uppercase",letterSpacing:"0.18em" }}>What We Offer</span>
              </div>
              <h2 className="pt-heading" style={{ fontSize:"clamp(36px,5vw,64px)",fontWeight:900,color:C.white,lineHeight:0.95 }}>
                Our <span style={{color:C.gold}}>Services</span>
              </h2>
            </div>
          </ScrollReveal>

          <div style={{ display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:20 }} className="pt-4col">
            {SERVICES.map(({icon:Icon,title,desc,color},i)=>(
              <ScrollReveal key={i} delay={i*80}>
                <div className="pt-card" style={{
                  borderRadius:20,padding:"32px 24px",height:"100%",
                  background:C.card,
                  border:`1px solid ${i%2===0?"rgba(201,168,76,.2)":"rgba(43,90,140,.3)"}`,
                  boxShadow:i%2===0?`0 0 0 1px rgba(201,168,76,.05),0 20px 60px rgba(0,0,0,.3)`:`0 20px 60px rgba(0,0,0,.3)`,
                }}>
                  <div style={{
                    width:56,height:56,borderRadius:14,marginBottom:22,
                    background:i%2===0?`rgba(201,168,76,.12)`:`rgba(43,90,140,.25)`,
                    display:"flex",alignItems:"center",justifyContent:"center",
                    border:`1px solid ${i%2===0?"rgba(201,168,76,.2)":"rgba(43,90,140,.4)"}`,
                  }}>
                    <Icon size={24} style={{color:color}}/>
                  </div>
                  <h3 className="pt-heading" style={{fontSize:22,fontWeight:800,color:C.white,marginBottom:12,letterSpacing:"0.01em"}}>{title}</h3>
                  <p className="pt-body" style={{fontSize:14,color:C.gray,lineHeight:1.65,margin:0,fontWeight:500}}>{desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FLEET GALLERY ════════════════════════════════════════════════════ */}
      <section id="fleet" style={{ padding:"96px 32px",background:C.card,position:"relative",overflow:"hidden" }}>
        {/* Gold accent line top */}
        <div style={{position:"absolute",top:0,left:0,right:0,height:3,background:`linear-gradient(90deg,transparent,${C.gold},transparent)`}}/>

        <div style={{ position:"relative",maxWidth:1280,margin:"0 auto" }}>
          <ScrollReveal>
            <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:80,alignItems:"center",marginBottom:72 }} className="pt-2col">
              <div>
                <div style={{ display:"flex",alignItems:"center",gap:12,marginBottom:16 }}>
                  <div style={{ width:4,height:36,background:C.gold,borderRadius:2 }}/>
                  <span className="pt-body" style={{ fontSize:12,fontWeight:700,color:C.gold,textTransform:"uppercase",letterSpacing:"0.18em" }}>Our Fleet</span>
                </div>
                <h2 className="pt-heading" style={{ fontSize:"clamp(36px,5vw,64px)",fontWeight:900,color:C.white,lineHeight:0.95 }}>
                  Ready to <span style={{color:C.gold}}>Roll</span>
                </h2>
              </div>
              <p className="pt-body" style={{ fontSize:16,color:C.gray,lineHeight:1.75,fontWeight:500 }}>
                A fleet of approximately 10 well-maintained trucks — regularly serviced, professionally operated, and ready for any load size or route. From small deliveries to large-scale industrial transport.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={80}>
            <TruckGallery/>
          </ScrollReveal>

          {/* 5-thumb spread below */}
          <ScrollReveal delay={160}>
            <div style={{ display:"grid",gridTemplateColumns:"repeat(5,1fr)",gap:12,marginTop:16 }}>
              {[1,2,3,4,5].map(i=>(
                <div key={i} style={{
                  borderRadius:14,overflow:"hidden",
                  border:`2px solid rgba(201,168,76,.12)`,
                  aspectRatio:"4/3",
                }}>
                  <img src={bp(`/pring-trucking/truck-${i}.jpg`)} alt={`Truck ${i}`}
                    style={{width:"100%",height:"100%",objectFit:"cover",display:"block"}}/>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══ WHY US ═══════════════════════════════════════════════════════════ */}
      <section style={{ padding:"96px 32px",background:C.bg,position:"relative" }}>
        <div style={{ maxWidth:1280,margin:"0 auto" }}>
          <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:80,alignItems:"start" }} className="pt-2col">
            <ScrollReveal variant="fadeRight">
              <div>
                <div style={{ display:"flex",alignItems:"center",gap:12,marginBottom:16 }}>
                  <div style={{ width:4,height:36,background:C.gold,borderRadius:2 }}/>
                  <span className="pt-body" style={{ fontSize:12,fontWeight:700,color:C.gold,textTransform:"uppercase",letterSpacing:"0.18em" }}>Why Choose Us</span>
                </div>
                <h2 className="pt-heading" style={{ fontSize:"clamp(36px,5vw,60px)",fontWeight:900,color:C.white,lineHeight:0.95,marginBottom:24 }}>
                  The Pring <br/><span style={{color:C.gold}}>Advantage</span>
                </h2>
                <p className="pt-body" style={{ fontSize:16,color:C.gray,lineHeight:1.75,marginBottom:36,fontWeight:500 }}>
                  Part of the trusted Pring Group of Companies, our trucking arm is built on the same foundation of reliability, service quality, and family values that our clients depend on.
                </p>
                <a href={EMAIL} className="pt-btn"
                  style={{
                    display:"inline-flex",alignItems:"center",gap:10,
                    background:C.gold,color:C.navy,textDecoration:"none",
                    padding:"14px 28px",borderRadius:10,fontWeight:800,
                    boxShadow:`0 6px 24px rgba(201,168,76,.3)`,
                    fontSize:14,
                  }}
                >
                  <Mail size={16}/><span className="pt-body">Book a Truck</span><ArrowRight size={14}/>
                </a>
              </div>
            </ScrollReveal>

            <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:16 }} className="pt-2col">
              {HIGHLIGHTS.map(({icon:Icon,text,color},i)=>(
                <ScrollReveal key={i} delay={i*70}>
                  <div className="pt-card" style={{
                    borderRadius:16,padding:"22px 18px",
                    background:C.card,
                    border:`1px solid rgba(201,168,76,.1)`,
                  }}>
                    <Icon size={22} style={{color,marginBottom:12,display:"block"}}/>
                    <p className="pt-body" style={{fontSize:14,color:C.white,fontWeight:600,lineHeight:1.5,margin:0}}>{text}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ HOW TO BOOK ══════════════════════════════════════════════════════ */}
      <section id="contact" style={{ padding:"96px 32px",background:C.card,position:"relative",overflow:"hidden" }}>
        <div style={{position:"absolute",top:0,left:0,right:0,height:3,background:`linear-gradient(90deg,transparent,${C.gold},transparent)`}}/>
        <div style={{ maxWidth:1280,margin:"0 auto" }}>
          <ScrollReveal>
            <div style={{ textAlign:"center",marginBottom:56 }}>
              <div style={{ display:"flex",alignItems:"center",justifyContent:"center",gap:12,marginBottom:16 }}>
                <div style={{ width:40,height:3,background:C.gold,borderRadius:2 }}/>
                <span className="pt-body" style={{ fontSize:12,fontWeight:700,color:C.gold,textTransform:"uppercase",letterSpacing:"0.18em" }}>Simple Process</span>
                <div style={{ width:40,height:3,background:C.gold,borderRadius:2 }}/>
              </div>
              <h2 className="pt-heading" style={{ fontSize:"clamp(36px,5vw,64px)",fontWeight:900,color:C.white,lineHeight:0.95 }}>
                How to <span style={{color:C.gold}}>Book</span>
              </h2>
            </div>
          </ScrollReveal>

          <div style={{ display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:24,position:"relative" }} className="pt-3col">
            {/* connector line */}
            <div style={{
              position:"absolute",top:44,left:"16.6%",right:"16.6%",height:2,
              background:`linear-gradient(90deg,${C.gold}40,${C.gold},${C.gold}40)`,
              zIndex:0,
            }} className="pt-body" />

            {STEPS.map(({n,icon:Icon,title,desc,color},i)=>(
              <ScrollReveal key={i} delay={i*100}>
                <div style={{position:"relative",zIndex:1,textAlign:"center",padding:"40px 28px",borderRadius:20,background:C.bg,border:`1px solid rgba(201,168,76,.15)`}}>
                  <div style={{
                    width:64,height:64,borderRadius:"50%",margin:"0 auto 24px",
                    background:color===C.gold?`rgba(201,168,76,.12)`:`rgba(43,90,140,.2)`,
                    display:"flex",alignItems:"center",justifyContent:"center",
                    border:`2px solid ${color===C.gold?"rgba(201,168,76,.4)":"rgba(43,90,140,.5)"}`,
                    boxShadow:color===C.gold?`0 0 24px rgba(201,168,76,.2)`:"none",
                  }}>
                    <Icon size={26} style={{color}}/>
                  </div>
                  <div className="pt-heading" style={{fontSize:44,fontWeight:900,color:`rgba(201,168,76,.1)`,lineHeight:1,marginBottom:12,marginTop:-8}}>{n}</div>
                  <h3 className="pt-heading" style={{fontSize:22,fontWeight:800,color:C.white,marginBottom:12}}>{title}</h3>
                  <p className="pt-body" style={{fontSize:14,color:C.gray,lineHeight:1.65,margin:0,fontWeight:500}}>{desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={300}>
            <div style={{
              marginTop:48,padding:"28px 36px",
              background:C.bg,borderRadius:20,
              border:`1px solid rgba(201,168,76,.2)`,
              boxShadow:`0 0 40px rgba(201,168,76,.05)`,
              display:"flex",gap:32,flexWrap:"wrap",justifyContent:"center",alignItems:"center",
            }}>
              <div style={{display:"flex",alignItems:"center",gap:16}}>
                <div style={{width:48,height:48,borderRadius:12,background:`rgba(201,168,76,.1)`,display:"flex",alignItems:"center",justifyContent:"center",border:`1px solid rgba(201,168,76,.2)`}}>
                  <Mail size={20} style={{color:C.gold}}/>
                </div>
                <div>
                  <div className="pt-body" style={{fontSize:11,color:C.gold,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.12em",marginBottom:3}}>Email Us</div>
                  <a href={EMAIL} className="pt-body" style={{fontSize:14,color:C.white,fontWeight:600,textDecoration:"none"}}>official.pringgroupofcompany@gmail.com</a>
                </div>
              </div>
              <div style={{width:1,height:40,background:"rgba(201,168,76,.15)"}}/>
              <div style={{display:"flex",alignItems:"center",gap:16}}>
                <div style={{width:48,height:48,borderRadius:12,background:`rgba(43,90,140,.2)`,display:"flex",alignItems:"center",justifyContent:"center",border:`1px solid rgba(43,90,140,.3)`}}>
                  <MapPin size={20} style={{color:C.mid}}/>
                </div>
                <div>
                  <div className="pt-body" style={{fontSize:11,color:C.mid,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.12em",marginBottom:3}}>Based In</div>
                  <span className="pt-body" style={{fontSize:14,color:C.white,fontWeight:600}}>Laguna, Philippines</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══ FINAL CTA ════════════════════════════════════════════════════════ */}
      <section style={{ padding:"112px 32px",background:C.bg,position:"relative",overflow:"hidden" }}>
        {/* BG truck silhouette */}
        <div style={{
          position:"absolute",right:"5%",top:"50%",transform:"translateY(-50%)",
          fontSize:320,lineHeight:1,color:"rgba(201,168,76,.025)",
          fontFamily:"serif",userSelect:"none",pointerEvents:"none",
          zIndex:0,
        }}>🚛</div>

        {/* Gold glow */}
        <div style={{position:"absolute",top:"50%",left:"20%",transform:"translateY(-50%)",width:600,height:600,borderRadius:"50%",background:`radial-gradient(circle,rgba(201,168,76,.05) 0%,transparent 70%)`,pointerEvents:"none"}}/>

        <div style={{ position:"relative",zIndex:1,maxWidth:720,margin:"0 auto",textAlign:"center" }}>
          <ScrollReveal variant="scale">
            <div style={{
              display:"inline-flex",alignItems:"center",gap:10,marginBottom:32,
              background:`rgba(201,168,76,.08)`,color:C.gold,fontWeight:700,fontSize:12,padding:"10px 22px",
              borderRadius:40,border:`1px solid rgba(201,168,76,.25)`,letterSpacing:"0.15em",textTransform:"uppercase",
            }} className="pt-body">
              <Zap size={14}/> Ready to Dispatch
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h2 className="pt-heading" style={{ fontSize:"clamp(48px,7vw,88px)",fontWeight:900,lineHeight:0.92,marginBottom:24 }}>
              <span style={{color:C.white}}>NEED A</span><br/>
              <span className="pt-gold-shine">TRUCK TODAY?</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={180}>
            <p className="pt-body" style={{ fontSize:18,color:C.gray,marginBottom:48,lineHeight:1.75,fontWeight:500 }}>
              Send us your requirements and we'll match you with the right truck from our fleet. Fast response, professional service, guaranteed on-time delivery.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={260}>
            <div style={{ display:"flex",gap:16,justifyContent:"center",flexWrap:"wrap" }}>
              <a href={EMAIL} className="pt-btn pt-pulse"
                style={{
                  display:"inline-flex",alignItems:"center",gap:12,
                  background:C.gold,color:C.navy,textDecoration:"none",
                  padding:"20px 40px",borderRadius:14,fontWeight:800,fontSize:16,
                  boxShadow:`0 12px 40px rgba(201,168,76,.4)`,
                }}
              >
                <Mail size={20}/><span className="pt-body">Send a Quote Request</span><ArrowRight size={18}/>
              </a>
              <Link href="/" className="pt-btn"
                style={{
                  display:"inline-flex",alignItems:"center",gap:12,
                  background:"transparent",color:C.gold,textDecoration:"none",
                  padding:"20px 32px",borderRadius:14,fontWeight:700,fontSize:16,
                  border:`2px solid rgba(201,168,76,.3)`,
                }}
              >
                <ChevronRight size={18}/><span className="pt-body">Pring Group</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══ FOOTER ═══════════════════════════════════════════════════════════ */}
      <footer style={{ background:C.card,borderTop:`1px solid rgba(201,168,76,.1)`,padding:"32px 32px" }}>
        <div style={{
          position:"absolute",left:0,right:0,
          height:3,background:`linear-gradient(90deg,transparent,${C.gold}40,transparent)`,
          marginTop:-32,
        }}/>
        <div style={{ maxWidth:1280,margin:"0 auto",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:16,paddingTop:8 }}>
          <div style={{ display:"flex",alignItems:"center",gap:14 }}>
            <img src={bp("/logos/pring-trucking.svg")} alt="Pring Trucking" style={{height:40,objectFit:"contain"}}/>
            <div>
              <div className="pt-body" style={{fontSize:11,color:C.gray,marginTop:2}}>Part of Pring Group of Companies</div>
            </div>
          </div>

          <div style={{ display:"flex",gap:20,flexWrap:"wrap" }}>
            <a href={EMAIL} style={{display:"flex",alignItems:"center",gap:6,color:C.gray,textDecoration:"none",fontSize:13,fontWeight:500}}>
              <Mail size={13}/> official.pringgroupofcompany@gmail.com
            </a>
            <Link href="/" style={{color:C.gray,textDecoration:"none",fontSize:13,fontWeight:500}}>Pring Group</Link>
          </div>

          <div className="pt-body" style={{fontSize:12,color:"rgba(138,155,176,.4)"}}>
            © {new Date().getFullYear()} Pring Group of Companies · Laguna
          </div>
        </div>
      </footer>
    </main>
  );
}
