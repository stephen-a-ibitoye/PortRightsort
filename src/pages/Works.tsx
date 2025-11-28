import React from 'react';
import { Link } from 'react-router-dom';

const Works: React.FC = () => {
  const works = [
    {
      title: 'GEN',
      image: 'Gen-32-1.png',
      slug: 'gen',
    },
    {
      title: 'Berrics',
      image: 'Berrics-23.jpg',
      slug: 'berrics',
    },
    {
      title: 'Cariuma',
      image: 'Cariuma-12.jpg',
      slug: 'cariuma',
    },
    {
      title: 'Zuso',
      image: 'Zuso-11.jpg',
      slug: 'zuso',
    },
    {
      title: 'Superela',
      image: 'Superela-8.jpg',
      slug: 'superela',
    },
    {
      title: 'GEN',
      image: 'Gen-21-1.png',
      slug: 'gen',
    },
    {
      title: 'Berrics',
      image: 'Berrics-22.jpg',
      slug: 'berrics',
    },
    {
      title: 'Cariuma',
      image: 'Cariuma-11.jpg',
      slug: 'cariuma',
    },
    {
      title: 'Superela',
      image: 'Superela-23.jpg',
      slug: 'superela',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold">Our Works</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {works.map((work, index) => (
            <Link key={index} to={`/works/${work.slug}`} className="group">
              <div className="overflow-hidden">
                <img
                  src={`/src/assets/${work.image}`}
                  alt={work.title}
                  className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Works;
