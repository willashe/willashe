import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { Assistant } from "next/font/google";

const assistant = Assistant({
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={assistant.className}>
      <Component {...pageProps} />
    </main>
  );
}
