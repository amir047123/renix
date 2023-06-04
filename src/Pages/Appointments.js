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
    const url = `http://localhost:5000/api/v1/user/specific?page=${page}&&size=${size}&&fieldName=${"role"}&&fieldValue=${"doctor"}`;
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
