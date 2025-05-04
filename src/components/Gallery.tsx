import React from 'react';

const Gallery = () => {
  const images = [
    {
      src: '/images/IMG_0957.jpg',
      alt: 'French Bulldog puppy'
    },
    {
      src: '/images/IMG_5762.jpg',
      alt: 'French Bulldog puppy'
    },
    {
      src: '/images/IMG_5764.jpg',
      alt: 'French Bulldog puppy'
    },
    {
      src: '/images/IMG_8766.jpg',
      alt: 'French Bulldog puppy'
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-frenchie-softgray">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-light text-center text-frenchie-dark mb-12">
          Our <span className="font-medium">Beautiful</span> Puppies
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow bg-white"
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
