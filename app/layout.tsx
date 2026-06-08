import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muhammad Zulfan Aulia | Backend Developer",
  description: "Portfolio of Muhammad Zulfan Aulia — a passionate backend developer building robust web applications with React, Vite, and modern JavaScript. Open to work and collaboration.",
  keywords: ["Muhammad Zulfan Aulia", "Backend Developer", "Portfolio", "React", "JavaScript", "Vite", "FinTrack", "Grow.it"],
  authors: [{ name: "Muhammad Zulfan Aulia" }],
  openGraph: {
    title: "Muhammad Zulfan Aulia | Backend Developer",
    description: "Portfolio of Muhammad Zulfan Aulia — building impactful web experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
