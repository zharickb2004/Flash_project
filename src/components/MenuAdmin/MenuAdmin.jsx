import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { TodoGetApis } from "../../Apis/Apis";

function MenuAdmin() {
  const [account, setAccount] = useState([]);
  const navigate = useNavigate();

  let handdleCloseAccount = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("rol");
    navigate("/");
  };

  useEffect(() => {
    (async () => {
      const response = await TodoGetApis.GetAccountAdmin();
      setAccount(response.data.rows);
    })();
  }, []);

  return (
    <>
      <div>
        {account.length > 0 ? (
          account.map((Items) => (
            <div class="mt-8 text-center">
              <img
                src={Items.img_admin}
                alt="Imagen de perfil"
                class="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28"
              />
              <h5 class="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">
                {Items.name_admin}
              </h5>
              <span class="hidden text-gray-400 lg:block">Administrador</span>
            </div>
          ))
        ) : (
          <h1>...</h1>
        )}

        <ul class="space-y-2 tracking-wide mt-8">
          <Link
            to="/AccountAdmin"
            className="hover:bg-gradient-to-r from-orange-600 to-pink-500 hover:text-white hover:rounded-full duration-300 px-4 my-2 flex bg-gray-100 rounded-md p-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M15 14c-2.67 0-8 1.33-8 4v2h16v-2c0-2.67-5.33-4-8-4m0-2a4 4 0 0 0 4-4a4 4 0 0 0-4-4a4 4 0 0 0-4 4a4 4 0 0 0 4 4M5 13.28l2.45 1.49l-.65-2.81L9 10.08l-2.89-.25L5 7.19L3.87 9.83L1 10.08l2.18 1.88l-.68 2.81L5 13.28Z"
              />
            </svg>
            <span className="pl-4">Perfil</span>
          </Link>

          <Link
            to="/StoresInfo"
            className="hover:bg-gradient-to-r from-orange-600 to-pink-500hover:text-white hover:rounded-full duration-300 px-4 my-2 flex bg-gray-100 rounded-md p-2"
          >
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M5 6q-.425 0-.713-.288T4 5q0-.425.288-.713T5 4h14q.425 0 .713.288T20 5q0 .425-.288.713T19 6H5Zm0 14q-.425 0-.713-.288T4 19v-5h-.175q-.475 0-.775-.363t-.2-.837l1-5q.075-.35.35-.575T4.825 7h14.35q.35 0 .625.225t.35.575l1 5q.1.475-.2.837t-.775.363H20v5q0 .425-.288.713T19 20q-.425 0-.713-.288T18 19v-5h-4v5q0 .425-.288.713T13 20H5Zm1-2h6v-4H6v4Z"
              />
            </svg>
            <span className="pl-4 mr-1 block ">Tiendas</span>
          </Link>

          <Link
            to="/CreateStore"
            className="hover:bg-gradient-to-r from-orange-600 to-pink-500 hover:text-white hover:rounded-full duration-300 px-4 my-2 flex bg-gray-100 rounded-md p-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
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
            <span className="pl-4">Crear Tienda</span>
          </Link>

          <li>
            <Link
              to="/admin"
              aria-label="dashboard"
              class=" hover:bg-gradient-to-r from-orange-600 to-pink-500 
              hover:text-white 
              hover:rounded-full duration-300
               px-4 my-2 flex bg-gray-100 rounded-md p-2
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m16 11.78l4.24-7.33l1.73 1l-5.23 9.05l-6.51-3.75L5.46 19H22v2H2V3h2v14.54L9.5 8l6.5 3.78Z"
                />
              </svg>
              <span class=" pl-4 mr-1 block">Estadisticas</span>
            </Link>
          </li>
        </ul>
      </div>
      <div class="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
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
              strokeWidthh="2"
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
    </>
  );
}

export default MenuAdmin;
