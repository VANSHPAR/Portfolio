// import React from 'react';
// import { motion } from 'framer-motion';
// import { Link as ScrollLink } from 'react-scroll';

// /**
//  * Hero component – a full‑screen introductory section with animated headline
//  * and a call‑to‑action button that scrolls to the contact section.
//  *
//  * This component is pure presentational and does not accept any props.
//  */
// export default function Hero() {
//   return (
//     <section
//       id="hero"
//       className="min-h-screen flex items-center justify-center bg-gradient-to-b from-navy-900 to-navy-700 text-center text-white"
//     >
//       <div className="container mx-auto px-4">
//         <motion.h1
//           className="text-5xl md:text-7xl font-bold mb-6"
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           Hi, I&apos;m <span className="text-emerald-400">Vansh Parmar</span>
//         </motion.h1>
//         <motion.p
//           className="text-lg md:text-xl mb-8"
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3, duration: 0.8 }}
//         >
//           Full‑Stack Developer | Open‑Source Enthusiast | Problem Solver
//         </motion.p>
//         <ScrollLink
//           to="contact"
//           smooth={true}
//           offset={-70}
//           duration={500}
//           className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-3 px-6 rounded shadow-lg cursor-pointer"
//         >
//           Get in Touch
//         </ScrollLink>
//       </div>
//     </section>
//   );
// }
import React from "react";
import { motion } from "framer-motion";


// Re‑use the same smooth‑scroll helper as in Navbar for consistency
const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

// Personal data – adjust as needed
const name = "Vansh Parmar";
const role = "Full‑Stack Developer";
const tagline = "Building performant, beautiful web experiences.";

const Hero = () => {
  return (
    <section id="home" className="flex flex-col items-center justify-center min-h-screen bg-navy text-white">
      {/* Profile Image */}
      <img
        src="data:image/jpeg;base64,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"
        alt="Profile"
        className="w-40 h-40 rounded-full mb-6 object-cover"
        loading="lazy"
      />

      {/* Animated Name */}
      <motion.h1
        className="text-5xl md:text-6xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {name}
      </motion.h1>

      {/* Role & Tagline */}
      <motion.p
        className="text-xl md:text-2xl text-gray-300 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        {role}
      </motion.p>
      <motion.p
        className="text-lg md:text-xl text-gray-400 mb-12 text-center max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        {tagline}
      </motion.p>

      {/* Call‑to‑Action Buttons */}
      <div className="flex space-x-4">
        <a
          href="/Vansh_Parmar_Resume.pdf"
          download
          className="px-6 py-3 bg-teal-600 hover:bg-teal-500 text-white rounded transition-colors"
        >
          Download Resume
        </a>
        <button
          onClick={() => scrollToSection("contact")}
          className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded transition-colors"
        >
          Get In Touch
        </button>
      </div>
    </section>
  );
};

export default Hero;
