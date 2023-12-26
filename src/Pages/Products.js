import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import Pagination from "../shared/Pagination/Pagination";
import Loading from "../shared/Loading";
import { faL } from "@fortawesome/free-solid-svg-icons";
import Card from "../Components/Card/Card";

const Products = () => {
  const [displayButton, setDisplayButton] = useState("");
  const [products, setProducts] = useState([]);
  // for pagination
  const [quantity, setQuantity] = useState(0);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(50);

  const [loading ,setLoading] = useState();

  useEffect(() => {
    
    const url = `http://renixserver.tripkori.com/api/v1/medicine?size=${size}&page=${page}`;

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

  return (
    <div className=" m-5 ">
    {/*
  Heads up! 👋

  Plugins:
    - @tailwindcss/forms
*/}

<header className="bg-gray-50 mb-5 shadow-md p-5">
  
    <div className="sm:flex sm:items-center sm:justify-between ">
      <div className="text-center sm:text-left">
        <h1 className="text-2xl font-bold text-gray-900 sm:text-2xl uppercase"> Our Unani Product</h1>

        <p className="mt-1.5 text-sm text-gray-500">Let's Explore our Latest product! 🎉</p>
      </div>

     
    </div>
 
</header>

      {loading ? (
        <Loading />
      ):(
        <>


          <div className=" shadow-md p-5  grid lg:grid-cols-4 md:grid-cols-2 gap-5 w-full">
        {products?.map((item) => (
         
          <Card key={item?._id} item={item}></Card>
         
        ))}
        </div>
       
        </>
      )}
    
    </div>
  );
};

export default Products;
