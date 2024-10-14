import  { useState } from 'react';
import { motion } from 'framer-motion';

function Contact() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message sent: Name - ${name}, Message - ${message}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="min-h-screen flex flex-col justify-center items-center"
    >
      <h2 className="text-5xl font-bold mb-8">Contact Me</h2>
      <form onSubmit={handleSubmit} className="flex flex-col w-1/2">
        <input
          type="text"
          placeholder="Name"
          className="p-4 mb-4 rounded-md text-black"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          placeholder="Message"
          className="p-4 mb-4 rounded-md text-black"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <motion.button
          whileHover={{ scale: 1.1 }}
          type="submit"
          className="p-4 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-white rounded-md"
        >
          Send Message
        </motion.button>
      </form>
    </motion.div>
  );
}

export default Contact;
