import React from "react";

import Banner from "../../components/banner";
import Center from "../../components/center";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

import Downloads from "./Downloads";

function DownloadsTemplate() {
  return (
    <>
      <Header />
      <Banner title="DOWNLOADS" />
      <Center>
        <Downloads />
      </Center>
      <Footer />
    </>
  );
}

export default DownloadsTemplate;
