"use client"
import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Image from "next/image";

const CarePlansSection: React.FC = () => {
    return (
        <div className="flex flex-col items-center w-full py-12 space-y-8">
            <Box
                className="flex flex-col items-center justify-between w-full max-w-4xl p-6 space-y-6 bg-white rounded-lg md:flex-row md:space-x-6 md:space-y-0"
            >
                {/* Circle Image */}
                <div className="flex-shrink-0 text-center md:text-left md:w-1/3 flex flex-col justify-center items-center ">
                    <Image
                        src="https://www.texicare.com/wp-content/uploads/2024/02/Essential-Care.png"
                        alt="Essential Care logo"
                        className="mx-auto md:mx-0 rounded-full w-48"
                        width={100}
                        height={100}
                    />
                    <Typography variant="h6" fontWeight="bold" className="mt-2 mb-4 px-10 text-[#eb4824] text-center text-2xl">
                        Affordable coverage for basic care
                    </Typography>
                    <div className="w-full text-center">
                        <Button
                            variant="outlined"
                            className="border-orange-600 text-white font-bold bg-orange-600 hover:bg-white hover:text-orange-600"
                            sx={{
                                borderColor: 'white',
                                color: 'white',
                                fontSize: '0.9rem',
                                padding: '0.3rem 1.2rem',
                                borderRadius: '50px',
                                fontWeight: 'bold',
                                '&:hover': {
                                    backgroundColor: 'white',
                                    color: '#f05a28',
                                },
                            }}
                        >
                            Plan Details
                        </Button>
                    </div>
                </div>

                {/* Plan Information */}
                <div className="flex-1">
                    <Typography variant="body1" fontWeight="bold" className="text-orange-600 text-xl ">
                        Who Benefits Most:
                    </Typography>
                    <ul className="mb-4 space-y-1 text-black">
                        <li className="list-disc list-inside text-xl">People who want access to affordable care</li>
                        <li className="list-disc list-inside text-xl">People who want to avoid high out-of-pocket costs</li>
                        <li className="list-disc list-inside text-xl">People with young families</li>
                    </ul>

                    <Typography variant="body1" fontWeight="bold" className="text-orange-600 text-xl">
                        Coverage includes:
                    </Typography>
                    <ul className="space-y-1 text-black">
                        <li className="list-disc list-inside text-xl">$0 for the first four visits to each:</li>
                        <ul style={{listStyleType: "circle"}}>
                            <li className="list-inside pl-4 text-xl">Primary Care</li>
                            <li className="list-inside pl-4 text-xl">Specialists</li>
                            <li className="list-inside pl-4 text-xl">Mental Health</li>
                            <li className="list-inside pl-4 text-xl">Retail Clinic</li>
                            <li className="list-inside pl-4 text-xl">Urgent Care</li>
                            <li className="list-inside pl-4 text-xl">Habilitative/Rehabilitative Therapies</li>
                        </ul>
                        <li className="list-disc list-inside text-xl">$5 for common prescriptions</li>
                        <li className="list-disc list-inside text-xl">$0 common maintenance labs</li>
                        <li className="list-disc list-inside text-xl">$0 virtual care through CirrusMD</li>
                        <li className="list-disc list-inside text-xl">Interest-free, flexible payment options through TempoPay</li>
                    </ul>
                </div>
            </Box>

            <Box
                className="flex flex-col items-center justify-between w-full max-w-4xl p-6 space-y-6 bg-white rounded-lg md:flex-row md:space-x-6 md:space-y-0"
            >
                {/* Circle Image */}
                <div className="flex-shrink-0 text-center md:text-left md:w-1/3 flex flex-col justify-center items-center ">
                    <img
                        src="https://www.texicare.com/wp-content/uploads/2024/02/Thrive-Care.png"
                        alt="Thrive Care logo"
                        className="mx-auto md:mx-0 rounded-full w-48"
                    />
                    <Typography variant="h6" fontWeight="bold" className="mt-2 mb-4 px-10 text-[#42a3cb] text-center text-2xl">
                        Transparent costs with no surprises
                    </Typography>
                    <div className="w-full text-center">
                        <Button
                            variant="outlined"
                            className="border-[#42a3cb] text-white font-bold bg-[#42a3cb] hover:bg-white hover:text-[#42a3cb]"
                            sx={{
                                borderColor: 'white',
                                color: 'white',
                                fontSize: '0.9rem',
                                padding: '0.3rem 1.2rem',
                                borderRadius: '50px',
                                fontWeight: 'bold',
                                '&:hover': {
                                    backgroundColor: 'white',
                                    color: '#f05a28',
                                },
                            }}
                        >
                            Plan Details
                        </Button>
                    </div>
                </div>

                {/* Plan Information */}
                <div className="flex-1">
                    <Typography variant="body1" fontWeight="bold" className="text-[#42a3cb] text-xl ">
                        Who Benefits Most:
                    </Typography>
                    <ul className="mb-4 space-y-1 text-black">
                        <li className="list-disc list-inside text-xl">People who want to know costs prior to service</li>
                    </ul>

                    <Typography variant="body1" fontWeight="bold" className="text-[#42a3cb] text-xl">
                        Coverage includes:
                    </Typography>
                    <ul className="space-y-1 text-black">
                        <li className="list-disc list-inside text-xl">Clear, upfront costs</li>
                        <li className="list-disc list-inside text-xl">$0 virtual care through CirrusMD</li>
                        <li className="list-disc list-inside text-xl">Low copays for primary care and mental health</li>
                        <li className="list-disc list-inside text-xl">Interest-free, flexible payment options through TempoPay</li>
                    </ul>
                </div>
            </Box>

            <Box
                className="flex flex-col items-center justify-between w-full max-w-4xl p-6 space-y-6 bg-white rounded-lg md:flex-row md:space-x-6 md:space-y-0"
            >
                {/* Circle Image */}
                <div className="flex-shrink-0 text-center md:text-left md:w-1/3 flex flex-col justify-center items-center ">
                    <img
                        src="https://www.texicare.com/wp-content/uploads/2024/02/Savings-Care.png"
                        alt="Savings Care logo"
                        className="mx-auto md:mx-0 rounded-full w-48"
                    />
                    <Typography variant="h6" fontWeight="bold" className="mt-2 mb-4 px-10 text-[#001648] text-center text-2xl">
                        Allows tax-free contributions into an HSA
                    </Typography>
                    <div className="w-full text-center">
                        <Button
                            variant="outlined"
                            className="border-[#001648] text-white font-bold bg-[#001648] hover:bg-white hover:text-[#001648]"
                            sx={{
                                borderColor: 'white',
                                color: 'white',
                                fontSize: '0.9rem',
                                padding: '0.3rem 1.2rem',
                                borderRadius: '50px',
                                fontWeight: 'bold',
                                '&:hover': {
                                    backgroundColor: 'white',
                                    color: '#f05a28',
                                },
                            }}
                        >
                            Plan Details
                        </Button>
                    </div>
                </div>

                {/* Plan Information */}
                <div className="flex-1">
                    <Typography variant="body1" fontWeight="bold" className="text-[#001648] text-xl ">
                        Who Benefits Most:
                    </Typography>
                    <ul className="mb-4 space-y-1 text-black">
                        <li className="list-disc list-inside text-xl">People who want to shop for the highest quality care at the lowest price</li>
                        <li className="list-disc list-inside text-xl">People who want lower monthly premiums</li>
                        <li className="list-disc list-inside text-xl">People who want a tax-advantaged Health Savings Account</li>
                    </ul>

                    <Typography variant="body1" fontWeight="bold" className="text-[#001648] text-xl">
                        Coverage includes:
                    </Typography>
                    <ul className="space-y-1 text-black">
                        <li className="list-disc list-inside text-xl">$0 virtual care through CirrusMD</li>
                        <li className="list-disc list-inside text-xl">Deductibles and out-of-pocket maximums that comply with IRS guidelines</li>
                        <li className="list-disc list-inside text-xl">Interest-free, flexible payment options through TempoPay</li>
                    </ul>
                </div>
            </Box>
        </div>
    );
};

export default CarePlansSection;