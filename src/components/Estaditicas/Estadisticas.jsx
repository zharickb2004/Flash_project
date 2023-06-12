import React, { useState, useEffect } from "react";

import DataTableCategory from "../../Table/DataTableCategory";
import MenuEmployed from "../MenuEmployed/MenuEmployed";
import { TodoGetApis } from "../../Apis/Apis";

function Estadisticas() {
  const [categorys, setCategorys] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await TodoGetApis.getCategoryStore();
      setCategorys(response.data.data);
    })();
  }, []);

  return (
    <>
      <h1>Mis Categorias</h1>
      <MenuEmployed />
      <div class="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
        <DataTableCategory data={categorys} />
      </div>
    </>
  );
}

export default Estadisticas;
