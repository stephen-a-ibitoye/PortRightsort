import React from 'react';
import ServicesComponent from '../components/Services';

const Services: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold">What can we do for you</h1>
        </div>
        <ServicesComponent />
      </div>
    </div>
  );
};

export default Services;
