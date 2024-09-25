"use client";
import React, { useState } from 'react';
import { Box, Typography, Container } from '@mui/material';
import imagePoster from '@/app/assets/Texicare-CEO-Video-Poster.png';

const DNASection: React.FC = () => {
    const [showControls, setShowControls] = useState(false);

    return (
        <Container maxWidth="lg" sx={{ position: 'relative', py: 6, px: { xs: 2, md: 4, lg: 6 } }}>
            <Box
                sx={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: 'url("https://texicare.com/wp-content/uploads/2024/02/ABOUT-20-Starburst_Starburst.png")',
                    backgroundSize: '20rem auto',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right top',
                    display: { xs: 'none', md: 'block' },
                }}
            />

            <Box sx={{ textAlign: 'left' }}>
                {/* Title */}
                <Typography variant="h4" sx={{ color: '#43a2ca', lineHeight: '48px', fontWeight: 'bold', mb: 2 }}>
                    Trust is in our DNA.
                </Typography>

                {/* Description */}
                <Typography
                    variant="body1"
                    sx={{ color: '#333333', fontSize: { xs: '1rem', md: '1.25rem' }, lineHeight: '30px', fontWeight: 'medium', mb: 2 }}
                >
                    Texicare is a health affiliate of Texas Mutual, who has been the
                    leading workers’ compensation provider in Texas for over 30 years.
                    Texas Mutual has protected and cared for more than 76,000 businesses
                    and 1.5M working Texans and their families. Creating Texicare is the
                    logical – and enthusiastic – next step in their commitment to build a
                    stronger, safer, healthier Texas.
                </Typography>

                {/* Subheading */}
                <Typography variant="h6" sx={{ color: '#001748', fontWeight: 'bold', mt: 2 }}>
                    Hear from our President and CEO Meredith Duncan
                </Typography>

                {/* Video Section */}
                <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}>
                    <Box sx={{ width: { xs: '80%', md: '70%', lg: '65%' }, position: 'relative' }}>
                        <video
                            src="https://www.texicare.com/wp-content/uploads/2024/02/Interview-with-Texicares-CEO_1.mp4"
                            poster={imagePoster.src}
                            controls={showControls}
                            preload="metadata"
                            controlsList="nodownload"
                            onClick={() => setShowControls(true)}
                            style={{ cursor: 'pointer', width: '100%' }}
                        />
                    </Box>
                </Box>
            </Box>
        </Container>
    );
};

export default DNASection;
