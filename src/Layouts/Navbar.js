import { Button } from "@material-tailwind/react";
import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { FaChevronDown } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { Link, NavLink } from "react-router-dom";
import logo from "../../src/Assets/images/Renix logo-01.png";
import AuthUser from "../Hooks/authUser";
import TopBar from "./TopBar";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const { userInfo } = AuthUser();

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "About Us", to: "/about" },
    // { name: "Security Check", to: "/security-check" },
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
    // { name: "Renix Store", to: "https://renixcare.com" },
  ];

  return (
    <header className="bg-gradient-to-r from-thirdLightPrimary via-whiteSmoke to-thirdLightPrimary sticky top-0 z-50">
      <TopBar />

      <nav className="bg-gradient-to-r from-thirdLightPrimary via-whiteSmoke to-thirdLightPrimary shadow-sm relative">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8 xl:px-16 sticky top-0">
          <div className="flex items-center justify-between md:h-20 h-[70px]">
            {/* Logo */}{" "}
            <div className="flex items-center gap-4">
              <Link to="/" className="flex-shrink-0">
                <img className="md:w-[120px]  w-20 " src={logo} alt="logo" />
              </Link>
              <p className="block md:hidden text-[0.8rem] leading-tight">
                <span className="font-semibold block mb-[1px]">
                  Renix Unani Laboratories Ltd.
                </span>
                <span className="text-[0.6rem] block">
                  Natural Solution For Health Life.
                </span>
              </p>
            </div>
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center ">
              {navLinks.map((link) => (
                <div key={link.name} className="relative group">
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `text-sm inline-flex items-center whitespace-nowrap border-r xl:px-5 px-3 border-gray text-blue-gray-700 ${
                        isActive && link.name !== "News & Media"
                          ? "text-accent font-medium"
                          : "text-gray-600 hover:text-accent"
                      }`
                    }
                  >
                    {link.name}
                    {link.dropdown && <BsChevronDown className="ml-2" />}
                  </NavLink>

                  {/* Desktop Dropdown */}
                  {link.dropdown && (
                    <div className="absolute hidden group-hover:block w-48 top-full left-0 pt-2 z-50">
                      <div className="bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="py-1">
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.name}
                              to={item.to}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-accent hover:bg-thirdLightPrimary"
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
            {userInfo?.role ? (
              <Link
                to={`/${userInfo?.role}Dashboard`}
                className="hidden lg:flex items-center"
              >
                <Button className="bg-accent rounded-full text-white hover:bg-accent/90">
                  Dashboard
                </Button>
              </Link>
            ) : (
              <Link to="/login" className="hidden lg:flex items-center">
                <Button className="bg-accent rounded-full text-white hover:bg-accent/90">
                  Login
                </Button>
              </Link>
            )}
            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-accent focus:outline-none"
              >
                {isMenuOpen ? (
                  <RxCross2 className="h-6 w-6" />
                ) : (
                  <IoMenu className="text-3xl" />
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
                    className="flex items-center justify-between px-3 py-2 rounded-md text-base text-gray-600 hover:text-accent"
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
                          className="block  px-3 py-2 rounded-md text-sm text-gray-500 hover:text-accent"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              {userInfo?.role ? (
                <Link to={`/${userInfo?.role}Dashboard`} className="mt-4 px-3">
                  <Button className="w-full bg-accent text-white hover:bg-accent/90">
                    Dashboard
                  </Button>
                </Link>
              ) : (
                <Link to="/login" className="mt-4 px-3">
                  <Button className="w-full bg-accent text-white hover:bg-accent/90">
                    Login
                  </Button>
                </Link>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
