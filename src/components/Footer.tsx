import React from 'react';
import { PERSONAL_INFO } from '../data';
import { Github, Linkedin, Mail, Phone, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-[#222222] border-t border-white/10 text-center">
      <div className="max-w-4xl mx-auto px-4 space-y-6">
        
        {/* Signature Social Icon Circles matching reference site .fot-icone */}
        <div className="flex items-center justify-center gap-4">
          
          {/* GitHub */}
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="fot-icone footer-social-icon group"
          >
            <span>
              <Github className="w-5 h-5 text-[#bac964]" />
            </span>
          </a>

          {/* LinkedIn */}
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="fot-icone footer-social-icon group"
          >
            <span>
              <Linkedin className="w-5 h-5 text-[#bac964]" />
            </span>
          </a>

          {/* Email */}
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            aria-label="Send Email"
            className="fot-icone footer-social-icon group"
          >
            <span>
              <Mail className="w-5 h-5 text-[#bac964]" />
            </span>
          </a>

          {/* WhatsApp */}
          <a
            href={`https://wa.me/${PERSONAL_INFO.phone.replace(/[^0-9]/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp Contact"
            className="fot-icone footer-social-icon group"
          >
            <span>
              <Phone className="w-5 h-5 text-[#bac964]" />
            </span>
          </a>

        </div>

        {/* Copyright notice matching reference site */}
        <p className="text-white/50 text-sm font-light m-0">
          Copyright © 2026 <span className="text-white font-medium">{PERSONAL_INFO.name}</span>. All rights reserved 🧡
        </p>

        {/* Quick Back to Top and verified badge */}
        <div className="flex items-center justify-center gap-6 pt-2 text-xs font-mono text-white/40">
          <span>Menofia, Egypt · Full-Stack Developer</span>
          <span>•</span>
          <button
            type="button"
            onClick={scrollToTop}
            className="text-[#bac964] hover:underline cursor-pointer"
          >
            Back to top ↑
          </button>
        </div>

      </div>
    </footer>
  );
};
