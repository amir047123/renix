import React, { useEffect, useState } from "react";
import { MdPendingActions } from "react-icons/md";
import { SiGooglemeet } from "react-icons/si";
import { server_url } from "../../../../Config/API";
import AuthUser from "../../../../Hooks/authUser";
import UpdateHooks from "../../../../Hooks/UpdateHooks";
import Pagination from "../../../../shared/Pagination/Pagination";
import MeetLinkModal from "../MeetLinkModal";
const PendingAppointment = () => {
  const { userInfo } = AuthUser();
  const [refresh, setRefresh] = useState(false);
  const [appointment, setAppointment] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(6);
  let [isOpen, setIsOpen] = useState(false);
  const [id, setId] = useState("");

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  useEffect(() => {
    const url = `${server_url}/appointment/specific?page=${page}&&size=${size}&&doctorId=${
      userInfo?._id
    }&&appointmentStatus=${"pending"}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setAppointment(data?.data);
        setQuantity(data?.total);
        // console.log("data", data);
      });
  }, [page, size, refresh]);

  const handelRejected = async (id) => {
    const BASE_URL = `${server_url}/appointment/appointmentStatus/${id}`;
    await UpdateHooks(
      BASE_URL,
      { appointmentStatus: "rejected" },
      true,
      "Appointment Rejected"
    );
    setRefresh(!refresh);
  };
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
                    <span className="flex items-center gap-3">
                      <button
                        onClick={async () => {
                          await setId(item?._id);
                          openModal();
                        }}
                        title="Confirm Order"
                        className="text-lg text-green-600 bg-thirdLightPrimary/70 rounded-lg flex items-center justify-center px-1"
                      >
                        <span className="text-sm px-2 py-1">Confirm</span>{" "}
                        <SiGooglemeet />
                      </button>

                      <button
                        onClick={() => handelRejected(item?._id)}
                        title="Reject Order"
                        className="text-lg text-[#F87171] bg-[#FEE2E2] rounded-lg flex items-center justify-center"
                      >
                        <span className="text-sm px-2 py-1">Reject</span>{" "}
                        <MdPendingActions />
                      </button>
                    </span>
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
      <MeetLinkModal
        closeModal={closeModal}
        isOpen={isOpen}
        id={id}
        refresh={refresh}
        setRefresh={setRefresh}
      />
    </section>
  );
};

export default PendingAppointment;
