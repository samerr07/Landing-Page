import React from 'react';
import { Instagram, Send, Youtube } from 'lucide-react';
import Logo from "../assets/Aurjobs_Logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-gray-800 relative text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img className='w-16' src={Logo} alt="" />
              <h2 className="text-xl font-bold text-white">Aurjobs</h2>
            </div>
            <p className="text-sm text-white">
              Job portal with user profiles, skill updates, certifications, work experience and admin job postings.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4 pt-4">
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors">
                <Send className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white hover:text-[#6A38C2] transition-colors">Find Job</a></li>
              <li><a href="#" className="text-white hover:text-[#6A38C2] transition-colors">Find Company</a></li>
              <li><a href="#" className="text-white hover:text-[#6A38C2] transition-colors">Find Employee</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white hover:text-[#6A38C2] transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-[#6A38C2] text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-[#6A38C2] text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#6A38C2] text-white transition-colors">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#6A38C2] text-white transition-colors">Help & Support</a></li>
              <li><a href="#" className="hover:text-[#6A38C2] text-white transition-colors">Feedback</a></li>
              <li><a href="#" className="hover:text-[#6A38C2] text-white transition-colors">FAQs</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 mt-8 border-t border-gray-800 text-center">
          <p className="text-xl text-white">
          &copy; 2025 Aurjobs. All Rights Reserved
            
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;