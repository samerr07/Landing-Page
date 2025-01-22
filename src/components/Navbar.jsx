
import React, { useState } from "react";
import { Link as ScrollLink } from 'react-scroll'
import { Link as RouterLink } from 'react-router-dom'
import Logo from "../assets/Aurjobs_Logo.jpg"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative bg-white shadow">
      {/* Navbar container */}
      <div className="w-full mx-auto px-2 sm:px-6 lg:px-4 ">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className=" flex items-center ">
            <RouterLink to="/" className="text-2xl gap-3 font-bold text-blue-500 flex items-center">
              <div><img src={Logo} alt="" className="w-20 rounded-md" /></div>
              <span>Sourcing AI</span> 
            </RouterLink>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-6">
            <RouterLink
              to="/register"
              className="text-gray-700 hover:text-black px-3 py-2 rounded-md text-md font-medium"
            >
              Candidate Registration 
            </RouterLink>
            <div>|</div>
            <RouterLink
              to="/search"
              className="text-gray-700 cursor-pointer hover:text-black px-3 py-2 rounded-md text-md font-medium"
            >
              Search Candidates
            </RouterLink>
            <div>|</div>
            <ScrollLink
              to="pricing" smooth duration={500}
              className="text-gray-700 cursor-pointer hover:text-black px-3 py-2 rounded-md text-md font-medium"
            >
              Pricing
            </ScrollLink>
            <div>|</div>
            <ScrollLink
              to="pricing" smooth duration={500}
              className="text-gray-700 cursor-pointer hover:text-black px-3 py-2 rounded-md text-md font-medium"
            >
              Contact
            </ScrollLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-700 hover:text-black focus:outline-none"
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
                  d={
                    menuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Links */}
      {menuOpen && (
        <div className="md:hidden bg-gray-100">
          <div className="px-4 py-4 space-y-2">
            <RouterLink
              to="/"
              className="block  text-gray-700 hover:text-black px-3 py-2 rounded-md text-sm font-medium"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </RouterLink>
            <RouterLink
              to="/register"
              className="block text-gray-700 hover:text-black px-3 py-2 rounded-md text-sm font-medium"
              onClick={() => setMenuOpen(false)}
            >
              Candidate Registration
            </RouterLink>
            <RouterLink
              to="/search"
              className="block text-gray-700 hover:text-black px-3 py-2 rounded-md text-sm font-medium"
              onClick={() => setMenuOpen(false)}
            >
              Search Candidates
            </RouterLink>
            <ScrollLink
              to="pricing" smooth duration={500}
              className="block text-gray-700 hover:text-black px-3 py-2 rounded-md text-sm font-medium"
              onClick={() => setMenuOpen(false)}
            >
              Pricing
            </ScrollLink>
            <ScrollLink
              to="pricing" smooth duration={500}
              className="block text-gray-700 hover:text-black px-3 py-2 rounded-md text-sm font-medium"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </ScrollLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;