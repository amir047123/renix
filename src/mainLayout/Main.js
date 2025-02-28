import React from "react";
import Footer from "../Layouts/Footer";
import { Outlet } from "react-router-dom";
import Navbar from "../Layouts/Navbar";

const Main = () => {
  return (
    <>
      {/* <WebNav /> */}
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Main;
