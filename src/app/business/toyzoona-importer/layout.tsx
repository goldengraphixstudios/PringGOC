import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Toyzoona Importer | Toys by the Kilo - Cabuyao, Laguna",
  description:
    "Toyzoona Importer offers imported toys by the kilo, live selling, Saturday auctions, warehouse visits, and nationwide delivery from Cabuyao, Laguna.",
};

export default function ToyzoonaImporterLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
