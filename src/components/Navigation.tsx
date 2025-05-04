import React from 'react';
import { Link } from 'react-router-dom';
const Navigation = () => {
  return <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="font-semibold text-frenchie-dark text-xl tracking-tight">Rare Northern Frenchies</div>
        
        <div className="hidden md:flex space-x-8 text-frenchie-gray">
          <a href="#about" className="hover:text-frenchie-purple transition-colors">About</a>
          <a href="#qualities" className="hover:text-frenchie-purple transition-colors">Qualities</a>
          <a href="#gallery" className="hover:text-frenchie-purple transition-colors">Gallery</a>
          <a href="#contact" className="hover:text-frenchie-purple transition-colors">Contact</a>
        </div>
        
        <div className="md:hidden">
          <button className="text-frenchie-dark hover:text-frenchie-purple">
            Menu
          </button>
        </div>
      </div>
    </nav>;
};
export default Navigation;