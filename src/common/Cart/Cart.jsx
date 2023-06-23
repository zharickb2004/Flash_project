import React, { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";

import swal from "sweetalert2";

import { useContextShopCar } from "../../Hook/UseContextShop";
import { TodoGetApis } from "../../Apis/Apis";
import Header from "../header/Header";

import "../../components/Login/user.css";

function Cart() {
  const [product, setProduct,] = useState([]);
  const navigate = useNavigate();

  const { addCard, getProductCar, deleteProductCar, updateProductCar } =
    useContextShopCar();

  const money = new Intl.NumberFormat("en-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 2,
  });

  const DeleteProductCar = async (id) => {
     await deleteProductCar(id);
  };

  const UpdateProductCar = async (id, amount, datas, typeDelete) => {
    const data = {
      amount,
      code: datas.id_store,
      type: typeDelete,
    };

     await updateProductCar(id, data, datas);
    window.location.reload(false);
  };

  const total = 0;
  const amountP = 0;

  const respons = addCard.map((i) =>
    i.discount !== 0
      ? total + ((i.price_product * i.discount) / 100 - i.price_product) * -1
      : total + i.price_product
  );

  const amount = addCard.map((i) =>
    i.amount_Product !== 1
      ? amountP + i.amount_Product
      : amountP + i.amount_Product
  );

  let totalBuy = 0;

  for (let x = 0; x < respons.length; x++) {
    totalBuy += respons[x] * amount[x];
  }

  useMemo(() => {
    (async () => {
      const response = await getProductCar();
      setProduct(response.data.rows);
    })();
  }, [getProductCar]);

  return (
    <>
      <Header />

      <div class="h-screen bg-white pt-10">
        <div class="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
          <div class="rounded-lg md:w-2/3">
            {addCard.map((i) => (
              <>
                <div class="justify-between mb-6 relative rounded-lg  p-6 shadow-2xl border sm:flex sm:justify-start">
                  <img
                    className="w-32 rounded-md"
                    src={i.img_producto}
                    alt=""
                  />
                  <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                    <div class="mt-5 sm:mt-0">
                      <div className="flex items-center gap-3">
                        <h2 class="text-lg font-bold text-gray-900">
                          {i.name_product}
                        </h2>
                        {i.discount > 0 ? (
                          <p className="font-bold  text-red-500 text-sm pt-1 ">
                            {i.discount} % Off
                          </p>
                        ) : null}
                      </div>
                      <p class="mt-1 text-xs text-gray-700">
                        {i.description_product}
                      </p>
                    </div>
                    <div class="mt-4 flex justify-between im sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                      <div class="flex items-center space-x-4 flex-col mt-8">
                        <div class="flex items-center mt-2 border-gray-100">
                          <span
                            class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
                            onClick={() =>
                              UpdateProductCar(i.id_product, 1, i, "delete")
                            }
                          >
                            {" "}
                            -{" "}
                          </span>
                          <div className="h-8 w-8 border bg-white text-center text-xs outline-none  my-5">
                            <span className="mt-2 block">
                              {i.amount_Product}
                            </span>
                          </div>

                          <span
                            class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                            onClick={() =>
                              UpdateProductCar(i.id_product, 1, i, "add")
                            }
                          >
                            {" "}
                            +{" "}
                          </span>
                        </div>
                        <div className="di">
                          <p class="text-sm">
                            {i.discount > 0 ? (
                              <div className="flex flex-col">
                                <p className="font-bold line-through text-red-600">
                                  {money.format(i.price_product)}
                                </p>
                                <p className="text-black bg-red font-bold">
                                  {money.format(
                                    ((i.price_product * i.discount) / 100 -
                                      i.price_product) *
                                      -1
                                  )}
                                </p>
                              </div>
                            ) : (
                              <p>{money.format(i.price_product)}</p>
                            )}
                          </p>
                        </div>
                        <div
                          className="absolute top-2 right-3 bg-gray-100 rounded-full p-1"
                          onClick={() => DeleteProductCar(i.id_product)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            class="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
          <div class="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3 sticky top-[5rem]">
            <div class="mb-2 flex justify-between">
              <p class="text-gray-700">Subtotal</p>
              <p class="text-gray-700 flex flex-col">
                {addCard.map((i) => (
                  <span>
                    {i.discount !== 0
                      ? money.format((i.price_product * i.discount) / 100)
                      : money.format(i.price_product)}
                  </span>
                ))}
              </p>
            </div>

            <hr class="my-4" />
            <div class="flex justify-between">
              <p class="text-lg font-bold">Total</p>
              <div>
                <p class="mb-1 text-lg font-bold">{money.format(totalBuy)}</p>
              </div>
            </div>
            <button
              class="pink mx-auto block"
              onClick={() => {
                swal.fire({
                  title: "Datos personales",
                  text: "Una vez realizada la compra no se podra cancelar",
                  html: `
                    <div className="BuyPart">
          <h1 className="pb-3 text-2xl font-bold text-gray-700">Compra</h1>
          <div className="buyyy">
            <div className="campus">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 16 16"
              >
                <g fill="gray">
                  <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z" />
                  <path d="m8 3.293l6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z" />
                </g>
              </svg>
              <input
                className="input_forms"
                type="text"
                name="adress"
                placeholder="Direccion"
              />
            </div>
            <div className="campus">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 256 256"
              >
                <path
                  fill="gray"
                  d="M231.88 175.08A56.26 56.26 0 0 1 176 224C96.6 224 32 159.4 32 80a56.26 56.26 0 0 1 48.92-55.88a16 16 0 0 1 16.62 9.52l21.12 47.15v.12A16 16 0 0 1 117.39 96c-.18.27-.37.52-.57.77L96 121.45c7.49 15.22 23.41 31 38.83 38.51l24.34-20.71a8.12 8.12 0 0 1 .75-.56a16 16 0 0 1 15.17-1.4l.13.06l47.11 21.11a16 16 0 0 1 9.55 16.62Z"
                />
              </svg>
              <input
                className="input_forms"
                type="number"
                name="phone"
                placeholder="Telefono"
              />
            </div>
            <div className="campus flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 15 15"
              >
                <path
                  fill="gray"
                  fillRule="evenodd"
                  d="M0 3.5A1.5 1.5 0 0 1 1.5 2h12A1.5 1.5 0 0 1 15 3.5v8a1.5 1.5 0 0 1-1.5 1.5h-12A1.5 1.5 0 0 1 0 11.5v-8ZM3 6a2 2 0 1 1 4 0a2 2 0 0 1-4 0Zm9 0H9V5h3v1Zm0 3H9V8h3v1ZM5 9a2.927 2.927 0 0 0-2.618 1.618l-.33.658A.5.5 0 0 0 2.5 12h5a.5.5 0 0 0 .447-.724l-.329-.658A2.927 2.927 0 0 0 5 9Z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                className="input_forms"
                type="text"
                name="id"
                placeholder="Identificacion"
              />
            </div>
          </div>
        </div>
                  `,
                  
                  showCancelButton: true,
                  confirmButtonText: "Siguiente",
                  cancelButtonText: "Cancelar",
                  confirmButtonColor: "#ff13cb",
                  cancelButtonColor: "#808080",
                  preConfirm: async () => {
                    let data = {
                      adress: document.getElementsByName("adress")[0].value,
                      phone: document.getElementsByName("phone")[0].value,
                      id: document.getElementsByName("id")[0].value,
                      venta: "virtual",
                    };
                     await TodoGetApis.PostBuy(
                      data,
                      0,
                      totalBuy
                    );
                    navigate("/");
                  },
                });
              }}
            >
              Comprar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
