import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { ToastContainer, toast } from "react-toastify";
import * as Yup from "yup";

import { TodoGetApis } from "../../Apis/Apis";
import Header from "../../common/header/Header";

import "../Login/user.css";

function RecoverPasword() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <Header />

      <div className="form-register1">
        <ToastContainer />
        <Formik
          initialValues={{
            email: "",
          }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email("Email no valido")
              .required("Campo obligatorio"),
          })}
          onSubmit={async (values) => {
            setLoading(true);
            try {
              const response = await TodoGetApis.RecoverPasword(values);

              if (response.status === 200) {
                setLoading(false);
                toast.success("Codigo enviado", {
                  position: "top-right",
                  autoClose: 4000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
                });
                navigate("/CodeRecoverPassword/" + values.email);
              } else {
                toast.error("Correo invalido", {
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
            } catch (error) {
              setLoading(false);
              toast.error("Correo invalido", {
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
          }}
        >
          <div className="formAll flex">
            <div className="img border-r-2">
              <div className="container-flecha">
                <Link to="/">
                  <svg
                    className="flecha"
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="gray"
                      d="m10.875 19.3l-6.6-6.6q-.15-.15-.213-.325T4 12q0-.2.063-.375t.212-.325l6.6-6.6q.275-.275.688-.287t.712.287q.3.275.313.688T12.3 6.1L7.4 11h11.175q.425 0 .713.288t.287.712q0 .425-.287.713t-.713.287H7.4l4.9 4.9q.275.275.288.7t-.288.7q-.275.3-.7.3t-.725-.3Z"
                    />
                  </svg>
                </Link>
              </div>
              <img  className="w-[500px]" src="https://res.cloudinary.com/anonimous/image/upload/v1686144106/flash/image_wheg9w.png" alt="" />
            </div>
            <Form className=" w-[40rem] ">
              <div className="flex flex-col items-center justify-center">
                <h1 className="pb-3 text-2xl font-bold text-gray-700 mb-4">
                  Recuperar Contraseña
                </h1>
                <p className="m-2 text-center text-[15px]">
                  Ingrese la dirección de correo electrónico verificada de su
                  cuenta de usuario y le enviaremos un enlace para restablecer
                  la contraseña.
                </p>
                <ErrorMessage component="p" name="email" className="error" />
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
                        d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-.4 4.25l-7.07 4.42c-.32.2-.74.2-1.06 0L4.4 8.25a.85.85 0 1 1 .9-1.44L12 11l6.7-4.19a.85.85 0 1 1 .9 1.44z"
                      />
                    </svg>
                  </span>
                  <Field
                    className="input_forms"
                    type="text"
                    name="email"
                    placeholder="E-mail"
                  />
                </div>

                {loading === true ? (
                  <div className="pink flex justify-center">
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
                  <button className="buttonsAll" style={{ color: "white" }}>
                    Enviar
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

export default RecoverPasword;
