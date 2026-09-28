import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/components/LanguageProvider";

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700", "900"],
  style: ["normal"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Mezan Ultra Rich | Your Taste is Ultra Rich",
  description:
    "Mezan Ultra Rich brings together richness, depth, and satisfaction in a tea experience worthy of the moments that matter most.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white font-body">
        <LanguageProvider>
          <Header />

          <main className="flex-1 pt-[50px]">
            {children}
          </main>

          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}