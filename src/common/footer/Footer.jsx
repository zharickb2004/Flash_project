import React from "react";

import "./style.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container grid2 text-white ">
          <div className="box ">
            <h1 className=" text-white ">Flash</h1>
            <p className=" text-white ">
              {" "}
              Una plataforma web que te ofrece miles de ofertas y servicios de
              los mejores locales ubicados en los centros comerciales de tu
              ciudad.
            </p>
          </div>
          <div className="box flex items-center justify-center">
            <ul>
              <li>Sena Galan - Centro de Comercio y Turismo</li>
              <li>Email: 2022.flash.sale@gmail.com</li>
              <li>Telefono: +1 1123 456 780</li>
            </ul>
          </div>
          <div className="box flex items-center justify-center">
            <ul>
              <li>Zharick Bautista</li>
              <li>Pedro Bermudez</li>
              <li>Tatiana Barrera</li>
            </ul>
          </div>

          <div className="box">
            <ul>
              <li>&copy; FLASH 2023</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
