import React from "react";

import FormCreateStore from "../components/FormCreateStore/FormCreateStore";
import MenuAdmin from "../components/MenuAdmin/MenuAdmin";

function PageCreateStore() {
  return (
    <>
      <aside class="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
        <MenuAdmin />
      </aside>
      <FormCreateStore />
    </>
  );
}

export default PageCreateStore;
