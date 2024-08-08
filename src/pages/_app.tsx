import type { AppProps } from "next/app";
import Footer from "@/components/footer";
import Header from "@/components/Header/header";
import { Source_Sans_3 } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "@/styles/globals.css";

const source_sans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <main className={`${source_sans.variable} font-sans`}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </main>
      <Analytics />
      <SpeedInsights />
    </>
  );
}
