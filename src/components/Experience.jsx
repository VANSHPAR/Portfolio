// import React from 'react';
// import Card from './Card.jsx';
import SectionWrapper from './SectionWrapper.jsx';
// import interncerti from '../assets/interncerti.jpg'

// // Sample data – replace with real experience objects or import from a JSON file.
// const experiences = [
//   {
//     title: 'Cyber Security Virtual Internship',
//     subtitle: 'C-DAC, Noida • May 2025 – Jun 2025',
//     description: ' Gained hands-on experience in ethical hacking, vulnerability analysis, and penetration testing. Solved 21 quizzes, completed 3 advanced virtual labs, and 1 cyber security project under a mentor.',
//     imageSrc: interncerti,
//     link: 'https://www.cdac.in/index.aspx?id=ND',
//     term:"Learn More"
//   },
//   // Add more entries …
// ];

// export default function Experience() {
//   return (
//     <SectionWrapper id="experience" bg="bg-navy-900" aosType="fade-up">
//       <h2 className="text-4xl font-bold mb-8 text-center text-emerald-400">Experience</h2>
//       <div className="grid md:grid-cols-2 gap-8">
//         {experiences.map((exp, idx) => (
//           <Card key={idx} {...exp} />
//         ))}
//       </div>
//     </SectionWrapper>
//   );
// }
import React from "react";
import { motion } from "framer-motion";

// Sample experiences – replace with real data as needed
const experiences = [
  {
    id: 1,
    company: "C-DAC, Noida",
    role: "Cyber Security Virtual Internship",
    period: "May 2025 – Jun 2025",
    description: "Gained hands-on experience in ethical hacking, vulnerability analysis, and penetration testing. Solved 21 quizzes, completed 3 advanced virtual labs, and 1 cyber security project under a mentor.",
  },
  
];

const Experience = () => {
  return (
    <SectionWrapper id="experience" className="max-w-4xl mx-auto px-4">
      <h2 className="text-4xl font-bold text-white mb-8 text-center">Work Experience</h2>
      {/* Container with vertical line */}
      <div className="relative ml-4">
        {/* The vertical line */}
        <div className="absolute left-0 top-0 h-full border-l-2 border-teal-500" />
        {/* Experience cards */}
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            className="relative mb-12 ml-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="rounded-lg bg-gray-800 bg-opacity-80 p-6 shadow-soft">
              <h3 className="text-xl font-semibold text-teal-400">{exp.role} @ {exp.company}</h3>
              <p className="text-sm text-gray-400 mb-2">{exp.period}</p>
              <p className="text-gray-200">{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Experience;
