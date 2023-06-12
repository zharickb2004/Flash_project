import React from "react";

import GraficHeaderEmployed from "../../Generator/GraficHeaderEmployed";
import GraficEmployed from "../../Generator/GraficEmployed";
import MenuEmployed from "./MenuEmployed";

function PageEmployed() {
  return (
    <>
      <MenuEmployed />
      <div className="div"></div>
      <div>
        <div
          id="main-content"
          class="h-full  bg-gray-50 relative p-2 lg:ml-64 "
        >
          <div className="">
            <GraficHeaderEmployed />
          </div>

          <div class="grid grid-cols-1 2xl:grid-cols-2 xl:gap-4 my-4">
            <div className="div">
              <GraficEmployed />
            </div>
          </div>
        </div>

        <script async defer src="https://buttons.github.io/buttons.js"></script>
        <script src="https://demo.themesberg.com/windster/app.bundle.js"></script>
      </div>
    </>
  );
}

export default PageEmployed;
