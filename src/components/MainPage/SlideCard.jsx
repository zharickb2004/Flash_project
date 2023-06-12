import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Pagination, Navigation } from "swiper";

import "./styles.css";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";

function SlideCard() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <div className="bg-red-200 ">
          <div>
            <SwiperSlide className="hadow_slider">
              <div className="relative   w-full flex flex-col">
                <img
                  src="https://res.cloudinary.com/dgpikgt5t/image/upload/v1684853704/Calle_cualquiera_123_cualquier_lugar_5_cy50a7.png"
                  alt=""
                  className="z-100"
                />
                <h1 className="shadow_slider">.</h1>
              </div>
            </SwiperSlide>
          </div>
          <SwiperSlide>
            <div className="relative   w-full flex flex-col">
              <img
                src="https://res.cloudinary.com/dgpikgt5t/image/upload/v1684853082/Calle_cualquiera_123_cualquier_lugar_4_bi9nj1.png"
                alt=""
              />
              <h1 className="shadow_slider1">.</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative   w-full flex flex-col">
              <img
                src="https://res.cloudinary.com/dgpikgt5t/image/upload/v1684851514/Calle_cualquiera_123_cualquier_lugar_v8bzur.png"
                alt=""
              />
              <h1 className="shadow_slider2">.</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative   w-full flex flex-col">
              <img
                src="https://res.cloudinary.com/dgpikgt5t/image/upload/v1684858968/Calle_cualquiera_123_cualquier_lugar_7_thgdq1.png"
                alt=""
              />
              <h1 className="shadow_slider3">.</h1>
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
    </>
  );
}

export default SlideCard;
