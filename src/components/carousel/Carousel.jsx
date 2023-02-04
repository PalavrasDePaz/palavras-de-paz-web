import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import {
  Navigation, Pagination, Mousewheel, Keyboard,
} from 'swiper';
import Image from 'next/image';
import Carousel_1 from '../../../public/static/images/Carrossel_1.png';
import Carousel_2 from '../../../public/static/images/Carrossel_2.png';
import Carousel_3 from '../../../public/static/images/Carrossel_3.png';
import Box from '../atoms/box/Box';
import Typography from '../atoms/typography/Typography';
import * as S from './styled';

function CarouselSlide() {
  return (
    <Swiper
      style={{ zIndex: 5 }}
      cssMode
      navigation
      pagination
      mousewheel
      keyboard
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      className="mySwiper"
      loop
    >
      <SwiperSlide>
        <S.SlideContainer>
          <Image layout="fixed" width="10000%" height="616px" src={Carousel_1} alt="" />
          <S.TextSlide>
            Projeto com
            <br />
            {' '}
            Moradores de Rua
          </S.TextSlide>
        </S.SlideContainer>

      </SwiperSlide>

      <SwiperSlide>
        <Box justify="center" align="center">
          <Image layout="fixed" width="10000%" height="616px" src={Carousel_3} alt="" />
          <S.TextSlide>
            Projeto nos
            <br />
            Presídios
          </S.TextSlide>
        </Box>
      </SwiperSlide>

      <SwiperSlide>
        <Box justify="center" align="center">
          <Image objectFit="cover" layout="fixed" width="10000%" height="616px" src={Carousel_2} alt="" />
          <S.TextSlide>
            Projeto nas
            <br />
            {' '}
            Escolas
          </S.TextSlide>
        </Box>
      </SwiperSlide>

    </Swiper>
  );
}

export default CarouselSlide;
