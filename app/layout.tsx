import type { Metadata } from "next";
import { Be_Vietnam_Pro, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const beVietNamPro = Be_Vietnam_Pro({
  variable: "--font-be-vietnam-pro",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Online Course E-Learning",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${beVietNamPro.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
