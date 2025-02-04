import React from "react";
import { Link } from "react-router-dom";

const AllNews = () => {
  return (
    <div>
      <div className="relative m-16">
        <button className="absolute py-1 px-3 -left-8 -top-2 -rotate-[10deg] border border-black black_border bg-primary text-white font-bold">
          রেনিক্স স্বাস্থ্য কথা
        </button>

        <div className="purple_border p-8 border border-black sm:text-xs">
          Renix
          <span className="font-mono text-primary font-bold"> Health </span>
          is a pioneering healthcare company that combines advanced technology
          with a patient-centered approach to revolutionize the healthcare
          experience.
        </div>
        <Link to="/shasthokotha">
          <button className=" text-primary font-bold lg:hover:underline sm:hover:underline">
            Browse All Video{" "}
          </button>
        </Link>
      </div>

      <div className="relative m-16">
        <button className="absolute py-1 px-3 -left-8 -top-2 -rotate-[10deg] border border-black black_border bg-primary text-white font-bold">
          রেনিক্স সুস্থতার বার্তা
        </button>

        <div className="purple_border p-8 border border-black sm:text-xs">
          Renix
          <span className="font-mono text-primary font-bold"> is more </span>
          than just a brand—it's a powerful message of well-being. With a deep
          understanding of the importance of holistic health, Renix promotes a
          balanced lifestyle, both physically and mentally.
        </div>
        <Link to="/shosthotarbarta">
          <button className=" text-primary font-bold lg:hover:underline sm:hover:underline">
            Browse All Video{" "}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AllNews;
