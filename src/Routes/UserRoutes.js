import UserDashboardIndex from "../../src/Pages/dashboard/userDashboard/UserDashboardIndex";
import MyAccount from "../Pages/dashboard/userDashboard/MyAccount/MyAccount";
import MyAppointment from "../Pages/dashboard/userDashboard/MyAppointment/MyAppointment";
import MyOrders from "../Pages/dashboard/userDashboard/MyOrders/MyOrders";
import ViewProfile from "../Pages/dashboard/userDashboard/ViewProfile/ViewProfile";
const UserRoutes = [
  { path: "overview", Component: UserDashboardIndex },
  { path: "myAccount", Component: MyAccount },
  { path: "viewProfile", Component: ViewProfile },
  { path: "myOrders", Component: MyOrders },
  { path: "myAppointment", Component: MyAppointment },
];

export default UserRoutes;
