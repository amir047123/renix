import React, { useEffect, useState } from "react";
import { TbEdit } from "react-icons/tb";
import { CiSearch } from "react-icons/ci";
import Pagination from "../../shared/Pagination/Pagination";
import { server_url } from "../../Config/API";
import UpdateHooks from "../../Hooks/UpdateHooks";
import { RiDeleteBin2Fill } from "react-icons/ri";
import Loading from "../../shared/Loading";

const AllAccounts = () => {
  const [input, setInput] = useState("");
  const [users, setUsers] = useState([]);
  // for pagination
  const [quantity, setQuantity] = useState(0);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(1000);
  const [refresh, setRefresh] = useState(false);
  const [loading,setLoading]= useState()

  useEffect(() => {
    setLoading(true)
    const url = ` https://renixserver.niroghealthplus.com/api/v1/user?size=${size}&page=${page}&filter=${input}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUsers(data?.data);
        setQuantity(data?.total);
        setLoading(false)
      });
  }, [size, page, refresh, input]);
  const handelFilter = (e) => {
    e.preventDefault();
    setInput(e.target.filter.value);
  };
  const makeDoctor = async (id) => {
    const BASE_URL = `${server_url}/user/${id}`;
    await UpdateHooks(
      BASE_URL,
      { role: "doctor" },
      true,
      "This user has been promoted to Doctor"
    );
    setRefresh(!refresh);
  };
  const makeUser = async (id) => {
    const BASE_URL = `${server_url}/user/${id}`;
    await UpdateHooks(
      BASE_URL,
      { role: "user" },
      true,
      "This Doctor has been demoted to User"
    );
    setRefresh(!refresh);
  };
  const deleteUser = async (id) => {
    const BASE_URL = `${server_url}/user/${id}`;
    await fetch(BASE_URL, { method: "DELETE" });
    setRefresh(!refresh);
  };

if(loading){
  return <Loading/>
}

  return (
    <section className="py-10 md:py-14">
      <div className="container px-6 md:max-w-6xl w-full ">
        {/* search bar */}
        <form
          onSubmit={handelFilter}
          className="flex items-center justify-end text-right gap-3 mb-6"
        >
          <div className="relative ">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <span className="text-xl text-textColor">
                <CiSearch />
              </span>
            </div>
            <input
              name="filter"
              type="text"
              className="bg-[#F0FDF4] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 px-2.5 py-3 border-none"
              placeholder="Search"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-primary text-white px-2 py-2 rounded-md"
          >
            Filter
          </button>
          <div
            onClick={() => {
              setInput("");
            }}
            className="bg-red-500 text-white px-2 py-2 rounded-md cursor-pointer"
          >
            Reset{" "}
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
                  Seriol No
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
                  Role
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
              {users?.map((user, i) => (
                <tr
                  key={user?._id}
                  user={user}
                  className={
                    user?.role === "admin"
                      ? "bg-red-100 border-b border-red-200"
                      : "bg-white border-b border-[#D0D2DA]"
                  }
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {i + 1}
                  </th>
                  <td className="px-6 py-4">{user?.fullName}</td>
                  <td className="px-6 py-4">{user?.email}</td>
                  <td className="px-6 py-4">{user?.number}</td>
                  <td className="px-6 py-4">{user?.role}</td>

                  <td className="px-6 py-4">
                    {user?.role !== "admin" && (
                      <span className="flex items-center gap-3">
                        {user?.role !== "doctor" ? (
                          <button
                            onClick={() => makeDoctor(user?._id)}
                            className=" text-white bg-primary p-1  rounded-lg flex items-center justify-center gap-1"
                          >
                            <TbEdit className="text-lg" /> Make_Doctor
                          </button>
                        ) : (
                          <button
                            onClick={() => makeUser(user?._id)}
                            className="text-[#F87171] bg-[#FEE2E2] p-1  rounded-lg flex items-center justify-center gap-1"
                          >
                            <TbEdit className="text-lg" /> Make_User
                          </button>
                        )}

                        <button
                          onClick={() => deleteUser(user?._id)}
                          className="text-[#F87171] bg-[#FEE2E2] p-1 rounded-lg flex items-center justify-center gap-1"
                        >
                          <RiDeleteBin2Fill className="text-lg" /> Delete
                        </button>
                      </span>
                    )}
                  </td>
                </tr>
              ))}
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

export default AllAccounts;
