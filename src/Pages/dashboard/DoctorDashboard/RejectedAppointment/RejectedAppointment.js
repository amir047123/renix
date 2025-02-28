import React, { useEffect, useState } from "react";
import { MdPendingActions } from "react-icons/md";
import AuthUser from "../../../../Hooks/authUser";
import Pagination from "../../../../shared/Pagination/Pagination";
import { server_url } from "../../../../Config/API";

const RejectedAppointment = () => {
  const [appointment, setAppointment] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(6);
  const { userInfo } = AuthUser();

  useEffect(() => {
<<<<<<< HEAD
    const url = `http://localhost:3001/api/v1/appointment/specific?page=${page}&&size=${size}&&doctorId=${
=======
    const url = `${server_url}/appointment/specific?page=${page}&&size=${size}&&doctorId=${
>>>>>>> 47bb5cedf53f5587c42b72757c4a2d7953614036
      userInfo?._id
    }&&appointmentStatus=${"rejected"}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setAppointment(data?.data);
        setQuantity(data?.total);
      });
  }, [page, size, userInfo?._id]);
  return (
    <section className="py-10 md:py-14">
      <div className="container px-6 md:max-w-6xl w-full ">
        {/* search bar */}

        <form className="flex items-center justify-end text-right gap-3 mb-6"></form>

        {/* medicine list table */}
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border border-[#D0D2DA]  table_head rounded-lg">
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
                  Patient Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-3  text-[13px] font-medium capitalize"
                >
                  Phone
                </th>
                <th
                  scope="col"
                  className="px-6 py-3  text-[13px] font-medium capitalize"
                >
                  Time
                </th>
                <th
                  scope="col"
                  className="px-6 py-3  text-[13px] font-medium capitalize"
                >
                  Date
                </th>

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
              {appointment?.map((item, i) => (
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
                    <p>{item?.name}</p>
                  </td>
                  <td className="px-6 py-4">
                    <p>{item?.phone}</p>
                  </td>
                  <td className="px-6 py-4">
                    <p>{item?.time}</p>
                  </td>
                  <td className="px-6 py-4">
                    <p>{item?.date}</p>
                  </td>
                  <td className="px-6 py-4">
                    <p>{item?.area}</p>
                  </td>

                  <td className="px-6 py-4">
                    <button
                      title="Reject Order"
                      className="text-lg text-[#F87171] bg-[#FEE2E2] rounded-lg flex items-center justify-center"
                    >
                      <span className="text-sm px-2 py-1">
                        {item?.appointmentStatus}
                      </span>{" "}
                      <MdPendingActions />
                    </button>
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

export default RejectedAppointment;
