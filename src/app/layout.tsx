import type { Metadata } from "next";
import { Montserrat, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gayan Dissanayake | Full-Stack Developer",
  description:
    "Full-Stack Developer specializing in React, Next.js, and modern web technologies. Building exceptional digital experiences with clean, efficient code.",
  keywords:
    "Gayan Dissanayake, Full-Stack Developer, React, Next.js, TypeScript, Web Development, Portfolio",
  authors: [{ name: "Gayan Dissanayake" }],
  creator: "Gayan Dissanayake",
  publisher: "Gayan Dissanayake",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favicon-custom.svg", type: "image/svg+xml" },
      {
        url: "/favicon-custom-16x16.svg",
        type: "image/svg+xml",
        sizes: "16x16",
      },
      {
        url: "/favicon-12x12.svg",
        type: "image/svg+xml",
        sizes: "12x12",
      },
    ],
    shortcut: "/favicon-custom.svg",
    apple: "/favicon-custom.svg",
  },
  openGraph: {
    title: "Gayan Dissanayake | Full-Stack Developer",
    description:
      "Full-Stack Developer specializing in React, Next.js, and modern web technologies.",
    url: "https://gayandissanayake.com",
    siteName: "Gayan Dissanayake Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gayan Dissanayake | Full-Stack Developer",
    description:
      "Full-Stack Developer specializing in React, Next.js, and modern web technologies.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={`${montserrat.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
