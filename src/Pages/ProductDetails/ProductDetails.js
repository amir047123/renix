import React, { useState } from "react";
import img1 from "../../Assets/images/Products/Bottle (1).png";
import ProductTable from "./ProductTable";
import ProductInfo from "./ProductInfo";

const ProductDetails = () => {
  const [addToCart, setAddToCart] = useState(false);
  const [activeTab, setActiveTab] = useState("tab1");

  const active = {
    border: "none",
    backgroundColor: "primary",
    textWeight: "700",
    color: "white",
  };
  const [count, setCount] = useState(1);
  const handleCountMinus = () => {
    if (count === 1) {
      setAddToCart(false);
    } else {
      setCount((prevCount) => prevCount - 1);
    }
  };
  return (
    <div className="w-3/5 mx-auto">
      <div className="grid grid-cols-2 gap-6">
        <div className=" border flex justify-center items-center  border-gray-300">
          <img src={img1} className=" w-72 h-50 p-4" alt="" />
        </div>
        <div className="m-3">
          <div className="shadow-lg p-7 ">
            <h1 className="text-3xl font-semibold uppercase tracking-widest">
              Mirapro 15mg tab
            </h1>{" "}
            <p>
              <span className="font-medium text-lg">Generic Name : </span>
              MIRTAZAPINE
            </p>
            <p>
              <span className="font-medium text-lg">Supplier Name : </span>
              SQUARE PHARMACEUTICALS LIMITED
            </p>
            <div className="flex items-center self-start gap-4 mt-3 ">
              {" "}
              <span className="py-4 text-3xl font-medium">BDT - 9</span>
            </div>
            {addToCart ? (
              <div>
                <div className=" border border-primary p-1  flex justify-evenly items-center">
                  <span
                    onClick={handleCountMinus}
                    className="text-4xl font-medium cursor-pointer"
                  >
                    -
                  </span>
                  <aside>
                    <input
                      className="lg:px-8 py-2 text-center lg:text-xl font-semibold border-none outline-primary bg-primary text-white"
                      type="text"
                      value={count}
                    />
                  </aside>
                  <span
                    onClick={() => setCount(Number(count) + 1)}
                    className="text-4xl font-medium cursor-pointer"
                  >
                    +
                  </span>
                </div>
              </div>
            ) : (
              <button
                onClick={() => setAddToCart(true)}
                className="border-2 w-full border-primary p-3 rounded-md text-primary text-md hover:text-white hover:bg-primary"
              >
                Add to Cart
              </button>
            )}
          </div>
        </div>
      </div>

      <div class="relative overflow-x-auto m-3 mt-8 mb-6">
        <div>
          <ul className="flex">
            <li
              onClick={() => setActiveTab("tab1")}
              className={
                activeTab === "tab1"
                  ? " md:float-left text-sm bg-primary py-2 text-white border-0 md:leading-10 text-center font-bold uppercase box-border mr-3  px-6"
                  : "md:float-left px-6 border border-lightTextColor py-2  mr-3 text-sm  md:leading-10 text-center uppercase box-border "
              }
            >
              Product Details
            </li>

            <li
              onClick={() => setActiveTab("tab2")}
              className={
                activeTab === "tab2"
                  ? "md:float-left text-sm bg-primary text-white border-0 md:leading-10 text-center font-bold uppercase box-border py-2 px-6"
                  : "md:float-left px-6 border border-lightTextColor text   mr-3 text-sm py-2 md:leading-10 text-center uppercase box-border "
              }
            >
              Product Information
            </li>
          </ul>
        </div>
      </div>
      <div className="border lg:mb-12 m-3 border-gray px-4 mt-8 ">
        {activeTab === "tab1" ? (
          <ProductTable></ProductTable>
        ) : (
          <ProductInfo></ProductInfo>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
