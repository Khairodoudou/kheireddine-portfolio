// src/Components/Header.jsx
import logo from '../images/logo.png';
import { useState } from 'react';
import { Menu, X, Download } from 'lucide-react';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-white shadow-md p-2 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-14">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">
          <a href="/">
            <img className="w-40 bg-white" src={logo} alt="logo" />
          </a>
        </div>

        {/* Menu Desktop */}
        <div className="hidden md:flex items-center space-x-6">
          <nav className="flex space-x-6 font-medium text-sm">
            <a href="#Home" className="text-gray-600 hover:text-blue-600 transition">Home</a>
            <a href="#About" className="text-gray-600 hover:text-blue-600 transition">About</a>
            <a href="#Resume" className="text-gray-600 hover:text-blue-600 transition">Resume</a>
            <a href="#Projects" className="text-gray-600 hover:text-blue-600 transition">Projects</a>
            <a href="#Certificate" className="text-gray-600 hover:text-blue-600 transition">Certificate</a>
            <a href="#Contact" className="text-gray-600 hover:text-blue-600 transition">Contact</a>
          </nav>

          {/* Download CV CTA */}
          <a
            href="/kheireddine_debz_resume.pdf"
            download="kheireddine_debz_resume.pdf"
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold text-blue-600 bg-blue-50 border border-blue-200 hover:bg-blue-600 hover:text-white transition-all duration-200 shadow-sm hover:shadow"
            title="Download CV (PDF)"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download CV</span>
          </a>
        </div>

        {/* Bouton Menu Mobile */}
        <div className="md:hidden flex items-center gap-3">
          <a
            href="/kheireddine_debz_resume.pdf"
            download="kheireddine_debz_resume.pdf"
            className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold text-blue-600 bg-blue-50 border border-blue-200"
            title="Download CV"
          >
            <Download className="w-3 h-3" />
            <span>CV</span>
          </a>

          <button onClick={toggleMenu} aria-label="Toggle Navigation">
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
          <a href="#Home" onClick={() => setIsOpen(false)} className="block py-1 text-gray-600 hover:text-blue-500">Home</a>
          <a href="#About" onClick={() => setIsOpen(false)} className="block py-1 text-gray-600 hover:text-blue-500">About</a>
          <a href="#Resume" onClick={() => setIsOpen(false)} className="block py-1 text-gray-600 hover:text-blue-500">Resume</a>
          <a href="#Projects" onClick={() => setIsOpen(false)} className="block py-1 text-gray-600 hover:text-blue-500">Projects</a>
          <a href="#Certificate" onClick={() => setIsOpen(false)} className="block py-1 text-gray-600 hover:text-blue-500">Certificate</a>
          <a href="#Contact" onClick={() => setIsOpen(false)} className="block py-1 text-gray-600 hover:text-blue-500">Contact</a>

          <div className="pt-2 border-t border-gray-100">
            <a
              href="/kheireddine_debz_resume.pdf"
              download="kheireddine_debz_resume.pdf"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2 px-4 rounded-lg text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 transition"
            >
              <Download className="w-4 h-4" />
              <span>Download CV</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
