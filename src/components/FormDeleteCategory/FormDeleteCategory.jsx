import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";


function FormDeleteCategory() {
  return (
    <>
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
          <h1>Eliminar Categoria</h1>
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
              placeholder="Nombre Categoria"
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
                  d="M12 17a2 2 0 0 0 2-2a2 2 0 0 0-2-2a2 2 0 0 0-2 2a2 2 0 0 0 2 2m6-9a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h1V6a5 5 0 0 1 5-5a5 5 0 0 1 5 5v2h1m-6-5a3 3 0 0 0-3 3v2h6V6a3 3 0 0 0-3-3Z"
                />
              </svg>
            </span>
            <Field
              className="input_forms"
              type="text"
              name="email"
              placeholder="Contraseña"
            />
          </div>
          <ErrorMessage component="p" name="email" className="error" />

          <button className="pink">Eliminar</button>
        </Form>
      </Formik>
    </>
  );
}

export default FormDeleteCategory;
