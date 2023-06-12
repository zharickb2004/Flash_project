import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { ToastContainer, toast } from "react-toastify";
import Header from "../../common/header/Header";
import { TodoGetApis } from "../../Apis/Apis";
import * as Yup from "yup";

import "../Login/user.css";

function CodeRecoverPassword() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const [seconds, setSeconds] = useState(60);

  const handdleEmail = async () => {
    let data = {
      email: id,
    };
    await TodoGetApis.RecoverPasword(data);
    setSeconds(60);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds === 0) {
        clearInterval(interval);
      } else {
        setSeconds(seconds - 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [seconds]);

  return (
    <>
      <Header />
      <div className="form-register">
        <ToastContainer />
        <Formik
          initialValues={{
            code: "",
          }}
          validationSchema={Yup.object({
            code: Yup.number("Codigo incorrecto").required("Campo obligatorio"),
          })}
          onSubmit={async (values) => {
            setLoading(true);
            try {
              const data = {
                email: id,
                code: values.code,
              };
              const response = await TodoGetApis.CodeRecoverPassword(data);
              setLoading(false);

              if (response.status === 200) {
                toast.success("Codigo valido", {
                  position: "top-right",
                  autoClose: 4000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
                });
                navigate("/NewPassword/" + id);
              } else {
                toast.error("Codigo invalido", {
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
              toast.error("Codigo invalido", {
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
              <img
                className="w-[500px]"
                src="https://res.cloudinary.com/anonimous/image/upload/v1686140215/Mobile-login_wosqea.jpg"
                alt=""
              />
            </div>
            <Form className=" w-[40rem] ">
              <div className="flex flex-col items-center justify-center">
                <h1 className="pb-3 text-2xl font-bold text-gray-700 mb-6">
                  Codigo
                </h1>
                <div className="campus">
                  <span className="icons-form">
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="gray"
                        fillRule="evenodd"
                        d="M6.75 8a5.25 5.25 0 0 1 10.335-1.313a.75.75 0 0 0 1.452-.374A6.75 6.75 0 0 0 5.25 8v2.055c-1.115.083-1.84.293-2.371.824C2 11.757 2 13.172 2 16c0 2.828 0 4.243.879 5.121C3.757 22 5.172 22 8 22h8c2.828 0 4.243 0 5.121-.879C22 20.243 22 18.828 22 16c0-2.828 0-4.243-.879-5.121C20.243 10 18.828 10 16 10H8c-.452 0-.867 0-1.25.004V8ZM8 17a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm4 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm5-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <Field
                    className="fieldCode"
                    type="text"
                    name="code"
                    placeholder="Codigo"
                  />
                </div>
                <span>
                  <ErrorMessage component="p" name="code" className="error" />
                </span>

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
                  <>
                    <div className="flex mb-4">
                      <span>No he recibido un codigo: {seconds}</span>
                      {seconds === 0 ? (
                        <span
                          className="font-bold underline  cursor-pointer ml-4"
                          onClick={handdleEmail}
                        >
                          Reenviar codigo
                        </span>
                      ) : null}
                    </div>
                    <button className="buttonsAll">Enviar Codigo</button>
                  </>
                )}
              </div>
            </Form>
          </div>
        </Formik>
      </div>
    </>
  );
}

export default CodeRecoverPassword;
