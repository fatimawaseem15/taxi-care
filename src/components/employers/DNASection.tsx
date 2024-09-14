"use client"
import React from 'react';

const DNASection: React.FC = () => {
    return (
        <div className="py-12 px-4 md:px-12 lg:px-24">
            <div className="text-left">
                {/* Title */}
                <h4 className="text-[#0087bc] font-bold text-4xl mb-4">
                    Trust is in our DNA.
                </h4>

                {/* Description */}
                <p className="text-gray-800 leading-relaxed text-lg md:text-xl md:w-3/5 font-medium">
                    Texicare is a health affiliate of Texas Mutual, who has been the
                    leading workers’ compensation provider in Texas for over 30 years.
                    Texas Mutual has protected and cared for more than 76,000 businesses
                    and 1.5M working Texans and their families. Creating Texicare is the
                    logical – and enthusiastic – next step in their commitment to build a
                    stronger, safer, healthier Texas.
                </p>

                {/* Subheading */}
                <h6 className="text-[#002d62] font-bold mt-8">
                    Hear from our President and CEO Meredith Duncan
                </h6>

                {/* Video Section */}
                <div className="mt-6 flex justify-center">
                    <div className="relative w-[80%] md:w-[70%] lg:w-[60%]">
                        <video
                            src="https://www.texicare.com/wp-content/uploads/2024/02/Interview-with-Texicares-CEO_1.mp4"
                            className="w-full h-full rounded-lg"
                            controls
                            preload='metadata'
                            controlsList='nodownload'
                        ></video>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DNASection;