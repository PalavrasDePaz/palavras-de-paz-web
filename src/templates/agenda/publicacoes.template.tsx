import React from "react";

import Banner from "../../components/banner";
import Center from "../../components/center";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

import Publicacoes from "./Publicacoes";

const PublicacoesTemplate = () => (
  <>
    <Header />
    <Banner title="AGENDA" />
    <Center>
      <Publicacoes />
    </Center>
    <Footer />
  </>
);

export default PublicacoesTemplate;
