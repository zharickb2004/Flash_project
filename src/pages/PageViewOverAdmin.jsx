import React, { useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import MenuSuperAdmin from "../MenuSuperAmin/MenuSuperAdmin";
import DataTableMalls from "../Table/DataTableMalls";

function PageViewOverAdmin() {
  const [load, setLoad] = useState(false);
  return (
    <>
    
    {load ?(
  <aside class="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%] ">
 <div className="div mt-20 flex flex-col">

  <Skeleton height={60}/>
  <div className="div  flex justify-center mb-5">

  <Skeleton width={120}/>
  </div>
  <Skeleton height={40}/>
  <Skeleton height={40}/>

 </div>
  </aside>
):(

      <MenuSuperAdmin />
)}
    
      <div class="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
        <DataTableMalls />
      </div>
    </>
  );
}

export default PageViewOverAdmin;
