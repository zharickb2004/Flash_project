import React, { useEffect, useState } from "react";

import moment from "moment-with-locales-es6";
import { Formik, Form } from "formik";
import swal from "sweetalert2";
import * as Yup from "yup";

import { TodoGetApis } from "../../Apis/Apis";

moment.locale("es");

function FormPorfileUser() {
  const [customer, setCustomer] = useState([]);
  const [image, setImage] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await TodoGetApis.GetAccountCustomer();
      setCustomer(response.data.rows);
    })();
  }, []);

  return (
    <Formik
      initialValues={customer}
      validationSchema={Yup.object({
        nameUser: Yup.string().required("Campo obligatorio"),
        email: Yup.string()
          .email("Email no válido")
          .required("Campo obligatorio"),
        password: Yup.string().required("Campo obligatorio"),
      })}
      onSubmit={async (values) => {}}
    >
      <div className="formAll">
        <Form className="w-[800px] ">
          <div className="flex w-full justify-between  ">
            <div className="boxAccount">
              {customer.length > 0 ? (
                customer.map((data) => (
                  <div className="boxAccount1">
                    <div className="containerName">
                      {data.img_customer != null ? (
                        <div>
                          <img
                            src={data.img_customer}
                            alt=""
                            className="w-36 rounded-full h-36 object-cover"
                          />
                          <div className="campus bg-gray-100 cursor-pointer mt-2">
                            <div className="relative w-full ">
                              <div className="">
                                <input
                                  className="input_forms z-50 icon  opacity-0 absolute w-full"
                                  type="file"
                                  name="imgStore"
                                  placeholder="Imagen"
                                  onChange={(e) => setImage(e.target.files[0])}
                                />
                              </div>
                              <div className="icon  w-full z-10 bg-gray-100 inset-0 h-full flex justify-center items-center">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                >
                                  <g
                                    fill="none"
                                    stroke="gray"
                                    strokeLinecap="round"
                                    strokeWidth="2"
                                  >
                                    <path
                                      stroke-dasharray="2 4"
                                      stroke-dashoffset="6"
                                      d="M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3"
                                    >
                                      <animate
                                        attributeName="stroke-dashoffset"
                                        dur="0.6s"
                                        repeatCount="indefinite"
                                        values="6;0"
                                      />
                                    </path>
                                    <path
                                      stroke-dasharray="30"
                                      stroke-dashoffset="30"
                                      d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21"
                                    >
                                      <animate
                                        fill="freeze"
                                        attributeName="stroke-dashoffset"
                                        begin="0.1s"
                                        dur="0.3s"
                                        values="30;0"
                                      />
                                    </path>
                                    <path
                                      stroke-dasharray="10"
                                      stroke-dashoffset="10"
                                      d="M12 16v-7.5"
                                    >
                                      <animate
                                        fill="freeze"
                                        attributeName="stroke-dashoffset"
                                        begin="0.5s"
                                        dur="0.2s"
                                        values="10;0"
                                      />
                                    </path>
                                    <path
                                      stroke-dasharray="6"
                                      stroke-dashoffset="6"
                                      d="M12 8.5l3.5 3.5M12 8.5l-3.5 3.5"
                                    >
                                      <animate
                                        fill="freeze"
                                        attributeName="stroke-dashoffset"
                                        begin="0.7s"
                                        dur="0.2s"
                                        values="6;0"
                                      />
                                    </path>
                                  </g>
                                </svg>
                                <span>Subir Imagen</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className=" flex flex-col items-center">
                          <div className="   flex flex-col justify-center items-center relative rounded-full cursor-pointer overflow-hidden ">
                            <div className="icon-img relative">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="120"
                                height="120"
                                viewBox="0 0 32 32"
                              >
                                <path
                                  fill="none"
                                  d="M8.007 24.93A4.996 4.996 0 0 1 13 20h6a4.996 4.996 0 0 1 4.993 4.93a11.94 11.94 0 0 1-15.986 0ZM20.5 12.5A4.5 4.5 0 1 1 16 8a4.5 4.5 0 0 1 4.5 4.5Z"
                                />
                                <path
                                  fill="#c9ccd1"
                                  d="M26.749 24.93A13.99 13.99 0 1 0 2 16a13.899 13.899 0 0 0 3.251 8.93l-.02.017c.07.084.15.156.222.239c.09.103.187.2.28.3c.28.304.568.596.87.87c.092.084.187.162.28.242c.32.276.649.538.99.782c.044.03.084.069.128.1v-.012a13.901 13.901 0 0 0 16 0v.012c.044-.031.083-.07.128-.1c.34-.245.67-.506.99-.782c.093-.08.188-.159.28-.242c.302-.275.59-.566.87-.87c.093-.1.189-.197.28-.3c.071-.083.152-.155.222-.24ZM16 8a4.5 4.5 0 1 1-4.5 4.5A4.5 4.5 0 0 1 16 8ZM8.007 24.93A4.996 4.996 0 0 1 13 20h6a4.996 4.996 0 0 1 4.993 4.93a11.94 11.94 0 0 1-15.986 0Z"
                                />
                              </svg>
                              <input
                                type="file"
                                className="absolute h-full w-ful top-0 opacity-0 cursor-pointer"
                                name="imgStore"
                                onChange={(e) => {
                                  setImage(e.target.files[0]);
                                }}
                              />
                            </div>
                            <div className="input-img l "></div>
                          </div>
                          <button
                            className="bg-gray-100 border rounded-md my-2 p-2 text-gray-800 "
                            onClick={async () => {
                              const response = await TodoGetApis.UpdateCustomer(
                                image
                              );
                              if (response.status === 200) {
                                swal.fire("Imagen actualizada", {
                                  icon: "success",
                                });
                              } else {
                                swal.fire("Error al actualizar la imagen", {
                                  icon: "error",
                                });
                              }
                            }}
                          >
                            Actualizar
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <h1>No hay data</h1>
              )}
            </div>
            <div className="tittleAccount  ">
              <h1>
                {customer.length > 0
                  ? customer[0].name_customer
                  : "Asigna tu nombre"}
              </h1>
              <p>
                {customer.length > 0
                  ? customer[0].email_customer
                  : "Asigna tu email"}
              </p>
            </div>
          </div>

          <div className="boxAccount">
            {customer.length > 0 ? (
              customer.map((data) => (
                <div className="boxAccount1">
                  <div className="containerBox flex items-center">
                    <div className="name">
                      <label>Nombre:</label>
                      <span className="ml-2">{data.name_customer}</span>
                    </div>

                    <div className="bg-gray-100 border rounded-md my-2 p-1 text-gray-800">
                      <button
                        onClick={() => {
                          swal.fire({
                            title: "cambiar nombre",
                            html: `
                        <input id="name" type="text"
                        placeholder="Ingrese el nuevo nombre"/>
                        `,
                            focusConfirm: false,
                            focusCancel: false,
                            showCancelButton: true,
                            showConfirmButton: true,
                            confirmButtonText: "Guardar",
                            cancelButtonText: "Cancelar",
                            preConfirm: async () => {
                              let name = document.getElementById("name").value;
                              let data = {
                                name,
                              };
                              const response = await TodoGetApis.UpdateCustomer(
                                data
                              );

                              if (response === 200) {
                                swal.fire("Nombre actualizado", {
                                  icon: "success",
                                });
                              }
                            },
                          });
                        }}
                      >
                        <div className="flex p-1 ">
                          <span className="ml-4">Editar</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="gray"
                              d="m19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575t1.412.575l1.4 1.4q.575.575.6 1.388t-.55 1.387L19.3 8.925ZM17.85 10.4L7.25 21H3v-4.25l10.6-10.6l4.25 4.25Z"
                            />
                          </svg>
                        </div>
                      </button>
                    </div>
                  </div>
                  <div className="containerBox flex items-center">
                    <div className="name">
                      <label>Email:</label>
                      <span className="mx-2 ">{data.email_customer}</span>
                    </div>
                    <div className="bg-gray-100 border rounded-md my-2 p-1 text-gray-800">
                      <button
                        onClick={() => {
                          swal.fire({
                            tittle: "Editar Direccion",
                            html: ` <input id="addresStore" type="text"
                        placeholder="Ingrese la nueva direccion"/>
                        `,
                            focusConfirm: false,
                            focusCancel: false,
                            showCancelButton: true,
                            showConfirmButton: true,
                            confirmButtonText: "Guardar",
                            cancelButtonText: "Cancelar",
                            preConfirm: async () => {
                              let addres =
                                document.getElementById("addresStore").value;
                              let data = {
                                addres,
                              };
                              const response = await TodoGetApis.UpdateStore(
                                data
                              );
                              if (response === 200) {
                                swal.fire("Direccion actualizada", {
                                  icon: "success",
                                });
                              }
                            },
                          });
                        }}
                      >
                        <div className="flex p-1 ">
                          <span className="mx-2">Editar</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="gray"
                              d="m19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575t1.412.575l1.4 1.4q.575.575.6 1.388t-.55 1.387L19.3 8.925ZM17.85 10.4L7.25 21H3v-4.25l10.6-10.6l4.25 4.25Z"
                            />
                          </svg>
                        </div>
                      </button>
                    </div>
                  </div>

                  <div className="containerBox flex items-center">
                    <div className="name">
                      <label>Dirreccion:</label>
                      <span className="mx-2 ">{data.address_customer}</span>
                    </div>
                    <div className="bg-gray-100 border rounded-md my-2 p-1 text-gray-800">
                      <button
                        onClick={() => {
                          swal.fire({
                            tittle: "Editar Direccion",
                            html: ` <input id="addresStore" type="text"
                        placeholder="Ingrese la nueva direccion"/>
                        `,
                            focusConfirm: false,
                            focusCancel: false,
                            showCancelButton: true,
                            showConfirmButton: true,
                            confirmButtonText: "Guardar",
                            cancelButtonText: "Cancelar",
                            preConfirm: async () => {
                              let addres =
                                document.getElementById("addresStore").value;
                              let data = {
                                addres,
                              };
                              const response = await TodoGetApis.UpdateStore(
                                data
                              );
                              if (response === 200) {
                                swal.fire("Direccion actualizada", {
                                  icon: "success",
                                });
                              }
                            },
                          });
                        }}
                      >
                        <div className="flex p-1 ">
                          <span className="mx-2">Editar</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="gray"
                              d="m19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575t1.412.575l1.4 1.4q.575.575.6 1.388t-.55 1.387L19.3 8.925ZM17.85 10.4L7.25 21H3v-4.25l10.6-10.6l4.25 4.25Z"
                            />
                          </svg>
                        </div>
                      </button>
                    </div>
                  </div>
                  <div className="containerBox flex items-center">
                    <div className="name">
                      <label>Telefono:</label>
                      <span className="mx-2 ">
                        {data.phone_number_customer}
                      </span>
                    </div>
                    <div className="bg-gray-100 border rounded-md my-2 p-1 text-gray-800">
                      <button
                        onClick={() => {
                          swal.fire({
                            tittle: "Editar Direccion",
                            html: ` <input id="addresStore" type="text"
                        placeholder="Ingrese la nueva direccion"/>
                        `,
                            focusConfirm: false,
                            focusCancel: false,
                            showCancelButton: true,
                            showConfirmButton: true,
                            confirmButtonText: "Guardar",
                            cancelButtonText: "Cancelar",
                            preConfirm: async () => {
                              let addres =
                                document.getElementById("addresStore").value;
                              let data = {
                                addres,
                              };
                              const response = await TodoGetApis.UpdateStore(
                                data
                              );
                              if (response === 200) {
                                swal.fire("Direccion actualizada", {
                                  icon: "success",
                                });
                              }
                            },
                          });
                        }}
                      >
                        <div className="flex p-1 ">
                          <span className="mx-2">Editar</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="gray"
                              d="m19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575t1.412.575l1.4 1.4q.575.575.6 1.388t-.55 1.387L19.3 8.925ZM17.85 10.4L7.25 21H3v-4.25l10.6-10.6l4.25 4.25Z"
                            />
                          </svg>
                        </div>
                      </button>
                    </div>
                  </div>
                  <div className="containerBox flex items-center">
                    <div className="name">
                      <label>Fecha de creacion de la cuenta:</label>
                      <span className="ml-2">
                        {moment(data.date).format("D MMM  YY")}
                      </span>
                    </div>
                    <div className="bg-gray-100 border rounded-md my-2 p-1 text-gray-800"></div>
                  </div>

                  <a
                    href="/PageUser"
                    className="pink mx-auto w-full block text-center"
                  >
                    Guardar
                  </a>
                </div>
              ))
            ) : (
              <h1>No hay data</h1>
            )}
          </div>
        </Form>
      </div>
    </Formik>
  );
}

export default FormPorfileUser;
