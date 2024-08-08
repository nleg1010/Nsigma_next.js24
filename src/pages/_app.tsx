import type { AppProps } from "next/app";
import Footer from "@/components/footer";
import Header from "@/components/Header/header";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <main>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </main>
      <Analytics />
      <SpeedInsights />
    </>
  );
}
