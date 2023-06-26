import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { TodoGetApis } from "../../Apis/Apis";

import "../../components/Login/user.css";

function MenuUserF() {
  const [customer, setCustomer] = useState([]);
  const navigate = useNavigate();

  let handdleCloseAccount = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("rol");
    navigate("/");
  };

  useEffect(() => {
    (async () => {
      const response = await TodoGetApis.GetAccountCustomer();
      setCustomer(response.data.rows);
    })();
  }, []);

  return (
    <div>
      <div className="">
        <aside
          id="sidebar"
          class="fixed z-20 h-full top-0 left-0 pt-1 flex lg:flex
             flex-shrink-0 flex-col w-64 transition-width duration-75 "
          aria-label="Sidebar"
        >
          <div class="mt-20  relative flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white pt-0">
            <div class=" scroll-beheavior flex-1 flex flex-col pt-5 pb-4 ">
              <div class="flex-1 px-3 bg-white divide-y space-y-1">
                <div class="space-y-2 pb-2">
                  {customer.length > 0 ? (
                    customer.map((items) => (
                      <div class="mt-8 text-center">
                        <img
                          src={items.img_customer}
                          alt=""
                          class="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28"
                        />
                        <h5 class="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">
                          {items.name_customer}
                        </h5>
                        <span class="hidden text-gray-400 lg:block">
                          Usuario
                        </span>
                      </div>
                    ))
                  ) : (
                  null
                  )}
                  <li>
                    <Link
                      className="  hover:bg-gradient-to-r from-orange-600 to-pink-500 hover:text-white  hover:rounded-full duration-300 px-4 my-2 flex bg-gray-100 rounded-md  p-2"
                      to="/PageUser"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m0 7c2.67 0 8 1.33 8 4v3H4v-3c0-2.67 5.33-4 8-4m0 1.9c-2.97 0-6.1 1.46-6.1 2.1v1.1h12.2V17c0-.64-3.13-2.1-6.1-2.1Z"
                        />
                      </svg>
                      <span class="pl-4">Perfil</span>
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/DataTableBuysUser"
                      className="hover:bg-gradient-to-r from-orange-600 to-pink-500 hover:text-white hover:rounded-full duration-300 px-4 my-2 flex bg-gray-100 rounded-md  p-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 36 36"
                      >
                        <path
                          fill="currentColor"
                          d="M28 30H16v-8h-2v8H8v-8H6v8a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-8h-2Z"
                          class="clr-i-solid clr-i-solid-path-1"
                        />
                        <path
                          fill="currentColor"
                          d="m33.79 13.27l-4.08-8.16A2 2 0 0 0 27.92 4H8.08a2 2 0 0 0-1.79 1.11l-4.08 8.16a2 2 0 0 0-.21.9v3.08a2 2 0 0 0 .46 1.28A4.67 4.67 0 0 0 6 20.13a4.72 4.72 0 0 0 3-1.07a4.73 4.73 0 0 0 6 0a4.73 4.73 0 0 0 6 0a4.73 4.73 0 0 0 6 0a4.72 4.72 0 0 0 6.53-.52a2 2 0 0 0 .47-1.28v-3.09a2 2 0 0 0-.21-.9ZM15 14.4v1.52L14.18 17a2.71 2.71 0 0 1-4.37 0L9 15.88V14.4L11.59 6H16Zm12 1.48L26.19 17a2.71 2.71 0 0 1-4.37 0L21 15.88V14.4L20 6h4.45L27 14.4Z"
                          class="clr-i-solid clr-i-solid-path-2"
                        />
                        <path fill="none" d="M0 0h36v36H0z" />
                      </svg>
                      <span className="pl-4">Compras</span>
                    </Link>
                  </li>

                  <div class="space-y-2 pt-2  h-[420px]  flex items-end">
                    <button class="px-4 py-3 flex items-center space-x-4 rounded-md text-white-600 group h-[50px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                        />
                      </svg>
                      <button
                        class="group-hover:text-white-700"
                        onClick={handdleCloseAccount}
                      >
                        Cerrar Sesión
                      </button>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default MenuUserF;
