import React from "react";

import TopCart from "./TopCart";

import "../../App.css";
import "./style.css";

const TopCate = () => {
  return (
    <>
      <section className="TopCate background bg-white">
        <div className="container">
          <div className="heading d_flex">
            <div className="heading-left row flex items-center f_flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
              >
                <path
                  fill="gray"
                  d="M20 4H4v2h16V4zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6h1zm-9 4H6v-4h6v4z"
                />
              </svg>
              <h2>Tiendas Oficiales</h2>
            </div>
            <div
              className="container-see cursor-pointer"
              onClick={() => {
                window.location.href = "/AllStores";
              }}
            >
              <span>Ver Todas </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M11.7 15.3q-.475.475-1.087.213T10 14.575v-5.15q0-.675.613-.938T11.7 8.7l2.6 2.6q.15.15.225.325T14.6 12q0 .2-.075.375t-.225.325l-2.6 2.6Z"
                />
              </svg>
            </div>
          </div>
          <div className="flex z-auto  stoeeee">
            <TopCart />
          </div>
        </div>
      </section>
    </>
  );
};

export default TopCate;
