"use client"
import { Box, Typography, Link as MuiLink } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn'; // LinkedIn Icon from Material UI
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="bg-[#001748] py-20">
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    justifyContent: 'space-between',
                    alignItems: { xs: 'center', md: 'flex-start' },
                    maxWidth: '1200px',
                    margin: '0 auto',
                    px: 3,
                }}
            >
                {/* Left: Logo and Address */}
                <Box className="text-white mb-5 md:mb-0">
                    <Image src="https://www.texicare.com/wp-content/uploads/elementor/thumbs/Texicare-Logo_No-Tagline_sm-qk5wycnxhac69o475erhvo0dmkqp0eh6697pqvq7a8.png" alt="Texicare logo" className="w-56 mb-3" width={100} height={100} />
                    <Typography variant="body2" className='mt-14'>
                        2500 Bee Cave Rd, Bldg. 1, Suite 250, Austin, TX 78746-5869
                    </Typography>
                </Box>

                {/* Center: Links */}
                <Box className="text-white mb-5 md:mb-0 flex space-x-10 font-bold">
                    <Box className="mr-20">
                        <Typography variant="body2"><MuiLink href="#" className='no-underline text-white font-bold'>About Us</MuiLink></Typography>
                        <Typography variant="body2"><MuiLink href="#" className='no-underline text-white font-bold'>Plans</MuiLink></Typography>
                        <Typography variant="body2"><MuiLink href="#" className='no-underline text-white font-bold'>Agents</MuiLink></Typography>
                        <Typography variant="body2"><MuiLink href="#" className='no-underline text-white font-bold'>Employers</MuiLink></Typography>
                        <Typography variant="body2"><MuiLink href="#" className='no-underline text-white font-bold'>Members</MuiLink></Typography>
                        <Typography variant="body2"><MuiLink href="#" className='no-underline text-white font-bold'>Providers</MuiLink></Typography>
                    </Box>
                    <Box>
                        <Typography variant="body2"><MuiLink href="#" className='no-underline text-white font-bold'>Careers</MuiLink></Typography>
                        <Typography variant="body2"><MuiLink href="#" className='no-underline text-white font-bold'>Newsroom</MuiLink></Typography>
                        <Typography variant="body2"><MuiLink href="#" className='no-underline text-white font-bold'>Privacy Policy</MuiLink></Typography>
                    </Box>
                </Box>

                {/* Right: LinkedIn Icon */}
                <Box className="text-white">
                    <MuiLink href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <LinkedInIcon sx={{ fontSize: 40, color: '#0077b5' }} />
                    </MuiLink>
                </Box>
            </Box>
        </footer>
    );
};

export default Footer;
