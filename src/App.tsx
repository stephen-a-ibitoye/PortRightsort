import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Services from './components/Services';
import Clients from './components/Clients';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Projects />
      <Services />
      <Clients />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
