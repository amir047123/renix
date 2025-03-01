import React from "react";
import toast from "react-hot-toast";
import { server_url } from "../../../Config/API";

const NewsLetter = () => {
  const handleSubscriber = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;

    try {
      const response = await fetch(
        `${server_url}/collectEmail/addCollectEmail`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      if (response.ok) {
        // Reset the form
        event.target.reset();
      }
    } catch (error) {
      toast.error("Error:", error);
    }
  };

  return (
    <div className="bg-secondary mx-auto w-full text-center pb-10 pt-10 ">
      <div className="">
        <h1 className="text-white text-3xl">Subscribe To our NewsLetter</h1>
        <div className="w-full mx-auto  ">
          <form
            onSubmit={handleSubscriber}
            className="flex items-center b justify-center"
          >
            <div className="flex items-center justify-center gap-2 flex-wrap  text-center  my-5">
              <div>
                <input
                  type="email"
                  name="email"
                  className="text-white rounded-md bg-textColor block h-12 md:w-96  outline-none p-1 pl-4 text-xs mr-4"
                  required
                  placeholder="Enter your email"
                ></input>
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-primary p-3 rounded-md text-white lg:w-[120px]  uppercase block"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
          <p className="text-primary">To Get 20% Discount</p>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
