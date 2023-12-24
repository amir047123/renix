import React, { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { TbCurrencyTaka } from "react-icons/tb";
import { useContext } from "react";
import MyContext from "../Utils/Context/MyContext";
import CartCard from "./cartCard";
import { Link } from "react-router-dom";

const OrderFLoatingCart = ({ setOpenCart }) => {
  const [order, setOrder] = useState([]);
  const [subTotal, setSubTotal] = useState(0);
  const { refresh, setRefresh } = useContext(MyContext);
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("order"));
    setOrder(items);
    const totalPrice = items?.reduce((acc, cartItem) => {
      return acc + cartItem.price * cartItem.quantity;
    }, 0);
    setSubTotal(totalPrice);
  }, [refresh]);
  const handelClear = () => {
    localStorage.removeItem("order");
    setRefresh(!refresh);
  };
  return (
    <div className="md:w-1/2 w-10/12 h-full fixed z-50 top-[15vh] shadow-2xl  max-w-[550px] max-h-[400px] overflow-x-hidden tr right-0 bg-secondLightPrimary">
      <div className="flex text-white justify-between items-center bg-primary p-2 ">
        <div className="flex justify-center items-center gap-2">
          <div className="rounded-full border border-white p-2">
            <FaShoppingCart className="text-lg"></FaShoppingCart>
          </div>
          <p className="font-semibold">
            {order?.length ? order.length : 0} Item
          </p>
        </div>

        <button onClick={() => setOpenCart(false)}>
          <ImCross></ImCross>
        </button>
      </div>
      <div className="p-3 space-y-2">
        {order?.map((item) => (
          <CartCard order={item} />
        ))}
      </div>
      <div className=" w-full mt-10">
        <hr className="max-w-full " />
        <div className="py-3 px-2">
          <div className="mb-3">
            <div className="flex justify-between items-center">
              <p>Total Items</p>

              <p>{order?.length}</p>
            </div>
            <div className="flex justify-between items-center">
              <p>Total Price</p>
              <div className="flex gap-2">
                {subTotal}
                <TbCurrencyTaka> </TbCurrencyTaka>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center  ">
            {" "}
            <Link
              to={"/checkout"}
              className="shadow-md w-1/2 py-2 px-4 bg-thirdLightPrimary text-white flex justify-center"
            >
              Order Now
            </Link>
            <button
              onClick={handelClear}
              className="shadow-md w-1/2 py-2 px-4 bg-secondary text-white"
            >
              Clear Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderFLoatingCart;
