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
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 256 256"><path fill="gray" d="M216 72h-35.08c.39-.33.79-.65 1.17-1A29.53 29.53 0 0 0 192 49.57A32.62 32.62 0 0 0 158.44 16A29.53 29.53 0 0 0 137 25.91a54.94 54.94 0 0 0-9 14.48a54.94 54.94 0 0 0-9-14.48A29.53 29.53 0 0 0 97.56 16A32.62 32.62 0 0 0 64 49.57A29.53 29.53 0 0 0 73.91 71c.38.33.78.65 1.17 1H40a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16v64a16 16 0 0 0 16 16h60a4 4 0 0 0 4-4v-92H40V88h80v32h16V88h80v32h-80v92a4 4 0 0 0 4 4h60a16 16 0 0 0 16-16v-64a16 16 0 0 0 16-16V88a16 16 0 0 0-16-16ZM84.51 59a13.69 13.69 0 0 1-4.5-10a16.62 16.62 0 0 1 16.58-17h.49a13.69 13.69 0 0 1 10 4.5c8.39 9.48 11.35 25.2 12.39 34.92C109.71 70.39 94 67.43 84.51 59Zm87 0c-9.49 8.4-25.24 11.36-35 12.4C137.7 60.89 141 45.5 149 36.51a13.69 13.69 0 0 1 10-4.5h.49A16.62 16.62 0 0 1 176 49.08a13.69 13.69 0 0 1-4.51 9.92Z"/></svg>
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
