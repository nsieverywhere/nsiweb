"use client";
import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import { useEffect } from "react";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:
    "Nsikan Simon Web Development Portfolio | Building Your Digital Experience.",
  description:
    "I develop digital experiences for brands across the globe, explore the range of projects I have successfully accomplished for my partners.",
};

export default function RootLayout({ children }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
