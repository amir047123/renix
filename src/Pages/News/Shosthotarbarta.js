import { CircularProgress } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import DynamicMetaTitle from "../../Components/DynamicMetaTitle";
import useGetSeo from "../../Hooks/useGetSeo";
import { server_url } from "../../Config/API";

const fetchShosthotarbarta = async () => {
  const response = await fetch(
    `${server_url}/newsAndMedia/specific?fieldName1=newsCategory&fieldValue1=Shosthotarbarta`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch Shosthotarbarta data.");
  }
  const data = await response.json();
  return data.data;
};

const Shosthotarbarta = () => {
  const metaData = useGetSeo("shasthokothar_barta_page");

  const {
    data: shosthotarbartaData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["shosthotarbartaData"],
    queryFn: fetchShosthotarbarta,
  });

  if (isError) {
    toast.error("Error fetching Shosthotarbarta data.");
  }

  return (
    <div>
      <DynamicMetaTitle
        title={metaData?.metaTitle}
        metaImage={metaData?.metaImage}
        description={metaData?.metaDescription}
        canonicalUrl={metaData?.canonicalUrl}
      />

      <section className="flex flex-col max-w-6xl min-h-screen px-4 py-10 mx-auto sm:px-6">
        <div className="flex flex-wrap items-center justify-between mb-8">
          <h2 className="mr-10 text-4xl font-bold leading-none md:text-5xl text-gray-800">
            Renix Unani Laboratories Ltd Shosthotar Barta
          </h2>
          <Link
            to="https://www.youtube.com/@renixlaboratoriesltd"
            target="_blank"
            className="block pb-1 mt-2 text-lg font-bold text-blue-600 uppercase border-b border-transparent hover:border-blue-600 transition"
          >
            Go To YouTube Channel →
          </Link>
        </div>

        {/* Loading State with MUI Circular Progress */}
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <CircularProgress size={80} thickness={4} color="primary" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-2">
            {shosthotarbartaData?.map((news, index) => (
              <a
                href={news?.youtubeLink}
                target="_blank"
                className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
                key={index}
                rel="noreferrer"
              >
                <img
                  alt={news?.newsTitle}
                  src={news?.newsImage}
                  className="h-64 md:h-80 w-full object-cover"
                  style={{ maxHeight: "400px", width: "100%" }}
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">
                    {news?.newsTitle}
                  </h3>
                  <p
                    className="mt-2 text-gray-700"
                    dangerouslySetInnerHTML={{
                      __html: news?.newsDescription.slice(0, 100) + "...",
                    }}
                  ></p>
                  <p className="mt-3 text-sm font-semibold text-blue-500">
                    Watch on YouTube →
                  </p>
                </div>
              </a>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Shosthotarbarta;
