import React from 'react';
import { motion } from 'framer-motion';

import client01 from '../assets/client-01.webp';
import client02 from '../assets/client-02.webp';
import client03 from '../assets/client-03.webp';
import client04 from '../assets/client-04.webp';
import client05 from '../assets/client-05.webp';
import client06 from '../assets/client-06.webp';
import client07 from '../assets/client-07.webp';
import client08 from '../assets/client-08.webp';
import client09 from '../assets/client-09.webp';
import client10 from '../assets/client-10.webp';
import client11 from '../assets/client-11.webp';
import client12 from '../assets/client-12.webp';
import client13 from '../assets/client-13.webp';
import client14 from '../assets/client-14.webp';
import client15 from '../assets/client-15.webp';
import client16 from '../assets/client-16.webp';

const clientLogos = [
  { src: client01, alt: 'McDonalds' },
  { src: client02, alt: 'Mount Nittany Health' },
  { src: client03, alt: 'Sun-Maid' },
  { src: client04, alt: 'Peugeot' },
  { src: client05, alt: 'Evian' },
  { src: client06, alt: 'Cariuma' },
  { src: client07, alt: 'FIFA' },
  { src: client08, alt: 'Novo Nordisk' },
  { src: client09, alt: 'WIX' },
  { src: client10, alt: 'Optavia' },
  { src: client11, alt: 'Pavone Group' },
  { src: client12, alt: 'Herr\'s' },
  { src: client13, alt: 'TIM Group' },
  { src: client14, alt: 'The Berrics' },
  { src: client15, alt: 'Museu do Amanha' },
  { src: client16, alt: 'National Basketball Association' },
];

const Clients: React.FC = () => {
  const duplicatedLogos = [...clientLogos, ...clientLogos];

  return (
    <section id="clients" className="py-24 bg-black">
      <div className="container mx-auto">
        <div className="overflow-hidden">
          <motion.div
            className="flex"
            animate={{
              x: ['0%', '-100%'],
              transition: {
                ease: 'linear',
                duration: 20,
                repeat: Infinity,
              },
            }}
          >
            {duplicatedLogos.map((logo, index) => (
              <div key={index} className="flex-shrink-0 w-48 mx-8">
                <img src={logo.src} alt={logo.alt} className="h-12" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
