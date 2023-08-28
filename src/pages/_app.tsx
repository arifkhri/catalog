import { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { Catamaran } from "next/font/google";
import useSwr, { SWRConfig } from "swr";

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
    <SWRConfig value={{ provider: () => new Map() }}>
      <main>
        <div className={`${font.className} overflow-hidden main`}>
          <DynamicHeaderPage />
          <Component {...pageProps} />
          <DynamicFooterPage />
        </div>
      </main>
    </SWRConfig>
  );
}

export default MyApp;
