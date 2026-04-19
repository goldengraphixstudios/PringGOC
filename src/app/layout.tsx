import type { Metadata } from "next";
import { Bodoni_Moda, Jost, Cormorant_Garamond, Oswald } from "next/font/google";
import Script from "next/script";
import { GROUP_BUSINESS_LABEL } from "@/data/site";
import "./globals.css";

const bodoni = Bodoni_Moda({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const jost = Jost({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const oswald = Oswald({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cursive",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Pring Group of Companies | Family-Owned Business Conglomerate",
  description:
    `Pring Group of Companies is a family-owned business conglomerate with ${GROUP_BUSINESS_LABEL} thriving businesses across retail, food & beverage, real estate, events, fitness, and more.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bodoni.variable} ${jost.variable} ${cormorant.variable} ${oswald.variable}`}>
      <body className="bg-warm-50 text-navy-900 font-[family-name:var(--font-body)] antialiased">
        {children}
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="lazyOnload"
        />
        <Script
          id="tawk-to"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              (function(){
                var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                s1.async=true;
                s1.src='https://embed.tawk.to/69e48bd06936c61c38746926/1jmic4a6n';
                s1.charset='UTF-8';
                s1.setAttribute('crossorigin','*');
                s0.parentNode.insertBefore(s1,s0);
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}
