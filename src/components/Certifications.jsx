// import React from 'react';
// import Card from './Card.jsx';
// import SectionWrapper from './SectionWrapper.jsx';
// import dsa from '../assets/dsa.jpg'
// import JPMorgan from '../assets/JPMorgan.jpg'

// // List of certifications – expand as needed.
// const certifications = [
//   {
//     title: 'Mastering Data Structures and Algorithms',
//     subtitle: 'PW Skills',
//     description: 'completed the C++ with DSA course from Physics Wallah and earned my certificate!',
//     imageSrc: dsa,
//     link: 'https://pwskills.com/programming-courses/dsa-cpp/?source=pwskills.com&position=course_dropdown&from=home_page',
//     term : "Learn More"
//   },
//   {
//     title: 'Software Engineering Job Simulation',
//     subtitle: 'JPMorgan Chase & Co',
//     description: 'gained hands-on experience in setting up Spring Boot projects, integrating Kafka and implementing H2 database',
//     imageSrc: JPMorgan,
//     link: 'https://www.theforage.com/simulations/jpmorgan/advanced-software-engineering-r0fm',
//     term : "Learn More"
//   }
//   // Add more certification objects here.
// ];

// export default function Certifications() {
//   return (
//     <SectionWrapper id="certifications" bg="bg-navy-900" aosType="fade-up">
//       <h2 className="text-4xl font-bold mb-8 text-center text-emerald-400">Certifications</h2>
//       <div className="grid md:grid-cols-2 gap-6">
//         {certifications.map((cert, i) => (
//           <Card key={i} {...cert} />
//         ))}
//       </div>
//     </SectionWrapper>
//   );
// }
import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

// Sample certifications data – replace with real information as needed
const certifications = [
  {
    id: 1,
    title: "Mastering Data Structures and Algorithms",
    issuer: "PW Skills",
    date: "DEC 2024",
    link: "https://pwskills.com/learn/certificate/d8bd90a7-da62-478a-9edb-a13cc505d923/",
  },
  {
    id: 2,
    title: "Software Engineering Job Simulation",
    issuer: "JPMorgan Chase & Co",
    date: "Aug 2025",
    link: "https://github.com/VANSHPAR/forage-midas/blob/patch-1/README.md",
  },
  {
    id: 3,
    title: "SQL: From Zero to Hero",
    issuer: "Udemy",
    date: "Feb 2025",
    link: "https://www.udemy.com/certificate/UC-098b3a16-74cb-4ff0-9837-8eaebc6aa939/",
  },
  // Add more certifications as needed
];

const Certifications = () => {
  return (
    <SectionWrapper className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold text-white mb-8 text-center">
        Certifications
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.id}
            className="bg-navy bg-opacity-80 rounded-lg p-4 shadow-soft"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-teal-400 hover:text-teal-300"
            >
              <h3 className="text-xl font-semibold mb-1">{cert.title}</h3>
              <p className="text-sm text-gray-400">{cert.issuer} – {cert.date}</p>
            </a>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Certifications;
