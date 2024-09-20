"use client";
import React from "react";

const TexasBusinessSection: React.FC = () => {
    return (
        <section
            className="relative w-full h-[606px] bg-cover bg-center flex md:items-end items-center justify-center"
            id="texas-business"
            style={{
                backgroundImage:
                    "url('https://www.texicare.com/wp-content/uploads/2024/02/Moving-Product-with-a-Forklift.jpg')",
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-10"></div>

            {/* Content */}
            <div className="relative z-10 text-center text-white md:px-0 px-4 ">
                <h2 className="md:text-[77px] text-5xl md:leading-[75px] text-left">
                    We know Texas. <br /> We know Texas small business.
                </h2>
                <p className="md:mt-14 mt-10 md:mb-20 md:text-[22px] md:leading-[33px] text-xl text-left ">
                    Texicare was created by seasoned healthcare <br /> professionals with a deep
                    commitment to our state. <br />
                    We&apos;re a new company with big ambitions for Texas <br /> small business.
                </p>
            </div>
        </section>
    );
};

export default TexasBusinessSection;