import React from "react";
import DoctorsCard from "../Components/DoctorsCard/DoctorsCard";
import { useState } from "react";
import { useEffect } from "react";
import Pagination from "../shared/Pagination/Pagination";

const Appointments = () => {
  const [doctors, setDoctors] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(6);

  useEffect(() => {
    const url = ` https://renixserver.niroghealthplus.com/api/v1/user/specific?page=${page}&&size=${size}&&fieldName=${"role"}&&fieldValue=${"doctor"}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setDoctors(data?.data);
        setQuantity(data?.total);
        // console.log("data", data);
      });
  }, [page, size]);
  return (
    <div className=" min-h-screen bg-gray-100 px-10">
      <h2 className="text-center text-2xl font-semibold my-5 text-primary">
        Our Popular Doctors
      </h2>
      <p className="max-w-md text-sm text-left mx-auto mb-5 ">
        No matter your age, at Cook County Health your health and wellness are
        our top priorities. Now accepting new primary care and pediatric
        patients at Belmont Cragin Health Center.
      </p>
      <div className="my-5 flex flex-wrap gap-5">
        {doctors?.map((doctor) => (
          <DoctorsCard key={doctor?._key} doctor={doctor} />
        ))}
      </div>
      <Pagination
        quantity={quantity}
        page={page}
        setPage={setPage}
        size={size}
        setSize={setSize}
      />
    </div>
  );
};

export default Appointments;
