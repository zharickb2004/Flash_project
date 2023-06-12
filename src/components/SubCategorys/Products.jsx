import React from "react";

import CartProducts from "../ProductsEmployed/CartProducts";
import MenuEmployed from "../MenuEmployed/MenuEmployed";

function Products() {
  return (
    <>
      <MenuEmployed />
      <div className="flash1">
        <div className="tittleOffers">
          <h1>CARTERAS</h1>
          <p>Bienvenido a las mejores ofertas de Tienda Fox.</p>
        </div>
        <div className="pageOffersWith">
          <div className="container-page-offers">
            <CartProducts />
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
