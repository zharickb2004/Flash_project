import React from "react";

import SingleShop from "../components/SingleShop/SingleShop";
import CardOffer from "../components/CardOffer/CardOffer";
import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";

function PageSingleShop() {
  return (
    <>
      <Header />
      <div className="flash1">
        <SingleShop />

        <div className="pageOffersWith">
          <div className="container-page-offers">
            <CardOffer />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default PageSingleShop;
