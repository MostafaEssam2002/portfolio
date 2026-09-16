import React, { useState } from 'react';
import { PROJECTS } from '../data';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';
import { 
  Eye, 
  Github, 
  ExternalLink, 
  Layers, 
  Database, 
  Server, 
  Zap, 
  CheckCircle2,
  Cpu
} from 'lucide-react';

export const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const tabs = [
    { id: 'All', label: 'All' },
    { id: 'NestJS', label: 'NestJS & Node' },
    { id: 'Laravel', label: 'Laravel & PHP' },
    { id: 'React', label: 'React & Frontend' },
    { id: 'Python', label: 'Python & Vision' },
  ];

  const filteredProjects = activeTab === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeTab);

  return (
    <section id="Portfolio" className="py-20 bg-[#222222] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading matching reference site */}
        <div className="text-center mb-12">
          <span className="text-3xl sm:text-4xl font-light text-white flex items-center justify-center gap-2">
            Featured <h4 className="text-3xl sm:text-4xl font-extrabold text-[#bac964] inline-block m-0">Portfolio</h4>
          </span>
          <p className="text-white/50 text-sm sm:text-base mt-2 max-w-xl mx-auto">
            Scalable backend architectures, multi-role ERP platforms, full-stack applications, and computer vision suites.
          </p>
        </div>

        {/* Tab Filters matching reference .nav-tabs */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 mb-12 border-b border-white/10 pb-4">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`text-sm sm:text-base font-medium tracking-wide transition-all pb-2 px-2 relative ${
                  isActive
                    ? 'text-[#bac964] font-semibold'
                    : 'text-white/50 hover:text-[#bac964]'
                }`}
              >
                {tab.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#bac964] rounded-full" />
                )}
              </button>
            );
          })}
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="item-portfolio-card p-5 group flex flex-col justify-between border border-white/5"
            >
              {/* Project Preview Banner */}
              <div className="relative w-full h-48 rounded-lg overflow-hidden bg-[#181818] border border-white/10 mb-4 group/img flex items-center justify-center">
                {/* Visual Image */}
                {project.imageUrl ? (
                  <>
                    {/* Atmospheric blur backdrop */}
                    <img
                      src={project.imageUrl}
                      alt=""
                      aria-hidden="true"
                      className="absolute inset-0 w-full h-full object-cover blur-md opacity-30 scale-110 pointer-events-none"
                    />
                    {/* Main Image */}
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className={`relative z-0 max-h-full max-w-full transition-transform duration-500 group-hover:scale-105 ${
                        project.id === 'zakker-islamic-platform'
                          ? 'object-contain p-2 drop-shadow-[0_8px_16px_rgba(0,0,0,0.7)]'
                          : 'w-full h-full object-cover group-hover:scale-110'
                      }`}
                    />
                  </>
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a]" />
                )}

                {/* Reference Site Signature .screen-hover Overlay */}
                <div className="screen-hover flex items-center justify-center gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Open Live Website"
                      className="w-12 h-12 rounded-full bg-[#89BF55] text-[#222222] hover:bg-[#bac964] flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg shadow-black/60"
                    >
                      <ExternalLink className="w-5 h-5 stroke-[2.5]" />
                    </a>
                  )}

                  <button
                    type="button"
                    onClick={() => setActiveModalProject(project)}
                    title="View Architectural Specs"
                    className="w-12 h-12 rounded-full bg-[#bac964] text-[#222222] hover:bg-[#89BF55] hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg shadow-black/60"
                  >
                    <Eye className="w-5 h-5" />
                  </button>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="View Source on GitHub"
                    className="w-12 h-12 rounded-full bg-[#333333] text-white hover:bg-white hover:text-[#222222] border border-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg shadow-black/60"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Title & Category Info matching reference site */}
              <div>
                <h4 className="text-lg font-bold text-white mb-1 group-hover:text-[#bac964] transition-colors">
                  {project.title}
                </h4>
                <p className="text-xs font-mono font-medium text-[#bac964] mb-3">
                  {project.subtitle}
                </p>
                <p className="text-xs text-white/60 line-clamp-3 leading-relaxed mb-4">
                  {project.summary}
                </p>
              </div>

              {/* Tags and Quick View Button */}
              <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#222222] text-white/70 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-1.5 py-0.5 text-[10px] font-mono text-white/40">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono font-semibold text-[#89BF55] hover:text-[#bac964] flex items-center gap-1 bg-[#89BF55]/10 px-2 py-0.5 rounded border border-[#89BF55]/30 hover:border-[#bac964] transition-colors"
                      title="Open Live Demo"
                    >
                      <span>Live</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}

                  <button
                    type="button"
                    onClick={() => setActiveModalProject(project)}
                    className="text-xs font-mono text-[#bac964] hover:underline flex items-center gap-1"
                  >
                    <span>Specs</span>
                    <Eye className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Deep-Dive Project Modal */}
      {activeModalProject && (
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      )}
    </section>
  );
};
