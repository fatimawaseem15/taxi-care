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
            <div className=" px-6 flex justify-between items-center">
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
                <nav className="hidden md:flex flex-wrap md:justify-end space-x-6 text-gray-700 text-base font-bold">
                    <a href="#" className="hover:text-[#ed5929] transition-all duration-200 text-nowrap">
                        Find A Doctor
                    </a>
                    <a href="#" className="hover:text-[#ed5929] transition-all duration-200 text-nowrap">
                        Plans
                    </a>
                    <a href="#" className="hover:text-[#ed5929] transition-all duration-200 text-nowrap">
                        Agents
                    </a>
                    <a href="#" className="hover:text-[#ed5929] transition-all duration-200 text-nowrap">
                        Employers
                    </a>
                    <div className="relative">
                        <a
                            href="#"
                            onClick={toggleMembersDropdown}
                            className="hover:text-[#ed5929] transition-all duration-200 text-nowrap cursor-pointer"
                        >
                            Members <span className="ml-1">&#9662;</span> {/* Dropdown icon */}
                        </a>
                        {isMembersDropdownOpen && (
                            <div className="absolute mt-2 w-40 font-bold bg-white border border-gray-200 shadow-lg py-2 rounded-md z-50">
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                                >
                                    Free Virtual Care
                                </a>
                            </div>
                        )}
                    </div>
                    <a href="#" className="hover:text-[#ed5929] transition-all duration-200 text-nowrap">
                        Providers
                    </a>
                    <a href="#" className="hover:text-[#ed5929] transition-all duration-200 text-nowrap">
                        About Us
                    </a>

                    {/* Sign In with Dropdown */}
                    <div className="relative">
                        <button
                            onClick={toggleDropdown}
                            className="text-orange-500 font-bold hover:text-orange-600 text-nowrap text-base focus:outline-none"
                        >
                            SIGN IN
                            <span className="ml-1 text-gray-700">&#9662;</span> {/* Dropdown icon */}
                        </button>

                        {/* Dropdown Menu */}
                        {isDropdownOpen && (
                            <div className="absolute right-0 mt-2 w-40 font-bold bg-white border border-gray-200 shadow-lg py-2 rounded-md z-50">
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                                >
                                    AGENT
                                </a>
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                                >
                                    MEMBER
                                </a>
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                                >
                                    EMPLOYER
                                </a>
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                                >
                                    PROVIDER
                                </a>
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                                >
                                    Free Virtual Care
                                </a>
                            </div>
                        )}
                    </div>
                </nav>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center">
                    <button onClick={toggleMobileMenu} className="text-gray-700 focus:outline-none">
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
                    <nav className="px-6 py-4 space-y-4 text-gray-700 text-base font-bold">
                        <a href="#" className="block hover:text-[#ed5929] transition-all duration-200 text-nowrap">
                            Find A Doctor
                        </a>
                        <a href="#" className="block hover:text-[#ed5929] transition-all duration-200 text-nowrap">
                            Plans
                        </a>
                        <a href="#" className="block hover:text-[#ed5929] transition-all duration-200 text-nowrap">
                            Agents
                        </a>
                        <a href="#" className="block hover:text-[#ed5929] transition-all duration-200 text-nowrap">
                            Employers
                        </a>
                        <div className="relative">
                            <a
                                href="#"
                                onClick={toggleMembersDropdown}
                                className="block hover:text-[#ed5929] transition-all duration-200 text-nowrap cursor-pointer"
                            >
                                Members <span className="ml-1">&#9662;</span> {/* Dropdown icon */}
                            </a>
                            {isMembersDropdownOpen && (
                                <div className="mt-2 w-40 font-bold bg-white border border-gray-200 shadow-lg py-2 rounded-md z-50">
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                                    >
                                        Free Virtual Care
                                    </a>
                                </div>
                            )}
                        </div>
                        <a href="#" className="block hover:text-[#ed5929] transition-all duration-200 text-nowrap">
                            Providers
                        </a>
                        <a href="#" className="block hover:text-[#ed5929] transition-all duration-200 text-nowrap">
                            About Us
                        </a>
                        <div className="relative">
                            <button
                                onClick={toggleDropdown}
                                className="text-orange-500 font-bold hover:text-orange-600 text-base focus:outline-none"
                            >
                                SIGN IN
                                <span className="ml-1 text-gray-700">&#9662;</span> {/* Dropdown icon */}
                            </button>
                            {isDropdownOpen && (
                                <div className="mt-2 w-40 font-bold bg-white border border-gray-200 shadow-lg py-2 rounded-md z-50">
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                                    >
                                        AGENT
                                    </a>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                                    >
                                        MEMBER
                                    </a>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                                    >
                                        EMPLOYER
                                    </a>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                                    >
                                        PROVIDER
                                    </a>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
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