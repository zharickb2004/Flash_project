import React, { useState } from "react";
import { useParams } from "react-router-dom";

import { TodoGetApis } from "../../Apis/Apis";
import "../Login/user.css";

function Buy() {
  const { idP, price, amount } = useParams();
  
  const [form, setForm] = useState([]);

  const data = async () => {
    const datas = {
      price,
      amount,
      total: price * amount,
      adress: form.adress,
      phone: form.phone,
      id: form.id,
      venta: "virtual",
    };
    try {
      await TodoGetApis.CreateSessionBuyDirect(datas, idP)
      // await TodoGetApis.PostBuy(datas, idP, 0);
      // window.location.href = "/"
      
    } catch (error) {
      alert("Error en la compra")
      console.log(error);
    }
    
  };

  return (
    <>
      <div className=" ">
        <div className="BuyPart">
          <h1 className="pb-3 text-2xl font-bold text-gray-700">Compra</h1>
          <div className="buyyy">
            <div className="campus">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 16 16"
              >
                <g fill="gray">
                  <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z" />
                  <path d="m8 3.293l6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z" />
                </g>
              </svg>
              <input
                className="input_forms"
                type="text"
                name="adress"
                placeholder="Direccion"
                onChange={(e) => {
                  setForm({ ...form, adress: e.target.value });
                }}
              />
            </div>
            <div className="campus">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 256 256"
              >
                <path
                  fill="gray"
                  d="M231.88 175.08A56.26 56.26 0 0 1 176 224C96.6 224 32 159.4 32 80a56.26 56.26 0 0 1 48.92-55.88a16 16 0 0 1 16.62 9.52l21.12 47.15v.12A16 16 0 0 1 117.39 96c-.18.27-.37.52-.57.77L96 121.45c7.49 15.22 23.41 31 38.83 38.51l24.34-20.71a8.12 8.12 0 0 1 .75-.56a16 16 0 0 1 15.17-1.4l.13.06l47.11 21.11a16 16 0 0 1 9.55 16.62Z"
                />
              </svg>
              <input
                className="input_forms"
                type="number"
                name="phone"
                placeholder="Telefono"
                onChange={(e) => {
                  setForm({ ...form, phone: e.target.value });
                }}
              />
            </div>
            <div className="campus">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 15 15"
              >
                <path
                  fill="gray"
                  fillRule="evenodd"
                  d="M0 3.5A1.5 1.5 0 0 1 1.5 2h12A1.5 1.5 0 0 1 15 3.5v8a1.5 1.5 0 0 1-1.5 1.5h-12A1.5 1.5 0 0 1 0 11.5v-8ZM3 6a2 2 0 1 1 4 0a2 2 0 0 1-4 0Zm9 0H9V5h3v1Zm0 3H9V8h3v1ZM5 9a2.927 2.927 0 0 0-2.618 1.618l-.33.658A.5.5 0 0 0 2.5 12h5a.5.5 0 0 0 .447-.724l-.329-.658A2.927 2.927 0 0 0 5 9Z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                className="input_forms"
                type="text"
                name="id"
                placeholder="Identificacion"
                onChange={(e) => {
                  setForm({ ...form, id: e.target.value });
                }}
              />
            </div>
          </div>

          <button className="pink" onClick={data}>
            Comprar
          </button>
        </div>
      </div>
    </>
  );
}

export default Buy;
