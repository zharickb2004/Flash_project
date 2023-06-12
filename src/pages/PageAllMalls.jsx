import React from "react";

import Header from "../common/header/Header";
import AllMalls from "../AllMalls/AllMalls";

function PageAllMalls() {
  return (
    <>
      <Header />

      <div className="flex justify-center">
        <AllMalls />
      </div>
    </>
  );
}

export default PageAllMalls;
