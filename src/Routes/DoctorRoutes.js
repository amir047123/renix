import ConfirmedAppointment from "../Pages/dashboard/DoctorDashboard/ConfirmedAppointment/ConfirmedAppointment";
import DoctorDashboardIndex from "../Pages/dashboard/DoctorDashboard/DoctorDashboardIndex";
import PendingAppointment from "../Pages/dashboard/DoctorDashboard/PendingAppointment/PendingAppointment";
import RejectedAppointment from "../Pages/dashboard/DoctorDashboard/RejectedAppointment/RejectedAppointment";
import UpdateAccount from "../Pages/dashboard/DoctorDashboard/UpdateAccount/UpdateAccount";
import ViewDoctorProfile from "../Pages/dashboard/DoctorDashboard/ViewDoctorProfile/ViewDoctorProfile";

const DoctorRoutes = [
  { path: "overview", Component: DoctorDashboardIndex },
  { path: "myAccount", Component: UpdateAccount },
  { path: "viewProfile", Component: ViewDoctorProfile },
  { path: "appointment/pendingAppointment", Component: PendingAppointment },
  { path: "appointment/rejectedAppointment", Component: RejectedAppointment },
  { path: "appointment/confirmedAppointment", Component: ConfirmedAppointment },
];

export default DoctorRoutes;
