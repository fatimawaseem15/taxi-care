"use client"
import LinkedInIcon from '@mui/icons-material/LinkedIn'; // LinkedIn Icon from Material UI
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="bg-[#001748] py-20">
            <div className="flex flex-col md:flex-row justify-between items-center md:items-start max-w-[1200px] mx-auto px-3">
                {/* Left: Logo and Address */}
                <div className="text-white mb-5 md:mb-0">
                    <Image src="https://www.texicare.com/wp-content/uploads/elementor/thumbs/Texicare-Logo_No-Tagline_sm-qk5wycnxhac69o475erhvo0dmkqp0eh6697pqvq7a8.png" alt="Texicare logo" className="w-56 mb-3" width={100} height={100} />
                    <p className="mt-14 text-sm">
                        2500 Bee Cave Rd, Bldg. 1, Suite 250, Austin, TX 78746-5869
                    </p>
                </div>

                {/* Center: Links */}
                <div className="text-white mb-5 md:mb-0 flex space-x-10 font-bold text-sm">
                    <div className="mr-20">
                        <p><a href="#" className='no-underline text-white font-bold'>About Us</a></p>
                        <p><a href="#" className='no-underline text-white font-bold'>Plans</a></p>
                        <p><a href="#" className='no-underline text-white font-bold'>Agents</a></p>
                        <p><a href="#" className='no-underline text-white font-bold'>Employers</a></p>
                        <p><a href="#" className='no-underline text-white font-bold'>Members</a></p>
                        <p><a href="#" className='no-underline text-white font-bold'>Providers</a></p>
                    </div>
                    <div>
                        <p><a href="#" className='no-underline text-white font-bold'>Careers</a></p>
                        <p><a href="#" className='no-underline text-white font-bold'>Newsroom</a></p>
                        <p><a href="#" className='no-underline text-white font-bold'>Privacy Policy</a></p>
                    </div>
                </div>

                {/* Right: LinkedIn Icon */}
                <div className="text-white">
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <LinkedInIcon sx={{ fontSize: 40, color: '#0077b5' }} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;