import React from "react";
import img1 from "../../Assets/team/ceo.png";

const Ceo = () => {
  return (
    <section className="">
      <div className="max-w-screen-lg mx-auto">
        {/* ✅ Section Heading */}
        <h2 className="font-bold text-center text-3xl uppercase bg-secondary text-white py-4 rounded-t-lg">
          Message from CEO
        </h2>

        {/* ✅ Content Container */}
        <div className="lg:flex items-start gap-8 bg-white shadow-lg p-6 rounded-b-lg">
          {/* ✅ CEO Image & Details */}
          <div className="flex-shrink-0 text-center lg:text-left">
            <img
              src={img1}
              alt="CEO"
              className="w-52 h-52 mx-auto lg:mx-0 rounded-full shadow-md border-4 border-primary"
            />
            <h3 className="mt-4 text-lg font-bold text-gray-900">
              Mahadi Hasan
            </h3>
            <p className="text-gray-600 text-sm">Chairman & CEO</p>
          </div>

          {/* ✅ Message Content */}
          <div className="mt-6 lg:mt-0">
            <p className="text-gray-700 text-lg font-semibold">
              Dear valued customers and stakeholders,
            </p>
            <p className="text-gray-600 mt-4 leading-relaxed">
              I hope this message finds you in good health and high spirits. It
              is with great pleasure that I reach out to you as the CEO of
              <strong> Renix Unani Laboratories Ltd.</strong> I would like to
              express my sincere gratitude for your unwavering support and trust
              in our company.
            </p>

            <p className="text-gray-600 mt-4 leading-relaxed">
              At <strong>Renix Unani Laboratories Ltd.</strong>, we remain
              dedicated to improving healthcare through the production of{" "}
              <strong>high-quality medicines made from natural herbs.</strong>{" "}
              Our commitment to the **Unani treatment system** is unwavering,
              ensuring safe and effective remedies without side effects.
            </p>

            <p className="text-gray-600 mt-4 leading-relaxed">
              As the CEO, I take immense pride in the positive impact we are
              making in the healthcare industry. Our team of passionate
              professionals is continuously engaged in{" "}
              <strong>research and development</strong> to enhance the quality
              and efficacy of our products, investing in modern scientific
              methods to validate the benefits of natural herbs.
            </p>

            <p className="text-gray-600 mt-4 leading-relaxed">
              We are determined to become a leading pharmaceutical company not
              only in Bangladesh but globally. Our vision is to provide
              **holistic healthcare solutions** that empower individuals to lead
              healthier lives.
            </p>

            <p className="text-gray-600 mt-4 leading-relaxed">
              <strong>Corporate Social Responsibility</strong> is a core value
              at our company. We actively engage in initiatives that contribute
              to the welfare of society, including **free healthcare services,
              supporting education, and environmental sustainability.**
            </p>

            <p className="text-gray-600 mt-4 leading-relaxed">
              I want to express my heartfelt gratitude to each and every one of
              you for your continuous support. It is your trust and confidence
              in our products and services that drive us to excel. Your feedback
              is invaluable in shaping our journey toward continuous
              improvement.
            </p>

            <p className="text-gray-600 mt-4 leading-relaxed">
              As CEO, I assure you that we will remain dedicated to our mission
              and vision, striving to exceed your expectations. Together, we can
              make a significant impact on the healthcare landscape.
            </p>

            <p className="text-gray-600 mt-6 font-semibold">Sincerely,</p>
            <p className="text-gray-700 font-medium">Mahadi Hasan</p>
            <p className="text-gray-600 text-sm">Chairman & CEO</p>
            <p className="text-gray-600 text-sm">
              Renix Unani Laboratories Ltd.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ceo;
