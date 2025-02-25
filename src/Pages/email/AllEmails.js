import { Icon } from "@iconify/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import DeleteHook from "../../Hooks/DeleteHook";
import Loading from "../../shared/Loading";

function AllEmails() {
  const [collectEmails, setcollectEmails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [refetch, setRefetch] = useState(false);
  const [searchTerm, setSearchTerm] = useState(""); // State for search term
  const [filtecollectEmails, setFiltecollectEmails] = useState([]); // State for filtered collectEmails

  useEffect(() => {
    async function fetchcollectEmails() {
      try {
        const response = await axios.get(
          "http://localhost:3001/api/v1/collectEmail/getCollectEmails"
        );
        setcollectEmails(response?.data?.data);
        setFiltecollectEmails(response?.data?.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    }

    fetchcollectEmails();
  }, [refetch]);

  useEffect(() => {
    // Handle initial load and clear input case
    if (!searchTerm) {
      setFiltecollectEmails(collectEmails);
    } else {
      handleSearch();
    }
  }, [searchTerm, collectEmails]);

  const handleSearch = () => {
    setFiltecollectEmails(
      collectEmails?.filter((collectEmails) =>
        collectEmails?.email.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  };

  if (loading) {
    return <Loading />;
  }

  if (error) return <div>Error: {error}</div>;

  return (
    <div className=" m-5">
      <div class=" ">
        <h1 class="text-4xl font-bold text-gray-900 leading-tight mb-2 border-b-2 border-gray-500 pb-2">
          All Email Collection
        </h1>
        <p class="text-lg text-gray-800 mb-8">
          Explore essential Email for health . Act now to secure the latest
          items
        </p>
      </div>

      <div className="flex relative rounded-md w-full mt-3 mb-3">
        <input
          type="text"
          placeholder="Enter Name , Email"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-3 rounded-md border border-r-white rounded-r-none border-gray-300 focus:outline-none"
        />
        <button
          onClick={handleSearch}
          className="inline-flex items-center gap-2 bg-secondary text-white text-lg font-semibold py-3 px-6 rounded-r-md hover:bg-secondary/90"
        >
          <span>Search</span>
          <span className="hidden md:block">
            <Icon icon="material-symbols:search" />
          </span>
        </button>
      </div>

      <div className=" mb-3">
        <span className=" text-gray-700">
          {" "}
          Showing {filtecollectEmails.length} Results
        </span>
      </div>

      <table
        className="w-full text-left rounded w-overflow-x-auto "
        cellspacing="0"
      >
        <tbody>
          <tr className="  bg-secondLightPrimary">
            <th
              scope="col"
              className="h-16 px-6 text-sm font-medium stroke-slate-700 text-slate-700 bg-slate-100"
            >
              #
            </th>

            <th
              scope="col"
              className="h-16 px-6 text-sm font-medium stroke-slate-700 text-slate-700 bg-slate-100"
            >
              Email{" "}
            </th>

            <th
              scope="col"
              className="h-16 px-6 text-sm font-medium stroke-slate-700 text-slate-700 bg-slate-100"
            >
              Action
            </th>
          </tr>
          {/* Map through the filtered collectEmails instead of all collectEmails */}
          {filtecollectEmails.map((collectEmails, index) => (
            <tr key={collectEmails._id} className="shadow">
              <td className="h-16 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500">
                {index + 1}
              </td>

              <td className="h-16 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500">
                {collectEmails?.email}
              </td>

              <td className="h-16 px-6  transition duration-300 border-slate-200  text-secondary text-lg flex gap-2 items-center cursor-pointer">
                <div
                  onClick={() => {
                    DeleteHook({
                      refetch,
                      setRefetch,
                      url: `http://localhost:3001/api/v1/collectEmail/deleteCollectEmail/${collectEmails?._id}`,
                    });
                  }}
                  className="border border-secondary py-2 px-3 rounded-md hover:bg-secondary/10 duration-300"
                >
                  <Icon icon="material-symbols:delete-outline" />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AllEmails;
