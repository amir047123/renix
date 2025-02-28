import { CircularProgress } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import toast from "react-hot-toast";
import DynamicMetaTitle from "../Components/DynamicMetaTitle";
import useGetSeo from "../Hooks/useGetSeo";
import Pagination from "../shared/Pagination/Pagination";
import BlogCard from "./ProductDetails/BlogPage/BlogCard";
import { server_url } from "../Config/API";

const fetchBlogs = async ({ queryKey }) => {
  const [, page, size] = queryKey;
<<<<<<< HEAD
  const response = await fetch(
    `http://localhost:3001/api/v1/blogs?size=${size}&page=${page}`
  );
=======
  const response = await fetch(`${server_url}/blogs?size=${size}&page=${page}`);
>>>>>>> 47bb5cedf53f5587c42b72757c4a2d7953614036
  if (!response.ok) {
    throw new Error("Failed to fetch blogs.");
  }
  return response.json(); // Returns full data object (data & total)
};

const Blogs = () => {
  const metaData = useGetSeo("blog_page");

  // Pagination states
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(6);

  // Fetch blogs using TanStack Query v5 (corrected syntax)
  const { data, isLoading, isError } = useQuery({
    queryKey: ["blogs", page, size],
    queryFn: fetchBlogs,
  });

  if (isError) {
    toast.error("Error fetching blogs.");
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <DynamicMetaTitle
        title={metaData?.metaTitle}
        metaImage={metaData?.metaImage}
        description={metaData?.metaDescription}
        canonicalUrl={metaData?.canonicalUrl}
      />

      {/* Blog Section Title */}
      <div className="mx-auto text-center lg:mb-16 mb-8">
        <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900">
          Our Blog
        </h2>
        <p className="font-light text-gray-500 sm:text-xl">
          We use an agile approach to test assumptions and connect with the
          needs of your audience early and often.
        </p>
      </div>

      {/* Loading State with Circular Progress */}
      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <CircularProgress size={80} thickness={4} color="primary" />
        </div>
      ) : (
        <div className="pl-5">
          <div className="grid md:grid-cols-2 gap-4 sm:grid-cols-1">
            {data?.data?.map((blog) => (
              <BlogCard blog={blog} key={blog?._id} />
            ))}
          </div>
        </div>
      )}

      {/* Pagination */}
      <Pagination
        quantity={data?.total || 0} // Correctly passing total number of blogs
        page={page}
        setPage={setPage}
        size={size}
        setSize={setSize}
      />
    </div>
  );
};

export default Blogs;
