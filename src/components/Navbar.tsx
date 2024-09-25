"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Navbar = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [isMembersDropdownOpen, setMembersDropdownOpen] = useState(false);
    const [mobileManuDropdown, setMobileManuDropdown] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    const toggleMembersDropdown = () => {
        setMembersDropdownOpen(!isMembersDropdownOpen);
    };

    const toggleManuDropdown = () => {
        setMobileManuDropdown(!mobileManuDropdown);
    };

    return (
        <>
          {/* Topbar */}
          <div id="topbar" className="topbar flex justify-between items-center p-4 bg-orange-600">
               <p className="text-white text-xs  md:text-sm lg:text-base">Visit Texicare in English</p>
               <button className="text-white rounded-2xl bg-transparent border border-white py-2 px-8  text-xs md:text-sm lg:text-base">
                   Visit Now
               </button>
           </div>
        <header className="bg-white shadow-md">
            <div className=" px-6 flex md:justify-between justify-center lg:flex-row flex-col items-center">
                {/* Logo */}
                <Link href='/' className="flex items-center cursor-pointer">
                    <Image
                        src="https://www.texicare.com/wp-content/uploads/2024/02/Texicare-Logo_No-Tagline_sm.png"
                        alt="Texicare Logo"
                        className="lg:w-52 w-[25rem] mr-2 cursor-pointer md:ml-5"
                        width={140}
                        height={100}
                        quality={100}
                    />
                </Link>

                <div className="md:w-48"></div>

                <div className='flex flex-nowrap gap-4 items-center'>
                    {/* Nav Links */}
                    <nav className="hidden lg:flex flex-wrap md:justify-end space-x-8 text-[#5b5859] text-base">
                        <a href="#" className="border-b-[3px] border-white hover:border-b-primary py-2 transition-all duration-200 text-nowrap font-avenir-bold font-[900] ">
                            Find A Doctor
                        </a>
                        <a href="#" className="border-b-[3px] border-white hover:border-b-primary py-2 transition-all duration-200 text-nowrap font-avenir-bold font-[900] ">
                            Plans
                        </a>
                        <a href="#" className="border-b-[3px] border-white hover:border-b-primary py-2 transition-all duration-200 text-nowrap font-avenir-bold font-[900] ">
                            Agents
                        </a>
                        <a href="#" className="border-b-[3px] border-white hover:border-b-primary py-2 transition-all duration-200 text-nowrap font-avenir-bold font-[900] ">
                            Employers
                        </a>
                        <div className="relative border-b-[3px] border-white hover:border-b-primary py-2">
                            <a
                                href="#"
                                onClick={toggleMembersDropdown}
                                className=" transition-all duration-200 text-nowrap font-avenir-bold font-[900] cursor-pointer"
                            >
                                Members <span ><ExpandMoreIcon fontSize='small' /></span> {/* Dropdown icon */}
                            </a>
                            {isMembersDropdownOpen && (
                                <div className="absolute mt-4 w-40 font-bold bg-white shadow-lg py-2 rounded-sm z-50">
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-[#5b5859] hover:bg-primary hover:text-white text-sm font-avenir-bold font-[900]"
                                    >
                                        Free Virtual Care
                                    </a>
                                </div>
                            )}
                        </div>
                        <a href="#" className="border-b-[3px] border-white hover:border-b-primary py-2 transition-all duration-200 text-nowrap font-avenir-bold font-[900] ">
                            Providers
                        </a>
                        <a href="#" className="border-b-[3px] border-white hover:border-b-primary py-2 transition-all duration-200 text-nowrap font-avenir-bold font-[900] ">
                            About Us
                        </a>

                    </nav>


                    <div className='flex flex-row gap-40'>
                        {/* Sign In with Dropdown */}
                        <div className="block lg:hidden relative border-b-[3px] border-white hover:border-b-primary py-2">
                            <span
                                onClick={toggleManuDropdown}
                                className="text-[#5b5859] text-nowrap font-avenir-bold font-[900]  text-base focus:outline-none"
                            >
                                Menu
                                <span className="text-[#5b5859]"><ExpandMoreIcon fontSize='small' /></span> {/* Dropdown icon */}
                            </span>

                            {/* Dropdown Menu */}
                            {mobileManuDropdown && (
                                <nav className="absolute right-[-50px] mt-2 w-32 font-bold bg-white py-2 z-50">
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-[#3b3b3b] hover:bg-primary hover:text-white text-sm font-avenir-bold font-[900]"
                                    >
                                        Find A Doctor
                                    </a>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-[#3b3b3b] hover:bg-primary hover:text-white text-sm font-avenir-bold font-[900]"
                                    >
                                        Plans
                                    </a>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-[#3b3b3b] hover:bg-primary hover:text-white text-sm font-avenir-bold font-[900]"
                                    >
                                        Agents
                                    </a>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-[#3b3b3b] hover:bg-primary hover:text-white text-sm font-avenir-bold font-[900]"
                                    >
                                        Employers
                                    </a>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-[#3b3b3b] hover:bg-primary hover:text-white text-sm font-avenir-bold font-[900]"
                                    >
                                        Members
                                    </a>

                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-[#3b3b3b] hover:bg-primary hover:text-white text-sm font-avenir-bold font-[900]"
                                    >
                                        Providers
                                    </a>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-[#3b3b3b] hover:bg-primary hover:text-white text-sm font-avenir-bold font-[900]"
                                    >
                                        About Us
                                    </a>

                                </nav>
                            )}
                        </div>


                        <div className="relative border-b-[3px] border-white hover:border-b-primary py-2">
                            <button
                                onClick={toggleDropdown}
                                className="text-primary text-nowrap font-avenir-bold font-[900]  text-base focus:outline-none "
                            >
                                SIGN IN
                                <span className="text-primary"><ExpandMoreIcon fontSize='small' /></span> {/* Dropdown icon */}
                            </button>

                            {/* Dropdown Menu */}
                            {isDropdownOpen && (
                                <div className="absolute right-[-24px] mt-2 w-32 font-bold bg-white py-2 z-50">
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-[#3b3b3b] hover:bg-primary hover:text-white text-sm font-avenir-bold font-[900]"
                                    >
                                        AGENT
                                    </a>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-[#3b3b3b] hover:bg-primary hover:text-white text-sm font-avenir-bold font-[900]"
                                    >
                                        MEMBER
                                    </a>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-[#3b3b3b] hover:bg-primary hover:text-white text-sm font-avenir-bold font-[900]"
                                    >
                                        EMPLOYER
                                    </a>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-[#3b3b3b] hover:bg-primary hover:text-white text-sm font-avenir-bold font-[900]"
                                    >
                                        PROVIDER
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>


                </div>
            </div>


        </header >
        </>
    );
};

export default Navbar;