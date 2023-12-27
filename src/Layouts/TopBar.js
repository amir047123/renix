import React from 'react';
import { BsTelephoneFill, BsClockFill } from 'react-icons/bs';
import { IoMdMail } from 'react-icons/io';
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaPinterest } from 'react-icons/fa';

import { AiFillInstagram, AiFillYoutube } from 'react-icons/ai';
import { Link } from 'react-router-dom';
const TopBar = () => {
    return (
        <div className='hidden lg:flex items-center justify-between border-b border-[#999] pb-2 pt-3 md:px-[103px]'>
            {/* topbar info */}
            <div className="flex gap-8 justify-center">
                {/* info item */}
                <div className="flex  gap-3 justify-center">
                    <span className="text-lg text-primary"><BsTelephoneFill /></span>
                    <div className="">
                        <span className="text-[12px] text-textColor mb-2 block">+8801884442022</span>
                    </div>
                </div>
                <div className="flex gap-3 justify-center">
                    <span className="text-lg text-primary">< BsClockFill /></span>
                    <div className="">
                        <span className="text-[12px] text-textColor mb-2 block">Sat-Thu 10.00am-5.00pm</span>
                        <span className="text-[12px] text-textColor block">Fri Closed</span>
                    </div>
                </div>
                <div className="flex gap-3 justify-center">
                    <span className="text-lg text-primary"><IoMdMail /></span>
                    <div className="">
                        <span className="text-[12px] text-textColor block">info@renixlaboratories.com</span>
                    </div>
                </div>
            </div>
                   
            {/* top social icon */}
            <div className='flex items-center gap-2 '>
                <div className="w-7 h-7 rounded-full bg-primary hover:bg-lightOrange text-white  hover:bg-lightPrimary flex items-center justify-center">

                    <Link to={'http://www.facebook.com/renixlaboratoriesltd'} className='text-[12px] '><FaFacebookF /></Link>
                </div>
                {/* <div className="w-7 h-7 rounded-full bg-primary hover:bg-lightOrange text-white  hover:bg-lightPrimary flex items-center justify-center">

                    <Link href={''} className='text-[12px] '><FaLinkedinIn /></Link>
                </div> */}
                <div className="w-7 h-7 rounded-full bg-primary hover:bg-lightOrange text-white  hover:bg-lightPrimary flex items-center justify-center">

                    <Link to={'http://www.linkedin.com/company/renix-unani-laboratories-limited/'} className='text-[12px] '><FaLinkedinIn /></Link>
                </div>

                <div className="w-7 h-7 rounded-full bg-primary hover:bg-lightOrange text-white  hover:bg-lightPrimary flex items-center justify-center">

                    <Link to={'https://www.youtube.com/@RenixLaboratoriesLtd.'} className='text-[12px] '><AiFillYoutube /></Link>
                </div>

                


            </div>

        </div>
    );
};

export default TopBar;