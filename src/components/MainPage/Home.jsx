import React from "react";

import Categories from "./Categories";
import Slider from "./Slider";



const Home = () => {
  return (
    <>
      <section className="home">
        <div>
          <Slider />
        </div>
        <Categories />
      </section>
    </>
  );
};

export default Home;
