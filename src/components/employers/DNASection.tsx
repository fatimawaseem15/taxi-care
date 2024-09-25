"use client";
import React from "react";
import imagePoster from "@/app/assets/Texicare-CEO-Video-Poster.png"; // Adjust the image path as per your project structure

const DNASection: React.FC = () => {
    return (
        <section className="px-4 md:px-12 relative">
            <div className="max-w-7xl mx-auto">
                {/* Text on left (Full width on small, 1/2 on medium) and image on right (1/2 width) */}
                <div className="flex flex-col md:flex-row items-start justify-between gap-8 mb-12">
                    {/* Left Column - Text (Full width on small, 1/2 width on medium) */}
                    <div className="w-full md:w-2/3 py-12">
                        <h2 className="text-[#43a2ca] leading-[48px] font-bold text-[50px] md:text-5xl mb-4">
                            Trust is in our DNA.
                        </h2>
                        <p className="text-[#333333] text-[18px] md:text-[20px] leading-[28px] md:leading-[36px] font-medium mb-8 -space-x-2">
                            Texicare is a health affiliate of Texas Mutual, who has been the leading workers’ compensation provider in Texas for over 30 years. Texas Mutual has protected and cared for more than 76,000 businesses and 1.5M working Texans and their families. Creating Texicare is the logical – and enthusiastic – next step in their commitment to build a stronger, safer, healthier Texas.
                        </p>
                        {/* Subheading below the main content */}
                        <h6 className="text-[#001748] md:text-3xl md:leading-[23px] text-lg font-bold mt-24">
                            Hear from our President and CEO Meredith Duncan
                        </h6>
                    </div>

                    {/* Right Column - Image (fixed on the right side of the screen) */}
                    <div className="absolute top-0 right-0 md:w-[25%] w-[90%] flex justify-end">
                        <img
                            src="https://www.texicare.com/wp-content/uploads/2024/02/ABOUT-20-Starburst_Starburst.png"
                            alt="Starburst"
                            className="scale-125 hidden md:block rounded-full w-[90%] md:w-[100%]"
                        />
                    </div>
                </div>

                {/* Video Section below the subheading */}
                <div className="flex justify-center -mt-12 relative z-10">
                    <div className="relative w-[80%] md:w-[70%] lg:w-[65%]">
                        <video
                            src="https://www.texicare.com/wp-content/uploads/2024/02/Interview-with-Texicares-CEO_1.mp4"
                            poster={imagePoster.src}
                            controls
                            preload="metadata"
                            controlsList="nodownload"
                            className="cursor-pointer"
                        >
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DNASection;
