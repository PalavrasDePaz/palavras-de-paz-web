import Box from '../../components/box';
import Button from '../../components/button/button';
import Card from '../../components/card/Card';
import CarouselSlide from '../../components/carousel/Carousel';
import Center from '../../components/center';
import FixedButton from '../../components/fixedbutton/FixedButton';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import GreenBar from '../../components/molecules/greenbar/GreenBar';
import SwiperJs from '../../components/swiper/Swiper';
import Typography from '../../components/typography';

export default function HomeTemplate() {
  return (
    <div className="animate__animated animate__fadeIn animate__delay-1s">
      <Header />

      <Center>
        <CarouselSlide />
        <GreenBar />

        <Box justify="center" padding="32px">
          <Typography
            family="Baloo, cursive"
            fontSize="48px"
            fontWeight="800"
            lineHeight="75.55px"
            color="black"
            text="Depoimentos"
          />
        </Box>

        <Card />

        <Box justify="center" margin="0 20px" padding="0 0 32px 0 " gap="48px">
          <Button
            href="/depoimentos"
            align="center"
            justify="center"
            width="200px"
            height="56px"
            color="black"
            text="Mais Depoimentos"
            hover="rgba(33, 170, 133, 1)"
            font_size="font-size"
          />
          <Button
            href="/galeria"
            align="center"
            justify="center"
            width="200px"
            height="56px"
            color="black"
            text="Galeria de Fotos"
            hover="rgba(33, 170, 133, 1)"
            font_size="font-size"
          />
        </Box>

        <Box justify="center" padding="32px">
          <iframe
            width="900"
            height="618"
            src="https://www.youtube.com/embed/X3cphCj9YVc"
            title="YouTube video player"
            allow="accelerometer;
            autoplay;
            clipboard-write;
            encrypted-media;
            gyroscope;
            picture-in-picture"
          />
        </Box>
      </Center>

      <Box
        style={ { zIndex: -2 } }
        maxWidth="100%"
        width="1416px"
        margin="80px auto"
        bg="rgba(33, 170, 133, 1)"
        padding="32px"
        justify="center"
        align="center"
        direction="column"
        textAlign="center"
      >
        <Typography
          width="88%"
          fontWeight="700"
          fontSize="36px"
          color="white"
          text='"Não é o mundo que precisa de paz, são as pessoas,
quando as pessoas tiverem paz interior, o mundo estará em paz."'
        />
        <Typography
          fontWeight="700"
          fontSize="36px"
          color="white"
          text="Prem Rawat"
        />
      </Box>

      <Center>
        <SwiperJs />

        <Box align="center" justify="center" padding="32px">
          <Button
            bg="rgba(33, 170, 133, 1)"
            color="white"
            href="/parcerias"
            justify="center"
            width="200px"
            height="56px"
            text="Seja um parceiro"
            hover="white"
          />
        </Box>
      </Center>
      <FixedButton />
      <Footer />
    </div>
  );
}
