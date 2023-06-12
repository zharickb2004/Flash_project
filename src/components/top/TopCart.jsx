import React, { useState, useEffect } from "react";

import Skeleton from "react-loading-skeleton";

import { TodoGetApis } from "../../Apis/Apis";

import "react-loading-skeleton/dist/skeleton.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import "../../App.css";

const TopCart = () => {
  const [store, setStores] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    (async () => {
      setLoad(true);
      const response = await TodoGetApis.GetStores(10);
      setStores(response.data.data);
      setLoad(false);
    })();
  }, []);

  return (
    <>
      {store.map((value) => {
        return (
          <div className="my-10" key={value.id_store}>
            {load ? (
              <div className="flex justify-center items-center  my-10 ">
                <div className="boxMalls   flex flex-col justify-center items-center">
                  <div className="rounded-full overflow-hidden  m-2">
                    <Skeleton width={180} height={180} />
                  </div>
                  <div className="flex  ">
                    <Skeleton width={100} />
                  </div>
                </div>
              </div>
            ) : (
              <div
                className=" w-full gap-6 flex justify-center  pr-7 flex-col items-center"
                onClick={() => {
                  window.location.href = `/Offers/${value.id_store}/${value.name_store}`;
                }}
              >
                <div>
                  <div className="rounded-full overflow-hidden imgMalls object-cover mb-5 boxShadow">
                    <img src={value.img_store} alt="" />
                  </div>

                  <span className="flex justify-center mt-4 text-gray-700 text-lg">
                    {value.name_store}
                  </span>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </>
  );
};

export default TopCart;
