import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-4">SAY HI!</h2>
        <p className="text-lg mb-8">Tell us about your project.</p>
        <a href="mailto:contato@reinostudio.com.br" className="text-lg font-bold hover:underline">
          contato@reinostudio.com.br
        </a>
        <p className="mt-8">+55 21 98479-6999</p>
      </div>
    </section>
  );
};

export default Contact;
