import React from "react";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import "../Login/user.css";

function ConcludeBuy() {
  return (
    <div className="form-register">
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={Yup.object({
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
          <h1>Datos de Envio</h1>
          <div className="campus">
            <span className="icons-forms">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="gray"
                  d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Z"
                />
              </svg>
            </span>
            <Field type="taxt" name="address" placeholder="Direccion" />
          </div>
          <ErrorMessage component="p" name="password" className="error" />
          <div className="campus">
            <span className="icons-forms">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="gray"
                  d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24c1.12.37 2.33.57 3.57.57c.55 0 1 .45 1 1V20c0 .55-.45 1-1 1c-9.39 0-17-7.61-17-17c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02l-2.2 2.2z"
                />
              </svg>
            </span>
            <Field type="text" name="phone" placeholder="Telefono" />
          </div>
          <ErrorMessage component="p" name="email" className="error" />
          <button className="pink">Confirmar</button>
        </Form>
      </Formik>
    </div>
  );
}

export default ConcludeBuy;
