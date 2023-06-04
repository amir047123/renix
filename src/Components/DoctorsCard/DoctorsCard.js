import React from "react";
import doctorImg from "../../Assets/images/doctor.jpg";
import { Link } from "react-router-dom";

const DoctorsCard = ({ doctor }) => {
  return (
    <div class="overflow-hidden text-center bg-primary/10 rounded shadow-md text-slate-500 shadow-slate-200 max-w-[250px]">
      <figure class="p-6 pb-0">
        <span class="relative inline-flex items-center justify-center w-20 h-20 text-white rounded-full">
          <img
            src={doctor?.img ? doctor.img : doctorImg}
            alt="user name"
            title="user name"
            width="100"
            height="100"
            class="max-w-full border-primary border-2 rounded-full"
          />
        </span>
      </figure>

      <div class="p-6">
        <header class="mb-4">
          <h3 class="text-xl font-medium text-slate-700">{doctor?.fullName}</h3>
          <p class="text-sm text-slate-400">{doctor?.department}</p>
          <p class="text-sm text-slate-400">{doctor?.doctorDegree}</p>
        </header>
      </div>

      <div class="flex justify-center p-6 pt-0">
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
