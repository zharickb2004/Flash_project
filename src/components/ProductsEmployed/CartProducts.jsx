import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { TodoGetApis } from "../../Apis/Apis";

function CartProducts() {
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await TodoGetApis.GetProductsStore();
      setProducts(response.data.rows);
    })();
  }, []);

  return (
    <>
      {Products.map((e) => (
        <div className="box">
          <div className="product mtop">
            <div className="header-card">
              <span className="discount">% </span>
              <p className="disponible"></p>
            </div>
            <div className="img">
              <Link to="/CardProduct">
                <img src={e.img_product} alt="" />
              </Link>
            </div>
            <br />
            <div className="product-details">
              <div className="info">
                <p> Unidades: {e.amount_poduct}</p>
              </div>
              <p>{e.name_product}</p>
              <div className="price">
                <h4>{e.price_product}</h4>

                <Link to="/EditProduct">
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="26"
                      height="26"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="white"
                        d="m19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575t1.412.575l1.4 1.4q.575.575.6 1.388t-.55 1.387L19.3 8.925ZM17.85 10.4L7.25 21H3v-4.25l10.6-10.6l4.25 4.25Z"
                      />
                    </svg>
                  </button>
                </Link>
                <Link to="/DeleteProduct">
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="26"
                      height="26"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="white"
                        d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
                      />
                    </svg>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default CartProducts;
