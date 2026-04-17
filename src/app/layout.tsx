import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "MoverTotes | Moving Tote Rentals in Coeur d'Alene, Idaho",
    template: "%s | MoverTotes",
  },
  description:
    "Rent industrial-strength moving totes in Coeur d'Alene, ID. Delivered to your door with a free dolly. Stronger than cardboard, eco-friendly, and hassle-free. Starting at $119.",
  keywords: [
    "moving totes",
    "tote rental",
    "moving boxes",
    "Coeur d'Alene movers",
    "CdA moving",
    "eco-friendly moving",
    "reusable moving boxes",
    "North Idaho moving",
  ],
  metadataBase: new URL("https://movertotes.com"),
  openGraph: {
    title: "MoverTotes | Moving Tote Rentals in Coeur d'Alene, Idaho",
    description:
      "Skip the cardboard chaos. Rent industrial-strength moving totes delivered to your door in CdA.",
    url: "https://movertotes.com",
    siteName: "MoverTotes",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isComingSoon = process.env.SITE_MODE === "coming_soon";

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {!isComingSoon && <Header />}
        <main className="flex-1">{children}</main>
        {!isComingSoon && <Footer />}
        <GoogleAnalytics gaId="G-Z56815NSZ1" />
      </body>
    </html>
  );
}
