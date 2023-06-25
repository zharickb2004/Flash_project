import React, { useState, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCookies } from "react-cookie";
import swal from "sweetalert2";
import { useContextShopCar } from "../../Hook/UseContextShop";
import { TodoGetApis } from "../../Apis/Apis";
import Header from "../header/Header";
import "../../components/Login/user.css";

function Cart() {
  const { payment } = useParams();
  const [product, setProduct] = useState([]);
  const { addCard, getProductCar, deleteProductCar, updateProductCar } =
    useContextShopCar();
  const [cookies, setCookie] = useCookies(["dataUser"]);

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

  let totalBuy = null;

  for (let x = 0; x < respons.length; x++) {
    totalBuy += respons[x] * amount[x];
  }

  useMemo(() => {
    (async () => {
      if (payment === "payment-buy") {
        const respnse = await TodoGetApis.allDelete();
        if (respnse.status === 200) {
          alert(cookies.buy);
          await TodoGetApis.PostBuy(cookies.dataUser, 0, cookies.buy);
          swal
            .fire({
              title: "Compra exitosa",
              text: "Gracias por comprar en Flash, te enviaremos un correo con la factura",
              icon: "success",
              confirmButtonText: "Aceptar",
            })
            .then((result) => {
              window.location.href = "/";
            });
        }
      } else {
        const response = await getProductCar();
        setProduct(response.data.rows);
      }
    })();
  }, [payment]);

  const handleBuy = async () => {
    const dataUser = {
      adress: document.getElementsByName("adress")[0].value,
      phone: document.getElementsByName("phone")[0].value,
      id: document.getElementsByName("id")[0].value,
      venta: "virtual",
    };
    setCookie("dataUser", dataUser, { path: "/" });
    await TodoGetApis.CreateSessionBuy(dataUser, totalBuy);
  };

  return (
    <>
      <Header />

      <div className="h-screen bg-white pt-10">
        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
          <div className="rounded-lg md:w-2/3">
            {addCard.map((i) => (
              <>
                <div className="justify-between mb-6 relative rounded-lg  p-6 shadow-2xl border sm:flex sm:justify-start">
                  <img
                    className="w-32 rounded-md"
                    src={i.img_producto}
                    alt=""
                  />
                  <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                    <div className="mt-5 sm:mt-0">
                      <div className="flex items-center gap-3">
                        <h2 className="text-lg font-bold text-gray-900">
                          {i.name_product}
                        </h2>
                        {i.discount > 0 ? (
                          <p className="font-bold  text-red-500 text-sm pt-1 ">
                            {i.discount} % Off
                          </p>
                        ) : null}
                      </div>
                      <p className="mt-1 text-xs text-gray-700">
                        {i.description_product}
                      </p>
                    </div>
                    <div className="mt-4 flex justify-between im sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                      <div className="flex items-center space-x-4 flex-col mt-8">
                        <div className="flex items-center mt-2 border-gray-100">
                          <span
                            className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
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
                            className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                            onClick={() =>
                              UpdateProductCar(i.id_product, 1, i, "add")
                            }
                          >
                            {" "}
                            +{" "}
                          </span>
                        </div>
                        <div className="di">
                          <p className="text-sm">
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
                            className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
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
          <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
            <div className="font-bold text-lg mb-4">Resumen de compra</div>
            <div class="mb-2 flex justify-between">
              <p class="text-gray-700">Subtotal</p>
              <p class="text-gray-700 flex flex-col">
                {addCard.map((i) => (
                  <span>
                    {i.discount !== 0
                      ? money.format(
                          ((i.price_product * i.discount) / 100 -
                            i.price_product) *
                            -1
                        )
                      : money.format(i.price_product)}
                  </span>
                ))}
              </p>
            </div>
            <div className="flex justify-between mt-2">
              <span className="text-gray-600">Envío:</span>
              <span>Gratis</span>
            </div>
            <div className="border-t mt-6"></div>
            <div className="flex justify-between mt-6 font-bold">
              <span>Total:</span>
              <span>{money.format(totalBuy)}</span>
            </div>
            <div className="mt-6">
              <label
                htmlFor="adress"
                className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
              >
                Dirección de envío
              </label>
              <input
                type="text"
                name="adress"
                id="adress"
                required
                className="w-full border-2 border-black px-3 py-2 placeholder-gray-300 border rounded-md focus:outline-none focus:ring focus:ring-indigo-100"
              />
            </div>
            <div className="mt-6">
              <label
                htmlFor="phone"
                className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
              >
                Teléfono de contacto
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                required
                className="w-full px-3 py-2 placeholder-gray-300 border rounded-md focus:outline-none focus:ring focus:ring-indigo-100"
              />
            </div>
            <div className="mt-6">
              <label
                htmlFor="id"
                className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
              >
                Número de identificación
              </label>
              <input
                type="text"
                name="id"
                id="id"
                required
                className="w-full px-3 py-2 placeholder-gray-300 border rounded-md focus:outline-none focus:ring focus:ring-indigo-100"
              />
            </div>
            <div className="flex items-center justify-center mt-6">
              <button
                class="pink rounded mx-auto block"
                onClick={() => {
                  if (totalBuy !== 0) {
                    handleBuy();
                    setCookie("buy", totalBuy, { path: "/" });
                  }
                }}
              >
                Comprar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
