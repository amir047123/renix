import React from "react";
import img1 from "../../Assets/team/founder.png";

const Message = () => {
  return (
    <section className=" ">
      <div className="max-w-screen-lg mx-auto">
        {/* ✅ Section Heading */}
        <h2 className="font-bold text-center text-3xl uppercase bg-secondary text-white py-4 rounded-t-lg">
          Message from Founder and Managing Director
        </h2>

        {/* ✅ Content Container */}
        <div className="lg:flex items-start gap-8 bg-white shadow-lg p-6 rounded-b-lg">
          {/* ✅ Founder Image */}
          <div className="flex-shrink-0 text-center lg:text-left">
            <img
              src={img1}
              alt="Founder"
              className="w-52 h-52 mx-auto lg:mx-0 rounded-full shadow-md border-4 border-primary"
            />
            <h3 className="mt-4 text-lg font-bold text-gray-900">Abu Hanif</h3>
            <p className="text-gray-600 text-sm">Founder & Managing Director</p>
          </div>

          {/* ✅ Message Content */}
          <div className="mt-6 lg:mt-0">
            <p className="text-gray-700 text-lg font-semibold">
              Dear valued customers and stakeholders,
            </p>
            <p className="text-gray-600 mt-4 leading-relaxed">
              It is my pleasure to welcome you to{" "}
              <strong>Renix Unani Laboratories Ltd.</strong>
              where we strive to provide high-quality and holistic healthcare
              solutions using all-natural herbs. At Renix Unani Laboratories
              Ltd., we are committed to promoting the Unani treatment system
              that has been proven to be successful and effective without any
              side effects.
            </p>

            <p className="text-gray-600 mt-4 leading-relaxed">
              As the Managing Director, I take pride in the fact that we are
              contributing positively to the healthcare industry by
              manufacturing
              <strong> high-quality medicine using all-natural herbs.</strong>
              Our company is dedicated to promoting alternative medicine, and we
              continuously research ways to enhance our products and services.
            </p>

            <p className="text-gray-600 mt-4 leading-relaxed">
              We are committed to our vision of becoming the leading provider of
              Unani treatment solutions in the region. Our success is not just
              measured in financial growth but also in how we{" "}
              <strong>positively impact lives.</strong>
            </p>

            <p className="text-gray-600 mt-4 leading-relaxed">
              At Renix Unani Laboratories Ltd., we actively engage in
              <strong> Corporate Social Responsibility</strong> by providing
              free healthcare services, promoting education, and supporting
              various social and environmental causes.
            </p>

            <p className="text-gray-600 mt-6 font-semibold">Sincerely,</p>
            <p className="text-gray-700 font-medium">Abu Hanif</p>
            <p className="text-gray-600 text-sm">Founder & Managing Director</p>
            <p className="text-gray-600 text-sm">
              Renix Unani Laboratories Ltd.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Message;
