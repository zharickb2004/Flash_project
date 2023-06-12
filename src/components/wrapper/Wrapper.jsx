import React from "react";
import "./style.css";

const Wrapper = () => {
  const data = [
    {
      cover: (
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
          >
            <path
              fill="white"
              d="M6 20q-1.25 0-2.125-.875T3 17H1V6q0-.825.588-1.413T3 4h14v4h3l3 4v5h-2q0 1.25-.875 2.125T18 20q-1.25 0-2.125-.875T15 17H9q0 1.25-.875 2.125T6 20Zm0-2q.425 0 .713-.288T7 17q0-.425-.288-.713T6 16q-.425 0-.713.288T5 17q0 .425.288.713T6 18Zm12 0q.425 0 .713-.288T19 17q0-.425-.288-.713T18 16q-.425 0-.713.288T17 17q0 .425.288.713T18 18Zm-1-5h4.25L19 10h-2v3Z"
            />
          </svg>
        </span>
      ),
      title: "Envíos a todo el mundo",
      decs: "Ofrecemos precios competitivos en nuestros más de 100 millones de productos de cualquier gama.",
    },
    {
      cover: (
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
          >
            <path
              fill="white"
              d="m11.005 2l7.298 2.28a1 1 0 0 1 .702.955V7h2a1 1 0 0 1 1 1v2h-13V8a1 1 0 0 1 1-1h7V5.97l-6-1.876l-6 1.876v7.404a4 4 0 0 0 1.558 3.169l.189.136l4.253 2.9L14.787 17h-4.782a1 1 0 0 1-1-1v-4h13v4a1 1 0 0 1-1 1l-3.22.001c-.387.51-.857.96-1.4 1.33L11.005 22l-5.38-3.668a6 6 0 0 1-2.62-4.958V5.235a1 1 0 0 1 .702-.954L11.005 2Z"
            />
          </svg>
        </span>
      ),
      title: "Pago Seguro",
      decs: "Ofrecemos precios competitivos en nuestros más de 100 millones de productos de cualquier gama.",
    },
    {
      cover: (
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
          >
            <path
              fill="white"
              d="M18 6h-2c0-2.21-1.79-4-4-4S8 3.79 8 6H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-8 4c0 .55-.45 1-1 1s-1-.45-1-1V8h2v2zm2-6c1.1 0 2 .9 2 2h-4c0-1.1.9-2 2-2zm4 6c0 .55-.45 1-1 1s-1-.45-1-1V8h2v2z"
            />
          </svg>
        </span>
      ),
      title: "Compra con confianza ",
      decs: "Ofrecemos precios competitivos en nuestros más de 100 millones de productos de cualquier gama.",
    },
    {
      cover: (
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 48 48"
          >
            <path
              fill="white"
              d="M44.7 11L36 19.6s-2.6 0-5.2-2.6s-2.6-5.2-2.6-5.2l8.7-8.7c-4.9-1.2-10.8.4-14.4 4c-5.4 5.4-.6 12.3-2 13.7C12.9 28.7 5.1 34.7 4.9 35c-2.3 2.3-2.4 6-.2 8.2c2.2 2.2 5.9 2.1 8.2-.2c.3-.3 6.7-8.4 14.2-15.9c1.4-1.4 8 3.7 13.6-1.8c3.5-3.6 5.2-9.4 4-14.3zM9.4 41.1c-1.4 0-2.5-1.1-2.5-2.5C6.9 37.1 8 36 9.4 36s2.5 1.1 2.5 2.5s-1.1 2.6-2.5 2.6z"
            />
          </svg>
        </span>
      ),
      title: "Soporte 24/7 ",
      decs: "Ofrecemos precios competitivos en nuestros más de 100 millones de productos de cualquier gama.",
    },
  ];
  return (
    <>
      <section className="   wrapper flex justify-center ">
        <div className="plus flex gap-20 mb-7">
          {data.map((val, index) => {
            return (
              <div className="product border shadow-2xl" key={index}>
                <div className="img icon-circle">
                  <i>{val.cover}</i>
                </div>
                <h3>{val.title}</h3>
                <p>{val.decs}</p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Wrapper;
