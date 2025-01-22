import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle the menu
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false); // State for Sign Up modal
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false); // State for Log In modal

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu open/close
  };

  const closeAllModals = () => {
    setIsSignUpModalOpen(false);
    setIsLoginModalOpen(false);
  };

  return (
    <div className="container mx-auto w-full bg-white">
      <div className="flex justify-between items-center px-6 py-3 text-[#1D2541]">
        {/* Logo */}
        <div className="text-xl font-bold">Helpkey</div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-[#1D2541] focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
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
          <button
            onClick={() => setIsSignUpModalOpen(true)}
            className="text-blue-600 hover:underline"
          >
            Sign Up
          </button>
          <button
            onClick={() => setIsLoginModalOpen(true)}
            className="text-blue-600 hover:underline"
          >
            Log In
          </button>
        </div>
      </div>

      {/* Mobile View for Links and Auth Links */}
      <div className={`md:hidden mt-2 space-y-2 pl-4 ${isMenuOpen ? "block" : "hidden"}`}>
        <a href="#" onClick={() => setIsMenuOpen(false)} className="block text-sm text-gray-700">
          All Cities
        </a>
        <a href="#" onClick={() => setIsMenuOpen(false)} className="block text-sm text-gray-700">
          Download App
        </a>
        <a href="#" onClick={() => setIsMenuOpen(false)} className="block text-sm text-gray-700">
          Corporate Enquiry
        </a>
        <a href="#" onClick={() => setIsMenuOpen(false)} className="block text-sm text-gray-700">
          Refer & Earn
        </a>
        <a href="#" onClick={() => setIsMenuOpen(false)} className="block text-sm text-gray-700">
          A-List
        </a>

        <div>
          <button
            onClick={() => {
              setIsSignUpModalOpen(true);
              setIsMenuOpen(false);
            }}
            className="block text-sm font-bold text-gray-900"
          >
            Sign Up
          </button>
          <button
            onClick={() => {
              setIsLoginModalOpen(true);
              setIsMenuOpen(false);
            }}
            className="block py-2 text-sm font-bold text-gray-900"
          >
            Log In
          </button>
        </div>
      </div>

      {/* Sign Up Modal */}
      {isSignUpModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white w-full max-w-md p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Sign Up</h2>
            <form>
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 mb-4 border rounded"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full p-2 mb-4 border rounded"
              />
              <button className="w-full bg-blue-600 text-white py-2 rounded">
                Sign Up
              </button>
            </form>
            <button
              onClick={closeAllModals}
              className="absolute top-2 right-2 text-gray-600 hover:text-black"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Log In Modal */}
      {isLoginModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white w-full max-w-md p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Log In</h2>
            <form>
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 mb-4 border rounded"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full p-2 mb-4 border rounded"
              />
              <button className="w-full bg-blue-600 text-white py-2 rounded">
                Log In
              </button>
            </form>
            <button
              onClick={closeAllModals}
              className="absolute top-2 right-2 text-gray-600 hover:text-black"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
