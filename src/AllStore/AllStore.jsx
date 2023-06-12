import React, { useEffect, useState } from "react";

import { TodoGetApis } from "../Apis/Apis";

function AllStore() {
  const [store, setStores] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await TodoGetApis.GetStores(0);
      setStores(response.data.data);
    })();
  }, []);

  return (
    <>
      <div>
        <div>
          <p className="text-3xl text-gray-600 ml-6 my-5"> Tiendas</p>
        </div>
        <div className="grid gap-6 grid-cols-7 ">
          {store.map((value) => {
            return (
              <div
                key={value.id_store}
                className=" w-[180px] flex justify-center  items-center"
                onClick={() => {
                  window.location.href = `/Offers/${value.id_store}/${value.name_store}`;
                }}
              >
                <div>
                  <div className="rounded-full overflow-hidden imgMalls object-cover mb-5 boxShadow">
                    <img src={value.img_store} alt="" />
                  </div>

                  <span className="flex justify-center mt-4 text-gray-700 text-lg">
                    {value.name_store}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default AllStore;
