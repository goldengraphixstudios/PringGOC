"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, ExternalLink, Map } from "lucide-react";

type BranchMapToggleProps = {
  branchName: string;
  query?: string;
};

export default function BranchMapToggle({ branchName, query }: BranchMapToggleProps) {
  const [isOpen, setIsOpen] = useState(false);

  if (!query) {
    return null;
  }

  const encodedQuery = encodeURIComponent(query);
  const embedUrl = `https://www.google.com/maps?q=${encodedQuery}&output=embed`;
  const openUrl = `https://www.google.com/maps/search/?api=1&query=${encodedQuery}`;

  return (
    <div className="mt-5 rounded-2xl border border-white/[0.06] bg-black/20 p-3">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          className="flex w-full items-center justify-center gap-2 rounded-full border border-[#F0C030]/25 bg-[#F0C030]/10 px-4 py-2.5 text-[11px] font-bold tracking-[0.14em] text-[#F6D562] uppercase transition-all duration-300 hover:border-[#F0C030]/45 hover:bg-[#F0C030]/16 sm:w-auto sm:justify-start"
          aria-expanded={isOpen}
          aria-controls={`branch-map-${branchName}`}
        >
          <Map className="h-3.5 w-3.5" />
          {isOpen ? "Hide Map" : "View Map"}
          {isOpen ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
        </button>

        <a
          href={openUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center gap-2 rounded-full border border-white/12 px-4 py-2.5 text-[11px] font-bold tracking-[0.14em] text-white/65 uppercase transition-all duration-300 hover:border-[#F0C030]/30 hover:text-[#F0C030] sm:w-auto"
        >
          <ExternalLink className="h-3.5 w-3.5" />
          Open in Google Maps
        </a>
      </div>

      {isOpen ? (
        <div
          id={`branch-map-${branchName}`}
          className="mt-3 overflow-hidden rounded-2xl border border-white/[0.08] bg-black"
        >
          <iframe
            title={`${branchName} Google Map`}
            src={embedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-56 w-full md:h-64"
          />
        </div>
      ) : null}
    </div>
  );
}
