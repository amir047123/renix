import React, { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import SwitchToggle from "../../shared/switchToggle/SwitchToggle";
import doctorImg from "../../Assets/images/users/t3.jpg";

const AllDoctors = () => {
  const [enabled, setEnabled] = useState(false);
  return (
    <section className="py-10 md:py-14">
      <div className="container px-6 md:max-w-6xl w-full ">
        {/* search bar */}

        <form className="flex items-center justify-end text-right gap-3 mb-6">
          <label for="simple-search" className="text-sm text-textColor">
            Search
          </label>
          <div className="relative shadow-md shadow-gray-100 rounded">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <span className="text-xl text-textColor">
                <CiSearch />
              </span>
            </div>
            <input
              type="text"
              className="bg-[#F0FDF4] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 px-2.5 py-3 border-none"
              placeholder=""
              required
            />
          </div>
        </form>

        {/* doctor list table */}
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
                  Image
                </th>
                <th
                  scope="col"
                  className="px-6 py-3  text-[13px] font-medium capitalize"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-3  text-[13px] font-medium capitalize"
                >
                  Email
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
                  Address
                </th>
                <th
                  scope="col"
                  className="px-6 py-3  text-[13px] font-medium capitalize"
                >
                  Expertise
                </th>
                <th
                  scope="col"
                  className="px-6 py-3  text-[13px] font-medium capitalize"
                >
                  Status
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
                <td className="px-6 py-4">John Doe</td>
                <td className="px-6 py-4">
                  <img src={doctorImg} className="w-26  rounded" alt="doctor" />
                </td>
                <td className="px-6 py-4">john234@gmail.com</td>
                <td className="px-6 py-4">+88126856545</td>
                <td className="px-6 py-4">New York,USA</td>
                <td className="px-6 py-4">Cardiologist</td>
                <td className="px-6 py-4">
                  <SwitchToggle enabled={enabled} setEnabled={setEnabled} />
                </td>

                <td className="px-6 py-4">
                  <span className="flex items-center gap-3">
                    {/* <button className="text-lg text-[#0077FF] bg-[#BBDDFF] w-7  h-7 rounded-lg flex items-center justify-center">
                                            <TbEdit />
                                        </button> */}
                    <button className="text-lg text-[#F87171] bg-[#FEE2E2] w-7  h-7 rounded-lg flex items-center justify-center">
                      <RiDeleteBin6Line />
                    </button>
                  </span>
                </td>
              </tr>
              <tr className="bg-white border-b border-[#D0D2DA]">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  02
                </th>
                <td className="px-6 py-4">John Doe</td>
                <td className="px-6 py-4">
                  <img src={doctorImg} className="w-26  rounded" alt="doctor" />
                </td>
                <td className="px-6 py-4">john234@gmail.com</td>
                <td className="px-6 py-4">+88126856545</td>
                <td className="px-6 py-4">New York,USA</td>
                <td className="px-6 py-4">Cardiologist</td>
                <td className="px-6 py-4">
                  <SwitchToggle enabled={enabled} setEnabled={setEnabled} />
                </td>

                <td className="px-6 py-4">
                  <span className="flex items-center gap-3">
                    {/* <button className="text-lg text-[#0077FF] bg-[#BBDDFF] w-7  h-7 rounded-lg flex items-center justify-center">
                                            <TbEdit />
                                        </button> */}
                    <button className="text-lg text-[#F87171] bg-[#FEE2E2] w-7  h-7 rounded-lg flex items-center justify-center">
                      <RiDeleteBin6Line />
                    </button>
                  </span>
                </td>
              </tr>
              <tr className="bg-white border-b border-[#D0D2DA]">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  03
                </th>
                <td className="px-6 py-4">John Doe</td>
                <td className="px-6 py-4">
                  <img src={doctorImg} className="w-26  rounded" alt="doctor" />
                </td>
                <td className="px-6 py-4">john234@gmail.com</td>
                <td className="px-6 py-4">+88126856545</td>
                <td className="px-6 py-4">New York,USA</td>
                <td className="px-6 py-4">Cardiologist</td>
                <td className="px-6 py-4">
                  <SwitchToggle enabled={enabled} setEnabled={setEnabled} />
                </td>

                <td className="px-6 py-4">
                  <span className="flex items-center gap-3">
                    {/* <button className="text-lg text-[#0077FF] bg-[#BBDDFF] w-7  h-7 rounded-lg flex items-center justify-center">
                                            <TbEdit />
                                        </button> */}
                    <button className="text-lg text-[#F87171] bg-[#FEE2E2] w-7  h-7 rounded-lg flex items-center justify-center">
                      <RiDeleteBin6Line />
                    </button>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default AllDoctors;
