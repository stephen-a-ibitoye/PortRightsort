import React from 'react';
import ContactComponent from '../components/Contact';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold">SAY HI!</h1>
        </div>
        <ContactComponent />
      </div>
    </div>
  );
};

export default Contact;
