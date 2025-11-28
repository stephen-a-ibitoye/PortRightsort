"use client";
import { motion } from "framer-motion";

const works = [
  {
    title: "GEN",
    description: "Branding, brand guide",
    image: "/images/Gen-01-scaled.jpg",
  },
  {
    title: "Berrics",
    description: "Strategy & Design, Identity, Interface",
    image: "/images/Berrics-1-scaled.jpg",
  },
  {
    title: "Cariuma",
    description: "Branding, Interactive Content",
    image: "/images/Cariuma-1-1-scaled.jpg",
  },
  {
    title: "Zuso",
    description: "Branding, UX/UI, Illustration, Animation",
    image: "/images/Zuso-11.jpg",
  },
];

export default function Works() {
  return (
    <section id="works" className="py-20">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {works.map((work, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <img src={work.image} alt={work.title} className="w-full h-auto" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-8">
                <h3 className="text-4xl font-bold">{work.title}</h3>
                <p>{work.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
