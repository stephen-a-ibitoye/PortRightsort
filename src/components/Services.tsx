import React from 'react';
import ServiceCard from './ServiceCard';

const services = [
  {
    title: 'Motion Graphics',
    description: 'Campaigns Institutional and Corporate Videos Digital and Interactive Experiences',
    gifUrl: 'assets/GIF_Motion.gif',
  },
  {
    title: 'Web & Digital Product',
    description: 'Interface Design(UI) User Experience (UX) Mobile and App Design Interactive Design Prototyping',
    gifUrl: 'assets/GIF_Web.gif',
  },
  {
    title: 'Brand Identity',
    description: 'Market Research Brand Architecture Brand Messaging Development Brand Guidelines Naming and Slogan',
    gifUrl: 'assets/GIF_Brand.gif',
  },
];

const Services: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center mb-12">What can we do for you</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            gifUrl={service.gifUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
