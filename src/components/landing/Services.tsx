"use client";
import { motion } from "framer-motion";

const services = [
  {
    title: "Motion Graphics",
    description: "Campaigns, Institutional and Corporate Videos, Digital and Interactive Experiences",
    gif: "/images/GIF_Motion.gif",
  },
  {
    title: "Web & Digital Product",
    description: "Interface Design (UI), User Experience (UX), Mobile and App Design, Interactive Design, Prototyping",
    gif: "/images/GIF_Web.gif",
  },
  {
    title: "Brand Identity",
    description: "Market Research, Brand Architecture, Brand Messaging Development, Brand Guidelines, Naming and Slogan",
    gif: "/images/GIF_Brand.gif",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-32">
      <div className="container mx-auto px-8">
        <h2 className="text-5xl font-bold text-center mb-16">
          What can we do for you
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img src={service.gif} alt={service.title} className="w-full h-auto mb-8" />
              <h3 className="text-3xl font-bold mb-4">{service.title}</h3>
              <p className="text-lg leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
