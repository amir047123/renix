import UserDashboardIndex from "../../src/Pages/dashboard/userDashboard/UserDashboardIndex";
import MyAccount from "../Pages/dashboard/userDashboard/MyAccount/MyAccount";
const UserRoutes = [
  { path: "overview", Component: UserDashboardIndex },
  { path: "myAccount", Component: MyAccount },
];

export default UserRoutes;
