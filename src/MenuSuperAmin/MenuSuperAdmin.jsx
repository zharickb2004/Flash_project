import React from "react";
import { Link, useNavigate } from "react-router-dom";

function MenuSuperAdmin() {
  const navigate = useNavigate();
  
  let handdleCloseAccount = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("rol");
    navigate("/");
  };

  return (
    <div>
      <div>
        <aside
          id="sidebar"
          class="fixed hidden z-20 h-full top-0 left-0 pt-1 lg:flex flex-col w-64 transition-width duration-75 whitespace-nowrap"
          aria-label="Sidebar"
        >
          <div class="relative  min-h-0 border-r border-gray-200 scroll-beheavior flex flex-col pt-5 pb-4 flex-1 px-3 bg-white divide-y space-y-1  justify-between">
            <div className="flex flex-col">
              <div class="mt-8 text-center">
                <img
                  src="https://res.cloudinary.com/dgpikgt5t/image/upload/v1684857250/Frame_1_2_shoktn.png"
                  alt=""
                />

                <span class="hidden text-gray-400 lg:block">Team flash</span>
              </div>

              <li>
                <Link
                  className="  hover:bg-gradient-to-r from-orange-600 to-pink-500 hover:text-white hover:rounded-full duration-300 px-4 my-2 flex bg-gray-100 rounded-md p-2"
                  to="/overAdmin"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 2048 2048"
                  >
                    <path
                      fill="currentColor"
                      d="m1344 2l704 352v785l-128-64V497l-512 256v258l-128 64V753L768 497v227l-128-64V354L1344 2zm0 640l177-89l-463-265l-211 106l497 248zm315-157l182-91l-497-249l-149 75l464 265zm-507 654l-128 64v-1l-384 192v455l384-193v144l-448 224L0 1735v-676l576-288l576 288v80zm-640 710v-455l-384-192v454l384 193zm64-566l369-184l-369-185l-369 185l369 184zm576-1l448-224l448 224v527l-448 224l-448-224v-527zm384 576v-305l-256-128v305l256 128zm384-128v-305l-256 128v305l256-128zm-320-288l241-121l-241-120l-241 120l241 121z"
                    />
                  </svg>
                  <span class="pl-4" title="Centros comerciales">
                    Centros comerciales
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/CreateMalls"
                  className="hover:bg-gradient-to-r from-orange-600 to-pink-500 hover:text-white hover:rounded-full duration-300 px-4 my-2 flex bg-gray-100 rounded-md p-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 14 14"
                  >
                    <path
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7 .54v13M.5 7h13"
                    />
                  </svg>
                  <span
                    className="pl-4 truncate"
                    title="Crear centro comercial"
                  >
                    Crear centro comercial
                  </span>
                </Link>
              </li>
            </div>
            <div class="space-y-2 pt-2 ">
              <button class="px-4 py-3 flex items-center space-x-4 rounded-md text-white-600 group">
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
        </aside>
      </div>
    </div>
  );
}

export default MenuSuperAdmin;
