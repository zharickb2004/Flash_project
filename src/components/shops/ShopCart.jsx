import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import Skeleton from "react-loading-skeleton";

import "react-loading-skeleton/dist/skeleton.css";

import { useContextShopCar } from "../../Hook/UseContextShop";
import { TodoGetApis } from "../../Apis/Apis";

const ShopCart = () => {
  const { code, idStore } = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [pageReloaded, setPageReloaded] = useState(true);
  const { postProductCar } = useContextShopCar();
  const [load, setLoad] = useState(false);

  let token = localStorage.getItem("token");

  const money = new Intl.NumberFormat("en-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 2,
  });

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
      const response = await postProductCar(carrito);
    }
  };

    useEffect(() => {
      (async () => {
        setLoad(true);
        const response = await TodoGetApis.GetProductsStoresMall(code, idStore);
        setProducts(response.data.rows);
        setLoad(false);
      })();
    }, [code, idStore]);

    useEffect(() => {
      if (idStore !== "0" && pageReloaded) {
        setPageReloaded(false);
      }
    }, [idStore, pageReloaded]);

  return (
    <>
      <ToastContainer />
      <div className="grid gap-4 grid-cols-4 grid-rows-3">
        {products.length > 0 ? (
          <>
            {products.map((productItems) => {
              return (
                <div key={productItems.id_product}>
                  {load ? (
                    <Skeleton />
                  ) : (
                    <div className="product border m-1">
                      <div className="flex justify-between">
                        <p className="disponible">
                          {productItems.availability_product === "available"
                            ? "Disponible"
                            : "Agotado"}
                        </p>
                        {productItems.dicount !== 0 ? (
                          <p className="bg-pink-500 text-white p-1 px-2 rounded">
                            {productItems.dicount} %
                          </p>
                        ) : null}
                      </div>
                      <div className="flex justify-center items-center mt-3">
                        <img
                          className="w-[200px] object-cover"
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
                        <div className="price">
                          {productItems.dicount === 0 ? (
                            <h4 className="text-black font-bold">
                              {money.format(productItems.price_product)}{" "}
                            </h4>
                          ) : (
                            <div className="flex justify-between">
                              <h4 className="font-bold text-sm line-through text-red-600">
                                {money.format(productItems.price_product)}
                              </h4>
                              <h3 className="text-black font-bold">
                                {money.format(
                                  (productItems.price_product *
                                    productItems.dicount) /
                                    100 -
                                    productItems.price_product
                                )}
                              </h3>
                            </div>
                          )}
                        </div>
                        <div className="flex justify-between item-center mt-4">
                          <div className="truncate">
                            <span
                              className="text-white compra pink rounded-md inline-block truncate i"
                              onClick={() => {
                                navigate(
                                  `/CardProducts/${productItems.id_product}/routes`
                                );
                              }}
                            >
                              Comprar Ahora
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
                  )}
                </div>
              );
            })}
          </>
        ) : null}
      </div>
    </>
  );
};

export default ShopCart;
