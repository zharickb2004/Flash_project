import React, { useState, useEffect } from "react";

import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Skeleton from "react-loading-skeleton";

import { TodoGetApis } from "../../Apis/Apis";

import "react-loading-skeleton/dist/skeleton.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";

import "./styles.css";

const Categories = () => {
  const [category, setCategory] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    (async () => {
      setLoad(true);
      let response = await TodoGetApis.getCategory();
      setCategory(response.data.rows);
      setLoad(false);
    })();
  }, []);

  return (
    <>
      {load ? (
        <div className="category flex">
          <Skeleton width={95} height={25} count={1} />

          <Skeleton width={95} height={25} count={1} />

          <Skeleton width={95} height={25} count={1} />

          <Skeleton width={95} height={25} count={1} />

          <Skeleton width={95} height={25} count={1} />

          <Skeleton width={95} height={25} count={1} />

          <Skeleton width={95} height={25} count={1} />
        </div>
      ) : category.length > 0 ? (
        <div className="slider-category max-w-7xl mx-auto shadow-xl border-2 rounded-md mt-[-3rem] mb-6">
          <Swiper
            slidesPerView={9}
            spaceBetween={0}
            centeredSlides={false}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            navigation={false}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper "
          >
            {category.map((items) => (
              <div key={items.id_category}>
                <SwiperSlide>
                  <div
                    className="box f_flex relative  "
                    onClick={() => {
                      window.location.href =
                        "/SingleCategory/" +
                        items.id_category +
                        "/" +
                        items.name_category;
                    }}
                  >
                    <span className=" hover:bg-gray-100 p-4 truncate cursor-pointer">
                      {items.name_category}
                    </span>
                  </div>
                </SwiperSlide>
              </div>
            ))}
          </Swiper>
        </div>
      ) : (
        <h1>No hay categorias</h1>
      )}
    </>
  );
};

export default Categories;
