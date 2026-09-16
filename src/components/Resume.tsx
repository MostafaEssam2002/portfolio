import React, { useState } from 'react';
import { EXPERIENCES, EDUCATION, TRAINEE_PROGRAMS, CERTIFICATIONS, PERSONAL_INFO, PROJECTS } from '../data';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';
import { 
  Calendar, 
  ArrowRight, 
  GraduationCap, 
  Award, 
  BookOpen, 
  Send, 
  Download, 
  MapPin, 
  CheckCircle2,
  Code2,
  Database,
  Server,
  ExternalLink
} from 'lucide-react';

interface ResumeProps {
  onOpenResume: () => void;
}

export const Resume: React.FC<ResumeProps> = ({ onOpenResume }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleOpenProject = (title: string) => {
    const matched = PROJECTS.find((p) => p.title.toLowerCase().includes(title.toLowerCase().slice(0, 10)));
    if (matched) {
      setSelectedProject(matched);
    }
  };

  return (
    <section id="Resume" className="py-20 bg-[#222222] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading matching reference site */}
        <div className="text-center mb-16">
          <span className="text-3xl sm:text-4xl font-light text-white flex items-center justify-center gap-2">
            My <h4 className="text-3xl sm:text-4xl font-extrabold text-[#bac964] inline-block m-0">Resume</h4>
          </span>
          <p className="text-white/50 text-sm sm:text-base mt-2 max-w-xl mx-auto">
            Practical engineering experience, enterprise implementations, and academic qualifications.
          </p>
        </div>

        {/* 2-Column Layout: Experience & Education */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-24">
          
          {/* ================= Left Column: Experience ================= */}
          <div>
            <div className="flex items-center gap-2 pb-3 mb-6 border-b border-white/10">
              <Server className="w-5 h-5 text-[#bac964]" />
              <h5 className="text-2xl font-light text-white tracking-wide">Experience</h5>
            </div>

            <div className="space-y-6">
              {EXPERIENCES.map((exp) => (
                <div
                  key={exp.id}
                  className="item-resume bg-[#333333] p-7 rounded-[10px] border border-white/5 hover:border-[#bac964]/40 transition-all duration-300 hover:-translate-y-1 shadow-md shadow-black/20"
                >
                  {/* Calendar & Period */}
                  <div className="flex items-center gap-2 text-white/90 text-sm mb-3 font-mono">
                    <Calendar className="w-4 h-4 text-[#bac964]" />
                    <h6 className="text-white font-medium text-xs sm:text-sm m-0">
                      {exp.period} · {exp.roleType}
                    </h6>
                  </div>

                  {/* Title in #bac964 */}
                  <h5 className="text-lg sm:text-xl font-bold text-[#bac964] mb-3">
                    {exp.projectUrl ? (
                      <a
                        href={exp.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline hover:text-[#89BF55] inline-flex items-center gap-1.5 transition-colors"
                      >
                        <span>{exp.title}</span>
                        <ExternalLink className="w-4 h-4 opacity-75 inline shrink-0" />
                      </a>
                    ) : (
                      exp.title
                    )}
                  </h5>

                  {/* Points from CV formatted as clear bullets */}
                  <ul className="space-y-2.5 mb-5 pl-0.5">
                    {exp.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-white/75 text-xs sm:text-sm leading-relaxed">
                        <span 
                          className="w-1.5 h-1.5 rounded-full bg-[#bac964] mt-2 shrink-0 shadow-[0_0_6px_rgba(186,201,100,0.4)]" 
                          aria-hidden="true" 
                        />
                        <span className="flex-1">{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {exp.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#222222] text-white/70 border border-white/10"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Action Link with Arrow */}
                  <button
                    type="button"
                    onClick={() => handleOpenProject(exp.title)}
                    className="inline-flex items-center text-[#bac964] hover:text-[#89BF55] text-xs font-semibold tracking-wider uppercase group transition-colors"
                  >
                    <span>Architecture Details</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-1.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* ================= Right Column: Education ================= */}
          <div>
            <div className="flex items-center gap-2 pb-3 mb-6 border-b border-white/10">
              <GraduationCap className="w-5 h-5 text-[#bac964]" />
              <h5 className="text-2xl font-light text-white tracking-wide">Education</h5>
            </div>

            <div className="space-y-6">
              
              {/* 1. Bachelor's Degree */}
              <div className="item-resume bg-[#333333] p-7 rounded-[10px] border border-white/5 hover:border-[#bac964]/40 transition-all duration-300 hover:-translate-y-1 shadow-md shadow-black/20">
                <div className="flex items-center gap-2 text-white/90 text-sm mb-3 font-mono">
                  <Calendar className="w-4 h-4 text-[#bac964]" />
                  <h6 className="text-white font-medium text-xs sm:text-sm m-0">
                    Graduated – {EDUCATION.period}
                  </h6>
                </div>

                <h5 className="text-lg sm:text-xl font-bold text-[#bac964] mb-1">
                  {EDUCATION.degree}
                </h5>

                <div className="inline-block px-2.5 py-0.5 rounded text-xs font-mono font-bold bg-[#bac964]/20 text-[#bac964] mb-3 border border-[#bac964]/30">
                  GPA: {EDUCATION.gpa} / 4.0
                </div>

                <p className="text-white/80 text-sm font-medium mb-1">
                  {EDUCATION.institution}
                </p>
                <p className="text-white/50 text-xs mb-4 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#bac964]" />
                  <span>{EDUCATION.location}</span>
                </p>

                <p className="text-white/60 text-xs sm:text-sm leading-relaxed mb-4">
                  Thorough study of computer science foundations: Object-Oriented Programming (OOP), Data Structures & Algorithms, Database Systems, Computer Networks, and Software Engineering methodologies.
                </p>

                <button
                  type="button"
                  onClick={onOpenResume}
                  className="inline-flex items-center text-[#bac964] hover:text-[#89BF55] text-xs font-semibold tracking-wider uppercase group transition-colors"
                >
                  <span>View Academic Record</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-1.5" />
                </button>
              </div>

              {/* 2. ITI Trainee Diplomas */}
              {TRAINEE_PROGRAMS.map((prog, idx) => (
                <div
                  key={idx}
                  className="item-resume bg-[#333333] p-7 rounded-[10px] border border-white/5 hover:border-[#bac964]/40 transition-all duration-300 hover:-translate-y-1 shadow-md shadow-black/20"
                >
                  <div className="flex items-center gap-2 text-white/90 text-sm mb-3 font-mono">
                    <Calendar className="w-4 h-4 text-[#bac964]" />
                    <h6 className="text-white font-medium text-xs sm:text-sm m-0">
                      Completed – {prog.period}
                    </h6>
                  </div>

                  <h5 className="text-lg sm:text-xl font-bold text-[#bac964] mb-2">
                    {prog.program}
                  </h5>

                  <p className="text-white/80 text-sm font-medium mb-1">
                    {prog.institution}
                  </p>
                  <p className="text-white/50 text-xs mb-3 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#bac964]" />
                    <span>{prog.location}</span>
                  </p>

                  <p className="text-white/60 text-xs sm:text-sm leading-relaxed mb-4">
                    Intensive hands-on training covering modern full-stack architectures, clean coding patterns, database modeling, and scalable web platforms.
                  </p>

                  <button
                    type="button"
                    onClick={onOpenResume}
                    className="inline-flex items-center text-[#bac964] hover:text-[#89BF55] text-xs font-semibold tracking-wider uppercase group transition-colors"
                  >
                    <span>Accreditation Details</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-1.5" />
                  </button>
                </div>
              ))}

              {/* 3. Professional Certification */}
              {CERTIFICATIONS.map((cert, idx) => (
                <div
                  key={idx}
                  className="item-resume bg-[#333333] p-7 rounded-[10px] border border-white/5 hover:border-[#bac964]/40 transition-all duration-300 hover:-translate-y-1 shadow-md shadow-black/20"
                >
                  <div className="flex items-center gap-2 text-white/90 text-sm mb-3 font-mono">
                    <Calendar className="w-4 h-4 text-[#bac964]" />
                    <h6 className="text-white font-medium text-xs sm:text-sm m-0">
                      Certified – {cert.year}
                    </h6>
                  </div>

                  <h5 className="text-lg sm:text-xl font-bold text-[#bac964] mb-2">
                    {cert.title}
                  </h5>

                  <p className="text-white/60 text-xs sm:text-sm leading-relaxed mb-4">
                    Advanced specialization covering enterprise NestJS architecture, PostgreSQL optimization, GraphQL schema stitching, and security hardening (JWT, RBAC, OWASP).
                  </p>

                  <button
                    type="button"
                    onClick={onOpenResume}
                    className="inline-flex items-center text-[#bac964] hover:text-[#89BF55] text-xs font-semibold tracking-wider uppercase group transition-colors"
                  >
                    <span>Certification Details</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-1.5" />
                  </button>
                </div>
              ))}

            </div>
          </div>

        </div>

        {/* ================= Section: About Me (matching reference layout) ================= */}
        <div id="About" className="pt-16 border-t border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Developer Profile Visual Card */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-md bg-[#333333] p-8 rounded-2xl border border-white/10 shadow-xl shadow-black/40 text-center">
                
                {/* Visual Avatar / Photo */}
                <div className="relative w-36 h-36 mx-auto mb-6">
                  <div className="w-full h-full rounded-2xl overflow-hidden border-2 border-[#bac964] shadow-xl shadow-[#89BF55]/20 group">
                    <img
                      src="/mostafa.jpg"
                      alt="Mustafa Essam El Din"
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 px-2.5 py-0.5 rounded-full bg-[#89BF55] text-[#222222] text-[10px] font-mono font-bold tracking-wider uppercase shadow-md flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Verified</span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-1">
                  Mustafa Essam El Din
                </h3>
                <p className="text-[#bac964] text-sm font-mono mb-4">
                  Full-Stack Web Developer
                </p>

                <div className="grid grid-cols-2 gap-3 text-left pt-4 border-t border-white/10 text-xs font-mono">
                  <div className="bg-[#222222] p-3 rounded-lg border border-white/5">
                    <span className="text-white/40 block">Location</span>
                    <span className="text-white font-medium">{PERSONAL_INFO.location}</span>
                  </div>
                  <div className="bg-[#222222] p-3 rounded-lg border border-white/5">
                    <span className="text-white/40 block">Degree GPA</span>
                    <span className="text-[#bac964] font-medium">3.2 / 4.0</span>
                  </div>
                  <div className="bg-[#222222] p-3 rounded-lg border border-white/5">
                    <span className="text-white/40 block">Degree</span>
                    <span className="text-white font-medium">B.Sc. Comp Sci</span>
                  </div>
                  <div className="bg-[#222222] p-3 rounded-lg border border-white/5">
                    <span className="text-white/40 block">Accreditation</span>
                    <span className="text-[#bac964] font-medium">ITI Creativa</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Bio Narrative & Action Buttons */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-3xl sm:text-4xl font-light text-white flex items-center gap-2">
                  About <h4 className="text-3xl sm:text-4xl font-extrabold text-[#bac964] inline-block m-0">Me</h4>
                </span>
                <p className="mt-4 text-[#bac964] text-base sm:text-lg font-medium">
                  Full-Stack Web Developer Graduate (ITI & Menoufia University) ready to build scalable enterprise solutions.
                </p>
              </div>

              <div className="space-y-4 text-white/70 text-sm sm:text-base leading-relaxed font-light">
                <p>
                  I am a Full-Stack Web Developer from Menofia, Egypt with a Bachelor's Degree in Computer Science from Menoufia University (Faculty of Electronic Engineering, GPA 3.2).
                </p>
                <p>
                  My favorite tools and frameworks are <strong className="text-white font-medium">NestJS, Node.js, Express.js, Laravel, React.js, TypeScript, MySQL, and Docker</strong>.
                </p>
                <p>
                  I have built multi-module ERP systems, e-learning management platforms supporting 100+ concurrent users with sub-200ms query latency, and high-performance e-commerce backends with CASL RBAC and automated backups.
                </p>
              </div>

              {/* Action Buttons matching reference site: HIRE ME and DOWNLOAD CV */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href="#Contact"
                  className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[#bac964] hover:bg-[#89BF55] text-[#222222] font-semibold text-sm tracking-wider uppercase transition-all duration-300 shadow-lg shadow-[#bac964]/20 hover:scale-105"
                >
                  <span>H I R E&nbsp;&nbsp;M E</span>
                  <Send className="w-4 h-4" />
                </a>

                <button
                  type="button"
                  onClick={onOpenResume}
                  className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[#5a6268] hover:bg-[#6c757d] text-white font-medium text-sm tracking-wider uppercase transition-all duration-300 hover:scale-105"
                >
                  <span>DOWNLOAD CV</span>
                  <Download className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Modal for Project details */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};
