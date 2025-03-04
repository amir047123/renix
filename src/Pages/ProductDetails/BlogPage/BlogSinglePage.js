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
    <div>
      <div className="lgl:flex m-5 mx-auto">
        {/* Blog Details Section */}
        <div className="lgl:p-4 sm:p-4 sm:w-full">
          {loading ? (
            <div className="flex justify-center items-center h-40">
              <CircularProgress size={50} thickness={4} color="primary" />
            </div>
          ) : (
            <>
              <img
                src={blog?.img}
                alt={blog?.title}
                className="mb-4 w-full h-auto sm:rounded"
              />
              <h1 className="text-3xl font-bold mb-2">{blog?.title}</h1>
              <p className="text-gray-500 text-sm mb-2">
                By {blog?.author} - {blog?.date} - {blog?.month} - {blog?.year}
              </p>
              <p
                dangerouslySetInnerHTML={{ __html: des }}
                className="text-gray-600 mb-4 text-justify"
              ></p>
            </>
          )}
        </div>

        {/* Recent Blogs Section */}
        <div className="sm:w-full lgl:p-4 lgl:w-[500px] sm:p-3 shadow-md">
          <h2 className="text-lg font-bold mb-4">Recent Blog Posts</h2>
          <div className="border-t border-gray-300 w-full mb-3"></div>
          {loading ? (
            <div className="flex justify-center items-center h-20">
              <CircularProgress size={40} thickness={4} color="primary" />
            </div>
          ) : (
            <ol>
              {recent.map((recentBlog) => (
                <li
                  key={recentBlog?._id}
                  className="mb-2 flex hover:text-primary cursor-pointer uppercase"
                >
                  <p onClick={() => setId(recentBlog?._id)}>
                    {recentBlog?.title}
                  </p>
                </li>
              ))}
            </ol>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogSinglePage;
