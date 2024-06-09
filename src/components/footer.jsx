import React from 'react'
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="bg-backgroundColor text-white">
      <div className="flex flex-col md:flex-row justify-between p-4 md:p-8 md:px-32">
        <div className="w-full md:w-1/4">
          <h1 className="font-semiold text-lg md:text-xl pb-2 md:pb-4">IRobotics Medix</h1>
          <p className="text-sm md:text-base">Welcome to IRobotics Medix, your trusted partner in advanced robotics solutions for healthcare. </p>
          
        </div>
        <div>
          <h1 className="font-medium text-lg md:text-xl pb-2 md:pb-4 pt-3 md:pt-0">About Us</h1>
          <nav className="flex flex-col gap-1 md:gap-2">
            <Link to='about' spy={true} smooth={true} duration={500} className='hover:text-hoverColor transition-all cursor-pointer text-sm md:text-base'>About Us</Link>
            <Link to='doctors/nurses' spy={true} smooth={true} duration={500} className='hover:text-hoverColor transition-all cursor-pointer text-sm md:text-base'>Doctors/Nurses</Link>
            <Link to='technology' spy={true} smooth={true} duration={500} className='hover:text-hoverColor transition-all cursor-pointer text-sm md:text-base'>Technology</Link>
          </nav>
        </div>
        <div>
          <h1 className="font-medium text-lg md:text-xl pb-2 md:pb-4 pt-3 md:pt-0">Services</h1>
          <nav className="flex flex-col gap-1 md:gap-2">
            <Link to='services' spy={true} smooth={true} duration={500} className='hover:text-hoverColor transition-all cursor-pointer text-sm md:text-base'>Lab Test</Link>
            <Link to='services' spy={true} smooth={true} duration={500} className='hover:text-hoverColor transition-all cursor-pointer text-sm md:text-base'>Treatment</Link>
            <Link to='services' spy={true} smooth={true} duration={500} className='hover:text-hoverColor transition-all cursor-pointer text-sm md:text-base'>Wellbeing Fitness</Link>
          </nav>
        </div>
        <div className="w-full md:w-1/4">
          <h1 className="font-medium text-lg md:text-xl pb-2 md:pb-4 pt-3 md:pt-0">Contact Us</h1>
          <nav className="flex flex-col gap-1 md:gap-2">
            <Link to="/" spy={true} smooth={true} duration={500} className='text-sm md:text-base'>457 Kayla Lane off Pennyville, Suite 901 Korilayout, AU 438215 United States</Link>
            <Link to="/" spy={true} smooth={true} duration={500} className='text-sm md:text-base'>support@care.com</Link>
            <Link to="/" spy={true} smooth={true} duration={500} className='text-sm md:text-base'>+1(217) 889-2604</Link>
          </nav>
        </div>
      </div>
      <div>
        <p className="text-center py-2 md:py-4 text-sm">@copyright developed by
          <span className="text-hoverColor"> NanaK techlites</span> | All
        rights reserved.
        </p>
      </div>
    </div>
  )
}

export default Footer;
