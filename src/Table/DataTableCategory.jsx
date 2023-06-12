import React, { useRef, useState, useCallback } from "react";

import { AgGridReact } from "ag-grid-react";
import swal from "sweetalert2";

import "ag-grid-community/styles/ag-theme-alpine.css";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-enterprise";

import { TodoGetApis } from "../Apis/Apis";

const ImageRenderer = (props) => {
  const handdelImg = () => {
    swal.fire({
      title: "Imagen de la categoria",
      html: `<img src=${props.value} className="  cover" alt="t" style="width: 190px; heigth:190px; border-radius:8px; text-align:center ; display:block; margin:auto;" /> `,
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
      <span onClick={handdelImg}>Ver Imagen</span>
    </div>
  );
};

function Options(e) {
  let idCategory = e.data.id_category;

  const handleUpdate = () => {
    swal
      .fire({
        title: "Editar Categoria",
        html: `
        <input type="text" id="nameCategory" class="swal2-input" placeholder="Username" value="${e.data.name_category}" name="nameCategory">
        `,
        focusConfirm: false,
        focusCancel: false,
        showCancelButton: true,
        showConfirmButton: true,
        confirmButtonText: "Guardar",
        cancelButtonText: "Cancelar",
        preConfirm: async () => {
          let nameCategory = document.getElementById("nameCategory").value;
          let data = {
            name: nameCategory,
          };

          const response = await TodoGetApis.UpdateCategory(data, idCategory);
          if (response.status === 200) {
            swal.fire("Categoria actualizada", {
              icon: "success",
            });
          }
        },
      })
      .then(() => {
        window.location.reload(true);
        swal.fire("Categoria actualizada", {
          icon: "success",
        });
      });
  };

  const handleDelete = () => {
    let data = JSON.stringify(e.data.id_category);
    swal
      .fire({
        text: "¿Estas seguro de eliminar el producto?",
        buttons: {
          cancel: true,
          confirm: true,
        },
      })
      .then(async (value) => {
        if (value) {
          const response = await TodoGetApis.DeleteCategory(data);
          window.location.reload(true);
          if (response.status === 200) {
            swal.fire("Producto eliminado", {
              icon: "success",
            });
          }
        }
      });
  };

  return (
    <>
      <button onClick={handleUpdate}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="#1daf53"
            d="m19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575t1.412.575l1.4 1.4q.575.575.6 1.388t-.55 1.387L19.3 8.925ZM17.85 10.4L7.25 21H3v-4.25l10.6-10.6l4.25 4.25Z"
          />
        </svg>
      </button>

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

function DataTableCategory({ data }) {
  const [column] = useState([
    {
      headerName: "Codigo",
      field: "id_category",
    },
    {
      headerName: "Nombre",
      field: "name_category",
    },
    {
      headerName: "Imagen",
      field: "img_category",
      cellRenderer: ImageRenderer,
    },
    {
      headerName: "No. Tienda",
      field: "id_Store",
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
    <div>
      <div className="flex justify-between  max-w-4xl mx-auto">
        <div className="g">
          <h1 className="text-center block p-2 text-3xl text-gray-700 font-bold">
            Categorias
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
        style={{ height: 500, width: "62%" }}
      >
        <AgGridReact
          ref={gridRef}
          columnDefs={column}
          rowData={data.map((item) => {
            return {
              id_category: item.id_category,
              name_category: item.name_category,
              img_category: item.img_category,
              id_Store: item.id_Store,
            };
          })}
          pagination={true}
          paginationPageSize={15}
        />
      </div>
    </div>
  );
}

export default DataTableCategory;
