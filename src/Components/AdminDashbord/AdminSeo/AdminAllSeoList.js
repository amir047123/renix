import { Icon } from "@iconify/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DeleteHook from "../../../Hooks/DeleteHook";
import useGetSeo from "../../../Hooks/useGetSeo";

const AdminAllSeoList = () => {
  const [refetch, setRefetch] = useState(false);
  const data = useGetSeo("product_details_page");

  const [allSeo, setAllSeo] = useState([]);
  useEffect(() => {
    const fetchAllSeo = async () => {
      const { data } = await axios.get(
        "https://server.renixlaboratories.com.bd/api/v1/seo/getAllSeo"
      );
      // console.log(data);
      setAllSeo(data?.data);
    };
    fetchAllSeo();
  }, []);

  return (
    <div>
      <h1 class="text-4xl font-bold capitalize text-gray-900 leading-tight mb-2 border-b-2 border-gray-500 pb-2 px-6 mt-5">
        All SEO List
      </h1>

      <div className="w-full overflow-x-auto px-5 py-2">
        <table className="w-full text-left rounded  " cellspacing="0">
          <tbody>
            <tr className=" ">
              <th
                scope="col"
                className="h-16 px-6  text-sm font-medium stroke-slate-700 text-slate-700 bg-slate-100"
              >
                #
              </th>

              <th
                scope="col"
                className="h-16 px-6 text-sm font-medium stroke-slate-700 text-slate-700 bg-slate-100"
              >
                Page
              </th>
              <th
                scope="col"
                className="h-16 px-6 text-sm font-medium stroke-slate-700 text-slate-700 bg-slate-100"
              >
                Img
              </th>
              <th
                scope="col"
                className="h-16 px-6 text-sm font-medium stroke-slate-700 text-slate-700 bg-slate-100"
              >
                tilte
              </th>

              <th
                scope="col"
                className="h-16 px-6 text-sm font-medium stroke-slate-700 text-slate-700 bg-slate-100"
              >
                Action
              </th>
            </tr>
            {/* Map all seo */}
            {allSeo?.map((seo, index) => (
              <tr key={seo._id} className="shadow">
                <td className="h-16 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500">
                  {index + 1}
                </td>
                <td className="h-16 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500">
                  {seo?.page}
                </td>
                <td className="h-16 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500">
                  <img
                    className="w-12 border p-1 rounded-md shadow"
                    src={seo?.metaImage}
                    alt="img"
                  ></img>
                </td>

                <td className="h-16 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500">
                  {seo?.metaTitle}
                </td>

                <td className="h-16 px-6  transition duration-300 border-slate-200  text-secondary text-lg flex gap-2 items-center cursor-pointer">
                  <div
                    onClick={() => {
                      DeleteHook({
                        refetch,
                        setRefetch,
                        setAllData: setAllSeo,
                        id: seo?._id,
                        url: `https://server.renixlaboratories.com.bd/api/v1/seo/deleteSeo/${seo?._id}`,
                      });
                    }}
                    className="border border-secondary py-2 px-3 rounded-md hover:bg-secondary/10 duration-300"
                  >
                    <Icon icon="material-symbols:delete-outline" />
                  </div>

                  <Link to={`/adminDashboard/update-seo/${seo._id}`}>
                    <div className="border border-secondary py-2 px-3 rounded-md hover:bg-secondary/10 duration-300">
                      <Icon icon="uil:edit"></Icon>
                    </div>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminAllSeoList;
