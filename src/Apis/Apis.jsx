import axios from "axios";

// let urlServerAuth = "https://flash-backend.onrender.com/authUser";
let urlServerAuth = "http://localhost:3105/authUser";
let urlServerStores = "http://localhost:3105/stores";
let urlServerCategory = "http://localhost:3105/category";
let urlServerProducts = "http://localhost:3105/products";
let urlServerCard = "http://localhost:3105/card";
let urlServerUser = "http://localhost:3105/user";
let urlServerBuy = "http://localhost:3105/buy";
let urlServerPayment = "http://localhost:3105/payment";

let token = localStorage.getItem("token");

export const TodoGetApis = {
  SingUp: async (data) =>
    await axios.post(
      `${urlServerAuth}/signUpAdmin`,
      { data },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    ),

  UpdatePraductCar: async (id, data) =>
    await axios.put(
      `${urlServerCard}/updateCard/${id}`,
      { data },
      {
        headers: {
          token,
        },
      }
    ),

  DeleteProductCar: async (id) =>
    await axios.delete(`${urlServerCard}/deleteCard/${id}`, {
      headers: {
        token,
      },
    }),
  // CreateProduct: async(data) => await axios.post(`${urlServer}/CreateProduct`,{data})
  SingIn: async (data) =>
    await axios.post(`${urlServerAuth}/signInUser`, { data }),

  RecoverPasword: async (data) =>
    await axios.put(`${urlServerAuth}/recoverPassword`, { data }),

  NewPassword: async (data) =>
    await axios.put(`${urlServerAuth}/updatePassword`, { data }),

  CodeRecoverPassword: async (data) =>
    await axios.put(`${urlServerAuth}/newPassword`, { data }),

  AddCarShop: async (data) =>
    await axios.post(
      `${urlServerCard}/addCard`,
      { data },
      {
        headers: {
          token,
        },
      }
    ),

  Updatecar: async (data, id) => {
    await axios.put(
      `${urlServerCard}/updateCard/${id}`,
      { data },
      {
        headers: {
          token,
        },
      }
    );
  },

  DeleteCar: async (id) => {
    await axios.delete(`${urlServerCard}/deleteCard/${id}`, {
      headers: {
        token,
      },
    });
  },

  GetCar: async () => {
    try {
      const response = await axios.get(`${urlServerCard}/getCard`, {
        headers: {
          token,
        },
      });
      return response;
    } catch (error) {
      localStorage.removeItem("token");
      localStorage.removeItem("rol");
    }
  },

  allDelete: async () => {
    const response = await axios.delete(`${urlServerCard}/allDelete`, {
      headers: {
        token,
      },
    });
    return response;
  },

  GetAccountCustomer: async () =>
    await axios.get(`${urlServerUser}/gatDataCustomer`, {
      headers: {
        token,
      },
    }),

  UpdateCustomer: async (data) =>
    await axios.put(
      `${urlServerUser}/updateCustomer`,
      { data },
      {
        headers: {
          token,
          "Content-Type": "multipart/form-data",
        },
      }
    ),

  GetAccountAdmin: async () =>
    await axios.get(`${urlServerUser}/gatDataAccount`, {
      headers: {
        token: `${token}`,
      },
    }),

  UpdateAdmin: async (data) =>
    await axios.put(
      `${urlServerUser}/updateData`,
      { data },
      {
        headers: {
          "Content-Type": "multipart/form-data",
          token,
        },
      }
    ),

  ValidateToken: async (data) =>
    await axios.post(
      `${urlServerAuth}/validateToken`,
      { data },
      {
        headers: {
          token,
        },
      }
    ),

  CreateStore: async (data) =>
    await axios.post(
      `${urlServerStores}/addStore`,
      { data },
      {
        headers: {
          "Content-Type": "application/json",
          token: `${token}`,
        },
      }
    ),

  GetStores: async (limit) =>
    await axios.get(`${urlServerStores}/consultationStore/${limit}`),

  GetMalls: async (limit) =>
    await axios.get(`${urlServerUser}/getSmall/${limit}`),

  getStoresAdmin: async () =>
    await axios.get(`${urlServerStores}/getStoreAdmin`, {
      headers: {
        "Content-Type": "application/json",
        token: `${token}`,
      },
    }),
  getStoresHome: async () =>
    await axios.get(`${urlServerStores}/consultationStore`),

  GetStore: async () =>
    await axios.get(`${urlServerStores}/getDataStore`, {
      headers: {
        token,
      },
    }),
  UpdateStore: async (data) =>
    await axios.put(
      `${urlServerStores}/updateStore`,
      { data },
      {
        headers: {
          "Content-Type": "multipart/form-data",
          token,
        },
      }
    ),

  DeleteStore: async (code) =>
    await axios.delete(`${urlServerStores}/deleteStore/${code}`, {
      headers: {
        "Content-Type": "application/json",
        token: `${token}`,
      },
    }),

  GetStoresMall: async (code, idStore) =>
    await axios.get(`${urlServerStores}/consultationStore/${code}/${idStore}`),

  CreateCustomer: async (data) =>
    await axios.post(`${urlServerAuth}/signUpCustomer`, { data }),

  CreateCategory: async (data) =>
    await axios.post(
      `${urlServerCategory}/addCategory`,
      { data },
      {
        headers: {
          "Content-Type": "multipart/form-data",
          token: `${token}`,
        },
      }
    ),
  UpdateCategory: async (data, code) => {
    await axios.put(
      `${urlServerCategory}/updateCategory/${code}`,
      { data },
      {
        headers: {
          "Content-Type": "application/json",
          token: `${token}`,
        },
      }
    );
  },

  DeleteCategory: async (code) =>
    await axios.delete(`${urlServerCategory}/deleteCategory/${code}`, {
      headers: {
        "Content-Type": "application/json",
        token: `${token}`,
      },
    }),

  getCategoryStore: async () =>
    await axios.get(`${urlServerCategory}/getCategoryStore`, {
      headers: {
        "Content-Type": "application/json",
        token: `${token}`,
      },
    }),

  GetCategoryStore: async () =>
    await axios.get(`${urlServerCategory}/getCategoriesStore`, {
      headers: {
        token: `${token}`,
      },
    }),

  getCategory: async () =>
    await axios.get(`${urlServerCategory}/getCategories`),

  // APIS PRODUCTS EMPLOYED FLASH

  CreateProduct: async (data) =>
    await axios.post(
      `${urlServerProducts}/addProducts`,
      { data },
      {
        headers: {
          token: `${token}`,
          "Content-Type": "multipart/form-data",

          // "Content-Type": "application/json",
        },
      }
    ),

  GetProductDate: async () =>
    await axios.get(`${urlServerProducts}/getProductDate`),

  UpdateProduct: async (data, id) =>
    await axios.put(
      `${urlServerProducts}/updateProducts/${id}`,
      { data },
      {
        headers: {
          token,
        },
      }
    ),

  DeleteProduct: async (code) =>
    await axios.delete(`${urlServerProducts}/deleteProducts/${code}`, {
      headers: {
        token: `${token}`,
      },
    }),

  GetProduct: async (limit, code) =>
    await axios.get(
      `${urlServerProducts}/productsConsultation/${limit}/${code}`
    ),
  GetProductCategory: async (code) =>
    await axios.get(`${urlServerProducts}/getProductCategory/${code}`),

  GetProductsStore: async () =>
    await axios.get(`${urlServerProducts}/getProductsStore`, {
      headers: {
        token: `${token}`,
      },
    }),

  GetProductBig: async (code) =>
    await axios.get(`${urlServerProducts}/getProductOne/${code}`),

  GetProductDiscount: async () =>
    await axios.get(`${urlServerProducts}/getProductDiscount`),

  GetProductsStoresMall: async (code, idStore) =>
    await axios.get(`${urlServerProducts}/getProductMall/${code}/${idStore}`),

  GetProductCustomerStore: async (code) =>
    await axios.get(`${urlServerProducts}/getProductStoreCustomer/${code}`),

  PostBuy: async (data, idProduct, price) => {
    await axios.post(
      `${urlServerBuy}/buy/${idProduct}/${price}`,
      { data },
      {
        headers: {
          token,
        },
      }
    );
  },

  GetBuy: async () =>
    await axios.get(`${urlServerBuy}/getBuy`, {
      headers: {
        token,
      },
    }),

  BuyStore: async () =>
    await axios.get(`${urlServerBuy}/buyStore`, {
      headers: {
        token,
      },
    }),

  BuyCustumer: async () =>
    await axios.get(`${urlServerBuy}/buyCustomer`, {
      headers: {
        token,
      },
    }),

  GetStoreGrafic: async () =>
    await axios.get(`${urlServerBuy}/buyStoreGrafic`, {
      headers: {
        token,
      },
    }),
  GetEmployee: async () =>
    await axios.get(`${urlServerUser}/getEmployee`, {
      headers: {
        token,
      },
    }),
  GetOrder: async (code, x) =>
    await axios.get(`${urlServerStores}/getBuysStore/${code}/${x}`, {
      headers: {
        token,
      },
    }),
  checkBuy: async (code) =>
    await axios.put(`${urlServerStores}/updateCheck/${code}`, {
      headers: {
        token,
      },
    }),
  GetBuysCustomer: async () =>
    await axios.get(`${urlServerUser}/getBuysCustomer`, {
      headers: {
        token,
      },
    }),

  CreateSessionBuy: async (data, price) => {
    const response = await axios.post(
      `${urlServerPayment}/paymentCart/${price}`,
      { data },
      {
        headers: {
          token,
        },
      }
    );
    const { url } = response.data;
    window.location.href = url;
  },

  CreateSessionBuyDirect: async (data, id) => {
    const response = await axios.post(
      `${urlServerPayment}/paymentBuy/${id}`,
      { data },
      {
        headers: {
          token,
        },
      }
    );
    const { url } = response.data;
    window.location.href = url;
  },

  buys: async () => {
   const response = await axios.get(`${urlServerBuy}/buysI`, {
      headers: {
        token,
      },
    });
    return response.data;
  },
};
