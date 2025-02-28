import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import img7 from "../../../Assets/dasboard-icon/completed-appointment.png";
import img6 from "../../../Assets/dasboard-icon/pending-appointment.png";
import img2 from "../../../Assets/dasboard-icon/pending-order.png";
import AuthUser from "../../../Hooks/authUser";
import { server_url } from "../../../Config/API";

const DoctorDashboardIndex = () => {
  const [pending, setPending] = useState(0);
  const [rejected, setRejected] = useState(0);
  const [confirmed, setConfirmed] = useState(0);
  const { userInfo } = AuthUser();
  useEffect(() => {
<<<<<<< HEAD
    const url = `http://localhost:3001/api/v1/appointment/specific?doctorId=${
=======
    const url = `${server_url}/appointment/specific?doctorId=${
>>>>>>> 47bb5cedf53f5587c42b72757c4a2d7953614036
      userInfo?._id
    }&&appointmentStatus=${"pending"}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setPending(data?.total);
      });
  }, [userInfo?._id]);
  useEffect(() => {
<<<<<<< HEAD
    const url = `http://localhost:3001/api/v1/appointment/specific?doctorId=${
=======
    const url = `${server_url}/appointment/specific?doctorId=${
>>>>>>> 47bb5cedf53f5587c42b72757c4a2d7953614036
      userInfo?._id
    }&&appointmentStatus=${"confirmed"}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setConfirmed(data?.total);
      });
  }, [userInfo?._id]);
  useEffect(() => {
<<<<<<< HEAD
    const url = `http://localhost:3001/api/v1/appointment/specific?doctorId=${
=======
    const url = `${server_url}/appointment/specific?doctorId=${
>>>>>>> 47bb5cedf53f5587c42b72757c4a2d7953614036
      userInfo?._id
    }&&appointmentStatus=${"rejected"}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setRejected(data?.total);
      });
  }, [userInfo?._id]);
  return (
    <section className="py-8">
      <div className="container w-full md:max-w-6xl px-8">
        <div className="flex items-center flex-wrap  ">
          <Link
            to="/doctorDashboard/appointment/rejectedAppointment"
            className="w-full md:w-6/12 lg:w-4/12"
          >
            <div className="md:mx-3 my-3 m-0   shadow-lg shadow-gray-300 gap-5  bg-[#F8FFEC] rounded-lg flex  items-center px-5 py-9">
              <div className="w-[50px] h-[50px] rounded-full flex items-center justify-center bg-[#D9F99D]">
                <img className=" w-[25px] h-[25px] " src={img2} alt="" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-textColor ">
                  Rejected Appointment
                </h3>
                <span className="text-sm text-lightTextColor">
                  {rejected ? rejected : 0}
                </span>
              </div>
            </div>
          </Link>

          <Link
            to="/doctorDashboard/appointment/pendingAppointment"
            className="w-full md:w-6/12 lg:w-4/12"
          >
            <div className="md:mx-3 my-3 m-0   shadow-lg shadow-gray-300 gap-5  bg-[#F8ECFF] rounded-lg flex  items-center px-5 py-9">
              <div className="w-[50px] h-[50px] rounded-full flex items-center justify-center bg-[#a78bfaa6]">
                <img className=" w-[25px] h-[25px] " src={img6} alt="" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-textColor ">
                  Pending Appointment
                </h3>
                <span className="text-sm text-lightTextColor">
                  {pending ? pending : 0}
                </span>
              </div>
            </div>
          </Link>
          <Link
            to="/doctorDashboard/appointment/confirmedAppointment"
            className="w-full md:w-6/12 lg:w-4/12"
          >
            <div className="md:mx-3 my-3 m-0   shadow-lg shadow-gray-300 gap-5  bg-[#FAFFDE] rounded-lg flex  items-center px-5 py-9">
              <div className="w-[50px] h-[50px] rounded-full flex items-center justify-center bg-[#FDE68A]">
                <img className=" w-[25px] h-[25px] " src={img7} alt="" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-textColor ">
                  Confirmed Appointment
                </h3>
                <span className="text-sm text-lightTextColor">
                  {confirmed ? confirmed : 0}
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DoctorDashboardIndex;
