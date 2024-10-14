import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaJs, FaReact, FaNodeJs, FaDatabase, FaStripeS, FaChartBar, FaHtml5, FaCss3Alt, FaRocket } from 'react-icons/fa';

const skills = [
  { name: 'JavaScript', icon: <FaJs size={30} /> },
  { name: 'React', icon: <FaReact size={30} /> },
  { name: 'Node.js', icon: <FaNodeJs size={30} /> },
  { name: 'MongoDB', icon: <FaDatabase size={30} /> },
  { name: 'Stripe', icon: <FaStripeS size={30} /> },
  { name: 'Framer Motion', icon: <FaRocket size={30} /> },
  { name: 'WebSockets', icon: <FaChartBar size={30} /> },
  { name: 'Redis', icon: <FaChartBar size={30} /> },
  { name: 'Recharts', icon: <FaChartBar size={30} /> },
  { name: 'HTML', icon: <FaHtml5 size={30} /> },
  { name: 'CSS', icon: <FaCss3Alt size={30} /> },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
};

const scrollVariants = {
  scroll: {
    y: [0, -10, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

function Skills() {
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

    const section = document.getElementById('skills-section');
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
    <section id="skills-section" className="min-h-screen flex justify-center items-center bg-gray-800">
      <motion.div
        className="bg-gradient-to-r from-purple-500 to-blue-500 text-white p-8 rounded-lg shadow-lg w-full max-w-xl"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <h2 className="text-4xl font-bold mb-4 text-center">My Skills</h2>
        <motion.div
          className="flex flex-wrap justify-center"
          variants={scrollVariants}
          animate="scroll"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="m-4 flex flex-col items-center p-4 bg-gray-700 rounded-lg shadow-md text-center transition-transform duration-300 hover:scale-110"
              whileHover={{ rotate: 360, transition: { duration: 0.6 } }}
            >
              <div className="mb-2">{skill.icon}</div>
              <span>{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Skills;
