import React from 'react';
import { EDUCATION, TRAINEE_PROGRAMS, CERTIFICATIONS } from '../data';
import { GraduationCap, Award, BookOpen, MapPin, Calendar, CheckCircle2 } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section 
      id="education" 
      aria-label="Education and Certifications"
      className="py-16 md:py-24 border-b border-stone-200 dark:border-stone-800"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs font-mono font-medium text-emerald-800 dark:text-emerald-400 uppercase tracking-wider mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400" />
            <span>05 / Academic Foundation</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-100">
            Education & Professional Training
          </h2>
          <p className="mt-1 text-sm text-stone-600 dark:text-stone-400">
            University degree, intensive ITI training tracks, and specialized backend certifications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Degree Card (Col 7) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-xs space-y-5">
              
              <div className="flex items-start justify-between gap-4 pb-4 border-b border-stone-100 dark:border-stone-800">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border border-emerald-200/60 dark:border-emerald-800/60">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-medium text-emerald-700 dark:text-emerald-400">
                      UNDERGRADUATE DEGREE
                    </span>
                    <h3 className="text-xl font-bold text-stone-900 dark:text-stone-100">
                      {EDUCATION.degree}
                    </h3>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-stone-100 dark:bg-stone-800 text-stone-900 dark:text-stone-100 block">
                    GPA: {EDUCATION.gpa}
                  </span>
                  <span className="text-[11px] font-mono text-stone-400 mt-1 block">
                    {EDUCATION.period}
                  </span>
                </div>
              </div>

              <div>
                <p className="text-base font-medium text-stone-800 dark:text-stone-200">
                  {EDUCATION.institution}
                </p>
                <div className="flex items-center gap-1.5 text-xs text-stone-500 dark:text-stone-400 mt-1 font-mono">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{EDUCATION.location}</span>
                </div>
              </div>

              {EDUCATION.details && (
                <ul className="space-y-2 text-sm text-stone-600 dark:text-stone-300 pt-2 border-t border-stone-100 dark:border-stone-800">
                  {EDUCATION.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              )}

            </div>

            {/* Certification Card */}
            <div className="p-6 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-xs space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono font-medium text-emerald-700 dark:text-emerald-400 uppercase tracking-wider">
                <Award className="w-4 h-4" />
                <span>Professional Certifications</span>
              </div>

              {CERTIFICATIONS.map((cert, idx) => (
                <div 
                  key={idx} 
                  className="flex items-center justify-between p-3.5 rounded-lg bg-stone-50 dark:bg-stone-800/60 border border-stone-200/60 dark:border-stone-800"
                >
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span className="text-sm font-semibold text-stone-900 dark:text-stone-100">
                      {cert.title}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-stone-500 dark:text-stone-400 px-2 py-0.5 rounded bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700">
                    {cert.year}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Trainee Experience Column (Col 5) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-xl bg-stone-100/70 dark:bg-stone-900/60 border border-stone-200 dark:border-stone-800 space-y-5">
              
              <div className="flex items-center gap-2 pb-3 border-b border-stone-200 dark:border-stone-800">
                <BookOpen className="w-4 h-4 text-emerald-700 dark:text-emerald-400" />
                <h3 className="text-sm font-semibold uppercase font-mono tracking-wider text-stone-900 dark:text-stone-100">
                  Intensive Trainee Programs
                </h3>
              </div>

              <div className="space-y-4">
                {TRAINEE_PROGRAMS.map((t, idx) => (
                  <div 
                    key={idx} 
                    className="p-4 rounded-lg bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-1.5"
                  >
                    <div className="flex justify-between items-start gap-2">
                      <h4 className="text-sm font-bold text-stone-900 dark:text-stone-100">
                        {t.program}
                      </h4>
                      <span className="text-[11px] font-mono text-stone-500 dark:text-stone-400 whitespace-nowrap">
                        {t.period}
                      </span>
                    </div>

                    <p className="text-xs text-stone-700 dark:text-stone-300">
                      {t.institution}
                    </p>

                    <div className="flex items-center gap-1 text-[11px] font-mono text-stone-400 dark:text-stone-500">
                      <MapPin className="w-3 h-3" />
                      <span>{t.location}</span>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
