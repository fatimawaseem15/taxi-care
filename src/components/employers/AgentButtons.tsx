"use client";
import React from 'react';

const InfoSection = () => {
    return (
        <section className="bg-[#f15a24] mt-10 text-white py-10 px-5 sm:px-10 flex flex-col md:flex-row justify-center items-center">
            <button
                className="mb-5 md:mb-0 rounded-full text-white bg-[#f15a24] font-bold border border-white hover:bg-white hover:text-[#f15a24] px-10 py-2"
            >
                LEARN MORE ABOUT <br /> LEVEL-FUNDED COVERAGE
            </button>

            <p className="text-white max-w-lg text-lg md:ml-20">
                With level-funded plans, employers get fixed monthly payments, visibility into ongoing claims and a refund if there’s a surplus. All of the plans above are level-funded plans.
            </p>
        </section>
    );
};

export default InfoSection;