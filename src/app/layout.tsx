import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://zombcat.xyz"),
  title: {
    default: "zombcat — Applied AI Engineer & Product Builder",
    template: "%s — zombcat",
  },
  description:
    "Playful, practical AI products. Applied AI, full-stack from idea to launch, with thoughtful UX.",
  applicationName: "zombcat",
  authors: [{ name: "zombcat", url: "https://github.com/pumpkinzomb" }],
  creator: "zombcat",
  publisher: "zombcat",
  keywords: [
    "zombcat",
    "AI",
    "Applied AI",
    "AI products",
    "Product Builder",
    "Portfolio",
  ],
  category: "Technology",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "zombcat",
    title: "zombcat — Applied AI Engineer & Product Builder",
    description:
      "Playful, practical AI products. Applied AI, full-stack from idea to launch, with thoughtful UX.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "zombcat — Applied AI Engineer & Product Builder",
    description:
      "Playful, practical AI products. Applied AI, full-stack from idea to launch, with thoughtful UX.",
    creator: "@zombcat",
  },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      "max-snippet": 0,
      "max-image-preview": "none",
      "max-video-preview": 0,
    },
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen">{children}</div>
      </body>
    </html>
  );
}
