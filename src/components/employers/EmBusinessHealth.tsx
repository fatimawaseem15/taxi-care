"use client"
import React from 'react';

const EmBusinessHealth = () => {
    return (
        <section>
            <div className="relative bg-cover bg-center md:py-32 py-24" style={{ backgroundImage: `url('https://www.texicare.com/wp-content/uploads/2024/02/Shop-with-Open-Sign.jpg')` }}>
                {/* Overlay to add dark effect */}
                {/* <div className="absolute inset-0 bg-gray-600 opacity-50"></div> */}

                {/* Content */}
                <div className="relative z-10 max-w-screen-lg mx-auto px-3">
                    <div className="flex justify-start">
                        <div className="w-full md:w-6/12">
                            <h3 className="text-white font-bold md:text-[53px] md:leading-[53px] text-4xl text-left mb-6 font-avenir-bold">
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
                            <h6 className="font-bold w-40 text-center text-[23px] leading-[34.5px] text-[#3b3b3b]">
                                {point.title}
                            </h6>
                            {/* <p className="text-gray-700">
                                {point.subtitle}
                            </p> */}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EmBusinessHealth;