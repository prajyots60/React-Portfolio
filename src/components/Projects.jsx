import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

// Sample project data
const projects = [
  {
    id: 1,
    name: 'Twitter Clone',
    description: 'A clone of Twitter with real-time posting and commenting features.',
    link: 'https://github.com/prajyots60/TWITTER-CLONE',
  },
  {
    id: 2,
    name: 'Real-time Chat App',
    description: 'A chat application with real-time messaging using WebSockets.',
    link: 'https://github.com/prajyots60/ChatApp',
  },
  {
    id: 3,
    name: 'Suvidha',
    description: 'A platform that connects service providers with customers for various local services.',
    link: 'https://github.com/prajyots60/SUVIDHA-FINAL',
  },
  {
    id: 4,
    name: 'E-commerce App',
    description: 'A full-stack e-commerce platform with integrated payment gateway.',
    link: 'https://github.com/prajyots60/E-COMM-STORE1',
  },
  {
    id: 5,
    name: 'Portfolio Website',
    description: 'A personal portfolio website built using React and Tailwind CSS.',
    link: 'https://github.com/yourusername/portfolio-website',
  },
];

// Framer Motion variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 }, // Move items slightly down initially
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }, // Animate to original position
};

function Projects() {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById('projects-section');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section id="projects-section" className="relative min-h-screen flex flex-col justify-center items-center px-4 md:px-8">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 1.5 }}
        className="text-5xl font-bold mb-8 z-10 text-white text-center"
      >
        My Projects
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="relative z-10 w-full max-w-6xl"
      >
        <div className="flex flex-col items-center w-full space-y-6">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="relative p-6 w-full max-w-md bg-gradient-to-r from-blue-500 to-pink-500 text-white shadow-lg rounded-lg transform hover:scale-105 transition-transform duration-500"
            >
              <h3 className="text-2xl mb-2">{project.name}</h3>
              <p className="mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-300 underline flex items-center"
              >
                <FaGithub className="mr-2" /> View on GitHub
              </a>

              {/* Timeline dot */}
              <div className="absolute top-1/2 transform -translate-y-1/2 w-6 h-6 bg-yellow-500 rounded-full left-0"></div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Projects;
