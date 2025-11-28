import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-4 py-8 flex justify-between items-center">
        <div className="text-2xl font-bold">Reino Studio</div>
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="hover:text-gray-400">Studio</a>
          <a href="#" className="hover:text-gray-400">Services</a>
          <a href="#" className="hover:text-gray-400">Works</a>
          <a href="#" className="hover:text-gray-400">Contact</a>
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-black text-white">
          <nav className="container mx-auto px-4 py-8 flex flex-col space-y-4">
            <a href="#" className="hover:text-gray-400">Studio</a>
            <a href="#" className="hover:text-gray-400">Services</a>
            <a href="#" className="hover:text-gray-400">Works</a>
            <a href="#" className="hover:text-gray-400">Contact</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
