import React, { useState, useContext, createContext } from "react";
import { TodoGetApis } from "../Apis/Apis";

const shopCreateContext = createContext();
export const useContextShopCar = () => useContext(shopCreateContext);

export const UseContextShop = ({ children }) => {
  const [addCard, setAddCard] = useState([]);

  const getProductCar = async () => {
    try {
      const response = await TodoGetApis.GetCar();
      setAddCard(response.data.data);
      return response;
    } catch (error) {
      return error;
    }
  };

  const postProductCar = async (data) => {
    try {
      const response = await TodoGetApis.AddCarShop(data);
      setAddCard(response.data.data);

      return response;
    } catch (error) {
      return error;
    }
  };

  const deleteProductCar = async (id) => {
    try {
      const response = await TodoGetApis.DeleteProductCar(id);
      setAddCard(addCard.filter((i) => i.id_product !== id));
      return response;
    } catch (error) {
      return error;
    }
  };

  const updateProductCar = async (id, data, datas) => {
    try {
      const response = await TodoGetApis.UpdatePraductCar(id, data);
      return response;
    } catch (error) {
      return error;
    }
  };

  return (
    <shopCreateContext.Provider
      value={{
        postProductCar,
        addCard,
        getProductCar,
        deleteProductCar,
        updateProductCar,
      }}
    >
      {children}
    </shopCreateContext.Provider>
  );
};
