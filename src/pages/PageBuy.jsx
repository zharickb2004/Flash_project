import React, { useEffect, useMemo, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import swal from "sweetalert2";

import MenuEmployed from "../components/MenuEmployed/MenuEmployed";
import { TodoGetApis } from "../Apis/Apis";
import "../components/Login/user.css";

function PageBuy() {
  const [subTotal, setSubTotal] = useState(0);
  const [counter, setCounter] = useState(0);
  const [total, setTotal] = useState(0);
  const [back, setBack] = useState(0);
  const [select, setSelect] = useState();
  const [dataTable, setDataTable] = useState([]);
  const [products, setProducts] = useState([]);
  const [employee, setEmployee] = useState([]);
  let suggestions = getSuggestions(select);

  function getSuggestions(data) {
    console.log(products);
    let options = [];
    if (data) {
      options = products.filter((product) =>
        product.name_product.toLowerCase().includes(data.toLowerCase())
      );
    }
    return options;
  }

  const handleSelectChange = (event) => {
    setSelect(event.target.value);
  };

  const handdlePago = (e) => {
    if (e.target.value !== null) {
      setSubTotal(total);
      setBack(e.target.value !== null ? parseInt(e.target.value) : parseInt(0));
    }
  };

  const addTable = () => {
    let product = products.find((product) => product.id_product == select);
    if (product !== undefined) {
      if (counter !== 0) {
        let data = {
          id_product: product.id_product,
          name_product: product.name_product,
          price_product: product.price_product,
          quantity: counter,
          total: counter * product.price_product,
          dicount: product.dicount,
          store: product.id_store_product,
        };
        setTotal(total + data.total);
        setCounter(0);
        setSelect("");
        setDataTable([...dataTable, data]);
      } else {
        toast.warn("Ingrese una cantidad Valida", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "light",
        });
      }
    } else {
      toast.warn("Producto no encontrado", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      });
    }
  };

  const money = new Intl.NumberFormat("en-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 2,
  });

  const handdleShopping = () => {
    if (dataTable.length === 0) {
      toast.warn("No hay productos en la lista", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      });
    } else if (
      back - subTotal > 0 ||
      back - subTotal === 0 ||
      back - subTotal === -0
    ) {
      swal.fire({
        titel: "Venta en proceso",
        text: "Espere un momento",
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
        </div>`,
        showCancelButton: true,
        confirmButtonText: "Efectuar",
        cancelButtonText: "Cancelar",
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        preConfirm: async () => {
          let data = {
            adress: document.getElementsByName("adress")[0].value,
            phone: document.getElementsByName("phone")[0].value,
            id: document.getElementsByName("id")[0].value,
            total,
            venta: "presencial",
          };
          handdleBuy(data);
        },
      });
    } else {
      toast.warn("Ingrese un pago valido", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      });
    }
  };

  const handdleBuy = async (info) => {
    for (let x = 0; x < dataTable.length; x++) {
      let data = {
        emailCustomer: "CompraDirecta@flash.com",
        idProduct: dataTable[x].id_product,
        store: dataTable[x].store,
        price: dataTable[x].price_product,
        quantity: dataTable[x].quantity,
        adress: info.adress,
        phone: info.phone,
        total,
        nameCustomer: "directa",
        idCustomer: info.id,
        product: dataTable[x].name_product,
        venta: "Directa",
        employee,
      };
      const responseApi = await TodoGetApis.PostBuy(data, 0, 0);
    }
    setDataTable([]);
    setTotal(0);
    setBack(0);
    setSubTotal(0);
  };

  const handdleDelete = (data) => {
    setDataTable(dataTable.filter((x) => x.id_product !== data.id_product));
    setTotal(total - data.total);
  };

  useMemo(() => {
    (async () => {
      const response = await TodoGetApis.GetProductsStore();
      const responseEmployee = await TodoGetApis.GetEmployee();
      setEmployee(responseEmployee.data.data);
      setProducts(response.data.rows);
      setSubTotal(total);
      setBack(back);
    })();
  }, []);

  return (
    <>
      <ToastContainer />
      <div>
        <aside class="ml-[-100%] fixed top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
          <MenuEmployed />
        </aside>
        <div class="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%] flex flex-col  justify-center items-center">
          <div className="ml-14  px-7 pt-7 flex justify-between items-center w-[1350px] ">
            <h1>VENTA PRESENCIAL</h1>
            <div className="flex mr-16 items-center">
              <p className="text-[18px]">EMPLEADO:</p>
              {employee.length > 0 ? (
                <p className="ml-1 text-[15px]">
                  {employee.map((x) => x.name_employee)}
                </p>
              ) : (
                "Anonimo"
              )}
            </div>
          </div>
          <div className="w-[1300px] ml-14 mt-4">
            <div className="flex w-full items-center">
              <div className="flex border border-gray-300 py-2 px-1 w-[500px] ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="gray"
                    d="M456.69 421.39L362.6 327.3a173.81 173.81 0 0 0 34.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 0 0 327.3 362.6l94.09 94.09a25 25 0 0 0 35.3-35.3ZM97.92 222.72a124.8 124.8 0 1 1 124.8 124.8a124.95 124.95 0 0 1-124.8-124.8Z"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Buscar producto"
                  className="ml-2 w-full"
                  onChange={(e) => {
                    setSelect(e.target.value);
                  }}
                />
              </div>
              <label className="ml-7"> Cantidad:</label>
              <div className="ml-4">
                <div class="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                  <input
                    type="number"
                    placeholder="Ingrese la cantidad"
                    onChange={(e) => {
                      if (e.target.value > 0) {
                        setCounter(e.target.value);
                      }
                    }}
                  />
                </div>
              </div>
              <div className="flex w-full justify-end right-0">
                <div className="flex justify-end mr-12 w-[100px]  items-center">
                  <button
                    className="pink w-[10px]"
                    onClick={() => {
                      addTable();
                    }}
                  >
                    Agregar
                  </button>
                </div>
              </div>
            </div>
            {suggestions.length > 0 ? (
              <div>
                <select
                  value={select}
                  onChange={handleSelectChange}
                  className="border border-gray-300 py-2 px-1 w-[300px] mt-2"
                >
                  <option>Seleccione un producto</option>
                  {suggestions.map((product) => (
                    <option key={product.id_product} value={product.id_product}>
                      {product.name_product}
                    </option>
                  ))}
                </select>
              </div>
            ) : null}
          </div>
          <div className="w-[100%]">
            {/* <DataTableBuy data={dataTable} /> */}
            <div class="overflow-x-auto">
              <div class="flex justify-center">
                <div class="w-[1260px]  ">
                  <div class="bg-white shadow-md rounded my-6 h-[500px]">
                    <table class="min-w-max w-full table-auto ">
                      <thead>
                        <tr class="bg-gray-100 text-gray-500 uppercase text-sm leading-normal">
                          <th class="py-3 px-6 text-left">Codigo</th>
                          <th class="py-3 px-6 text-left">Nombre</th>
                          <th class="py-3 px-6 text-left">Precio unitario</th>
                          <th class="py-3 px-6 text-center">Cantidad</th>
                          <th class="py-3 px-6 text-center">Descuento</th>
                          <th class="py-3 px-6 text-center">Total</th>
                          <th class="py-3 px-6 text-center">Acciones</th>
                        </tr>
                      </thead>
                      <tbody class="text-gray-600 text-sm font-light">
                        {dataTable.length > 0 ? (
                          <>
                            {dataTable.map((x) => (
                              <tr class="border-b border-gray-200 bg-white hover:bg-gray-100 ">
                                <td class="py-3 px-6 text-left">
                                  <div class="flex items-center">
                                    <span class="font-medium">
                                      {x.id_product}
                                    </span>
                                  </div>
                                </td>
                                <td class="py-3 px-6 text-left">
                                  <div class="flex items-center">
                                    <span>{x.name_product}</span>
                                  </div>
                                </td>
                                <td class="py-3 px-6 text-center">
                                  <span>{money.format(x.price_product)}</span>
                                </td>
                                <td class="py-3 px-6 text-center">
                                  <span>{x.quantity}</span>
                                </td>
                                <td class="py-3 px-6 text-center">
                                  <span>{x.dicount}</span>
                                </td>
                                <td class="py-3 px-6 text-center">
                                  {x.dicount !== 0 ? (
                                    <span>
                                      {money.format(
                                        ((x.price_product * x.dicount) / 100 -
                                          x.price_product) *
                                          x.quantity *
                                          -1
                                      )}
                                    </span>
                                  ) : (
                                    <span>
                                      {money.format(
                                        x.price_product * x.quantity
                                      )}
                                    </span>
                                  )}
                                </td>
                                <td class="py-3 px-6 text-center">
                                  <div class="flex item-center justify-center">
                                    <div class="w-4 mr-2 transform hover:text-red-300 hover:scale-110"></div>
                                    <div
                                      class="w-4 mr-2 transform hover:text-red-300 hover:scale-110"
                                      onClick={() => {
                                        handdleDelete(x);
                                      }}
                                    >
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth="2"
                                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                        />
                                      </svg>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            ))}
                          </>
                        ) : (
                          <tr class="border-b border-gray-200 bg-white hover:bg-gray-100">
                            <td class="py-3 px-6 text-left">
                              <div class="flex items-center">
                                <span class="font-medium"></span>
                              </div>
                            </td>
                            <td class="py-3 px-6 text-left">
                              <div class="flex items-center">
                                <span></span>
                              </div>
                            </td>
                            <td class="py-3 px-6 text-center">
                              <span></span>
                            </td>
                            <td class="py-3 px-6 text-center">
                              <span></span>
                            </td>
                            <td class="py-3 px-6 text-center">
                              <span></span>
                            </td>
                            <td class="py-3 px-6 text-center">
                              <span></span>
                            </td>
                            <td class="py-3 px-6 text-center">
                              <div class="flex item-center justify-center">
                                <div class="w-4 mr-2 transform hover:text-red-300 hover:scale-110"></div>
                                <div class="w-4 mr-2 transform hover:text-red-300 hover:scale-110">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                    />
                                  </svg>
                                </div>
                              </div>
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" ml-14  px-7 pt-7 flex  w-[1300px] justify-between items-center">
            <div className="flex items-center justify-center w-[300px] text-base flex-nowrap">
              <p className="text-base">Total a pagar:</p>
              <p className="text-base ml-2 font-bold">
                {total !== 0 ? money.format(total) : money.format(0)}
              </p>
            </div>
            <div className="flex">
              <label className="">Pago:</label>
              <div className="border border-gray-300 h-[30px] flex justify-center p-1 ml-4">
                <input
                  type="number"
                  onChange={(e) => {
                    handdlePago(e);
                  }}
                  placeholder="Ingrese el pago"
                />
              </div>
            </div>
            <div className="flex justify-center items-center">

              {subTotal - back ? (
                <>
                  <label className="text-base">Cambio:</label>
                  <p
                    className={
                      subTotal - back > 0
                        ? "text-base ml-2 text-red-500 font-bold"
                        : "text-base ml-2 text-green-500 font-bold"
                    }
                  >
                    {money.format(back - subTotal)}
                  </p>
                </>
              ) : (
                <p className="text-base ml-2 text-green-500 font-bold">
                  {money.format(0)}
                </p>
              )}
            </div>
            <div className=" w-[180px] flex justify-end h-[50px] mr-20">
              <button
                className="pink"
                onClick={() => {
                  handdleShopping();
                }}
              >
                Finalizar venta
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PageBuy;
