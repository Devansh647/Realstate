import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.svg';
import menu_icon from '../assets/menu_icon.svg';
import cross_icon from '../assets/cross_icon.svg';

const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    useEffect(() => {
        if (showMobileMenu) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => (document.body.style.overflow = 'auto');
    }, [showMobileMenu]);

    return (
        <div className="absolute top-0 left-0 w-full z-50 bg-transparent">
            <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6 md:px-16">

                {/* Logo */}
                <img src={logo} alt="Logo" className="w-28" />

                {/* Menu Links */}
                <ul className="hidden md:flex gap-7 text-white">
                    <a href="#Header" className="cursor-pointer hover:text-gray-300">Home</a>
                    <a href="#about" className="cursor-pointer hover:text-gray-300">About</a>
                    <a href="#projects" className="cursor-pointer hover:text-gray-300">Projects</a>
                    <a href="#testimonials" className="cursor-pointer hover:text-gray-300">Testimonials</a>
                </ul>

                {/* Signup Button */}
                <button className="hidden md:block bg-white text-gray-900 px-8 py-2 rounded-full cursor-pointer hover:bg-gray-200">
                    Signup
                </button>

                {/* Mobile Menu Icon */}
                <img
                    src={menu_icon}
                    alt="menu icon"
                    className="md:hidden cursor-pointer w-6"
                    onClick={() => setShowMobileMenu(true)}
                />
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden fixed top-0 right-0 bottom-0 bg-white transition-all duration-300 overflow-hidden z-40 ${
                    showMobileMenu ? 'w-full h-full' : 'w-0 h-0'
                }`}
            >
                <div
                    className="flex justify-end p-6 cursor-pointer"
                    onClick={() => setShowMobileMenu(false)}
                >
                    <img src={cross_icon} alt="cross icon" className="w-6" />
                </div>
                <ul className="flex flex-col items-center gap-4 mt-5 text-lg font-medium text-gray-800">
                    <a onClick={() => setShowMobileMenu(false)} href="#Header" className="px-4 py-2">Home</a>
                    <a onClick={() => setShowMobileMenu(false)} href="#about" className="px-4 py-2">About</a>
                    <a onClick={() => setShowMobileMenu(false)} href="#projects" className="px-4 py-2">Projects</a>
                    <a onClick={() => setShowMobileMenu(false)} href="#testimonials" className="px-4 py-2">Testimonials</a>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
