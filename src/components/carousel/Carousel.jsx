/* eslint-disable import/no-unresolved */
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper';
import Image from 'next/image';
import imagesMainCarousel from './imagesMainCarousel';
import Box from '../box';
import * as S from './styled';

function CarouselSlide() {
  return (
    <Swiper
      modules={ [Navigation, Pagination, Mousewheel, Keyboard] }
      slidesPerView={ 1 }
      cssMode
      navigation
      pagination
      mousewheel
      keyboard
      loop
      autoplay
      className="mySwiper"
    >
      {imagesMainCarousel.map((item) => (
        <SwiperSlide key={ item.id }>
          <S.SlideContainer>
            <Box>
              <Image
                src={ item.image }
                alt={ item.text }
                width={ 1920 }
                height={ 840 }
              />
              <S.TextSlide>{item.text}</S.TextSlide>
            </Box>
          </S.SlideContainer>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default CarouselSlide;
