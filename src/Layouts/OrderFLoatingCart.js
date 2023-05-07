import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";

const OrderFLoatingCart = ({ setOpenCart }) => {
  return (
    <div className="w-1/2 h-full fixed z-50 top-[15vh] shadow-2xl  max-w-[550px] max-h-[600px] overflow-x-hidden tr right-0 bg-secondLightPrimary ">
      <div className="flex text-white justify-between items-center bg-primary p-2 ">
        <div className="flex justify-center items-center gap-2">
          <div className="rounded-full border border-white p-2">
            <FaShoppingCart className="text-lg"></FaShoppingCart>
          </div>
          <p className="font-semibold">0 Item</p>
        </div>

        <button onClick={() => setOpenCart(false)}>
          <ImCross></ImCross>
        </button>
      </div>
      <h1> ok</h1>
      <div className="absolute bottom-0 w-full ">
        <hr className="max-w-full " />
        <div className="py-3 px-2">
          <div className="mb-3">
            <div className="flex justify-between items-center">
              <p>Total Items</p>

              <p>5</p>
            </div>
            <div className="flex justify-between items-center">
              <p>Total Price</p>

              <p>0.00tk</p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            {" "}
            <button className="shadow-md w-1/2 py-2 px-4 bg-thirdLightPrimary text-white">
              <a href={"/checkout"}>Order Now</a>
            </button>
            <button className="shadow-md w-1/2 py-2 px-4 bg-secondary text-white">
              Clear Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderFLoatingCart;
