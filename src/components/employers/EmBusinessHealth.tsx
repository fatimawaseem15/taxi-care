"use client"
import { Container, Grid, Typography } from '@mui/material';
import React from 'react';

const EmBusinessHealth = () => {
    return (
        <>
            <div className="relative bg-cover bg-center py-32" style={{ backgroundImage: `url('https://www.texicare.com/wp-content/uploads/2024/02/Shop-with-Open-Sign.jpg')` }}>
                {/* Overlay to add dark effect */}
                {/* <div className="absolute inset-0 bg-gray-600 opacity-50"></div> */}

                {/* Content */}
                <Container maxWidth="lg" className="relative z-10">
                    <Grid container justifyContent="start">
                        <Grid item xs={12} md={8}>
                            <Typography variant="h3" className="text-white font-bold text-5xl text-left mb-6">
                                Good health is just good business.
                            </Typography>
                        </Grid>
                    </Grid>

                </Container >
            </div>
            {/* Key points under the main text */}
            <div className="container px-10">
                <Grid container justifyContent="center" spacing={4} className="mt-8">
                    {[
                        { title: "Higher Job Satisfaction" },
                        { title: "Higher Employee Retention"},
                        { title: "Fewer Sick Days"},
                        { title: "Easier Recruitment" },
                    ].map((point, index) => (
                        <Grid item xs={6} md={3} key={index} className="text-center flex justify-center">
                            <Typography variant="h6" className="text-gray-900 font-bold w-40 text-center">
                                {point.title}
                            </Typography>
                            {/* <Typography variant="body1" className="text-gray-700">
                                {point.subtitle}
                            </Typography> */}
                        </Grid>
                    ))}
                </Grid>
            </div>
        </>
    );
};

export default EmBusinessHealth;

