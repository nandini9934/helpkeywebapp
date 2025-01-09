import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle the menu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu open/close
  };

  return (
    <div className="container mx-auto w-full bg-white">
      <div className="flex justify-between items-center px-6 py-3 text-[#1D2541]">
        {/* Logo */}
        <div className="text-xl font-bold">Helpkey</div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-[#1D2541] focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        {/* Links for Larger Screens */}
        <div className="hidden md:flex space-x-6 text-sm text-gray-700">
          <a href="#">All Cities</a>
          <a href="#">Download App</a>
          <a href="#">Corporate Enquiry</a>
          <a href="#">Refer & Earn</a>
          <a href="#">A-List</a>
        </div>

        {/* Auth Links for Larger Screens */}
        <div className="hidden md:flex space-x-4 text-sm">
          <a href="#">Sign Up</a>
          <a href="#">Log In</a>
        </div>
      </div>

      {/* Mobile View for Links and Auth Links */}
      <div className={`md:hidden mt-2 space-y-2 pl-4 ${isMenuOpen ? 'block' : 'hidden'}`}>
        <a href="#" className="block text-sm text-gray-700">All Cities</a>
        <a href="#" className="block text-sm text-gray-700">Download App</a>
        <a href="#" className="block text-sm text-gray-700">Corporate Enquiry</a>
        <a href="#" className="block text-sm text-gray-700">Refer & Earn</a>
        <a href="#" className="block text-sm text-gray-700">A-List</a>

        <div>
          <a href="#" className="block text-sm font-bold text-gray-900">Sign Up</a>
          <a href="#" className="block py-2 text-sm font-bold text-gray-900">Log In</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
