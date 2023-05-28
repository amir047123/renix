import React, { useEffect, useState } from "react";
import AuthUser from "../../../../Hooks/authUser";
import { server_url } from "../../../../Config/API";

const ViewProfile = () => {
  const [user, setUser] = useState();
  const { userInfo } = AuthUser();
  useEffect(() => {
    fetch(`${server_url}/user/${userInfo?._id}`)
      .then((res) => res.json())
      .then((data) => setUser(data?.data));
  }, [userInfo?._id]);

  return (
    <div className="bg-[#f5f8ff] w-full">
      <div className="pt-10 w-[80%] mx-auto">
        {/* img here */}
        <div className="w-lg h-48 bg-gradient-to-r from-primary to-thirdLightPrimary rounded-2xl"></div>
        <div className="grid grid-cols-12 w-fit mx-auto md:gap-10">
          <div className="col-span-12 lg:col-span-3 flex justify-center">
            <div className="-mt-12">
              {user?.img ? (
                <img
                  className="rounded-full w-36 h-36 object-cover border-4 border-[#f5f8ff] mx-auto"
                  src={user?.img}
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
              <h2 className="text-lg font-medium mt-5">{user?.fullName}</h2>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-9 w-fit lg:w-full mx-auto mb-8">
            <h2 className="text-2xl font-semibold pt-5">Profile </h2>

            <div className="h-[3px] w-10 bg-gradient-to-r from-primary to-thirdLightPrimary"></div>
            {/* Account settings changing password input form */}
            <h2 className="text-lg mt-4 p-3 border border-primary rounded-lg shadow">
              <span className="font-bold text-primary">Name: </span>
              {user?.fullName}
            </h2>
            <h2 className="text-lg mt-4 p-3 border border-primary rounded-lg shadow">
              <span className="font-bold text-primary">Email: </span>
              {user?.email}
            </h2>
            <h2 className="text-lg mt-4 p-3 border border-primary rounded-lg shadow">
              <span className="font-bold text-primary">Number: </span>
              {user?.number}
            </h2>
            <h2 className="text-lg mt-4 p-3 border border-primary rounded-lg shadow">
              <span className="font-bold text-primary">City: </span>
              {user?.city}
            </h2>
            <h2 className="text-lg mt-4 p-3 border border-primary rounded-lg shadow">
              <span className="font-bold text-primary">Address: </span>
              {user?.address}
            </h2>
            <h2 className="text-lg mt-4 p-3 border border-primary rounded-lg shadow">
              <span className="font-bold text-primary">Country: </span>
              {user?.country}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProfile;
