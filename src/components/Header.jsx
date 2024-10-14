import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaCode, FaProjectDiagram, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex flex-col md:flex-row justify-between items-center p-5 bg-black bg-opacity-50">
      <h1 className="text-4xl font-bold mb-2 md:mb-0">My Portfolio</h1>
      <div className="relative md:hidden">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          {isMenuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
        </button>
      </div>
      <nav className={`md:block ${isMenuOpen ? 'block' : 'hidden'} md:flex`}>
        <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8 text-xl">
          <li>
            <Link to="/" className="hover:text-yellow-300 flex items-center" onClick={toggleMenu}>
              <FaUser className="mr-2" /> About
            </Link>
          </li>
          <li>
            <Link to="/skills" className="hover:text-yellow-300 flex items-center" onClick={toggleMenu}>
              <FaCode className="mr-2" /> Skills
            </Link>
          </li>
          <li>
            <Link to="/projects" className="hover:text-yellow-300 flex items-center" onClick={toggleMenu}>
              <FaProjectDiagram className="mr-2" /> Projects
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-yellow-300 flex items-center" onClick={toggleMenu}>
              <FaEnvelope className="mr-2" /> Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
