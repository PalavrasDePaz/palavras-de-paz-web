import React from 'react';

import BannerPrograma from '../../components/bannerprograma/BannerPrograma';
import Center from '../../components/center';
import FixedButton from '../../components/fixedbutton/FixedButton';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import OPrograma from '../../components/programa/OPrograma';

function ProgramaTemplate() {
  return (
    <>
      <Header />
      <BannerPrograma />
      <Center>
        <OPrograma />
      </Center>
      <FixedButton />
      <Footer />
    </>
  );
}

export default ProgramaTemplate;
