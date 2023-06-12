import React, { useRef, useState, useCallback } from "react";

import { AgGridReact } from "ag-grid-react";
import swal from "sweetalert2";

import { TodoGetApis } from "../Apis/Apis";

import "ag-grid-community/styles/ag-theme-alpine.css";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-enterprise";

function Options(e) {
  const handleDelete = () => {
    let data = JSON.stringify(e.data.id_store);
    swal
      .fire({
        text: "¿Estas seguro de eliminar la tienda?",
        buttons: {
          cancel: true,
          confirm: true,
        },
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

function DataTableStore({ data }) {
  const [column] = useState([
    {
      headerName: "Codigo",
      field: "id_store",
      width: 100,
    },
    {
      headerName: "Nombre Empleado",
      field: "name_employee",
    },
    {
      headerName: "Correo Empleado",
      field: "email_employee",
    },
    {
      headerName: "Estado",
      field: "state_employee",
      width: 100,
    },

    {
      headerName: "Tienda",
      field: "name_store",
      width: 150,
    },
    {
      headerName: "Ubicacion",
      field: "location_store",
      width: 100,
    },
    {
      headerName: "Correo Tienda",
      field: "email_store",
    },

    {
      headerName: "Acciones",
      field: "actions",
      cellRenderer: Options,
      enablePivot: true,
      width: 150,
    },
  ]);
  const gridRef = useRef();
  const onFilterTextBoxChanged = useCallback(() => {
    gridRef.current.api.setQuickFilter(
      document.getElementById("filter-text-box").value
    );
  }, []);
  return (
    <div>
      <div className="flex justify-between  max-w-6xl mx-auto mt-5">
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
        className="ag-theme-alpine mx-auto w-[50%] rounded-md overflow-hidden shadow-lg"
        id="myGrid"
        style={{ height: 800, width: "74%" }}
      >
        <AgGridReact
          ref={gridRef}
          columnDefs={column}
          rowData={data.map((item) => {
            return {
              id_store: item.id_store,
              name_employee: item.name_employee,
              email_employee: item.email_employee,
              state_employee:
                item.state_employee === "asset" ? "Activo" : "Inactivo",
              name_store: item.name_store,
              location_store: item.location_store,
              email_store: item.email_store,
            };
          })}
          pagination={true}
          paginationPageSize={15}
        />
      </div>
    </div>
  );
}

export default DataTableStore;
