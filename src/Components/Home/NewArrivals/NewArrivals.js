import React from "react";

import Slider from "react-slick";
import { TbCurrencyTaka } from "react-icons/tb";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const NewArrivals = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const url = ` https://renixserver.niroghealthplus.com/api/v1/medicine?size=${6}&page=${0}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data?.data);
      });
  }, []);
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,

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
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
    // fade: true,
  };

  return (
    <div className=" mx-auto py-14 ">
      <div className="lg:w-[90%] w-full  mx-auto my-10 text-center">
        <h3 className="bg-thirdLightPrimary w-36 mx-auto font ">
          F e a t u r e
        </h3>
        <h1 className="text-secondary font-semibold text-3xl mt-3 mb-6">
          New Arrivals
        </h1>
        <Slider {...settings}>
          {products?.map((product) => (
            <div className="w-[90%] sm:w-6/12 md:w-4/12  " key={product._id}>
              <div className="m-4 w-50 rounded-xl border-2 border-whiteSmoke ">
                <h2 className="bg-primary w-10 text-left text-xs pl-1 pt-1 pb-1  text-white mt-3">
                  Sale!
                </h2>
                <img
                  src={product.img}
                  alt=""
                  className="w-[200px] mx-auto  h-auto mt-7"
                />
                <div className="pl-4 pb-2">
                  <h1 className="text-secondary text-left   text-lg mt-2">
                    {product.name}
                  </h1>
                  <p className="text-left text-blue-gray-500">
                    {product?.strength}
                  </p>

                  <p className="text-left text-blue-gray-500">
                    {product?.supplierName}
                  </p>

                  <Link to={`/products/${product?._id}`}>
                    <div class="flex items-center justify-between pr-5">
                      <span class="font-bold text-lg">৳ {product.price}</span>
                      <button class="bg-primary  text-white font-bold py-2 px-4 rounded">
                        Buy Now
                      </button>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default NewArrivals;
