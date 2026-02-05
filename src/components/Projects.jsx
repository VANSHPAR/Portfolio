import React from 'react';
import Card from './Card.jsx';
import SectionWrapper from './SectionWrapper.jsx';

// Sample projects data – replace with real project objects or import from a JSON file.
const projects = [
  {
    title: 'Uber Backend Project',
    subtitle: 'React • Tailwind • Framer Motion',
    description: 'Developed a scalable Spring Boot microservices platform with Eureka for service discovery and real-time driver–client tracking using Redis and WebSocket (STOMP).Implemented JWT authentication and inter-service communication with Kafka and Retrofit, and built modular booking, review, and driver services using Spring Security, JPA, and REST APIs',
    imageSrc: './assets/react.svg',
    link: 'https://github.com/username/portfolio',
    term: "Source Code"
  },
  {
    title: 'CricSco',
    subtitle: 'The Live Cricket Score App',
    description: "Built a real-time cricket score platform using React, Javascript, Bootstrap and RapidAPI to display live,upcoming, and recent matches, with dynamic match cards, a multi- section navbar, and detailed match pages featuring Live Updates, Scorecards, and Match Info.",
    imageSrc: './assets/react.svg',
    link: 'https://github.com/username/portfolio',
    term: "Live Preview"
  },
  {
  title: 'Vehicle Detection & Speed Estimation ',
  subtitle: 'React • Tailwind • Framer Motion',
  description: 'Developed a system to detect vehicles in video streams, track them across frames, and estimate real-time speed. Implemented using Python, OpenCV, YOLOv11 for object detection, SORT for object tracking, and NumPy for speed calculation',
  imageSrc: './assets/react.svg',
  link: 'https://github.com/username/portfolio',
  term: "Watch Demo"
  },
  {
  title: 'Email & SMS Spam Detection',
    subtitle: 'React • Tailwind • Framer Motion',
    description: 'Developed a Email/SMS spam detection web app using Machine Learning with pandas, NumPy, NLTK, and scikit-learn, featuring an interactive Streamlit interface and Matplotlib visualizations for real-time message classification.',
    imageSrc: './assets/react.svg',
    link: 'https://emailorsmsspamclassifier-9tidt2s2igdmjwj4sf6s84.streamlit.app/',
    term: "Live Preview"
  },
  {
  title: 'Document Q&A Chatbot ',
    subtitle: 'Intelligent Document Assistant',
    description: 'Built a RAG-based system using LangChain, FAISS, Groq LLMs and HuggingFace embeddings to enable accurate, context-aware question answering over PDF documents. Designed a clean and interactive UI using Streamlit.',
    imageSrc: './assets/react.svg',
    link: 'https://documentq-achatbot-srabzj4yo6vsxiguephepn.streamlit.app/',
    term: "Live Preview"
  }
  // Add more project objects …
];

export default function Projects() {
  return (
    <SectionWrapper id="projects" bg="bg-navy-800" aosType="fade-up">
      <h2 className="text-4xl font-bold mb-8 text-center text-emerald-400">Projects</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((proj, i) => (
          <Card key={i} {...proj} className="h-full" />
        ))}
      </div>
    </SectionWrapper>
  );
}
