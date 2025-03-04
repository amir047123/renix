import React from "react";
import { FaCheckCircle, FaFlask, FaMicroscope } from "react-icons/fa";

const ResearchDevelopment = () => {
  return (
    <div className="bg-gradient-to-r from-thirdLightPrimary via-whiteSmoke to-thirdLightPrimary py-16 px-6 md:px-12">
      <div className="container mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
          Our Research & Development
        </h2>
        <p className="text-secondary text-md md:w-3/4 mx-auto">
          At Renix Unani Laboratories, we invest in cutting-edge research to
          develop high-quality herbal products that ensure safety, efficacy, and
          purity.
        </p>
      </div>

      {/* R&D Features */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto">
        {/* Feature 1 */}
        <div className="bg-white shadow-lg rounded-xl p-6 text-center flex flex-col items-center transition-transform duration-300 hover:scale-105">
          <FaFlask className="text-primary text-5xl mb-4" />
          <h3 className="text-lg font-semibold text-secondary">
            Innovative Formulations
          </h3>
          <p className="text-gray-600 mt-2">
            Our team constantly works on new and improved herbal formulations
            for better health outcomes.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="bg-white shadow-lg rounded-xl p-6 text-center flex flex-col items-center transition-transform duration-300 hover:scale-105">
          <FaMicroscope className="text-primary text-5xl mb-4" />
          <h3 className="text-lg font-semibold text-secondary">
            Advanced Testing
          </h3>
          <p className="text-gray-600 mt-2">
            Every product undergoes rigorous lab testing to meet the highest
            safety and quality standards.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="bg-white shadow-lg rounded-xl p-6 text-center flex flex-col items-center transition-transform duration-300 hover:scale-105">
          <FaCheckCircle className="text-primary text-5xl mb-4" />
          <h3 className="text-lg font-semibold text-secondary">
            Certified Quality
          </h3>
          <p className="text-gray-600 mt-2">
            We adhere to global certifications to ensure our herbal medicines
            are both safe and effective.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResearchDevelopment;
