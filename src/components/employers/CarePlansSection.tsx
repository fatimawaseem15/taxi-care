"use client";
import React from "react";
import Image from "next/image";

const CarePlansSection: React.FC = () => {
    return (
        <div className="flex flex-col items-center w-full py-12 space-y-8 md:gap-20 gap-12">

            {/* 1st block */}
            <div className="relative w-full p-6 space-y-6 bg-white rounded-lg md:flex-row md:space-y-0">
                <div className="absolute md:block hidden inset-0 bg-no-repeat bg-right bg-contain"
                     style={{ backgroundImage: `url('https://texicare.com/wp-content/uploads/2024/02/PLANS-10-Starburst_Starburst-Black.png')`, backgroundSize: '12rem auto' }}>
                </div>

                <div className="relative flex flex-col items-center md:items-start justify-between md:flex-row max-w-6xl mx-auto gap-10">
                    {/* Circle Image */}
                    <div className="flex-shrink-0 text-center md:text-left md:w-1/3 flex flex-col justify-center items-center">
                        <Image
                            src="https://www.texicare.com/wp-content/uploads/2024/02/Essential-Care.png"
                            alt="Essential Care logo"
                            className="mx-auto md:mx-0 rounded-full w-48"
                            width={192}
                            height={192}
                            quality={100}
                        />
                        <h6 className="my-4 px-10 text-[#eb4824] w-2/3 text-center md:text-center text-[22px] leading-[22px] font-bold">
                            Affordable coverage for basic care
                        </h6>
                        <div className="w-full text-center">
                            <p className="text-[#000000] text-[13px] leading-[19.5px]">
                                Para obtener detalles del plan
                            </p>
                        </div>
                    </div>

                    {/* Plan Information */}
                    <div className="flex-1">
                        <p className="text-primary text-[22px] leading-[22px] font-bold mb-5 font-avenir-bold">
                            Who Benefits Most:
                        </p>
                        <ul className="mb-4 space-y-1 text-black sm:ml-10 ml-6">
                            <li className="list-disc text-[21px] leading-[31.5px]">People who want access to affordable care</li>
                            <li className="list-disc text-[21px] leading-[31.5px]">People who want to avoid high out-of-pocket costs</li>
                            <li className="list-disc text-[21px] leading-[31.5px]">People with young families</li>
                        </ul>

                        <p className="text-primary text-[22px] leading-[22px] font-bold mb-5 font-avenir-bold">
                            Coverage includes:
                        </p>
                        <ul className="space-y-1 text-black sm:ml-10 ml-6">
                            <li className="list-disc text-[21px] leading-[31.5px]">$0 for the first four visits to each:</li>
                            <ul className="pl-4 list-circle sm:ml-8 ml-1" style={{ listStyleType: "circle" }}>
                                <li className="text-[21px]">Primary Care</li>
                                <li className="text-[21px]">Specialists</li>
                                <li className="text-[21px]">Mental Health</li>
                                <li className="text-[21px]">Retail Clinic</li>
                                <li className="text-[21px]">Urgent Care</li>
                                <li className="text-[21px]">Habilitative/Rehabilitative Therapies</li>
                            </ul>
                            <li className="list-disc text-[21px] leading-[31.5px]">$5 for common prescriptions</li>
                            <li className="list-disc text-[21px] leading-[31.5px]">$0 common maintenance labs</li>
                            <li className="list-disc text-[21px] leading-[31.5px]">$0 virtual care through CirrusMD</li>
                            <li className="list-disc text-[21px] leading-[31.5px]">Interest-free, flexible payment options through TempoPay</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* 2nd block */}
            <div className="relative w-full p-6 py-12 md:py-24 space-y-6 bg-[#001748] bg-opacity-5 rounded-lg md:flex-row md:space-y-0">
            <div className="absolute md:block hidden inset-0 bg-no-repeat bg-right bg-contain"
                     style={{ backgroundImage: `url('https://texicare.com/wp-content/uploads/2024/02/PLANS-10-Starburst_Starburst-Black.png')`, backgroundSize: '12rem auto' }}>
                </div>

                <div className="relative flex flex-col items-center md:items-start justify-between w-full md:flex-row max-w-6xl mx-auto gap-10">
                    {/* Circle Image */}
                    <div className="flex-shrink-0 text-center md:text-left md:w-1/3 flex flex-col justify-center items-center">
                        <img
                            src="https://www.texicare.com/wp-content/uploads/2024/02/Thrive-Care.png"
                            alt="Thrive Care logo"
                            className="mx-auto md:mx-0 rounded-full w-48"
                        />
                        <h6 className="my-4 text-[#43a2ca] w-2/3 text-center md:text-center text-[22px] leading-[22px] font-bold">
                            Transparent costs with no surprises
                        </h6>
                        <div className="w-full text-center">
                            <p className="text-[#000000] text-[13px] leading-[19.5px]">
                                Para obtener detalles del plan
                            </p>
                        </div>
                    </div>

                    {/* Plan Information */}
                    <div className="flex-1">
                        <p className="text-[#42a3ca] text-[22px] leading-[22px] font-bold mb-5 font-avenir-bold">
                            Who Benefits Most:
                        </p>
                        <ul className="mb-4 space-y-1 text-black sm:ml-10 ml-6">
                            <li className="list-disc text-[21px] leading-[31.5px]">People who want to know costs prior to service</li>
                        </ul>

                        <p className="text-[#42a3cb] text-[22px] leading-[22px] font-bold mb-5 font-avenir-bold">
                            Coverage includes:
                        </p>
                        <ul className="space-y-1 text-black sm:ml-10 ml-6">
                            <li className="list-disc text-[21px] leading-[31.5px]">Clear, upfront costs</li>
                            <li className="list-disc text-[21px] leading-[31.5px]">$0 virtual care through CirrusMD</li>
                            <li className="list-disc text-[21px] leading-[31.5px]">Low copays for primary care and mental health</li>
                            <li className="list-disc text-[21px] leading-[31.5px]">Interest-free, flexible payment options through TempoPay</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* 3rd block */}
            <div className="relative w-full p-6 space-y-6 bg-white rounded-lg md:flex-row md:space-y-0">
                <div className="absolute md:block hidden inset-0 bg-no-repeat bg-right bg-contain"
                     style={{ backgroundImage: `url('https://texicare.com/wp-content/uploads/2024/02/PLANS-10-Starburst_Starburst-Black.png')`, backgroundSize: '12rem auto' }}>
                </div>
                <div className="relative flex flex-col items-center md:items-start justify-between w-full md:flex-row max-w-6xl mx-auto gap-10">
                    {/* Circle Image */}
                    <div className="flex-shrink-0 text-center md:text-left md:w-1/3 flex flex-col justify-center items-center">
                        <img
                            src="https://www.texicare.com/wp-content/uploads/2024/02/Savings-Care.png"
                            alt="Savings Care logo"
                            className="mx-auto md:mx-0 rounded-full w-48"
                        />
                        <h6 className="my-4 text-[#001648] w-2/3 text-center md:text-center text-[22px] leading-[22px] font-bold">
                            Allows tax-free contributions into an HSA
                        </h6>
                        <div className="w-full text-center">
                            <p className="text-[#000000] text-[13px] leading-[19.5px]">
                                Para obtener detalles del plan
                            </p>
                        </div>
                    </div>

                    {/* Plan Information */}
                    <div className="flex-1">
                        <p className="text-[#001748] text-[22px] leading-[22px] font-bold mb-5 font-avenir-bold">
                            Who Benefits Most:
                        </p>
                        <ul className="mb-4 space-y-1 text-black sm:ml-10 ml-6">
                            <li className="list-disc text-[21px] leading-[31.5px]">People who want a plan with lower premiums</li>
                            <li className="list-disc text-[21px] leading-[31.5px]">People who want to build an HSA</li>
                        </ul>

                        <p className="text-[#001748] text-[22px] leading-[22px] font-bold mb-5 font-avenir-bold">
                            Coverage includes:
                        </p>
                        <ul className="space-y-1 text-black sm:ml-10 ml-6">
                            <li className="list-disc text-[21px] leading-[31.5px]">$0 for the first four visits to each:</li>
                            <ul className="pl-4 list-circle sm:ml-8 ml-1" style={{ listStyleType: "circle" }}>
                                <li className="text-[21px]">Primary Care</li>
                                <li className="text-[21px]">Specialists</li>
                                <li className="text-[21px]">Mental Health</li>
                                <li className="text-[21px]">Retail Clinic</li>
                                <li className="text-[21px]">Urgent Care</li>
                                <li className="text-[21px]">Habilitative/Rehabilitative Therapies</li>
                            </ul>
                            <li className="list-disc text-[21px] leading-[31.5px]">Interest-free, flexible payment options through TempoPay</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CarePlansSection;
