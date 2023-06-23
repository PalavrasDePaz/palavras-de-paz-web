import React from "react";

import Banner from "../../components/banner";
import Center from "../../components/center";
import DepoimentosMain from "../../components/depoimentosmain/DepoimentosMain";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

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
