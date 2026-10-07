
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { OrganizationSchema } from "./components/organization-schema";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://noybcore.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Noybcore — No One Becoming Someone",
    template: "%s | Noybcore",
  },

  description:
    "Noybcore is an independent software organization building reliable software, open-source libraries, developer tools, infrastructure, automation, and AI systems.",

  applicationName: "Noybcore",

  authors: [
    {
      name: "Noybcore",
      url: siteUrl,
    },
  ],

  creator: "Noybcore",
  publisher: "Noybcore",

  alternates: {
    canonical: "/",
  },

  icons: {
    icon: [
      {
        url: "/brand/favicon.ico",
      },
      {
        url: "/brand/favicon-16x16.png",
        type: "image/png",
        sizes: "16x16",
      },
      {
        url: "/brand/favicon-32x32.png",
        type: "image/png",
        sizes: "32x32",
      },
      {
        url: "/brand/noybcore.svg",
        type: "image/svg+xml",
      },
    ],
    apple: [
      {
        url: "/brand/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Noybcore",
    title: "Noybcore — No One Becoming Someone",
    description:
      "An independent software organization building reliable software, open-source libraries, developer tools, infrastructure, automation, and AI systems.",
    locale: "en_US",
    images: [
      {
        url: "/og/noybcore.png",
        width: 1200,
        height: 630,
        alt: "Noybcore — No One Becoming Someone",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Noybcore — No One Becoming Someone",
    description:
      "An independent software organization building reliable software, open-source libraries, developer tools, infrastructure, automation, and AI systems.",
    images: ["/og/noybcore.png"],
  },

  category: "technology",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        
        <OrganizationSchema />
        {children}</body>
    </html>
  );
}
