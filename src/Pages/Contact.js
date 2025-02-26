import React, { useState } from "react";
import { FiSend } from "react-icons/fi";
import { Link } from "react-router-dom";
import DynamicMetaTitle from "../Components/DynamicMetaTitle";
import useGetSeo from "../Hooks/useGetSeo";
import "./Contact.css";
import { server_url } from "../Config/API";

const Contact = () => {
  const [option, setOption] = useState();
  const metaData = useGetSeo("contact_page");
  // OnSubmit Form handler
  const handleForm = async (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const subject = form.subject.value;
    const message = form.message.value;

    try {
      // Make the API call to addContactRenixes using fetch
      const response = await fetch(
        `${server_url}/contactRenix/addContactRenix`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, subject, message }),
        }
      );

      // Check if the request was successful (status code 2xx)
      if (response.ok) {
        // Reset the form after successful submission
        form.reset();
      } else {
        // Handle the error case
        console.error("Error submitting form:", response.statusText);
      }
    } catch (error) {
      console.error("Error submitting form:", error.message);
    }
  };
  return (
    <div className="lg:w-[90%] mx-auto">
      <DynamicMetaTitle
        title={metaData?.metaTitle}
        metaImage={metaData?.metaImage}
        description={metaData?.metaDescription}
        canonicalUrl={metaData?.canonicalUrl}
      />
      <div className="w-full md:p-14 p-5 grid grid-cols-1 lg:grid-cols-2 gap-5 ">
        <div className="py-10 px-7 rounded-md">
          <div className="px-5 lg:px-1 ">
            <div className="font-bold">
              <h3 className="contact-header uppercase pb-4 underline underline-offset-8 decoration-2 ">
                Hade Office
              </h3>
              <p className="uppercase">Renix Unani Laboratories Limited,</p>
              <p>Fatullah 1421 Dhaka, Dhaka Division, Bangladesh</p>
              <p>Phone: +(880)1884442022</p>
              <p>E-mail: info@renixlaboratories.com</p>
            </div>
            &nbsp;
            <p className="text-justify">
              {" "}
              Renix Laboratories (Unani) Ltd. is a healthcare company that
              produces high-quality complete medicines using natural herbs. With
              the increasing resistance to antibiotic medicines and their
              harmful side effects, the world is turning towards alternative
              medicine, and Renix Laboratories is contributing to this shift.
              Through extensive research on the ancient Unani treatment system,
              which has been modernized through scientific methods, the company
              has proven the success and effectiveness of this approach without
              any side effects. The Hon'ble Prime Minister of Bangladesh has
              recognized the importance of herbal medicines, and the company has
              appointed doctors to provide Unani health services in remote areas
              of the country. Renix Laboratories is committed to providing
              high-quality, natural healthcare solutions for people around the
              world.
            </p>
          </div>
        </div>

        <div className="md:py-10 px-7 rounded-md">
          <div className="p-8 form-border">
            <form onSubmit={handleForm}>
              {/* {/ name  /} */}
              <fieldset className="my-2">
                <label className="contact_label">Name</label>
                <input
                  type="text"
                  name="name"
                  className="w-full py-2 my-2 px-2 input_style"
                  placeholder="Your Name ..."
                  required
                />
              </fieldset>

              {/* {/ email  /} */}
              <fieldset className="my-2">
                <label className="contact_label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="w-full py-2 my-2 px-2 input_style"
                  placeholder="Your Email ..."
                  required
                />
              </fieldset>

              {/* {/ subject  /} */}
              <fieldset className="my-2">
                <label className="contact_label">Subject</label>
                <input
                  type="text"
                  name="subject"
                  className="w-full py-2 my-2 px-2 input_style"
                  placeholder="Subject ..."
                  required
                />
              </fieldset>

              {/* {/ message  /} */}
              <fieldset className="my-2">
                <label className="contact_label">Message</label>
                <textarea
                  name="message"
                  id=""
                  cols="10"
                  rows="5"
                  className="input_style w-full py-2 my-2 px-2 h-[136px]"
                  placeholder="Your Message ..."
                  required
                ></textarea>
              </fieldset>

              {/* {/ button  /} */}

              <button type="submit" className="button w-full bg-primary">
                <div className="flex justify-center items-center py-2">
                  {/* <img src={icon} alt="" className='w-5 mr-2' /> */}
                  <Link
                    to={""}
                    className=" mr-2 text-white text-xl font-semibold"
                  >
                    <FiSend></FiSend>
                  </Link>
                  <h2 className="text-white text-xl font-semibold">Send</h2>
                </div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
