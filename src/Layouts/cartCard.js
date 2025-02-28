import React, { useContext } from "react";
import MyContext from "../Utils/Context/MyContext";
import { AiFillDelete } from "react-icons/ai";

const CartCard = ({ order }) => {
  const { _id } = order;
  const { refresh, setRefresh } = useContext(MyContext);
  const handelDelete = () => {
    const items = JSON.parse(localStorage.getItem("order"));
    const findOrder = items.find((item) => item._id === _id);
    const filterOrder = items.filter((item) => item._id !== findOrder?._id);
    localStorage.setItem("order", JSON.stringify([...filterOrder]));
    setRefresh(!refresh);
  };

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
    <div className="border border-white rounded-lg grid grid-cols-12 justify-between items-center md:gap-2 gap-2 py-1 shadow">
      <img
        className="col-span-2 rounded-lg w-16 border border-white m-1 p-1"
        src={order?.img}
        alt=""
      />
      <div className="md:text-base text-[10px] font-semibold text-white col-span-4">
        <h4 className="whitespace-nowrap">{order?.genericName}</h4>
        <h4>{order?.price}</h4>
      </div>
      <div className="col-span-3 border border-white p-2 rounded-lg">
        <div className="  border-primary p-1  flex justify-evenly items-center">
          <span
            onClick={() => {
              handleQuantity("odd");
              handleCountMinus();
            }}
            className="text-2xl font-medium cursor-pointer"
          >
            -
          </span>
          <div className="p-2 text-center lg:text-base font-semibold border-none outline-primary bg-primary text-white">
            {order?.quantity}
          </div>
          <span
            onClick={() => {
              handleQuantity("even");
            }}
            className="text-2xl font-medium cursor-pointer"
          >
            +
          </span>
        </div>
      </div>
      <div className="col-span-3 w-full flex justify-center items-center">
        <div
          onClick={handelDelete}
          className="w-fit p-2 rounded-full bg-red-200 cursor-pointer"
        >
          <AiFillDelete className="text-2xl text-red-500" />
        </div>
      </div>
    </div>
  );
};

export default CartCard;
