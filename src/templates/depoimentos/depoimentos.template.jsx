import React from 'react';

import BannerDepoimentos from '../../components/bannerdepoimentos/BannerDepoimentos';
import Center from '../../components/center';
import DepoimentosMain from '../../components/depoimentosmain/DepoimentosMain';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';

function DepoimentosTemplate() {
  return (
    <>
      <Header />
      <BannerDepoimentos />
      <Center>
        <DepoimentosMain />
      </Center>
      <Footer />
    </>
  );
}

export default DepoimentosTemplate;
