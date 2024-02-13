import React, { useEffect, useState } from "react";
import { TbEdit } from "react-icons/tb";
import { RiDeleteBin6Line } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import Pagination from "../../shared/Pagination/Pagination";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import DeleteHook from "../../Hooks/DeleteHook";
import Loading from "../../shared/Loading";

const AllMedicines = () => {
  const [products, setProducts] = useState([]);
  // for pagination
  const [quantity, setQuantity] = useState(0);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(50);
  const [refresh, setRefresh] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const url = ` https://renixserver.niroghealthplus.com/api/v1/medicine?size=${size}&page=${page}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data?.data);
        setQuantity(data?.total);
      })
      .finally(() => setLoading(false));

  }, [size, page, refresh]);

  const handelDelete = (id) => {
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
        fetch(` https://renixserver.niroghealthplus.com/api/v1/medicine/deleteMedicine/${id}`, {
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
  if (loading) {
    return <Loading />;
  }
  return (
    <section className="py-10 md:py-14">
      <div className="container px-6 md:max-w-6xl w-full ">
        {/* search bar */}
        <form className="flex items-center text-right gap-3 mb-6 w-full">
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
              className="bg-[#F0FDF4] w-full text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  pl-10 px-2.5 py-3 border-none"
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
                  className="px-6 py-3 text-xs font-medium capitalize"
                >
                  Seriol No
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-xs font-medium capitalize"
                >
                  Medicine Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-xs font-medium capitalize"
                >
                  Category
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-xs font-medium capitalize"
                >
                  Price
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-xs font-medium capitalize"
                >
                  Generic
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-xs font-medium capitalize"
                >
                  Stock
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-xs font-medium capitalize"
                >
                  Status
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-xs font-medium capitalize"
                >
                  Strength
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-xs font-medium capitalize"
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {products?.map((product, i) => (
                <tr
                  key={product?._id}
                  product={product}
                  className="bg-white border-b border-[#D0D2DA]"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 text-xs font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {i + 1}
                  </th>
                  <td className="px-6 text-xs py-4">{product?.name}</td>
                  <td className="px-6 text-xs py-4">{product?.medicineCategory}</td>
                  <td className="px-6 text-xs py-4">{product?.price}</td>
                  <td className="px-6 text-xs py-4">{product?.genericName}</td>
                  <td className="px-6 text-xs py-4">{product?.stock}</td>
                  <td className="px-6 text-xs py-4">{product?.medicineStatus}</td>
                  <td className="px-6 text-xs py-4">{product?.strength}</td>
                  <td className="px-6 text-xs py-4">
                    <span className="flex items-center gap-3">
                      <Link to={`edit-medicine/${product?._id}`}>
                        {" "}
                        <button className="text-lg text-[#0077FF] bg-[#BBDDFF] w-7  h-7 rounded-lg flex items-center justify-center">
                          <TbEdit />
                        </button>
                      </Link>
                      <button
                        onClick={() => handelDelete(product?._id)}
                        className="text-lg text-[#F87171] bg-[#FEE2E2] w-7  h-7 rounded-lg flex items-center justify-center"
                      >
                        <RiDeleteBin6Line />
                      </button>
                    </span>
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

export default AllMedicines;
