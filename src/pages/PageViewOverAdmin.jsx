import React from "react";

import MenuSuperAdmin from "../MenuSuperAmin/MenuSuperAdmin";
import DataTableMalls from "../Table/DataTableMalls";

function PageViewOverAdmin() {
  return (
    <>
      <aside class="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%] ">
        <MenuSuperAdmin />
      </aside>
      <div class="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
        <DataTableMalls />
      </div>
    </>
  );
}

export default PageViewOverAdmin;
