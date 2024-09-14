"use client";
import React from 'react';
import { Button } from '@mui/material';

const InfoSection = () => {
    return (
        <section className="bg-[#f15a24] mt-10 text-white py-10 px-5 sm:px-10 flex flex-col md:flex-row justify-center items-center">
            <Button
                variant="contained"
                sx={{
                    backgroundColor: 'white',
                    color: '#f15a24',
                    fontWeight: 'bold',
                    border: '1px solid white',
                }}
                className="mb-5 md:mb-0 rounded-full bg-[#f15a24] text-white hover:bg-white px-10 hover:text-orange-600 border-white"
            >
                LEARN MORE ABOUT <br/> LEVEL-FUNDED COVERAGE
            </Button>

            <p className="text-white max-w-lg text-lg md:ml-20">
                With level-funded plans, employers get fixed monthly payments, visibility into ongoing claims and a refund if there’s a surplus. All of the plans above are level-funded plans.
            </p>
        </section>
    );
};

export default InfoSection;
