import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export const BtnUp: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!visible) return null;

  return (
    <button
      id="btn-up"
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      className="fixed bottom-8 right-8 sm:bottom-12 sm:right-12 z-40 w-11 h-11 rounded-full bg-[#333333]/90 text-[#89BF55] border-[2.5px] border-[#89BF55] flex items-center justify-center shadow-lg hover:bg-[#89BF55] hover:text-[#222222] transition-all duration-300 hover:scale-110 active:scale-95"
    >
      <ArrowUp className="w-5 h-5 transition-transform" />
    </button>
  );
};
