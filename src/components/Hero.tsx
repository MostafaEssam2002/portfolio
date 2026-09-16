import React, { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';

interface HeroProps {
  onOpenResume?: () => void;
}

const LINE_1_FULL = "Hello, I'm";
const LINE_2_FULL = "Mustafa Essam";
const LINE_3_FULL = "AND THIS IS MY PORTFOLIO";

export const Hero: React.FC<HeroProps> = () => {
  const photoUrl = '/hero-bg.jpg';

  const [line1, setLine1] = useState('');
  const [line2, setLine2] = useState('');
  const [line3, setLine3] = useState('');
  const [activeStep, setActiveStep] = useState<1 | 2 | 3 | 4>(1);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (activeStep === 1) {
      if (line1.length < LINE_1_FULL.length) {
        timeoutId = setTimeout(() => {
          setLine1(LINE_1_FULL.slice(0, line1.length + 1));
        }, line1.length === 0 ? 300 : 55);
      } else {
        timeoutId = setTimeout(() => {
          setActiveStep(2);
        }, 220);
      }
    } else if (activeStep === 2) {
      if (line2.length < LINE_2_FULL.length) {
        timeoutId = setTimeout(() => {
          setLine2(LINE_2_FULL.slice(0, line2.length + 1));
        }, 65);
      } else {
        timeoutId = setTimeout(() => {
          setActiveStep(3);
        }, 250);
      }
    } else if (activeStep === 3) {
      if (line3.length < LINE_3_FULL.length) {
        timeoutId = setTimeout(() => {
          setLine3(LINE_3_FULL.slice(0, line3.length + 1));
        }, 40);
      } else {
        timeoutId = setTimeout(() => {
          setActiveStep(4);
        }, 1200);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [line1, line2, line3, activeStep]);

  const scrollToPortfolio = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById('Portfolio');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      id="Home" 
      className="sticky top-0 w-full h-screen min-h-[650px] overflow-hidden z-0"
    >
      {/* Background image: Fixed in place using object-cover with optimal positioning */}
      <img
        src={photoUrl}
        alt="Mustafa Essam"
        className="absolute inset-0 w-full h-full object-cover object-[center_16%] sm:object-[center_18%]"
      />

      {/* Dark translucent overlay */}
      <div className="absolute inset-0 bg-black/45 z-10 flex flex-col justify-center items-center">
        
        {/* Centered Heading Content with large prominent typography & character typewriter effect */}
        <div className="contant-home px-4 translate-y-14 sm:translate-y-20 text-center select-none w-full max-w-4xl mx-auto">
          <h2 className="text-white font-extralight text-[clamp(2.6rem,5.5vw,4.8rem)] leading-[1.15] tracking-[0.02em] min-h-[1.2em] flex items-center justify-center">
            <span>{line1}</span>
            {activeStep === 1 && (
              <span className="inline-block w-[3px] sm:w-[4px] h-[0.8em] bg-[#bac964] ml-1.5 animate-pulse" />
            )}
          </h2>

          <h1 className="text-white font-bold text-[clamp(3.2rem,7.5vw,5.6rem)] leading-[1.1] tracking-[-0.01em] mt-1.5 min-h-[1.2em] flex items-center justify-center">
            <span>{line2}</span>
            {activeStep === 2 && (
              <span className="inline-block w-[3px] sm:w-[5px] h-[0.8em] bg-[#bac964] ml-1.5 animate-pulse" />
            )}
          </h1>

          <h4 className="text-white/60 font-extralight text-[clamp(1rem,2.2vw,1.55rem)] tracking-[0.22em] uppercase mt-4 sm:mt-5 min-h-[1.2em] flex items-center justify-center">
            <span>{line3}</span>
            {activeStep === 3 && (
              <span className="inline-block w-[2px] sm:w-[3px] h-[0.8em] bg-[#bac964] ml-1.5 animate-pulse" />
            )}
          </h4>
        </div>

        {/* Bouncing Scroll Down Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center">
          <a
            href="#Portfolio"
            onClick={scrollToPortfolio}
            aria-label="Scroll to Portfolio"
            className="flex flex-col items-center text-white/60 hover:text-[#bac964] transition-colors duration-200 group"
          >
            <span className="text-[10px] font-mono tracking-widest uppercase mb-1.5 opacity-70 group-hover:opacity-100">
              Scroll Down
            </span>
            <ArrowDown className="w-5 h-5 animate-bounce text-[#89BF55]" />
          </a>
        </div>

      </div>
    </header>
  );
};
