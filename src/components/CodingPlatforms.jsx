import React from 'react';
import SectionWrapper from './SectionWrapper.jsx';
import { SiLeetcode, SiCodeforces, SiGeeksforgeeks } from 'react-icons/si';

// Define the platforms with their respective icons and URLs.
const platforms = [
  {
    name: 'LeetCode',
    icon: <SiLeetcode size={48} className="text-emerald-400" />, // Emerald colour matches theme
    url: 'https://leetcode.com/vanshpar6',
  },
  {
    name: 'Codeforces',
    icon: <SiCodeforces size={48} className="text-emerald-400" />,
    url: 'https://codeforces.com/profile/username',
  },
  {
    name: 'GeeksforGeeks',
    icon: <SiGeeksforgeeks size={48} className="text-emerald-400" />,
    url: 'https://auth.geeksforgeeks.org/user/username',
  },
];

/**
 * Pure presentational component – no state.
 * Renders a section with clickable icons linking to coding platform profiles.
 */
export default function CodingPlatforms() {
  return (
    <SectionWrapper id="coding-platforms" bg="bg-navy-800" aosType="fade-up">
      <h2 className="text-4xl font-bold mb-8 text-center text-emerald-400">
        Coding Platforms
      </h2>
      <div className="flex justify-center space-x-12">
        {platforms.map((p, i) => (
          <a
            key={i}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="transform hover:scale-110 transition"
          >
            {p.icon}
            <p className="mt-2 text-gray-300 text-center">{p.name}</p>
          </a>
        ))}
      </div>
    </SectionWrapper>
  );
}
