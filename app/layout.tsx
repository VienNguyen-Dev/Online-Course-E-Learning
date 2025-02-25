import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
import { HeaderPage } from "@/components/Header";
import FooterPage from "@/components/Footer";

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
        <HeaderPage />
        <section className=" min-h-screen w-full">{children}</section>
        <FooterPage />
      </body>
    </html>
  );
}
