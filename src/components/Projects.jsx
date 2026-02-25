// import React from 'react';
// import Card from './Card.jsx';
import SectionWrapper from './SectionWrapper.jsx';
// import cricsco from '../assets/cricsco.jpg'

// // Sample projects data – replace with real project objects or import from a JSON file.
// const projects = [
//   {
//     title: 'Uber Backend Project',
//     subtitle: 'The Ride Booking App',
//     description: 'Developed a scalable Spring Boot microservices platform with real-time driver–client tracking using Redis and WebSocket. Implemented JWT authentication and inter-service communication with Kafka and Retrofit, and built modular booking, review, and driver services.',
//     imageSrc: './assets/react.svg',
//     link: 'https://github.com/VANSHPAR/Uber_Complete_Backend_Project',
//     term: "Source Code"
//   },
//   {
//     title: 'CricSco',
//     subtitle: 'The Live Cricket Score App',
//     description: "Built a real-time cricket score platform using React, Javascript, Bootstrap and RapidAPI to display live,upcoming, and recent matches, with dynamic match cards, a multi- section navbar, and detailed match pages featuring Live Updates, Scorecards, and Match Info.",
//     imageSrc: '#',
//     link: 'https://react-live-cricket-score-app-git-main-vansh-parmars-projects.vercel.app/',
//     term: "Live Preview"
//   },
//   {
//   title: 'Vehicle Detection & Speed Estimation ',
//   subtitle: 'Real Time Vehicle Detection',
//   description: 'Developed a system to detect vehicles in video streams, track them across frames, and estimate real-time speed. Implemented using Python, OpenCV, YOLOv11 for object detection, SORT for object tracking, and NumPy for speed calculation',
//   imageSrc: './assets/react.svg',
//   link: 'https://github.com/VANSHPAR/Vehicle_Detection_and_Speed_Estimation/blob/main/README.md',
//   term: "Watch Demo"
//   },
//   {
//   title: 'Email & SMS Spam Detection',
//     subtitle: 'React • ',
//     description: 'Developed a Email/SMS spam detection web app using Machine Learning with pandas, NumPy, NLTK, and scikit-learn, featuring an interactive Streamlit interface and Matplotlib visualizations for real-time message classification.',
//     imageSrc: './assets/react.svg',
//     link: 'https://emailorsmsspamclassifier-9tidt2s2igdmjwj4sf6s84.streamlit.app/',
//     term: "Live Preview"
//   },
//   {
//   title: 'Document Q&A Chatbot ',
//     subtitle: 'Intelligent Document Assistant',
//     description: 'Built a RAG-based system using LangChain, FAISS, Groq LLMs and HuggingFace embeddings to enable accurate, context-aware question answering over PDF documents. Designed a clean and interactive UI using Streamlit.',
//     imageSrc: './assets/react.svg',
//     link: 'https://documentq-achatbot-srabzj4yo6vsxiguephepn.streamlit.app/',
//     term: "Live Preview"
//   }
//   // Add more project objects …
// ];

// export default function Projects() {
//   return (
//     <SectionWrapper id="projects" bg="bg-navy-800" aosType="fade-up">
//       <h2 className="text-4xl font-bold mb-8 text-center text-emerald-400">Projects</h2>
//       <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {projects.map((proj, i) => (
//           <Card key={i} {...proj} className="h-full" />
//         ))}
//       </div>
//     </SectionWrapper>
//   );
// }
import React from "react";
import { motion } from "framer-motion";

