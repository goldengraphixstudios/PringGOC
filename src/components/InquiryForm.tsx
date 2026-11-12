"use client";

import { useState } from "react";
import { Mail, Send } from "lucide-react";
import { GROUP_EMAIL } from "@/data/site";

type FormStatus = "idle" | "sending" | "success" | "error";

const API_PATH = `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/api/contact`;
const CONTACT_API_URL = process.env.NEXT_PUBLIC_CONTACT_API_URL ?? API_PATH;

export default function InquiryForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    setStatus("sending");
    setFeedback("");

    try {
      const response = await fetch(CONTACT_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = (await response.json().catch(() => null)) as
        | { error?: string }
        | null;

      if (!response.ok) {
        setStatus("error");
        setFeedback(
          result?.error ??
            "We couldn't send your inquiry right now. Please try again shortly.",
        );
        return;
      }

      form.reset();
      setStatus("success");
      setFeedback("Inquiry sent successfully. The Pring Group team will get back to you soon.");
    } catch {
      setStatus("error");
      setFeedback("We couldn't send your inquiry right now. Please try again shortly.");
    }
  }

  return (
    <div className="overflow-hidden rounded-3xl border border-black/[0.05] bg-white shadow-xl shadow-navy-900/[0.04]">
      <div className="h-1 bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500" />
      <form
        onSubmit={handleSubmit}
        className="grid gap-5 px-8 py-10 sm:grid-cols-2 md:px-12"
      >
        <input
          type="text"
          name="website"
          autoComplete="off"
          tabIndex={-1}
          className="hidden"
        />

        <div className="sm:col-span-2 grid gap-5 sm:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-[12px] font-semibold text-navy-800/70">
              Full Name *
            </label>
            <input
              name="name"
              type="text"
              required
              placeholder="Your full name"
              className="w-full rounded-xl border border-black/[0.08] bg-warm-50 px-4 py-3 text-sm text-navy-900 outline-none transition-all placeholder:text-navy-700/30 focus:border-gold-500/40 focus:ring-2 focus:ring-gold-500/10"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-[12px] font-semibold text-navy-800/70">
              Email Address *
            </label>
            <input
              name="email"
              type="email"
              required
              placeholder="your@email.com"
              className="w-full rounded-xl border border-black/[0.08] bg-warm-50 px-4 py-3 text-sm text-navy-900 outline-none transition-all placeholder:text-navy-700/30 focus:border-gold-500/40 focus:ring-2 focus:ring-gold-500/10"
            />
          </div>
        </div>

        <div>
          <label className="mb-1.5 block text-[12px] font-semibold text-navy-800/70">
            Phone Number
          </label>
          <input
            name="phone"
            type="tel"
            placeholder="+63 9XX XXX XXXX"
            className="w-full rounded-xl border border-black/[0.08] bg-warm-50 px-4 py-3 text-sm text-navy-900 outline-none transition-all placeholder:text-navy-700/30 focus:border-gold-500/40 focus:ring-2 focus:ring-gold-500/10"
          />
        </div>

        <div>
          <label className="mb-1.5 block text-[12px] font-semibold text-navy-800/70">
            Type of Inquiry *
          </label>
          <select
            name="inquiry_type"
            required
            className="w-full rounded-xl border border-black/[0.08] bg-warm-50 px-4 py-3 text-sm text-navy-900 outline-none transition-all focus:border-gold-500/40 focus:ring-2 focus:ring-gold-500/10"
          >
            <option value="">Select an inquiry type</option>
            <option value="Partnership">Partnership Opportunity</option>
            <option value="Investment">Investment Inquiry</option>
            <option value="Consignment">Consign Items</option>
            <option value="Trucking">Trucking / Logistics</option>
            <option value="Apartment">Apartment / Real Estate</option>
            <option value="Event Venue">Event Venue Booking</option>
            <option value="General">General Inquiry</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="sm:col-span-2">
          <label className="mb-1.5 block text-[12px] font-semibold text-navy-800/70">
            Message *
          </label>
          <textarea
            name="message"
            required
            rows={4}
            placeholder="Tell us about your inquiry, proposal, or how we can help you..."
            className="w-full resize-none rounded-xl border border-black/[0.08] bg-warm-50 px-4 py-3 text-sm text-navy-900 outline-none transition-all placeholder:text-navy-700/30 focus:border-gold-500/40 focus:ring-2 focus:ring-gold-500/10"
          />
        </div>

        <div className="sm:col-span-2 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2 text-[11px] text-navy-700/40">
            <Mail className="h-3.5 w-3.5" />
            Sent to: {GROUP_EMAIL}
          </div>
          <button
            type="submit"
            disabled={status === "sending"}
            className="group flex cursor-pointer items-center gap-2 rounded-full bg-navy-800 px-8 py-3 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:bg-navy-700 hover:shadow-lg active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {status === "sending" ? "Sending..." : "Send Inquiry"}
            <Send className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
          </button>
        </div>

        <div className="sm:col-span-2 min-h-5" aria-live="polite">
          {feedback ? (
            <p
              className={`text-sm ${
                status === "success" ? "text-emerald-700" : "text-red-600"
              }`}
            >
              {feedback}
            </p>
          ) : null}
        </div>
      </form>
    </div>
  );
}
