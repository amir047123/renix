import React from "react";
import homeAbout from "../../../Assets/images/Plant .jpg";
const OurMotto = () => {
  return (
    <div className="mx-auto py-10  bg-gradient-to-r from-thirdLightPrimary via-whiteSmoke to-thirdLightPrimary">
      <div className="w-[90%] lg:w-[95%] mx-auto">
        {/* ✅ Section Title */}
        <div className="text-center mb-10">
          <h3 className="bg-thirdLightPrimary w-44 mx-auto text-sm font-semibold text-gray-700 py-1 rounded-md text-center">
            ⚗️ Powered by Science
          </h3>
          <h1 className="text-secondary font-bold text-2xl md:text-3xl mt-3 uppercase">
            Our Motto
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
              🌱 Nature’s Touch, Science’s Trust{" "}
            </h2>

            <p className="text-justify">
              We believe that true wellness comes from a perfect balance between
              <strong> nature</strong> and <strong>science</strong>. Our mission
              is to harness the power of <strong>natural ingredients</strong>,
              backed by <strong>scientific research</strong>, to create
              solutions that promote better health, sustainable living, and
              overall well-being. By carefully selecting the finest{" "}
              <strong>botanical extracts</strong>,
              <strong>herbal remedies</strong>, and{" "}
              <strong>eco-friendly solutions</strong>, we ensure that every
              product we create is both highly effective and environmentally
              responsible. We are committed to helping individuals embrace a
              healthier lifestyle, free from <strong>harmful chemicals</strong>,
              while staying connected to the purity of nature.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMotto;
