import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import {
  BsArrowRight,
  BsInstagram,
  BsLinkedin,
  BsYoutube,
} from "react-icons/bs";
import { FaFacebook, FaInfoCircle, FaPhoneAlt } from "react-icons/fa";
import { HiOutlineLightBulb } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { server_url } from "../../../Config/API";

import logo from "../../../Assets/images/logo.svg";
import neemo from "../../../Assets/images/neemo-pimple.svg";

const fetchMedicines = async () => {
  const response = await fetch(
    `${server_url}/medicine?size=${1}&isSpecial=yes`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch medicine");
  }
  return response.json();
};

const RenixOverview = () => {
  const [element, setElement] = useState(null);
  const scrollToSpecializedProducts = () => {
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
    }
  };
  useEffect(() => {
    setElement(document.getElementById("specializedProducts"));
  }, []);

  const { data } = useQuery({
    queryKey: ["medicine", 1],
    queryFn: fetchMedicines,
    keepPreviousData: true,
  });

  const product = data?.data?.[0] || [];

  return (
    <div className="bg-gradient-to-r from-thirdLightPrimary via-whiteSmoke to-thirdLightPrimary py-20">
      {/* Section Header */}
      <div className="text-center mb-10">
        <h3 className="bg-thirdLightPrimary w-44 mx-auto text-sm font-semibold text-gray-700 py-1 rounded-md text-center">
          🌿 NATURE WITH RENIX
        </h3>
        <h1 className="text-secondary text-center font-bold text-3xl md:text-4xl mt-3 uppercase">
          Discover Innovation
        </h1>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* ✅ Help Line Card */}
          <div className="p-6 border-2 border-primary rounded-xl bg-white shadow-lg">
            <div className="flex items-center space-x-4">
              <div className="text-primary text-4xl">
                <FaPhoneAlt />
              </div>
              <h2 className="text-accent text-xl font-semibold">
                Help Line for You
              </h2>
            </div>
            <p className="text-gray-700 mt-3">Talk to our representative at:</p>
            <p className="text-lg font-semibold text-primary">
              📞 01618-883045
            </p>
            <p className="text-gray-700 mt-2 flex items-center">
              <MdEmail className="text-lg text-primary mr-2" />{" "}
              renixoffice@gmail.com
            </p>

            {/* ✅ Updated Call Button */}
            <a href="tel:01618883045">
              <button className="mt-4 flex items-center justify-center bg-primary text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition-all">
                Call Now <BsArrowRight className="ml-2" />
              </button>
            </a>
          </div>

          {/* ✅ Newly Launched Product Card */}
          <div className="p-6 border-2 border-primary rounded-xl bg-white shadow-lg">
            <div className="flex items-center space-x-4">
              <div className="text-primary text-4xl">
                <HiOutlineLightBulb />
              </div>
              <h2 className="text-accent text-xl font-semibold">
                Newly Launched Product
              </h2>
            </div>
            <div className="flex items-center justify-between mt-4">
              <div>
                <h2 className="text-accent font-semibold text-lg">
                  {product?.name || "Neemo Pimple Removal"}
                </h2>
                <p className="text-gray-600 text-sm mt-1">
                  {product?.description ||
                    "Natural and Effective Blood Purifier."}
                </p>
              </div>
              <img
                src={product?.img || neemo}
                alt="Neemo Product"
                className="w-24 h-24 object-contain"
              />
            </div>
            <button
              onClick={scrollToSpecializedProducts}
              className="mt-4 flex items-center bg-primary text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition-all"
            >
              See More Products <BsArrowRight className="ml-2" />
            </button>
          </div>

          {/* ✅ Know About Company */}
          <div className="p-6 border-2 border-primary rounded-xl bg-white shadow-lg">
            <div className="flex items-center space-x-4">
              <div className="text-primary text-4xl">
                <FaInfoCircle />
              </div>
              <h2 className="text-accent text-xl font-semibold">
                Know About Company
              </h2>
            </div>
            <div className="bg-gray-100 rounded-lg mt-4">
              <iframe
                title="video"
                src="https://www.youtube.com/embed/PgJB9aOmARc?si=H0HzpjApfRBRlWCQ"
                className="w-full h-40 rounded-lg"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div className="flex justify-between items-center mt-4">
              <p className="text-gray-600 text-sm">Stay connected with us:</p>
              <div className="flex space-x-3">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FaFacebook className="w-5 h-5 text-blue-600 hover:text-blue-800 transition" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <BsInstagram className="w-5 h-5 text-pink-600 hover:text-pink-800 transition" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <BsLinkedin className="w-5 h-5 text-blue-700 hover:text-blue-900 transition" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <BsYoutube className="w-5 h-5 text-red-600 hover:text-red-800 transition" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ✅ Company Overview */}
        <div className="mt-20 w-[90%] ">
          <div className="">
            <img className="w-20" src={logo} alt="Renix Logo" />
            <h2 className="text-3xl font-bold text-accent mt-5">
              Renix Unani Laboratories Limited
            </h2>
            <p className="text-gray-600 text-lg mt-3">
              Healthy Living Natural Solution
            </p>
            <p>
              Renix Unani Laboratories Limited is a company dedicated to
              producing high-quality, natural medicines for healthy living. They
              specialize in the Unani treatment system, which has been used for
              over 5000 years and has been proven to be successful and effective
              without harmful side effects. Renix Laboratories is committed to
              promoting the benefits of natural medicine and contributing to the
              healthcare industry through the production of complete medicines
              made from all natural herbs.
            </p>
          </div>

          <Link to="/about">
            <button className="mt-4 px-8 py-3  bg-primary text-white rounded-full hover:bg-opacity-90 transition">
              Learn More About Us
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RenixOverview;
