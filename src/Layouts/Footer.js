import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../Assets/images/renix-white-logo.png";
import SocialIcon from "../shared/socialIcon/SocialIcon";

const Footer = () => {
  return (
    <div>
      <footer className="bg-secondary dark:bg-gray-900">
        <div className="fixed bottom-5 sm:right-8 right-4 z-[999] cursor-pointer text-white text-4xl bg-primary w-16 h-16 flex items-center justify-center rounded-full animate-bounce">
          <a
            href="https://api.whatsapp.com/send?phone=8801618883045"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp
              className="text-white"
              name="chatbubble-ellipses"
            ></FaWhatsapp>
          </a>
        </div>

        <div className="px-8 sm:px-10 lg:px-[103px] pt-10 pb-10">
          <div className="flex gap-6 justify-center lg:justify-around  flex-wrap   md1:flex-wrap lg:flex-nowrap">
            <div className="w-full  lg:w-4/12  ">
              <div className="">
                <Link to={"/"} className="flex items-center mb-5">
                  <img src={logo} className=" w-20 mr-3" alt="Renix Logo" />
                </Link>
                <p className=" text-lightTextColor text-sm leading-7 ">
                  Renix Laboratories (Unani) Ltd. is a healthcare company that
                  produces high-quality complete medicines using natural herbs,
                  contributing to the shift towards alternative medicine. The
                  Hon'ble Prime Minister of Bangladesh has recognized the
                  importance of herbal medicines.
                </p>
              </div>
            </div>
            <div className="w-full  lg:w-2/12 mt-2">
              <h2 className="mb-4 text-sm font-semibold text-[#f7f7f7] capitalize dark:text-white">
                Quick Links
              </h2>
              <ul className="text-lightTextColor flex flex-col gap-y-2 text-sm font-normal capitalize mb-6">
                <li className="">
                  <Link to={"/about"} className="hover:underline">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:underline">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="/privacy-policy" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/refound-return" className="hover:underline">
                    Refound & Return
                  </Link>
                </li>
                <li>
                  <Link to="/terms-conditions" className="hover:underline">
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-full  lg:w-2/12 mt-2">
              <h2 className="mb-4 text-sm font-semibold text-[#f7f7f7] capitalize dark:text-white">
                Renix
              </h2>
              <ul className="text-lightTextColor flex flex-col gap-y-2 text-sm font-normal capitalize mb-6">
                <li>
                  <Link to="/gallery" className="hover:underline">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link to="/team" className="hover:underline">
                    Team
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-full  lg:w-4/12 mt-2 ">
              <h2 className="mb-4 text-sm font-semibold text-[#f7f7f7] capitalize dark:text-white">
                Contact Info
              </h2>
              <ul className="text-lightTextColor flex flex-col gap-y-2 text-sm font-normal capitalize mb-8">
                <li>+(880)1618883045</li>
                <li className="normal-case">renixoffice@gmail.com</li>
                <li>RENIX UNANI LABORATORIES LIMITED,</li>
                <li>Fatullah 1421 Dhaka, Dhaka Division, Bangladesh</li>
              </ul>
            </div>
          </div>
          <hr className="my-6 border-lightTextColor border-1.5 sm:mx-auto  lg:my-6" />
          <div className="lg:flex lg:items-center lg:justify-between">
            <span className="text-sm text-lightTextColor sm:text-center dark:text-gray-400">
              © 2025{" "}
              <Link to={"/"} className="hover:underline">
                Renix
              </Link>
              . All Rights Reserved.
            </span>
            {/* footer icon */}
            <SocialIcon />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
