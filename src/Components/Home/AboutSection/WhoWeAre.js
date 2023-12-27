import React, { useEffect, useState } from "react";
import "./WhoWeAre.css";
const WhoWeAre = () => {
  const allData = [
    {
      _id: 1,
      title: "Who we are",
      description:
        "Renix Unani Laboratories Limited is a Unani medicine manufacturing company approved by the Department of Drug Administration, Government of the People's Republic of Bangladesh. It specializes in producing and marketing internationally standardized Unani natural medicines, adhering to the guidelines set by the National Unani Formulary of Bangladesh and the World Health Organization (WHO) for production.",
    },
    {
      _id: 2,
      title: "What we do",
      description:
        "Renix Laboratories (Unani) Ltd. produces high-quality, natural medicine without harmful side effects, utilizing knowledge of the 5000-year-old Unani treatment system. With the global rise of antibiotic resistance and harmful side effects of modern medicine, the company recognizes the importance of promoting herbal medicines. Renix Laboratories has also appointed doctors to provide Unani health services in remote areas of the country. The company's expertise in natural herbs and commitment to Unani treatment make it a leader in the healthcare industry.",
    },
  ];

  return (
    <div className="md:flex  mx-auto    py-36 bg-gradient-to-r from-thirdLightPrimary via-whiteSmoke to-thirdLightPrimary">
      <div className="w-[80%] lg:flex mx-auto">
        {allData.map((data) => (
          <div
            className="border-2 border-primary justify-center p-8 sm:w-[320px] md:w-[470px] lg:w-[500px] mb-8 rounded-3xl mx-auto"
            key={data._id}
          >
            <h3 className="text-secondary font-bold text-xl">{data.title}</h3>
            <p className="w-[50px] border-2 border-primary"></p>
            <p className="mt-5 text-textColor">{data.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhoWeAre;
