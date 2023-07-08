import React from "react";

export const OrdersData = () => {
  return (
    <div
      className="hidden
                    sm:grid 
                    grid-cols-1 
                    grid-rows-3 
                    col-span-1 
                    row-start-2 
                    row-span-full 
                    bg-indigo-50
                    p-4
                    drop-shadow-md	
                    border 
                    rounded-xl "
    >
      <div className="">FUTURE ORDERS</div>
      <div className="">LAST ORDERS</div>
      <div className="">COPUNS</div>
    </div>
  );
};
