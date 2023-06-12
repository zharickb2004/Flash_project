import React, { useState } from "react";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { ToastContainer, toast } from "react-toastify";

import { TodoGetApis } from "../../Apis/Apis";

function FormCreateStore() {
  const [loading, setLoading] = useState(false);
  return (
    <>
      <ToastContainer />
      <div className="ml-[19%] absolute inset-0">
        <Formik
          initialValues={{
            email: "",
            nameStore: "",
            ubicacion: "",
            idEmpleado: "",
            nombreEmpleado: "",
          }}
          onSubmit={async (values) => {
            setLoading(true);
            try {
              const response = await TodoGetApis.CreateStore(values);

              if (response.status === 200 || response.status === 202) {
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
                window.location.href = "/StoresInfo";
              }, 2000);
            }
          }}
        >
          <div className="formAll">
            <Form className=" w-[40rem]">
              <div className="flex flex-col items-center justify-center">
                <h1 className="pb-3 text-2xl font-bold text-gray-700 mb-6">
                  Crear Tienda
                </h1>
                <div className="campus">
                  <span className="icons-from">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="gray"
                        d="M18 16h-4v2h4v2l3-3l-3-3v2M11 4C8.8 4 7 5.8 7 8s1.8 4 4 4s4-1.8 4-4s-1.8-4-4-4m0 10c-4.4 0-8 1.8-8 4v2h9.5c-.3-.8-.5-1.6-.5-2.5c0-1.2.3-2.3.9-3.4c-.6 0-1.2-.1-1.9-.1"
                      />
                    </svg>
                  </span>
                  <Field
                    className="input_forms"
                    type="text"
                    name="nombreEmpleado"
                    placeholder="Nombre empleado"
                  />
                </div>
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
                    name="nameStore"
                    placeholder="Nombre"
                  />
                </div>
                <ErrorMessage
                  component="p"
                  name="nameStore"
                  className="error"
                />
                <div className="campus">
                  <span className="icons-from">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="gray"
                        d="M12 12q.825 0 1.413-.588T14 10q0-.825-.588-1.413T12 8q-.825 0-1.413.588T10 10q0 .825.588 1.413T12 12Zm0 9.625q-.2 0-.4-.075t-.35-.2Q7.6 18.125 5.8 15.362T4 10.2q0-3.75 2.413-5.975T12 2q3.175 0 5.588 2.225T20 10.2q0 2.4-1.8 5.163t-5.45 5.987q-.15.125-.35.2t-.4.075Z"
                      />
                    </svg>
                  </span>
                  <Field
                    className="input_forms"
                    type="text"
                    name="ubicacion"
                    placeholder="Ubicacion"
                  />
                </div>
                <ErrorMessage
                  component="p"
                  name="ubicacion"
                  className="error"
                />
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
                  <button className="buttonsAll" type="submit">
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

export default FormCreateStore;
