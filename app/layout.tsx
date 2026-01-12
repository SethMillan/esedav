import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto_Condensed } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const robotoCondensed = Roboto_Condensed({
  variable: "--font-roboto-condensed",
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Seth Millan - Portfolio",
  description:
    "Portfolio website of Seth Millan, software developer and designer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${robotoCondensed.variable} ${robotoCondensed.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
