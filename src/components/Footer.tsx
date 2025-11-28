import React from 'react';
import InstagramIcon from './icons/InstagramIcon';
import LinkedInIcon from './icons/LinkedInIcon';
import WhatsAppIcon from './icons/WhatsAppIcon';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <nav className="mb-4 md:mb-0">
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
            <li><a href="#" className="hover:text-gray-400">Studio</a></li>
            <li><a href="#" className="hover:text-gray-400">Services</a></li>
            <li><a href="#" className="hover:text-gray-400">Works</a></li>
            <li><a href="#" className="hover:text-gray-400">Contact</a></li>
          </ul>
        </nav>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-gray-400">
            <InstagramIcon />
          </a>
          <a href="#" className="hover:text-gray-400">
            <LinkedInIcon />
          </a>
          <a href="#" className="hover:text-gray-400">
            <WhatsAppIcon />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
