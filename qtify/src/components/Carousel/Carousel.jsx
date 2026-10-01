import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import LeftArrow from "./LeftArrow";
import RightArrow from "./RightArrow";

function Carousel({ data, renderComponent }) {
  const swiperRef = useRef(null);

  return (
    <div style={{ position: "relative" }}>
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        spaceBetween={20}
        slidesPerView={5}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          480: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
          1280: {
            slidesPerView: 5,
          },
        }}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            {renderComponent(item)}
          </SwiperSlide>
        ))}
      </Swiper>

      <LeftArrow onClick={() => swiperRef.current?.slidePrev()} />

      <RightArrow onClick={() => swiperRef.current?.slideNext()} />
    </div>
  );
}

export default Carousel;