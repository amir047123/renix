import React, { useEffect, useState } from "react";
<<<<<<< HEAD
import DeleteHook from "../../Hooks/DeleteHook";
import Loading from "../../shared/Loading";

function AllEmails() {
  const [collectEmails, setcollectEmails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [refetch, setRefetch] = useState(false);
  const [searchTerm, setSearchTerm] = useState(""); // State for search term
  const [filtecollectEmails, setFiltecollectEmails] = useState([]); // State for filtered collectEmails

  useEffect(() => {
    async function fetchcollectEmails() {
      try {
        const response = await axios.get(
          "http://localhost:3001/api/v1/collectEmail/getCollectEmails"
        );
        setcollectEmails(response?.data?.data);
        setFiltecollectEmails(response?.data?.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    }

    fetchcollectEmails();
  }, [refetch]);
=======
import toast from "react-hot-toast";
import { RiDeleteBin6Line } from "react-icons/ri";
import { server_url } from "../../Config/API";
import Swal from "sweetalert2";
import { CiSearch } from "react-icons/ci";
import { Box, CircularProgress } from "@mui/material";
import Pagination from "../../shared/Pagination/Pagination";

const AllEmails = () => {
  const [emails, setEmails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [input, setInput] = useState("");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);
  const [quantity, setQuantity] = useState(0);
>>>>>>> 47bb5cedf53f5587c42b72757c4a2d7953614036

  useEffect(() => {
    fetchEmails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [size, page, input, refresh]);

  const fetchEmails = () => {
    setLoading(true); // Set loading to true when fetching data
    fetch(
      `${server_url}/collectEmail/getCollectEmails?size=${size}&page=${page}&filter=${input}`
    )
      .then((response) => response.json())
      .then((data) => {
        setEmails(data.data);
        setLoading(false); // Set loading to false when data is fetched
        setQuantity(data?.total);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false); // Set loading to false if there's an error
        toast.error("Error fetching data.");
      });
  };

  const handleDelete = (id) => {
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
        fetch(`${server_url}/collectEmail/deleteCollectEmail/${id}`, {
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

  const tableHeader = ["Serial No", "Email", "Action"];

  return (
    <section className="py-10 md:py-14">
      <div className="container px-6 md:max-w-7xl w-full">
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
              ) : emails?.length === 0 ? (
                <tr>
                  <td colSpan={tableHeader.length} className="py-4 text-center">
                    No Emails Found!
                  </td>
                </tr>
              ) : (
                emails.map((item, index) => (
                  <tr
                    key={index}
                    className="bg-white border-b border-[#D0D2DA]"
                  >
                    <td className="pl-8 pr-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {index + 1}
                    </td>
                    <td className="px-6 py-4">{item.email}</td>

                    <td className="px-6 py-4">
                      <span className="flex items-center justify-center gap-3">
                        <button
                          onClick={() => handleDelete(item._id)}
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

<<<<<<< HEAD
      <table
        className="w-full text-left rounded w-overflow-x-auto "
        cellspacing="0"
      >
        <tbody>
          <tr className="  bg-secondLightPrimary">
            <th
              scope="col"
              className="h-16 px-6 text-sm font-medium stroke-slate-700 text-slate-700 bg-slate-100"
            >
              #
            </th>

            <th
              scope="col"
              className="h-16 px-6 text-sm font-medium stroke-slate-700 text-slate-700 bg-slate-100"
            >
              Email{" "}
            </th>

            <th
              scope="col"
              className="h-16 px-6 text-sm font-medium stroke-slate-700 text-slate-700 bg-slate-100"
            >
              Action
            </th>
          </tr>
          {/* Map through the filtered collectEmails instead of all collectEmails */}
          {filtecollectEmails.map((collectEmails, index) => (
            <tr key={collectEmails._id} className="shadow">
              <td className="h-16 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500">
                {index + 1}
              </td>

              <td className="h-16 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500">
                {collectEmails?.email}
              </td>

              <td className="h-16 px-6  transition duration-300 border-slate-200  text-secondary text-lg flex gap-2 items-center cursor-pointer">
                <div
                  onClick={() => {
                    DeleteHook({
                      refetch,
                      setRefetch,
                      url: `http://localhost:3001/api/v1/collectEmail/deleteCollectEmail/${collectEmails?._id}`,
                    });
                  }}
                  className="border border-secondary py-2 px-3 rounded-md hover:bg-secondary/10 duration-300"
                >
                  <Icon icon="material-symbols:delete-outline" />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
=======
      {/* ✅ Pagination */}
      <Pagination
        quantity={quantity}
        page={page}
        setPage={setPage}
        size={size}
        setSize={setSize}
      />
    </section>
>>>>>>> 47bb5cedf53f5587c42b72757c4a2d7953614036
  );
};

export default AllEmails;
