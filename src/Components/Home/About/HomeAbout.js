import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import homeAbout from "../../../Assets/images/about/homeAbout.webp";
const HomeAbout = () => {
  return (
    <div className="mx-auto py-10  bg-gradient-to-r from-thirdLightPrimary via-whiteSmoke to-thirdLightPrimary">
      <div className="w-[90%] lg:w-[95%] mx-auto">
        {/* ✅ Section Title */}
        <div className="text-center mb-10">
          <h3 className="bg-thirdLightPrimary w-44 mx-auto text-sm font-semibold text-gray-700 py-1 rounded-md text-center">
            🌿 Know Us
          </h3>
          <h1 className="text-secondary font-bold text-2xl md:text-3xl mt-3 uppercase">
            About Us
          </h1>
        </div>

        {/* ✅ Card Container */}
        <div className="mt-10 grid grid-cols-1 mdl:grid-cols-2 items-center gap-8">
          <div className="relative border-2 border-primary rounded-xl overflow-hidden w-full h-full max-h-[600px]  ">
            <img
              src={homeAbout}
              alt="about"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-0 md:left-40 lgl:left-80 bottom-0 -right-0 mdl:bg-gradient-to-r from-transparent via-[#E0EECA]/50 to-[#E0EECA]" />
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4 text-secondary">
              Renix – The Leading Unani Medicine Brand
            </h2>

            <p className="text-justify">
              Renix Unani Laboratories Ltd is the best unani medicine
              manufacturing company in Bangladesh, has been carrying forward a
              legacy—one that began over 5,000 years ago. A legacy of healing,
              of harnessing nature’s power, and of providing safe, effective
              remedies without harmful side effects. Renix Unani started with a
              simple yet powerful belief, “Natural Solution for Healthy Life”.
              For centuries, the unani system of medicine has been a trusted
              path to healing, relying on the wisdom of ancient scholars and the
              potency of natural ingredients. Renix Unani Laboratories Ltd
              embraced this timeless tradition and blended it with modern
              manufacturing excellence to create medicines that you can rely on
              for yourself and your family.
            </p>
            <Link
              to="/about"
              className="px-5 py-3 border-2 rounded-full block mt-4 w-fit bg-primary text-white flex items-center gap-2"
            >
              Learn More <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
