"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-32">
      <div className="container mx-auto px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-8xl font-bold">SAY HI!</h2>
          <p className="text-3xl mt-8">
            Tell us about your project.
          </p>
          <a
            href="mailto:contact@reinostudio.com.br"
            className="mt-12 inline-block bg-brand-white text-brand-black py-6 px-12 rounded-full font-bold text-xl"
          >
            Let’s collaborate and make great stuff.
          </a>
          <p className="mt-12 text-2xl">
            <a href="tel:+5521984796999" className="hover:text-brand-gray">
              +55 21 98479-6999
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
