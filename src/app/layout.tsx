import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
    default: "Tote Movers | Moving Tote Rentals in Coeur d'Alene, Idaho",
    template: "%s | Tote Movers",
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
  metadataBase: new URL("https://totemovers.com"),
  openGraph: {
    title: "Tote Movers | Moving Tote Rentals in Coeur d'Alene, Idaho",
    description:
      "Skip the cardboard chaos. Rent industrial-strength moving totes delivered to your door in CdA.",
    url: "https://totemovers.com",
    siteName: "Tote Movers",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
