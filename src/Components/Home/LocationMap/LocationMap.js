import React from "react";

const LocationMap = () => {
  return (
    <div className="flex justify-center items-center">
    <iframe
      title="Renix Unani Laboratories Limited"
      className="w-full"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7299.902886624259!2d90.4738965!3d23.6703605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b73d69f41d37%3A0xf197a5601f2a766a!2sRenix%20Unani%20Laboratories%20Limited!5e0!3m2!1sen!2sbd!4v1682207114921!5m2!1sen!2sbd"
      height="450"
      style={{ border: "0" }}
      allowfullscreen=""
      loading="lazy"
    ></iframe>
    </div>
  );
};

export default LocationMap;
