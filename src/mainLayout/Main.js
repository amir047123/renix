import React from "react";
import WebNav from "../Layouts/WebNav";
import Footer from "../Layouts/Footer";
import { Outlet } from "react-router-dom";
import OrderFLoatingCart from "../Layouts/OrderFLoatingCart";

const Main = () => {
  return (
    <>
      <WebNav />
      <Outlet />
      <Footer />
    </>
  );
};

export default Main;
