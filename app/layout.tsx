import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import StarsCanvas from "@/components/main/StarsBackground";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://localhost:3000"),
  title: "Vani Developer",
  description:
    "Frontend Developer from Vietnam with 3+ years of experience.",
  keywords: [
    "Developer",
    "Vani Developer",
  ],
  openGraph: {
    title: "Vani Developer",
    description:
      "Frontend Developer from Vietnam with 3+ years of experience.",
    images: "/OpenGraph.jpg",
  },
  alternates: {
    canonical: "https://localhost:3000",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
      </head>
      <body
        className={`${inter.className} bg-[#111] overflow-y-scroll overflow-x-hidden`}
      >
        <SpeedInsights />
        <Analytics />
        <StarsCanvas />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
