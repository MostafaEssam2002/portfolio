import React from 'react';
import { Project } from '../types';
import { 
  X, 
  Github, 
  ExternalLink, 
  CheckCircle2, 
  Database, 
  Server, 
  Shield, 
  Radio, 
  Zap, 
  Calendar,
  Layers
} from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-stone-950/70 backdrop-blur-xs overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div 
        className="relative w-full max-w-3xl my-8 bg-white dark:bg-stone-900 rounded-xl border border-stone-200 dark:border-stone-800 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-900/90">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded text-xs font-mono font-medium bg-stone-200 dark:bg-stone-800 text-stone-800 dark:text-stone-300">
              {project.category}
            </span>
            <span className="text-xs font-mono text-stone-500 dark:text-stone-400">
              {project.period}
            </span>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#89BF55] hover:bg-[#bac964] text-[#222222] transition-colors shadow-xs ml-2"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3 h-3 stroke-[2.5]" />
              </a>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close project modal"
            className="p-1.5 rounded-md text-stone-500 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100 hover:bg-stone-200 dark:hover:bg-stone-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[80vh] overflow-y-auto">
          {project.imageUrl && (
            <div className="relative w-full h-48 sm:h-64 rounded-xl overflow-hidden border border-stone-200 dark:border-stone-700/80 shadow-md bg-[#181818] flex items-center justify-center">
              <img
                src={project.imageUrl}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover blur-md opacity-30 scale-110 pointer-events-none"
              />
              <img
                src={project.imageUrl}
                alt={project.title}
                referrerPolicy="no-referrer"
                className={`relative z-0 max-h-full max-w-full ${
                  project.id === 'zakker-islamic-platform'
                    ? 'object-contain p-4 drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)]'
                    : 'w-full h-full object-cover'
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            </div>
          )}

          <div>
            <h3 
              id="modal-project-title"
              className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-100"
            >
              {project.title}
            </h3>
            <p className="mt-1 text-sm font-medium text-emerald-800 dark:text-emerald-400 font-mono">
              Role: {project.role} · {project.type}
            </p>
            <p className="mt-3 text-stone-700 dark:text-stone-300 text-sm sm:text-base leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-3 border-y border-stone-100 dark:border-stone-800">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="p-3 rounded bg-stone-50 dark:bg-stone-800/60 border border-stone-200/60 dark:border-stone-800">
                <span className="block text-xs font-mono text-stone-500 dark:text-stone-400">{m.label}</span>
                <span className="text-sm sm:text-base font-bold text-stone-900 dark:text-stone-100 font-mono">{m.value}</span>
              </div>
            ))}
          </div>

          {/* Architectural Breakdown */}
          {project.architectureDetails && (
            <div className="space-y-3">
              <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400">
                Architectural Specifications (From CV)
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {project.architectureDetails.databaseEntities && (
                  <div className="p-3 rounded bg-stone-50 dark:bg-stone-800/40 border border-stone-200 dark:border-stone-800">
                    <div className="flex items-center gap-1.5 font-medium text-stone-900 dark:text-stone-200 mb-1">
                      <Database className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                      <span>Database & Relational Model</span>
                    </div>
                    <p className="text-stone-600 dark:text-stone-400">
                      {project.architectureDetails.databaseEntities}
                    </p>
                  </div>
                )}

                {project.architectureDetails.apiEndpoints && (
                  <div className="p-3 rounded bg-stone-50 dark:bg-stone-800/40 border border-stone-200 dark:border-stone-800">
                    <div className="flex items-center gap-1.5 font-medium text-stone-900 dark:text-stone-200 mb-1">
                      <Server className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                      <span>API Layer & Endpoints</span>
                    </div>
                    <p className="text-stone-600 dark:text-stone-400">
                      {project.architectureDetails.apiEndpoints}
                    </p>
                  </div>
                )}

                {project.architectureDetails.security && (
                  <div className="p-3 rounded bg-stone-50 dark:bg-stone-800/40 border border-stone-200 dark:border-stone-800">
                    <div className="flex items-center gap-1.5 font-medium text-stone-900 dark:text-stone-200 mb-1">
                      <Shield className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                      <span>Security & Access Control</span>
                    </div>
                    <p className="text-stone-600 dark:text-stone-400">
                      {project.architectureDetails.security}
                    </p>
                  </div>
                )}

                {project.architectureDetails.optimization && (
                  <div className="p-3 rounded bg-stone-50 dark:bg-stone-800/40 border border-stone-200 dark:border-stone-800">
                    <div className="flex items-center gap-1.5 font-medium text-stone-900 dark:text-stone-200 mb-1">
                      <Zap className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                      <span>Optimization & Query Tuning</span>
                    </div>
                    <p className="text-stone-600 dark:text-stone-400">
                      {project.architectureDetails.optimization}
                    </p>
                  </div>
                )}

                {project.architectureDetails.realtime && (
                  <div className="p-3 rounded bg-stone-50 dark:bg-stone-800/40 border border-stone-200 dark:border-stone-800">
                    <div className="flex items-center gap-1.5 font-medium text-stone-900 dark:text-stone-200 mb-1">
                      <Radio className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                      <span>Real-Time Communication</span>
                    </div>
                    <p className="text-stone-600 dark:text-stone-400">
                      {project.architectureDetails.realtime}
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Exact Bullet Points from CV */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400">
              Verbatim Contributions & Achievements
            </h4>
            <ul className="space-y-2.5">
              {project.bulletPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div className="pt-2 border-t border-stone-100 dark:border-stone-800">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-2">
              Technologies & Tools
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 text-xs font-mono rounded bg-stone-100 dark:bg-stone-800 text-stone-800 dark:text-stone-200 border border-stone-200 dark:border-stone-700"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-900/90">
          <div className="flex items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[#89BF55] hover:bg-[#bac964] text-[#222222] font-semibold text-xs sm:text-sm transition-all shadow-xs"
              >
                <ExternalLink className="w-4 h-4 stroke-[2.5]" />
                <span>Open Live Platform</span>
              </a>
            )}

            <a
              href={project.githubUrl || 'https://github.com/MostafaEssam2002'}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-stone-900 dark:text-stone-100 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs sm:text-sm font-medium rounded-md bg-stone-200 dark:bg-stone-800 hover:bg-stone-300 dark:hover:bg-stone-700 text-stone-800 dark:text-stone-200 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
