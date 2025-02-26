import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { Box, CircularProgress } from "@mui/material";
import UpdateHooks from "../../Hooks/UpdateHooks";
import { server_url } from "../../Config/API";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
import { Icon } from "@iconify/react";
import Pagination from "../../shared/Pagination/Pagination";

const RejectedOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [input, setInput] = useState("");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    fetchOrders();
  }, [size, page, input, refresh]);

  const fetchOrders = () => {
    setLoading(true); // Set loading to true when fetching data
    fetch(
      `${server_url}/order/specific?page=${page}&size=${size}&fieldName1=orderStatus&fieldValue1=rejected&filter=${input}`
    )
      .then((response) => response.json())
      .then((data) => {
        setOrders(data.data);
        setLoading(false); // Set loading to false when data is fetched
        setQuantity(data?.total);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false); // Set loading to false if there's an error
        toast.error("Error fetching data.");
      });
  };

  const handelAccept = async (id) => {
    const BASE_URL = `${server_url}/order/orderStatus/${id}`;
    await UpdateHooks(
      BASE_URL,
      { orderStatus: "accept" },
      true,
      "Order Accepted"
    );
    setRefresh(!refresh);
  };

  const handelRejected = async (id) => {
    const BASE_URL = `${server_url}/order/updateOrderById/${id}`;
    await UpdateHooks(
      BASE_URL,
      { orderStatus: "rejected" },
      true,
      "Order Rejected"
    );
    setRefresh(!refresh);
  };

  // ✅ Handle Filter Submit
  const handleFilter = (e) => {
    e.preventDefault();
    setInput(e.target.filter.value);
    setRefresh((prev) => !prev);
  };

  const tableHeader = [
    "Serial No",
    "Medicine",
    "Price",
    "Quantity",
    "Customer",
    "Phone",
    "Address",
    "Action",
  ];

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
              ) : orders?.length === 0 ? (
                <tr>
                  <td colSpan={tableHeader.length} className="py-4 text-center">
                    No Pending Orders Found!
                  </td>
                </tr>
              ) : (
                orders.map((item, index) => (
                  <tr
                    key={index}
                    className="bg-white border-b border-[#D0D2DA]"
                  >
                    <td className="pl-8 pr-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {index + 1}
                    </td>
                    <td className="px-6 py-4">
                      {item?.order?.map((or) => (
                        <p>{or?.genericName}</p>
                      ))}
                    </td>
                    <td className="px-6 py-4">
                      {item?.order?.map((or) => (
                        <p>{or?.price} BDT</p>
                      ))}
                    </td>

                    <td className="px-6 py-4">
                      {item?.order?.map((or) => (
                        <p>{or?.quantity}</p>
                      ))}
                    </td>
                    <td className="px-6 py-4">
                      {item?.customerDetails?.firstName}{" "}
                      {item?.customerDetails?.lastName}
                    </td>

                    <td className="px-6 py-4">
                      {item?.customerDetails?.phone}
                    </td>
                    <td className="px-6 py-4">
                      {item?.customerDetails?.address}
                    </td>

                    <td className="px-6 py-4">
                      <span className="flex items-center gap-3">
                        <button
                          onClick={() => handelAccept(item?._id)}
                          title="Confirm Order"
                          className="text-lg text-[#0077FF] bg-[#BBDDFF] w-7  h-7 rounded-lg flex items-center justify-center"
                        >
                          <AiOutlineCheckCircle />
                        </button>

                        <Link to={`/adminDashboard/view-order/${item?._id}`}>
                          <button
                            title="Reject Order"
                            className="text-lg text-green-500 bg-[#FEE2E2] w-7  h-7 rounded-lg flex items-center justify-center"
                          >
                            <Icon icon="carbon:view"></Icon>
                          </button>
                        </Link>

                        <button
                          onClick={() => handelRejected(item?._id)}
                          title="Reject Order"
                          className="text-lg text-[#F87171] bg-[#FEE2E2] w-7  h-7 rounded-lg flex items-center justify-center"
                        >
                          <AiOutlineCloseCircle />
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

      {/* ✅ Pagination */}
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

export default RejectedOrders;
