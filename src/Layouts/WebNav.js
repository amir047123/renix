import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../Assets/images/logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillCloseCircle } from "react-icons/ai";
import "./WebNav.css";
import TopBar from "./TopBar";
import AuthUser from "../Hooks/authUser";
import { server_url } from "../Config/API";
import { RxCaretDown } from "react-icons/rx";

const WebNav = () => {
  const [user, setUser] = useState();
  const { userInfo } = AuthUser();
  const [openBlog, setOpenBlog] = useState(false);
  //sticky nav
  const [stickyNav, setStickyNav] = useState(false);
  const navWrapper = useRef();
  //state for hamburger menu
  const [isOpen, setIsopen] = useState(false);
  const handleToggle = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
  };
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const handleBlogDropdown = (e) => {
    openBlog === true ? setOpenBlog(false) : setOpenBlog(true);
    //console.log('clicked')
  };
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  //nav menu active style
  let activeStyle = {
    borderBottom: "2px solid #90C347",
  };

  useEffect(() => {
    fetch(`${server_url}/user/${userInfo?._id}`)
      .then((res) => res.json())
      .then((data) => setUser(data?.data));
  }, [userInfo?._id]);
  console.log(user);
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
        className={` w-full  top-0 right-0 left-0 z-[10] py-5 md:py-2 text-[#FFF]  flex  items-center justify-between md:mx-auto px-10 md:px-[50px] bottom_border ${
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
              <aiFillCloseCircle />
            </button>
            <ul className="mobile_menu">
              <li>
                <Link
                  onClick={handleToggle}
                  to="/"
                  className="text-textColor p-2 uppercase text-[13px] hover:border-b-2 hover:border-[#90C347] transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  onClick={handleToggle}
                  to="/about"
                  className="text-textColor p-2 uppercase text-[13px] hover:border-b-2 hover:border-[#90C347] transition"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  onClick={handleToggle}
                  to="/security-check"
                  className="text-textColor p-2 uppercase text-[13px] hover:border-b-2 hover:border-[#90C347] transition"
                >
                  Security check
                </Link>
              </li>
              <li>
                <Link
                  onClick={handleToggle}
                  to="/products"
                  className="text-textColor p-2 uppercase text-[13px] hover:border-b-2 hover:border-[#90C347] transition"
                >
                  Our Products
                </Link>
              </li>
              <li>
                <Link
                  onClick={handleToggle}
                  to="/news-media"
                  className="text-textColor p-2 uppercase text-[13px] hover:border-b-2 hover:border-[#90C347] transition"
                >
                  News and Media
                </Link>
              </li>
              <li className={openBlog ? "bg-primary/10" : ""}>
                <span
                  onClick={handleBlogDropdown}
                  className="flex items-center cursor-pointer gap-4 justify-center text-[14px] font-normal"
                >
                  <div className="flex items-center gap-4 text-textColor">
                    <span className="text-lg text-textColor">
                      {/* <MdOutlineArticle /> */}
                    </span>

                    <span className="">Blog to</span>
                  </div>
                  <span
                    className={`text-2xl text-textColor ${
                      openBlog === true ? "rotate-180" : ""
                    }`}
                  >
                    <RxCaretDown />
                  </span>
                </span>
                <ul
                  className={`!space-y-1 mt-2  ${
                    openBlog === true ? "block" : "hidden"
                  }`}
                >
                  <div>
                    <Link
                      to={"blog/allBlogCategory"}
                      className=" text-sm font-normal rounded-md text-textColor"
                    >
                      <span className="ml-3">all Blogs Category</span>
                    </Link>
                  </div>
                  <div>
                    <Link
                      to={"blog/allBlogCategory"}
                      className=" text-sm font-normal  rounded-md text-textColor"
                    >
                      <span className="ml-3">all Blogs Category</span>
                    </Link>
                  </div>
                </ul>
              </li>
              <li>
                <Link
                  onClick={handleToggle}
                  to="/blogs"
                  className="text-textColor p-2 uppercase text-[13px] hover:border-b-2 hover:border-[#90C347] transition"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  onClick={handleToggle}
                  to="/contact"
                  className="text-textColor p-2 uppercase text-[13px] hover:border-b-2 hover:border-[#90C347] transition"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link onClick={handleToggle} to={"/appointment"}>
                  <button className=" px-2  py-2 rounded text-white border bg-primary border-primary text-base">
                    Appointment +
                  </button>
                </Link>
              </li>
              <li>
                {localStorage.getItem("access") ? (
                  <Link
                    onClick={handleToggle}
                    to={`/${user?.role}Dashboard`}
                    className="px-2  py-2 rounded text-white border bg-red-500 border-red-500 text-base"
                  >
                    Dashboard
                  </Link>
                ) : (
                  <Link onClick={handleToggle} to={"/login"}>
                    <button className=" px-2  py-2 rounded text-white border bg-primary border-primary text-base">
                      Login
                    </button>
                  </Link>
                )}
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
            {/* <li>
              <NavLink
                to={"/news-media"}
                className="text-textColor p-2 uppercase text-[13px] hover:border-b-2 hover:border-[#90C347] transition"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                News And Media
              </NavLink>
            </li> */}
            <li>
              <div className="relative inline-block text-left">
                <button
                  type="button"
                  onClick={toggleDropdown}
                  className="text-textColor flex justify-center gap-2 items-center px-3 py-2 rounded-md text-sm font-medium focus:outline-none"
                >
                  News & Media
                  <span
                    className={`text-2xl text-textColor ${
                      isDropdownOpen ? "rotate-180" : ""
                    }`}
                  >
                    <RxCaretDown />
                  </span>
                </button>
                {isDropdownOpen && (
                  <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                    <div
                      className="py-1"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="options-menu"
                    >
                      <Link
                        to="/news"
                        className="block px-4 py-2 text-sm text-textColor hover:bg-primary/10"
                        role="menuitem"
                      >
                        News
                      </Link>
                      <Link
                        to="/media"
                        className="block px-4 py-2 text-sm text-textColor hover:bg-primary/10"
                        role="menuitem"
                      >
                        Media
                      </Link>
                      <Link
                        to="/renixSastoKotha"
                        className="block px-4 py-2 text-sm text-textColor hover:bg-primary/10"
                        role="menuitem"
                      >
                        Renix SasthoKotha
                      </Link>
                      <Link
                        to="/renixSastoKothaBartarVarta"
                        className="block px-4 py-2 text-sm text-textColor hover:bg-primary/10"
                        role="menuitem"
                      >
                        Renix SasthoKothar Varta
                      </Link>
                    </div>
                  </div>
                )}
              </div>
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
        <Link to={"/appointment"}>
          <button className="hidden lg:flex items-center px-2  py-2 rounded text-white border bg-primary border-primary text-base">
            Appointment +
          </button>
        </Link>
        <div className=" item-right">
          {localStorage.getItem("access") ? (
            <Link
              to={`/${user?.role}Dashboard`}
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
