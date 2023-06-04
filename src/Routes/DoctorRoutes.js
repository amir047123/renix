import DoctorDashboardIndex from "../Pages/dashboard/DoctorDashboard/DoctorDashboardIndex";
import UpdateAccount from "../Pages/dashboard/DoctorDashboard/UpdateAccount/UpdateAccount";
import ViewDoctorProfile from "../Pages/dashboard/DoctorDashboard/ViewDoctorProfile/ViewDoctorProfile";

const DoctorRoutes = [
  { path: "overview", Component: DoctorDashboardIndex },
  { path: "myAccount", Component: UpdateAccount },
  { path: "viewProfile", Component: ViewDoctorProfile },
  //   { path: "myOrders", Component: MyOrders },
];

export default DoctorRoutes;
