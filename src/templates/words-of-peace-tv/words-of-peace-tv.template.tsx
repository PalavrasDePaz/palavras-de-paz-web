/* eslint-disable max-len */

import React from "react";

import Banner from "../../components/banner";
import Center from "../../components/center";
import FixedButton from "../../components/fixedbutton/FixedButton";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import WordsOfPeaceTVComponent from "../../components/words-of-peace-tv/words-of-peace-tv";

function WordsOfPeaceTVTemplate() {
  return (
    <>
      <Header />
      <Banner title="Words of peace TV" />
      <Center>
        <WordsOfPeaceTVComponent />
      </Center>
      <FixedButton />
      <Footer />
    </>
  );
}

export default WordsOfPeaceTVTemplate;
