import React from "react";

import CardOffer from "../components/CardOffer/CardOffer";
import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";

import "../components/CardOffer/cardOffer.css";

const PageNewProduct = () => {
  return (
    <>
      <Header />
      <div className="flash1">
        <div className="tittleOffers">
          <h1>Nuevos Productos</h1>
          <p>Bienvenido a nuestros nuevos productos.</p>
        </div>
        <div className="pageOffersWith">
          <div className="container-page-offers">
            <CardOffer />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PageNewProduct;
