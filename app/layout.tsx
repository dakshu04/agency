import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "AUREON | Design the future",
  description: "Focus without friction. The premium SaaS platform for modern teams.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} bg-[#0B0E14] text-slate-400 font-sans antialiased selection:bg-violet-500/30`}>
        {children}
      </body>
    </html>
  );
}