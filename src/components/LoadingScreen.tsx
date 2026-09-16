import React, { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onComplete?: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [fade, setFade] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFade(true);
      setTimeout(() => {
        setRemoved(true);
        onComplete?.();
      }, 500);
    }, 900);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (removed) return null;

  return (
    <div
      id="loading-screen"
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#060606]/95 transition-opacity duration-500 ${
        fade ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="portfolio-loader mb-6" />
      <h6 className="text-[#89BF55] text-lg font-mono tracking-widest uppercase font-semibold">
        Mustafa Essam
      </h6>
      <span className="text-white/50 text-xs font-mono tracking-wider mt-1">
        Full-Stack Web Developer
      </span>
    </div>
  );
};
