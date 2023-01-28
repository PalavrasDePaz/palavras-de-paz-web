import React from 'react';
import BannerDevs from '../../components/bannerdevs/BannerDevs';
import Devs from '../../components/desenvolvedores/Devs';
import FixedButton from '../../components/fixedbutton/FixedButton';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';

function DevsTemplate() {
  return (
    <>
      <Header />
      <BannerDevs />
      <Devs />
      <FixedButton />
      <Footer />
    </>
  );
}

export default DevsTemplate;
