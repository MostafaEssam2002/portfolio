import React, { useState } from 'react';
import { LoadingScreen } from './components/LoadingScreen';
import { BtnUp } from './components/BtnUp';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Resume } from './components/Resume';
import { Skills } from './components/Skills';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#222222] text-white flex flex-col font-sans selection:bg-[#bac964] selection:text-[#222222]">
      {/* Loading Screen matching reference site loader */}
      <LoadingScreen />

      {/* Floating Scroll to Top button matching reference site */}
      <BtnUp />

      {/* Sticky Top Navigation Bar matching reference site */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Primary Sections matching reference site architecture */}
      <main className="flex-1">
        {/* #Home */}
        <Hero onOpenResume={() => setIsResumeOpen(true)} />

        {/* Content sections that slide over the fixed hero background on scroll */}
        <div className="relative z-10 bg-[#222222] shadow-[0_-15px_30px_rgba(0,0,0,0.5)]">
          {/* #Portfolio */}
          <Projects />

          {/* #Resume (includes Experience, Education, and #About) */}
          <Resume onOpenResume={() => setIsResumeOpen(true)} />

          {/* #Skills (includes 3D Rotating Cubes and stack) */}
          <Skills />

          {/* #Services (includes 3 custom-cornered services cards) */}
          <Services />

          {/* #Contact (includes 50px-radius contact box & direct email dispatch) */}
          <Contact onOpenResume={() => setIsResumeOpen(true)} />
        </div>
      </main>

      {/* Signature Footer with circular icons */}
      <Footer onOpenResume={() => setIsResumeOpen(true)} />

      {/* Verbatim CV Document Modal for print & download */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
