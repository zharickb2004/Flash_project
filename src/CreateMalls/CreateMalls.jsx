import React, { useState } from "react";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { ToastContainer, toast } from "react-toastify";
import swal from "sweetalert2";

import MenuSuperAdmin from "../MenuSuperAmin/MenuSuperAdmin";
import { TodoGetApis } from "../Apis/Apis";

function CreateMalls() {
  const [image, setImage] = useState([]);
  const [loading, setLoading] = useState(false);

  return (
    <>
      <MenuSuperAdmin />
      <ToastContainer />
      <div className="form-register">
        <Formik
          initialValues={{
            nameMalls: "",
            email: "",
          }}
          onSubmit={async (values) => {
            let data = {
              nameUser: values.nameMalls,
              email: values.email,
              image,
            };
            let bann = false;
            swal.fire({
              title: "Ingrese el token:",
              html: `
              <input id="token" type="password" placeholder="Ingrese el token" />
              `,
              focusConfirm: false,
              focusCancel: false,
              showCancelButton: true,
              showConfirmButton: true,
              confirmButtonText: "Enviar",
              cancelButtonText: "Cancelar",
              preConfirm: async () => {
                try {
                  let token = document.getElementById("token").value;
                  const response = await TodoGetApis.ValidateToken(token);
                  if (response.status === 200) {
                    bann = true;
                    swal.fire({
                      title: "Token Correcto",
                    });

                    if (bann) {
                      setLoading(true);
                      try {
                        const response = await TodoGetApis.SingUp(data);
                        if (
                          response.status === 200 ||
                          response.status === 202
                        ) {
                          setLoading(false);
                          toast.success("Tienda creada correctamente", {
                            position: "top-right",
                            autoClose: 4000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                          });
                        }
                      } catch (error) {
                        setLoading(false);
                        toast.error("Error al crear tienda", {
                          position: "top-right",
                          autoClose: 5000,
                          hideProgressBar: true,
                          closeOnClick: true,
                          pauseOnHover: true,
                          draggable: true,
                          progress: undefined,
                          theme: "light",
                        });
                        setTimeout(() => {
                          window.location.href = "/overAdmin";
                        }, 2000);
                      }
                    } else {
                      toast.error("Ingrese el Token", {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                      });
                    }
                  }
                } catch (error) {
                  swal.fire({
                    title: "Sucedio un Error",
                  });
                }
              },
            });
          }}
        >
          <div className="formAll">
            <Form className=" w-[40rem]">
              <div className="flex flex-col items-center justify-center">
                <h1 className="pb-3 text-2xl font-bold text-gray-700 mb-6">
                  Crear centro comercial
                </h1>

                <div className="campus">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="gray"
                      d="M12 22q-2.05 0-3.875-.788t-3.188-2.15q-1.362-1.362-2.15-3.187T2 12q0-2.075.788-3.888t2.15-3.174Q6.3 3.575 8.124 2.788T12 2q2.075 0 3.888.788t3.174 2.15q1.363 1.362 2.15 3.175T22 12v1.45q0 1.475-1.012 2.513T18.5 17q-.9 0-1.675-.4t-1.275-1.05q-.675.675-1.588 1.063T12 17q-2.075 0-3.538-1.463T7 12q0-2.075 1.463-3.538T12 7q2.075 0 3.538 1.463T17 12v1.45q0 .725.45 1.137T18.5 15q.6 0 1.05-.413T20 13.45V12q0-3.275-2.363-5.638T12 4Q8.725 4 6.362 6.363T4 12q0 3.275 2.363 5.638T12 20h5v2h-5Zm0-7q1.25 0 2.125-.875T15 12q0-1.25-.875-2.125T12 9q-1.25 0-2.125.875T9 12q0 1.25.875 2.125T12 15Z"
                    />
                  </svg>
                  <Field
                    className="input_forms"
                    type="text"
                    name="email"
                    placeholder="Correo"
                  />
                </div>
                <ErrorMessage component="p" name="email" className="error" />
                <div className="campus">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="gray"
                      d="M20 6H4V4h16v2m-6 10.13l-3 3V20H4v-6H3v-2l1-5h16l.61 3.07c-.45.1-.88.33-1.22.67L16.13 14H14v2.13M12 14H6v4h6v-4m10.85-.53l-1.32-1.32c-.2-.2-.53-.2-.72 0l-.98.98l2.04 2.04l.98-.98c.2-.19.2-.52 0-.72M13 19.96V22h2.04l6.13-6.12l-2.04-2.05L13 19.96Z"
                    />
                  </svg>
                  <Field
                    className="input_forms"
                    type="text"
                    name="nameMalls"
                    placeholder="Nombre"
                  />
                </div>
                <ErrorMessage
                  component="p"
                  name="nameStore"
                  className="error"
                />

                <div className="relative w-full ">
                  <div className="">
                    <input
                      className="input_forms z-50 icon  opacity-0 absolute w-full py-6 "
                      type="file"
                      name="image"
                      placeholder="Imagen"
                      onChange={(e) => {
                        setImage(e.target.files[0]);
                      }}
                    />
                  </div>
                  <div className="flex w-full   justify-center">
                    <div className="icon w-[80%] z-10 bg-gray-100 inset-0 h-full flex justify-center items-center py-2 border border-gray-300 rounded-sm">
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

                {loading === true ? (
                  <div className="buttonsAll flex justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <g stroke="white">
                        <circle
                          cx="12"
                          cy="12"
                          r="9.5"
                          fill="none"
                          strokeLinecap="round"
                          strokeWidth="3"
                        >
                          <animate
                            attributeName="stroke-dasharray"
                            calcMode="spline"
                            dur="1.5s"
                            keySplines="0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1"
                            keyTimes="0;0.475;0.95;1"
                            repeatCount="indefinite"
                            values="0 150;42 150;42 150;42 150"
                          />
                          <animate
                            attributeName="stroke-dashoffset"
                            calcMode="spline"
                            dur="1.5s"
                            keySplines="0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1"
                            keyTimes="0;0.475;0.95;1"
                            repeatCount="indefinite"
                            values="0;-16;-59;-59"
                          />
                        </circle>
                        <animateTransform
                          attributeName="transform"
                          dur="2s"
                          repeatCount="indefinite"
                          type="rotate"
                          values="0 12 12;360 12 12"
                        />
                      </g>
                    </svg>
                  </div>
                ) : (
                  <button className="buttonsAll mt-4" type="submit">
                    Crear
                  </button>
                )}
              </div>
            </Form>
          </div>
        </Formik>
      </div>
    </>
  );
}

export default CreateMalls;
