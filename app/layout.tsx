// src/app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://136320a06ae8.ngrok-free.app"),
  title: "Pizza Party - Daily Games, Weekly Jackpots",
  description:
    "Play daily Pizza Party games to earn toppings and win weekly VMF jackpots!",
  manifest: "/manifest.json",
  icons: {
    icon: "/images/pizza-party-title-transparent.png",
    apple: "/images/pizza-party-title-transparent.png",
  },
  generator: "v0.dev",
  openGraph: {
    title: "Pizza Party - Daily Games, Weekly Jackpots",
    description:
      "Play daily Pizza Party games to earn toppings and win weekly VMF jackpots!",
    images: ["/images/pizza-homepage.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pizza Party - Daily Games, Weekly Jackpots",
    description:
      "Play daily Pizza Party games to earn toppings and win weekly VMF jackpots!",
    images: ["/images/pizza-homepage.png"],
  },
  other: {
    "fc:frame": JSON.stringify({
      version: "next",
      imageUrl: "/images/pizza-homepage.png",
      button: {
        title: "🍕 Play Pizza Party",
        action: {
          type: "launch_frame",
          name: "Pizza Party",
          url: "/",
          splashImageUrl: "/images/pizza-party-title-transparent.png",
          splashBackgroundColor: "#FF6B35",
        },
      },
    }),
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  );
}
