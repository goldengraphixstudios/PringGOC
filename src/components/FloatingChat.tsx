"use client";

import { useState } from "react";
import { X, MessageCircle } from "lucide-react";

// Default: opens the PGC Facebook page chat
const FB_PAGE_URL = "https://www.facebook.com/RFGauctionhouse";

export default function FloatingChat() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-[150] flex flex-col items-end gap-3">
      {/* Tooltip / mini panel */}
      {open && (
        <div
          className="w-72 overflow-hidden rounded-2xl bg-white shadow-2xl"
          style={{
            animation: "chatReveal 0.3s cubic-bezier(0.16,1,0.3,1) both",
            border: "1px solid rgba(0,0,0,0.06)",
          }}
        >
          <style dangerouslySetInnerHTML={{ __html: `
            @keyframes chatReveal {
              from { opacity: 0; transform: scale(0.9) translateY(10px); }
              to   { opacity: 1; transform: scale(1) translateY(0); }
            }
          `}} />

          {/* Header */}
          <div
            className="flex items-center justify-between px-5 py-4"
            style={{ background: "linear-gradient(135deg, #0A1628, #1B3A5C)" }}
          >
            <div className="flex items-center gap-3">
              <div className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white/10">
                <MessageCircle className="h-5 w-5 text-white" />
                <span
                  className="absolute top-0.5 right-0.5 h-2.5 w-2.5 rounded-full border-2 border-[#0A1628]"
                  style={{ background: "#22c55e" }}
                />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Pring Group</p>
                <p className="text-[11px] text-white/60">Typically replies quickly</p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full text-white/50 transition-colors hover:bg-white/10 hover:text-white"
              aria-label="Close chat"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Body */}
          <div className="px-5 py-5">
            <div className="mb-4 rounded-2xl rounded-tl-sm bg-[#F8F6F1] px-4 py-3">
              <p className="text-sm leading-[1.6] text-[#0A1628]/80">
                Hi there! 👋 Have questions about our businesses, partnerships,
                or services? We&apos;re happy to help!
              </p>
            </div>

            <a
              href={FB_PAGE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-[#0A1628] px-4 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#1B3A5C] active:scale-[0.98]"
            >
              <MessageCircle className="h-4 w-4" />
              Message Us on Facebook
            </a>

            <a
              href="mailto:official.pringgroupofcompany@gmail.com"
              className="mt-2 flex w-full cursor-pointer items-center justify-center gap-2 rounded-full border border-black/[0.08] bg-transparent px-4 py-2.5 text-sm font-medium text-[#1B3A5C]/70 transition-all duration-200 hover:border-black/15 hover:bg-[#F8F6F1] hover:text-[#0A1628]"
            >
              Send us an Email
            </a>
          </div>
        </div>
      )}

      {/* FAB button */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat" : "Open chat"}
        className="relative flex h-14 w-14 cursor-pointer items-center justify-center rounded-full shadow-xl transition-all duration-200 hover:scale-105 active:scale-95"
        style={{
          background: "linear-gradient(135deg, #0A1628, #1B3A5C)",
          boxShadow: "0 8px 32px rgba(10,22,40,0.35)",
        }}
      >
        {/* Pulse ring */}
        {!open && (
          <span
            className="absolute inset-0 rounded-full"
            style={{
              animation: "chatPulse 2.5s ease-in-out infinite",
              background: "rgba(10,22,40,0.25)",
            }}
          />
        )}
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes chatPulse {
            0%, 100% { transform: scale(1); opacity: 0.6; }
            50% { transform: scale(1.35); opacity: 0; }
          }
        `}} />
        {open ? (
          <X className="h-5 w-5 text-white" />
        ) : (
          <MessageCircle className="h-5 w-5 text-white" />
        )}
      </button>
    </div>
  );
}
