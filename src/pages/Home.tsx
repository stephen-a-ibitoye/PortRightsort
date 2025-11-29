import React from 'react';
import Hero from '../components/Hero';
import FeaturedProjects from '../components/FeaturedProjects';
// import OurWorks from '../components/OurWorks';
import Services from '../components/Services';
import Contact from '../components/Contact';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      {/* <OurWorks /> */}
      <Services />
      <Contact />
    </>
  );
};

export default Home;
