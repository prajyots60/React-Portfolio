import { motion } from 'framer-motion';

function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col justify-center items-center min-h-screen p-4"
    >
      <h2 className="text-4xl md:text-6xl font-extrabold mb-4 md:mb-8">Hi, I am Prajyot Shinde</h2>
      <p className="text-lg md:text-2xl max-w-2xl text-center">
        I am a full-stack developer specializing in creating beautiful, responsive websites.
      </p>
    </motion.div>
  );
}

export default About;
