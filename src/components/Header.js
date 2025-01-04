import React from 'react';

const Header = () => {
  return (
    <div className="w-full bg-white">
      <div className="flex justify-between items-center px-6 py-3 text-white">
        {/* Logo */}
        <div className="text-xl text-[#1D2541] font-bold">Helpkey</div>

        {/* Links */}
        <div className="hidden md:flex space-x-6 text-sm text-gray-700">
          <a href="#">All Cities</a>
          <a href="#">Download App</a>
          <a href="#">Corporate Enquiry</a>
          <a href="#">Refer & Earn</a>
          <a href="#">A-List</a>
        </div>

        {/* Auth Links */}
        <div className="hidden md:flex text-[#1D2541] space-x-4 text-sm">
          <a href="#">Sign Up</a>
          <a href="#">Log In</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
