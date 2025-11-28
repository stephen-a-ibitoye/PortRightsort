import React from 'react';

const Contact: React.FC = () => {
  return (
    <section className="bg-black text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-4">SAY HI!</h2>
        <p className="text-lg md:text-2xl mb-8">Tell us about your project.</p>
        <p className="text-lg md:text-2xl mb-12">Let’s collaborate and make great stuff.</p>
        <a href="tel:+5521984796999" className="text-2xl md:text-4xl font-bold hover:text-gray-400">
          +55 21 98479-6999
        </a>
      </div>
    </section>
  );
};

export default Contact;
