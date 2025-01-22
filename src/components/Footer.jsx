// import React from 'react';
// import { Instagram, Send, Youtube } from 'lucide-react';
// import Logo from "../assets/Aurjobs_Logo.jpg";

// const Footer = () => {
//   return (
//     <footer className="bg-gray-800 relative text-white py-12 px-6">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//           {/* Brand Section */}
//           <div className="space-y-4">
//             <div className="flex items-center space-x-2">
//               <img className='w-16' src={Logo} alt="" />
//               <h2 className="text-xl font-bold text-white">Aurjobs</h2>
//             </div>
//             <p className="text-sm text-white">
//               Job portal with user profiles, skill updates, certifications, work experience and admin job postings.
//             </p>
            
//             {/* Social Links */}
//             <div className="flex space-x-4 pt-4">
//               <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors">
//                 <Instagram className="w-5 h-5" />
//               </a>
//               <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors">
//                 <Send className="w-5 h-5" />
//               </a>
//               <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors">
//                 <Youtube className="w-5 h-5" />
//               </a>
//             </div>
//           </div>

//           {/* Product Links */}
//           <div>
//             <h3 className="text-white font-bold mb-4">Product</h3>
//             <ul className="space-y-2">
//               <li><a href="#" className="text-white hover:text-[#6A38C2] transition-colors">Find Job</a></li>
//               <li><a href="#" className="text-white hover:text-[#6A38C2] transition-colors">Find Company</a></li>
//               <li><a href="#" className="text-white hover:text-[#6A38C2] transition-colors">Find Employee</a></li>
//             </ul>
//           </div>

//           {/* Company Links */}
//           <div>
//             <h3 className="text-white font-bold mb-4">Company</h3>
//             <ul className="space-y-2">
//               <li><a href="#" className="text-white hover:text-[#6A38C2] transition-colors">About Us</a></li>
//               <li><a href="#" className="hover:text-[#6A38C2] text-white transition-colors">Contact Us</a></li>
//               <li><a href="#" className="hover:text-[#6A38C2] text-white transition-colors">Privacy Policy</a></li>
//               <li><a href="#" className="hover:text-[#6A38C2] text-white transition-colors">Terms & Conditions</a></li>
//             </ul>
//           </div>

//           {/* Support Links */}
//           <div>
//             <h3 className="text-white font-bold mb-4">Support</h3>
//             <ul className="space-y-2">
//               <li><a href="#" className="hover:text-[#6A38C2] text-white transition-colors">Help & Support</a></li>
//               <li><a href="#" className="hover:text-[#6A38C2] text-white transition-colors">Feedback</a></li>
//               <li><a href="#" className="hover:text-[#6A38C2] text-white transition-colors">FAQs</a></li>
//             </ul>
//           </div>
//         </div>

//         {/* Footer Bottom */}
//         <div className="pt-8 mt-8 border-t border-gray-800 text-center">
//           <p className="text-xl text-white">
//           &copy; 2025 Aurjobs. All Rights Reserved
            
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from 'react';

const Footer = () => {
  const footerSections = {
    product: {
      title: 'Product',
      links: ['Features', 'Security', 'Enterprise', 'Case Studies', 'Pricing', 'Resources']
    },
    solutions: {
      title: 'Solutions',
      links: ['AI Sourcing', 'Talent Pipeline', 'Analytics', 'Integration', 'API Access']
    },
    support: {
      title: 'Support',
      links: ['Help Center', 'Community', 'Documentation', 'Training', 'Contact Us']
    },
    company: {
      title: 'Company',
      links: ['About', 'Blog', 'Careers', 'Press', 'Partners']
    }
  };

  return (
    <footer className="bg-gray-900 relative text-gray-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Logo Section */}
          <div className="col-span-2 md:col-span-1">
            <div className="text-white text-xl font-bold">AurJobs</div>
            <p className="mt-2 text-sm">Transforming recruitment with AI-powered sourcing solutions</p>
          </div>

          {/* Navigation Sections */}
          {Object.values(footerSections).map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-white transition-colors duration-200">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-6 mb-4 md:mb-0">
            <span>© 2025 AurJobs Inc.</span>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Privacy</a>
          </div>
          
          {/* Social Links */}
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white" aria-label="Twitter">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a href="#" className="hover:text-white" aria-label="LinkedIn">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="#" className="hover:text-white" aria-label="GitHub">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
