import React, { useEffect, useState } from "react";

import Chart from "react-apexcharts";

import { TodoGetApis } from "../Apis/Apis";

function GraficHeaderAdmin() {
  const [store, setStore] = useState([]);
  const [buys, setBuys] = useState([]);

  const TotalUnidades = buys.reduce((a, b) => a + b.amount_product, 0);
  const total = buys.reduce((a, b) => a + b.total, 0);

  let options = {
    series: [store.length],
    chart: {
      height: 250,
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: "70",
        },
      },
    },
    labels: ["Total de tiendas"],

  };

  useEffect(() => {
    (async () => {
      const response = await TodoGetApis.getStoresAdmin();
      setStore(response.data.data);
      const responseb = await TodoGetApis.GetStoreGrafic();
      setBuys(responseb.data.rows);
    })();
  }, []);

  return (
    <>
      <h1 className="my-5 ml-16 block text-3xl font-bold text-gray-700">
        Estadisticas
      </h1>
      <div className="flex p-4 justify-center ">
        <div className="flex items-center justify-evenly  w-full">
          <div id="chart">
            <Chart
              options={options}
              series={options.series}
              type="radialBar"
              height={250}
            />
          </div>
          <div className="">
            <h3 class="text-2xl mb-5">
              Reporte tiendas
              <p class="text-gray-400 text-base">
                Informe general de tus tiendas.
              </p>
            </h3>

            <div class="flex flex-col lg:flex-row gap-5 mt-8">
              <div class="w-[250px] lg:w-[20rem]">
                <div class="p-2 rounded text-center bg-teal-500 text-white ">
                  Total Ventas
                </div>
                <div class="border border-gray-300 rounded text-center py-8 mt-2  ">
                  <h2 class="text-4xl font-bold pb-2 ">
                    {" "}
                    {("$ " + total).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")}
                  </h2>
                </div>
              </div>

              <div class="w-full lg:w-2/5">
                <div class="p-2 rounded text-center bg-teal-500 text-white">
                  Valor Producto
                </div>
                <div class="flex gap-5 mt-2">
                  <div class="flex-grow border border-gray-300 rounded text-center py-8">
                    <h2 class="text-4xl font-bold pb-2">
                      {(TotalUnidades * 10) / 100}%
                    </h2>
                  </div>
                </div>
              </div>

              <div class="w-full lg:w-2/5">
                <div class="p-2 rounded text-center bg-teal-500 text-white">
                  Cantidad
                </div>
                <div class="flex gap-5 mt-2">
                  <div class="flex-grow border border-gray-300 rounded text-center py-8 w-[100px]">
                    <h2 class="text-4xl font-bold pb-2 ">{TotalUnidades}</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GraficHeaderAdmin;
