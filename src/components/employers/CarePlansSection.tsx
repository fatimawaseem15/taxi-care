"use client"
import React from "react";
import Image from "next/image";

const CarePlansSection: React.FC = () => {
    return (
        <div className="flex flex-col items-center w-full py-12 space-y-8">
            <div className="flex flex-col items-center justify-between w-full max-w-4xl p-6 space-y-6 bg-white rounded-lg md:flex-row md:space-x-6 md:space-y-0">
                {/* Circle Image */}
                <div className="flex-shrink-0 text-center md:text-left md:w-1/3 flex flex-col justify-center items-center">
                    <Image
                        src="https://www.texicare.com/wp-content/uploads/2024/02/Essential-Care.png"
                        alt="Essential Care logo"
                        className="mx-auto md:mx-0 rounded-full w-48"
                        width={100}
                        height={100}
                    />
                    <h6 className="mt-2 mb-4 px-10 text-[#eb4824] text-center text-2xl font-bold">
                        Affordable coverage for basic care
                    </h6>
                    <div className="w-full text-center">
                        <button
                            className="border border-orange-600 text-white font-bold bg-orange-600 hover:bg-white hover:text-orange-600 px-4 py-2 rounded-full"
                        >
                            Plan Details
                        </button>
                    </div>
                </div>

                {/* Plan Information */}
                <div className="flex-1">
                    <p className="text-orange-600 text-xl font-bold">
                        Who Benefits Most:
                    </p>
                    <ul className="mb-4 space-y-1 text-black">
                        <li className="list-disc list-inside text-xl">People who want access to affordable care</li>
                        <li className="list-disc list-inside text-xl">People who want to avoid high out-of-pocket costs</li>
                        <li className="list-disc list-inside text-xl">People with young families</li>
                    </ul>

                    <p className="text-orange-600 text-xl font-bold">
                        Coverage includes:
                    </p>
                    <ul className="space-y-1 text-black">
                        <li className="list-disc list-inside text-xl">$0 for the first four visits to each:</li>
                        <ul className="pl-4 list-circle" style={{listStyleType: "circle"}}>
                            <li className="list-inside text-xl">Primary Care</li>
                            <li className="list-inside text-xl">Specialists</li>
                            <li className="list-inside text-xl">Mental Health</li>
                            <li className="list-inside text-xl">Retail Clinic</li>
                            <li className="list-inside text-xl">Urgent Care</li>
                            <li className="list-inside text-xl">Habilitative/Rehabilitative Therapies</li>
                        </ul>
                        <li className="list-disc list-inside text-xl">$5 for common prescriptions</li>
                        <li className="list-disc list-inside text-xl">$0 common maintenance labs</li>
                        <li className="list-disc list-inside text-xl">$0 virtual care through CirrusMD</li>
                        <li className="list-disc list-inside text-xl">Interest-free, flexible payment options through TempoPay</li>
                    </ul>
                </div>
            </div>

            <div className="flex flex-col items-center justify-between w-full max-w-4xl p-6 space-y-6 bg-white rounded-lg md:flex-row md:space-x-6 md:space-y-0">
                {/* Circle Image */}
                <div className="flex-shrink-0 text-center md:text-left md:w-1/3 flex flex-col justify-center items-center">
                    <img
                        src="https://www.texicare.com/wp-content/uploads/2024/02/Thrive-Care.png"
                        alt="Thrive Care logo"
                        className="mx-auto md:mx-0 rounded-full w-48"
                    />
                    <h6 className="mt-2 mb-4 px-10 text-[#42a3cb] text-center text-2xl font-bold">
                        Transparent costs with no surprises
                    </h6>
                    <div className="w-full text-center">
                        <button
                            className="border border-[#42a3cb] text-white font-bold bg-[#42a3cb] hover:bg-white hover:text-[#42a3cb] px-4 py-2 rounded-full"
                        >
                            Plan Details
                        </button>
                    </div>
                </div>

                {/* Plan Information */}
                <div className="flex-1">
                    <p className="text-[#42a3cb] text-xl font-bold">
                        Who Benefits Most:
                    </p>
                    <ul className="mb-4 space-y-1 text-black">
                        <li className="list-disc list-inside text-xl">People who want to know costs prior to service</li>
                    </ul>

                    <p className="text-[#42a3cb] text-xl font-bold">
                        Coverage includes:
                    </p>
                    <ul className="space-y-1 text-black">
                        <li className="list-disc list-inside text-xl">Clear, upfront costs</li>
                        <li className="list-disc list-inside text-xl">$0 virtual care through CirrusMD</li>
                        <li className="list-disc list-inside text-xl">Low copays for primary care and mental health</li>
                        <li className="list-disc list-inside text-xl">Interest-free, flexible payment options through TempoPay</li>
                    </ul>
                </div>
            </div>

            <div className="flex flex-col items-center justify-between w-full max-w-4xl p-6 space-y-6 bg-white rounded-lg md:flex-row md:space-x-6 md:space-y-0">
                {/* Circle Image */}
                <div className="flex-shrink-0 text-center md:text-left md:w-1/3 flex flex-col justify-center items-center">
                    <img
                        src="https://www.texicare.com/wp-content/uploads/2024/02/Savings-Care.png"
                        alt="Savings Care logo"
                        className="mx-auto md:mx-0 rounded-full w-48"
                    />
                    <h6 className="mt-2 mb-4 px-10 text-[#001648] text-center text-2xl font-bold">
                        Allows tax-free contributions into an HSA
                    </h6>
                    <div className="w-full text-center">
                        <button
                            className="border border-[#001648] text-white font-bold bg-[#001648] hover:bg-white hover:text-[#001648] px-4 py-2 rounded-full"
                        >
                            Plan Details
                        </button>
                    </div>
                </div>

                {/* Plan Information */}
                <div className="flex-1">
                    <p className="text-[#001648] text-xl font-bold">
                        Who Benefits Most:
                    </p>
                    <ul className="mb-4 space-y-1 text-black">
                        <li className="list-disc list-inside text-xl">People who want to shop for the highest quality care at the lowest price</li>
                        <li className="list-disc list-inside text-xl">People who want lower monthly premiums</li>
                        <li className="list-disc list-inside text-xl">People who want a tax-advantaged Health Savings Account</li>
                    </ul>

                    <p className="text-[#001648] text-xl font-bold">
                        Coverage includes:
                    </p>
                    <ul className="space-y-1 text-black">
                        <li className="list-disc list-inside text-xl">$0 virtual care through CirrusMD</li>
                        <li className="list-disc list-inside text-xl">Deductibles and out-of-pocket maximums that comply with IRS guidelines</li>
                        <li className="list-disc list-inside text-xl">Interest-free, flexible payment options through TempoPay</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default CarePlansSection;