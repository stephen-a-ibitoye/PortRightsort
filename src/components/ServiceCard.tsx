import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  gifUrl: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, gifUrl }) => {
  return (
    <div className="text-center">
      <img src={gifUrl} alt={title} className="mx-auto mb-4" />
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ServiceCard;
