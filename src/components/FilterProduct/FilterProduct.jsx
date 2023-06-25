import React from "react";
import Header from "../../common/header/Header";
import queryString from "query-string";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { TodoGetApis } from "../../Apis/Apis";

import { useContextShopCar } from "../../Hook/UseContextShop";
import { ToastContainer, toast } from "react-toastify";

export default function FilterProduct() {
  const navigate = useNavigate();
  const location = useLocation();
  const { q } = queryString.parse(location.search);

  const [productFilter, setProductFilter] = useState([]);

  const { postProductCar } = useContextShopCar();
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
       await postProductCar(carrito);
    }
  };

  let searchValue = q;
  const filterProduct = productFilter.filter((items) =>
    items.name_product.toLowerCase().includes(searchValue.toLowerCase())
  );

  useEffect(() => {
    (async () => {
      const response = await TodoGetApis.GetProduct(0, 0);
      setProductFilter(response.data.rows);
    })();
  }, []);

  return (
    <>
      <ToastContainer />
      <Header />

      {filterProduct.length > 0 ? (
        <>
          {filterProduct.map((productItems) => {
            return (
              <div className=" grid m-20 gap-4 grid-cols-5 grid-rows-3">
                <div>
                  <div className="product border m-1 ">
                    <div>
                      <p className="disponible">
                        {productItems.availability_product === "available"
                          ? "Disponible"
                          : "No Disponible"}
                      </p>
                    </div>
                    <div className="flex justify-center items-center">
                      <img
                        className=" w-[200px] object-cover"
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
                        <h4 className="text-black font-bold">
                          {money.format(productItems.price_product)}{" "}
                        </h4>
                      </div>

                      <div className="flex justify-between item-center mt-4">
                        <div className="truncate ">
                          <span
                            className="compra pink text-white rounded-md inline-block truncate i"
                            onClick={() => {
                              navigate(
                                `/CardProducts/${productItems.id_product}/routes`
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
              </div>
            );
          })}
        </>
      ) : (
        <div>
          <div className="flex border shadow-xl rounded-md w-4/5 mx-auto mt-[10rem] items-center justify-center">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="300"
                height="300"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#9ca4ad"
                  d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5A6.5 6.5 0 0 0 9.5 3C6.08 3 3.28 5.64 3.03 9h2.02C5.3 6.75 7.18 5 9.5 5C11.99 5 14 7.01 14 9.5S11.99 14 9.5 14c-.17 0-.33-.03-.5-.05v2.02c.17.02.33.03.5.03c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5z"
                />
                <path
                  fill="#9ca4ad"
                  d="M6.47 10.82L4 13.29l-2.47-2.47l-.71.71L3.29 14L.82 16.47l.71.71L4 14.71l2.47 2.47l.71-.71L4.71 14l2.47-2.47z"
                />
              </svg>
            </div>
            <div>
              <h1 className="font-bold text-3xl mb-2">
                No hay publicaciones que coincidan con tu busqueda: {q}
              </h1>
              <ul>
                <li className="text-xl">
                  1. Revisa la ortografía de la palabra.
                </li>
                <li className="text-xl">
                  2. Utiliza palabras más genéricas o menos palabras.
                </li>
                <li className="text-xl">
                  3. Navega por las categorías para encontrar un producto
                  similar
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
