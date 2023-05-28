import UserDashboardIndex from "../../src/Pages/dashboard/userDashboard/UserDashboardIndex";
import MyAccount from "../Pages/dashboard/userDashboard/MyAccount/MyAccount";
import ViewProfile from "../Pages/dashboard/userDashboard/ViewProfile/ViewProfile";
const UserRoutes = [
  { path: "overview", Component: UserDashboardIndex },
  { path: "myAccount", Component: MyAccount },
  { path: "viewProfile", Component: ViewProfile },
];

export default UserRoutes;
