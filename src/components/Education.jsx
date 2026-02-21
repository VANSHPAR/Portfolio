// import React from 'react';
import SectionWrapper from './SectionWrapper.jsx';

// const education = [
//   {
//     degree: 'B.E. Computer Science & Engineering',
//     institution: 'The Maharaja Sayajirao University of Baroda',
//     period: '2023 – 2027',
//     details: '',
//   },
//   // Additional entries if needed
// ];

// export default function Education() {
//   return (
//     <SectionWrapper id="education" bg="bg-navy-900" aosType="fade-up">
//       <h2 className="text-4xl font-bold mb-8 text-center text-emerald-400">Education</h2>
//       <ul className="space-y-6">
//         {education.map((ed, i) => (
//           <li key={i} className="bg-gray-800 p-4 rounded-lg">
//             <h3 className="text-xl font-semibold text-emerald-300">{ed.degree}</h3>
//             <p className="text-gray-400">{ed.institution} • {ed.period}</p>
//             <p className="mt-2 text-gray-300 text-sm">{ed.details}</p>
//           </li>
//         ))}
//       </ul>
//     </SectionWrapper>
//   );
// }
import React from "react";
import { motion } from "framer-motion";

// Sample education data – replace with real information as needed
const education = [
  {
    id: 1,
    institution: "The Maharaja Sayajirao University of Baroda",
    degree: "B.E. Computer Science & Engineering",
    period: "2023 – 2027",
    details: "Graduated with honors, focusing on algorithms, data structures, and software engineering principles.",
  },
  {
    id: 2,
    institution: "University Y",
    degree: "M.Sc. Software Engineering",
    period: "2021‑2023",
    details: "Specialized in distributed systems and cloud-native application development. Thesis on micro‑service orchestration.",
  },
  // Add more entries as needed
];

const Education = () => {
  return (
    <SectionWrapper id="education" className="max-w-4xl mx-auto px-4">
      <h2 className="text-4xl font-bold text-white mb-8 text-center">Education</h2>
      {education.map((edu, index) => (
        <motion.div
          key={edu.id}
          className="bg-navy bg-opacity-80 rounded-lg p-6 shadow-soft mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
        >
          <h3 className="text-xl font-semibold text-teal-400">
            {edu.degree} – {edu.institution}
          </h3>
          <p className="text-sm text-gray-400 mb-2">{edu.period}</p>
          <p className="text-gray-200">{edu.details}</p>
        </motion.div>
      ))}
    </SectionWrapper>
  );
};

export default Education;
