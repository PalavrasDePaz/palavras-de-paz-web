import React from "react";

import Banner from "../../components/banner";
import Center from "../../components/center";
import FixedButton from "../../components/fixedbutton/FixedButton";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import LeituraLivroComponent from "../../components/leitura-livro/Leitura-livro";

function LeituraLivroTemplate() {
  return (
    <>
      <Header />
      <Banner title="LEITURA DO LIVRO OUÇA A SUA VOZ NAS UNIDADES PRISIONAIS" />
      <Center>
        <LeituraLivroComponent />
      </Center>
      <FixedButton />
      <Footer />
    </>
  );
}

export default LeituraLivroTemplate;
