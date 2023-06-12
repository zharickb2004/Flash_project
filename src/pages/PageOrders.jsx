import React from 'react'
import MenuEmployed from '../components/MenuEmployed/MenuEmployed';
import Orders from '../components/Orders/Orders';

function PageOrders() {
  return (
    <div>
      <MenuEmployed />

      <div class="ml-auto mb-6 lg:w-[100%] xl:w-[80%] 2xl:w-[85%]">
        <br />
       <Orders/> 
        <div className="container-page-offers static inset-x-0 w-full"></div>
      </div>
    </div>
  );
}

export default PageOrders
