import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed w-full bg-gray-900 text-white shadow-lg z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">N DHANVINA</div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M6 18L18 6M6 6l12 12" 
              />
            ) : (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16" 
              />
            )}
          </svg>
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#home" className="hover:text-blue-400 transition-colors">Home</a>
          <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
          <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
          <a href="#experience" className="hover:text-blue-400 transition-colors">Experience</a>
          <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
        </nav>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-gray-800 px-4 py-2">
          <div className="flex flex-col space-y-3">
            <a 
              href="#home" 
              className="py-2 hover:text-blue-400 transition-colors"
              onClick={toggleMenu}
            >
              Home
            </a>
            <a 
              href="#about" 
              className="py-2 hover:text-blue-400 transition-colors"
              onClick={toggleMenu}
            >
              About
            </a>
            <a 
              href="#skills" 
              className="py-2 hover:text-blue-400 transition-colors"
              onClick={toggleMenu}
            >
              Skills
            </a>
            <a 
              href="#experience" 
              className="py-2 hover:text-blue-400 transition-colors"
              onClick={toggleMenu}
            >
              Experience
            </a>
            <a 
              href="#projects" 
              className="py-2 hover:text-blue-400 transition-colors"
              onClick={toggleMenu}
            >
              Projects
            </a>
            <a 
              href="#contact" 
              className="py-2 hover:text-blue-400 transition-colors"
              onClick={toggleMenu}
            >
              Contact
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
