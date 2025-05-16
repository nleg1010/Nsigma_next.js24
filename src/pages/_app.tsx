import Header from "@/components/Header/header";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { AppProps } from "next/app";

import "@/styles/globals.css";

import { initAmplitude } from "@/lib/amplitude";
import dynamic from "next/dynamic";
import { useEffect } from "react";

const Footer = dynamic(() => import("@/components/footer"), {
  ssr: false,
});

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    initAmplitude();
  }, []);

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
