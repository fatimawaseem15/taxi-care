"use client";
import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';

const EmBusinessHealth = () => {
    return (
        <section>
            <Box
                sx={{
                    position: 'relative',
                    backgroundImage: `url('https://www.texicare.com/wp-content/uploads/2024/02/Shop-with-Open-Sign.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    py: { xs: 6, md: 12 }, // Adjusted padding for smaller screens
                }}
            >
                {/* Overlay to add dark effect */}
                {/* <Box sx={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(96, 125, 139, 0.5)' }} /> */}

                {/* Content */}
                <Box sx={{ position: 'relative', zIndex: 10, maxWidth: 'lg', mx: 'auto', px: { xs: 2, md: 3 } }}>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                        <Box sx={{ width: { xs: '100%', md: '50%' } }}>
                            <Typography variant="h3" sx={{ color: 'white', fontWeight: 'bold', fontSize: { xs: '2.5rem', md: '3.5rem' }, mb: 6 }}>
                                Good health is just good business.
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>

            {/* Key points under the main text */}
            <Container sx={{ px: { xs: 2, md: 3 }, mt: 2 }}>
                <Grid container spacing={4} justifyContent="center">
                    {[
                        { title: "Higher Job Satisfaction" },
                        { title: "Higher Employee Retention" },
                        { title: "Fewer Sick Days" },
                        { title: "Easier Recruitment" },
                    ].map((point, index) => (
                        <Grid item xs={6} md={3} key={index}>
                            <Typography 
                                variant="h6" 
                                sx={{ 
                                    fontWeight: 'bold', 
                                    textAlign: 'center', 
                                    fontSize: '1.5rem', 
                                    color: '#3b3b3b' 
                                }}
                            >
                                {point.title}
                            </Typography>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </section>
    );
};

export default EmBusinessHealth;
