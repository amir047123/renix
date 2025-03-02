import { Box, CircularProgress } from "@mui/material"; // ✅ Import MUI Loader
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { server_url } from "../../../Config/API";

const fetchProducts = async () => {
  const { data } = await axios.get(`${server_url}/medicine?size=6&page=0`);
  return data?.data;
};

const NewArrivals = () => {
  // Fetch products using TanStack Query
  const {
    data: products = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["newArrivals"],
    queryFn: fetchProducts,
    keepPreviousData: true,
  });

  // ✅ Slick Slider Settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 992, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <div className="mx-auto py-14">
      <div className="w-[90%] mx-auto my-10 text-center">
        {/* ✅ Section Title */}
        <h3 className="bg-thirdLightPrimary w-36 mx-auto text-sm font-semibold text-gray-700 py-1 rounded-md">
          FEATURED
        </h3>
        <h1 className="text-secondary font-bold text-3xl mt-3 mb-6 uppercase">
          New Arrivals
        </h1>

        {/* ✅ Loading State */}
        {isLoading && (
          <Box className="flex justify-center items-center h-40">
            <CircularProgress size={50} color="primary" />
          </Box>
        )}

        {/* ✅ Error Handling */}
        {error && (
          <p className="text-center text-red-500 text-lg">
            ⚠️ Error loading products. Please try again!
          </p>
        )}

        {/* ✅ Product Slider */}
        {!isLoading && !error && (
          <Slider {...settings}>
            {products.map((product) => (
              <div key={product._id} className="px-3">
                <div className="bg-white shadow-lg rounded-xl overflow-hidden transition transform hover:scale-105 duration-300">
                  {/* ✅ Product Image */}
                  <Link to={`/product/${product?.slug}`} className="block">
                    <img
                      src={product.img}
                      alt={product.name}
                      className="w-full h-64 object-cover"
                    />
                  </Link>

                  {/* ✅ Product Details */}
                  <div className="p-5 text-center">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-600">{product?.strength}</p>
                    <p className="text-sm text-gray-600">
                      {product?.supplierName}
                    </p>

                    {/* ✅ Price & CTA Button */}
                    <div className="mt-4 flex items-center justify-center space-x-4">
                      <Link
                        target="_blank"
                        to={`${product?.orderUrl}`}
                        className="bg-primary text-white px-6 py-2 rounded-full font-medium transition hover:bg-opacity-90"
                      >
                        Buy Now
                      </Link>
                    </div>
                  </div>

                  {/* ✅ New Arrival Badge */}
                  <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase">
                    New
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        )}
      </div>
    </div>
  );
};

export default NewArrivals;
