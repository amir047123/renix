import { Box, CircularProgress } from "@mui/material"; // ✅ Import MUI Loader
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../Components/Card/Card";
import DynamicMetaTitle from "../Components/DynamicMetaTitle";
import CategoryItems from "../Components/Products/CategoryItems";
import useGetSeo from "../Hooks/useGetSeo";
import Pagination from "../shared/Pagination";

const pageSize = 10; // Number of products per page

const fetchProducts = async ({ queryKey }) => {
  const [_, categoryId, page] = queryKey;
  let url = `http://localhost:3001/api/v1/medicine?size=${pageSize}&page=${page}`;

  if (categoryId) {
    url = `http://localhost:3001/api/v1/medicine/specific?fieldName=medicineCategory&fieldValue=${categoryId}&size=${pageSize}&page=${page}`;
  }

  const { data } = await axios.get(url);
  return data;
};

const fetchCategories = async () => {
  const { data } = await axios.get("http://localhost:3001/api/v1/category");
  return data?.data;
};

const Products = () => {
  const { id } = useParams();
  const metaData = useGetSeo("our_product_page");
  const [page, setPage] = useState(0);

  // Fetch Products using TanStack Query
  const {
    data: productData,
    isLoading: productLoading,
    error: productError,
  } = useQuery({
    queryKey: ["products", id, page],
    queryFn: fetchProducts,
    keepPreviousData: true, // Keeps previous data while fetching new data
  });

  // Fetch Categories using TanStack Query
  const {
    data: categories,
    isLoading: categoryLoading,
    error: categoryError,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

  const totalPages = Math.ceil(productData?.total / pageSize);

  return (
    <div className="m-5 ">
      {/* Dynamic Meta Tags */}
      <DynamicMetaTitle
        title={metaData?.metaTitle}
        metaImage={metaData?.metaImage}
        description={metaData?.metaDescription}
        canonicalUrl={metaData?.canonicalUrl}
      />

      {/* Handle Loading & Errors */}
      {(productLoading || categoryLoading) && (
        <Box className="flex justify-center items-center h-40">
          <CircularProgress size={50} color="primary" />
        </Box>
      )}

      {(productError || categoryError) && (
        <p className="text-red-500">Error fetching data!</p>
      )}

      {!productLoading && !categoryLoading && (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* ✅ Mobile-Friendly Category Bar (Appears on Top in Mobile) */}
          <div className="md:hidden bg-white shadow-md rounded-lg overflow-x-auto whitespace-nowrap p-2">
            <h2 className="text-xl font-bold text-white bg-primary p-4 uppercase tracking-wide">
              Product Categories
            </h2>
            <ul className="flex space-x-4">
              {categories?.map((category) => (
                <li
                  key={category._id}
                  className="px-4 py-2 bg-gray-100 rounded-lg cursor-pointer"
                >
                  <CategoryItems category={category?.name} />
                </li>
              ))}
            </ul>
          </div>

          {/* ✅ Sidebar Category Section (Appears as Sidebar in Desktop) */}
          <div className="hidden md:block md:col-span-4 lg:col-span-3 order-1">
            <div className="bg-white shadow-lg rounded-xl overflow-hidden">
              <h2 className="text-lg font-bold text-white bg-primary p-4 uppercase tracking-wide">
                Product Categories
              </h2>
              <ul className="divide-y divide-gray-200">
                {categories?.length > 0 &&
                  categories.map((category) => (
                    <li
                      key={category._id}
                      className="p-4 hover:bg-gray-100 transition duration-300 cursor-pointer"
                    >
                      <CategoryItems category={category?.name} />
                    </li>
                  ))}
              </ul>
            </div>
          </div>

          {/* ✅ Product Grid Section (Appears Below in Mobile, Right in Desktop) */}
          <div className="col-span-full md:col-span-8 lg:col-span-9 order-2">
            <div className="grid exxl:grid-cols-5 exl:grid-cols-4 lg:grid-cols-3 sml:grid-cols-2 sm:grid-col-1  gap-4">
              {productData?.data?.map((item) => (
                <Card key={item?._id} item={item} />
              ))}
            </div>

            {/* ✅ Pagination Below Products */}
            <Pagination
              currentPage={page + 1}
              totalPages={totalPages}
              onPageChange={(pageNumber) => setPage(pageNumber - 1)}
              className="flex justify-center mt-6"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
