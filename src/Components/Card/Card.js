import React, { useState } from "react";
import { Link } from "react-router-dom";

const Card = ({ item }) => {


  return (
    <Link  to={`/products/${item?._id}`}>
    <div className="  " >
              <div className="m-4 w-50 rounded-xl border-2 border-whiteSmoke ">
                <h2 className="bg-primary w-14 text-left text-xs pl-1 pt-1 pb-1  text-white mt-3 whitespace-nowrap">
                  {item?.discount?item?.discount:0}% Off
                </h2>
                <img
                  src={item.img}
                  alt=""
                  className="w-[200px] mx-auto  h-auto mt-7"
                />
                <div className="pl-4 pb-2">
                  <h1 className="text-secondary text-left   text-lg mt-2">
                    {item.name}
                  </h1>
                  <p className="text-left text-blue-gray-500">
                    {item?.strength}
                  </p>

                  <p className="text-left text-blue-gray-500">
                    {item?.supplierName}
                  </p>

                  <Link to={`/products/${item?._id}`}>
                    <div class="flex items-center justify-between pr-5">
                      <span class="font-bold text-lg">৳ {item.price}</span>
                      <button class="bg-primary  text-white font-bold py-2 px-4 rounded">
                        Buy Now
                      </button>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            
    </Link> 
  );
};

export default Card