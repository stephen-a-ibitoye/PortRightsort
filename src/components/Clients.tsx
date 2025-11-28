import React from 'react';

const clientLogos = [
  'client-01.webp',
  'client-02.webp',
  'client-03.webp',
  'client-04.webp',
  'client-05.webp',
  'client-06.webp',
  'client-07.webp',
  'client-08.webp',
  'client-09.webp',
  'client-10.webp',
  'client-11.webp',
  'client-12.webp',
  'client-13.webp',
  'client-14.webp',
  'client-15.webp',
  'client-16.webp',
];

const Clients: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8">
        {clientLogos.map((logo, index) => (
          <img
            key={index}
            src={`assets/${logo}`}
            alt={`Client logo ${index + 1}`}
            className="mx-auto"
          />
        ))}
      </div>
    </section>
  );
};

export default Clients;
