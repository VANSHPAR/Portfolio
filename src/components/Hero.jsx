import React from 'react';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';

/**
 * Hero component – a full‑screen introductory section with animated headline
 * and a call‑to‑action button that scrolls to the contact section.
 *
 * This component is pure presentational and does not accept any props.
 */
export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-navy-900 to-navy-700 text-center text-white"
    >
      <div className="container mx-auto px-4">
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I&apos;m <span className="text-emerald-400">Vansh Parmar</span>
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Full‑Stack Developer | Open‑Source Enthusiast | Problem Solver
        </motion.p>
        <ScrollLink
          to="contact"
          smooth={true}
          offset={-70}
          duration={500}
          className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-3 px-6 rounded shadow-lg cursor-pointer"
        >
          Get in Touch
        </ScrollLink>
      </div>
    </section>
  );
}
