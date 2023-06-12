import React from "react";

function DataTableBuy(data) {
  

  const handdleDelete = (data) => {
    
  }

    const money = new Intl.NumberFormat("en-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 2,
    });
  return (
    <>
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
                  {data.data.length > 0 ? (
                    <>
                      {data.data.map((x) => (
                        <tr class="border-b border-gray-200 bg-white hover:bg-gray-100 ">
                          <td class="py-3 px-6 text-left">
                            <div class="flex items-center">
                              <span class="font-medium">{x.id_product}</span>
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
                                {money.format(((x.price_product * x.dicount) / 100 -
                                  x.price_product) *
                                  x.quantity *
                                  -1)}
                              </span>
                            ) : (
                              <span>{money.format(x.price_product * x.quantity)}</span>
                            )}
                          </td>
                          <td class="py-3 px-6 text-center">
                            <div class="flex item-center justify-center">
                              <div class="w-4 mr-2 transform hover:text-red-300 hover:scale-110"></div>
                              <div class="w-4 mr-2 transform hover:text-red-300 hover:scale-110" onClick={()=> {
                                handdleDelete(x)
                              }}>
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
    </>
  );
}

export default DataTableBuy;
