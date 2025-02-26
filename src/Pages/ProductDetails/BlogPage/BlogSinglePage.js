import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SecondLoading from "../../../shared/SecondLoading";
import { server_url } from "../../../Config/API";

const BlogSinglePage = () => {
  const [blog, setBlog] = useState({});
  const [recent, setRecent] = useState([]);
  const { id } = useParams();
  const [_id, setId] = useState(id);
  const [loading, setLoading] = useState();
  useEffect(() => {
    setLoading(true);
    fetch(`${server_url}/blogs/blogDetails/${_id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBlog(data?.data);
        setLoading(false);
      });
  }, [_id]);

  useEffect(() => {
    setLoading(true);
    const url = `${server_url}/blogs`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setRecent(data?.data.slice(0, 4));
        setLoading(false);
      });
  }, []);
  const des = blog?.description?.replace(/<\/?p>/g, "");

  if (loading) {
    return <SecondLoading />;
  }
  return (
    <div>
      <div className="lgl:flex m-5 mx-auto">
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
            className="text-gray-600 mb-4 text-justify"
          ></p>
        </div>
        <div className="sm:w-full lgl:p-4 lgl:w-[500px]  sm:p-3  shadow-md ">
          <h2 className="text-lg font-bold mb-4">Recent Blogs Post</h2>
          <div className="border-t border-gray-300 w-full mb-3"></div>

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
        </div>
      </div>
    </div>
  );
};

export default BlogSinglePage;
