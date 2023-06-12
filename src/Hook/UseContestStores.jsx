import React, { createContext, useContext, useState } from "react";
import { TodoGetApis } from "../Apis/Apis";

const storesProduct = createContext();

export const useContextProduct = () => useContext(storesProduct);

export const UseContestStores = ({ children }) => {
  const [productCrad, setproductCard] = useState([]);

  const getProductCard = async (id) => {
    try {
      const response = await TodoGetApis.GetProductCustomerStore(id);
      setproductCard(response.data.data);
    } catch (error) {
      
    }
  };

  return <div>UseContestStores</div>;
};
