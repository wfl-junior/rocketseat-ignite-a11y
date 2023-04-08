import type { AppProps } from "next/app";
import "~/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-900 text-zinc-100">
      <Component {...pageProps} />
    </div>
  );
}
