import React from "react";
import {
  BsArrowRight,
  BsInstagram,
  BsLinkedin,
  BsYoutube,
} from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
import leave from "../../../Assets/images/leave.svg";
import logo from "../../../Assets/images/logo.svg";
import neemo from "../../../Assets/images/neemo-pimple.svg";
import bg from "../../../Assets/images/overview-bg.svg";
import support from "../../../Assets/images/support.svg";
import time from "../../../Assets/images/time.svg";

const RenixOverview = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className="bg-[#ECF2F8] min-h-screen py-20"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Help Line Card */}
          <div>
            <h2 className="text-accent text-xl font-semibold mb-4">
              Help Line for you
            </h2>

            <div className="bg-yellow-50 rounded-lg p-6 border-2 border-accent relative overflow-hidden">
              <div className="flex items-start space-x-3">
                <div>
                  <h2 className="text-accent font-semibold text-lg mb-2">
                    কনটোর (Contour) গ্লুকোমিটার সম্পর্কে জানতে ডায়াল করুন
                  </h2>
                  <img className="mb-5" src={support} alt="img"></img>
                  <p className="text-2xl font-bold text-accent">
                    01321 137 949
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    প্রতিদিন - সকাল ৯টা থেকে বিকাল ৫টা
                  </p>
                </div>
              </div>
              {/* Decorative Circle */}
              <img
                className="absolute right-0 bottom-0 "
                src={time}
                alt="img"
              ></img>
            </div>
          </div>

          {/* Product Card */}
          <div>
            <h2 className="text-accent text-xl font-semibold mb-4">
              Newly Launched Product
            </h2>

            <div className="bg-white rounded-lg p-5 border-2 border-accent">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-accent font-semibold text-lg mb-2">
                    Neemo Pimple Removal
                  </h2>
                  <p className="text-[#607D8B] text-sm mt-1">
                    Natural and Effective Blood Purifier.
                  </p>
                </div>
                <img
                  src={neemo}
                  alt="Neemo Product"
                  className=" object-contain"
                />
              </div>
              <Link
                to="/products"
                className="mt-3 flex items-center text-white bg-accent px-3 w-full  py-2 rounded-full hover:bg-indigo-800 transition-colors text-sm justify-center"
              >
                See More Product
                <BsArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>

          {/* Company Info Card */}
          <div>
            <h2 className="text-accent text-xl font-semibold mb-4">
              Know about company
            </h2>

            <div className="bg-white rounded-lg p-5 border-2 border-accent">
              <div className="bg-gray-100 rounded-lg  mb-5">
                <iframe
                  title="video"
                  src="https://www.youtube.com/embed/PgJB9aOmARc?si=H0HzpjApfRBRlWCQ"
                  className="border-none overflow-hidden rounded-xl  w-full h-full"
                  scrolling="no"
                  frameborder="0"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  allowFullScreen="true"
                ></iframe>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-[#607D8B] text-sm">Stay connect us via</p>
                <div className="flex space-x-3 items-center">
                  <FaFacebook className="w-5 h-5 text-blue-600" />
                  <BsInstagram className="w-5 h-5 text-pink-600" />
                  <BsLinkedin className="w-5 h-5 text-blue-700" />
                  <BsYoutube className="w-5 h-5 text-red-600" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Renix Unani Laboratories Limited */}
        <div className="mt-20 lg:mt-28 flex flex-wrap lg:flex-nowrap items-center justify-between xl:gap-10 gap-5">
          <div className="max-w-3xl">
            <img className="w-20" src={logo} alt="img"></img>

            <div className="my-8">
              <h2 className="uppercase text-3xl font-bold text-accent">
                Renix Unani Laboratories Limited
              </h2>
              <p className="text-[#607D8B] text-lg mb-5">
                Healthy Living Natural Solution
              </p>

              <p className="text-sm text-[#607D8B]">
                Renix Unani Laboratories Limited is a company dedicated to
                producing high-quality, natural medicines for healthy living.
                They specialize in the Unani treatment system, which has been
                used for over 5000 years and has been proven to be successful
                and effective without harmful side effects. Renix Laboratories
                is committed to promoting the benefits of natural medicine and
                contributing to the healthcare industry through the production
                of complete medicines made from all natural herbs.
              </p>
            </div>

            <Link
              className="px-8 py-3 rounded-full bg-accent hover:bg-accent/90 text-white text-sm"
              to="/about"
            >
              Learn More About Us
            </Link>
          </div>

          <img className="" src={leave} alt="leave img"></img>
        </div>
      </div>
    </div>
  );
};

export default RenixOverview;
