import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pring Trucking Services | Truck Rental, Hauling & Logistics",
  description:
    "Pring Trucking Services provides truck rental, hauling, materials transport, and logistics support for scheduled and urgent delivery needs.",
};

export default function PringTruckingLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
