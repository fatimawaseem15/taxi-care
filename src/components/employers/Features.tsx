"use client"
import { Button, Container, Grid, Typography, Card, CardContent } from '@mui/material';
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

// const PortalSection = () => {
//     return (
//         <>
//             <div className="bg-[#43a2ca] mt-10 py-36 flex items-center justify-between">

//                 <div className="container flex justify-between items-center mx-auto w-screen px-32">

//                     {/* <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden', zIndex: 0 }}>
//                         <svg className="w-full h-full" viewBox="0 0 500 150" preserveAspectRatio="none">
//                             <path d="M0.00,49.98 C150.00,150.00 271.49,-49.86 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
//                                 style={{ stroke: 'none', fill: '#ffffff22' }}>
//                             </path>
//                         </svg>
//                     </Box> */}

//                     {/* Content */}
//                     <Button variant="outlined" className='rounded-2xl bg-white font-bold h-fit py-2.5 text-orange-600 border-orange-600 hover:bg-orange-600 hover:text-white' sx={{ borderColor: '#ed5929', color: '#ed5929', zIndex: 1 }}>
//                         TEXICARE EMPLOYER PORTAL
//                     </Button>

//                     <Typography
//                         variant="body1"
//                         color="white"
//                         sx={{ zIndex: 1, pr: 2 }}
//                         className="text-lg md:text-xl font-bold w-3/5"
//                     >
//                         Before you can access the portal, you’ll need to download and <a href="/" target='_blank' className='text-[#001748] hover:text-white'>fill out the self-service website account authorization form.</a>
//                     </Typography>
//                 </div>
//             </div>
//         </>
//     );
// };

const FeaturesSection = () => {
    return (
        <section className="py-12 bg-white">
            <Container maxWidth="lg">
                <Grid container spacing={4} alignItems="center">


                    {/* Right side text content */}
                    <Grid item xs={12} md={4}>
                        <div className="text-left">
                            <Typography variant="h4" className="font-bold mb-6">
                                Our innovative approach keeps your business going strong.
                            </Typography>
                            <div className="mt-4">
                                <Button variant="contained" color="warning" className="mr-4 px-6 py-3 rounded-full font-bold">
                                    See Our Plans
                                </Button>
                            </div>
                        </div>
                    </Grid>

                    {/* Left side with feature boxes */}
                    <Grid item xs={12} md={8}>
                        <Grid container spacing={2}>
                            {features.map((feature, index) => (
                                <Grid item xs={12} sm={4} key={index}>
                                    <Card className="text-center shadow-none">
                                        <CardContent>
                                            <div className="mb-4">
                                                <Image src={feature.icon} alt="feature-icon" className="mx-auto w-24" width={100} height={100} />
                                            </div>
                                            <Typography variant="h6" className="font-bold text-orange-500 mb-2">
                                                {feature.title}
                                            </Typography>
                                            <Typography variant="body2" className="text-gray-700">
                                                {feature.description}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
};

const CompleteSection = () => {
    return (
        <div>
            {/* <PortalSection /> */}
            <FeaturesSection />
        </div>
    );
};

export default CompleteSection;
