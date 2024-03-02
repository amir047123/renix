import React from "react";
import BlogCard from "./ProductDetails/BlogPage/BlogCard";
import { useEffect } from "react";
import { useState } from "react";
import Pagination from "../shared/Pagination/Pagination";
import SecondLoading from "../shared/SecondLoading";
import Loading from "../shared/Loading";
import DynamicMetaTitle from "../Components/DynamicMetaTitle";
import useGetSeo from "../Hooks/useGetSeo";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const metaData = useGetSeo("blog_page");
  // for pagination
  const [quantity, setQuantity] = useState(0);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(6);

  const [loading, setLoading] = useState();
  useEffect(() => {
    setLoading(true);
    const url = ` http://localhost:5000/api/v1/blogs?size=${size}&page=${page}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBlogs(data?.data);
        setQuantity(data?.total);
        setLoading(false);
      });
  }, [size, page]);

  if (loading) {
    return <SecondLoading />;
  }
  return (
    <div className="container mx-auto px-4 py-8   ">
      <DynamicMetaTitle
        title={metaData?.metaTitle}
        metaImage={metaData?.metaImage}
        description={metaData?.metaDescription}
      />
      <div class="mx-auto  text-center lg:mb-16 mb-8">
        <h2 class="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
          Our Blog
        </h2>
        <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400 ">
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
