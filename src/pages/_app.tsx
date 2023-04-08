import type { AppProps } from "next/app";
import Head from "next/head";
import { Fragment } from "react";
import "~/styles/globals.css";
import { axeAcessibilityReporter } from "~/utils/axeAcessibilityReporter";

axeAcessibilityReporter();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <title>a11y</title>
      </Head>

      <Component {...pageProps} />
    </Fragment>
  );
}
