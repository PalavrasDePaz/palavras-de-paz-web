import React from 'react';
import Center from '../../components/atoms/center/Center';
import BannerDepoimentos from '../../components/bannerdepoimentos/BannerDepoimentos';
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
