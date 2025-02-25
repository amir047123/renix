import { motion } from "framer-motion"; // ✅ Adding smooth animations
import React from "react";

const WhoWeAre = () => {
  const allData = [
    {
      _id: 1,
      title: "Who We Are",
      description:
        "Renix Unani Laboratories Limited is a Unani medicine manufacturing company approved by the Department of Drug Administration, Government of the People's Republic of Bangladesh. It specializes in producing and marketing internationally standardized Unani natural medicines, adhering to the guidelines set by the National Unani Formulary of Bangladesh and the World Health Organization (WHO) for production.",
    },
    {
      _id: 2,
      title: "What We Do",
      description:
        "Renix Laboratories (Unani) Ltd. produces high-quality, natural medicine without harmful side effects, utilizing knowledge of the 5000-year-old Unani treatment system. With the global rise of antibiotic resistance and harmful side effects of modern medicine, the company recognizes the importance of promoting herbal medicines. Renix Laboratories has also appointed doctors to provide Unani health services in remote areas of the country. The company's expertise in natural herbs and commitment to Unani treatment make it a leader in the healthcare industry.",
    },
  ];

  return (
    <div className="mx-auto py-20 bg-gradient-to-r from-thirdLightPrimary via-whiteSmoke to-thirdLightPrimary">
      <div className="w-[90%] lg:w-[80%] mx-auto">
        {/* ✅ Section Title */}
        <motion.h1
          className="text-secondary text-center font-bold text-4xl uppercase tracking-wide"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Us
        </motion.h1>
        <p className="text-gray-600 text-center text-lg mt-3">
          Learn more about our mission and commitment to healthcare.
        </p>

        {/* ✅ Card Container */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {allData.map((data, index) => (
            <motion.div
              key={data._id}
              className="border-2 border-primary p-8 rounded-3xl bg-white shadow-md hover:shadow-lg transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              {/* ✅ Title */}
              <h3 className="text-secondary font-bold text-2xl text-center md:text-left">
                {data.title}
              </h3>

              {/* ✅ Underline Divider */}
              <div className="w-16 border-b-4 border-primary my-3 mx-auto md:mx-0"></div>

              {/* ✅ Description */}
              <p className="text-gray-700 text-md text-center md:text-left">
                {data.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
