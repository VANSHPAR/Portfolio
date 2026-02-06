import React from 'react';
import SectionWrapper from './SectionWrapper.jsx';

const education = [
  {
    degree: 'B.E. Computer Science & Engineering',
    institution: 'The Maharaja Sayajirao University of Baroda',
    period: '2023 – 2027',
    details: '',
  },
  // Additional entries if needed
];

export default function Education() {
  return (
    <SectionWrapper id="education" bg="bg-navy-900" aosType="fade-up">
      <h2 className="text-4xl font-bold mb-8 text-center text-emerald-400">Education</h2>
      <ul className="space-y-6">
        {education.map((ed, i) => (
          <li key={i} className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-xl font-semibold text-emerald-300">{ed.degree}</h3>
            <p className="text-gray-400">{ed.institution} • {ed.period}</p>
            <p className="mt-2 text-gray-300 text-sm">{ed.details}</p>
          </li>
        ))}
      </ul>
    </SectionWrapper>
  );
}
