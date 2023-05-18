import img1 from "../../../Assets/images/Products/01. Syrup Cold Free.webp";
import img2 from "../../../Assets/images/Products/02. Apelon Syrup.webp";
import img3 from "../../../Assets/images/Products/03. Syrup  R-Reniton.webp";
import img4 from "../../../Assets/images/Products/04. Syrup Aptivate.webp";
import img5 from "../../../Assets/images/Products/R-Mons.webp";
import img6 from "../../../Assets/images/Products/06. Syrup Allshifa.webp";
import './FeatureProducts.css'
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TbCurrencyTaka } from "react-icons/tb"





const FeatureProducts = () => {
    const [displayButton, setDisplayButton] = useState("");
    const [selectedProduct,setSelectedProduct]= useState(null);

    const products = [
        {
            _id: 1,
            productName: "Col-Free",
            genericName: "Sharbat Tulsi",
            strength: "200 ML/ 100 ML",
            Cartegory:"Syrup",
            stock: "104",
            price: "200/100",
            image: `${img1}`,
        },
        {
            _id: 2,
            productName: "Apelon",
            genericName: " Sharbat Seb",
            strength: "450 ML / 200 ML / 100 ML",
            Cartegory:"Syrup",
            stock: "103",
            price: "350/180/90",
            image: `${img2}`,
        },
        {
            _id: 3,
            productName: "Syrup R-Renitona",
            genericName: "Arq Ajwain",
            strength: "450 Ml / 200 ML",
            Cartegory:"Syrup",
            stock: "200",
            price: "225/115",
            image: `${img3}`,
        },
        {
            _id: 4,
            productName: "Syrup Aptivate",
            genericName: " Sharbat Mavez",
            strength: "450 ML / 200 ML / 100 ML",
            Cartegory:"Syrup",
            stock: "300",
            price: "360/180/95",
            image: `${img4}`,
        },
        {
            _id: 5,
            productName: "Syrup R-mons",
            genericName: "Sharbat Niswan",
            strength: "450 ML / 200 ML",
            Cartegory:"Syrup",
            stock: "99",

            price: "225/115",
            image: `${img5}`,
        },
        {
            _id: 6,
            productName: "Syrup Allshifa",
            genericName: " Sharbat Misali",
            strength: "450 ML / 200 ML",
            Cartegory:"Syrup",
            stock: "250",
            price: "300/160",
            image: `${img6}`,
        },
    ];

    // const handleProductClick = (productId) => {
    //     const selected = products.find((product) => product._id === productId);
    //     setSelectedProduct(selected);
    //     console.log('Selected Product:', selected);

    //   };const [product, setProduct] = useState({});

    // const [product, setProduct] = useState({});
    // useEffect(() => {
    //     const size = 10; // Provide the desired size value
    //     const page = 1; // Provide the desired page value
    
    //     const url = `http://localhost:5000/api/v1/medicine?size=${size}&page=${page}`;
    //     fetch(url)
    //       .then((res) => res.json())
    //       .then((data) => {
    //         // console.log(data);
    //         // Set the fetched data to the state variables
    //         setProduct(data?.data);

    //       });
    //   }, []);

    //   const { description, genericName, img, name, price, supplierName } = product;

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
                                <div className="flex justify-between items-center">
                                    {/* <span class="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
                                        Sold out
                                    </span> */}
                                    <span class="bg-green-100 self-end  text-green-800 text-xs font-medium  px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                                        sale !
                                    </span>
                                </div>
                                <img
                                    src={product.image}
                                    alt=""
                                    className="w-full mx-auto h-52 "
                                />
                                <p className="text-lightPrimary my-2 font-medium text-xs float-right">
                                    Stock: {product.stock}
                                </p>
                            </div>
                            <div className="text-left" >
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
                                        <TbCurrencyTaka   ></TbCurrencyTaka>
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


