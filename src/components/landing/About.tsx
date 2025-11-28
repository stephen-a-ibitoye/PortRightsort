"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-8">
            We blend technology and art to create innovative designs that open
            up new possibilities.
          </h2>
          <p className="text-lg">
            At Reino Studio, we blend technology and art to create innovative
            designs that open up new possibilities. We understand that
            sensitivity and technique go hand in hand, working together to
            benefit your company and customers.
          </p>
          <p className="text-lg mt-4">
            Specializing in digital platforms, we also work across various
            mediums. From planning to development, we cover everything from
            visual identity to interactive installations. What sets us apart is
            our personalized approach.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
