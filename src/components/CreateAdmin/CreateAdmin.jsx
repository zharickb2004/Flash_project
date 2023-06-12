import React from "react";
import {useNavigate } from "react-router-dom";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { ToastContainer, toast } from "react-toastify";
import * as Yup from "yup";

import { TodoGetApis } from "../../Apis/Apis";

import "react-toastify/dist/ReactToastify.css";
import "../Login/user.css";

function CreateAdmin() {
  const navigate = useNavigate();

  return (
    <>
      <ToastContainer />

      <div className="form-register">
        <Formik
          initialValues={{
            nameUser: "",
            email: "",
            password: "",
            token: "",
          }}
          validationSchema={Yup.object({
            nameUser: Yup.string().required("Campo obligatorio"),
            email: Yup.string()
              .email("Email no valido")
              .required("Campo obligatorio"),
            password: Yup.string().required("Campo obligatorio"),
          })}
          onSubmit={async (values) => {
            try {
               await TodoGetApis.SingUp(values, values.token);

              toast.success("Administrador registrado exitosamente", {
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
                navigate("/overAdmin");
              }, 2000);
            } catch (error) {
              toast.error("El usuario ya existe", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
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
          <Form>
            <h1>Registrate</h1>
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
                placeholder="E-mail"
              />
            </div>
            <ErrorMessage component="p" name="password" className="error" />
            <button className="pink">Registar Centro</button>

          </Form>
        </Formik>
      </div>
    </>
  );
}

export default CreateAdmin;
