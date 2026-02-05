import React from 'react';
import Card from './Card.jsx';
import SectionWrapper from './SectionWrapper.jsx';

// Sample data – replace with real experience objects or import from a JSON file.
const experiences = [
  {
    title: 'Senior Software Engineer',
    subtitle: 'Tech Corp • 2021 – Present',
    description: 'Lead a team of 5 engineers to build scalable micro‑services using Node.js, Docker, and AWS.',
    imageSrc: '/assets/techcorp.png',
    link: 'https://techcorp.com',
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
