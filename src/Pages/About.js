import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { RxCaretRight } from 'react-icons/rx';
import WebNav from '../Layouts/WebNav';
import Footer from '../Layouts/Footer';

const About = () => {

    //about menu active style
    let activeStyle = {

        backgroundColor: '#0A2004'
    };
    return (
        <>
            <WebNav />
            <section className=''>

            </section>

            <section className="py-14 bg-[#f7f7f7]">
                <div className="container lg:w-[90%] w-full mx-auto px-6 ">
                    <div className="flex flex-wrap lg:flex-nowrap">
                        <div className="w-full lg:w-[33%]">
                            <ul className='lg:m-3 m-0'>
                                <li>
                                    <NavLink
                                        to={'company-profile'}
                                        className='flex items-center gap-1 text-[13px] capitalize bg-primary text-white  hover:bg-secondary py-4 pl-1 hover:pl-[14px] transition_move border-b border-secondary'
                                        style={({ isActive }) =>
                                            isActive ? activeStyle : undefined}
                                    >
                                        <span className='text-white text-xl'>
                                            <RxCaretRight />
                                        </span>
                                        <span>
                                            Company Profile
                                        </span>
                                    </NavLink>
                                </li>
                                <li >
                                    <NavLink
                                        to={'message-from-managing-director'}
                                        className='flex items-center gap-1 text-[13px] capitalize bg-primary text-white  hover:bg-secondary py-4 pl-1 hover:pl-[14px] transition_move border-b border-secondary'
                                        style={({ isActive }) =>
                                            isActive ? activeStyle : undefined}
                                    >
                                        <span className='text-white text-xl'>
                                            <RxCaretRight />
                                        </span>
                                        <span>
                                            Messege From Managing Director
                                        </span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to={'mission-vission'}
                                        className='flex items-center gap-1 text-[13px] capitalize bg-primary text-white  hover:bg-secondary py-4 pl-1 hover:pl-[14px] transition_move border-b border-secondary'
                                        style={({ isActive }) =>
                                            isActive ? activeStyle : undefined}
                                    >
                                        <span className='text-white text-xl'>
                                            <RxCaretRight />
                                        </span>
                                        <span>
                                            Mission and Vision
                                        </span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to={'corporate-social-responsibility'}
                                        className='flex items-center gap-1 text-[13px] capitalize bg-primary text-white  hover:bg-secondary py-4 pl-1 hover:pl-[14px] transition_move border-b border-secondary'
                                        style={({ isActive }) =>
                                            isActive ? activeStyle : undefined}
                                    >
                                        <span className='text-white text-xl'>
                                            <RxCaretRight />
                                        </span>
                                        <span>
                                            Corporate Social Responsibility
                                        </span>
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="w-full lg:w-[87%]">
                            <div className="lg:ml-3 lg:mr-4 mx-0 mt-4 lg:mt-0 ">
                                <Outlet />
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <Footer />
        </>

    );
};

export default About;