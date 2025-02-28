import React from "react";
// import "./Dashboard.css";
import { useEffect, useState } from "react";
import img3 from "../../../Assets/dasboard-icon/complete-order.png";
import img7 from "../../../Assets/dasboard-icon/completed-appointment.png";
import img6 from "../../../Assets/dasboard-icon/pending-appointment.png";
import img2 from "../../../Assets/dasboard-icon/pending-order.png";
import img5 from "../../../Assets/dasboard-icon/total-appointment.png";
import img1 from "../../../Assets/dasboard-icon/total-order.png";
import AuthUser from "../../../Hooks/authUser";
import { server_url } from "../../../Config/API";

const AdminDashboardOverview = () => {
  const [order, setOrder] = useState([]);
  const [appointment, setAppointment] = useState([]);
  const { userInfo } = AuthUser();
  useEffect(() => {
<<<<<<< HEAD
    fetch(`http://localhost:3001/api/v1/order/getOrder/${userInfo?._id}`)
=======
    fetch(`${server_url}/order/getOrder/${userInfo?._id}`)
>>>>>>> 47bb5cedf53f5587c42b72757c4a2d7953614036
      .then((res) => res.json())
      .then((data) => {
        setOrder(data?.data);
      });
  }, [userInfo?._id]);
  const pending = order.filter((item) => item.orderStatus === "pending");
  const confirmed = order.filter((item) => item.orderStatus === "accept");
  useEffect(() => {
<<<<<<< HEAD
    fetch(
      `http://localhost:3001/api/v1/appointment/getAppointment/${userInfo?._id}`
    )
=======
    fetch(`${server_url}/appointment/getAppointment/${userInfo?._id}`)
>>>>>>> 47bb5cedf53f5587c42b72757c4a2d7953614036
      .then((res) => res.json())
      .then((data) => {
        setAppointment(data?.data);
      });
  }, [userInfo?._id]);

  const pendingAppointment = appointment.filter(
    (item) => item.appointmentStatus === "pending"
  );
  const confirmedAppointment = appointment.filter(
    (item) => item.appointmentStatus === "confirmed"
  );
  return (
    <section className="py-8">
      <div className="container w-full md:max-w-6xl px-8">
        <div className="flex items-center flex-wrap  ">
          <div className="w-full md:w-6/12 lg:w-4/12">
            <div className="md:mx-3 my-3 m-0   shadow-lg shadow-gray-300 gap-5  bg-[#F0FDF4] rounded-lg flex  items-center px-5 py-9">
              <div className="w-[50px] h-[50px] rounded-full flex items-center justify-center bg-[#B0D6D0]">
                <img className=" w-[25px] h-[25px] " src={img1} alt="" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-textColor ">
                  Total Order
                </h3>
                <span className="text-sm text-lightTextColor">
                  {order?.length ? order?.length : 0}
                </span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-6/12 lg:w-4/12">
            <div className="md:mx-3 my-3 m-0   shadow-lg shadow-gray-300 gap-5  bg-[#F8FFEC] rounded-lg flex  items-center px-5 py-9">
              <div className="w-[50px] h-[50px] rounded-full flex items-center justify-center bg-[#D9F99D]">
                <img className=" w-[25px] h-[25px] " src={img2} alt="" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-textColor ">
                  Pendnig Order
                </h3>
                <span className="text-sm text-lightTextColor">
                  {pending?.length ? pending?.length : 0}
                </span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-6/12 lg:w-4/12">
            <div className="md:mx-3 my-3 m-0  shadow-lg shadow-gray-300 gap-5  bg-[#F4FFEF] rounded-lg flex  items-center px-5 py-9">
              <div className="w-[50px] h-[50px] rounded-full flex items-center justify-center bg-[#BBF7D0]">
                <img className=" w-[25px] h-[25px] " src={img3} alt="" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-textColor ">
                  Confirmed Order
                </h3>
                <span className="text-sm text-lightTextColor">
                  {confirmed?.length ? confirmed?.length : 0}
                </span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-6/12 lg:w-4/12">
            <div className="md:mx-3 my-3 m-0   shadow-lg shadow-gray-300 gap-5  bg-[#FEF0F9] rounded-lg flex  items-center px-5 py-9">
              <div className="w-[50px] h-[50px] rounded-full flex items-center justify-center bg-[#FBCFE8]">
                <img className=" w-[25px] h-[25px] " src={img5} alt="" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-textColor ">
                  Total Appointment
                </h3>
                <span className="text-sm text-lightTextColor">
                  {appointment?.length ? appointment?.length : 0}
                </span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-6/12 lg:w-4/12">
            <div className="md:mx-3 my-3 m-0   shadow-lg shadow-gray-300 gap-5  bg-[#F8ECFF] rounded-lg flex  items-center px-5 py-9">
              <div className="w-[50px] h-[50px] rounded-full flex items-center justify-center bg-[#a78bfaa6]">
                <img className=" w-[25px] h-[25px] " src={img6} alt="" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-textColor ">
                  Pending Appointment
                </h3>
                <span className="text-sm text-lightTextColor">
                  {pendingAppointment?.length ? pendingAppointment?.length : 0}
                </span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-6/12 lg:w-4/12">
            <div className="md:mx-3 my-3 m-0   shadow-lg shadow-gray-300 gap-5  bg-[#FAFFDE] rounded-lg flex  items-center px-5 py-9">
              <div className="w-[50px] h-[50px] rounded-full flex items-center justify-center bg-[#FDE68A]">
                <img className=" w-[25px] h-[25px] " src={img7} alt="" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-textColor ">
                  Confirmed Appointment
                </h3>
                <span className="text-sm text-lightTextColor">
                  {confirmedAppointment?.length
                    ? confirmedAppointment?.length
                    : 0}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminDashboardOverview;
