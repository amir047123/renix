import React from 'react'
import img1 from "../../../Assets/images/sliderImages/p1.png";
import img2 from "../../../Assets/images/sliderImages/p2.png";
import img3 from "../../../Assets/images/sliderImages/p3.png";
import img4 from "../../../Assets/images/sliderImages/p4.png";
import img5 from "../../../Assets/images/sliderImages/p5.png";
import img6 from "../../../Assets/images/sliderImages/p6.png";
import Slider from 'react-slick'

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
        <div className='  py-14 bg-[#f7fbf3]'>
            <div className="lg:w-[90%] w-full  mx-auto my-10 text-center">
                <h3 className='bg-thirdLightPrimary w-36 mx-auto font '>F e a t u r e</h3>
                <h1 className='text-secondary font-semibold text-3xl mt-3 mb-6'>New Arrivals</h1>
                <Slider {...settings}>
                    {
                        newProducts?.slice(0, 4)?.map((product) => (

                            <div className='w-full sm:w-6/12 md:w-4/12' key={product._id}>
                                <div className='m-4  rounded-xl border-2 border-whiteSmoke '>
                                    <h2 className='bg-primary w-10 text-xs rounded-sm ml-44 text-white mt-3'>Sale!</h2>
                                    <img src={product.image} alt='' className='w-44 mx-auto  h-52 mt-7' />
                                </div>
                                <div>
                                    <h1 className='text-secondary text-sm mt-2'>{product.productName}</h1>
                                    <p className='text-lightPrimary text-sm mt-2'>Tk {product.price}</p>
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