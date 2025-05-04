
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-frenchie-dark text-white py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-medium">Rare Northern Frenchies</h3>
            <p className="text-sm text-gray-400 mt-1">Premium Mini Blue Merle French Bulldogs</p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="https://www.instagram.com/rarenorthernfrenchies?igsh=MTg2cmxiYzMzY3lncw==" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-frenchie-purple transition-colors"
            >
              Instagram
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Rare Northern Frenchies. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
