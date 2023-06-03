import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../Assets/images/logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillCloseCircle } from "react-icons/ai";
import "./WebNav.css";
import TopBar from "./TopBar";
import AuthUser from "../Hooks/authUser";

const WebNav = () => {
  //sticky nav
  const [stickyNav, setStickyNav] = useState(false);
  const [user, setUser] = useState({});
  const navWrapper = useRef();
  //state for hamburger menu
  const [isOpen, setIsopen] = useState(false);
  const { userInfo } = AuthUser();
  const handleToggle = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
  };
  console.log(userInfo);
  //nav menu active style
  let activeStyle = {
    borderBottom: "2px solid #90C347",
  };

  //close sidenav when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        navWrapper.current &&
        !navWrapper.current.contains(event.target)
      ) {
        setIsopen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };

    //return wrapper.current;
  }, [isOpen]);

  //sticky nav on scroll

  useEffect(() => {
    window.onscroll = () => {
      setStickyNav(window.pageYOffset === 0 ? false : true);
      return () => (window.onscroll = null);
    };
  }, []);

  return (
    <header>
      {/* topbar nav */}
      <TopBar />
      <nav
        className={` w-full  top-0 right-0 left-0 z-[10] py-5 md:py-2 text-[#FFF]  flex  items-center justify-between md:mx-auto px-10 md:px-[103px] bottom_border ${
          stickyNav ? "bg-white fixed shadow-md shadow-gray-200" : "bg-white"
        }`}
      >
        {/* brand logo */}
        <Link to={"/"}>
          <img className="w-[120px] h-[25px] " src={logo}></img>
        </Link>

        {/* mobile nav */}
        <div className="responsive_menu ">
          <button
            onClick={handleToggle}
            className="hamburger_icon text-darkBlack"
          >
            <GiHamburgerMenu />
          </button>
          <div
            ref={navWrapper}
            className={`side_nav shadow-lg shadow-gray-300 ${
              isOpen == true ? "active" : ""
            }`}
          >
            <button className="close_btn " onClick={handleToggle}>
              <AiFillCloseCircle />
            </button>
            <ul className="mobile_menu">
              <li>
                <a
                  href="/"
                  className="text-textColor p-2 uppercase text-[13px] hover:border-b-2 hover:border-[#90C347] transition"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-textColor p-2 uppercase text-[13px] hover:border-b-2 hover:border-[#90C347] transition"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/security-check"
                  className="text-textColor p-2 uppercase text-[13px] hover:border-b-2 hover:border-[#90C347] transition"
                >
                  Security check
                </a>
              </li>
              <li>
                <a
                  href="/products"
                  className="text-textColor p-2 uppercase text-[13px] hover:border-b-2 hover:border-[#90C347] transition"
                >
                  Our Products
                </a>
              </li>
              <li>
                <a
                  href="/news-media"
                  className="text-textColor p-2 uppercase text-[13px] hover:border-b-2 hover:border-[#90C347] transition"
                >
                  News and Media
                </a>
              </li>
              <li>
                <a
                  href="/blogs"
                  className="text-textColor p-2 uppercase text-[13px] hover:border-b-2 hover:border-[#90C347] transition"
                >
                  Blogs
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-textColor p-2 uppercase text-[13px] hover:border-b-2 hover:border-[#90C347] transition"
                >
                  Contact
                </a>
              </li>
              <li>
                <a href="/appoinments">
                  {" "}
                  <button className=" px-2  py-2 rounded text-white border bg-primary border-primary text-base">
                    Appoinments +
                  </button>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="hidden w-full lg:block md:w-auto"
          id="navbar-multi-level"
        >
          <ul className="flex gap-4 items-center justify-between py-6">
            <li>
              <NavLink
                to={"/"}
                className="text-textColor p-2 uppercase text-[13px] hover:border-b-2 hover:border-[#90C347] transition"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to={"/about"}
                className="p-2 text-textColor uppercase text-[13px] hover:border-b-2 hover:border-[#90C347] transition"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                About us
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/security-check"}
                className="text-textColor p-2 uppercase text-[13px] hover:border-b-2 hover:border-[#90C347] transition"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                {" "}
                Security check
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/products"}
                className="text-textColor p-2 uppercase text-[13px] hover:border-b-2 hover:border-[#90C347] transition"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Our Products
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/news-media"}
                className="text-textColor p-2 uppercase text-[13px] hover:border-b-2 hover:border-[#90C347] transition"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                News And Media
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/blogs"}
                className="text-textColor p-2 uppercase text-[13px] hover:border-b-2 hover:border-[#90C347] transition"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Blogs
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/contact"}
                className="text-textColor p-2 uppercase text-[13px] hover:border-b-2 hover:border-[#90C347] transition"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Contact Us
              </NavLink>
            </li>

            <div className="flex gap-5"></div>
          </ul>
        </div>

        {/* call to action button */}
        <Link to={"/appoinments"}>
          <button className="hidden lg:flex items-center px-2  py-2 rounded text-white border bg-primary border-primary text-base">
            Appoinments +
          </button>
        </Link>
        <div className=" item-right">
          {localStorage.getItem("access") ? (
            <Link
              to={`/${userInfo?.role}Dashboard`}
              className="hidden lg:flex items-center px-2  py-2 rounded text-white border bg-red-500 border-red-500 text-base"
            >
              Dashboard
            </Link>
          ) : (
            <Link to={"/login"}>
              <button className="hidden lg:flex items-center px-2  py-2 rounded text-white border bg-primary border-primary text-base">
                Login
              </button>
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default WebNav;
