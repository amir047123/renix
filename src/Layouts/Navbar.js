import { Button } from "@material-tailwind/react";
import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import TopBar from "./TopBar";
import { BsChevronDown } from "react-icons/bs";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from '../../src/Assets/images/logo.svg'


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "About Us", to: "/about" },
    { name: "Security Check", to: "/security-check" },
    { name: "Our Products", to: "/products" },
    {
      name: "News & Media",
      to: "#",
      dropdown: [
        { name: "News", to: "/news" },
        { name: "Media", to: "/media" },
        { name: "Renix Shasthokotha", to: "/shasthokotha" },
        { name: "Renix Shosthotar Barta", to: "/shosthotarbarta" },
      ],
    },
    { name: "Blogs", to: "/blogs" },
    { name: "Contact Us", to: "/contact" },
    { name: "Renix Store", to: "https://store.renixlaboratories.com.bd" },
  ];

  return (
    <header>
      <TopBar />

      <nav className="bg-white shadow-sm ">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8 xl:px-16">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img className="w-20 " src={logo} alt="logo" />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <div key={link.name} className="relative group">
                  <Link
                    to={link.to}
                    className={`text-sm inline-flex items-center ${
                      link.name === "Home"
                        ? "text-indigo-900 font-medium"
                        : "text-gray-600 hover:text-indigo-900"
                    }`}
                  >
                    {link.name}
                    {link.dropdown && <BsChevronDown className="" />}
                   </Link>

                  {/* Desktop Dropdown */}
                  {link.dropdown && (
                    <div className="absolute hidden group-hover:block w-48 top-full left-0 pt-2 z-50">
                      <div className="bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="py-1">
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.name}
                              to={item.to}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-indigo-900"
                            >
                              {item.name}
                             </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Login Button */}
            <div className="hidden lg:flex items-center">
              <Button className="bg-indigo-900 text-white hover:bg-indigo-800">
                Login
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-indigo-900 focus:outline-none"
              >
                {isMenuOpen ? (
                  <RxCross2 className="h-6 w-6" />
                ) : (
                  <IoMenu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <div
                    className="flex items-center justify-between px-3 py-2 rounded-md text-base text-gray-600 hover:text-indigo-900"
                    onClick={() => {
                      if (link.dropdown) {
                        setIsMobileDropdownOpen(!isMobileDropdownOpen);
                      }
                    }}
                  >
                    <Link to={link.to}>{link.name} </Link>
                    {link.dropdown && (
                      <FaChevronDown
                        className={` transform transition-transform ${
                          isMobileDropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </div>

                  {/* Mobile Dropdown */}
                  {link.dropdown && isMobileDropdownOpen && (
                    <div className="pl-6 space-y-1">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          to={item.to}
                          className="block px-3 py-2 rounded-md text-sm text-gray-500 hover:text-indigo-900"
                        >
                          {item.name}
                         </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="mt-4 px-3">
                <Button className="w-full bg-indigo-900 text-white hover:bg-indigo-800">
                  Login
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
