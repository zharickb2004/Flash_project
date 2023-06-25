import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { TodoGetApis } from "../../Apis/Apis";

import "../../components/Login/user.css";

function MenuEmployed() {
  const [store, setStore] = useState([]);

  const navigate = useNavigate();

  let handdleCloseAccount = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("rol");
    navigate("/");
  };
  
  useEffect(() => {
    (async () => {
      const response = await TodoGetApis.GetStore();
      setStore(response.data.data);
    })();
  }, []);

  return (
    <div>
      <div class="">
        <aside
          id="sidebar"
          class="fixed overflow-y-auto z-20 h-full top-0 left-0 pt-1 flex lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75 "
          aria-label="Sidebar"
        >
          <div class="relative flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white pt-0">
            <div class=" scroll-beheavior flex-1 flex flex-col pt-5 pb-4 ">
              <div class="flex-1 px-3 bg-white divide-y space-y-1">
                <div class="space-y-2 pb-2">
                  {store.length > 0 ? (
                    store.map((Items) => (
                      <div class="mt-8 text-center">
                        <img
                          src={Items.img_store}
                          alt=""
                          class="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28"
                        />

                        <span class="hidden text-gray-400 lg:block">
                          <h1> {Items.name_store}</h1>
                        </span>
                      </div>
                    ))
                  ) : (
                   null
                  )}
                  <li>
                    <Link
                      className="  hover:bg-gradient-to-r from-orange-600 to-pink-500 hover:text-white hover:rounded-full duration-300 px-4 my-2 flex bg-gray-100 rounded-md p-2"
                      to="/EditPorfileEmployed"
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
                      to="/MyStore"
                      className="hover:bg-gradient-to-r from-orange-600 to-pink-500 hover:text-white hover:rounded-full duration-300 px-4 my-2 flex bg-gray-100 rounded-md p-2"
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
                      <span className="pl-4">Tienda</span>
                    </Link>
                  </li>
                  <div className="relative  mt-5">
                    
                    <li
                      className="hover:bg-gradient-to-r from-orange-600 to-pink-500 hover:text-white hover:rounded-full duration-300 px-4 my-2 flex bg-gray-100 rounded-md p-2"
                      onClick={() => {
                        window.location.href = "/MyOrders/" + store[0].id_store;
                      }}
                    >
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48"><g fill="gray" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><path d="M5 10L8 13L14 7"/><path d="M5 24L8 27L14 21"/><path d="M5 38L8 41L14 35"/><path d="M21 24H43"/><path d="M21 38H43"/><path d="M21 10H43"/></g></svg>
                      <span className="pl-4">Pedidos</span>
                    </li>
                    <div className="absolute top-[-15px] right-0 ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="50"
                        height="45"
                        viewBox="0 0 100 100"
                      >
                        <path
                          fill="#ff004a"
                          d="M88.558 49.96c0-.885-.435-1.663-1.097-2.151l.014-.024l-9.324-5.383l5.367-9.296l-.018-.011a2.666 2.666 0 0 0-.127-2.408a2.667 2.667 0 0 0-2.025-1.314v-.026H70.58V18.61h-.022a2.667 2.667 0 0 0-1.314-2.022a2.662 2.662 0 0 0-2.412-.125l-.013-.023l-9.481 5.474l-5.25-9.094l-.019.011a2.668 2.668 0 0 0-2.149-1.094c-.885 0-1.664.435-2.151 1.097l-.024-.014l-5.337 9.244l-9.19-5.306l-.011.019a2.666 2.666 0 0 0-2.408.127a2.666 2.666 0 0 0-1.315 2.025h-.027v10.674H18.845v.021a2.667 2.667 0 0 0-2.022 1.314a2.667 2.667 0 0 0-.126 2.41l-.023.014l5.246 9.087l-9.394 5.424l.011.019a2.668 2.668 0 0 0-1.094 2.149c0 .885.435 1.664 1.097 2.151l-.014.024l9.324 5.383l-5.367 9.296l.018.01a2.666 2.666 0 0 0 .127 2.408a2.667 2.667 0 0 0 2.025 1.314v.027H29.42V81.39h.022c.092.816.549 1.58 1.314 2.022a2.665 2.665 0 0 0 2.412.125l.013.023l9.481-5.474l5.25 9.094l.019-.011a2.668 2.668 0 0 0 2.149 1.094c.885 0 1.664-.435 2.151-1.096l.023.013l5.337-9.244l9.191 5.306l.011-.019a2.666 2.666 0 0 0 2.408-.127a2.666 2.666 0 0 0 1.315-2.025h.027V70.398h10.613v-.021a2.667 2.667 0 0 0 2.022-1.314a2.67 2.67 0 0 0 .126-2.411l.023-.013l-5.246-9.087l9.394-5.424l-.011-.019a2.666 2.666 0 0 0 1.094-2.149zM43.715 61.355l-9.846-4.35l4.345 7.525l-2.456 1.418l-6.662-11.537l2.525-1.459l9.53 4.162l-4.185-7.248l2.457-1.418l6.66 11.537l-2.368 1.37zm4.652-2.686l-6.661-11.538l8.165-4.713l1.248 2.162l-5.709 3.295l1.398 2.422l5.587-3.225l1.248 2.16l-5.587 3.227l1.518 2.629l5.709-3.295l1.248 2.162l-8.164 4.714zm18.906-10.915L60.675 41l2.567 9.08l-2.611 1.508l-9.965-9.629l2.75-1.588l6.838 7.168l-2.617-9.605l1.92-1.108l6.993 7.079l-2.79-9.506l2.75-1.588l3.375 13.436l-2.612 1.507z"
                        />
                      </svg>
                    </div>
                  </div>
                  <li>
                    <Link
                      to="/RegistreSales"
                      className="hover:bg-gradient-to-r from-orange-600 to-pink-500  hover:text-white hover:rounded-full duration-300 px-4 my-2 flex bg-gray-100 rounded-md  p-2"
                    >
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M2 17h20v4H2v-4M6.25 7H9V6H6V3h8v3h-3v1h6.8c1 0 2 1 2.2 2l.5 7h-17l.55-7c0-1 1-2 2.2-2M13 9v2h5V9h-5M6 9v1h2V9H6m3 0v1h2V9H9m-3 2v1h2v-1H6m3 0v1h2v-1H9m-3 2v1h2v-1H6m3 0v1h2v-1H9M7 4v1h6V4H7Z"/></svg>
                      <span className="pl-4 whitespace-nowrap">
                        Ventas Presenciales
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/Categorys"
                      className="hover:bg-gradient-to-r from-orange-600 to-pink-500 hover:text-white hover:rounded-full duration-300 px-4 my-2 flex bg-gray-100 rounded-md  p-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM9 9H5V5h4v4zm11-6h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-1 6h-4V5h4v4zm-9 4H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zm-1 6H5v-4h4v4zm8-6c-2.206 0-4 1.794-4 4s1.794 4 4 4s4-1.794 4-4s-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2s2 .897 2 2s-.897 2-2 2z"
                        />
                      </svg>
                      <span class="pl-4">Categorias</span>
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/CreateSubcategory"
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
                      <span className="pl-4">Crear Categoria</span>
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="  hover:bg-gradient-to-r from-orange-600 to-pink-500 hover:text-white hover:rounded-full duration-300 px-4 my-2 flex bg-gray-100 rounded-md p-2"
                      to="/Products"
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
                      <span class="pl-4">Productos</span>
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/CreateProduct"
                      className="hover:bg-gradient-to-r from-orange-600 to-pink-500 hover:text-white hover:rounded-full duration-300 px-4 my-2 flex bg-gray-100 rounded-md  p-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 14 14"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M7 .54v13M.5 7h13"
                        />
                      </svg>
                      <span className="pl-4">Crear Producto</span>
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/Estaditicas"
                      className="hover:bg-gradient-to-r from-orange-600 to-pink-500 hover:text-white hover:rounded-full duration-300 px-4 my-2 flex bg-gray-100 rounded-md  p-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="26"
                        height="26"
                        viewBox="0 0 26 26"
                      >
                        <path
                          fill="currentColor"
                          d="M12.906-.031a1 1 0 0 0-.125.031A1 1 0 0 0 12 1v1H3a3 3 0 0 0-3 3v13c0 1.656 1.344 3 3 3h9v.375l-5.438 2.719a1.006 1.006 0 0 0 .875 1.812L12 23.625V24a1 1 0 1 0 2 0v-.375l4.563 2.281a1.006 1.006 0 0 0 .875-1.812L14 21.375V21h9c1.656 0 3-1.344 3-3V5a3 3 0 0 0-3-3h-9V1a1 1 0 0 0-1.094-1.031zM2 5h22v13H2V5zm18.875 1a1 1 0 0 0-.594.281L17 9.563L14.719 7.28a1 1 0 0 0-1.594.219l-2.969 5.188l-1.219-3.063a1 1 0 0 0-1.656-.344l-3 3a1.016 1.016 0 1 0 1.439 1.44l1.906-1.906l1.438 3.562a1 1 0 0 0 1.812.125l3.344-5.844l2.062 2.063a1 1 0 0 0 1.438 0l4-4A1 1 0 0 0 20.875 6z"
                        />
                      </svg>
                      <span class="pl-4">Estadisticas</span>
                    </Link>
                  </li>
                  <div className=" h-[270px] flex items-end ">
                    <button class="px-4 py-3 flex items-center space-x-4 rounded-md text-white-600 group ">
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
                        class="group-hover:text-white-700  "
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

export default MenuEmployed;
