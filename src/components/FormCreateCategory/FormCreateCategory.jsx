import React from "react";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function FormCreateCategory() {
  return (
    <>
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
            <h1>Crear Categoria</h1>
            <div className="campus">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="gray"
                  d="M4 11h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1zm10 0h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1zM4 21h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1zm13 0c2.206 0 4-1.794 4-4s-1.794-4-4-4s-4 1.794-4 4s1.794 4 4 4z"
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
              <Field className="input_forms" type="file" name="email" />
            </div>
            <ErrorMessage component="p" name="email" className="error" />

            <button className="pink">Crear</button>
          </Form>
        </Formik>
      </div>
    </>
  );
}

export default FormCreateCategory;
