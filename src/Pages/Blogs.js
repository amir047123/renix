import CircularProgress from "@mui/material/CircularProgress"; // CircularProgress ইম্পোর্ট করুন
import React, { useEffect, useState } from "react";
import DynamicMetaTitle from "../Components/DynamicMetaTitle";
import useGetSeo from "../Hooks/useGetSeo";
import Pagination from "../shared/Pagination/Pagination";
import BlogCard from "./ProductDetails/BlogPage/BlogCard";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const metaData = useGetSeo("blog_page");
  // for pagination
  const [quantity, setQuantity] = useState(0);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(6);

  const [loading, setLoading] = useState(true); // লোডিং স্টেট

  useEffect(() => {
    setLoading(true);
    const url = `https://server.renixlaboratories.com.bd/api/v1/blogs?size=${size}&page=${page}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBlogs(data?.data);
        setQuantity(data?.total);
        setLoading(false);
      });
  }, [size, page]);

  return (
    <div className="container mx-auto px-4 py-8">
      <DynamicMetaTitle
        title={metaData?.metaTitle}
        metaImage={metaData?.metaImage}
        description={metaData?.metaDescription}
        canonicalUrl={metaData?.canonicalUrl}
      />
      <div className="mx-auto text-center lg:mb-16 mb-8">
        <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
          Our Blog
        </h2>
        <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
          We use an agile approach to test assumptions and connect with the
          needs of your audience early and often.
        </p>
      </div>

      {/* লোডিং স্টেটে CircularProgress দেখান */}
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <CircularProgress />
        </div>
      ) : (
        <div>
          <div className="pl-5">
            <div className="lgl:grid lgl:grid-cols-2 lgl:gap-4 sm:grid sm:grid-cols-1">
              {blogs.map((blog) => (
                <BlogCard blog={blog} key={blog?._id} />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* প্যাজিনেশন */}
      <Pagination
        quantity={quantity}
        page={page}
        setPage={setPage}
        size={size}
        setSize={setSize}
      />
    </div>
  );
};

export default Blogs;
