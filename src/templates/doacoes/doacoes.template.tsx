import React from "react";

import Banner from "../../components/banner";
import FixedButton from "../../components/fixedbutton/FixedButton";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

import Doacoes from "./doacoes/Doacoes";

function DoacoesTemplate() {
  return (
    <>
      <Header />
      <Banner title="FAÇA UMA DOAÇÃO" />
      <Doacoes />
      <FixedButton />
      <Footer />
    </>
  );
}

export default DoacoesTemplate;
