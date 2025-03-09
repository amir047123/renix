import React from "react";
import doctorsAppointment from "../../../Assets/images/Dorctors/doctorsAppointment.jpg";

const HomeAppointment = () => {
  return (
    <div className="mx-auto py-10 ">
      <div className="w-[90%] lg:w-[80%] mx-auto">
        {/* ✅ Section Title */}
        <div className="text-center mb-12">
          {/* <h3 className="bg-thirdLightPrimary  w-48 font-semibold  mx-auto text-sm text-gray-700 py-1 rounded-md">
            🌿 Expert Care, Anytime
          </h3> */}
          <h2 className="text-secondary font-bold text-2xl md:text-3xl mt-3 uppercase">
            Book a Free Health Consultation Today!
          </h2>
        </div>

        {/* ✅ Card Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          {/* ✅ Text & Button */}
          <div className="flex items-start justify-center w-full order-2 md:order-1">
            <div>
              <h2 className="text-lg md:text-xl font-semibold mb-3 text-secondary">
                Connect with Our Health Experts
              </h2>
              <p className="text-gray-600 text-sm md:text-base">
                Get a free consultation with just a click!{" "}
              </p>
              <a
                href="https://renixcare.com/doctor"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-primary text-white  text-sm md:text-base font-medium rounded-full mt-4 inline-block hover:bg-opacity-90 transition duration-300 ease-in-out shadow-md hover:shadow-lg"
              >
                Get Appointment
              </a>
            </div>
          </div>

          {/* ✅ Image Section */}
          <div className="rounded-xl overflow-hidden w-full h-full max-h-[350px] order-1 md:order-2 shadow-lg border-2 border-primary">
            <img
              src={doctorsAppointment}
              alt="Doctor Appointment"
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAppointment;
