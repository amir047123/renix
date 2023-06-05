import React from "react";
import doctorImg from "../../Assets/images/doctor.jpg";
import { Link } from "react-router-dom";
import icon from "../../Assets/images/Dorctors/team-custom-icon-4.png";

const DoctorsCard = ({ doctor }) => {
  return (
    <div className="w-56 mb-3 shadow-lg" relative>
      <div className="">
        <img
          src={icon}
          alt="icon"
          className="bg-primary w-12  h-12  rounded-full text-xs  ml-[150px] mt-4 text-white absolute"
        />
        <img
          src={doctor?.img ? doctor.img : doctorImg}
          alt=""
          className="w-36 h-36 rounded-full border-2 border-primary mx-auto mt-7"
        />
      </div>
      <div className="w-fit mx-auto">
        <h1 className="text-secondary text-sm font-semibold mt-5">
          {doctor?.fullName}
        </h1>
        <p className="text-lightPrimary text-xs mt-1">{doctor?.department}</p>
        <p className="text-xs text-textColor mt-3 leading-relaxed">
          {doctor?.doctorDegree}
        </p>
      </div>

      <div class="flex justify-center p-6 pt-0 mt-2">
        <Link
          to={`/appointment/${doctor?._id}`}
          class="inline-flex items-center justify-center flex-1 h-10 gap-2 px-5 text-sm font-medium tracking-wide text-white transition duration-300 rounded focus-visible:outline-none whitespace-nowrap bg-primary/80 hover:bg-primary/90 focus:bg-primary disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none"
        >
          <span class="order-2">Take Appointment</span>
          <span class="relative only:-mx-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1.5"
              role="graphics-symbol"
              aria-labelledby="title-06 desc-06"
            >
              <title id="title-06">Icon title</title>
              <desc id="desc-06">A more detailed description of the icon</desc>
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
              />
            </svg>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default DoctorsCard;
