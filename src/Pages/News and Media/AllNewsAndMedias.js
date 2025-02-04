import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { RiDeleteBin6Line } from "react-icons/ri";
import { TbEdit } from "react-icons/tb";
import { Link } from "react-router-dom";
import Loading from "../../shared/Loading";

const AllNewsAndMedias = () => {
  const [newsAndMedia, setNewsAndMedia] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchNewsAndMedia();
  }, []);

  const fetchNewsAndMedia = () => {
    setLoading(true); // Set loading to true when fetching data
    fetch(
      "https://server.renixlaboratories.com.bd/api/v1/newsAndMedia/getNewsAndMedia"
    )
      .then((response) => response.json())
      .then((data) => {
        setNewsAndMedia(data.data);
        setLoading(false); // Set loading to false when data is fetched
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false); // Set loading to false if there's an error
        toast.error("Error fetching data.");
      });
  };

  const handleDelete = (_id) => {
    console.log("Deleting item with ID:", _id);
    fetch(
      `https://server.renixlaboratories.com.bd/api/v1/newsAndMedia/deleteNewsAndMedia/${_id}`,
      {
        method: "DELETE",
      }
    )
      .then((response) => {
        console.log("Response from delete request:", response);
        if (response.ok) {
          // If the delete request is successful, fetch the updated list
          toast.success("Item deleted successfully!");
          fetchNewsAndMedia();
        } else {
          // Handle error scenarios here
          console.error("Failed to delete:", response.status);
          toast.error("Error deleting item.");
        }
      })
      .catch((error) => console.error("Error deleting:", error));
  };

  return (
    <section className="py-10 md:py-14">
      <div className="container px-6 md:max-w-6xl w-full">
        {loading ? ( // Show loading indicator if loading is true
          <Loading />
        ) : (
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border border-[#d0d2dadd]  table_head rounded-lg">
                <tr className="py-4 rounded-lg">
                  <th
                    scope="col"
                    className="px-6 py-3  text-[13px] font-medium capitalize"
                  >
                    Serial No
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3  text-[13px] font-medium capitalize"
                  >
                    Title
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
                {newsAndMedia.map((item, index) => (
                  <tr
                    key={index}
                    className="bg-white border-b border-[#D0D2DA]"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {index + 1}
                    </th>
                    <td className="px-6 py-4">{item.newsTitle}</td>
                    <td className="px-6 py-4">{item.newsCategory}</td>

                    <td className="px-6 py-4">
                      <span className="flex items-center gap-3">
                        <Link
                          to={`update-news-media/${item._id}`}
                          className="text-lg text-[#0077FF] bg-[#BBDDFF] w-7  h-7 rounded-lg flex items-center justify-center"
                        >
                          <TbEdit />
                        </Link>
                        <button
                          onClick={() => handleDelete(item._id)}
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
        )}
      </div>
    </section>
  );
};

export default AllNewsAndMedias;
