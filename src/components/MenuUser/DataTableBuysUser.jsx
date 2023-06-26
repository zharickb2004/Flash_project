import React, { useRef, useState, useCallback, useEffect } from "react";

import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/styles/ag-theme-alpine.css";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-enterprise";

import { TodoGetApis } from "../../Apis/Apis";
import MenuUserF from "./MenuUserF";

function DataTableMBuysUser() {
  const [buys, setBuys] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await TodoGetApis.buys();
      setBuys(response.rows);
      console.log(response);
    })();
  }, []);

  const [column] = useState([
    {
      headerName: "Fecha",
      field: "date",
    },
    {
      headerName: "Codigo",
      field: "id_buys",
    },
    {
      headerName: "Tienda",
      field: "nombre_tienda",
    },
    {
      headerName: "Producto",
      field: "price_product",
    },
    {
      headerName: "Total",
      field: "total",
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
      <MenuUserF />

      <div className="ml-[17%]">
        <div className="flex justify-between  max-w-4xl mx-auto mt-5 w-[70%]">
          <div className="g">
            <h1 className="text-center block p-2 text-3xl text-gray-700 font-bold">
              Mis Compras
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
          className="ag-theme-alpine shadow-md mx-auto w-[30%] rounded-md overflow-hidden"
          id="myGrid"
          style={{ height: 500, width: "92%" }}
        >
          <AgGridReact
            ref={gridRef}
            columnDefs={column}
            rowData={buys.map((item) => {
              return {
                date: item.date,
                id_buys: item.id,
                nombre_tienda: item.stores,
                price_product: item.producto,
                total: item.price
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

export default DataTableMBuysUser;
