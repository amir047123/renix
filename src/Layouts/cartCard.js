import React, { useContext, useState } from "react";
import MyContext from "../Utils/Context/MyContext";
import { AiFillDelete } from "react-icons/ai";

const CartCard = ({ order }) => {
  const { _id } = order;
  const { refresh, setRefresh } = useContext(MyContext);
  const handleQuantity = (action) => {
    const existingOrder = JSON.parse(localStorage.getItem("order"));
    if (existingOrder) {
      const exist = existingOrder.find((item) => item._id === _id);
      if (exist) {
        const filterOrder = existingOrder.filter(
          (item) => item._id !== exist?._id
        );

        if (action === "odd") {
          if (exist?.quantity === 1) {
            localStorage.setItem("order", JSON.stringify([...filterOrder]));
          } else {
            exist.quantity = exist.quantity - 1;
            localStorage.setItem(
              "order",
              JSON.stringify([...filterOrder, exist])
            );
          }
        } else {
          exist.quantity = exist.quantity + 1;
          localStorage.setItem(
            "order",
            JSON.stringify([...filterOrder, exist])
          );
        }
      }
    }
    setRefresh(!refresh);
  };
  const handleCountMinus = () => {};
  return (
    <div className="border border-white rounded-lg grid grid-cols-12 justify-between items-center gap-2">
      <img
        className="col-span-3 rounded-lg w-[70%]"
        src="https://theproductmanager.b-cdn.net/wp-content/uploads/sites/4/2020/05/what-does-a-product-manager-do-featured-image-01-800x800.png"
        alt=""
      />
      <div className="text-xl font-semibold text-white col-span-3">
        <h4>Name there</h4>
        <h4>500</h4>
      </div>
      <div className="col-span-3 border border-white p-2 rounded-lg">
        <div className="  border-primary p-1  flex justify-evenly items-center">
          <span
            onClick={() => {
              handleQuantity("odd");
              handleCountMinus();
            }}
            className="text-4xl font-medium cursor-pointer"
          >
            -
          </span>
          <div className="p-2 text-center lg:text-xl font-semibold border-none outline-primary bg-primary text-white">
            {order?.quantity}
          </div>
          <span
            onClick={() => {
              handleQuantity("even");
            }}
            className="text-4xl font-medium cursor-pointer"
          >
            +
          </span>
        </div>
      </div>
      <div className="col-span-3 w-full flex justify-center items-center">
        <div className="w-fit p-2 rounded-full bg-red-200 cursor-pointer">
          <AiFillDelete className="text-2xl text-red-500" />
        </div>
      </div>
    </div>
  );
};

export default CartCard;
