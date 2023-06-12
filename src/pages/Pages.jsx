import React from "react";
import FlashDeals from "../components/flashDeals/FlashDeals";
import Discount from "../components/discount/Discount";
import Wrapper from "../components/wrapper/Wrapper";
import TopCate from "../components/top/TopCate";
import Home from "../components/MainPage/Home";
import Malls from "../components/Malls/Malls";
import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";

const Pages = () => {
  return (
    <>
      <Header />
      <Home />
      <Malls />
      <Discount />
      <TopCate />
      <FlashDeals />
      <Wrapper />
      <Footer />
    </>
  );
};

export default Pages;
