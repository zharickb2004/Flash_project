import React from "react";
import Header from "../common/header/Header";
import AllStore from "../AllStore/AllStore";

function PageAllStore() {
  return (
    <>
      <Header />
      <div className="flex justify-center">
        <AllStore />
      </div>
    </>
  );
}

export default PageAllStore;
