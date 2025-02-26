import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";
import { TbEdit } from "react-icons/tb";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Pagination from "../../shared/Pagination/Pagination";
import { server_url } from "../../Config/API";
import { Box, CircularProgress } from "@mui/material";
import toast from "react-hot-toast";

const AllBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(6);
  const [refresh, setRefresh] = useState(false);
  const [input, setInput] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const url = `${server_url}/blogs?size=${size}&page=${page}&filter=${input}`;
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data?.data);
        setQuantity(data?.total);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false); // Set loading to false if there's an error
        toast.error("Error fetching data.");
      });
  }, [size, page, input, refresh]);

  const handelDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${server_url}/blogs/deleteBlog/${id}`, {
          method: "DELETE",
        }).then((res) => {
          if (res.status === 200) {
            setRefresh(!refresh);
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          }
        });
      }
    });
  };

  // ✅ Handle Filter Submit
  const handleFilter = (e) => {
    e.preventDefault();
    setInput(e.target.filter.value);
    setRefresh((prev) => !prev);
  };

  const tableHeader = ["Serial No", "Title", "Category", "Action"];

  return (
    <section className="py-10 md:py-14">
      <div className="container px-6 md:max-w-7xl w-full ">
        {/* search bar */}

        <form
          onSubmit={handleFilter}
          className="flex items-center justify-end gap-3 mb-6"
        >
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <CiSearch className="text-xl text-textColor" />
            </div>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              name="filter"
              type="text"
              className="bg-[#F0FDF4] text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full pl-10 px-2.5 py-3 border-none"
              placeholder="Search"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-primary text-white px-4 py-2 rounded-md"
          >
            Filter
          </button>
          <button
            type="button"
            onClick={() => {
              setInput("");
              setSearch("");
              setRefresh((prev) => !prev);
            }}
            className="bg-red-500 text-white px-4 py-2 rounded-md"
          >
            Reset
          </button>
        </form>

        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-green-50 ">
              <tr>
                {tableHeader.map((heading, index) => (
                  <th
                    key={index}
                    className={`px-6 py-4 text-[13px] font-semibold capitalize rounded-none 
                      ${
                        index === 0
                          ? "rounded-l-xl"
                          : index === tableHeader.length - 1
                          ? "rounded-r-xl text-center"
                          : ""
                      }
                    `}
                  >
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={tableHeader.length}>
                    <Box className="flex justify-center items-center h-40">
                      <CircularProgress size={50} color="primary" />
                    </Box>
                  </td>
                </tr>
              ) : blogs?.length === 0 ? (
                <tr>
                  <td colSpan={tableHeader.length} className="py-4 text-center">
                    No Blogs Found!
                  </td>
                </tr>
              ) : (
                blogs?.map((blog, i) => (
                  <tr key={i} className="bg-white border-b border-[#D0D2DA]">
                    <td className="pl-8 pr-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {i + 1}
                    </td>
                    <td className="px-6 py-4">{blog?.title}</td>
                    <td className="px-6 py-4">{blog?.category}</td>

                    <td className="px-6 py-4">
                      <span className="flex items-center justify-center gap-3">
                        <Link to={`edit-blog/${blog?._id}`}>
                          {" "}
                          <button className="text-lg text-[#0077FF] bg-[#BBDDFF] w-7  h-7 rounded-lg flex items-center justify-center">
                            <TbEdit />
                          </button>
                        </Link>
                        <button
                          onClick={() => handelDelete(blog?._id)}
                          className="text-lg text-[#F87171] bg-[#FEE2E2] w-7  h-7 rounded-lg flex items-center justify-center"
                        >
                          <RiDeleteBin6Line />
                        </button>
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
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
    </section>
  );
};

export default AllBlogs;
