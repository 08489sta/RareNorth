
import React from 'react';
import { Heart, Check, CheckCheck, CircleCheck } from 'lucide-react';

const Qualities = () => {
  const qualities = [
    {
      title: 'Temperament',
      icon: <Heart className="text-frenchie-purple h-6 w-6" />,
      description: 'Our French Bulldogs are known for their friendly, playful, and affectionate nature. They make excellent companions and get along well with children and other pets.'
    },
    {
      title: 'Care',
      icon: <Check className="text-frenchie-purple h-6 w-6" />,
      description: 'We raise all puppies in a loving home environment, providing early socialization, proper nutrition, and all necessary veterinary care to ensure they thrive.'
    },
    {
      title: 'Perfect Health',
      icon: <CheckCheck className="text-frenchie-purple h-6 w-6" />,
      description: 'Health is our top priority. All our breeding dogs undergo extensive health testing, and puppies receive thorough veterinary examinations before going to their new homes.'
    },
    {
      title: 'Registration',
      icon: <CircleCheck className="text-frenchie-purple h-6 w-6" />,
      description: 'All puppies come with Continental Kennel Club (CKC) registration papers that can be transferred to the American Kennel Club (AKC) if desired.'
    }
  ];

  return (
    <section id="qualities" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-light text-center text-frenchie-dark mb-12">
          Our <span className="font-medium">Commitment</span> to Excellence
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {qualities.map((quality, index) => (
            <div 
              key={quality.title} 
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="flex items-center mb-4">
                {quality.icon}
                <h3 className="text-xl font-medium ml-2 text-frenchie-dark">{quality.title}</h3>
              </div>
              <p className="text-frenchie-gray">{quality.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Qualities;
