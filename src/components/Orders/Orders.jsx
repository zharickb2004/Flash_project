import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { TodoGetApis } from "../../Apis/Apis";

function Orders() {
  const [storeBuy, setStoreBuy] = useState([]);
  let { code } = useParams();

  useEffect(() => {
    (async () => {
      const response = await TodoGetApis.GetOrder(code, 0);
      setStoreBuy(response.data.data);
    })();
  }, [code]);

  return (
    <div class="ml-auto mb-6 flex flex-col  justify-center items-center">
      <div className="ml-14  px-7 pt-7 flex justify-between items-center w-[1350px] ">
        <h1>PEDIDOS</h1>
      </div>

      <div className="w-[100%]">
        <div class="overflow-x-auto">
          <div class="flex justify-center">
            <div class="w-[1260px]  ">
              <div class="bg-white shadow-lg border-2 rounded my-6 h-[500px]">
                <table class="min-w-max w-full table-auto ">
                  <thead>
                    <tr class="bg-gray-100 text-gray-500 uppercase text-sm leading-normal">
                      <th class="py-3 px-6 text-left">Codigo Compra</th>
                      <th class="py-3 px-6 text-left">Nombre producto</th>
                      <th class="py-3 px-6 text-center">Cantidad</th>
                      <th class="py-3 px-6 text-left">Cliente</th>
                      <th class="py-3 px-6 text-left">Fecha</th>
                      <th class="py-3 px-6 text-center">Direccion</th>
                      <th class="py-3 px-6 text-center">Total</th>
                      <th class="py-3 px-6 text-center">Acciones</th>
                    </tr>
                  </thead>
                  <tbody class="text-gray-600 text-sm font-light">
                    <>
                      {storeBuy.length > 0 ? (
                        storeBuy.map((items) => (
                          <tr
                            class={
                              items.check_buy === 1
                                ? "border-b border-gray-200 bg-green-300"
                                : "border-b border-gray-200 bg-white hover:bg-gray-100 "
                            }
                          >
                            <td class="py-3 px-6 text-left">
                              <div class="flex items-center">
                                <span class="font-medium">{items.id_buys}</span>
                              </div>
                            </td>
                            <td class="py-3 px-6 text-left">
                              <div class="flex items-center">
                                <span>{items.nombre_product}</span>
                              </div>
                            </td>
                            <td class="py-3 px-6 text-center">
                              {items.amount_product}
                            </td>
                            <td class="py-3 px-6 text-center">
                              <span>{items.nombre_cliente}</span>
                            </td>
                            <td class="py-3 px-6 text-center">
                              <span>{items.date_buys}</span>
                            </td>
                            <td class="py-3 px-6 text-center">
                              <span>{items.direcion_cliente}</span>
                            </td>
                            <td class="py-3 px-6 text-center">
                              <span>{items.total}</span>

                              <span></span>
                            </td>
                            <td class="py-3 px-6 text-center">
                              <div class="flex item-center justify-center">
                                <div
                                  class="w-4 mr-2"
                                  onClick={async () => {
                                    const responseBuy =
                                      await TodoGetApis.checkBuy(items.id_buys);
                                    if (responseBuy.status === 200) {
                                      window.location.reload();
                                    }
                                  }}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      fill="#01DF01"
                                      d="M.41 13.41L6 19l1.41-1.42L1.83 12m20.41-6.42L11.66 16.17L7.5 12l-1.43 1.41L11.66 19l12-12M18 7l-1.41-1.42l-6.35 6.35l1.42 1.41L18 7Z"
                                    />
                                  </svg>
                                </div>
                              </div>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <h1>No hay pedidos</h1>
                      )}
                    </>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Orders;
