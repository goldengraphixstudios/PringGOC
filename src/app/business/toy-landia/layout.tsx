import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Toy Landia | Brand New Toys Per Kilo - Cabuyao, Laguna",
  description:
    "Toy Landia offers brand-new imported toys per kilo with walk-in shopping, live selling, bulk-friendly pricing, and nationwide delivery.",
};

export default function ToyLandiaLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
