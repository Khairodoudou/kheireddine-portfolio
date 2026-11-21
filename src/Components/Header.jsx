// src/Components/Header.jsx
import logo from '../images/logo.png';
import { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';

const NAV_ITEMS = [
  { id: 'Home', label: 'Home' },
  { id: 'About', label: 'About' },
  { id: 'Resume', label: 'Resume' },
  { id: 'Projects', label: 'Projects' },
  { id: 'Certificate', label: 'Certificate' },
  { id: 'Contact', label: 'Contact' },
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('Home');

  const toggleMenu = () => setIsOpen(!isOpen);

  // Scrollspy: detect which section is currently visible on screen
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140; // offset for fixed header
      const sections = NAV_ITEMS.map((item) => item.id);

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 p-2 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-14">
        {/* Logo - Left */}
        <div className="flex-shrink-0">
          <a href="/">
            <img className="w-36 sm:w-40 bg-white" src={logo} alt="logo" />
          </a>
        </div>

        {/* Menu Desktop - CENTERED */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`relative px-3.5 py-1.5 rounded-full text-sm transition-all duration-200 ${
                  isActive
                    ? 'text-blue-600 font-semibold bg-blue-50/80 shadow-xs'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50 font-medium'
                }`}
              >
                {item.label}
                {/* Active indicator underline mark */}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-blue-600 rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Download CV CTA - Right */}
        <div className="hidden md:flex items-center flex-shrink-0">
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

        {/* Mobile Action & Menu Button */}
        <div className="md:hidden flex items-center gap-2.5">
          <a
            href="/kheireddine_debz_resume.pdf"
            download="kheireddine_debz_resume.pdf"
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold text-blue-600 bg-blue-50 border border-blue-200"
            title="Download CV"
          >
            <Download className="w-3 h-3" />
            <span>CV</span>
          </a>

          <button onClick={toggleMenu} aria-label="Toggle Navigation" className="p-1 text-gray-700 hover:text-black">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4 pt-2 space-y-1 shadow-lg border-t border-gray-100">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setIsOpen(false)}
                className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors ${
                  isActive
                    ? 'bg-blue-50 text-blue-600 font-semibold border-l-4 border-blue-600'
                    : 'text-gray-600 hover:text-blue-500 hover:bg-gray-50'
                }`}
              >
                <span>{item.label}</span>
                {isActive && <span className="w-2 h-2 rounded-full bg-blue-600" />}
              </a>
            );
          })}

          <div className="pt-3 mt-2 border-t border-gray-100">
            <a
              href="/kheireddine_debz_resume.pdf"
              download="kheireddine_debz_resume.pdf"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2 px-4 rounded-lg text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 transition shadow-sm"
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
