import React from "react";
import { useParams } from "react-router-dom";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { TodoGetApis } from "../../Apis/Apis";

function FormDeleteStore() {
  let { code } = useParams();

  return (
    <>
      <Formik
        initialValues={{
          password: "",
        }}
        validationSchema={Yup.object({
          password: Yup.string().required("Campo obligatorio"),
        })}
        onSubmit={async (values) => {
          const response = await TodoGetApis.DeleteStore(values, code);
        }}
      >
        <Form>
          <h1>Eliminar Tienda</h1>

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
              name="password"
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

export default FormDeleteStore;
