import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data';
import { 
  FileText, 
  Github, 
  Linkedin, 
  Mail, 
  Menu, 
  X,
  Phone
} from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['Home', 'Portfolio', 'Resume', 'About', 'Skills', 'Services', 'Contact'];
      const scrollPos = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#Home', label: 'HOME', id: 'Home' },
    { href: '#Portfolio', label: 'PORTFOLIO', id: 'Portfolio' },
    { href: '#Resume', label: 'RESUME', id: 'Resume' },
    { href: '#About', label: 'ABOUT', id: 'About' },
    { href: '#Skills', label: 'SKILLS', id: 'Skills' },
    { href: '#Services', label: 'SERVICES', id: 'Services' },
    { href: '#Contact', label: 'CONTACT', id: 'Contact' },
  ];

  return (
    <nav
      id="mainNav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#222222]/95 backdrop-blur-md shadow-lg shadow-black/50 py-3 border-b border-white/10'
          : 'bg-transparent py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand */}
        <a 
          href="#Home" 
          id="nav-brand"
          className="flex items-center gap-2.5 group"
        >
          <img
            src="/mostafa.jpg"
            alt="Mustafa Essam"
            className="w-8 h-8 rounded-full object-cover border-2 border-[#bac964] shadow-sm group-hover:scale-105 transition-transform"
          />
          <span className="text-white font-bold tracking-tight text-base sm:text-lg">
            Mustafa<span className="text-[#bac964]">.</span>
          </span>
        </a>

        {/* Desktop Navigation Links - Centered matching reference site */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {[
            { href: '#Home', label: 'HOME', id: 'Home' },
            { href: '#Portfolio', label: 'PORTFOLIO', id: 'Portfolio' },
            { href: '#Resume', label: 'RESUME', id: 'Resume' },
            { href: '#About', label: 'ABOUT', id: 'About' },
            { href: '#Contact', label: 'CONTACT', id: 'Contact' },
          ].map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.href}
                href={link.href}
                id={`nav-link-${link.id.toLowerCase()}`}
                className={`text-xs sm:text-sm font-light tracking-[0.15em] transition-colors duration-200 uppercase relative py-1 ${
                  isActive
                    ? 'text-[#89BF55] font-normal'
                    : 'text-white/85 hover:text-[#89BF55]'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#89BF55] rounded-full" />
                )}
              </a>
            );
          })}
        </div>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-3">
          
          {/* Social Links */}
          <div className="hidden sm:flex items-center gap-2 pr-2 border-r border-white/15">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              id="nav-github"
              aria-label="GitHub Profile"
              className="p-1.5 text-white/70 hover:text-[#bac964] transition-colors rounded-full hover:bg-white/5"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              id="nav-linkedin"
              aria-label="LinkedIn Profile"
              className="p-1.5 text-white/70 hover:text-[#bac964] transition-colors rounded-full hover:bg-white/5"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>

          {/* Download/View CV Button */}
          <button
            type="button"
            id="nav-cv-btn"
            onClick={onOpenResume}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-full bg-[#bac964] text-[#222222] hover:bg-[#89BF55] hover:text-white transition-all shadow-sm duration-200"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>CV</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            id="nav-mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
            className="lg:hidden p-2 text-white/80 hover:text-white rounded-md"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#222222] border-b border-white/10 px-6 py-5 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-medium tracking-wider text-white/80 hover:text-[#bac964] transition-colors uppercase border-b border-white/5"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 flex items-center justify-between">
            <span className="text-xs text-white/50">{PERSONAL_INFO.location}</span>
            <div className="flex items-center gap-3">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-[#bac964]"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-[#bac964]"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-white/70 hover:text-[#bac964]"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
