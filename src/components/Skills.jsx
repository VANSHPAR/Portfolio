// import React from 'react';
// import SectionWrapper from './SectionWrapper.jsx';
// import { FaReact,  FaHtml5, FaCss3Alt, FaGitAlt, FaDatabase,FaBrain, FaRobot } from 'react-icons/fa';
import { SiSpringboot, SiSpringsecurity, SiOpencv, SiTensorflow, SiSpring, SiOpenai, SiN8N, SiLangchain, SiMake  } from 'react-icons/si';
import { MdOutlinePsychology, MdAutoAwesome } from "react-icons/md";
import { GiArtificialIntelligence } from "react-icons/gi";




// const kills = [
//   { name: 'HTML5', level: 98, icon: <FaHtml5  /> },
//   { name: 'CSS3', level: 92, icon: <FaCss3Alt  /> },
//   { name: 'JavaScript', level: 95, icon: <FaJsSquare  /> },
//   { name: 'React', level: 90, icon: <FaReact  /> },
//   { name: 'Springboot', level: 85, icon: <SiSpringboot  /> },
//   { name: 'Spring Security', level: 85, icon: <SiSpringsecurity  /> },
//   { name: 'Spring Microservices', level: 85, icon: <SiSpring  /> },
//   { name: 'SQL Database', level: 85, icon: <FaDatabase  /> },
//   { name: 'Machine Learning', level: 85, icon: <FaBrain  /> },
  // { name: 'Deep Learning', level: 80, icon: <MdOutlinePsychology  /> },
  // { name: 'TensorFlow', level: 78, icon: <SiTensorflow  /> },
  // { name: 'NLP', level: 82, icon: <FaBrain  /> },
  // { name: 'OpenCV', level: 90, icon: <SiOpencv  /> },
  // { name: 'Generative AI', level: 80, icon: <GiArtificialIntelligence  /> },
  // { name: 'RAG (Retrieval Augmented Gen)', level: 78, icon: <MdAutoAwesome  /> },
  // { name: 'LangChain', level: 80, icon: <SiLangchain  /> },
  // { name: 'LangGraph', level: 80, icon: <SiOpenai  /> },
  // { name: 'Agentic AI', level: 75, icon: <FaRobot  /> },
  // { name: 'Make.com', level: 75, icon: <SiMake  /> },
  
  // { name: 'N8N', level: 75, icon: <SiN8N  /> },
  
//   { name: 'Git', level: 88, icon: <FaGitAlt  /> },
//   { name: 'Docker', level: 88, icon: <FaDocker  /> },
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
import { FaReact,  FaGitAlt, FaHtml5, FaCss3Alt, FaJs, FaPython, FaDocker, FaBrain, FaRobot, FaBootstrap, FaJava } from "react-icons/fa";
import SectionWrapper from "./SectionWrapper";

// Define skill categories with icons
const skills = {
  
  Frontend: [
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "Bootstrap", icon: <FaBootstrap /> },
    { name: "React", icon: <FaReact /> },
  ],
  Backend: [
    { name: "Java", icon: <FaJava /> },
    { name: "Springboot", icon: <SiSpringboot /> },
    { name: 'Spring Security',  icon: <SiSpringsecurity /> },
    { name: 'Spring Microservices', icon: <SiSpring /> },
    { name: "Python", icon: <FaPython /> },
  ],
  Technologies: [
    { name: 'Machine Learning',icon: <FaBrain  /> },
    { name: 'Deep Learning',  icon: <MdOutlinePsychology  /> },
    { name: 'TensorFlow',  icon: <SiTensorflow  /> },
    { name: 'NLP',  icon: <FaBrain /> },
    { name: 'OpenCV',  icon: <SiOpencv /> },
    { name: 'Generative AI', icon: <GiArtificialIntelligence  /> },
    { name: 'RAG (Retrieval Augmented Gen)', icon: <MdAutoAwesome /> },
    { name: 'LangChain',  icon: <SiLangchain  /> },
    { name: 'LangGraph',  icon: <SiOpenai  /> },
    { name: 'Agentic AI',  icon: <FaRobot  /> },  
   

  ],
  Tools: [
     { name: 'N8N', icon: <SiN8N  /> },
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
