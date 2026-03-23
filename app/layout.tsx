import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Divek Sharma — UI/UX Designer & Frontend Developer",
  description:
    "I design and build digital products — from Figma to deployed code. UI/UX designer who actually codes.",
  openGraph: {
    title: "Divek Sharma — UI/UX Designer & Frontend Developer",
    description: "I design and build digital products — from Figma to deployed code.",
    url: "https://diveksharma.vercel.app",
    siteName: "Divek Sharma",
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark`}
    >
      <body className="min-h-full flex flex-col bg-[#0a0a0a] text-[#fafafa] antialiased">
        {children}
      </body>
    </html>
  );
}
