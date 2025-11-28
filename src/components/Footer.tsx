import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Reino Studio</h3>
            <p>We build strategy, structure, and meaning.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Connect</h3>
            <ul>
              <li><a href="https://www.instagram.com/reinostudio/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="https://www.linkedin.com/company/reino-studio" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <p>+55 21 98479-6999</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
