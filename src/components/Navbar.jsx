import React, { useState } from "react";
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import Logo from "../assets/Aurjobs_Logo.jpg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative bg-white shadow">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <RouterLink to="/" className="flex items-center gap-3 text-2xl font-bold text-blue-500">
              <img src={Logo} alt="Logo" className="w-12 sm:w-16 md:w-20  rounded-md" />
              <span className="text-custom-deep-blue lg:text-2xl text-xl">Sourcing AI</span>
            </RouterLink>
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-4 md:space-x-6">
            <RouterLink to="/register" className="text-custom-deep-blue px-3 py-2 rounded-md text-md font-medium">
              Candidate Registration
            </RouterLink>
            <div className="hidden md:block text-custom-deep-blue">|</div>
            <RouterLink to="/search" className="text-custom-deep-blue cursor-pointer px-3 py-2 rounded-md text-md font-medium">
              Search Candidates
            </RouterLink>
            <div className="hidden md:block text-custom-deep-blue">|</div>
            <ScrollLink to="pricing" smooth duration={500} className="text-custom-deep-blue cursor-pointer px-3 py-2 rounded-md text-md font-medium">
              Pricing
            </ScrollLink>
            <div className="hidden md:block text-custom-deep-blue">|</div>
            <ScrollLink to="pricing" smooth duration={500} className="text-custom-deep-blue cursor-pointer px-3 py-2 rounded-md text-md font-medium">
              Contact
            </ScrollLink>
          </div>

          {/* Menu Button - Visible on mobile and tablet */}
          <div className="lg:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-custom-deep-blue hover:text-black focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              <svg 
                className="h-6 w-6" 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile and Tablet Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-2">
            <RouterLink to="/" className="block text-custom-deep-blue hover:text-black px-3 py-2 rounded-md text-sm font-medium" onClick={() => setMenuOpen(false)}>
              Home
            </RouterLink>
            <RouterLink to="/register" className="block text-custom-deep-blue hover:text-black px-3 py-2 rounded-md text-sm font-medium" onClick={() => setMenuOpen(false)}>
              Candidate Registration
            </RouterLink>
            <RouterLink to="/search" className="block text-custom-deep-blue hover:text-black px-3 py-2 rounded-md text-sm font-medium" onClick={() => setMenuOpen(false)}>
              Search Candidates
            </RouterLink>
            <ScrollLink to="pricing" smooth duration={500} className="block text-custom-deep-blue hover:text-black px-3 py-2 rounded-md text-sm font-medium" onClick={() => setMenuOpen(false)}>
              Pricing
            </ScrollLink>
            <ScrollLink to="pricing" smooth duration={500} className="block text-custom-deep-blue hover:text-black px-3 py-2 rounded-md text-sm font-medium" onClick={() => setMenuOpen(false)}>
              Contact
            </ScrollLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

