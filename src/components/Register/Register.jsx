import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { ToastContainer, toast } from "react-toastify";
import * as Yup from "yup";

import Header from "../../common/header/Header";
import { TodoGetApis } from "../../Apis/Apis";

import "../Login/user.css";

function Register() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(false);

  const navigate = useNavigate();
  return (
    <>
      <ToastContainer />
      <Header />
      <div className="form-register">
        <Formik
          initialValues={{
            nameUser: "",
            email: "",
            password: "",
          }}
          validationSchema={Yup.object({
            nameUser: Yup.string().required("Campo obligatorio"),
            email: Yup.string()
              .email("Email no valido")
              .required("Campo obligatorio"),
            password: Yup.string().required("Campo obligatorio"),
          })}
          onSubmit={async (values) => {
            setLoading(true);
            try {
              await TodoGetApis.CreateCustomer(values);
              setLoading(false);
              toast.success("Registro exitoso", {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
              setTimeout(() => {
                navigate("/Login");
              }, 2000);
            } catch (error) {
              setLoading(false);

              toast.error("Error en el sistema", {
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
          <div className="flex formAll">
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
              <img
                className="w-[500px]"
                src="https://res.cloudinary.com/anonimous/image/upload/v1686140215/Mobile-login_wosqea.jpg"
                alt=""
              />
            </div>
            <Form className=" w-[40rem]">
              <div className="flex flex-col items-center justify-center">
                <h1 className="pb-3 text-2xl font-bold text-gray-700 mb-6">
                  Registrate
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
                      d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4Z"
                    />
                  </svg>
                  <Field
                    className="input_forms"
                    type="text"
                    name="nameUser"
                    placeholder="Nombre"
                  />
                </div>
                <ErrorMessage component="p" name="nameUser" className="error" />
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
                    placeholder="Email"
                  />
                </div>
                <ErrorMessage component="p" name="email" className="error" />
                <div className="campus">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="gray"
                        d="M12 17a2 2 0 0 0 2-2a2 2 0 0 0-2-2a2 2 0 0 0-2 2a2 2 0 0 0 2 2m6-9a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h1V6a5 5 0 0 1 5-5a5 5 0 0 1 5 5v2h1m-6-5a3 3 0 0 0-3 3v2h6V6a3 3 0 0 0-3-3Z"
                      />
                    </svg>
                  </span>
                  <Field
                    className="input_forms"
                    type={status ? "text" : "password"}
                    name="password"
                    placeholder="Contraseña"
                  />
                  <div
                    className="containerEye"
                    onClick={() => setStatus(!status)}
                  >
                    {status ? (
                      <span className="icons-forms1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="gray"
                            d="M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5Z"
                          />
                        </svg>
                      </span>
                    ) : (
                      <span className="icons-forms1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="gray"
                            d="M11.83 9L15 12.16V12a3 3 0 0 0-3-3h-.17m-4.3.8l1.55 1.55c-.05.21-.08.42-.08.65a3 3 0 0 0 3 3c.22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53a5 5 0 0 1-5-5c0-.79.2-1.53.53-2.2M2 4.27l2.28 2.28l.45.45C3.08 8.3 1.78 10 1 12c1.73 4.39 6 7.5 11 7.5c1.55 0 3.03-.3 4.38-.84l.43.42L19.73 22L21 20.73L3.27 3M12 7a5 5 0 0 1 5 5c0 .64-.13 1.26-.36 1.82l2.93 2.93c1.5-1.25 2.7-2.89 3.43-4.75c-1.73-4.39-6-7.5-11-7.5c-1.4 0-2.74.25-4 .7l2.17 2.15C10.74 7.13 11.35 7 12 7Z"
                          />
                        </svg>
                      </span>
                    )}
                  </div>
                </div>
                <ErrorMessage component="p" name="password" className="error" />
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
                  <button className="buttonsAll">Registrate</button>
                )}
                <p className="text-[15px]">
                  ¿Ya tienes una cuenta?{" "}
                  <NavLink to="/Login">
                    <span className="blue">Iniciar sesión</span>
                  </NavLink>
                </p>
              </div>
            </Form>
          </div>
        </Formik>
      </div>
    </>
  );
}

export default Register;
