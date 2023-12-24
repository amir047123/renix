import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import Pagination from "../shared/Pagination/Pagination";
import Loading from "../shared/Loading";
import { faL } from "@fortawesome/free-solid-svg-icons";

const Products = () => {
  const [displayButton, setDisplayButton] = useState("");
  const [products, setProducts] = useState([]);
  // for pagination
  const [quantity, setQuantity] = useState(0);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(50);

  const [loading ,setLoading] = useState();

  useEffect(() => {
    
    const url = `http://localhost:5000/api/v1/medicine?size=${size}&page=${page}`;

    setLoading(true); 

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data?.data);
        setQuantity(data?.total);
        setLoading(false); 
      });
  }, [size, page]);

  // const { description, genericName, img, name, price, supplierName } = products;
  return (
    <div className="md:px-[103px]">
      <h1 className=" text-2xl text-center text-primary p-5 font-bold ">
        Our Product
      </h1>

      {loading ? (
        <Loading />
      ):(
        <>
          <div>
        {/* <div className="col-span-1 lg:block hidden">
          <div className="  border border-blue-gray-300 p-11">
            <h1 className="text-2xl font-semibold">Products Categories</h1>
            <div className="mt-8">
              <div className="flex items-center mt-4 mb-8">
                <input type="checkbox" className="w-5 h-5 mr-5" />
                <label>All Medicine</label>
              </div>
              <div className="flex items-center mt-4 mb-8">
                <input type="checkbox" className="w-5 h-5 mr-5" />
                <label>Organic Medicine</label>
              </div>
              <div className="flex items-center mt-4 mb-8">
                <input type="checkbox" className="w-5 h-5 mr-5" />
                <label>Inorganic Medicine</label>
              </div>
            </div>
          </div>
        </div> */}

        <div class="lg:col-span-4 pb-5">
          <div className=" md:grid md:grid-cols-2 md:gap-5 sm:grid sm:grid-cols-1 sm:gap-5 lg:flex lg:flex-wrap  lg:gap-5 px-10 justify-center ">
            {/* single medicine card */}
            {products?.map((product) => (
              <Link key={product?._id} to={`/products/${product?._id}`}>
                <div
                  className="relative w-full"
                  onMouseEnter={() => setDisplayButton(product?._id)}
                  onMouseLeave={() => setDisplayButton("")}
                >
                  <div
                    className="w-80  px-8 py-4 shadow-md rounded-lg"
                    key={product?._id}
                  >
                    <div className="w-full  h-64 rounded-xl ">
                      <div className="flex justify-between items-center ">
                        {/* <span class="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
                          Sold out
                        </span> */}
                        <span class="bg-green-100 self-end  text-green-800 text-xs font-medium  px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                          sale !
                        </span>
                      </div>
                      <img
                        src={product?.img}
                        alt=""
                        className="w-full mx-auto h-52 "
                      />
                      <p className="text-lightPrimary my-2 font-medium text-xs float-right">
                        Stock: {product?.stock}
                      </p>
                    </div>
                    <div>
                      <h1 className="text-secondary text-sm mt-2">
                        {product?.name}
                      </h1>
                      <h1 className="text-secondary text-sm mt-2">
                        Generic Name: {product?.genericName}
                      </h1>
                      <h1 className="text-secondary text-sm mt-2">
                        Strength: {product?.strength}
                      </h1>
                      <p className="text-lightPrimary text-sm mt-2">
                        BDT {product?.price}
                      </p>
                    </div>
                  </div>
                  <div className="w-full">
                    {displayButton === product?._id && (
                      <button
                        className="bg-primary 
                       opacity-100 w-full
                        py-2  text-center top-1/2 text-white absolute"
                      >
                        Add to cart
                      </button>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
          {/* pagination */}
          <Pagination
            quantity={quantity}
            page={page}
            setPage={setPage}
            size={size}
            setSize={setSize}
          />
        </div>
      </div>
        
        </>
      )}
    
    </div>
  );
};

export default Products;
