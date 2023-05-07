import { Route, Routes } from "react-router-dom";
import PublicRoutes from "./Routes/PublicRoutes";
import WebNav from "./Layouts/WebNav";
import toast, { Toaster } from "react-hot-toast";
import Footer from "./Layouts/Footer";
import Main from "./mainLayout/Main";
import AdminDashboard from "./dashboardLayout/AdminDashboard";
import AdminRoutes from "./Routes/AdminRoute";
import { aboutRoutes } from "./Routes/AboutRoutes";
import About from "./Pages/About";
import Profile from "./Pages/AboutUs/Profile";
import OrderFLoatingCart from "./Layouts/OrderFLoatingCart";
import { useState } from "react";
import { BsFillBagFill } from "react-icons/bs";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const [openCart, setOpenCart] = useState(false);
  return (
    <div className="relative">
      {openCart ? (
        <OrderFLoatingCart setOpenCart={setOpenCart}></OrderFLoatingCart>
      ) : (
        <div className="fixed z-20 top-[45vh] right-0 cursor-pointer">
          {" "}
          <div
            onClick={() => setOpenCart(true)}
            className="bg-primary rounded-l-lg"
          >
            <div className="flex flex-col justify-center items-center text-white">
              <div className="flex flex-col justify-center items-center py-2 ">
                {" "}
                <BsFillBagFill className="text-2xl "></BsFillBagFill>
                <p className="pt-2 text-xs">0 item</p>
              </div>
              <p className="bg-secondary rounded-bl-lg p-2 text-xs">500 tk</p>
            </div>
          </div>
        </div>
      )}

      <Routes>
        {/* main Routes */}
        <Route path="/" element={<Main />}>
          {PublicRoutes.map(({ path, Component }, index) => (
            <Route key={index + 45} path={path} element={<Component />} />
          ))}
        </Route>

        {/* dashboard routes */}
        <Route path="/adminDashboard" element={<AdminDashboard />}>
          {AdminRoutes.map(({ path, Component }, index) => (
            <Route key={index} path={path} element={<Component />} />
          ))}
        </Route>

        {/* about routes */}
        <Route path="/about" element={<About />}>
          {aboutRoutes.map(({ path, Component }, index) => (
            <Route key={index} path={path} element={<Component />} />
          ))}
        </Route>
      </Routes>

      <Toaster />
    </div>
  );
}

export default App;
