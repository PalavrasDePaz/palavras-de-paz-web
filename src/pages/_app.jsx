import React from "react";
import Head from "next/head";
import propTypes from "prop-types";

import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/header/index.css";
import "../styles/footer/index.css";
import "../styles/gridphotos/index.css";
import "../styles/depoimentosmain/index.css";
import "../styles/doacoes/index.css";
import "../styles/voluntarios/index.css";
import "../styles/banner/index.css";
import "../styles/desenvolvedores/index.css";
import "../styles/programa/index.css";
import "../styles/globalstyles.css";
import "../styles/swiper/index.css";
import "../styles/fixedBtn/index.css";
import "animate.css";
import "react-datepicker/dist/react-datepicker.css";

function MyApp({ Component, pageProps }) {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Head>
          <title>Palavras de Paz</title>
        </Head>
        <Component {...pageProps} />
      </Hydrate>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

MyApp.propTypes = {
  Component: propTypes.func.isRequired,
  pageProps: propTypes.shape().isRequired,
};

export default MyApp;
