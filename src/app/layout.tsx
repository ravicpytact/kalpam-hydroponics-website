import { Libre_Baskerville, Source_Sans_3 } from "next/font/google";
import { StickyFabStack } from "@/components/layout/StickyFabStack";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { PreFooterCta } from "@/components/layout/PreFooterCta";
import { ScrollToTopOnNavigate } from "@/components/layout/ScrollToTopOnNavigate";
import { SiteJsonLd } from "@/components/layout/SiteJsonLd";
import { rootMetadata } from "@/lib/seo-metadata";
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

export const metadata = rootMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <SiteJsonLd />
        <ScrollToTopOnNavigate />
        <a className="skip-link" href="#main">
          Skip to main content
        </a>
        <Header />
        <main id="main">{children}</main>
        <PreFooterCta />
        <Footer />
        <StickyFabStack />
      </body>
    </html>
  );
}
