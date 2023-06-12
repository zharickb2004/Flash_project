import React from "react";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import MenuEmployed from "../../MenuEmployed/MenuEmployed";

import "../../Login/user.css";

function EditProduct() {
  return (
    <>
      <MenuEmployed />
      <div className="form-register">
        <Formik
          initialValues={{
            nameProduct: "",
            descriptionProduct: "",
            stateProduct: "",
            amountProduct: "",
            priceProduct: "",
            imgProduct: "",
            categoryProduct: "",
          }}
          validationSchema={Yup.object({
            nameProduct: Yup.string().required("Campo Obligatorio"),
            descriptionProduct: Yup.string().require("Campo Obligatorio"),
            stateProduct: Yup.string().require("Campo Obligatorio"),
            amountProduct: Yup.number().require("Campo obligatorio"),
            priceProduct: Yup.number().required("Campo Obligatorio"),
            imgProduct: Yup.string(),
            categoryProduct: Yup.string().required("Campo obliagtorio"),
          })}
          onSubmit={async (values) => {
            alert(JSON.stringify(values.nameUser));
          }}
        >
          <Form>
            <h1>Editar Producto</h1>
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
                type="text"
                name="nameProduct"
                placeholder="Nombre"
              />
            </div>
            <ErrorMessage component="p" name="nameProduct" className="error" />
            <div className="campus">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 2048 2048"
              >
                <path
                  fill="gray"
                  d="M896 1537V936L256 616v880l544 273l-31 127l-641-320V472L960 57l832 415v270q-70 11-128 45V616l-640 320v473l-128 128zM754 302l584 334l247-124l-625-313l-206 103zm206 523l240-120l-584-334l-281 141l625 313zm888 71q42 0 78 15t64 41t42 63t16 79q0 39-15 76t-43 65l-717 717l-377 94l94-377l717-716q29-29 65-43t76-14zm51 249q21-21 21-51q0-31-20-50t-52-20q-14 0-27 4t-23 15l-692 692l-34 135l135-34l692-691z"
                />
              </svg>
              <Field
                className="input_forms"
                type="text"
                name="descriptionProduct"
                placeholder="Descripcion"
              />
            </div>
            <ErrorMessage
              component="p"
              name="descriptionProduct"
              className="error"
            />
            <div className="campus">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 24 24"
              >
                <path
                  fill="gray"
                  d="M6.27 17.05A2.991 2.991 0 0 1 4 22c-1.66 0-3-1.34-3-3s1.34-3 3-3c.18 0 .36 0 .53.05l3.07-5.36l-1.74-.99l4.09-1.12l1.12 4.09l-1.74-.99l-3.06 5.37M20 16c-1.3 0-2.4.84-2.82 2H11v-2l-3 3l3 3v-2h6.18c.42 1.16 1.52 2 2.82 2c1.66 0 3-1.34 3-3s-1.34-3-3-3m-8-8c.18 0 .36 0 .53-.05l3.07 5.36l-1.74.99l4.09 1.12l1.12-4.09l-1.74.99l-3.06-5.37A2.991 2.991 0 0 0 12 2c-1.66 0-3 1.34-3 3s1.34 3 3 3Z"
                />
              </svg>
              <Field
                className="input_forms"
                type="text"
                name="stateProduct"
                placeholder="Estado"
              />
            </div>
            <ErrorMessage component="p" name="stateProduct" className="error" />
            <div className="campus">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 48 48"
              >
                <g fill="gray">
                  <path d="M27.707 7.707a1 1 0 0 0-1.414-1.414L24 8.586l-2.293-2.293a1 1 0 1 0-1.414 1.414L22.586 10l-2.293 2.293a1 1 0 0 0 1.414 1.414L24 11.414l2.293 2.293a1 1 0 1 0 1.414-1.415L25.414 10l2.293-2.293Z" />
                  <path
                    fillRule="evenodd"
                    d="M6.684 26.449L10 27.554V36a1 1 0 0 0 .673.945l12.992 4.497a.99.99 0 0 0 .637.011l.014-.004l.015-.005l12.996-4.499A1 1 0 0 0 38 36v-8.446l3.316-1.105a1 1 0 0 0 .465-1.574l-4-5a1 1 0 0 0-.456-.32l-12.998-4.5a1 1 0 0 0-.654 0l-12.998 4.5a.999.999 0 0 0-.456.32l-4 5a1 1 0 0 0 .465 1.574Zm14.635 4.124l1.681-2.4v10.923l-11-3.808V28.22l8.184 2.728a1 1 0 0 0 1.135-.376ZM14.057 20.5L24 23.942l9.943-3.442L24 17.058L14.057 20.5Zm12.624 10.073L25 28.174v10.923l11-3.808V28.22l-8.184 2.728a1 1 0 0 1-1.135-.376ZM11.34 21.676l-2.663 3.329l5.511 1.837l5.92 1.973l2.313-3.303l-.135-.047l-10.946-3.79Zm27.983 3.329l-2.663-3.33l-11.081 3.837l2.313 3.303l11.431-3.81Z"
                    clipRule="evenodd"
                  />
                </g>
              </svg>
              <Field
                className="input_forms"
                type="number"
                name="amountProduct"
                placeholder="Cantidad"
              />
            </div>
            <ErrorMessage
              component="p"
              name="amountProduct"
              className="error"
            />
            <div className="campus">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 512 512"
              >
                <path
                  fill="gray"
                  d="M448 183.8v-123A44.66 44.66 0 0 0 403.29 16H280.36a30.62 30.62 0 0 0-21.51 8.89L13.09 270.58a44.86 44.86 0 0 0 0 63.34l117 117a44.84 44.84 0 0 0 63.33 0l245.69-245.61A30.6 30.6 0 0 0 448 183.8ZM352 144a32 32 0 1 1 32-32a32 32 0 0 1-32 32Z"
                />
                <path
                  fill="gray"
                  d="M496 64a16 16 0 0 0-16 16v127.37L218.69 468.69a16 16 0 1 0 22.62 22.62l262-262A29.84 29.84 0 0 0 512 208V80a16 16 0 0 0-16-16Z"
                />
              </svg>
              <Field
                className="input_forms"
                type="text"
                name="priceProduct"
                placeholder="Precio"
              />
            </div>
            <ErrorMessage component="p" name="priceProduct" className="error" />
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
                name="imgProduct"
                placeholder="Imagen"
              />
            </div>
            <ErrorMessage component="p" name="imgProduct" className="error" />
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
                name="categoryProduct"
                placeholder="Categoria"
              />
            </div>
            <ErrorMessage
              component="p"
              name="categoryProduct"
              className="error"
            />
            <button className="pink">Editar</button>
          </Form>
        </Formik>
      </div>
    </>
  );
}

export default EditProduct;
