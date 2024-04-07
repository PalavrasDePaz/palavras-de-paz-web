import React from "react";

import Banner from "../../components/banner";
import FixedButton from "../../components/fixedbutton/FixedButton";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

import VoluntariosMain from "./voluntariosmain/voluntariosmain";

function VoluntariosTemplate() {
  return (
    <>
      <Header />
      <Banner title="SEJA UM VOLUNTÁRIO" />
      <VoluntariosMain />
      <FixedButton />
      <Footer />
    </>
  );
}

export default VoluntariosTemplate;
