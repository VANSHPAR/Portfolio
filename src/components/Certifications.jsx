import React from 'react';
import Card from './Card.jsx';
import SectionWrapper from './SectionWrapper.jsx';

// List of certifications – expand as needed.
const certifications = [
  {
    title: 'AWS Certified Solutions Architect – Associate',
    subtitle: 'Amazon Web Services',
    description: 'Validated expertise in designing distributed systems on AWS.',
    imageSrc: '/assets/aws-cert.png',
    link: 'https://www.yourcertlink.com',
    term : "Learn More"
  },
  // Add more certification objects here.
];

export default function Certifications() {
  return (
    <SectionWrapper id="certifications" bg="bg-navy-900" aosType="fade-up">
      <h2 className="text-4xl font-bold mb-8 text-center text-emerald-400">Certifications</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {certifications.map((cert, i) => (
          <Card key={i} {...cert} />
        ))}
      </div>
    </SectionWrapper>
  );
}
