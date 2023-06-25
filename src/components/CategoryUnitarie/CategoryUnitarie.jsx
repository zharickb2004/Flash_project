import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { toast, ToastContainer } from "react-toastify";
import Skeleton from "react-loading-skeleton";

import { useContextShopCar } from "../../Hook/UseContextShop";

import Header from "../../common/header/Header";
import { TodoGetApis } from "../../Apis/Apis";

function CategoryUnitarie() {
  const [category, setCategory] = useState([]);
  const [load, ] = useState(false);
  let { code, name } = useParams();

  const navigate = useNavigate();
  let token = localStorage.getItem("token");

  const { postProductCar } = useContextShopCar();

  const handdleCarShop = async (data) => {
    if (token === null) {
      toast.warn("Inicia sesión, para agregar al carrito!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
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

  const money = new Intl.NumberFormat("en-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 2,
  });

  useEffect(() => {
    (async () => {
      let response = await TodoGetApis.GetProductCategory(code);
      setCategory(response.data.rows);
    })();
  }, [code]);

  return (
    <>
      <ToastContainer />
      <Header />
      <p className="text-4xl text-gray-600 py-7 ml-[10rem]">{name}</p>
      <div className=" flex  justify-center ">
        <div className="  w-[1500px] grid gap-2 grid-cols-4 ">
          {category.length > 0 ? (
            category.map((categoryProduct) => {
              return (
                <div className="  ">
                  {load ? (
                    <div className="product border m-1 ">
                      <div className="flex justify-between p-2">
                        <div className="disponible">
                          <Skeleton width={80} />
                        </div>
                        <div className="">
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
                  ) : (
                    <div className="product border m-1 ">
                      <div className="flex justify-between p-2">
                        <p className="disponible">
                          {categoryProduct.availability_product === "available"
                            ? "Disponible"
                            : "No Disponible"}
                        </p>
                        {categoryProduct.dicount !== 0 ? (
                          <p className="bg-pink-500 text-white p-1 px-2 rounded">
                            {categoryProduct.dicount}%
                          </p>
                        ) : null}
                      </div>
                      <div className="flex justify-center items-center">
                        <img
                          className=" w-[200px] object-cover"
                          src={categoryProduct.img_product}
                          alt=""
                        />
                      </div>
                      <div className="product-details p-4">
                        <div className="info">
                          <h3>{categoryProduct.name_product}</h3>
                          <p>
                            {("" + categoryProduct.amount_poduct).replace(
                              /(\d)(?=(\d\d\d)+(?!\d))/g,
                              "$1."
                            )}{" "}
                            Unidades
                          </p>
                        </div>
                        <p className="truncate">
                          {categoryProduct.description_product}
                        </p>
                        <div className="price flex flex-col">
                          {categoryProduct.dicount !== 0 ? (
                            <div>
                              <h4 className="font-bold line-through text-red-600">
                                {money.format(categoryProduct.price_product)}
                              </h4>
                            </div>
                          ) : (
                            <div className="flex justify-end">
                              <h3 className="text-black font-bold">
                                {money.format(
                                  (categoryProduct.price_product *
                                    categoryProduct.dicount) /
                                    100 -
                                    categoryProduct.price_product * -1
                                )}
                              </h3>
                            </div>
                          )}
                        </div>

                        <div className="flex justify-between item-center mt-4">
                          <div className="truncate ">
                            <span
                              className="text-white compra pink rounded-md inline-block truncate i"
                              onClick={() => {
                                navigate(
                                  `/CardProducts/${categoryProduct.id_product}/routes`
                                );
                              }}
                            >
                              Ver más
                            </span>
                            {/* </NavLink> */}
                          </div>
                          <div className="">
                            <button
                              className="bg-gray-100 py-1 px-3 border-2 rounded-md"
                              onClick={() => handdleCarShop(categoryProduct)}
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
                  )}
                </div>
              );
            })
          ) : (
           null
          )}
        </div>
      </div>
    </>
  );
}

export default CategoryUnitarie;
