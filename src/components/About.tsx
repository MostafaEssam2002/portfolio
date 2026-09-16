import React from 'react';
import { PERSONAL_INFO, LANGUAGES_LIST, SOFT_SKILLS } from '../data';
import { GraduationCap, ShieldCheck, Terminal, Layers, Globe2, Sparkles, CheckCircle } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section 
      id="about" 
      aria-label="About Me"
      className="py-16 md:py-20 border-b border-stone-200 dark:border-stone-800"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 text-xs font-mono font-medium text-emerald-800 dark:text-emerald-400 uppercase tracking-wider mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400" />
            <span>01 / Background</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-100">
            About Me & Technical Direction
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Main Narrative */}
          <div className="lg:col-span-7 space-y-5 text-stone-700 dark:text-stone-300 text-base sm:text-lg leading-relaxed">
            <p>
              I am a results-driven Full-Stack Web Developer with a strong focus on backend architecture, database design, and query optimization. Having completed a Bachelor&apos;s Degree in Computer Science at Menoufia University (Faculty of Electronic Engineering, GPA 3.2), my engineering work is grounded in core computing fundamentals: Object-Oriented Programming (OOP), SOLID principles, relational data modeling, and clean code practices.
            </p>
            <p>
              My hands-on experience centers on building scalable systems: multi-module ERP platforms, learning management systems (LMS) serving 100+ concurrent users with sub-200ms API response times, and high-performance e-commerce backends with complex order validation rules.
            </p>
            <p>
              I am particularly drawn to backend challenges: architecting secure Role-Based Access Control (RBAC with CASL), designing normalized relational databases with Prisma and MySQL, integrating event-driven WebSockets with Socket.io for real-time interactions, and containerizing services using Docker.
            </p>

            {/* What I enjoy building */}
            <div className="pt-4 border-t border-stone-200 dark:border-stone-800">
              <h3 className="text-sm font-semibold uppercase font-mono tracking-wider text-stone-900 dark:text-stone-200 mb-3">
                Key Engineering Focus Areas
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm text-stone-600 dark:text-stone-300">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>RESTful API design with validation & documentation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>Database indexing & query performance optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>Multi-role access control (RBAC / CASL / JWT)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>Real-time notifications & messaging via WebSockets</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Credentials & Soft Skills directly from CV */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Education & Training Card */}
            <div className="p-5 rounded-lg bg-stone-100/70 dark:bg-stone-900/60 border border-stone-200 dark:border-stone-800 space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-stone-200 dark:border-stone-800 text-stone-900 dark:text-stone-100 font-medium text-sm">
                <GraduationCap className="w-4 h-4 text-emerald-700 dark:text-emerald-400" />
                <span>Academic & Professional Training</span>
              </div>

              <div className="space-y-3 text-sm">
                <div>
                  <div className="flex justify-between items-baseline">
                    <span className="font-semibold text-stone-900 dark:text-stone-100">
                      B.Sc. in Computer Science
                    </span>
                    <span className="text-xs font-mono text-stone-500 dark:text-stone-400">2020 – 2025</span>
                  </div>
                  <p className="text-xs text-stone-600 dark:text-stone-400 mt-0.5">
                    Faculty of Electronic Engineering – Menoufia University (GPA: 3.2)
                  </p>
                </div>

                <div className="pt-2 border-t border-stone-200 dark:border-stone-800">
                  <div className="flex justify-between items-baseline">
                    <span className="font-semibold text-stone-900 dark:text-stone-100">
                      ITI Full-Stack Trainee (PHP Track)
                    </span>
                    <span className="text-xs font-mono text-stone-500 dark:text-stone-400">2024 & 2025</span>
                  </div>
                  <p className="text-xs text-stone-600 dark:text-stone-400 mt-0.5">
                    Information Technology Institute (ITI), Creativa – Menoufia
                  </p>
                </div>

                <div className="pt-2 border-t border-stone-200 dark:border-stone-800">
                  <div className="flex justify-between items-baseline">
                    <span className="font-semibold text-stone-900 dark:text-stone-100">
                      JavaScript Training
                    </span>
                    <span className="text-xs font-mono text-stone-500 dark:text-stone-400">2026</span>
                  </div>
                  <p className="text-xs text-stone-600 dark:text-stone-400 mt-0.5">
                    YALLA EXPAND (Jul 2026 – Aug 2026)
                  </p>
                </div>

                <div className="pt-2 border-t border-stone-200 dark:border-stone-800">
                  <div className="flex justify-between items-baseline">
                    <span className="font-semibold text-stone-900 dark:text-stone-100">
                      Professional Certification
                    </span>
                    <span className="text-xs font-mono text-stone-500 dark:text-stone-400">2026</span>
                  </div>
                  <p className="text-xs text-stone-600 dark:text-stone-400 mt-0.5">
                    Node.js, Nest.js, PostgreSQL, GraphQL, and Security
                  </p>
                </div>
              </div>
            </div>

            {/* Languages & Soft Skills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Languages */}
              <div className="p-4 rounded-lg bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800">
                <div className="flex items-center gap-1.5 text-xs font-mono font-medium text-stone-500 dark:text-stone-400 uppercase tracking-wider mb-2">
                  <Globe2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span>Languages</span>
                </div>
                <div className="space-y-1.5 text-sm">
                  {LANGUAGES_LIST.map((lang) => (
                    <div key={lang.name} className="flex justify-between items-center">
                      <span className="font-medium text-stone-800 dark:text-stone-200">{lang.name}</span>
                      <span className="text-xs font-mono px-2 py-0.5 rounded bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400">
                        {lang.proficiency}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Soft Skills */}
              <div className="p-4 rounded-lg bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800">
                <div className="flex items-center gap-1.5 text-xs font-mono font-medium text-stone-500 dark:text-stone-400 uppercase tracking-wider mb-2">
                  <Terminal className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span>Work Principles</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {SOFT_SKILLS.map((skill) => (
                    <span 
                      key={skill}
                      className="text-xs font-medium px-2 py-0.5 rounded bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
