import React from "react";
import doctorsAppointment from "../../../Assets/images/Dorctors/doctorsAppointment.jpg";
import { Link } from "react-router-dom";

const HomeAppointment = () => {
  return (
    <div className="mx-auto py-20 bg-gradient-to-r from-thirdLightPrimary via-whiteSmoke to-thirdLightPrimary">
      <div className="w-[90%] lg:w-[80%] mx-auto">
        {/* ✅ Section Title */}
        <div className="text-center mb-10">
          <h3 className="bg-thirdLightPrimary w-44 mx-auto text-sm font-semibold text-gray-700 py-1 rounded-md text-center">
            🌿 NATURE WITH RENIX
          </h3>
          <h1 className="text-secondary text-center font-bold text-3xl md:text-4xl mt-3 uppercase">
            Discover Innovation
          </h1>
        </div>

        {/* ✅ Card Container */}
        <div className="mt-10 grid grid-cols-1 mdl:grid-cols-2 items-center gap-8">
          <div className="flex items-center justify-center w-full order-2 mdl:order-1 mt-6 mdl:mt-0">
            <div>
              <h2 className="text-xl font-semibold mb-4">
                Connect with our Health Experts
              </h2>
              <p>Get a free consultation with just a click!</p>
              <Link
                to="/contact"
                className="px-5 py-3 border-2  rounded-full block mt-4 w-fit"
              >
                Get Appointment
              </Link>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden w-full h-full max-h-[400px] order-1 mdl:order-2">
            <img
              src={doctorsAppointment}
              alt="appointment"
              className="w-full h-full object-cover "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAppointment;
