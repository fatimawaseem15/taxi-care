"use client";
import React, { useState } from 'react';
import imagePoster from '@/app/assets/Texicare-CEO-Video-Poster.png';

const DNASection: React.FC = () => {
    const [showControls, setShowControls] = useState(false);

    return (
        <div className="relative">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-no-repeat bg-right-top bg-contain md:block hidden"
                style={{
                    backgroundImage: `url('https://texicare.com/wp-content/uploads/2024/02/ABOUT-20-Starburst_Starburst.png')`,
                    backgroundSize: '20rem auto',
                }}
            ></div>

            {/* Content Container */}
            <div className="container mx-auto relative py-12 px-4 md:px-12 lg:px-24 z-10">
                <div className="text-left">
                    {/* Title */}
                    <h4 className="text-[#43a2ca] md:leading-[48px] font-bold md:text-[48px] text-4xl mb-4">
                        Trust is in our DNA.
                    </h4>

                    {/* Description */}
                    <p className="text-[#333333] md:text-[20px] md:leading-[30px] text-lg md:text-xl md:w-3/5 font-medium">
                        Texicare is a health affiliate of Texas Mutual, who has been the
                        leading workers’ compensation provider in Texas for over 30 years.
                        Texas Mutual has protected and cared for more than 76,000 businesses
                        and 1.5M working Texans and their families. Creating Texicare is the
                        logical – and enthusiastic – next step in their commitment to build a
                        stronger, safer, healthier Texas.
                    </p>

                    {/* Subheading */}
                    <h6 className="text-[#001748] md:text-[23px] md:leading-[23px] text-lg font-bold mt-8">
                        Hear from our President and CEO Meredith Duncan
                    </h6>

                    {/* Video Section */}
                    <div className="mt-6 flex justify-center">
                        <div className="relative w-[80%] md:w-[70%] lg:w-[65%]">
                            <video
                                src="https://www.texicare.com/wp-content/uploads/2024/02/Interview-with-Texicares-CEO_1.mp4"
                                poster={imagePoster.src}
                                controls={showControls}
                                preload='metadata'
                                controlsList='nodownload'
                                onClick={() => setShowControls(true)}
                                className='cursor-pointer'
                            ></video>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DNASection;
