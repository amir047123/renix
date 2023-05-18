import React from 'react'
import img1 from "../../../Assets/images/NewArrival/16. Syrup Parsley.webp";
import img2 from "../../../Assets/images/NewArrival/15. Capsul Ranix-Ginseng.webp";
import img3 from "../../../Assets/images/NewArrival/14. Suspension Procid.webp";
import img4 from "../../../Assets/images/NewArrival/09. S.Solid Dykmuni.webp";
import img5 from "../../../Assets/images/NewArrival/07. Syrup Hazmina Plus.webp";
import img6 from "../../../Assets/images/NewArrival/08. Syrup R-Kuli.webp";
import Slider from 'react-slick'
import { TbCurrencyTaka } from "react-icons/tb"
import { Link } from 'react-router-dom';


const NewArrivals = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,

        slidesToScroll: 1,
        autoplay: true,
        arrows: true,
        autoplaySpeed: 1500,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
        // fade: true,
    };


    const newProducts = [
        {
            _id: 1,
            productName: "Syrup Parsley",
            genericName: "Arq Bukhar",
            strength: "200 ML / 100 ML",
            Catgory:"Syrup",

            stock: "300",
            price: "145/75",
            image: `${img1}`,
        },
        {
            _id: 2,
            productName: "Capsul Renix-Ginseng",
            genericName: "Ginseng",
            strength: "60 Capsule",
            Catgory:"Capsule",

            stock: "90",
            price: "1200",
            image: `${img2}`,
        },
        {
            _id: 3,
            productName: "Suspension Procid",
            genericName: "Humuzin",
            strength: "20 ML",
            Catgory:"Suspension",
            stock: "180",
            price: "220",
            image: `${img3}`,
        },
        {
            _id: 4,
            productName: "S.Solid Dykmuni",
            genericName: "Jowarish Kamuni",
            strength: "400 G / 100 G",
            Catgory:"S.solid",
            stock: "160",
            price: "350/250",
            image: `${img4}`,
        },
        {
            _id: 5,
            productName: "Syrup R-Khuli",
            genericName: "Urinary Alkalinizer & Diuretic",
            Catgory:"Syrup",
            strength: "450 ML/200 ML/100 ML",
            stock: "80",
            price: "225/115/60",
            image: `${img6}`,
        },
        {
            _id: 6,
            productName: "Syrup Hazmina-Plus",
            genericName: " Sharbat Hazmina",
            strength: "450 ML/200 ML",
            Catgory:"Syrup",
            stock: "200",
            price: "225/115",
            image: `${img5}`,
        },
    ];
    return (
        <div className=' w-full py-14 bg-[#f7fbf3]'>
            <div className="lg:w-[90%] w-full  mx-auto my-10 text-center">
                <h3 className='bg-thirdLightPrimary w-36 mx-auto font '>F e a t u r e</h3>
                <h1 className='text-secondary font-semibold text-3xl mt-3 mb-6'>New Arrivals</h1>
                <Slider {...settings}>
                    {
                        newProducts?.slice(0, 4)?.map((product) => (

                            <div className='w-80 sm:w-6/12 md:w-4/12' key={product._id}>
                                <div className='m-4  rounded-xl border-2 border-whiteSmoke '>
                                    <h2 className='bg-primary w-10 text-left text-xs pl-1 pt-1 pb-1  text-white mt-3'>Sale!</h2>
                                    <img src={product.image} alt='' className='w-full mx-auto  h-auto mt-7' />
                                    <div className='pl-4 pb-2' >
                                    <h1 className='text-secondary text-left  text-lg mt-2'>{product.productName}</h1>
                                    <div className="flex  pb-2  items-center text-left  ">
                                    <span className="text-lg mt-2 mr-2">
                                        <TbCurrencyTaka ></TbCurrencyTaka>
                                    </span>
                                    <p className=' text-primary text-lg mt-2'> {product.price}</p>
                                    
                                </div> 
                                <Link to="/checkout" ><button   className= ' bg-primary px-2 pt-1 pb-1 rounded-lg text-left flex bottom-0 left-0' >Order Now</button></Link>
                                

                                </div>
                                </div>
                                
                            </div>

                        ))
                    }
                </Slider>
            </div>





        </div>
    )
}

export default NewArrivals