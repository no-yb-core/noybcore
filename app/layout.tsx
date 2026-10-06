import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
    default: "noybcore — No One Becoming Someone",
    template: "%s | noybcore",
  },
  description: "An independent software organization building open-source libraries, developer tools, and software products.",
  icons: {
    icon: [
      { url: '/brand/noybcore.png', type: 'image/svg+xml' },
      { url: '/brand/noybcore.png', type: 'image/png' },
    ],
    apple: [
      { url: '/brand/noybcore.png' },
    ],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
