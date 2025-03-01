import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { server_url } from "../../../Config/API";
import { useQuery } from "@tanstack/react-query";
import { Box, CircularProgress } from "@mui/material";
import { Link } from "react-router-dom";

const ProductCard = ({ name, image, slug }) => (
  <Link
    to={`/product/${slug}`}
    className="relative group cursor-pointer bg-white rounded-2xl overflow-hidden"
  >
    <div className=" rounded-2xl p-6 aspect-[4/3] transform transition-transform duration-300 hover:scale-[1.02] ">
      <div className="flex justify-between">
        <img src={image} alt={name} className="w-[170px] mx-auto " />
        <div className="md:bg-gradient-to-t md:from-accent md:via-transparent md:to-transparent absolute top-0 left-0 w-full h-full bg-gradient-to-t from-accent via-accent/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-6">
          <h3 className="text-[#FFF2BE] text-lg font-medium">{name}</h3>
          <p className="text-[#ECF2F8] text-sm">
            Renix Unani Laboratories Ltd.
          </p>
        </div>

        <BsArrowUpRight className="text-white/60 w-5 h-5" />
      </div>
    </div>
  </Link>
);

const fetchMedicines = async () => {
  const response = await fetch(
    `${server_url}/medicine?size=${6}&isSpecial=yes`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch medicines");
  }
  return response.json();
};

const SpecializedProducts = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["medicine", 6],
    queryFn: fetchMedicines,
    keepPreviousData: true, // Keeps previous data while fetching new data
  });

  // ✅ Extract Products & Quantity
  const products = data?.data || [];

  return (
    <div
      className="bg-gradient-to-b from-indigo-900 to-emerald-900  p-8 md:p-12"
      id="specializedProducts"
    >
      <div className="container mx-auto mt-10">
        <h2 className="text-3xl md:text-4xl font-medium text-white mb-8">
          Specialized Products on{" "}
          <span className="text-yellow-400">Renix Unani Laboratories Ltd.</span>
        </h2>

        {isLoading ? (
          <Box className="flex justify-center items-center h-40 mt-10">
            <CircularProgress size={50} color="primary" />
          </Box>
        ) : products?.length === 0 ? (
          <h4 className="text-2xl font-medium text-center mt-20">
            No Specialized Products Found!
          </h4>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
            {products?.map((product) => (
              <ProductCard
                key={product._id}
                name={product.name}
                image={product.img}
                slug={product.slug}
                isFeatured={product.isFeatured}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SpecializedProducts;
