import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { server_url } from "../../../../Config/API";
import AuthUser from "../../../../Hooks/authUser";
import { singleImageUpload } from "../../../../Hooks/ImageUpload";
import UpdateHooks from "../../../../Hooks/UpdateHooks";
import { disctricData } from "../../../../Utils/DistricData";

const UpdateAccount = () => {
  const [imageUrl, setMyImageUrl] = useState(null);
  const { userInfo } = AuthUser();
  const [user] = useState({});

  const BASE_URL = `${server_url}/user/${userInfo?._id}`;
  // useEffect(() => {
  //   GetUserHook(BASE_URL, setUser, setIsUserLoading);
  // }, [BASE_URL]);

  useEffect(() => {
    setMyImageUrl(user?.imageURL);
  }, [user]);

  const { register, handleSubmit } = useForm();

  const handleChangeUploadImage = async (event) => {
    const image = event.target.files[0];
    const formData = new FormData();
    formData.append("image", image);

    singleImageUpload(formData, setMyImageUrl);
  };

  //---------------------update profile-------------
  const handleUpdateProfile = async (data) => {
    data.imageURL = imageUrl;

    const newData = {
      number: data.number || user.number,
      city: data.city || user.gender,
      country: data.country || user.country,
      address: data.address || user.address,
      zipCode: data.zipCode || user.zipCode,
      doctorDegree: data.doctorDegree || user.doctorDegree,
      doctorType: data.doctorType || user.doctorType,
      department: data.department || user.department,
      img: imageUrl,
    };
    UpdateHooks(BASE_URL, newData, true, "Profile Updated");
  };

  // if (isUserLoading) {
  //   return <Loader></Loader>;
  // }

  return (
    <div className="bg-[#f5f8ff] w-full">
      <div className="pt-10 w-[80%] mx-auto">
        {/* img here */}
        <div className="w-lg h-48 bg-gradient-to-r from-primary to-thirdLightPrimary rounded-2xl"></div>
        <div className="grid grid-cols-12 w-fit mx-auto md:gap-10">
          <div className="col-span-12 lg:col-span-3 flex justify-center">
            <div className="-mt-12">
              {imageUrl ? (
                <img
                  className="rounded-full w-36 h-36 object-cover border-4 border-[#f5f8ff] mx-auto"
                  src={imageUrl}
                  alt="This is profile pic"
                />
              ) : (
                <img
                  className="rounded-full w-36 border-4 border-[#f5f8ff] mx-auto"
                  src={
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXnHCfhPKKAy1zSl8__FmI1hsMmSR-MVgh5IcfD_-43Q&s"
                  }
                  alt="This is profile pic"
                />
              )}
              <h2 className="text-lg font-medium mt-5">{userInfo?.fullName}</h2>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-9 w-fit lg:w-full mx-auto mb-8">
            <h2 className="text-2xl font-semibold pt-5">Profile </h2>

            <div className="h-[3px] w-10 bg-gradient-to-r from-primary to-thirdLightPrimary"></div>
            <input
              onChange={handleChangeUploadImage}
              type={"file"}
              // accept="image/png"
              accept="image/*"
              className="bg-gradient-to-r from-primary to-thirdLightPrimary py-2 px-7 text-white font-medium rounded-md mt-3"
            />

            {/* Account settings changing password input form */}
            <form
              onSubmit={handleSubmit(handleUpdateProfile)}
              className="mt-10 max-w-lg"
            >
              <div className="grid grid-cols-2 gap-x-4 mt-4">
                <div>
                  <label className="block">
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium">
                      Phone Number
                    </span>
                    <input
                      type="tel"
                      {...register("number", { required: false })}
                      pattern="^(?:(?:\+|00)88|01)?\d{11}$"
                      defaultValue={user?.number}
                      className="mt-2 px-3 py-2 border-2 shadow-sm focus:outline-none border-thirdLightPrimary bg-transparent placeholder-slate-400  block w-full rounded-md sm:text-sm "
                      placeholder="01934****39"
                    />
                  </label>
                </div>

                <div>
                  <label
                    for="default"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    City
                  </label>
                  <select
                    {...register("city", { required: false })}
                    defaultValue={user?.city}
                    className="border-2 text-gray-900 mb-6 text-sm rounded-lg block w-full p-2.5 focus:outline-none border-thirdLightPrimary bg-transparent"
                  >
                    <option selected hidden>
                      Choose One
                    </option>
                    ;
                    {disctricData?.map((disName) => {
                      return (
                        <option
                          value={disName}
                          selected={user?.city === disName}
                        >
                          {disName}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div>
                  <label
                    for="default"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Country
                  </label>
                  <select
                    {...register("country", { required: false })}
                    defaultValue={user?.country}
                    className="border-2 text-gray-900 mb-6 text-sm rounded-lg block w-full p-2.5 focus:outline-none border-thirdLightPrimary bg-transparent"
                  >
                    <option selected hidden>
                      Choose One
                    </option>
                    <option
                      value="bangladesh"
                      selected={user?.country === "bangladesh"}
                    >
                      Bangladesh
                    </option>
                  </select>
                </div>

                <label className="block">
                  <span className=" block text-sm font-medium">Address</span>
                  <input
                    type="text"
                    {...register("address", { required: true })}
                    defaultValue={user?.address}
                    className="mt-2 px-3 py-2 border-2 shadow-sm focus:outline-none border-thirdLightPrimary bg-transparent placeholder-slate-400  block w-full rounded-md sm:text-sm "
                    placeholder="Enter your address"
                  />
                </label>
                <label className="block">
                  <span className=" block text-sm font-medium">Zip Code</span>
                  <input
                    type="number"
                    {...register("zipCode", { required: false })}
                    defaultValue={user?.zipCode}
                    className="mt-2 px-3 py-2 border-2 shadow-sm focus:outline-none border-thirdLightPrimary bg-transparent placeholder-slate-400  block w-full rounded-md sm:text-sm "
                    placeholder="Enter your zip code"
                  />
                </label>
                <label className="block">
                  <span className=" block text-sm font-medium">Department</span>
                  <input
                    type="text"
                    {...register("department", { required: true })}
                    defaultValue={user?.department}
                    className="mt-2 px-3 py-2 border-2 shadow-sm focus:outline-none border-thirdLightPrimary bg-transparent placeholder-slate-400  block w-full rounded-md sm:text-sm "
                    placeholder="Enter your department"
                  />
                </label>
                <label className="block mt-5">
                  <span className=" block text-sm font-medium">
                    Type of doctor
                  </span>
                  <input
                    type="text"
                    {...register("doctorType", { required: true })}
                    defaultValue={user?.doctorType}
                    className="mt-2 px-3 py-2 border-2 shadow-sm focus:outline-none border-thirdLightPrimary bg-transparent placeholder-slate-400  block w-full rounded-md sm:text-sm "
                    placeholder="Adults only"
                  />
                </label>
                <label className="block mt-5">
                  <span className=" block text-sm font-medium">
                    Medical degree
                  </span>
                  <input
                    type="text"
                    {...register("doctorDegree", { required: true })}
                    defaultValue={user?.doctorDegree}
                    className="mt-2 px-3 py-2 border-2 shadow-sm focus:outline-none border-thirdLightPrimary bg-transparent placeholder-slate-400  block w-full rounded-md sm:text-sm "
                    placeholder="B.Med, MB, BM"
                  />
                </label>
              </div>

              <button
                type="submit"
                className="bg-gradient-to-r from-primary to-thirdLightPrimary py-2 px-7 text-white font-medium rounded-md mt-3 ml-auto block"
              >
                Save changes
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateAccount;
