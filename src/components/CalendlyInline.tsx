"use client";

import { useEffect, useRef, useState } from "react";
import { GROUP_BOOKING_EMBED_URL } from "@/data/site";

const CALENDLY_SCRIPT_ID = "pgc-calendly-widget";

function loadCalendlyScript() {
  if (document.getElementById(CALENDLY_SCRIPT_ID)) return;

  const script = document.createElement("script");
  script.id = CALENDLY_SCRIPT_ID;
  script.src = "https://assets.calendly.com/assets/external/widget.js";
  script.async = true;
  document.body.appendChild(script);
}

export default function CalendlyInline() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setActive(true);
        loadCalendlyScript();
        observer.disconnect();
      },
      { rootMargin: "700px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="overflow-hidden rounded-2xl border border-black/[0.04] bg-warm-50">
      {active ? (
        <div
          className="calendly-inline-widget"
          data-url={GROUP_BOOKING_EMBED_URL}
          style={{ minWidth: "280px", height: "700px" }}
        />
      ) : (
        <div className="flex min-h-[260px] flex-col items-center justify-center gap-3 px-6 text-center">
          <div className="h-8 w-8 animate-pulse rounded-full bg-gold-500/20" />
          <p className="text-sm text-navy-700/50">Meeting calendar loads when you reach this section.</p>
        </div>
      )}
    </div>
  );
}
