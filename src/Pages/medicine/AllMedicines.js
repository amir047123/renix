import { Box, CircularProgress } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { CiSearch } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";
import { TbEdit } from "react-icons/tb";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { server_url } from "../../Config/API";
import Pagination from "../../shared/Pagination/Pagination";

// ✅ Fetch Medicines Function
const fetchMedicines = async ({ queryKey }) => {
  const [, size, page, input] = queryKey;
  const response = await fetch(
    `${server_url}/medicine?size=${size}&page=${page}&filter=${input}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch medicines");
  }
  return response.json();
};

const AllMedicines = () => {
  const [input, setInput] = useState("");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);

  // ✅ Use TanStack Query for Fetching Medicines
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["medicines", size, page, input],
    queryFn: fetchMedicines,
    keepPreviousData: true, // Keeps previous data while fetching new data
  });

  // ✅ Extract Products & Quantity
  const products = data?.data || [];
  const quantity = data?.total || 0;

  // ✅ Handle Errors
  if (error) {
    toast.error("Error fetching medicines. Please try again.");
  }

  // ✅ Handle Delete
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
        fetch(`${server_url}/medicine/deleteMedicine/${id}`, {
          method: "DELETE",
        }).then((res) => {
          if (res.status === 200) {
            refetch(); // ✅ Refetch data after deletion
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          }
        });
      }
    });
  };

  const handleFilter = (e) => {
    e.preventDefault();
    setInput(e.target.filter.value);
    refetch();
  };

  const tableHeader = [
    "Serial No",
    "Medicine Name",
    "Category",
    "Price",
    "Generic",
    "Stock",
    "Status",
    "Strength",
    "Action",
  ];

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

        {/* ✅ Loading State (Applies to Table Rows Only) */}

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
              ) : products?.length === 0 ? (
                <tr>
                  <td colSpan={tableHeader.length} className="py-4 text-center">
                    No Medicine Found!
                  </td>
                </tr>
              ) : (
                products.map((product, i) => (
                  <tr
                    key={product._id}
                    className="bg-white border-b border-[#D0D2DA]"
                  >
                    <td className="px-6 py-4 text-xs font-medium text-gray-900">
                      {i + 1}
                    </td>
                    <td className="px-6 text-xs py-4">{product.name}</td>
                    <td className="px-6 text-xs py-4">
                      {product.medicineCategory}
                    </td>
                    <td className="px-6 text-xs py-4">{product.price}</td>
                    <td className="px-6 text-xs py-4">{product.genericName}</td>
                    <td className="px-6 text-xs py-4">{product.stock}</td>
                    <td className="px-6 text-xs py-4">
                      {product.medicineStatus}
                    </td>
                    <td className="px-6 text-xs py-4">{product.strength}</td>
                    <td className="px-6 text-xs py-4">
                      <span className="flex items-center justify-center gap-3">
                        <Link to={`edit-medicine/${product._id}`}>
                          <button className="text-lg text-[#0077FF] bg-[#BBDDFF] w-7 h-7 rounded-lg flex items-center justify-center">
                            <TbEdit />
                          </button>
                        </Link>
                        <button
                          onClick={() => handleDelete(product._id)}
                          className="text-lg text-[#F87171] bg-[#FEE2E2] w-7 h-7 rounded-lg flex items-center justify-center"
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

export default AllMedicines;
