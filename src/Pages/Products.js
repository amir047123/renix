import React, { useState } from "react";
import img1 from "../Assets/images/sliderImages/p1.png";
import img2 from "../Assets/images/sliderImages/p2.png";
import img3 from "../Assets/images/sliderImages/p3.png";
import img4 from "../Assets/images/sliderImages/p4.png";
import img5 from "../Assets/images/sliderImages/p5.png";
import img6 from "../Assets/images/sliderImages/p6.png";
import { Link } from "react-router-dom";


// function product ({id,name,price,image,addToCart}){

//    const [quantity,setQuantity]= useState(1);

//   const handleAddTocart =()=>{
//     // addCart function passed in as a prop
//     addToCart (id,quantity);

//     const handleQuantityChange = (change)=> {
 
//       // change the quantity of the product based on the button click
    
//       setQuantity(prevQuantityChange=> prevQuantity + change);
    
    
//     };
    
//   };
 

// };



const Products = () => {
  const [displayButton, setDisplayButton] = useState("");


  
  const products = [
    {
      _id: 1,
      productName: "Nature Hazmina Plus",
      genericName: " MIRTAZAPINE",
      strength: "15 MG",
      stock: "14",
      price: "800",
      image: `${img1}`,
    },
    {
      _id: 2,
      productName: "Nature Hazmina Plus",
      genericName: " MIRTAZAPINE",
      strength: "15 MG",
      stock: "13",
      price: "600",
      image: `${img2}`,
    },
    {
      _id: 3,
      productName: "Karkuma Superfood",
      genericName: " MIRTAZAPINE",
      strength: "15 MG",
      stock: "12",
      price: "500",
      image: `${img3}`,
    },
    {
      _id: 4,
      productName: "Nature Hazmina Plus",
      genericName: " MIRTAZAPINE",
      strength: "15 MG",
      stock: "12",
      price: "700",
      image: `${img4}`,
    },
    {
      _id: 5,
      productName: "Nature Hazmina Plus",
      genericName: " MIRTAZAPINE",
      strength: "15 MG",
      stock: "15",

      price: "600",
      image: `${img5}`,
    },
    {
      _id: 6,
      productName: "Nature Hazmina Plus",
      genericName: " MIRTAZAPINE",
      strength: "15 MG",
      stock: "11",
      price: "600",
      image: `${img6}`,
    },
  ];
  return (
    <div className="md:px-[103px]">
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-1">
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
        </div>
        <div class="col-span-3">
          <div className=" flex gap-6 flex-wrap mx-auto justify-center ">
            {products.map((product) => (
              <Link to={"/products/details"}>
                <div
                  className="relative w-full"
                  onMouseEnter={() => setDisplayButton(product._id)}
                  onMouseLeave={() => setDisplayButton("")}
                >
                  <div
                    className="w-80  px-8 py-4 shadow-md rounded-lg"
                    key={product._id}
                  >
                    <div className="w-full  h-64 rounded-xl ">
                      <div className="flex justify-between items-center ">
                        <span class="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
                          Sold out
                        </span>
                        <span class="bg-green-100 self-end  text-green-800 text-xs font-medium  px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                          sale !
                        </span>
                      </div>
                      <img
                        src={product.image}
                        alt=""
                        className="w-44 mx-auto h-52 "
                      />
                      <p className="text-lightPrimary my-2 font-medium text-xs float-right">
                        Stock: {product.stock}
                      </p>
                    </div>
                    <div>
                      <h1 className="text-secondary text-sm mt-2">
                        {product.productName}
                      </h1>
                      <h1 className="text-secondary text-sm mt-2">
                        Generic Name: {product.genericName}
                      </h1>
                      <h1 className="text-secondary text-sm mt-2">
                        Strength: {product.strength}
                      </h1>
                      <p className="text-lightPrimary text-sm mt-2">
                        BDT {product.price}
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
        </div>
      </div>
    </div>
  );
};

export default Products;