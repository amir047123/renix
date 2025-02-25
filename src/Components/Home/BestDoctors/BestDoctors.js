import React from "react";
import demoDoctor from "../../../Assets/images/doctor.jpg";
import img7 from "../../../Assets/images/Dorctors/team-custom-icon-3.png";

import { useEffect, useState } from "react";
const BestDoctors = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    const url = `http://localhost:3001/api/v1/user`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUser(data?.data);
      });
  }, []);
  const doctors = user?.filter((item) => item?.role === "doctor");
  console.log(doctors);
  return (
    <div className="lg:w-[90%] w-full mx-auto my-10 text-center ">
      <h1 className="text-secondary font-semibold text-3xl mt-3">
        Our Best Doctors
      </h1>
      <p className="mt-3 text-textColor">
        Comprehensive and Personalized Care for Your Well-being{" "}
      </p>
      <div className=" flex gap-6  flex-wrap mx-auto justify-center  mt-14">
        {doctors?.map((Data) => (
          <div className="w-56 mb-3" key={Data._id} relative>
            <div className="">
              <img
                src={img7}
                className="bg-primary w-12  h-12  rounded-full text-xs  ml-[150px] mt-4 text-white absolute"
              />
              <img
                src={Data?.img ? Data.img : demoDoctor}
                alt=""
                className="w-36 h-36 rounded-full border-2 border-primary mx-auto mt-7"
              />
            </div>
            <div className="w-56">
              <h1 className="text-secondary text-sm font-semibold mt-5">
                {Data?.fullName}
              </h1>
              <p className="text-lightPrimary text-xs mt-1">
                {" "}
                {Data?.doctorDegree}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestDoctors;
