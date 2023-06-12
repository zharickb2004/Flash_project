import { ToastContainer, toast } from "react-toastify";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { useContextShopCar } from "../../Hook/UseContextShop";
import Header from "../../common/header/Header";
import Footer from "../../common/footer/Footer";
import { TodoGetApis } from "../../Apis/Apis";
import "./cardProducts.css";

function CardProductBig() {
  const [counter, setCounter] = useState(0);
  const [product, setProduct] = useState([]);
  const { postProductCar } = useContextShopCar();
  const { code } = useParams();

  let token = localStorage.getItem("token");

  const money = new Intl.NumberFormat("en-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 2,
  });

  const handdleShop = (discount, price) => {
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
    } else if (counter === 0) {
      toast.warn("Debes agregar al menos un producto!", {
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
      let priceProduct =
        discount !== 0 ? (price * discount) / 100 - price : price;
      window.location.href = `/Buy/${code}/${priceProduct}/${counter}`;
    }
  };

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
    } else if (counter > 0) {
      let carrito = {
        idProduct: data.id_product,
        nameProduct: data.name_product,
        code: data.id_store_product,
        price: data.price_product,
        img: data.img_product,
        description: data.description_product,
        discount: data.dicount,
        amount: counter,
      };
       await postProductCar(carrito);
    } else {
      toast.warn("Debe poner una cantidad!!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  useEffect(() => {
    (async () => {
      const response = await TodoGetApis.GetProductBig(code);
      setProduct(response.data.data);
    })();
  }, [code]);

  return (
    <>
      <Header />
      <ToastContainer />
      {product.length > 0 ? (
        <div className="boxBig">
          {product.map((items) => {
            return (
              <div className="boxProduct">
                <div className="imgProduct">
                  <div className=" w-full flex justify-start  ml-7 ">
                    {items.dicount !== 0 ? (
                      <div className="bg-pink-500 px-3 py-2  rounded-2xl text-white font-bold">
                        {items.dicount > 0 ? items.dicount : null}%
                      </div>
                    ) : null}
                  </div>
                  <img src={items.img_product} alt={items.name_product} />
                </div>
                <div className="infoProduct">
                  <div className="nameProduct">
                    <p>
                      {items.name_product}
                      <br />
                      <br />
                      {items.description_product}
                    </p>
                  </div>
                  <div className="priceProduct">
                    <p className="font-bold ">
                      {items.dicount > 0 ? (
                        <div className="flex ">
                          <p className="text-red-600 mr-4 line-through text-lg">
                            {money.format(items.price_product)}
                          </p>
                          <p className="text-lg">
                            {money.format(
                              (items.price_product * items.dicount) / 100 -
                                items.price_product
                            )}
                          </p>
                        </div>
                      ) : (
                        money.format(items.price_product)
                      )}
                    </p>
                    <p className="impuestos text-s">
                      Impuestos incluidos (Si aplica)
                    </p>
                  </div>
                  <div className="amountProduct">
                    <div className="infooo">
                      <p>Cantidad</p>
                    </div>
                    <div className="buttonsBox">
                      <div class="custom-number-input h-10 w-32">
                        <div class="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                          <button
                            onClick={() => {
                              if (counter > 0) {
                                setCounter(counter - 1);
                              }
                            }}
                            data-action="decrement"
                            class=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
                          >
                            <span class="m-auto text-2xl font-thin">−</span>
                          </button>
                          <div class=" none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center justify-center text-gray-700  outline-none">
                            {counter}
                          </div>
                          <button
                            onClick={() => {
                              setCounter(counter + 1);
                            }}
                            data-action="increment"
                            class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
                          >
                            <span class="m-auto text-2xl font-thin">+</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="amount">
                    <p>
                      {("" + items.amount_poduct).replace(
                        /(\d)(?=(\d\d\d)+(?!\d))/g,
                        "$1."
                      )}
                      Unidades
                    </p>
                  </div>
                  <div className="buttonsBuy">
                    <button
                      className="addCar"
                      onClick={() => handdleCarShop(items)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M12 9q-.425 0-.713-.288T11 8V6H9q-.425 0-.713-.288T8 5q0-.425.288-.713T9 4h2V2q0-.425.288-.713T12 1q.425 0 .713.288T13 2v2h2q.425 0 .713.288T16 5q0 .425-.288.713T15 6h-2v2q0 .425-.288.713T12 9ZM7 22q-.825 0-1.413-.588T5 20q0-.825.588-1.413T7 18q.825 0 1.413.588T9 20q0 .825-.588 1.413T7 22Zm10 0q-.825 0-1.413-.588T15 20q0-.825.588-1.413T17 18q.825 0 1.413.588T19 20q0 .825-.588 1.413T17 22ZM7 17q-1.15 0-1.738-.988T5.25 14.05L6.6 11.6L3 4H2q-.425 0-.713-.288T1 3q0-.425.288-.713T2 2h1.625q.275 0 .525.15t.375.425L8.55 11h7l3.575-6.475q.125-.25.363-.388T20 4q.575 0 .863.5t.012 1L17.3 11.95q-.275.5-.725.775T15.55 13H8.1L7 15h11q.425 0 .713.288T19 16q0 .425-.288.713T18 17H7Z"
                        />
                      </svg>
                      Añadir al carrito
                    </button>
                    <button
                      className="buy"
                      onClick={() => {
                        handdleShop(items.dicount, items.price_product);
                      }}
                    >
                      Comprar Ahora
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <h1>No hay data</h1>
      )}
      <Footer />
    </>
  );
}

export default CardProductBig;
