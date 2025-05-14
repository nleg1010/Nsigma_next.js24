import Header from "@/components/Header/header";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { AppProps } from "next/app";

import "@/styles/globals.css";

import dynamic from "next/dynamic";

const Footer = dynamic(() => import("@/components/footer"), {
  ssr: false,
});

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
