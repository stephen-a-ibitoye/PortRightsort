import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'GEN',
    description: 'Branding, brand guide',
    imageUrl: 'assets/Gen-01-scaled.jpg',
  },
  {
    title: 'Berrics',
    description: 'Strategy & Design, Identity, Interface',
    imageUrl: 'assets/Berrics-1-scaled.jpg',
  },
  {
    title: 'Cariuma',
    description: 'Branding, Interactive Content',
    imageUrl: 'assets/Cariuma-1-1-scaled.jpg',
  },
  {
    title: 'Zuso',
    description: 'Branding, UX/UI, Illustration, Animation',
    imageUrl: 'assets/Zuso-11.jpg',
  },
  {
    title: 'Superela',
    description: 'App Design, Branding, Illustration, Motion, UX/UI',
    imageUrl: 'assets/Superela-1-scaled.jpg',
  },
];

const Projects: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center mb-12">Our Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
