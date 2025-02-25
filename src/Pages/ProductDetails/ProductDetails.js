import { CircularProgress } from "@mui/material"; // Import MUI Circular Progress
import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import DynamicMetaTitle from "../../Components/DynamicMetaTitle";
import MyContext from "../../Utils/Context/MyContext";
import ProductInfo from "./ProductInfo";
import ProductTable from "./ProductTable";

const fetchProduct = async (id) => {
  const response = await fetch(
    `http://localhost:3001/api/v1/medicine/specific?fieldName=slug&&fieldValue=${id}`
  );
  const data = await response.json();
  return data.data[0];
};

const ProductDetails = () => {
  const { id } = useParams();
  const [addToCart, setAddToCart] = useState(false);
  const [activeTab, setActiveTab] = useState("tab1");
  const [quantity, setQuantity] = useState(1);
  const { refresh, setRefresh } = useContext(MyContext);

  // Fetch product data using TanStack Query
  const {
    data: product,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProduct(id),
    enabled: !!id,
  });

  // Handle Loading & Error States
  if (isLoading)
    return (
      <div className="flex justify-center items-center h-screen">
        <CircularProgress size={80} thickness={4} color="primary" />
      </div>
    );

  if (isError)
    return (
      <div className="text-center text-red-500 text-lg font-semibold">
        Something went wrong! Please try again later.
      </div>
    );

  const { description, genericName, img, name, price, supplierName, _id } =
    product || {};

  // Fetch order data from localStorage
  const order = JSON.parse(localStorage.getItem("order"))?.find(
    (item) => item._id === _id
  );

  const handleCountMinus = () => {
    if (order?.quantity === 1) {
      setAddToCart(false);
    } else {
      setQuantity((prevCount) => prevCount - 1);
    }
  };

  // Function to update localStorage for cart
  const addOrderInLocalStorage = () => {
    const existingOrder = JSON.parse(localStorage.getItem("order")) || [];
    const exist = existingOrder.find((item) => item._id === _id);

    if (exist) {
      exist.quantity += 1;
      localStorage.setItem(
        "order",
        JSON.stringify(
          existingOrder.map((item) => (item._id === _id ? exist : item))
        )
      );
    } else {
      localStorage.setItem(
        "order",
        JSON.stringify([...existingOrder, { ...product, quantity }])
      );
    }

    setRefresh(!refresh);
  };

  const handleQuantity = (action) => {
    const existingOrder = JSON.parse(localStorage.getItem("order")) || [];
    const exist = existingOrder.find((item) => item._id === _id);

    if (exist) {
      if (action === "odd" && exist.quantity > 1) {
        exist.quantity -= 1;
      } else if (action === "even") {
        exist.quantity += 1;
      }

      localStorage.setItem(
        "order",
        JSON.stringify(
          existingOrder.map((item) => (item._id === _id ? exist : item))
        )
      );
    }

    setRefresh(!refresh);
  };

  return (
    <>
      <DynamicMetaTitle
        title={product?.metaTitle}
        description={product?.metaDescription}
        metaImage={product?.metaImage}
        canonicalUrl={product?.canonicalUrl}
      />
      <div className="lg:w-3/5 md:w-10/12 mx-auto w-11/12">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6 mt-5 shadow-md p-5">
          <div className="flex justify-center items-center  border border-lightPrimary p-5">
            <img src={img} className="w-72 h-50" alt={name} />
          </div>
          <div className="">
            <div className="shadow-sm  border border-lightPrimary p-7">
              <h1 className="text-3xl font-semibold uppercase tracking-widest">
                {name}
              </h1>
              <p>{genericName}</p>
              <p>{supplierName}</p>

              <Link to="https://renixcare.com/">
                <button className="border-2 w-full border-primary p-3 rounded-md text-primary text-md hover:text-white hover:bg-primary">
                  Order Now{" "}
                </button>
              </Link>
              {/* {addToCart ? (
                <div className="border-primary p-1 flex justify-evenly items-center">
                  <span
                    onClick={() => {
                      handleQuantity("odd");
                      handleCountMinus();
                    }}
                    className="text-4xl font-medium cursor-pointer"
                  >
                    -
                  </span>
                  <aside>
                    <input
                      className="lg:px-8 py-2 w-52 text-center lg:text-xl font-semibold border-none outline-primary bg-primary text-white"
                      type="text"
                      value={order?.quantity || 1}
                      readOnly
                    />
                  </aside>
                  <span
                    onClick={() => {
                      handleQuantity("even");
                      setQuantity(quantity + 1);
                    }}
                    className="text-4xl font-medium cursor-pointer"
                  >
                    +
                  </span>
                </div>
              ) : (
                <button
                  onClick={() => {
                    addOrderInLocalStorage();
                    setAddToCart(true);
                  }}
                  className="border-2 w-full border-primary p-3 rounded-md text-primary text-md hover:text-white hover:bg-primary"
                >
                  Add to Cart
                </button>
              )} */}
            </div>
          </div>
        </div>

        <div className="relative overflow-x-auto m-3 mt-8 mb-6">
          <ul className="flex">
            <li
              onClick={() => setActiveTab("tab1")}
              className={
                activeTab === "tab1"
                  ? "md:float-left text-sm bg-primary py-2 text-white border-0 md:leading-10 text-center font-bold uppercase box-border mr-3 px-6"
                  : "md:float-left px-6 border border-lightTextColor py-2 mr-3 text-sm md:leading-10 text-center uppercase box-border"
              }
            >
              Product Details
            </li>
            <li
              onClick={() => setActiveTab("tab2")}
              className={
                activeTab === "tab2"
                  ? "md:float-left text-sm bg-primary text-white border-0 md:leading-10 text-center font-bold uppercase box-border py-2 px-6"
                  : "md:float-left px-6 border border-lightTextColor text mr-3 text-sm py-2 md:leading-10 text-center uppercase box-border"
              }
            >
              Product Information
            </li>
          </ul>
        </div>

        <div className="border lg:mb-12 m-3 border-gray px-4 mt-8">
          {activeTab === "tab1" ? (
            <ProductTable product={product} />
          ) : (
            <ProductInfo description={description?.replace(/<\/?p>/g, "")} />
          )}
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
