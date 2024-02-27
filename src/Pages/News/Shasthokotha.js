import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Loading from "../../shared/Loading";

const Shasthokotha = () => {
  const [newsAndMedia, setNewsAndMedia] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchNewsAndMedia();
  }, []);

  const fetchNewsAndMedia = () => {
    setLoading(true);
    fetch("http://localhost:5000/api/v1/newsAndMedia/specific?fieldName=newsCategory&fieldValue=Shasthokotha")
      .then((response) => response.json())
      .then((data) => {
        setNewsAndMedia(data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        toast.error("Error fetching data.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div>
      <section className="flex flex-col justify-center max-w-6xl min-h-screen px-4 py-10 mx-auto sm:px-6">
        <div className="flex flex-wrap items-center justify-between mb-8">
          <h2 className="mr-10 text-3xl font-bold leading-none md:text-5xl">
            Renix Unani Laboratories Ltd Shasthokotha
          </h2>
          <a
            href="https://www.youtube.com/@renixlaboratoriesltd"
            target="_blank"
            className="block pb-1 mt-2 text-base font-black text-blue-600 uppercase border-b border-transparent hover:border-blue-600"
          >
            Go To YouTube Channel
          </a>
        </div>
        {loading ? (
          <Loading />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 px-2">
            {newsAndMedia.map((news, index) => (
              <a href={news?.youtubeLink} target="_blank" className="px-2 py-2 shadow-md" key={index}>
                <img
                  alt=""
                  src={news?.newsImage}
                  className="h-64 md:h-80 lg:h-96 w-full object-cover object-center"
                  style={{ maxHeight: "400px", width: "100%" }}
                />

                <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">{news?.newsTitle}</h3>

                <p
                  className="mt-2 text-gray-700"
                  dangerouslySetInnerHTML={{
                    __html: news?.newsDescription.slice(0, 250),
                  }}
                ></p>
              </a>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Shasthokotha;
