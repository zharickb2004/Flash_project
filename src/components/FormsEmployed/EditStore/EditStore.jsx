import React from "react";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import MenuEmployed from "../../MenuEmployed/MenuEmployed";

import "../../Login/user.css";

function EditStore() {
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
            <h1>Editar Tienda</h1>
            <div className="campus">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 36 36"
              >
                <path
                  fill="gray"
                  d="M28 30H16v-8h-2v8H8v-8H6v8a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-8h-2Z"
                  class="clr-i-solid clr-i-solid-path-1"
                />
                <path
                  fill="gray"
                  d="m33.79 13.27l-4.08-8.16A2 2 0 0 0 27.92 4H8.08a2 2 0 0 0-1.79 1.11l-4.08 8.16a2 2 0 0 0-.21.9v3.08a2 2 0 0 0 .46 1.28A4.67 4.67 0 0 0 6 20.13a4.72 4.72 0 0 0 3-1.07a4.73 4.73 0 0 0 6 0a4.73 4.73 0 0 0 6 0a4.73 4.73 0 0 0 6 0a4.72 4.72 0 0 0 6.53-.52a2 2 0 0 0 .47-1.28v-3.09a2 2 0 0 0-.21-.9ZM15 14.4v1.52L14.18 17a2.71 2.71 0 0 1-4.37 0L9 15.88V14.4L11.59 6H16Zm12 1.48L26.19 17a2.71 2.71 0 0 1-4.37 0L21 15.88V14.4L20 6h4.45L27 14.4Z"
                  class="clr-i-solid clr-i-solid-path-2"
                />
                <path fill="none" d="M0 0h36v36H0z" />
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
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
                name="email"
                placeholder="Descripcion"
              />
            </div>
            <ErrorMessage component="p" name="email" className="error" />
            <div className="campus">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 24 24"
              >
                <path
                  fill="gray"
                  d="M5 21q-.825 0-1.413-.588T3 19V5q0-.825.588-1.413T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.588 1.413T19 21H5Zm1-4h12l-3.75-5l-3 4L9 13l-3 4Z"
                />
              </svg>
              <Field
                className="input_forms"
                type="file"
                name="password"
                placeholder="Imagen Perfil"
              />
            </div>
            <div className="campus">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 24 24"
              >
                <path
                  fill="gray"
                  d="M5 21q-.825 0-1.413-.588T3 19V5q0-.825.588-1.413T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.588 1.413T19 21H5Zm1-4h12l-3.75-5l-3 4L9 13l-3 4Z"
                />
              </svg>
              <Field
                className="input_forms"
                type="file"
                name="password"
                placeholder="Imagen Portada"
              />
            </div>
            <div className="campus">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 24 24"
              >
                <path
                  fill="gray"
                  d="M12 12q.825 0 1.413-.588T14 10q0-.825-.588-1.413T12 8q-.825 0-1.413.588T10 10q0 .825.588 1.413T12 12Zm0 9.625q-.2 0-.4-.075t-.35-.2Q7.6 18.125 5.8 15.362T4 10.2q0-3.75 2.413-5.975T12 2q3.175 0 5.588 2.225T20 10.2q0 2.4-1.8 5.163t-5.45 5.987q-.15.125-.35.2t-.4.075Z"
                />
              </svg>
              <Field
                className="input_forms"
                type="password"
                name="password"
                placeholder="Ubicacion"
              />
            </div>
            <ErrorMessage component="p" name="password" className="error" />
            <button className="pink">Editar</button>
          </Form>
        </Formik>
      </div>
    </>
  );
}

export default EditStore;
