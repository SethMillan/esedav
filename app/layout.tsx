import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto_Condensed } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

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
        <Toaster
          position="top-center"
          richColors
          toastOptions={{
            classNames: {
              toast:
                "group toast group-[.toaster]:bg-white group-[.toaster]:border group-[.toaster]:border-gray-200 group-[.toaster]:shadow-lg group-[.toaster]:rounded-lg group-[.toaster]:border-l-4 group-[.toaster]:border-l-blue-500",
              description: "group-[.toast]:text-gray-600",
              success: "group-[.toaster]:border-l-green-500", // Verde para éxito
              error: "group-[.toaster]:border-l-red-500", // Rojo para error
            },
          }}
        />
      </body>
    </html>
  );
}
