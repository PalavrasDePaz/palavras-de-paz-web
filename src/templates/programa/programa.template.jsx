import React from 'react'
import Header from '../../components/header/Header'
import Footer from "../../components/footer/Footer"
import FixedButton from '../../components/fixedbutton/FixedButton'
import OPrograma from '../../components/programa/OPrograma'
import BannerPrograma from '../../components/bannerprograma/BannerPrograma'
import Center from '../../components/atoms/center/Center'

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
  )
}

export default ProgramaTemplate
