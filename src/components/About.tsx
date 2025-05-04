
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-frenchie-softgray">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light text-frenchie-dark mb-6">
            <span className="font-medium">Exceptional</span> Breeding
          </h2>
          
          <p className="text-frenchie-gray mb-8 text-lg leading-relaxed">
            We specialize in breeding the finest Mini Blue Merle French Bulldogs with the rare fluffy gene. 
            Our puppies are known for their stunning coat patterns, compact size, and affectionate personalities. 
            Each puppy is raised with meticulous care and attention to ensure they develop into healthy, 
            well-adjusted companions.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-frenchie-purple font-medium mb-2">CKC Registered</h3>
              <p className="text-sm text-frenchie-gray">All our dogs are registered with the Continental Kennel Club</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-frenchie-purple font-medium mb-2">AKC Transferable</h3>
              <p className="text-sm text-frenchie-gray">Registration can be transferred to the American Kennel Club</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
