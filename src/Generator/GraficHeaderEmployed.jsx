import React, { useEffect, useState } from "react";

import moment from "moment-with-locales-es6";
import Chart from "react-apexcharts";

import { TodoGetApis } from "../Apis/Apis";

moment.locale("es");

function GraficHeaderEmployed() {
  const [buys, setBuys] = useState([]);

  const getPrices = buys.map((i) => i.total);

  const getDate = buys.map((i) => moment(i.date_buys).format("L"));

  const options = {
    series: [
      {
        name: "Total",
        data: getPrices,
      },
    ],
    chart: {
      type: "area",
      height: 350,
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
    },
    title: {
      text: "Reporte de Ventas Diarias",
      align: "left",
    },
    subtitle: {
      text: "Movimientos de ventas",
      align: "left",
    },
    labels: getDate,
    xaxis: {
      type: "date",
    },
    yaxis: {
      opposite: true,
    },
    legend: {
      horizontalAlign: "left",
    },
  };

  useEffect(() => {
    (async () => {
      const response = await TodoGetApis.BuyStore();
      setBuys(response.data.rows);
    })();
  }, []);

  return (
    <>
      <h1 className="my-5 ml-2 block text-3xl font-bold text-gray-700">
        Estadisticas
      </h1>
      <div className="flex justify-between items   items-center">
        <div
          id="chart "
          className="border bg-white shadow-md p-5 rounded-xl w-[40rem]"
        >
          <Chart
            options={options}
            series={options.series}
            type="area"
            height={420}
          />
        </div>
        <div class="bg-white w-[550px] shadow-md rounded-lg overflow-hidden  p-4 sm:p-6 xl:p-8 ">
          <div class="mb-4 flex items-center justify-between">
            <div>
              <h3 class="text-xl font-bold text-gray-900 mb-2">
                Últimas ventas
              </h3>
              <span class="text-base font-normal text-gray-500">
                Esta es una lista de tus últimas ventas.
              </span>
            </div>
          </div>
          <div class="flex flex-col mt-8 ">
            <div class="overflow-x-auto rounded-lg">
              <div class="align-middle inline-block min-w-full h-[20rem] ">
                <div class="shadow overflow-hidden sm:rounded-lg">
                  <table class="min-w-full divide-y divide-gray-200 ">
                    <thead class="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          class="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Cliente
                        </th>
                        <th
                          scope="col"
                          class="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Fecha
                        </th>
                        <th
                          scope="col"
                          class="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Total
                        </th>
                      </tr>
                    </thead>
                    <tbody class="bg-white ">
                      {buys.length > 0 ? (
                        <>
                          {buys.map((i) => (
                            <>
                              <tr>
                                <td className="p-1 border">
                                  {i.email_customer}
                                </td>
                                <td className="p-1 border">
                                  {moment(i.date_buys)
                                    .startOf("hour")
                                    .fromNow()}
                                </td>
                                <td className="p-1 border">
                                  {("$ " + i.total).replace(
                                    /(\d)(?=(\d\d\d)+(?!\d))/g,
                                    "$1,"
                                  )}
                                </td>
                              </tr>
                            </>
                          ))}
                        </>
                      ) : (
                        <h1> No tienes ventas registradas en el sistema</h1>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GraficHeaderEmployed;
