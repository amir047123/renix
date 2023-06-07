import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BlogSinglePage = () => {
  const [blog, setBlog] = useState({});
  const [recent, setRecent] = useState([]);
  const { id } = useParams();
  const [_id, setId] = useState(id);
  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/blogs/blogDetails/${_id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBlog(data?.data);
      });
  }, [_id]);

  useEffect(() => {
    const url = `http://localhost:5000/api/v1/blogs`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setRecent(data?.data.slice(0, 4));
      });
  }, []);
  const des = blog?.description?.replace(/<\/?p>/g, "").slice(0, 250);

  return (
    <div>
      <div className="lgl:flex lg:w-10/12 mx-auto">
        <div className="  lgl:p-4  sm:p-4 sm:w-full  ">
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
            className="text-gray-600 mb-4 sm:text-justify"
          ></p>
        </div>
        <div className="sm:w-full lgl:p-4 lgl:w-[500px]  sm:p-3  ">
          <h2 className="text-lg font-bold mb-4">Recent Blogs Post</h2>
          <ol>
            {recent.map((recentBlog) => (
              <li
                key={recentBlog?._id}
                className="mb-2 flex hover:text-primary cursor-pointer"
              >
                <p onClick={() => setId(recentBlog?._id)}>
                  {recentBlog?.title}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default BlogSinglePage;
