import React from "react";

import GraficHeaderAdmin from "../Generator/GraficHeaderAdmin";
import MenuAdmin from "../components/MenuAdmin/MenuAdmin";
import GraficaAdmin from "../Generator/GraficaAdmin";

function PageAdmin() {
  return (
    <>
      <aside class="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%] ">
        <MenuAdmin />
      </aside>
      <div class="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
        <div class="sticky z-10 top-0  bg-white lg:py-2.5">
          <div class="px-6 flex items-center justify-between space-x-4 2xl:container">
            <button class="w-12 h-16 -mr-2 border-r lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 my-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            <div class="flex space-x-4"></div>
          </div>
        </div>
        <div className="div">
          <GraficHeaderAdmin />
          <GraficaAdmin />
        </div>
      </div>
    </>
  );
}

export default PageAdmin;
