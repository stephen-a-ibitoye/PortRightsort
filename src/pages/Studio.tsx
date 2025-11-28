import React from 'react';

const Studio: React.FC = () => {
  const clients = [
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

  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl font-bold mb-4">We blend technology and art to create innovative designs that open up new possibilities.</h1>
            <p className="text-lg text-gray-400">
              At Reino Studio, we blend technology and art to create innovative designs that open up new possibilities. We understand that sensitivity and technique go hand in hand, working together to benefit your company and customers.
            </p>
            <p className="text-lg text-gray-400 mt-4">
              Specializing in digital platforms, we also work across various mediums. From planning to development, we cover everything from visual identity to interactive installations. What sets us apart is our personalized approach.
            </p>
            <p className="text-lg text-gray-400 mt-4">
              Our owners are actively involved throughout the design process, ensuring a passionate and results-driven experience. With our dedicated customer service, close collaboration, and streamlined process, we make things simple and efficient, without unnecessary bureaucracy.
            </p>
          </div>
          <div>
            <img src="/src/assets/studio-image.jpg" alt="Reino Studio" className="w-full h-auto object-cover" />
          </div>
        </div>
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8">Our Clients</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {clients.map((client, index) => (
              <div key={index} className="flex items-center justify-center">
                <img src={`/src/assets/${client}`} alt={`Client ${index + 1}`} className="w-24 h-auto object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Studio;
