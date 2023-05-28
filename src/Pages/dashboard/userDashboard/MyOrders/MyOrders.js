import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { MdPendingActions } from "react-icons/md";
const MyOrders = () => {
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
                  Seriol No
                </th>
                <th
                  scope="col"
                  className="px-6 py-3  text-[13px] font-medium capitalize"
                >
                  Medicine Name
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
                  Price
                </th>
                <th
                  scope="col"
                  className="px-6 py-3  text-[13px] font-medium capitalize"
                >
                  Strength
                </th>
                <th
                  scope="col"
                  className="px-6 py-3  text-[13px] font-medium capitalize"
                >
                  Generic
                </th>
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
              <tr className="bg-white border-b border-[#D0D2DA]">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  01
                </th>
                <td className="px-6 py-4">Napa</td>
                <td className="px-6 py-4">Nasal</td>
                <td className="px-6 py-4">$20</td>
                <td className="px-6 py-4">50mg</td>
                <td className="px-6 py-4">Paracetamol</td>
                <td className="px-6 py-4">40</td>

                <td className="px-6 py-4">01215485544</td>
                <td className="px-6 py-4">Dhaka,Bangladesh</td>

                <td className="px-6 py-4">
                  {true ? (
                    <button
                      title="Confirm Order"
                      className="text-lg text-green-600 bg-thirdLightPrimary rounded-lg flex items-center justify-center"
                    >
                      <span className="text-sm px-2 py-1">Accepted</span>{" "}
                      <AiOutlineCheckCircle />
                    </button>
                  ) : (
                    <button
                      title="Reject Order"
                      className="text-lg text-[#F87171] bg-[#FEE2E2] rounded-lg flex items-center justify-center"
                    >
                      <span className="text-sm px-2 py-1">Pending</span>{" "}
                      <MdPendingActions />
                    </button>
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default MyOrders;
