import { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { Catamaran } from "next/font/google";

const DynamicHeaderPage = dynamic(() => import("../components/Header"), {
  loading: () => <p>Loading...</p>,
});

const DynamicFooterPage = dynamic(() => import("../components/Footer"), {
  loading: () => <p>Loading...</p>,
});

const font = Catamaran({
  subsets: ["latin"],
  variable: "--font-inter",
});

import "../styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main>
      <div className={`${font.className} overflow-hidden main`}>
        <DynamicHeaderPage />
        <Component {...pageProps} />
        <DynamicFooterPage />
      </div>
    </main>
  );
}

export default MyApp;
