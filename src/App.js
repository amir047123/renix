import { Route, Routes } from "react-router-dom";
import PublicRoutes from "./Routes/PublicRoutes";
import { Toaster } from "react-hot-toast";
import Main from "./mainLayout/Main";
import AdminDashboard from "./dashboardLayout/AdminDashboard";
import AdminRoutes from "./Routes/AdminRoute";
import { aboutRoutes } from "./Routes/AboutRoutes";
import About from "./Pages/About";
import OrderFLoatingCart from "./Layouts/OrderFLoatingCart";
import { useState } from "react";
import { BsFillBagFill } from "react-icons/bs";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AdminDashboardOverview from "./Pages/dashboard/AdminDashboardOverview";
import UserDashboard from "./dashboardLayout/UserDashboard";
import UserDashboardIndex from "./Pages/dashboard/userDashboard/UserDashboardIndex";
import UserRoutes from "./Routes/UserRoutes";
import { useEffect } from "react";
import { createContext } from "react";
import MyContext from "./Utils/Context/MyContext";

function App() {
  const [openCart, setOpenCart] = useState(false);
  const [order, setOrder] = useState([]);
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("order"));
    setOrder(items);
  }, [refresh]);
  return (
    <MyContext.Provider value={{ refresh, setRefresh }}>
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
                  <p className="pt-2 text-xs">
                    {order?.length ? order.length : 0} item
                  </p>
                </div>
                <p className="bg-secondary rounded-bl-lg p-2 text-xs">00 BDT</p>
              </div>
            </div>
          </div>
        )}

        <Routes>
          {/* main Routes */}

          <Route
            path="/"
            element={
              <>
                <Main />
              </>
            }
          >
            {PublicRoutes.map(({ path, Component }, index) => (
              <Route key={index + 45} path={path} element={<Component />} />
            ))}
          </Route>

          {/*Admin dashboard routes */}
          <Route path="/adminDashboard" element={<AdminDashboard />}>
            <Route index element={<AdminDashboardOverview />}></Route>
            {AdminRoutes.map(({ path, Component }, index) => (
              <Route key={index} path={path} element={<Component />} />
            ))}
          </Route>
          {/*Admin dashboard routes */}
          <Route path="/userDashboard" element={<UserDashboard />}>
            <Route index element={<UserDashboardIndex />}></Route>
            {UserRoutes.map(({ path, Component }, index) => (
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
    </MyContext.Provider>
  );
}

export default App;
