"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [isMembersDropdownOpen, setMembersDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    const toggleMembersDropdown = () => {
        setMembersDropdownOpen(!isMembersDropdownOpen);
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="bg-white shadow-md">
            <div className=" px-6 flex md:justify-between justify-center items-center">
                {/* Logo */}
                <Link href='/' className="flex items-center cursor-pointer">
                    <Image
                        src="https://www.texicare.com/wp-content/uploads/2024/02/Texicare-Logo_No-Tagline_sm.png"
                        alt="Texicare Logo"
                        className="h-16 w-auto mr-2 cursor-pointer"
                        width={100}
                        height={100}
                    />
                </Link>

                {/* Nav Links */}
                <nav className="hidden md:flex flex-wrap md:justify-end space-x-8 text-[#5b5859] text-base">
                    <a href="#" className="border-b-[3px] border-white hover:border-b-[#ed5929] py-2 transition-all duration-200 text-nowrap font-avenir-bold font-[900] ">
                        Find A Doctor
                    </a>
                    <a href="#" className="border-b-[3px] border-white hover:border-b-[#ed5929] py-2 transition-all duration-200 text-nowrap font-avenir-bold font-[900] ">
                        Plans
                    </a>
                    <a href="#" className="border-b-[3px] border-white hover:border-b-[#ed5929] py-2 transition-all duration-200 text-nowrap font-avenir-bold font-[900] ">
                        Agents
                    </a>
                    <a href="#" className="border-b-[3px] border-white hover:border-b-[#ed5929] py-2 transition-all duration-200 text-nowrap font-avenir-bold font-[900] ">
                        Employers
                    </a>
                    <div className="relative">
                        <a
                            href="#"
                            onClick={toggleMembersDropdown}
                            className="border-b-[3px] border-white hover:border-b-[#ed5929] py-2 transition-all duration-200 text-nowrap font-avenir-bold font-[900]  cursor-pointer"
                        >
                            Members <span className="ml-1">&#9662;</span> {/* Dropdown icon */}
                        </a>
                        {isMembersDropdownOpen && (
                            <div className="absolute mt-2 w-40 font-bold bg-white border border-gray-200 shadow-lg py-2 rounded-md z-50">
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-[#5b5859] hover:bg-gray-100 text-sm font-avenir-bold font-[900]"
                                >
                                    Free Virtual Care
                                </a>
                            </div>
                        )}
                    </div>
                    <a href="#" className="border-b-[3px] border-white hover:border-b-[#ed5929] py-2 transition-all duration-200 text-nowrap font-avenir-bold font-[900] ">
                        Providers
                    </a>
                    <a href="#" className="border-b-[3px] border-white hover:border-b-[#ed5929] py-2 transition-all duration-200 text-nowrap font-avenir-bold font-[900] ">
                        About Us
                    </a>

                    {/* Sign In with Dropdown */}
                    <div className="relative">
                        <button
                            onClick={toggleDropdown}
                            className="text-orange-500 hover:text-orange-600 text-nowrap font-avenir-bold font-[900]  text-base focus:outline-none"
                        >
                            SIGN IN
                            <span className="ml-1 text-[#5b5859]">&#9662;</span> {/* Dropdown icon */}
                        </button>

                        {/* Dropdown Menu */}
                        {isDropdownOpen && (
                            <div className="absolute right-[-25px] mt-2 w-32 font-bold bg-white border border-gray-200 shadow-lg py-2 rounded-md z-50">
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-[#5b5859] hover:bg-gray-100 text-sm font-avenir-bold font-[900]"
                                >
                                    AGENT
                                </a>
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-[#5b5859] hover:bg-gray-100 text-sm font-avenir-bold font-[900]"
                                >
                                    MEMBER
                                </a>
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-[#5b5859] hover:bg-gray-100 text-sm font-avenir-bold font-[900]"
                                >
                                    EMPLOYER
                                </a>
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-[#5b5859] hover:bg-gray-100 text-sm font-avenir-bold font-[900]"
                                >
                                    PROVIDER
                                </a>
                            </div>
                        )}
                    </div>
                </nav>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center">
                    <button onClick={toggleMobileMenu} className="text-[#5b5859] focus:outline-none">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white shadow-md">
                    <nav className="px-6 py-4 space-y-4 text-[#5b5859] text-base font-bold">
                        <a href="#" className="block border-b-[3px] border-white hover:border-b-[#ed5929] py-2 transition-all duration-200 text-nowrap font-avenir-bold font-[900]">
                            Find A Doctor
                        </a>
                        <a href="#" className="block border-b-[3px] border-white hover:border-b-[#ed5929] py-2 transition-all duration-200 text-nowrap font-avenir-bold font-[900]">
                            Plans
                        </a>
                        <a href="#" className="block border-b-[3px] border-white hover:border-b-[#ed5929] py-2 transition-all duration-200 text-nowrap font-avenir-bold font-[900]">
                            Agents
                        </a>
                        <a href="#" className="block border-b-[3px] border-white hover:border-b-[#ed5929] py-2 transition-all duration-200 text-nowrap font-avenir-bold font-[900]">
                            Employers
                        </a>
                        <div className="relative">
                            <a
                                href="#"
                                onClick={toggleMembersDropdown}
                                className="block border-b-[3px] border-white hover:border-b-[#ed5929] py-2 transition-all duration-200 text-nowrap font-avenir-bold font-[900] cursor-pointer"
                            >
                                Members <span className="ml-1">&#9662;</span> {/* Dropdown icon */}
                            </a>
                            {isMembersDropdownOpen && (
                                <div className="mt-2 w-40 font-bold bg-white border border-gray-200 shadow-lg py-2 rounded-md z-50">
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-[#5b5859] hover:bg-gray-100 text-sm font-avenir-bold font-[900]"
                                    >
                                        Free Virtual Care
                                    </a>
                                </div>
                            )}
                        </div>
                        <a href="#" className="block border-b-[3px] border-white hover:border-b-[#ed5929] py-2 transition-all duration-200 text-nowrap font-avenir-bold font-[900]">
                            Providers
                        </a>
                        <a href="#" className="block border-b-[3px] border-white hover:border-b-[#ed5929] py-2 transition-all duration-200 text-nowrap font-avenir-bold font-[900]">
                            About Us
                        </a>
                        <div className="relative">
                            <button
                                onClick={toggleDropdown}
                                className="text-orange-500 hover:text-orange-600 text-base focus:outline-none font-avenir-bold font-[900]"
                            >
                                SIGN IN
                                <span className="ml-1 text-[#5b5859]">&#9662;</span> {/* Dropdown icon */}
                            </button>
                            {isDropdownOpen && (
                                <div className="mt-2 w-40 font-bold bg-white border border-gray-200 shadow-lg py-2 rounded-md z-50">
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-[#5b5859] hover:bg-gray-100 text-sm font-avenir-bold font-[900]"
                                    >
                                        AGENT
                                    </a>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-[#5b5859] hover:bg-gray-100 text-sm font-avenir-bold font-[900]"
                                    >
                                        MEMBER
                                    </a>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-[#5b5859] hover:bg-gray-100 text-sm font-avenir-bold font-[900]"
                                    >
                                        EMPLOYER
                                    </a>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-[#5b5859] hover:bg-gray-100 text-sm font-avenir-bold font-[900]"
                                    >
                                        PROVIDER
                                    </a>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-[#5b5859] hover:bg-gray-100 text-sm font-avenir-bold font-[900]"
                                    >
                                        Free Virtual Care
                                    </a>
                                </div>
                            )}
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Navbar;