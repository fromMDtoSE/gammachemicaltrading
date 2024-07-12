import React from "react";
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-12">
      <div className="w-screen-2xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center space-x-4 relative">
              <div className="before:content-[''] before:absolute before:inset-0 before:m-0.5 before:rounded-full before:bg-red-500 before:w-20 before:h-20 before:transform before:rotate-45 before:z-0 flex-shrink-0 flex justify-center items-center align-center pb-4">
                <Image 
                  src="/favicon.ico" 
                  alt="Gamma Chemical Trading Logo" 
                  width={80} 
                  height={80} 
                  className="relative z-10"
                />
              </div>
              <span className="text-2xl font-bold text-white">
                Gamma Chemical Trading
              </span>
            </div>
            <p className="text-gray-400">
              Leading provider of chemical solutions for industries worldwide.
            </p>
          </div>
          <div className="ml-10">
            <h3 className="text-lg font-semibold text-white">Company</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="hover:text-red-500">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Social</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="hover:text-red-500">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Newsletter</h3>
            <p className="mt-4 text-gray-400">
              Subscribe to our newsletter to get the latest updates.
            </p>
            <form className="mt-4">
              <div className="flex items-center">
                <input
                  type="email"
                  className="w-full px-4 py-2 rounded-l-lg focus:outline-none"
                  placeholder="Your email"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-red-500 text-white rounded-r-lg hover:bg-red-600 focus:outline-none"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">&copy; 2024 Gamma Chemical Trading. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
