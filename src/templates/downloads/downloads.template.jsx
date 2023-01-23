import React from 'react'
import BannerDownloads from '../../components/bannerdownloads/BannerDownloads'
import Downloads from '../../components/downloads/Downloads'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'


function DownloadsTemplate() {
  return (
    <>
    <Header/>
    <BannerDownloads/>
    <Downloads/>
    <Footer/>

    </>
  )
}

export default DownloadsTemplate
