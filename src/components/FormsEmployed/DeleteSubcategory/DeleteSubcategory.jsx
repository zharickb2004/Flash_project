import React from "react";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import MenuEmployed from "../../MenuEmployed/MenuEmployed";

import "../../Login/user.css";

function DeleteSubcategory() {
  return (
    <>
      <MenuEmployed />

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
            alert(JSON.stringify(values.nameUser));
          }}
        >
          <Form>
            <h1>Eliminar Subcategoria</h1>

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
                placeholder="E-mail Empleado"
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
                type="password"
                name="password"
                placeholder="Contraseña Empleado"
              />
              <span className="icons-forms">
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
            </div>
            <ErrorMessage component="p" name="password" className="error" />
            <button className="pink">Eliminar</button>
          </Form>
        </Formik>
      </div>
    </>
  );
}

export default DeleteSubcategory;
