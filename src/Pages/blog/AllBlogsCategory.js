import React, { useEffect, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { TbEdit } from "react-icons/tb";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const AllBlogsCategory = () => {
  const [refresh, setRefresh] = useState(false);
  const [category, setCategory] = useState([]);
  useEffect(() => {
    const url = `https://server.renixlaboratories.com.bd/api/v1/blogsCategory`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCategory(data?.data);
      });
  }, [refresh]);

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
        fetch(
          `https://server.renixlaboratories.com.bd/api/v1/blogsCategory/deleteBlogsCategory/${id}`,
          {
            method: "DELETE",
          }
        ).then((res) => {
          if (res.status === 200) {
            setRefresh(!refresh);
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          }
        });
      }
    });
  };
  return (
    <section className="py-10 md:py-14">
      <div className="container px-6 md:max-w-6xl w-full ">
        {/* medicine list table */}
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border border-[#D0D2DA]  table_head rounded-lg">
              <tr className="py-4 rounded-lg">
                <th
                  scope="col"
                  className="px-6 py-3  text-[13px] font-medium capitalize"
                >
                  Seriol No
                </th>
                <th
                  scope="col"
                  className="px-6 py-3  text-[13px] font-medium capitalize"
                >
                  Category
                </th>

                <th
                  scope="col"
                  className="px-6 py-3  text-[13px] font-medium capitalize"
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {category?.map((cat, i) => (
                <tr
                  key={cat?._id}
                  cat={cat}
                  className="bg-white border-b border-[#D0D2DA]"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {i + 1}
                  </th>
                  <td className="px-6 py-4">{cat?.name}</td>

                  <td className="px-6 py-4">
                    <span className="flex items-center gap-3">
                      <Link
                        to={`/adminDashboard/blog/updateCategory/${cat?._id}`}
                        className="text-lg text-[#0077FF] bg-[#BBDDFF] w-7 h-7
                        rounded-lg flex items-center justify-center"
                      >
                        <TbEdit />
                      </Link>
                      <button
                        onClick={() => handelDelete(cat?._id)}
                        className="text-lg text-[#F87171] bg-[#FEE2E2] w-7  h-7 rounded-lg flex items-center justify-center"
                      >
                        <RiDeleteBin6Line />
                      </button>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default AllBlogsCategory;
