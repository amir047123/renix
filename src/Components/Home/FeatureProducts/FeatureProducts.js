import "./FeatureProducts.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { TbCurrencyTaka } from "react-icons/tb";
const FeatureProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const url = `http://localhost:5000/api/v1/medicine?size=${6}&page=${0}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data?.data);
      });
  }, []);
  console.log(products);
  return (
    <div className="lg:w-[90%] w-full mx-auto my-10 text-center ">
      <h3 className="bg-thirdLightPrimary w-36 mx-auto font ">F e a t u r e</h3>
      <h1 className="text-secondary font-semibold text-3xl mt-3">
        Feature Products
      </h1>
      <div className=" flex gap-6 flex-wrap mx-auto justify-center  mt-24">
        {products?.map((product) => (
          <Link
            to={`/products/${product?._id}`}
            className="w-80  px-8 py-4 shadow-md rounded-lg"
            key={product._id}
          >
            <div className="w-full  h-64 rounded-xl ">
              <div className="flex justify-between items-center">
                <span class="bg-primary self-end  text-white text-xs font-medium  px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                  sale !
                </span>
              </div>
              <img src={product.img} alt="" className="w-full mx-auto h-52 " />
              <p className="text-secondary my-2 font-medium text-xs float-right">
                Stock: {product.stock}
              </p>
            </div>
            <div className="text-left">
              <h1 className="text-secondary text-sm mt-2">
                {product.productName}
              </h1>
              <h1 className="text-secondary text-sm mt-2 ">
                Generic Name: {product.genericName}
              </h1>
              <h1 className="text-secondary text-sm mt-2">
                Strength: {product.strength}
              </h1>

              <div className="flex  items-center text-left  ">
                <span className="text-lg mt-2 mr-2">
                  <TbCurrencyTaka></TbCurrencyTaka>
                </span>
                <p className="text-lightPrimary text-lg mt-2">
                  {" "}
                  {product.price}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-10">
        <Link
          to="/products"
          className="border-2  border-primary p-3 rounded-md text-primary text-md hover:text-white hover:bg-primary"
        >
          View all
        </Link>
      </div>
    </div>
  );
};

export default FeatureProducts;
