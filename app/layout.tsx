import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { LoaderProvider } from "@/utils/LoaderProvider";
import AppShell from "@/components/Appshell";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Lama Group — Zero to IPO",
  description:
    "Lama Holdings is an emerging venture and investment group building sustainable businesses across finance, technology, media, and insurance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ink text-smoke font-body">
        <LoaderProvider>
          <NavBar />
          <AppShell>{children}</AppShell>
          <Footer />
        </LoaderProvider>
      </body>
    </html>
  );
}
