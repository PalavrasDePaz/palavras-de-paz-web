/* eslint-disable import/no-unresolved */
import React from "react";
import Image from "next/image";
import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import Box from "../box";

import imagesMainCarousel from "./imagesMainCarousel";
import * as S from "./styled";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

function CarouselSlide() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      slidesPerView={1}
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
        <SwiperSlide key={item.id}>
          <S.SlideContainer>
            <Box>
              <Image
                src={item.image}
                alt={item.text}
                width={1920}
                height={840}
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
