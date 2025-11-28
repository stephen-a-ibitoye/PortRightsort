"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-8 flex justify-between items-center text-white">
      <div className="text-2xl font-bold">Reino</div>
      <nav className="hidden md:flex space-x-8">
        <a href="#studio" className="hover:underline">Studio</a>
        <a href="#services" className="hover:underline">Services</a>
        <a href="#works" className="hover:underline">Works</a>
        <a href="#contact" className="hover:underline">Contact</a>
      </nav>
      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden z-50">
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black flex flex-col items-center justify-center space-y-8"
        >
          <a href="#studio" onClick={() => setIsOpen(false)} className="text-4xl">Studio</a>
          <a href="#services" onClick={() => setIsOpen(false)} className="text-4xl">Services</a>
          <a href="#works" onClick={() => setIsOpen(false)} className="text-4xl">Works</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="text-4xl">Contact</a>
        </motion.div>
      )}
    </header>
  );
}
