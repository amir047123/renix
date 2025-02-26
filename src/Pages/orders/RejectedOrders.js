import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import { server_url } from "../../Config/API";
import UpdateHooks from "../../Hooks/UpdateHooks";
import Loading from "../../shared/Loading";
import Pagination from "../../shared/Pagination/Pagination";

const RejectedOrders = () => {
  const [order, setOrder] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(6);
  const [refresh, setRefresh] = useState(false);
  const [loading, setLoading] = useState();
  useEffect(() => {
    setLoading(true);
    const url = `${server_url}/order/specific?page=${page}&&size=${size}&&fieldName=${"orderStatus"}&&fieldValue=${"rejected"}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setOrder(data?.data);
        setQuantity(data?.total);
        setLoading(false);
        // console.log("data", data);
      });
  }, [page, size]);
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
  if (loading) {
    return <Loading />;
  }
  return (
    <section className="py-10 md:py-14">
      <div className="container px-6 md:max-w-6xl w-full mb-5">
        {/* search bar */}

        <form className="flex items-center justify-end text-right gap-3 mb-6">
          <label for="simple-search" className="text-sm text-textColor">
            Search
          </label>
          <div className="relative ">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <span className="text-xl text-textColor">
                <CiSearch />
              </span>
            </div>
            <input
              type="text"
              className="bg-[#F0FDF4] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 px-2.5 py-3 border-none"
              placeholder="Search"
              required
            />
          </div>
        </form>

        {/* medicine list table */}
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border border-[#D0D2DA]  table_head rounded-lg">
              <tr className="py-4 rounded-lg">
                <th
                  scope="col"
                  className="px-6 py-3  text-[13px] font-medium capitalize"
                >
                  #
                </th>
                <th
                  scope="col"
                  className="px-6 py-3  text-[13px] font-medium capitalize"
                >
                  Medicine
                </th>
                {/* <th
                scope="col"
                className="px-6 py-3  text-[13px] font-medium capitalize"
              >
                Category
              </th> */}
                <th
                  scope="col"
                  className="px-6 py-3  text-[13px] font-medium capitalize"
                >
                  Price
                </th>
                {/* <th
                scope="col"
                className="px-6 py-3  text-[13px] font-medium capitalize"
              >
                Strength
              </th> */}
                {/* <th
                scope="col"
                className="px-6 py-3  text-[13px] font-medium capitalize"
              >
                Generic
              </th> */}
                <th
                  scope="col"
                  className="px-6 py-3  text-[13px] font-medium capitalize"
                >
                  Quantity
                </th>
                <th
                  scope="col"
                  className="px-6 py-3  text-[13px] font-medium capitalize"
                >
                  Customer
                </th>{" "}
                <th
                  scope="col"
                  className="px-6 py-3  text-[13px] font-medium capitalize"
                >
                  Phone
                </th>{" "}
                <th
                  scope="col"
                  className="px-6 py-3  text-[13px] font-medium capitalize"
                >
                  Address
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
              {order?.map((item, i) => (
                <tr
                  key={item?._id}
                  item={item}
                  className="bg-white border-b border-[#D0D2DA]"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {i + 1}
                  </th>
                  <td className="px-6 py-4">
                    {item?.order?.map((or) => (
                      <p>{or?.genericName}</p>
                    ))}
                  </td>
                  {/* <td className="px-6 py-4">
                  {item?.order?.map((or) => (
                    <p>{or?.medicineCategory}</p>
                  ))}
                </td> */}
                  <td className="px-6 py-4">
                    {item?.order?.map((or) => (
                      <p>{or?.price} BDT</p>
                    ))}
                  </td>
                  {/* <td className="px-6 py-4">
                  {item?.order?.map((or) => (
                    <p>{or?.strength}</p>
                  ))}
                </td> */}
                  {/* <td className="px-6 py-4">
                  {item?.order?.map((or) => (
                    <p>{or?.medicineType}</p>
                  ))}
                </td> */}
                  <td className="px-6 py-4">
                    {item?.order?.map((or) => (
                      <p>{or?.quantity}</p>
                    ))}
                  </td>

                  <td className="px-6 py-4">
                    {item?.customerDetails?.firstName}{" "}
                    {item?.customerDetails?.lastName}
                  </td>
                  <td className="px-6 py-4">{item?.customerDetails?.phone}</td>
                  <td className="px-6 py-4">
                    {item?.customerDetails?.address}
                  </td>

                  <td className="px-6 py-4">
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
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
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
