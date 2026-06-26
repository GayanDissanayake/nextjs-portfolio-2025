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
  title: "Gayan Dissanayake | Full-Stack Software Engineer",
  description:
    "Full-stack software engineer with expertise in React, Next.js, TypeScript, Node.js, NestJS, and AWS. First-Class Honours MIT graduate based in Hamilton, New Zealand.",
  keywords:
    "Gayan Dissanayake, Full-Stack Software Engineer, React, Next.js, TypeScript, Node.js, NestJS, AWS, Portfolio, Hamilton, New Zealand",
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
    title: "Gayan Dissanayake | Full-Stack Software Engineer",
    description:
      "Full-stack software engineer specialising in React, Next.js, TypeScript, Node.js, and AWS. Based in Hamilton, New Zealand.",
    url: "https://gayan-dissanayake-portfolio.vercel.app",
    siteName: "Gayan Dissanayake Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gayan Dissanayake | Full-Stack Software Engineer",
    description:
      "Full-stack software engineer specialising in React, Next.js, TypeScript, Node.js, and AWS.",
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