// Sample project data – replace with real data as needed
const projects = [
  {
    id: 1,
    title: "CricSco - Live Cricket Score App",
    description: "Built a real-time cricket score platform, used RapidAPI to display live,upcoming, and recent matches, with dynamic match cards, a multi- section navbar, and detailed match pages featuring Live Updates, Scorecards, and Match Info.",
    tech: ["React", "Javascript", "Bootstrap"],
    image: "/src/assets/cricsco1.jpg",
    demo: "https://react-live-cricket-score-app-git-main-vansh-parmars-projects.vercel.app/",
    repo: "https://github.com/VANSHPAR/react--LiveCricketScore-app",
  },
  {
    id: 2,
    title: "Vehicle Detection & Speed Estimation",
    description: "Developed a system to detect vehicles in video streams, track them across frames, and estimate real-time speed. Implemented using Python, OpenCV, YOLOv11 for object detection, SORT for object tracking, and NumPy for speed calculation",
    tech: ["Python", "OpenCV", "YOLOv11", "Numpy"],
    image: "/src/assets/project3.png",
    demo: "https://github.com/VANSHPAR/Vehicle_Detection_and_Speed_Estimation/blob/main/README.md",
    repo: "https://github.com/VANSHPAR/Vehicle_Detection_and_Speed_Estimation",
  },
  {
    id: 3,
    title: "Email & SMS Spam Detection",
    description: "Developed a Email/SMS spam detection web app using Machine Learning with pandas, NumPy, NLTK, and scikit-learn, featuring an interactive Streamlit interface and Matplotlib visualizations for real-time message classification.",
    tech: ["Python", "Scikit-Learn", "NLTK","Pandas"],
    image: "/src/assets/project3.png",
    demo: "https://emailorsmsspamclassifier-9tidt2s2igdmjwj4sf6s84.streamlit.app/",
    repo: "https://github.com/VANSHPAR/Email_or_SMS_Spam_Classifier",
  },
  {
    id: 4,
    title: "Document Q&A Chatbot",
    description: "Built a RAG-based system using Groq LLMs and HuggingFace embeddings to enable accurate, context-aware question answering over PDF documents. Designed a clean and interactive UI using Streamlit.",
    tech: ["Python", "Langchain", "FAISS"],
    image: "/src/assets/project3.png",
    demo: "https://github.com/VANSHPAR/Document_Q-A_Chatbot/blob/main/README.md/",
    repo: "https://github.com/VANSHPAR/Document_Q-A_Chatbot",
  },
  {
    id: 5,
    title: "Uber Backend Project",
    description: "Developed a scalable platform with real-time driver–client tracking using Redis and WebSocket. Implemented JWT authentication and inter-service communication with Kafka and Retrofit, and built modular booking, review, and driver services.",
    tech: ["Spring Boot", "Spring Microservices", "Spring Security","SQL"],
    image: "/src/assets/project3.png",
    demo: "https://github.com/VANSHPAR/Uber_Complete_Backend_Project",
    repo: "https://github.com/VANSHPAR/Uber_Complete_Backend_Project",
  },
  // Add more projects as needed
];

/**
 * ProjectCard – displays a single project.
 * Props: title, description, tech (array), image, demo, repo
 */
const ProjectCard = ({ title, description, tech, image, demo, repo }) => (
  <motion.div
    className="bg-gray-800 bg-opacity-80 p-6 rounded-lg shadow-soft flex flex-col"
    whileHover={{ scale: 1.03 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    {/* Project Image */}
    {/* <img
      src={image}
      alt={title}
      loading="lazy"
      className="rounded-lg shadow-soft mb-4"
    /> */}
    {/* Title */}
    <h3 className="text-xl font-semibold text-teal-400 mb-2">{title}</h3>
    {/* Description */}
    <p className="text-gray-200 mb-4 flex-grow">{description}</p>
    {/* Tech Badges */}
    <div className="flex flex-wrap gap-2 mb-4">
      {tech.map((t, idx) => (
        <span
          key={idx}
          className="badge bg-teal-600 text-white px-2 py-1 rounded text-xs"
        >
          {t}
        </span>
      ))}
    </div>
    {/* Action Buttons */}
    <div className="mt-auto flex space-x-4">
      {demo && (
        <a
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-teal-600 hover:bg-teal-500 text-white rounded transition-colors"
        >
          Live Demo
        </a>
      )}
      {repo && (
        <a
          href={repo}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-gray-900 hover:bg-gray-700 text-white rounded transition-colors"
        >
          Source Code
        </a>
      )}
    </div>
  </motion.div>
);

const Projects = () => {
  return (
    <SectionWrapper
      id="projects"
      className="max-w-7xl mx-auto px-4 py-12"
    >
      <h2 className="text-4xl font-bold text-white mb-8 text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((proj) => (
          <ProjectCard
            key={proj.id}
            title={proj.title}
            description={proj.description}
            tech={proj.tech}
            image={proj.image}
            demo={proj.demo}
            repo={proj.repo}
          />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Projects;
