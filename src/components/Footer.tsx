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
                    <p className="md:mt-20 mt-12 text-[13px] leading-5">
                        2500 Bee Cave Rd, Bldg. 1, Suite 250, Austin, TX 78746-5869
                    </p>
                </div>

                {/* Center: Links */}
                <div className="text-white mb-5 md:mb-0 flex space-x-10 font-bold text-[13px] ">
                    <div className="mr-20">
                        <p><a href="https://texicare.com/about/" className='no-underline text-white font-bold leading-5'>About Us</a></p>
                        <p><a href="#" className='no-underline text-white font-bold leading-5'>Plans</a></p>
                        <p><a href="#" className='no-underline text-white font-bold leading-5'>Agents</a></p>
                        <p><a href="#" className='no-underline text-white font-bold leading-5'>Employers</a></p>
                        <p><a href="#" className='no-underline text-white font-bold leading-5'>Members</a></p>
                        <p><a href="#" className='no-underline text-white font-bold leading-5'>Providers</a></p>
                    </div>
                    <div>
                        <p><a href="#" className='no-underline text-white font-bold leading-5'>Careers</a></p>
                        <p><a href="#" className='no-underline text-white font-bold leading-5'>Newsroom</a></p>
                        <p><a href="#" className='no-underline text-white font-bold leading-5'>Privacy Policy</a></p>
                    </div>
                </div>

                {/* Right: LinkedIn Icon */}
                <div className="text-white bg-[#0077b5] rounded-full p-[10px] self-end">
                    <a href="https://www.linkedin.com/company/texicare/" target="_blank" rel="noopener noreferrer">
                        <LinkedInIcon sx={{ fontSize: 30, color: 'white',  }} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;