import React, { useState, useEffect } from "react";

import { TodoGetApis } from "../Apis/Apis";

import moment from "moment-with-locales-es6";
moment.locale("es");

function GraficEmployed() {
  const [buys, setBuys] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await TodoGetApis.BuyStore();
      setBuys(response.data.rows);
    })();
  }, []);

  return (
    <>
      <div className="flex   justify-between items-center">
        <div class="bg-white shadow-md rounded-lg mb-4 p-4 sm:p-6 h-full w-[640px] ">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-xl font-bold leading-none text-gray-900">
              Últimas clientes
            </h3>
          </div>
          <div class="flow-root">
            <ul
              class="divide-y divide-gray-200 h-[20rem] overflow-y-scroll"
            >
              {buys.length > 0 ? (
                <>
                  {buys.map((i) => (
                    <>
                      <li class="py-3 sm:py-4">
                        <div class="flex items-center space-x-4">
                          <div class="flex-shrink-0">
                            <img
                              class="h-8 w-8 rounded-full"
                              src="https://demo.themesberg.com/windster/images/users/neil-sims.png"
                              alt="Neil"
                            />
                          </div>
                          <div class="flex-1 min-w-0">
                            <p class="text-sm font-medium text-gray-900 truncate">
                              Tatiana Barrera
                            </p>
                            <p class="text-sm text-gray-500 truncate">
                              <a
                                href="/cdn-cgi/l/email-protection"
                                class="__cf_email__"
                                data-cfemail="17727a767e7b57607e7973646372653974787a"
                              >
                                {i.email_customer}
                              </a>
                            </p>
                          </div>
                          <div class="inline-flex items-center text-base font-semibold text-gray-900">
                            {("$ " + i.total).replace(
                              /(\d)(?=(\d\d\d)+(?!\d))/g,
                              "$1,"
                            )}
                          </div>
                        </div>
                      </li>
                    </>
                  ))}
                </>
              ) : (
                <h1>No se encontraron clientes</h1>
              )}
            </ul>
          </div>
        </div>
        <div id="chart"></div>
      </div>
    </>
  );
}

export default GraficEmployed;
