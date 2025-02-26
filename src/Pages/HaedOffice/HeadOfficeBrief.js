import React from "react";

const HeadOfficeComponent = () => {
  const colors = {
    primary: "#90C347",
    lightPrimary: "#A6CF6C",
    secondLightPrimary: "#BCDB91",
    thirdLightPrimary: "#D3E7B5",
    whiteSmoke: "#E9F3DA",
    // secondary color
    secondary: "#0A2004",
    textColor: "#3B4D36",
    lightTextColor: "#6C7968",
    darkGray: "#9DA69B",
    gray: "#CED2CD",
  };

  const { whiteSmoke } = colors;

  return (
    <div className={`bg-${whiteSmoke} py-8`}>
      <div>
        <h1 className="text-center"> Head Office </h1>
      </div>
      <div className="card">
        <h2>Renix Laboratories (Unani) Ltd.</h2>
        <p>
          Renix Laboratories (Unani) Ltd. is contributing to healthcare by
          producing high-quality complete medicine with all-natural herbs. In
          the face of increasing antibiotic resistance and the side effects of
          medicines, alternative medicine has garnered worldwide interest. By
          modernizing the scientific method through extensive research on the
          Unani treatment system from 5000 years ago, Unani treatment has proven
          to be successful and effective without side effects.
        </p>
        <p>
          The Hon'ble Prime Minister of Bangladesh has recognized the importance
          of herbal medicine production by making timely decisions.
          Approximately 350 Unani and Ayurvedic doctors have been appointed in
          all hospitals and upazila health complexes of Bangladesh, with
          recruitment underway for remaining upazilas. Renix Laboratories has
          appointed around 20 doctors permanently, who are providing Unani
          health services in remote areas of the country.
        </p>
      </div>

      <div className="container mx-auto px-4">
        <div className="mt-6 flex justify-center">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.421014802273!2d90.41894241540117!3d23.608100268347846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf370634a81f%3A0xedd5d208d564c437!2sRenix%20Unani%20Laboratories%20Limited!5e0!3m2!1sen!2sbd!4v1620330605306!5m2!1sen!2sbd"
            className="w-2/3 h-64"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default HeadOfficeComponent;
