import React from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

import { AiFillYoutube } from "react-icons/ai";
import { Link } from "react-router-dom";
const SocialIcon = () => {
  return (
    <div className="flex items-center gap-3 mt-4 md1:mt-4 lg:mt-0">
      <div className="w-7 h-7 rounded-full bg-primary hover:bg-lightOrange text-[#191919]  hover:bg-lightPrimary flex items-center justify-center">
        {/* <Link to={'https://www.facebook.com/Renixlaboratoriesltd1/'} className='text-[12px] '><FaFacebookF /></Link> */}
        <a
          href="http://www.facebook.com/renixlaboratoriesltd"
          className="text-[12px] "
        >
          <FaFacebookF />
        </a>
      </div>
      {/* <div className="w-7 h-7 rounded-full bg-primary hover:bg-lightOrange text-[#191919]  hover:bg-lightPrimary flex items-center justify-center">

                <Link href={''} className='text-sm '><FaLinkedinIn /></Link>
            </div> */}
      <div className="w-7 h-7 rounded-full bg-primary hover:bg-lightOrange text-[#191919]  hover:bg-lightPrimary flex items-center justify-center">
        <Link
          to={
            "http://www.linkedin.com/company/renix-unani-laboratories-limited/"
          }
          className="text-sm "
        >
          <FaLinkedinIn />
        </Link>
      </div>

      <div className="w-7 h-7 rounded-full bg-primary hover:bg-lightOrange text-[#191919]  hover:bg-lightPrimary flex items-center justify-center">
        <Link
          to={"https://www.youtube.com/@RenixLaboratoriesLtd."}
          className="text-sm "
        >
          <AiFillYoutube />
        </Link>
      </div>
    </div>
  );
};

export default SocialIcon;
