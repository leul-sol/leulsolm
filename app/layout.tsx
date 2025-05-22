import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GeometricFlow from "@/components/geometric-flow";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "react-hot-toast";

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
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#333',
              color: '#fff',
            },
            success: {
              duration: 3000,
              style: {
                background: '#4aed88',
                color: '#fff',
              },
            },
            error: {
              duration: 4000,
              style: {
                background: '#ff4b4b',
                color: '#fff',
              },
            },
          }}
        />
      </body>
    </html>
  );
}
