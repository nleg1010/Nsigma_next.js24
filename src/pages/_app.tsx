import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Global meta tags */}
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp;

import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Footer from "@/components/footer";
import Header from "@/components/Header/header";
import { Source_Sans_3 } from "next/font/google";

import "@/styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//  const source_sans = Source_Sans_3({
//   subsets: ['latin'],
//   display: 'swap',
//   weight: "400"
// })

const source_sans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function App({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();
  return (
    <main className={`${source_sans.variable} font-sans`}>
      {!pathname.includes("/studio") && <Header />}
      <Component {...pageProps} />
      {!pathname.includes("/studio") && <Footer />}
    </main>
  );
}
