import React, { useEffect, useRef, useState } from "react";
// import "./AdminDashboard.css";
import { NavLink, Outlet, Link } from "react-router-dom";
import logo from "../Assets/images/logo.svg";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { FiSettings } from "react-icons/fi";
import profilePic from "../Assets/images/users/us1.jpg";
import SearchBar from "../Components/searchBar/SearchBar";

const UserDashboard = () => {
  const navWrapper = useRef();
  //hide sidenav by default
  const [issideNavOpen, setSidenavOpen] = useState(false);

  //show  medicine
  const [openMedicine, setOpenMedicine] = useState(false);
  //show  orders

  const [openOrder, setOpenOrder] = useState(false);

  //show doctor
  const [openDoctor, setOpenDoctor] = useState(false);

  //show news
  const [openNews, setOpenNews] = useState(false);

  //show blog
  const [openBlog, setOpenBlog] = useState(false);

  //show sidenav on toggle
  const handleToggle = () => {
    issideNavOpen === true ? setSidenavOpen(false) : setSidenavOpen(true);
  };

  //close sidebar on click

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        issideNavOpen &&
        navWrapper.current &&
        !navWrapper.current.contains(event.target)
      ) {
        setSidenavOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };

    //return wrapper.current;
  }, [issideNavOpen]);

  //active style for sidenav

  let activeStyle = {
    backgroundColor: "#3B4D36",
  };

  return (
    <section className="">
      <div className="w-full">
        <div className="md:flex">
          <div className="w-full lg:w-1/5 lg:block hidden">
            <div
              id="drawer-navigation"
              className="drawer_height w-1/5  z-40 fixed left-0 top-0 p-4 overflow-y-auto h-full bg-secondary dark:bg-gray-800"
              tabindex="-1"
              aria-labelledby="drawer-navigation-label"
            >
              <div className="py-4 ">
                <Link to={"/"} className="flex items-center justify-center">
                  <img src={logo} className="h-8 mr-3" alt="Renix Logo" />
                </Link>

                <ul className="space-y-2 pt-8">
                  <li>
                    <NavLink
                      to={"overview"}
                      className="flex items-center gap-4 px-2 py-2.5 text-[14px] font-normal rounded dark:text-white dark:hover:bg-gray-700 text-white hover:bg-textColor"
                      style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }
                    >
                      <span className="text-lg">
                        <MdOutlineDashboardCustomize />
                      </span>

                      <span className="">Dashboard</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={"myAccount"}
                      className="flex items-center gap-4 px-2 py-2.5 text-[14px] font-normal rounded dark:text-white dark:hover:bg-gray-700 text-white hover:bg-textColor"
                      style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }
                    >
                      <span className="text-lg">
                        <CgProfile />
                      </span>

                      <span className="">MyAccount</span>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* dashboard main part */}
          <div className="w-full lg:w-4/5">
            <div>
              <div className="bg-secondary lg:bg-[#E7F7F4]  py-4 px-3">
                <div className="flex items-center justify-around ">
                  <span
                    className=" text-white  mx-3 lg:hidden cursor-pointer"
                    title="Open sidenav"
                    onClick={handleToggle}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-8 h-8"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
                      />
                    </svg>
                  </span>
                  {/* search bar */}
                  <div className=" hidden md:block">
                    <form onSubmit="" className="relative">
                      <span className="absolute top-3 left-5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                          />
                        </svg>
                      </span>

                      <input
                        type="text"
                        name="searchBar"
                        id="searchBar"
                        className="pl-14 py-2.5 pr-2 block  rounded-lg border border-[#E8E8ED] bg-[#F9FAFB] text-sm w-[306px]"
                        placeholder="Search Files..."
                      />
                    </form>
                  </div>

                  <div className="flex items-center justify-center gap-2 lg:gap-4">
                    {/* notification icon */}
                    <div className="pl-7 pr-3 relative inline-flex items-center cursor-pointer">
                      <span className="text-2xl text-white lg:text-[#191919] inline-block">
                        <IoMdNotificationsOutline />
                      </span>
                      <div class="absolute inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-[#111111c1] bg-firstCol border-2 border-gray-800 rounded-full -top-2 right-1 dark:border-gray-900">
                        5
                      </div>
                    </div>
                    {/* settings icon */}
                    <span className="text-xl text-white lg:text-[#191919] inline-block">
                      <FiSettings />
                    </span>
                    {/* user dropdown */}
                    <div
                      className="ml-5 mr-6 flex items-center cursor-pointer relative"
                      //  onClick={handleShow}
                    >
                      <img
                        src={profilePic}
                        alt=""
                        className="rounded-full w-10 h-10 md:w-10 md:h-10 "
                      />
                    </div>

                    {/* mobile search bar */}
                    <SearchBar />
                  </div>
                </div>
              </div>
              <Outlet />
              {/* sidenav for mobile screen */}
              <div ref={navWrapper} className="">
                <div
                  id="drawer-navigation"
                  className={`side_nav_admin block lg:hidden z-40 h-screen p-4  bg-secondary w-80 dark:bg-gray-800 ${
                    issideNavOpen === true ? "activ" : ""
                  }`}
                  tabindex="-1"
                >
                  <button
                    type="button"
                    data-drawer-dismiss="drawer-navigation"
                    aria-controls="drawer-navigation"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-5 right-5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    onClick={handleToggle}
                  >
                    <svg
                      aria-hidden="true"
                      className="w-6 h-6"
                      fill="white"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span className="sr-only">Close menu</span>
                  </button>
                  <div className=" overflow-y-auto px-7">
                    <NavLink
                      to={"/"}
                      className="flex items-center justify-center pt-10"
                    >
                      <img src={logo} className="h-8 mr-3" alt="Renix Logo" />
                    </NavLink>

                    <ul className="space-y-2 pt-8">
                      <li>
                        <a
                          href="/userDashboard/overview"
                          // onClick={(e) => e.preventDefault()}

                          className="flex items-center gap-5 px-2 py-2.5 text-[14px] font-normal rounded dark:text-white dark:hover:bg-gray-700 text-white hover:bg-textColor"
                        >
                          <span className="text-lg">
                            <MdOutlineDashboardCustomize />
                          </span>

                          <span className="">Dashboard</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="/userDashboard/myAccount"
                          // onClick={(e) => e.preventDefault()}

                          className="flex items-center gap-5 px-2 py-2.5 text-[14px] font-normal rounded dark:text-white dark:hover:bg-gray-700 text-white hover:bg-textColor"
                        >
                          <span className="text-lg">
                            <MdOutlineDashboardCustomize />
                          </span>

                          <span className="">MyAccount</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserDashboard;
