"use client"
import React from "react";
import Image from "next/image";

const CarePlansSection: React.FC = () => {
    return (
        <div className="flex flex-col items-center w-full py-12 space-y-8 md:gap-20 gap-12">

            {/* 1st block */}
            <div className="relative w-full p-6 space-y-6 bg-white rounded-lg md:flex-row md:space-y-0">
                <div className="absolute inset-0 bg-no-repeat bg-right bg-contain" style={{ backgroundImage: `url('https://texicare.com/wp-content/uploads/2024/02/PLANS-10-Starburst_Starburst-Black.png')`, backgroundSize: '12rem auto' }}></div>
                
                <div className="relative flex flex-col items-start justify-between md:flex-row max-w-6xl mx-auto gap-10">
                    {/* Circle Image */}
                    <div className="flex-shrink-0 text-center md:text-left md:w-1/3 flex flex-col justify-center items-center">
                        <Image
                            src="https://www.texicare.com/wp-content/uploads/2024/02/Essential-Care.png"
                            alt="Essential Care logo"
                            className="mx-auto md:mx-0 rounded-full w-48"
                            width={100}
                            height={100}
                            quality={100}
                        />
                        <h6 className="my-4 px-10 text-[#eb4824] w-2/3 text-center text-[22px] leading-[22px] font-bold">
                            Affordable coverage for basic care
                        </h6>
                        <div className="w-full text-center">
                            {/* <p
                                className="text-[13px] leading-[19.5px] text-center text-[#000000] font-bold  px-4 py-2"
                            >
                                Plan Details
                            </p> */}
                            <button
                                className="text-[15px] leading-[15px] font-avenir-bold border-2 border-primary text-white font-bold bg-primary hover:bg-white hover:text-primary px-6 py-3 rounded-full"
                            >
                                Plan Details
                            </button>
                        </div>
                    </div>

                    {/* Plan Information */}
                    <div className="flex-1">
                        <p className="text-primary text-[22px] leading-[22px] font-bold mb-5 font-avenir-bold">
                            Who Benefits Most:
                        </p>
                        <ul className=" mb-4 space-y-1 text-black ml-10">
                            <li className="list-disc text-[21px] leading-[31.5px]">People who want access to affordable care</li>
                            <li className="list-disc text-[21px] leading-[31.5px]">People who want to avoid high out-of-pocket costs</li>
                            <li className="list-disc text-[21px] leading-[31.5px]">People with young families</li>
                        </ul>

                        <p className="text-primary text-[22px] leading-[22px] font-bold mb-5 font-avenir-bold">
                            Coverage includes:
                        </p>
                        <ul className="space-y-1 text-black ml-10">
                            <li className="list-disc text-[21px] leading-[31.5px]">$0 for the first four visits to each:</li>
                            <ul className="pl-4 list-circle" style={{ listStyleType: "circle" }}>
                                <li className=" text-[21px] ml-8">Primary Care</li>
                                <li className=" text-[21px] ml-8">Specialists</li>
                                <li className=" text-[21px] ml-8">Mental Health</li>
                                <li className=" text-[21px] ml-8">Retail Clinic</li>
                                <li className=" text-[21px] ml-8">Urgent Care</li>
                                <li className=" text-[21px] ml-8">Habilitative/Rehabilitative Therapies</li>
                            </ul>
                            <li className="list-disc  text-[21px] leading-[31.5px]">$5 for common prescriptions</li>
                            <li className="list-disc  text-[21px] leading-[31.5px]">$0 common maintenance labs</li>
                            <li className="list-disc  text-[21px] leading-[31.5px]">$0 virtual care through CirrusMD</li>
                            <li className="list-disc  text-[21px] leading-[31.5px]">Interest-free, flexible payment options through TempoPay</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* 2nd block */}
            <div className="relative w-full p-6 space-y-6 bg-[#001748] bg-opacity-5 rounded-lg md:flex-row md:space-y-0">
                <div className="absolute inset-0 bg-no-repeat bg-right bg-contain" style={{ backgroundImage: `url('https://texicare.com/wp-content/uploads/2024/02/PLANS-10-Starburst_Starburst-Black.png')`, backgroundSize: '12rem auto' }}></div>
                <div className="relative flex flex-col items-start justify-between w-full md:flex-row  max-w-6xl mx-auto gap-10">
                    {/* Circle Image */}
                    <div className="flex-shrink-0 text-center md:text-left md:w-1/3 flex flex-col justify-center items-center">
                        <img
                            src="https://www.texicare.com/wp-content/uploads/2024/02/Thrive-Care.png"
                            alt="Thrive Care logo"
                            className="mx-auto md:mx-0 rounded-full w-48"
                            
                        />
                        <h6 className="my-4 px-12 text-[#42a3cb] w-2/3 text-center text-[22px] leading-[22px] font-bold">
                            Transparent costs with no surprises
                        </h6>
                        <div className="w-full text-center">
                            {/* <p
                                className="text-[13px] leading-[19.5px] text-center text-[#000000] font-bold px-4 py-2"
                            >
                                Plan Details
                            </p> */}
                            <button
                                className="text-[15px] leading-[15px] font-avenir-bold border-2 border-[#42a3cb] text-white font-bold bg-[#42a3cb] hover:bg-white hover:text-[#42a3cb] px-6 py-3 rounded-full"
                            >
                                Plan Details
                            </button>
                        </div>
                    </div>

                    {/* Plan Information */}
                    <div className="flex-1">
                        <p className="text-[#42a3cb] text-[22px] leading-[22px] text-xl font-bold mb-5 font-avenir-bold">
                            Who Benefits Most:
                        </p>
                        <ul className="mb-4 space-y-1 text-black ml-10">
                            <li className="list-disc  text-[21px] leading-[31.5px]">People who want to know costs prior to service</li>
                        </ul>

                        <p className="text-[#42a3cb] text-[22px] leading-[22px] text-xl font-bold mb-5 font-avenir-bold">
                            Coverage includes:
                        </p>
                        <ul className="space-y-1 text-black ml-10">
                            <li className="list-disc  text-[21px] leading-[31.5px]">Clear, upfront costs</li>
                            <li className="list-disc  text-[21px] leading-[31.5px]">$0 virtual care through CirrusMD</li>
                            <li className="list-disc  text-[21px] leading-[31.5px]">Low copays for primary care and mental health</li>
                            <li className="list-disc  text-[21px] leading-[31.5px]">Interest-free, flexible payment options through TempoPay</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* 3rd block */}
            <div className="relative w-full p-6 space-y-6 bg-white rounded-lg md:flex-row md:space-y-0">
                <div className="absolute inset-0 bg-no-repeat bg-right bg-contain" style={{ backgroundImage: `url('https://texicare.com/wp-content/uploads/2024/02/PLANS-10-Starburst_Starburst-Black.png')`, backgroundSize: '12rem auto' }}></div>
                <div className="relative flex flex-col items-start justify-between w-full md:flex-row max-w-6xl mx-auto gap-10">
                    {/* Circle Image */}
                    <div className="flex-shrink-0 text-center md:text-left md:w-1/3 flex flex-col justify-center items-center">
                        <img
                            src="https://www.texicare.com/wp-content/uploads/2024/02/Savings-Care.png"
                            alt="Savings Care logo"
                            className="mx-auto md:mx-0 rounded-full w-48"
                        />
                        <h6 className="my-4 px-12 text-[#001748] w-2/3 text-center text-[22px] leading-[22px] font-bold">
                            Allows tax-free contributions into an HSA
                        </h6>
                        <div className="w-full text-center">
                            {/* <p
                                className="text-[13px] leading-[19.5px] text-center text-[#000000] font-bold px-4 py-2"
                            >
                                Plan Details
                            </p> */}
                            <button
                                className="text-[15px] leading-[15px] border-2 font-avenir-bold border-[#001748] text-white font-bold bg-[#001748] hover:bg-white hover:text-[#001748] px-6 py-3 rounded-full"
                            >
                                Plan Details
                            </button>
                        </div>
                    </div>

                    {/* Plan Information */}
                    <div className="flex-1">
                        <p className="text-[#001748] text-[22px] leading-[22px] text-xl font-bold mb-5 font-avenir-bold">
                            Who Benefits Most:
                        </p>
                        <ul className="mb-4 space-y-1 text-black ml-10">
                            <li className="list-disc  text-[21px] leading-[31.5px]">People who want to shop for the highest quality care at the lowest price</li>
                            <li className="list-disc  text-[21px] leading-[31.5px]">People who want lower monthly premiums</li>
                            <li className="list-disc  text-[21px] leading-[31.5px]">People who want a tax-advantaged Health Savings Account</li>
                        </ul>

                        <p className="text-[#001748] text-[22px] leading-[22px] text-xl font-bold mb-5 font-avenir-bold">
                            Coverage includes:
                        </p>
                        <ul className="space-y-1 text-black ml-10">
                            <li className="list-disc  text-[21px] leading-[31.5px]">$0 virtual care through CirrusMD</li>
                            <li className="list-disc  text-[21px] leading-[31.5px]">Deductibles and out-of-pocket maximums that comply with IRS guidelines</li>
                            <li className="list-disc  text-[21px] leading-[31.5px]">Interest-free, flexible payment options through TempoPay</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarePlansSection;