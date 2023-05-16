import React from 'react'
import img1 from "../../../Assets/images/sliderImages/p1.png";
import img2 from "../../../Assets/images/sliderImages/p2.png";
import img3 from "../../../Assets/images/sliderImages/p3.png";
import img4 from "../../../Assets/images/sliderImages/p4.png";
import img5 from "../../../Assets/images/sliderImages/p5.png";
import img6 from "../../../Assets/images/sliderImages/p6.png";
import './FeatureProducts.css'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import { TbCurrencyTaka } from "react-icons/tb"


const FeatureProducts = () => {
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

        <Link to='/products/details'>  <div className='lg:w-[90%] w-full mx-auto my-10 text-center '>

            <h3 className='bg-thirdLightPrimary w-36 mx-auto font '>F e a t u r e</h3>
            <h1 className='text-secondary font-semibold text-3xl mt-3'>Feature Products</h1>
            <div className=' flex gap-6 flex-wrap mx-auto justify-center  mt-24'>
                {
                    products.map((product) => (


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


                                <div className="flex  items-center  justify-center">
                                    <span className="text-lg mt-2 mr-2">
                                        <TbCurrencyTaka></TbCurrencyTaka>
                                    </span>
                                    <p className='text-lightPrimary text-lg mt-2'> {product.price}</p>
                                </div>




                            </div>
                        </div>

                        // <Link to='/products/details'> <div className='w-72' key={product._id}>
                        //     <div className='w-72 h-80 p-4 px-8 rounded-xl border-2 border-whiteSmoke '>
                        //         <h2 className='bg-primary w-10 text-xs rounded-sm ml-44 text-white mt-3'>Sale!</h2>
                        //         <img src={product.image} alt='' className='w-44 mx-auto  h-[200px] mt-7' />
                        //     </div>
                        //     <div>
                        //         <h1 className='text-secondary text-sm mt-2'>{product.productName}</h1>







                        //     </div>

                        // </div></Link>


                    ))
                }
            </div>
            <div className='mt-10'>
                <Link to='/products' className='border-2  border-primary p-3 rounded-md text-primary text-md hover:text-white hover:bg-primary'>View all</Link>

            </div>
            {/* 
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
            </div> */}
        </div></Link>
    )
}

export default FeatureProducts


