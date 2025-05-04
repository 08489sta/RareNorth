
import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Qualities from '@/components/Qualities';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="bg-white min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Qualities />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
