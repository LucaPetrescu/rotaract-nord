import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rotaract București Nord",
  description: "Clubul Rotaract București Nord - Parte din Rotary International District 2241. Tineri profesioniști dedicați comunității.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro">
      <body>{children}</body>
    </html>
  );
}
