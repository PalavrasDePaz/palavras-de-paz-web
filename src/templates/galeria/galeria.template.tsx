import Banner from "../../components/banner";
import Center from "../../components/center";
import FixedButton from "../../components/fixedbutton/FixedButton";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

import GridPhotos from "./gridphotos/GridPhotos";

export default function GaleriaTemplate() {
  return (
    <>
      <Header />
      <Banner title="GALERIA DE FOTOS" />
      <Center>
        <GridPhotos />
      </Center>
      <FixedButton />
      <Footer />
    </>
  );
}
