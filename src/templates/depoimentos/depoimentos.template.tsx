import React from "react";

import Banner from "../../components/banner";
import Center from "../../components/center";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

import DepoimentosMain from "./depoimentosmain/DepoimentosMain";

function DepoimentosTemplate() {
  return (
    <>
      <Header />
      <Banner title="DEPOIMENTOS" />
      <Center>
        <DepoimentosMain />
      </Center>
      <Footer />
    </>
  );
}

export default DepoimentosTemplate;
