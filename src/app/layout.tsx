import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import Head from "next/head";
import { Suspense } from "react";
import Loading from "./Loading";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DondakeShop",
  description: "Welcome to DondakeShop",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        {/* Autres balises dans Head */}
      </Head>
      <body className={inter.className}>
        <Header />
        <Suspense fallback={<Loading />}>{children} </Suspense>
        
        <Footer />
      </body>
    </html>
  );
}
