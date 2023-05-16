import React from 'react';
import emailjs from '@emailjs/browser';
import { useEffect, useRef } from 'react';
// import toast from 'react-hot-toast';
import { useForm } from "react-hook-form";
import { Icon } from '@iconify/react';
import { toast } from 'react-hot-toast';

const Contact = () => {
    const form = useRef();
    const { register, handleSubmit, control, reset, formState: { errors }, } = useForm();
    const handleSendData = (data) => {
        //console.log("data", data);

        emailjs
            .sendForm(
                "service_77t3s4k",
                "template_eqazas7",
                form.current,
                "9MiE1hKbHiGAs4Uea"
            )
            .then(
                (result) => {
                    toast.success("Successfully Send Message");
                    // console.log(result.text);
                    console.log("Successfully message sent");
                    reset();
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };



    return (
        <div className='py-14 lg:w-[80%] mx-auto'>
            <div className="w-full  p-5 grid grid-cols-1 lg:grid-cols-2 gap-5">
                <div className="py-14 px-7 rounded-md">
                    <div className="px-5 lg:px-1">
                        <div>
                            <h1 className="sm:text-2xl md:text-2xl lg:text-4xl font-semibold mb-2 text-[#535353]">
                                Contact Form
                            </h1>
                            <p className='w-[60px] border-2 border-primary'></p>
                        </div>
                        <div className="pt-4 lg:pt-8 flex justify-start items-center">
                            <div className="  p-3 rounded-md inline-block mr-4">
                                <Icon
                                    icon="fa-solid:map-marker-alt"
                                    className="text-2xl text-primary mx-[2px]"
                                />
                            </div>
                            <div>
                                {/* <p className="font-bold text-lg ">Office Location</p> */}
                                <p className=" text-sm font-semibold text-[#535353]">
                                    {/* {officeInfo?.officeAddress} */}
                                    Fatullah 1421 Dhaka, Dhaka Division, Bangladesh

                                </p>
                            </div>
                        </div>
                        <div className="pt-4 lg:pt-8 flex justify-start items-center mb-2">
                            <div className="p-3  rounded-md inline-block mr-4">
                                <Icon icon="ic:round-access-time-filled" className="text-2xl text-primary" />
                                <Icon icon="" />
                            </div>
                            <div>

                                <p className="text-sm font-semibold text-[#535353]">
                                    {/* {officeInfo?.officeEmail} */}
                                    Saturday - Thursday: 10:00AM - 5:00PM

                                </p>
                                <p className="text-sm font-semibold text-[#535353]">
                                    {/* {officeInfo?.officeEmail} */}
                                    Friday: Closed
                                </p>
                            </div>
                        </div>

                        <div className="pt-4 lg:pt-8 flex justify-start items-center mb-2">
                            <div className="p-3  rounded-md inline-block mr-4">
                                <Icon icon="mingcute:mail-fill" className="text-2xl text-primary" />
                            </div>
                            <div>
                                {/* <p className="font-bold text-lg ">Email</p> */}
                                <p className="text-sm font-semibold text-[#535353]">
                                    {/* {officeInfo?.officeEmail} */}
                                    Info@Renixlaboratories.com
                                </p>
                                <p className="text-sm font-semibold text-[#535353]">
                                    {/* {officeInfo?.officeEmail} */}
                                </p>
                            </div>
                        </div>

                        <div className="pt-4 lg:pt-8 flex justify-start items-center mb-2">
                            <div className="p-3  rounded-md inline-block mr-4">
                                <Icon icon="fa-solid:phone-alt" className="text-2xl text-primary" />
                            </div>
                            <div>
                                {/* <p className="font-bold text-lg">Call Us</p> */}
                                <p className="text-sm font-semibold text-[#535353]">
                                    {/* {officeInfo?.officePhone} */}
                                    +(880)1884442022


                                </p>
                                <p className="text-sm font-semibold text-[#535353]">
                                    {/* {officeInfo?.officePhone} */}

                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white md:py-14 px-7 rounded-md md:mt-24 ">
                    <form action="" ref={form} onSubmit={handleSubmit(handleSendData)}>
                        <div className="w-full mb-8">

                            <label className="block">
                                {/* <p className="text-gray-500 text-xs uppercase my-2">Name</p> */}
                                <input
                                    type="text"
                                    {...register("userName", { required: true })}
                                    className="mt-2 px-3 py-3 border-2 bg-whiteSmoke shadow-sm focus:outline-none border-whiteSmoke bg-transparent placeholder-slate-400  block w-full rounded-md sm:text-sm "
                                    placeholder="Name"
                                />
                            </label>
                            {errors.userName && <p className="mt-[2px] text-red-500  text-sm" role="alert">Please add name</p>}
                            <label className="block">
                                {/* <p className="text-gray-500 text-xs uppercase my-2">
                                    Phone
                                </p> */}
                                <input
                                    type="number"
                                    {...register("phone", { required: true })}
                                    className="mt-2 mb-4 px-3 py-3 border-2 shadow-sm focus:outline-none border-whiteSmoke bg-whiteSmoke bg-transparent placeholder-slate-400  block w-full rounded-md sm:text-sm "
                                    placeholder=" Phone number"
                                />
                            </label>
                            {errors.phone && <p className="mt-[2px] text-red-500  text-sm" role="alert">Please add phone</p>}


                            <label className="block">
                                {/* <p className="text-gray-500 text-xs uppercase my-2">Message</p> */}
                                <textarea
                                    type="text"
                                    {...register("message", { required: true })}
                                    className="mt-2 mb-4 px-3 py-2 h-36 border-2 shadow-sm focus:outline-none border-whiteSmoke bg-whiteSmoke bg-transparent placeholder-slate-400  block w-full rounded-md sm:text-sm "
                                    placeholder="Message "
                                />
                            </label>
                            {errors.message && <p className="mt-[2px] text-red-500  text-sm" role="alert">Please add message</p>}
                        </div>
                        <button className="bg-primary py-3 px-3 text-white font-medium rounded-md my-2 text-md">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;