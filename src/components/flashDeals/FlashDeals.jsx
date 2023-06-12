import React from "react";
import { NavLink } from "react-router-dom";

import FlashCard from "./FlashCard";

import "./style.css";

const FlashDeals = () => {
  return (
    <>
      <section className="flash">
        <div className="container">
          <div className="heading d_flex mb-5">
            <div className="heading-left row  f_flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 32 32"
              >
                <path
                  fill="gray"
                  d="M11.61 29.92a1 1 0 0 1-.6-1.07L12.83 17H8a1 1 0 0 1-1-1.23l3-13A1 1 0 0 1 11 2h10a1 1 0 0 1 .78.37a1 1 0 0 1 .2.85L20.25 11H25a1 1 0 0 1 .9.56a1 1 0 0 1-.11 1l-13 17A1 1 0 0 1 12 30a1.09 1.09 0 0 1-.39-.08Z"
                />
              </svg>
              <h2>Productos</h2>
            </div>
            <NavLink to="/Offers/0/Te puede gustar">
              <div className="container-see">
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
            </NavLink>
          </div>
          <FlashCard />
        </div>
      </section>
    </>
  );
};

export default FlashDeals;
