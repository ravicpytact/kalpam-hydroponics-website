import type { Metadata } from "next";
import { Libre_Baskerville, Source_Sans_3 } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { PreFooterCta } from "@/components/layout/PreFooterCta";
import "./globals.css";

const display = Libre_Baskerville({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-display-family",
  display: "swap",
});

const body = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body-family",
  display: "swap",
});

export const metadata: Metadata = {
  title: "KALPAM LANDSCAPING",
  description:
    "Trusted professional landscaping and garden maintenance for homes, offices, farmhouses, residential societies, commercial properties, industries, and public-sector environments.",
  icons: {
    icon: [{ url: "/images/shared/favicon.webp", type: "image/webp" }],
  },
  openGraph: {
    title: "KALPAM LANDSCAPING",
    description:
      "Trusted professional landscaping and garden maintenance for homes, offices, farmhouses, and more.",
    images: [{ url: "/images/shared/og-default.webp" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <a className="skip-link" href="#main">
          Skip to main content
        </a>
        <Header />
        <main id="main">{children}</main>
        <PreFooterCta />
        <Footer />
      </body>
    </html>
  );
}
