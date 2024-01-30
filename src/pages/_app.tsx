import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Footer from "@/components/footer";
import Header from "@/components/Header/header";

import "@/styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function App({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();
  return (
    <>
      {!pathname.includes("/studio") && <Header />}
      <Component {...pageProps} />
      {!pathname.includes("/studio") && <Footer />}
    </>
  );
}
