import Center from '../../components/center';
import BannerPhotos from '../../components/bannerphotos/BannerPhotos';
import FixedButton from '../../components/fixedbutton/FixedButton';
import Footer from '../../components/footer/Footer';
import GridPhotos from '../../components/gridphotos/GridPhotos';
import Header from '../../components/header/Header';

export default function GaleriaTemplate() {
  return (
    <>
      <Header />
      <BannerPhotos />
      <Center>
        <GridPhotos />
      </Center>
      <FixedButton />
      <Footer />
    </>
  );
}
