import React, { useRef, useState, useCallback, useEffect } from "react";

import { AgGridReact } from "ag-grid-react";
import swal from "sweetalert2";

import "ag-grid-community/styles/ag-theme-alpine.css";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-enterprise";

import MenuSuperAdmin from "../MenuSuperAmin/MenuSuperAdmin";
import { TodoGetApis } from "../Apis/Apis";
import './buttons.css'

const ImageRenderer = (props) => {
  const handdleImg = () => {
    swal.fire({
      title: "Imagen del producto",
      html: `<img src=${props.value} className="   cover" alt="t" style="width: 190px; heigth:190px; border-radius:8px; text-align:center ; display:block; margin:auto;" />`,
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
      showConfirmButton: false,
    });
  };
  return (
    <div className="h-[10rem]">
      <span onClick={handdleImg}>Ver imagen</span>
    </div>
  );
};

function Options(e) {
  const handleDelete = () => {
    let data = JSON.stringify(e.data.id_store);
    swal.fire({
      text: "¿Estás seguro de eliminar la tienda?",
     
      showConfirmButton: true,
      didOpen: () => {
        const confirmButton = swal.getPopup().querySelector(".swal2-confirm");
        confirmButton.style.backgroundColor = "#FF13CB"; // Cambia el color de fondo del botón
        confirmButton.style.color = "#ffffff"; // Cambia el color del texto del botón
        // Otros estilos que desees aplicar
      }
    })
      .then(async (value) => {
        if (value) {
          const response = await TodoGetApis.DeleteStore(data);
          window.location.reload(true);
          if (response.status === 200) {
            swal.fire("Tienda eliminada", {
              icon: "success",
            });
            e.data.delete();
          }
        }
      });
  };

  return (
    <>
      <button onClick={handleDelete}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="#ea4335"
            d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
          />
        </svg>
      </button>
    </>
  );
}

function DataTableMalls() {
  const [mall, setMall] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await TodoGetApis.GetMalls(0);
      setMall(response.data.rows);
    })();
  }, []);

  const [column] = useState([
    {
      headerName: "Centro Comercial",
      field: "name_admin",
    },
    {
      headerName: "Correo ",
      field: "email_center",
    },

    {
      headerName: "Correo personal",
      field: "email_admin",
    },

    {
      headerName: "Imagen",
      field: "img_admin",
      cellRenderer: ImageRenderer,
    },

    {
      headerName: "Acciones",
      field: "actions",
      cellRenderer: Options,
      enablePivot: true,
    },
  ]);
  const gridRef = useRef();
  const onFilterTextBoxChanged = useCallback(() => {
    gridRef.current.api.setQuickFilter(
      document.getElementById("filter-text-box").value
    );
  }, []);
  return (
    <>
      <MenuSuperAdmin />
      <div>
        <div className="flex   max-w-5xl mx-auto mt-5 justify-between">
          <div className="g">
            <h1 className="text-center block p-2 text-3xl text-gray-700 font-bold">
              Tiendas
            </h1>
          </div>
          <div className="p-2 bg-white  flex items-center mb-4 rounded-md border  w-auto ">
            <div className="icon_search mx-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                viewBox="0 0 16 16"
              >
                <g transform="translate(16 0) scale(-1 1)">
                  <path
                    fill="#ABB2B9"
                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0z"
                  />
                </g>
              </svg>
            </div>
            <div className="input_panel">
              <input
                type="text"
                id="filter-text-box"
                placeholder="Buscar..."
                onInput={onFilterTextBoxChanged}
                className="outline-none w-full"
              />
            </div>
          </div>
        </div>

        <div
          className="ag-theme-alpine shadow-md mx-auto w-[50%] rounded-md overflow-hidden "
          id="myGrid"
          style={{ height: "800px", width: "58%" }}
        >
          <AgGridReact
            ref={gridRef}
            columnDefs={column}
            rowData={mall.map((item) => {
              return {
                name_admin: item.name_admin,
                email_center: item.email_center,
                email_admin: item.email_admin,
                img_admin: item.img_adminx,
              };
            })}
            pagination={true}
            paginationPageSize={15}
          />
        </div>
      </div>
    </>
  );
}

export default DataTableMalls;
