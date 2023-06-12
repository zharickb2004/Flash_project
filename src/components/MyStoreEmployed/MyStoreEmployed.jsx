import React from "react";

import MenuEmployed from "../MenuEmployed/MenuEmployed";
import SingleShop from "../SingleShop/SingleShop";

function MyStoreEmployed() {
  return (
    <>
      <MenuEmployed />

      <div class="ml-auto mb-6 lg:w-[100%] xl:w-[80%] 2xl:w-[85%]">
        <br />
        <SingleShop />
      </div>
    </>
  );
}

export default MyStoreEmployed;
