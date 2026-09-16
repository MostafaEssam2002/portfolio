import React from 'react';
import { EXPERIENCES } from '../data';
import { Briefcase, Calendar, CheckCircle2, ChevronRight } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section 
      id="experience" 
      aria-label="Professional Experience"
      className="py-16 md:py-24 border-b border-stone-200 dark:border-stone-800 bg-stone-100/40 dark:bg-stone-900/20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs font-mono font-medium text-emerald-800 dark:text-emerald-400 uppercase tracking-wider mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400" />
            <span>04 / Career History</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-100">
            Professional Experience & Freelance
          </h2>
          <p className="mt-1 text-sm text-stone-600 dark:text-stone-400">
            Documented timeline of client projects, full-stack implementations, and software engineering roles.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-stone-200 dark:border-stone-800 ml-3 sm:ml-6 space-y-10">
          {EXPERIENCES.map((exp, idx) => (
            <div key={exp.id} className="relative pl-6 sm:pl-8 group">
              
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-stone-900 border-2 border-stone-400 dark:border-stone-600 group-hover:border-emerald-600 dark:group-hover:border-emerald-400 transition-colors" />

              {/* Card Container */}
              <div className="p-6 sm:p-7 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-xs space-y-4">
                
                {/* Header: Title, Period, Badge */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-3 border-b border-stone-100 dark:border-stone-800">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-stone-900 dark:text-stone-100">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs font-mono font-medium text-emerald-800 dark:text-emerald-400">
                        {exp.companyOrContext}
                      </span>
                      <span className="text-stone-300 dark:text-stone-700">•</span>
                      <span className="text-xs font-mono text-stone-500 dark:text-stone-400">
                        {exp.roleType}
                      </span>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 font-mono text-xs self-start sm:self-auto">
                    <Calendar className="w-3.5 h-3.5 text-stone-400" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Bullets (verbatim from CV) */}
                <ul className="space-y-2.5">
                  {exp.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2 text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies used */}
                <div className="pt-3 border-t border-stone-100 dark:border-stone-800 flex flex-wrap gap-1.5">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-xs font-mono rounded bg-stone-50 dark:bg-stone-800 text-stone-700 dark:text-stone-300 border border-stone-200/60 dark:border-stone-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
