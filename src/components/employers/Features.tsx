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
        <section className="md:py-20 py-12 bg-white">
            <div className="xl:container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3">

                    {/* Right side text content */}
                    <div className="col-span-1 lg:px-16 px-7">
                        <div className="text-left">
                            <h4 className="text-3xl my-6 text-[#333333] leading-7">
                                Our innovative approach keeps your business going strong.
                            </h4>
                            <div className="mt-4 flex md:justify-start justify-center items-center">
                                <a href='#texas-business' className="bg-primary text-white font-bold py-3 px-6 rounded-full hover:bg-white border-2 hover:text-primary border-primary my-3 text-[15px] leading-[15px] transition-all font-avenir-bold uppercase">
                                    See Our Plans
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Left side with feature boxes */}
                    <div className="col-span-2 px-4 mt-8 md:mt-0">
                        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
                            {features.map((feature, index) => (
                                <div className="bg-white text-center shadow-none p-4" key={index}>
                                    <div className="mb-4">
                                        <Image src={feature.icon} alt="feature-icon" className="mx-auto w-24" width={100} height={100} />
                                    </div>
                                    <h6 className="text-xl font-bold text-primary mb-2">
                                        {feature.title}
                                    </h6>
                                    {/* <p className="text-gray-700">
                                        {feature.description}
                                    </p> */}
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