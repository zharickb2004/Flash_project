import React, { useState, useEffect } from "react";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { ToastContainer, toast } from "react-toastify";

import MenuEmployed from "../../MenuEmployed/MenuEmployed";
import { TodoGetApis } from "../../../Apis/Apis";

import "../../Login/user.css";

function CreateProduct() {
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState([]);
  const [image, setImage] = useState([]);
  const [id, setId] = useState();

  const handdleCategory = (evenet) => {
    setId(evenet.target.value);
  };

  useEffect(() => {
    (async () => {
      const response = await TodoGetApis.getCategoryStore();
      setCategory(response.data.data);
    })();
  }, []);

  return (
    <>
      <ToastContainer />
      <MenuEmployed />
      <div className="formAll ml-[15%] absolute inset-0 ">
        <Formik
          initialValues={{
            nameProduct: "",
            descriptionProduct: "",
            stateProduct: "",
            amountProduct: "",
            priceProduct: "",
            imgProduct: "",
            categoryProduct: "",
            discount: "",
          }}
          onSubmit={async (values) => {
            setLoading(true);

            const data = {
              name: values.nameProduct,
              description: values.descriptionProduct,
              availability: values.stateProduct,
              amount: values.amountProduct,
              price: values.priceProduct,
              image,
              discount: values.discount,
              category: id,
            };

            try {
              const response = await TodoGetApis.CreateProduct(data);

              setLoading(false);
              if (response.status === 200) {
                toast.success("Producto creado con exito", {
                  position: "top-right",
                  autoClose: 4000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
                });
              } else {
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
            } catch (error) {
              setLoading(false);
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
          <Form className="w-[45rem]">
            <div className="flex flex-col items-center justify-center">
              <h1 className="pb-3 text-2xl font-bold text-gray-700">
                Crear Producto
              </h1>
              <div className="grid grid-cols-2 gap-2">
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
                    name="nameProduct"
                    placeholder="Nombre"
                  />
                </div>
                <ErrorMessage
                  component="p"
                  name="nameProduct"
                  className="error"
                />
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
                    className="input_forms outline-none"
                    type="text"
                    name="stateProduct"
                    placeholder="Estado"
                    as="select"
                  >
                    <option value="activo">Activo</option>
                    <option value="inactivo">Inactivo</option>
                  </Field>
                </div>
                <ErrorMessage
                  component="p"
                  name="stateProduct"
                  className="error"
                />
                <div className="campus">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="gray"
                      d="M304 416h-64a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM16 160h48v304a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V160h48c14.21 0 21.38-17.24 11.31-27.31l-80-96a16 16 0 0 0-22.62 0l-80 96C-5.35 142.74 1.77 160 16 160zm416 0H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm-64 128H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM496 32H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h256a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"
                    />
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
                <ErrorMessage
                  component="p"
                  name="priceProduct"
                  className="error"
                />
                <div className="campus">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="gray"
                      d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2M8.83 7.05c.98 0 1.77.79 1.77 1.78c0 .98-.79 1.77-1.77 1.77c-.99 0-1.78-.79-1.78-1.77c0-.99.79-1.78 1.78-1.78M15.22 17c-.98 0-1.77-.8-1.77-1.78s.79-1.77 1.77-1.77s1.78.79 1.78 1.77S16.2 17 15.22 17m-6.72.03L7 15.53L15.53 7l1.5 1.5l-8.53 8.53Z"
                    />
                  </svg>
                  <Field
                    className="input_forms"
                    type="number"
                    name="discount"
                    placeholder="Descuento"
                  />
                </div>

                <div className="campus overflow-x-auto">
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
                  {category.length > 0 ? (
                    <Field
                      className="input_forms"
                      type="text"
                      name="categoryProduct"
                      placeholder="Categoria"
                      as="select"
                      onChange={handdleCategory}
                    >
                      <option value="">Seleccione una categoria</option>
                      {category.map((items) => (
                        <option value={items.id_category}>
                          {items.name_category}
                        </option>
                      ))}
                    </Field>
                  ) : (
                    <h6
                      className="pl-1 truncate whitespaces-nowrap "
                      title="No se encotraron categoria."
                    >
                      No se encotraron categoria.
                    </h6>
                  )}
                </div>

                <div className="campus bg-gray-100 cursor-pointer">
                  <div className="relative w-full">
                    <div>
                      <input
                        className="input_forms z-50 icon  opacity-0 absolute w-full"
                        type="file"
                        name="imgProduct"
                        placeholder="Imagen"
                        onChange={(e) => setImage(e.target.files[0])}
                      />
                    </div>
                    <div className="icon  w-full z-10 bg-gray-100 inset-0 h-full flex justify-center items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="gray"
                          strokeLinecap="round"
                          strokeWidth="2"
                        >
                          <path
                            stroke-dasharray="2 4"
                            stroke-dashoffset="6"
                            d="M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3"
                          >
                            <animate
                              attributeName="stroke-dashoffset"
                              dur="0.6s"
                              repeatCount="indefinite"
                              values="6;0"
                            />
                          </path>
                          <path
                            stroke-dasharray="30"
                            stroke-dashoffset="30"
                            d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21"
                          >
                            <animate
                              fill="freeze"
                              attributeName="stroke-dashoffset"
                              begin="0.1s"
                              dur="0.3s"
                              values="30;0"
                            />
                          </path>
                          <path
                            stroke-dasharray="10"
                            stroke-dashoffset="10"
                            d="M12 16v-7.5"
                          >
                            <animate
                              fill="freeze"
                              attributeName="stroke-dashoffset"
                              begin="0.5s"
                              dur="0.2s"
                              values="10;0"
                            />
                          </path>
                          <path
                            stroke-dasharray="6"
                            stroke-dashoffset="6"
                            d="M12 8.5l3.5 3.5M12 8.5l-3.5 3.5"
                          >
                            <animate
                              fill="freeze"
                              attributeName="stroke-dashoffset"
                              begin="0.7s"
                              dur="0.2s"
                              values="6;0"
                            />
                          </path>
                        </g>
                      </svg>
                      <span>Subir Imagen</span>
                    </div>
                  </div>
                </div>
                <ErrorMessage
                  component="p"
                  name="imgProduct"
                  className="error"
                />

                <ErrorMessage
                  component="p"
                  name="categoryProduct"
                  className="error"
                />
              </div>
              {loading === true ? (
                <div className="buttonsAll flex justify-center">
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
                <button className="buttonsAll">Registrar</button>
              )}
            </div>
          </Form>
        </Formik>
      </div>
    </>
  );
}

export default CreateProduct;
