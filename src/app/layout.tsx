import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/content/site";
import "./globals.css";

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#080d15" };

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "Relay | Blockchain Access Beyond Smartphones", template: "%s | Relay" },
  description: site.description,
  applicationName: "Relay",
  keywords: ["Relay", "Solana", "USSD", "blockchain infrastructure", "mobile access", "Nigeria", "financial inclusion"],
  openGraph: {
    type: "website", siteName: "Relay", title: "Relay | Blockchain Access Beyond Smartphones",
    description: site.description, url: site.url,
  },
  twitter: { card: "summary_large_image", title: "Relay | Blockchain Access Beyond Smartphones", description: site.description },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={GeistSans.className}><body><a className="skip-link" href="#main">Skip to content</a><Header /><main id="main">{children}</main><Footer /></body></html>;
}
