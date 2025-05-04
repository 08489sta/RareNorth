import React, { Suspense } from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center pt-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-frenchie-light/20 to-white z-0"></div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-light text-frenchie-dark mb-4 animate-fade-in">
          <span className="font-bold">Mini Blue Merle</span> French Bulldogs
        </h1>
        
        <p className="text-xl md:text-2xl text-frenchie-gray max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Fluffy gene purebreds with exceptional temperament and perfect health
        </p>
        
        <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <a 
            href="#contact" 
            className="px-8 py-3 bg-frenchie-purple text-white rounded-full hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl"
          >
            Inquire Now
          </a>
        </div>
      </div>
      
      <div className="mt-8 w-full h-[400px] md:h-[500px] relative z-0 animate-fade-in" style={{ animationDelay: '0.6s' }}>
        <Suspense fallback={<div>Loading 3D model...</div>}>
          <Spline 
            scene="https://prod.spline.design/bvAzWyTgXzvnmdvg/scene.splinecode" 
            className="w-full h-full"
          />
        </Suspense>
      </div>
    </section>
  );
};

export default Hero;
