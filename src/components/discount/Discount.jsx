import { NavLink } from "react-router-dom";
import React from "react";

import DCard from "./Dcard";

import "../flashDeals/style.css";

const Discount = () => {
  return (
    <>
      <section className="flash bg-white ">
        <div className="container">
          <div className="heading d_flex mb-5">
            <div className="heading-left row  f_flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
              >
                <path
                  fill="gray"
                  fillRule="evenodd"
                  d="M9.765 2.998a3 3 0 0 1 4.47 0l.7.782a1 1 0 0 0 .801.332l1.05-.058a3 3 0 0 1 3.16 3.16l-.058 1.05a1 1 0 0 0 .332.8l.783.7a3 3 0 0 1 0 4.471l-.783.7a1 1 0 0 0-.332.801l.058 1.05a3 3 0 0 1-3.16 3.16l-1.05-.058a1 1 0 0 0-.8.332l-.7.783a3 3 0 0 1-4.471 0l-.7-.783a1 1 0 0 0-.801-.332l-1.05.058a3 3 0 0 1-3.16-3.16l.058-1.05a1 1 0 0 0-.332-.8l-.782-.7a3 3 0 0 1 0-4.471l.782-.7a1 1 0 0 0 .332-.801l-.058-1.05a3 3 0 0 1 3.16-3.16l1.05.058a1 1 0 0 0 .8-.332l.7-.782Zm5.942 5.295a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414l6-6a1 1 0 0 1 1.414 0ZM9.5 8A1.5 1.5 0 0 0 8 9.5v.01a1.5 1.5 0 0 0 1.5 1.5h.01a1.5 1.5 0 0 0 1.5-1.5V9.5A1.5 1.5 0 0 0 9.51 8H9.5Zm5 5a1.5 1.5 0 0 0-1.5 1.5v.01a1.5 1.5 0 0 0 1.5 1.5h.01a1.5 1.5 0 0 0 1.5-1.5v-.01a1.5 1.5 0 0 0-1.5-1.5h-.01Z"
                  clipRule="evenodd"
                />
              </svg>
              <h2>Grandes Descuentos</h2>
            </div>
            <NavLink to="/DiscountCard">
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
          <DCard />
        </div>
      </section>
    </>
  );
};

export default Discount;
