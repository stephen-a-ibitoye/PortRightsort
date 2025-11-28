"use client";
import { motion } from "framer-motion";

const clients = [
  "/images/client-01.webp",
  "/images/client-02.webp",
  "/images/client-03.webp",
  "/images/client-04.webp",
  "/images/client-05.webp",
  "/images/client-06.webp",
  "/images/client-07.webp",
  "/images/client-08.webp",
];

export default function Clients() {
  return (
    <section id="clients" className="py-32 bg-brand-black">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-16">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              className="flex justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
            >
              <img src={client} alt="Client logo" className="h-12" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
