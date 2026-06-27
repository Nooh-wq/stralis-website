import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Preloader } from "@/components/Preloader";

export const metadata: Metadata = {
  metadataBase: new URL("https://thestralis.com"),
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
    ],
  },
  title: {
    default: "The Stralis — Engineering, accelerated by AI",
    template: "%s — The Stralis",
  },
  description:
    "The Stralis designs and ships software, SaaS products, MVPs, and AI/ML systems for companies who can't afford to guess. AI speeds up how we build. It never decides what we ship.",
  openGraph: {
    title: "The Stralis — Engineering, accelerated by AI",
    description:
      "An IT engineering studio. AI speeds up how we build. It never decides what we ship.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-black text-gray-light">
        <Preloader />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
