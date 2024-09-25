import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "@/styles/style.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Head from "next/head";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Finally, Affordable Healthcare Coverage for Small Businesses",
  description: "Affordable Healthcare Coverage for Small Businesses",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased duration-200 transition-all`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
