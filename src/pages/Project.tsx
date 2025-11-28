import React from 'react';
import { useParams } from 'react-router-dom';
import { projects } from '../data/projects';
import NotFound from './NotFound';

const Project: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold">{project.title}</h1>
          <p className="text-lg text-gray-400">{project.category}</p>
        </div>
        <div>
          {project.images.map((image, index) => (
            <img
              key={index}
              src={`/src/assets/${image}`}
              alt={`${project.title} - ${index + 1}`}
              className="w-full h-auto object-cover mb-8"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
