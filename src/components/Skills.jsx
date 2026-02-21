// import React from 'react';
// import SectionWrapper from './SectionWrapper.jsx';
// import { FaReact, FaNodeJs, FaJsSquare, FaHtml5, FaCss3Alt, FaGitAlt, FaDatabase,FaBrain, FaRobot, FaDocker } from 'react-icons/fa';
import { SiSpringboot, SiSpringsecurity, SiOpencv, SiTensorflow, SiSpring, SiOpenai, SiN8N, SiLangchain, SiMake  } from 'react-icons/si';
import { MdOutlinePsychology, MdAutoAwesome } from "react-icons/md";
import { GiArtificialIntelligence } from "react-icons/gi";




// const kills = [
//   { name: 'HTML5', level: 98, icon: <FaHtml5 className="text-emerald-400" size={30} /> },
//   { name: 'CSS3', level: 92, icon: <FaCss3Alt className="text-emerald-400" size={30} /> },
//   { name: 'JavaScript', level: 95, icon: <FaJsSquare className="text-emerald-400" size={30} /> },
//   { name: 'React', level: 90, icon: <FaReact className="text-emerald-400" size={30} /> },
//   { name: 'Springboot', level: 85, icon: <SiSpringboot className="text-emerald-400" size={30} /> },
//   { name: 'Spring Security', level: 85, icon: <SiSpringsecurity className="text-emerald-400" size={30} /> },
//   { name: 'Spring Microservices', level: 85, icon: <SiSpring className="text-emerald-400" size={30} /> },
//   { name: 'SQL Database', level: 85, icon: <FaDatabase className="text-emerald-400" size={30} /> },
//   { name: 'Machine Learning', level: 85, icon: <FaBrain className="text-emerald-400" size={30} /> },
//   { name: 'Deep Learning', level: 80, icon: <MdOutlinePsychology className="text-emerald-400" size={30} /> },
//   { name: 'TensorFlow', level: 78, icon: <SiTensorflow className="text-emerald-400" size={30} /> },
//   { name: 'NLP', level: 82, icon: <FaBrain className="text-emerald-400" size={30} /> },
//   { name: 'OpenCV', level: 90, icon: <SiOpencv className="text-emerald-400" size={30} /> },
//   { name: 'Generative AI', level: 80, icon: <GiArtificialIntelligence className="text-emerald-400" size={30} /> },
//   { name: 'RAG (Retrieval Augmented Gen)', level: 78, icon: <MdAutoAwesome className="text-emerald-400" size={30} /> },
//   { name: 'LangChain', level: 80, icon: <SiLangchain className="text-emerald-400" size={30} /> },
//   { name: 'LangGraph', level: 80, icon: <SiOpenai className="text-emerald-400" size={30} /> },
//   { name: 'Agentic AI', level: 75, icon: <FaRobot className="text-emerald-400" size={30} /> },
//   { name: 'Make.com', level: 75, icon: <SiMake className="text-emerald-400" size={30} /> },
  
//   { name: 'N8N', level: 75, icon: <SiN8N className="text-emerald-400" size={30} /> },
  
//   { name: 'Git', level: 88, icon: <FaGitAlt className="text-emerald-400" size={30} /> },
//   { name: 'Docker', level: 88, icon: <FaDocker className="text-emerald-400" size={30} /> },
// ];

// export default function Skills() {
//   return (
//     <SectionWrapper id="skills" bg="bg-navy-800" aosType="fade-up">
//       <h2 className="text-4xl font-bold mb-8 text-center text-emerald-400">Skills</h2>
//       <div className="grid md:grid-cols-3 gap-6">
//         {skills.map((skill, i) => (
//           <div key={i} className="flex items-center space-x-4">
//             {skill.icon}
//             <div className="flex-1">
//               <p className="text-gray-200 font-medium">{skill.name}</p>
//               <div className="w-full bg-gray-700 rounded h-2">
//                 <div
//                   className="bg-emerald-500 h-2 rounded"
//                   style={{ width: `${skill.level}%` }}
//                 />
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </SectionWrapper>
//   );
// }
import React from "react";
import { FaReact,  FaGitAlt, FaHtml5, FaCss3Alt, FaJs, FaPython, FaDocker } from "react-icons/fa";
import SectionWrapper from "./SectionWrapper";

// Define skill categories with icons
const skills = {
  Frontend: [
    { name: "React", icon: <FaReact /> },
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <FaJs /> },
  ],
  Backend: [
    { name: "Springboot", icon: <SiSpringboot /> },
    { name: 'Spring Security',  icon: <SiSpringsecurity /> },
    { name: 'Spring Microservices', icon: <SiSpring /> },
    { name: "Python", icon: <FaPython /> },
  ],
  Tools: [
    { name: "Git", icon: <FaGitAlt /> },
    { name: "Docker", icon: <FaDocker /> },
  ],
};

const Skills = () => {
  return (
    <SectionWrapper id="skills" className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold text-white mb-8 text-center">Skills</h2>
      {Object.entries(skills).map(([category, skillList]) => (
        <div key={category} className="mb-6">
          <h3 className="text-2xl font-semibold text-teal-400 mb-4">{category}</h3>
          <div className="flex flex-wrap gap-3">
            {skillList.map((skill, idx) => (
              <span
                key={idx}
                className="flex items-center space-x-2 bg-gray-800 text-white px-3 py-1 rounded hover:bg-teal-600 transition-colors"
              >
                <span className="text-lg">{skill.icon}</span>
                <span>{skill.name}</span>
              </span>
            ))}
          </div>
        </div>
      ))}
    </SectionWrapper>
  );
};

export default Skills;
