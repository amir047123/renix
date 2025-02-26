import { Box, CircularProgress } from "@mui/material"; // ✅ Import MUI Loader
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { shuffle } from "lodash";
import React from "react";
import { Link } from "react-router-dom";
import { server_url } from "../../../Config/API";

const fetchProducts = async () => {
  const { data } = await axios.get(`${server_url}/medicine?size=8&page=0`);
  return data?.data;
};

const ShowCase = () => {
  // Fetch products using TanStack Query
  const {
    data: products = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["showcaseProducts"],
    queryFn: fetchProducts,
    keepPreviousData: true,
  });

  // Shuffle and get two random products
  const randomProducts = shuffle(products).slice(0, 2);

  return (
    <div className="bg-gradient-to-r from-thirdLightPrimary via-whiteSmoke to-thirdLightPrimary py-12">
      <section className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center">
          {/* ✅ Left Section - Title & Description */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-bold text-gray-900 uppercase">
              Latest Arrivals
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              Explore our newest Unani medicine collection, formulated for your
              health and well-being.
            </p>

            <Link
              to="https://renixcare.com"
              className="mt-6 inline-block rounded bg-gray-900 px-8 py-3 text-lg font-semibold bg-primary text-white transition hover:bg-gray-700"
            >
              Shop All
            </Link>
          </div>

          {/* ✅ Right Section - Products Showcase */}
          <div className="lg:col-span-2">
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {randomProducts.map((product) => (
                  <div
                    key={product._id}
                    className="group relative overflow-hidden rounded-xl bg-white shadow-md hover:shadow-xl transition duration-300"
                  >
                    {/* ✅ Product Image */}
                    <Link to={`/product/${product?.slug}`} className="block">
                      <img
                        src={product.img}
                        alt={product.name}
                        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </Link>

                    {/* ✅ Product Details */}
                    <div className="p-5 text-center">
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:underline">
                        {product.name}
                      </h3>
                      <p className="mt-2 text-gray-700 text-sm">
                        {product.shortDescription ||
                          "Premium quality Unani medicine."}
                      </p>

                      {/* ✅ Price & CTA Button */}
                      <div className="mt-4 flex items-center justify-center space-x-4">
                        {/* <p className="text-xl font-semibold text-gray-900">
                          ৳ {product.price || "N/A"}
                        </p> */}
                        <Link
                          to={`/product/${product?.slug}`}
                          className="inline-block bg-primary text-white px-6 py-2 rounded-full font-medium transition hover:bg-opacity-90"
                        >
                          Explore Now
                        </Link>
                      </div>
                    </div>

                    {/* ✅ New Arrival Badge */}
                    <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase">
                      New
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShowCase;
