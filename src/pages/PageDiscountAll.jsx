import React from "react";

import DiscountCard from "../components/DiscountCard/DiscountCard";
import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";

function PageDiscountAll() {
  return (
    <>
      <Header />
      <div className="flash1">
        <div className="tittleOffers">
          <h1>Grandes Descuentos</h1>
        </div>
        <div className="pageOffersWith1">
          <DiscountCard />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default PageDiscountAll;
