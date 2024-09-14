"use client";
import React from "react";

const TexasBusinessSection: React.FC = () => {
    return (
        <div
            className="relative w-full h-[600px] bg-cover bg-center flex items-center justify-center"
            style={{
                backgroundImage:
                    "url('https://www.texicare.com/wp-content/uploads/2024/02/Moving-Product-with-a-Forklift.jpg')",
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-20"></div>

            {/* Content */}
            <div className="relative z-10 text-center text-white px-4">
                <h2 className="text-4xl md:text-6xl leading-tight text-left">
                    We know Texas. <br /> We know Texas small business.
                </h2>
                <p className="mt-4 text-lg md:text-lg text-left font-bold">
                    Texicare was created by seasoned healthcare <br /> professionals with a deep
                    commitment to our state. <br />
                    We&apos;re a new company with big ambitions for Texas <br /> small business.
                </p>
            </div>
        </div>
    );
};

export default TexasBusinessSection;