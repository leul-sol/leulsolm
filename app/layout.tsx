import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GeometricFlow from "@/components/geometric-flow";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Leul Solomon - Portfolio",
  description:
    "Professional portfolio showcasing UI/UX and Mobile Applicaion Development work",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GeometricFlow />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
