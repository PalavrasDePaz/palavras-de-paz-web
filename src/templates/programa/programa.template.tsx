import React from "react";

import Banner from "../../components/banner";
import Center from "../../components/center";
import FixedButton from "../../components/fixedbutton/FixedButton";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

import OPrograma from "./programa/OPrograma";

function ProgramaTemplate() {
  return (
    <>
      <Header />
      <Banner title="O PROGRAMA" />
      <Center>
        <OPrograma />
      </Center>
      <FixedButton />
      <Footer />
    </>
  );
}

export default ProgramaTemplate;
