import React from "react";
import BlogCard from "./ProductDetails/BlogPage/BlogCard";
import { useEffect } from "react";
import { useState } from "react";
import Pagination from "../shared/Pagination/Pagination";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  // for pagination
  const [quantity, setQuantity] = useState(0);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(6);
  useEffect(() => {
    const url = ` http://renixserver.tripkori.com/api/v1/blogs?size=${size}&page=${page}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBlogs(data?.data);
        setQuantity(data?.total);
      });
  }, [size, page]);

  return (
    <div className="container mx-auto px-4 py-8   ">
      <div class="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
        <h2 class="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
          Our Blog
        </h2>
        <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">
          We use an agile approach to test assumptions and connect with the
          needs of your audience early and often.
        </p>
      </div>
      <div>
        <div className=" pl-5">
          <div className="lgl:grid lgl:grid-cols-2 lgl:gap-4 sm:grid sm:grid-cols-1">
            {blogs.map((blog) => (
              <BlogCard blog={blog} key={blog?._id} />
            ))}
          </div>
        </div>
      </div>
      {/* pagination */}
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
