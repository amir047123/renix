import { Box, CircularProgress } from "@mui/material"; // ✅ Import MUI Loader
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { server_url } from "../../../Config/API";

const fetchProducts = async () => {
  const { data } = await axios.get(`${server_url}/medicine?size=8&page=0`);
  return data?.data;
};

const FeatureProducts = () => {
  // Fetch products using TanStack Query
  const {
    data: products = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["featuredProducts"],
    queryFn: fetchProducts,
    keepPreviousData: true,
  });

  return (
    <div className="w-[90%] container mx-auto my-10">
      {/* ✅ Section Title */}
      <div>
        <h3 className="bg-thirdLightPrimary w-36 mx-auto text-sm font-semibold text-gray-700 py-1 rounded-md text-center">
          FEATURED
        </h3>
        <h1 className="text-secondary text-center font-bold text-3xl mt-3 uppercase">
          Feature Products
        </h1>
      </div>

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

      {/* ✅ Product Grid */}
      {!isLoading && !error && (
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 w-full mt-10">
          {products.map((item) => (
            <div
              key={item._id}
              className="group block bg-white shadow-lg rounded-xl overflow-hidden transition-transform duration-300 hover:shadow-xl hover:scale-105"
            >
              {/* ✅ Product Image */}
              <div className="relative">
                <div className="w-full flex items-center justify-center">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-[70%] h-[70%] md:w-full md:h-full object-cover"
                  />
                </div>

                {/* ✅ Sale Badge */}
                {item?.discount && (
                  <span className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase">
                    Sale!
                  </span>
                )}
              </div>

              {/* ✅ Product Details */}
              <div className="p-5 text-center">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:underline">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  {item.genericName || "Unani Medicine"}
                </p>
                <p className="text-sm text-gray-600">
                  Strength: {item.strength}
                </p>

                {/* ✅ Price & Stock Info */}

                {/* ✅ Buy Now Button */}
                <a
                  target="_blank"
                  href={item?.orderUrl}
                  className="mt-4 inline-block bg-primary text-white px-6 py-2 rounded-full font-medium transition hover:bg-opacity-90"
                  rel="noreferrer"
                >
                  Buy Now
                </a>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ✅ View All Button */}
      <div className="mt-10 flex justify-center">
        <Link
          to="/products"
          className="border-2 border-primary px-6 py-3 rounded-md text-primary text-md font-medium transition hover:text-white hover:bg-primary"
        >
          View All
        </Link>
      </div>
    </div>
  );
};

export default FeatureProducts;
