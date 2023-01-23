import React, { useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import Box from "../atoms/box/Box";
import Image from "next/image";
import SwiperImgs from "./images";

export default function SwiperJs() {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  const breakpoints = [
    {
      width: 320,
      slidesPerView: 1,
      itemToScroll: 1,
    },
    {
      width: 480,
      slidesPerView: 2,
      itemToScroll: 2,
    },
    {
      width: 640,
      slidesPerView: 3,
      itemToScroll: 3,
    },
    {
      width: 768,
      slidesPerView: 4,
      itemToScroll: 4,
    },
    {
      width: 1200,
      slidesPerView: 5,
      itemToScroll: 5,
    },
  ];

  return(
    <>
        {domLoaded && (
             <Box direction="column">
             <>
               <h1
                 style={{
                   textAlign: "center",
                   fontWeight: "700",
                   margin: "0 0 40px 0",
                   fontFamily: "Baloo, cursive",
                   textTransform: "uppercase",
                 }}
               >
                 parceiros
               </h1>
               <Swiper
                 style={{
                   paddingLeft: "40px",
                   paddingRight: "25px",
                   alignItems: "center",
                   justifyContent: "center",
                   width: "100%",
                   margin: "40px 0",
                 }}
                 spaceBetween={48}
                 centeredSlides={true}
                 navigation={true}
                 modules={[Pagination, Navigation]}
                 className="mySwiper"
                 loop={true}
                 breakpoints={breakpoints}
               >
                 {SwiperImgs().map((item) => (
                   <SwiperSlide key={item.id}>
                     <Image
                       src={item.src}
                       alt="Fotos de parceiros da instituição palavras de paz"
                       width={150}
                       height={150}
                       className="swiperImg"
                     />
                   </SwiperSlide>
                 ))}
               </Swiper>
             </>
           </Box>
        )}
    </>
  )
}
