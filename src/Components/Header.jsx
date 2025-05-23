
import logo from '../images/logo.png';

import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Icônes

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-white shadow-md p-2 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-14">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">
          <a href="/"><img className='w-40 bg-white' src={logo} alt='logo'  /></a>
        </div>

        {/* Menu Desktop */}
        <nav className="hidden md:flex space-x-6">
          <a href="#Home" className="text-gray-600 hover:text-blue-500 transition">Home</a>
          <a href="#About" className="text-gray-600 hover:text-blue-500 transition">About</a>
          <a href="#Resume" className="text-gray-600 hover:text-blue-500 transition">Resume</a>
          <a href="#Certificate" className="text-gray-600 hover:text-blue-500 transition">Certificate</a>
          <a href="#Contact" className="text-gray-600 hover:text-blue-500 transition">Contact</a>
        </nav>

        {/* Bouton Menu Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <X className="w-6 h-6 text-black" />
            ) : (
              <Menu className="w-6 h-6 text-black" />
            )}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4 space-y-2 shadow">
          <a href="#Home" className="block text-gray-600 hover:text-blue-500">Home</a>
          <a href="#About" className="block text-gray-600 hover:text-blue-500">About</a>
          <a href="#Resume" className="block text-gray-600 hover:text-blue-500">Resume</a>
          <a href="#Certificate" className="block text-gray-600 hover:text-blue-500">Certificate</a>
          <a href="#Contact" className="block text-gray-600 hover:text-blue-500">Contact</a>
        </div>
      )}
    </header>
  );
}

export default Header;
