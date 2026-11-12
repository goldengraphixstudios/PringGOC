"use client";

import { useEffect, useState } from "react";
import { ExternalLink, MapPin } from "lucide-react";
import { stays, type StayId } from "../stays";

/** Live Google Map per stay, warmed with a sepia filter to sit inside the brand palette. */
export default function Neighborhood() {
  const [active, setActive] = useState<StayId>(stays[0].id);

  // "Map" buttons on the stay rows jump here with that stay selected
  useEffect(() => {
    const onMap = (e: Event) => {
      const id = (e as CustomEvent<StayId>).detail;
      if (stays.some((s) => s.id === id)) setActive(id);
      document.getElementById("neighborhood")?.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    window.addEventListener("ap:map", onMap);
    return () => window.removeEventListener("ap:map", onMap);
  }, []);
  const stay = stays.find((s) => s.id === active) ?? stays[0];
  const q = encodeURIComponent(stay.mapQuery);

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] lg:gap-10">
      <div className="flex flex-col gap-3" role="tablist" aria-label="Choose a location">
        {stays.map((s, i) => {
          const selected = s.id === active;
          return (
            <button
              key={s.id}
              type="button"
              role="tab"
              id={`map-tab-${s.id}`}
              aria-selected={selected}
              aria-controls="ap-map-panel"
              onClick={() => setActive(s.id)}
              className={`group flex cursor-pointer items-center gap-4 rounded-[22px] border-[1.5px] p-4 text-left transition-all duration-300 sm:p-5 ${
                selected
                  ? "border-[var(--ap-clay)] bg-[var(--ap-paper)] shadow-[0_18px_40px_-28px_rgba(127,59,25,0.7)]"
                  : "border-[rgba(41,38,31,0.12)] hover:border-[rgba(41,38,31,0.3)]"
              }`}
            >
              <span
                className={`grid h-12 w-12 shrink-0 place-items-center rounded-full transition-colors ${
                  selected ? "bg-[var(--ap-clay-btn)] text-[var(--ap-paper)]" : "bg-[var(--ap-sand)] text-[var(--ap-clay)]"
                }`}
              >
                <MapPin className="h-5 w-5" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="ap-display block text-[1.45rem] leading-tight">{s.name}</span>
                <span className="block text-[15px] text-[var(--ap-ink-soft)]">
                  {s.city}, Laguna · {s.units} {s.unitType.toLowerCase()}
                </span>
              </span>
              <span className="ap-display hidden text-[1.6rem] text-[rgba(171,88,44,0.45)] sm:block" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
            </button>
          );
        })}

        <a
          href={`https://www.google.com/maps/search/?api=1&query=${q}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1 inline-flex min-h-[44px] items-center gap-2 self-start text-[15px] font-semibold text-[var(--ap-clay-deep)] underline decoration-[rgba(171,88,44,0.35)] decoration-2 underline-offset-4 transition hover:decoration-[var(--ap-clay)]"
        >
          Open {stay.name} in Google Maps
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>

      <div
        id="ap-map-panel"
        role="tabpanel"
        aria-labelledby={`map-tab-${stay.id}`}
        className="relative min-h-[360px] overflow-hidden rounded-[30px] border border-[rgba(126,122,93,0.2)] bg-[var(--ap-sand)] lg:min-h-[460px]"
      >
        <iframe
          key={stay.id}
          title={`Map of ${stay.name}, ${stay.city}`}
          src={`https://www.google.com/maps?q=${q}&z=15&output=embed`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="ap-map-frame absolute inset-0 h-full w-full"
        />
      </div>
    </div>
  );
}
