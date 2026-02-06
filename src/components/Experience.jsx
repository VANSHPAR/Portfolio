import React from 'react';
import Card from './Card.jsx';
import SectionWrapper from './SectionWrapper.jsx';
import interncerti from '../assets/interncerti.jpg'

// Sample data – replace with real experience objects or import from a JSON file.
const experiences = [
  {
    title: 'Cyber Security Virtual Internship',
    subtitle: 'C-DAC, Noida • May 2025 – Jun 2025',
    description: ' Gained hands-on experience in ethical hacking, vulnerability analysis, and penetration testing. Solved 21 quizzes, completed 3 advanced virtual labs, and 1 cyber security project under a mentor.',
    imageSrc: interncerti,
    link: 'https://www.cdac.in/index.aspx?id=ND',
    term:"Learn More"
  },
  // Add more entries …
];

export default function Experience() {
  return (
    <SectionWrapper id="experience" bg="bg-navy-900" aosType="fade-up">
      <h2 className="text-4xl font-bold mb-8 text-center text-emerald-400">Experience</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {experiences.map((exp, idx) => (
          <Card key={idx} {...exp} />
        ))}
      </div>
    </SectionWrapper>
  );
}
