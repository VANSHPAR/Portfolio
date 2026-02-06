import React from 'react';
import Card from './Card.jsx';
import SectionWrapper from './SectionWrapper.jsx';
import dsa from '../assets/dsa.jpg'
import JPMorgan from '../assets/JPMorgan.jpg'

// List of certifications – expand as needed.
const certifications = [
  {
    title: 'Mastering Data Structures and Algorithms',
    subtitle: 'PW Skills',
    description: 'completed the C++ with DSA course from Physics Wallah and earned my certificate!',
    imageSrc: dsa,
    link: 'https://pwskills.com/programming-courses/dsa-cpp/?source=pwskills.com&position=course_dropdown&from=home_page',
    term : "Learn More"
  },
  {
    title: 'Software Engineering Job Simulation',
    subtitle: 'JPMorgan Chase & Co',
    description: 'gained hands-on experience in setting up Spring Boot projects, integrating Kafka and implementing H2 database',
    imageSrc: JPMorgan,
    link: 'https://www.theforage.com/simulations/jpmorgan/advanced-software-engineering-r0fm',
    term : "Learn More"
  }
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
