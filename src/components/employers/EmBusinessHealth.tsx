"use client"
import React from 'react';

const EmBusinessHealth = () => {
    return (
        <>
            <div className="relative bg-cover bg-center py-32" style={{ backgroundImage: `url('https://www.texicare.com/wp-content/uploads/2024/02/Shop-with-Open-Sign.jpg')` }}>
                {/* Overlay to add dark effect */}
                {/* <div className="absolute inset-0 bg-gray-600 opacity-50"></div> */}

                {/* Content */}
                <div className="relative z-10 max-w-screen-lg mx-auto">
                    <div className="flex justify-start">
                        <div className="w-full md:w-2/3">
                            <h3 className="text-white font-bold text-5xl text-left mb-6">
                                Good health is just good business.
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
            {/* Key points under the main text */}
            <div className="container mx-auto px-10">
                <div className="flex flex-wrap justify-center mt-8">
                    {[
                        { title: "Higher Job Satisfaction" },
                        { title: "Higher Employee Retention" },
                        { title: "Fewer Sick Days" },
                        { title: "Easier Recruitment" },
                    ].map((point, index) => (
                        <div key={index} className="w-1/2 md:w-1/4 text-center flex justify-center mb-4">
                            <h6 className="text-gray-900 font-bold w-40 text-center">
                                {point.title}
                            </h6>
                            {/* <p className="text-gray-700">
                                {point.subtitle}
                            </p> */}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default EmBusinessHealth;