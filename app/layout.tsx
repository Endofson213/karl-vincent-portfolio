import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Karl Vincent Paclar — Developer Portfolio",
  description:
    "Selected websites, mobile apps, and digital systems built by Karl Vincent Paclar, a developer based in Davao City, Philippines.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  );
}
