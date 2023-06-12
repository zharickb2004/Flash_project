import React, { useEffect, useState } from "react";

import { Formik, Form} from "formik";
import * as Yup from "yup";

import { TodoGetApis } from "../../Apis/Apis";
import PageNotFound from "../../pages/PageNotFound";

import "./account.css";

function Account() {
  const [stop, setStop] = useState(true);
  const [image, setImage] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      if (stop) {
        const response = await TodoGetApis.GetAccountCustomer();
        setData(response.data.rows);
        setStop(false);
      }
    })();
  }, [stop]);

  return (
    <>
      <Formik
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
        {data.length > 0 ? (
          <Form className="formRegister">
            <div className="tittleAccount">
              <h1>Mi Perfil</h1>
              <p>Administra tu cuenta</p>
            </div>
            <hr />
            {data.map((x) => (
              <div className="boxAccount">
                <div className="boxAccount1">
                  <div className="containerBox">
                    <div className="name">
                      <label>Nombre de Usuario:</label>
                    </div>
                    <div className="containerName">{x.name_customer}</div>
                  </div>
                  <div className="containerBox">
                    <div className="name">
                      <label>Correo electronico:</label>
                    </div>
                    <div className="containerName">{x.email_customer}</div>
                  </div>
                  <div className="containerBox">
                    <div className="name">
                      <label>Telefono:</label>
                    </div>
                    <div className="containerName">
                      {x.phone_number_customer}
                    </div>
                  </div>

                  <button className="buttonAccount">Guardar</button>
                </div>

                {x.img_customer !== null ? (
                  <div className="boxAccount2">
                    <div className="imagen">
                      <img
                        src="https://res.cloudinary.com/deoe4gcly/image/upload/v1682342733/descarga_axyac5.jpg"
                        alt=""
                      />
                    </div>
                    <button className="buttonImage">Seleccionar Imagen</button>
                    <p>
                      Tamaño de archivo: máximo 1 MB <br />
                      Extensión de archivo: .JPEG, .PNG
                    </p>
                  </div>
                ) : (
                  <div>
                    <input
                      onChange={(e) => {
                        setImage(e.target.files[0]);
                      }}
                      type="file"
                      name="img_customer"
                      id="img_customer"
                    />
                    <button>Subir</button>
                  </div>
                )}
              </div>
            ))}
            <button
              onClick={async () => {
                const response = await TodoGetApis.UpdateCustomer(image);
                if (response.status === 200) {
                  alert("Actualizado");
                }
              }}
            >
              Editar
            </button>
          </Form>
        ) : (
          <PageNotFound />
        )}
      </Formik>
    </>
  );
}

export default Account;
