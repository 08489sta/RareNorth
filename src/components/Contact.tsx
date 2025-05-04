
import React from 'react';
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thank you for your interest! We'll be in touch soon.",
    });
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-center text-frenchie-dark mb-8">
            <span className="font-medium">Contact</span> Us
          </h2>
          
          <p className="text-center text-frenchie-gray mb-10">
            Interested in our French Bulldogs? Send us a message and we'll get back to you as soon as possible.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-frenchie-gray mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 border border-frenchie-light rounded-lg focus:outline-none focus:ring-2 focus:ring-frenchie-purple"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-frenchie-gray mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 border border-frenchie-light rounded-lg focus:outline-none focus:ring-2 focus:ring-frenchie-purple"
                  required
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-frenchie-gray mb-2">Phone Number</label>
              <input 
                type="tel" 
                id="phone" 
                className="w-full px-4 py-2 border border-frenchie-light rounded-lg focus:outline-none focus:ring-2 focus:ring-frenchie-purple"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-frenchie-gray mb-2">Message</label>
              <textarea 
                id="message" 
                rows={5} 
                className="w-full px-4 py-2 border border-frenchie-light rounded-lg focus:outline-none focus:ring-2 focus:ring-frenchie-purple"
                required
              ></textarea>
            </div>
            
            <div className="text-center">
              <button 
                type="submit" 
                className="px-8 py-3 bg-frenchie-purple text-white rounded-full hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
