import React from "react";

import FormPorfileUser from "./FormPorfileUser";
import Header from "../../common/header/Header";
import MenuUserF from "./MenuUserF";

export default function DasboharUser() {
  return (
    <>
      <Header />
      <div className="g">
        <MenuUserF />
        <FormPorfileUser />
      </div>
    </>
  );
}
