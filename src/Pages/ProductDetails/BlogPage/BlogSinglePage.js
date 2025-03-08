import { CircularProgress } from "@mui/material"; // ✅ Import Spinner
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { server_url } from "../../../Config/API";

const BlogSinglePage = () => {
  const [blog, setBlog] = useState({});
  const [recent, setRecent] = useState([]);
  const { id } = useParams();
  const [_id, setId] = useState(id);
  const [loading, setLoading] = useState(false); // ✅ Default `false`

  // Fetch the blog details based on ID
  useEffect(() => {
    setLoading(true);
    fetch(`${server_url}/blogs/blogDetails/${_id}`)
      .then((res) => res.json())
      .then((data) => {
        setBlog(data?.data);
        setLoading(false);
      })
      .catch(() => setLoading(false)); // ✅ Prevent infinite loading on error
  }, [_id]);

  // Fetch recent blogs
  useEffect(() => {
    setLoading(true);
    fetch(`${server_url}/blogs`)
      .then((res) => res.json())
      .then((data) => {
        setRecent(data?.data.slice(0, 4));
        setLoading(false);
      })
      .catch(() => setLoading(false)); // ✅ Prevent infinite loading on error
  }, []);

  const des = blog?.description?.replace(/<\/?p>/g, "");

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="lg:flex gap-10">
        {/* ✅ Blog Details Section */}
        <div className="lg:w-2/3 bg-white p-6 rounded-lg shadow-lg">
          {loading ? (
            <div className="flex justify-center items-center h-40">
              <CircularProgress size={50} thickness={4} color="primary" />
            </div>
          ) : (
            <>
              <img
                src={blog?.img}
                alt={blog?.title}
                className="w-full rounded-lg shadow-md mb-6 object-cover max-h-[300px]"
              />
              <h1 className="text-2xl sm:text-3xl font-bold mb-3 text-gray-800 break-words">
                {blog?.title}
              </h1>
              <p className="text-gray-500 text-sm mb-4">
                ✍️ By <strong>{blog?.author}</strong> | 📅 {blog?.date}{" "}
                {blog?.month}, {blog?.year}
              </p>
              <div
                dangerouslySetInnerHTML={{ __html: des }}
                className="text-gray-700 leading-relaxed text-justify break-words overflow-wrap"
                style={{ wordBreak: "break-word", maxWidth: "100%" }}
              ></div>
            </>
          )}
        </div>

        {/* ✅ Recent Blogs Section */}
        <div className="lg:w-1/3 mt-10 lg:mt-0 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4 text-gray-800">
            📌 Recent Blog Posts
          </h2>
          <div className="border-t border-gray-300 w-full mb-4"></div>
          {loading ? (
            <div className="flex justify-center items-center h-20">
              <CircularProgress size={40} thickness={4} color="primary" />
            </div>
          ) : (
            <div className="space-y-4">
              {recent.map((recentBlog) => (
                <div
                  key={recentBlog?._id}
                  className="p-3 bg-gray-50 hover:bg-gray-100 transition duration-300 rounded-md shadow-sm cursor-pointer"
                  onClick={() => setId(recentBlog?._id)}
                >
                  <h3 className="text-md font-semibold text-gray-700 hover:text-primary break-words">
                    {recentBlog?.title}
                  </h3>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogSinglePage;
