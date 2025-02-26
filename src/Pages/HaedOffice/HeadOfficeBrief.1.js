import React from "react";

export function HeadOfficeBrief({ colors }) {
  const { primary, whiteSmoke, textColor, gray } = colors;

  return (
    <div className={`bg-${whiteSmoke} py-8`}>
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl font-bold text-center mb-4 text-${textColor}`}>
          Head Office
        </h2>
        <p className={`text-${gray} text-center mb-4`}>
          Renix Unani Laboratories Limited, Fatullah 1421 Dhaka, Dhaka Division,
          Bangladesh
        </p>
        <p className={`text-center`}>
          Hotline:{" "}
          <a href="tel:+8801884442022" className={`text-${primary}`}>
            01884442022
          </a>
        </p>
        <p className={`text-center mt-4 text-${textColor}`}>
          Email:{" "}
          <a
            href="mailto:info@renixlaboratories.com"
            className={`text-${primary}`}
          >
            info@renixlaboratories.com
          </a>
        </p>
        <p className={`text-center mt-4 text-${textColor}`}>
          Introduction: Renix Laboratories (Unani) Ltd. is contributing to
          healthcare by manufacturing high-quality holistic medicines.
        </p>
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
}
