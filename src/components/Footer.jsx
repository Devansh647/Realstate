import React from 'react'
import { assets } from '../assets/assets'

function Footer() {
    return (
        <div className='pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden' id='footer'>
            <div className='container mx-auto flex flex-col md:flex-row justify-between items-start'>

                {/* Left Section */}
                <div className='w-full md:w-1/3 mb-8 md:mb-0'>
                    <img src={assets.logo_dark} alt="Company Logo" className='w-32 mb-4' />
                    <p className='text-gray-400 mt-4'>
                       UrbanAxis Realty is a next-generation real estate platform transforming how people buy, sell, and invest in property. Combining technology with industry expertise, UrbanAxis streamlines every step of the homeownership journey—from discovery to financing.

With a presence in 70+ cities and 5 countries, and handling over USD 4 billion in annual transactions, UrbanAxis stands at the intersection of real estate and innovation. Powered by AI-driven insights and immersive virtual experiences, we’re making property decisions smarter, faster, and more transparent for everyone.
                    </p>
                </div>

                {/* Middle Section (optional) */}
                <div className='w-full md:w-1/3 mb-8 md:mb-0'>
                    <h3 className='text-white font-semibold mb-4'>Quick Links</h3>
                    <ul className='flex flex-col gap-2 text-gray-400 space-y-2'>
                        <li><a href="#Header" className='hover:text-white'>Home</a></li>
                        <li><a href="#about" className='hover:text-white'>About Us</a></li>
                        <li><a href="#contact" className='hover:text-white'>Contact</a></li>
                    </ul>
                </div>

                {/* Right Section */}
                <div className='w-full md:w-1/3'>
                    <h3 className='text-white text-lg font-semibold mb-4'>Contact Info</h3>
                    <p className='text-gray-400 mb-4  max-w-80'>📍 New Delhi, India</p>
                    <p className='text-gray-400 mb-4  max-w-80'>📞 +91 8279545085</p>
                    <p className='text-gray-400 mb-4  max-w-80'>📧 devanshindoliayn2123@gmail.com</p>
                </div>

            </div>

            {/* Footer Bottom */}
            <div className='text-center text-gray-500 mt-10 border-t border-gray-700 pt-6'>
                © {new Date().getFullYear()} Real Estate. All rights reserved.
            </div>
        </div>
    )
}

export default Footer
