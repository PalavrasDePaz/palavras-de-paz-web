import React from 'react'
import BannerDoacoes from '../../components/bannerdoacoes/BannerDoacoes'
import Doacoes from '../../components/doacoes/Doacoes'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import FixedButton from '../../components/fixedbutton/FixedButton'
import Center from '../../components/atoms/center/Center'

function DoacoesTemplate() {
  return (
    <>
    <Header/>
    <BannerDoacoes/>
    <Doacoes/>
    <FixedButton/>
    <Footer/>
    </>
  )
}

export default DoacoesTemplate
