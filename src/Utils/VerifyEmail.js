import React from "react";
import { useNavigate, useParams } from "react-router";
import swal from "sweetalert";

const VerifyEmail = () => {
  const params = useParams();
  const navigate = useNavigate();
  console.log("params id", params.id);
  const handleVerify = () => {
    fetch(
      ` http://localhost:5000/api/v1/user/verify?id=${params.id}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data?.modifiedCount === 1) {
          swal("success", "Email verified successfully!", "success");
          navigate("/login");
        } else {
          swal("Error", "Email can't be verified. Try Again later.", "error");
        }
      });
  };
  return (
    <div className="my-20 h-screen flex justify-center">
      <div>
        <h1 className="text-xl text-center">
          Please Click the button to verify your Email.
        </h1>
        <div className=" w-full flex justify-center my-5">
          <button
            onClick={handleVerify}
            className="bg-transparent text-blue-600 border-2 border-blue-600 hover:border-0 hover:bg-gradient-to-r from-[#6069d3ef] to-[#67f6f3c9]  px-3 py-2 hover:text-white font-medium cursor-pointer "
          >
            Click here to verify
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
