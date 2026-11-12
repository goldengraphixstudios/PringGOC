import { Figtree, Young_Serif } from "next/font/google";

/**
 * AIRPND Rentals type system.
 * - Young Serif: warm, chunky display serif that echoes the flared AIRPND wordmark.
 * - Figtree: friendly, highly legible sans for body copy, UI and tracked labels
 *   (the tracked uppercase labels mirror "RENTALS" in the logo).
 */
export const airpndDisplay = Young_Serif({
  variable: "--ap-font-display",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const airpndSans = Figtree({
  variable: "--ap-font-sans",
  subsets: ["latin"],
  display: "swap",
});
