import React, { useState, useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import logo from '../assets/logo.svg';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = (
    <>
      {isHomePage ? (
        <>
          <ScrollLink to="hero" smooth={true} duration={500} className="text-white hover:text-gray-300 px-4 py-2 text-sm font-medium cursor-pointer">Studio</ScrollLink>
          <ScrollLink to="services" smooth={true} duration={500} className="text-white hover:text-gray-300 px-4 py-2 text-sm font-medium cursor-pointer">Services</ScrollLink>
          <ScrollLink to="featured-works" smooth={true} duration={500} className="text-white hover:text-gray-300 px-4 py-2 text-sm font-medium cursor-pointer">Works</ScrollLink>
          <ScrollLink to="contact" smooth={true} duration={500} className="text-white hover:text-gray-300 px-4 py-2 text-sm font-medium cursor-pointer">Contact</ScrollLink>
        </>
      ) : (
        <>
          <RouterLink to="/studio" className="text-white hover:text-gray-300 px-4 py-2 text-sm font-medium">Studio</RouterLink>
          <RouterLink to="/services" className="text-white hover:text-gray-300 px-4 py-2 text-sm font-medium">Services</RouterLink>
          <RouterLink to="/works" className="text-white hover:text-gray-300 px-4 py-2 text-sm font-medium">Works</RouterLink>
          <RouterLink to="/contact" className="text-white hover:text-gray-300 px-4 py-2 text-sm font-medium">Contact</RouterLink>
        </>
      )}
    </>
  );

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black bg-opacity-80' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <RouterLink to="/">
              <img className="h-10 w-auto" src={logo} alt="Reino Studio" />
            </RouterLink>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks}
          </nav>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-black bg-opacity-90">
          <div className="flex flex-col items-center px-4 pt-2 pb-4 space-y-2">
            {navLinks}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
