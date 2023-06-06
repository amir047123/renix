import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PostHooks from "../../Hooks/PostHooks";
import AuthUser from "../../Hooks/authUser";
import { useEffect } from "react";

const AppointmentForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { userInfo } = AuthUser();
  useEffect(() => {
    if (!userInfo?.role) {
      navigate("/login");
    }
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    area: "",
    city: "",
    state: "",
    postCode: "",
    doctorId: id,
    patientId: userInfo?._id,
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const appointmentInfo = formData;
    await PostHooks(
      "http://localhost:5000/api/v1/appointment/postAppointment",
      appointmentInfo,
      "Your appointment has been sent to the doctor for review"
    );
    navigate("/appointment");
  };
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <div class="flex items-center justify-center p-12 ">
        {/* <!-- Author: FormBold Team --> */}
        <div class="mx-auto w-full max-w-[550px] bg-white  p-5 rounded shadow-md">
          <form onSubmit={handleSubmit}>
            <div class="mb-5">
              <label
                for="name"
                class="mb-3 block text-base font-medium text-[#07074D]"
              >
                Full Name
              </label>
              <input
                onChange={handleChange}
                type="text"
                name="name"
                id="name"
                placeholder="Full Name"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div class="mb-5">
              <label
                for="phone"
                class="mb-3 block text-base font-medium text-[#07074D]"
              >
                Phone Number
              </label>
              <input
                type="number"
                onChange={handleChange}
                name="phone"
                id="phone"
                placeholder="Enter your phone number"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div class="mb-5">
              <label
                for="email"
                class="mb-3 block text-base font-medium text-[#07074D]"
              >
                Email Address
              </label>
              <input
                onChange={handleChange}
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div class="-mx-3 flex flex-wrap">
              <div class="w-full px-3 sm:w-1/2">
                <div class="mb-5">
                  <label
                    for="date"
                    class="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Date
                  </label>
                  <input
                    onChange={handleChange}
                    type="date"
                    name="date"
                    id="date"
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
              <div class="w-full px-3 sm:w-1/2">
                <div class="mb-5">
                  <label
                    for="time"
                    class="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Time
                  </label>
                  <input
                    onChange={handleChange}
                    type="time"
                    name="time"
                    id="time"
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
            </div>

            <div class="mb-5 pt-3">
              <label class="mb-5 block text-base font-semibold text-[#07074D] sm:text-xl">
                Address Details
              </label>
              <div class="-mx-3 flex flex-wrap">
                <div class="w-full px-3 sm:w-1/2">
                  <div class="mb-5">
                    <input
                      onChange={handleChange}
                      type="text"
                      name="area"
                      id="area"
                      placeholder="Enter area"
                      class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
                <div class="w-full px-3 sm:w-1/2">
                  <div class="mb-5">
                    <input
                      onChange={handleChange}
                      type="text"
                      name="city"
                      id="city"
                      placeholder="Enter city"
                      class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
                <div class="w-full px-3 sm:w-1/2">
                  <div class="mb-5">
                    <input
                      onChange={handleChange}
                      type="text"
                      name="state"
                      id="state"
                      placeholder="Enter state"
                      class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
                <div class="w-full px-3 sm:w-1/2">
                  <div class="mb-5">
                    <input
                      onChange={handleChange}
                      type="text"
                      name="postCode"
                      id="post-code"
                      placeholder="Post Code"
                      class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <button
                type="submit"
                class="hover:shadow-form w-full rounded-md bg-primary py-3 px-8 text-center text-base font-semibold text-white outline-none"
              >
                Book Appointment
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AppointmentForm;
