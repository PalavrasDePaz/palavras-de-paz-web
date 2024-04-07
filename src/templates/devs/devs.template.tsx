import React from "react";

import FixedButton from "../../components/fixedbutton/FixedButton";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

import Devs from "./desenvolvedores/Devs";

function DevsTemplate() {
  return (
    <>
      <Header />
      <Devs />
      <FixedButton />
      <Footer />
    </>
  );
}

export default DevsTemplate;
