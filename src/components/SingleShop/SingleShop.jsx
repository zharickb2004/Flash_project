import React, { useEffect, useState } from "react";

import { TodoGetApis } from "../../Apis/Apis";

function SingleShop() {
  const [store, setStore] = useState([]);
  const [products, setProducts] = useState([]);

  const money = new Intl.NumberFormat("en-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 2,
  });

  useEffect(() => {
    (async () => {
      const response = await TodoGetApis.GetStore();
      setStore(response.data.data);
      const responseStore = await TodoGetApis.GetProductsStore();
      setProducts(responseStore.data.rows);
    })();
  }, []);

  return (
    <>
      {store.length > 0 ? (
        store.map((item) => (
          <div className="container" key={item.id}>
            <div className="w-full h-[250px]">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThTMUVJivyk_eV4mfnXcTFD5DVSkpcR2hfCw&usqp=CAU"
                className="w-full h-full rounded-tl-lg rounded-tr-lg"
                alt=""
              />
            </div>
            <div className="flex flex-col items-center -mt-20">
              <img
                src={item.img_store}
                className="w-40 border-4 border-white rounded-full"
                alt={item.description_store}
              />
              <div className="flex items-center space-x-2 mt-2">
                <p className="text-2xl">{item.name_store}</p>
                <span className="bg-blue-500 rounded-full p-1" title="Verified">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-gray-100 h-2.5 w-2.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="4"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
              </div>

              <p className="text-gray-700 text-xl">{item.description_store}</p>
              <p className="text-gray-500 text-xl">
                {item.location_store}
              </p>
              <div></div>
            </div>
          </div>
        ))
      ) : (
        <h1>No hay información</h1>
      )}

      <div>
        {products.length > 0 ? (
          <div className="flex flex-wrap justify-center">
            {products.map((productItems) => (
              <div className=" flex  ">
                <div className="product border m-1  ">
                  <div className="">
                    <p className="disponible">
                      {productItems.availability_product === "available"
                        ? "Disponible"
                        : "No Disponible"}
                    </p>
                  </div>
                  <div className="flex justify-center items-center">
                    <img
                      className=" w-[200px] object-cover"
                      src={productItems.img_product}
                      alt=""
                    />
                  </div>
                  <div className="product-details p-4">
                    <div className="info">
                      <h3>{productItems.name_product}</h3>
                      <p>
                        {("" + productItems.amount_poduct).replace(
                          /(\d)(?=(\d\d\d)+(?!\d))/g,
                          "$1."
                        )}{" "}
                        Unidades
                      </p>
                    </div>
                    <p className="truncate">
                      {productItems.description_product}
                    </p>
                    <div className="price">
                      <h4 className="text-black font-bold">
                        {money.format(productItems.price_product)}{" "}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <h1>No hay produtos</h1>
        )}
      </div>
    </>
  );
}

export default SingleShop;
