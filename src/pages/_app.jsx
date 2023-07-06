import React from "react";
import Head from "next/head";
import propTypes from "prop-types";

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

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Palavras de Paz</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

MyApp.propTypes = {
  Component: propTypes.func.isRequired,
  pageProps: propTypes.shape().isRequired,
};

export default MyApp;
