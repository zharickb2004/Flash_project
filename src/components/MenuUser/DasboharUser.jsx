import React from "react";

import FormPorfileUser from "./FormPorfileUser";
import Header from "../../common/header/Header";
import MenuUserF from "./MenuUserF";

export default function DasboharUser() {
  return (
    <>
      <div className="g">
      <Header />
      <div className="div mt-10  ">
        <MenuUserF />
        <div className="div bg-red-200">
        <FormPorfileUser />
        </div>
        </div>
      </div>
    </>
  );
}
