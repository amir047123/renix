import { Box, CircularProgress } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { CiSearch } from "react-icons/ci";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { TbEdit } from "react-icons/tb";
import { server_url } from "../../Config/API";
import UpdateHooks from "../../Hooks/UpdateHooks";
import Pagination from "../../shared/Pagination/Pagination";
import Swal from "sweetalert2";

// ✅ Fetch Users Function
const fetchUsers = async ({ queryKey }) => {
  const [, size, page, input] = queryKey;
  const response = await fetch(
    `${server_url}/user?size=${size}&page=${page}&filter=${input}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }

  const data = await response.json();
  return data;
};

const AllAccounts = () => {
  const [input, setInput] = useState("");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);

  // ✅ Use TanStack Query for Fetching Users
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["users", size, page, input],
    queryFn: fetchUsers,
    keepPreviousData: true,
  });

  // ✅ Extract Users & Quantity
  const users = data?.data || [];
  const quantity = data?.total || 0;

  // ✅ Handle Errors
  if (error) {
    toast.error("Error fetching users. Please try again.");
  }

  // ✅ Handle Filter Submit
  const handleFilter = (e) => {
    e.preventDefault();
    setInput(e.target.filter.value);
    refetch();
  };

  // ✅ Handle Role Updates
  const updateUserRole = async (id, role, successMessage) => {
    const BASE_URL = `${server_url}/user/${id}`;
    await UpdateHooks(BASE_URL, { role }, true, successMessage);
    refetch();
  };

  const deleteUser = (id) => {
    const BASE_URL = `${server_url}/user/${id}`;
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
        fetch(BASE_URL, { method: "DELETE" }).then((res) => {
          if (res.status === 200) {
            setPage(0);
            refetch();
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          }
        });
      }
    });
  };

  const tableHeader = ["Serial No", "Name", "Email", "Phone", "Role", "Action"];

  return (
    <section className="py-10 md:py-14">
      <div className="container px-6 md:max-w-7xl w-full">
        {/* ✅ Search Bar */}
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
              refetch();
            }}
            className="bg-red-500 text-white px-4 py-2 rounded-md"
          >
            Reset
          </button>
        </form>

        {/* ✅ Loading State */}

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
              {isLoading ? (
                <tr>
                  <td colSpan={tableHeader.length}>
                    <Box className="flex justify-center items-center h-40">
                      <CircularProgress size={50} color="primary" />
                    </Box>
                  </td>
                </tr>
              ) : users?.length === 0 ? (
                <tr>
                  <td colSpan={tableHeader.length} className="py-4 text-center">
                    No User Found!
                  </td>
                </tr>
              ) : (
                users.map((user, i) => (
                  <tr
                    key={user._id}
                    className={`${
                      user.role === "admin"
                        ? "bg-red-100 border-red-200 rounded-lg"
                        : "bg-white border-[#D0D2DA] border-b"
                    }`}
                  >
                    <td className="pl-8 pr-6 py-4 font-medium text-gray-900 rounded-l-lg">
                      {i + 1}
                    </td>
                    <td className="px-6 py-4">{user.fullName}</td>
                    <td className="px-6 py-4">{user.email}</td>
                    <td className="px-6 py-4">{user.number}</td>
                    <td className="px-6 py-4">{user.role}</td>

                    <td className="px-6 py-4 rounded-r-lg">
                      {user.role !== "admin" && (
                        <div className="flex items-center gap-3 justify-center">
                          {user.role !== "doctor" ? (
                            <button
                              onClick={() =>
                                updateUserRole(
                                  user._id,
                                  "doctor",
                                  "User promoted to Doctor"
                                )
                              }
                              className="text-white bg-primary px-2 py-1 rounded-lg flex items-center gap-1"
                            >
                              <TbEdit className="text-lg" /> Make Doctor
                            </button>
                          ) : (
                            <button
                              onClick={() =>
                                updateUserRole(
                                  user._id,
                                  "user",
                                  "Doctor demoted to User"
                                )
                              }
                              className="text-red-500 bg-red-100 px-2 py-1 rounded-lg flex items-center gap-1"
                            >
                              <TbEdit className="text-lg" /> Make User
                            </button>
                          )}

                          <button
                            onClick={() => {
                              deleteUser(user._id);
                            }}
                            className="text-red-500 bg-red-100 px-2 py-1 rounded-lg flex items-center gap-1"
                          >
                            <RiDeleteBin2Fill className="text-lg" /> Delete
                          </button>
                        </div>
                      )}
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

export default AllAccounts;
