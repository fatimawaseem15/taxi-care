"use client"
import React from 'react';
import { Typography, Box } from '@mui/material';
// import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

const DNASection: React.FC = () => {
    return (
        <div className="py-12 px-4 md:px-12 lg:px-24">
            <Box className="text-left">
                {/* Title */}
                <Typography
                    variant="h4"
                    className="text-[#0087bc] font-bold text-4xl"
                    fontWeight="bold"
                    gutterBottom
                >
                    Trust is in our DNA.
                </Typography>

                {/* Description */}
                <Typography
                    variant="body1"
                    className="text-gray-800 leading-relaxed text-lg md:text-xl md:w-3/5"
                    fontWeight="medium"
                >
                    Texicare is a health affiliate of Texas Mutual, who has been the
                    leading workers’ compensation provider in Texas for over 30 years.
                    Texas Mutual has protected and cared for more than 76,000 businesses
                    and 1.5M working Texans and their families. Creating Texicare is the
                    logical – and enthusiastic – next step in their commitment to build a
                    stronger, safer, healthier Texas.
                </Typography>

                {/* Subheading */}
                <Typography
                    variant="h6"
                    className="text-[#002d62] font-bold mt-8"
                    fontWeight="bold"
                >
                    Hear from our President and CEO Meredith Duncan
                </Typography>

                {/* Video Section */}
                <Box className="mt-6 flex justify-center">
                    <Box className="relative w-[80%] md:w-[70%] lg:w-[60%]">
                        <video
                            src="https://www.texicare.com/wp-content/uploads/2024/02/Interview-with-Texicares-CEO_1.mp4"
                            className="w-full h-full rounded-lg"
                            controls
                            preload='metadata'
                            controlsList='nodownload'
                        ></video>
                    </Box>
                </Box>
            </Box>
        </div>
    );
};

export default DNASection;

