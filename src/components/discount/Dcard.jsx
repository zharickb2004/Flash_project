import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import Skeleton from "react-loading-skeleton";
import Slider from "react-slick";

import "react-loading-skeleton/dist/skeleton.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "../flashDeals/style.css";

import { TodoGetApis } from "../../Apis/Apis";
import { useContextShopCar } from "../../Hook/UseContextShop";

const DCard = () => {
  const [product, setProduct] = useState([]);
  const [load, setLoad] = useState(false);

  const navigate = useNavigate();

  const { postProductCar } = useContextShopCar();
  let token = localStorage.getItem("token");

  const settings = {
    slidesToScroll: 1,
    slidesToShow: 5,
    autoplay: true,
    infinite: true,
    dots: false,
  };

  const money = new Intl.NumberFormat("en-CO", {
    minimumFractionDigits: 2,
    style: "currency",
    currency: "COP",
  });

  const handdleCarShop = async (data) => {
    if (token === null) {
      toast.warn("Inicia sesión, para agregar al carrito!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        progress: undefined,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      });
    } else {
      let carrito = {
        idProduct: data.id_product,
        nameProduct: data.name_product,
        code: data.id_store_product,
        price: data.price_product,
        amount: 1,
        img: data.img_product,
        description: data.description_product,
        discount: data.dicount,
      };
       await postProductCar(carrito);
    }
  };

  useEffect(() => {
    (async () => {
      setLoad(true);

      const response = await TodoGetApis.GetProductDiscount();
      setProduct(response.data.data);
      setLoad(false);
    })();
  }, []);

  return (
    <>
      <ToastContainer />
      {load  ? (
        <>
          <div className=" w-full  flex items-center justify-center ">
            <div className="flex   gap-20">
              <div className="product border m-1 ">
                <div className="flex justify-between p-2">
                  <div className="disponible">
                    <Skeleton width={80} />
                  </div>
                  <div>
                    <Skeleton width={30} />
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <Skeleton width={220} height={180} />
                </div>
                <div className="product-details p-4">
                  <div className="info">
                    <Skeleton width={100} />
                    <Skeleton width={90} />
                  </div>
                  <div className="div">
                    <Skeleton width={150} />
                  </div>
                  <div className="price">
                    <Skeleton width={100} />
                    <Skeleton width={100} />
                  </div>
                  <div className="flex justify-between item-center mt-4">
                    <div className="div">
                      <Skeleton width={90} height={30} />
                    </div>
                    <div className="div">
                      <Skeleton width={60} height={30} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="product border m-1 ">
                <div className="flex justify-between p-2">
                  <div className="disponible">
                    <Skeleton width={80} />
                  </div>
                  <div>
                    <Skeleton width={30} />
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <Skeleton width={220} height={180} />
                </div>
                <div className="product-details p-4">
                  <div className="info">
                    <Skeleton width={100} />
                    <Skeleton width={90} />
                  </div>
                  <div className="div">
                    <Skeleton width={150} />
                  </div>
                  <div className="price">
                    <Skeleton width={100} />
                    <Skeleton width={100} />
                  </div>
                  <div className="flex justify-between item-center mt-4">
                    <div className="div">
                      <Skeleton width={90} height={30} />
                    </div>
                    <div className="div">
                      <Skeleton width={60} height={30} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="product border m-1 ">
                <div className="flex justify-between p-2">
                  <div className="disponible">
                    <Skeleton width={80} />
                  </div>
                  <div>
                    <Skeleton width={30} />
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <Skeleton width={220} height={180} />
                </div>
                <div className="product-details p-4">
                  <div className="info">
                    <Skeleton width={100} />
                    <Skeleton width={90} />
                  </div>
                  <div className="div">
                    <Skeleton width={150} />
                  </div>
                  <div className="price">
                    <Skeleton width={100} />
                    <Skeleton width={100} />
                  </div>
                  <div className="flex justify-between item-center mt-4">
                    <div className="div">
                      <Skeleton width={90} height={30} />
                    </div>
                    <div className="div">
                      <Skeleton width={60} height={30} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="product border m-1 ">
                <div className="flex justify-between p-2">
                  <div className="disponible">
                    <Skeleton width={80} />
                  </div>
                  <div>
                    <Skeleton width={30} />
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <Skeleton width={220} height={180} />
                </div>
                <div className="product-details p-4">
                  <div className="info">
                    <Skeleton width={100} />
                    <Skeleton width={90} />
                  </div>
                  <div className="div">
                    <Skeleton width={150} />
                  </div>
                  <div className="price">
                    <Skeleton width={100} />
                    <Skeleton width={100} />
                  </div>
                  <div className="flex justify-between item-center mt-4">
                    <div className="div">
                      <Skeleton width={90} height={30} />
                    </div>
                    <div className="div">
                      <Skeleton width={60} height={30} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div>
          <Slider {...settings}>
            {product.length > 0 ? (
              product.map((productItems) => {
                return (
                  <div key={productItems.id_product}>
                    <div className="product border m-1  ">
                      <div className="flex justify-between p-2">
                        <p className="disponible">
                          {productItems.availability_product === "available"
                            ? "Disponible"
                            : "No Disponible"}
                        </p>
                        {productItems.dicount !== 0 ? (
                          <p className="bg-pink-500 text-white p-1 px-2 rounded">
                            {productItems.dicount}%
                          </p>
                        ) : null}
                      </div>
                      <div className="flex justify-center items-center">
                        <img
                          className=" w-[200px] bg-contain	object-cover"
                          src={productItems.img_product}
                          alt=""
                        />
                      </div>
                      <div className="product-details p-4">
                        <div className="info">
                          <h3>{productItems.name_product}</h3>
                          <p>
                            {("" + productItems.amount_poduct).replace(
                              /(\d)(?=(\d\d\d)+(?!\d))/g,
                              "$1."
                            )}{" "}
                            Unidades
                          </p>
                        </div>
                        <p className="truncate">
                          {productItems.description_product}
                        </p>
                        <div className="price ">
                          <h4 className="font-bold line-through text-red-600 text-sm">
                            {money.format(productItems.price_product)}
                          </h4>
                          <h3 className="text-black font-bold">
                            {money.format(
                              ((productItems.price_product *
                                productItems.dicount) /
                                100 -
                                productItems.price_product) *
                                -1
                            )}
                          </h3>
                        </div>
                        <div className="flex justify-between item-center mt-4">
                          <div className=" ">
                            <span
                              className="compra pink text-white rounded-md inline-block cursor-pointer"
                              onClick={() => {
                                navigate(
                                  `/CardProducts/${productItems.id_product}`
                                );
                              }}
                            >
                              Ver más
                            </span>
                          </div>
                          <div>
                            <button
                              className="bg-gray-100 py-1 px-3 border-2 rounded-md"
                              onClick={() => handdleCarShop(productItems)}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="30"
                                height="30"
                                viewBox="0 0 48 48"
                              >
                                <g fill="none" stroke="#475569" strokeWidth="4">
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M5 7h6l7 17h17.5L43 10m-22 2h12m-6-6v12m-9 6l-4 6h26"
                                  />
                                  <circle cx="19" cy="39" r="3" />
                                  <circle cx="35" cy="39" r="3" />
                                </g>
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <h1></h1>
            )}
          </Slider>
        </div>
      )}
    </>
  );
};

export default DCard;
