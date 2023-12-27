import React from "react";

const Shosthotarbarta = () => {
  return (
    <div>
      <h1 className=" text-center pt-5 text-3xl font-bold">
        রেনিক্স সুস্থতার বার্তা{" "}
      </h1>

      <div className="lg:grid lg:grid-cols-4 sm:grid sm:grid-cols-1 gap-5 p-10">
        <div className="rounded-lg shadow-lg bg-white max-w-sm">
          <a href="#!">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/PO0tQF98mqU"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              className="w-full rounded-t-lg"
            ></iframe>
          </a>
          <div className="p-6">
            <h5 className="text-gray-900 text-xl font-medium mb-2">
              নাদিয়া আনজুম মিমি - অভিনয় শিল্পী
            </h5>
            <p className="text-gray-700 text-base mb-4">
              রেনিক্স সুস্থতার বার্তা
            </p>
            <p className=" text-xs">
              <span className=" font-bold"> Powered </span> Renix Unani
              Laboratories Ltd.{" "}
            </p>
          </div>
        </div>

        <div className="rounded-lg shadow-lg bg-white max-w-sm">
          <a href="#!">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/tR44NSnAEtU"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              className="w-full rounded-t-lg"
            ></iframe>
          </a>
          <div className="p-6">
            <h5 className="text-gray-900 text-xl font-medium mb-2">
              অশোক বসাক - অভিনেতা ও কন্ঠ শিল্পী
            </h5>
            <p className="text-gray-700 text-base mb-4">
              রেনিক্স সুস্থতার বার্তা
            </p>
            <p className=" text-xs">
              <span className=" font-bold"> Powered </span> Renix Unani
              Laboratories Ltd.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shosthotarbarta;
