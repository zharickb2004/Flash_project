import { useParams } from "react-router-dom";
import React from "react";

import CardOffer from "../components/CardOffer/CardOffer";
import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";

import "../components/CardOffer/cardOffer.css";

function PageOffer() {
  const { name } = useParams();

  return (
    <>
      <Header />
      <div className="flash1">
        <div className="tittleOffers">
          <h3 className=" ml-[6rem] text-black text-3xl mb-3">{name}</h3>
          <h1 className="text-gray-600 text-2xl">Nuestros Productos</h1>
        </div>
        <div className="pageOffersWith1">
          <CardOffer />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default PageOffer;
