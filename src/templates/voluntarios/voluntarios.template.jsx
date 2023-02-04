import React from 'react';
import Center from '../../components/atoms/center/Center';
import BannerVoluntarios from '../../components/bannervoluntarios/BannerVoluntarios';
import FixedButton from '../../components/fixedbutton/FixedButton';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import VoluntariosMain from '../../components/voluntariosmain/voluntariosmain';

function VoluntariosTemplate() {
  return (
    <>
      <Header />
      <BannerVoluntarios />
      <VoluntariosMain />
      <FixedButton />
      <Footer />

    </>

  );
}

export default VoluntariosTemplate;
