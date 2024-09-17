"use client"
import Image from 'next/image';
import React from 'react';

const features = [
    { title: "Affordable solutions", description: "Quality and accessible care", icon: "https://www.texicare.com/wp-content/uploads/elementor/thumbs/Texicare-Star-Small-qk5xlkadibvhz5j0ars83jjdc124qaqktnbfigq57s.png" },
    { title: "Quality and accessible care", description: "Accessible care", icon: "https://www.texicare.com/wp-content/uploads/elementor/thumbs/Texicare-Star-Small-qk5xlkadibvhz5j0ars83jjdc124qaqktnbfigq57s.png" },
    { title: "Easy to use", description: "User-friendly", icon: "https://www.texicare.com/wp-content/uploads/elementor/thumbs/Texicare-Star-Small-qk5xlkadibvhz5j0ars83jjdc124qaqktnbfigq57s.png" },
    { title: "Transparent costs", description: "Clear pricing", icon: "https://www.texicare.com/wp-content/uploads/elementor/thumbs/Texicare-Star-Small-qk5xlkadibvhz5j0ars83jjdc124qaqktnbfigq57s.png" },
    { title: "Preventative care", description: "Stay healthy", icon: "https://www.texicare.com/wp-content/uploads/elementor/thumbs/Texicare-Star-Small-qk5xlkadibvhz5j0ars83jjdc124qaqktnbfigq57s.png" },
    { title: "Financially stable", description: "Security", icon: "https://www.texicare.com/wp-content/uploads/elementor/thumbs/Texicare-Star-Small-qk5xlkadibvhz5j0ars83jjdc124qaqktnbfigq57s.png" }
];

const FeaturesSection = () => {
    return (
        <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap items-center -mx-4">

                    {/* Right side text content */}
                    <div className="w-full md:w-1/3 px-4">
                        <div className="text-left">
                            <h4 className="text-2xl mb-6 md:px-10 text-[#333333] leading-7">
                                Our innovative approach keeps your business going strong.
                            </h4>
                            <div className="mt-4">
                                <a href='#texas-business' className="bg-primary md:ml-10 text-white font-bold py-3 px-6 rounded-full mr-4 hover:bg-white border-2 hover:text-primary border-primary my-3 text-[15px] leading-[15px] transition-all font-avenir-bold uppercase">
                                    See Our Plans
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Left side with feature boxes */}
                    <div className="w-full md:w-2/3 px-4 mt-8">
                        <div className="flex flex-wrap -mx-2">
                            {features.map((feature, index) => (
                                <div className="w-full sm:w-1/3 px-2 mb-4" key={index}>
                                    <div className="bg-white text-center shadow-none p-4">
                                        <div className="mb-4">
                                            <Image src={feature.icon} alt="feature-icon" className="mx-auto w-24" width={100} height={100} />
                                        </div>
                                        <h6 className="text-xl font-bold text-orange-500 mb-2">
                                            {feature.title}
                                        </h6>
                                        {/* <p className="text-gray-700">
                                            {feature.description}
                                        </p> */}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const CompleteSection = () => {
    return (
        <div>
            <FeaturesSection />
        </div>
    );
};

export default CompleteSection;