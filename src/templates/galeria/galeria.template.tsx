import Banner from "../../components/banner";
import Center from "../../components/center";
import FixedButton from "../../components/fixedbutton/FixedButton";
import Footer from "../../components/footer/Footer";
import GridPhotos from "../../components/gridphotos/GridPhotos";
import Header from "../../components/header/Header";

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
