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
            <div id="topbar" className="topbar overflow-x-hidden">
                <p className="text-white">Visit Texicare in English</p>
                <button className="text-white bg-transparent border border-white py-1 px-4 rounded-md">
                    Visit Now
                </button>
            </div>

            {/* Navbar */}
            <header className="bg-white shadow-md mt-[51px] overflow-x-hiddenhidden">
                <div className="px-6 flex md:justify-between justify-center lg:flex-row flex-col items-center">
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
                                    className="transition-all duration-200 text-nowrap font-avenir-bold font-[900] cursor-pointer"
                                >
                                    Members <ExpandMoreIcon fontSize='small' />
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

                        <div className='flex flex-row gap-4'>
                            {/* Mobile Menu */}
                            <div className="block lg:hidden relative border-b-[3px] border-white hover:border-b-primary py-2">
                                <span
                                    onClick={toggleManuDropdown}
                                    className="text-[#5b5859] text-nowrap font-avenir-bold font-[900] text-base focus:outline-none"
                                >
                                    Menu
                                    <ExpandMoreIcon fontSize='small' />
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

                            {/* Sign In Dropdown */}
                            <div className="relative border-b-[3px] border-white hover:border-b-primary py-2">
                                <button
                                    onClick={toggleDropdown}
                                    className="text-primary text-nowrap font-avenir-bold font-[900] text-base focus:outline-none"
                                >
                                    SIGN IN
                                    <ExpandMoreIcon fontSize='small' />
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
            </header>

            {/* CSS for Topbar */}
            <style jsx>{`
                .topbar {
                    height: 51px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 0 100px;
                    background: #f0572f;
                    position: fixed;
                    top: 0;
                    width: 100%;
                    z-index: 99999;
                    box-shadow: 0px 0px 10px 0px #00000026;
                }
            `}</style>
        </>
    );
};

export default Navbar;
