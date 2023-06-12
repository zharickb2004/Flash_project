import React from "react";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import MenuEmployed from "../../MenuEmployed/MenuEmployed";

import "../../Login/user.css";

function EditSubCategory() {
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
            <h1>Editar Subcategoria</h1>
            <div className="campus">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 24 24"
              >
                <path
                  fill="gray"
                  d="M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM9 9H5V5h4v4zm11-6h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-1 6h-4V5h4v4zm-9 4H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zm-1 6H5v-4h4v4zm8-6c-2.206 0-4 1.794-4 4s1.794 4 4 4s4-1.794 4-4s-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2s2 .897 2 2s-.897 2-2 2z"
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 24 24"
              >
                <path
                  fill="gray"
                  d="M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM9 9H5V5h4v4zm11-6h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-1 6h-4V5h4v4zm-9 4H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zm-1 6H5v-4h4v4zm8-6c-2.206 0-4 1.794-4 4s1.794 4 4 4s4-1.794 4-4s-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2s2 .897 2 2s-.897 2-2 2z"
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
                placeholder="Imagen"
              />
            </div>
            <div className="campus">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 48 48"
              >
                <g
                  fill="none"
                  stroke="gray"
                  strokeLinejoin="round"
                  strokeWidth="4"
                >
                  <path d="M44 14L24 4L4 14v20l20 10l20-10V14Z" />
                  <path
                    strokeLinecap="round"
                    d="m4 14l20 10m0 20V24m20-10L24 24M34 9L14 19"
                  />
                </g>
              </svg>
              <Field
                className="input_forms"
                type="password"
                name="password"
                placeholder="Productos"
              />
            </div>
            <div className="campus">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 48 48"
              >
                <mask id="ipSBuy0">
                  <g fill="none" strokeWidth="4">
                    <path
                      fill="#fff"
                      fillRule="evenodd"
                      stroke="#fff"
                      strokeLinejoin="round"
                      d="M6 15h36l-2 27H8L6 15Z"
                      clipRule="evenodd"
                    />
                    <path
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16 19V6h16v13"
                    />
                    <path stroke="#000" strokeLinecap="round" d="M16 34h16" />
                  </g>
                </mask>
                <path fill="gray" d="M0 0h48v48H0z" mask="url(#ipSBuy0)" />
              </svg>
              <Field
                className="input_forms"
                type="password"
                name="password"
                placeholder="Vendidos"
              />
            </div>
            <div className="campus">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 48 48"
              >
                <mask id="ipSChartStock0">
                  <g
                    fill="none"
                    stroke="#fff"
                    strokeLinejoin="round"
                    strokeWidth="4"
                  >
                    <path fill="gray" d="M6 16h8v16H6z" />
                    <path strokeLinecap="round" d="M10 6v10m0 16v10" />
                    <path fill="gray" d="M34 16h8v16h-8z" />
                    <path strokeLinecap="round" d="M38 6v10m0 16v10" />
                    <path fill="gray" d="M20 14h8v16h-8z" />
                    <path strokeLinecap="round" d="M24 4v10m0 16v10" />
                  </g>
                </mask>
                <path
                  fill="gray"
                  d="M0 0h48v48H0z"
                  mask="url(#ipSChartStock0)"
                />
              </svg>
              <Field
                className="input_forms"
                type="password"
                name="password"
                placeholder="Disponibles"
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

export default EditSubCategory;
