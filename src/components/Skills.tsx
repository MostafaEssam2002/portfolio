import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data';
import { 
  Server, 
  Code2, 
  Layers, 
  Database, 
  ShieldCheck, 
  Radio, 
  Cpu, 
  GitBranch, 
  Box,
  Terminal,
  Zap,
  Globe,
  KeyRound,
  FileCode2
} from 'lucide-react';

interface CubeSkill {
  id: string;
  name: string;
  category: 'Backend' | 'Frontend' | 'Database' | 'Language' | 'DevOps' | 'Security';
  icon: React.ElementType;
  tag: string;
  animClass?: string;
}

export const Skills: React.FC = () => {
  const [cubeFilter, setCubeFilter] = useState<string>('all');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const coreCubes: CubeSkill[] = [
    { id: 'nest', name: 'NestJS', category: 'Backend', icon: Server, tag: 'Framework', animClass: '' },
    { id: 'node', name: 'Node.js', category: 'Backend', icon: Cpu, tag: 'Runtime', animClass: 'cube-box-fast' },
    { id: 'laravel', name: 'Laravel', category: 'Backend', icon: Database, tag: 'PHP MVC', animClass: 'cube-box-slow' },
    { id: 'react', name: 'React.js', category: 'Frontend', icon: Layers, tag: 'UI Library', animClass: 'cube-box-reverse' },
    { id: 'ts', name: 'TypeScript', category: 'Language', icon: Code2, tag: 'Typed JS', animClass: '' },
    { id: 'js', name: 'JavaScript', category: 'Language', icon: Terminal, tag: 'ES6+ Async', animClass: 'cube-box-fast' },
    { id: 'mysql', name: 'MySQL', category: 'Database', icon: Database, tag: 'Relational', animClass: 'cube-box-slow' },
    { id: 'prisma', name: 'Prisma ORM', category: 'Database', icon: ShieldCheck, tag: 'Modern ORM', animClass: 'cube-box-reverse' },
    { id: 'docker', name: 'Docker', category: 'DevOps', icon: Box, tag: 'Containers', animClass: '' },
    { id: 'socketio', name: 'Socket.io', category: 'Backend', icon: Radio, tag: 'WebSockets', animClass: 'cube-box-fast' },
    { id: 'mongodb', name: 'MongoDB', category: 'Database', icon: Database, tag: 'NoSQL / Document', animClass: 'cube-box-slow' },
    { id: 'redis', name: 'Redis', category: 'Database', icon: Zap, tag: 'Cache & KV', animClass: 'cube-box-reverse' },
    { id: 'git', name: 'Git & GitHub', category: 'DevOps', icon: GitBranch, tag: 'Version Ctrl', animClass: '' },
    { id: 'restapi', name: 'REST APIs', category: 'Backend', icon: Globe, tag: '60+ Endpoints', animClass: 'cube-box-fast' },
    { id: 'security', name: 'JWT & RBAC', category: 'Security', icon: KeyRound, tag: 'CASL Auth', animClass: 'cube-box-slow' },
    { id: 'php', name: 'PHP', category: 'Language', icon: FileCode2, tag: 'OOP & MVC', animClass: 'cube-box-reverse' },
  ];

  const displayedCubes = cubeFilter === 'all'
    ? coreCubes
    : coreCubes.filter((c) => c.category === cubeFilter);

  const filteredCategories = activeCategory === 'all'
    ? SKILL_CATEGORIES
    : SKILL_CATEGORIES.filter((cat) => cat.id === activeCategory);

  return (
    <section id="Skills" className="py-20 bg-[#222222] text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading matching reference site */}
        <div className="text-center mb-12">
          <span className="text-3xl sm:text-4xl font-light text-white flex items-center justify-center gap-2">
            My <h4 className="text-3xl sm:text-4xl font-extrabold text-[#bac964] inline-block m-0">Skills</h4>
          </span>
          <p className="text-white/50 text-sm sm:text-base mt-2 max-w-xl mx-auto">
            Technical competencies and core technologies verified in production and freelance projects.
          </p>
        </div>

        {/* ================= Signature 3D Rotating Skill Cubes ================= */}
        <div className="mb-20">
          {/* Cube Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10 pb-4 border-b border-white/10">
            {[
              { label: 'All', value: 'all' },
              { label: 'Backend', value: 'Backend' },
              { label: 'Database', value: 'Database' },
              { label: 'Languages', value: 'Language' },
              { label: 'Frontend', value: 'Frontend' },
              { label: 'DevOps & Tools', value: 'DevOps' },
              { label: 'Security', value: 'Security' },
            ].map((pill) => (
              <button
                key={pill.value}
                type="button"
                onClick={() => setCubeFilter(pill.value)}
                className={`px-3 py-1 rounded-full text-xs font-mono transition-all ${
                  cubeFilter === pill.value
                    ? 'bg-[#bac964] text-[#222222] font-bold shadow-md shadow-[#bac964]/20'
                    : 'bg-[#333333] text-white/70 hover:text-white border border-white/5'
                }`}
              >
                {pill.label}
              </button>
            ))}
          </div>

          {/* 16-Cube 3D Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-12 gap-x-6 justify-items-center py-4">
            {displayedCubes.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.id} className="flex flex-col items-center group">
                  <div className="cube-container flex items-center justify-center">
                    <div className={`cube-box cursor-grab active:cursor-grabbing ${item.animClass || ''}`}>
                      {/* 6 Faces of the 3D rotating cube */}
                      <div className="cube-face cube-face-front">
                        <Icon className="w-8 h-8 text-[#bac964] mb-1" />
                        <span className="text-[11px] font-bold text-white tracking-tight">{item.name}</span>
                      </div>
                      <div className="cube-face cube-face-back">
                        <Icon className="w-8 h-8 text-[#89BF55] mb-1" />
                        <span className="text-[11px] font-bold text-white tracking-tight">{item.name}</span>
                      </div>
                      <div className="cube-face cube-face-left">
                        <Icon className="w-8 h-8 text-[#bac964] mb-1" />
                        <span className="text-[10px] font-mono text-[#bac964]">{item.tag}</span>
                      </div>
                      <div className="cube-face cube-face-right">
                        <Icon className="w-8 h-8 text-[#89BF55] mb-1" />
                        <span className="text-[10px] font-mono text-[#bac964]">{item.tag}</span>
                      </div>
                      <div className="cube-face cube-face-top">
                        <Icon className="w-7 h-7 text-white mb-1" />
                        <span className="text-[9px] font-mono text-white/80">{item.category}</span>
                      </div>
                      <div className="cube-face cube-face-bottom">
                        <Icon className="w-7 h-7 text-white mb-1" />
                        <span className="text-[9px] font-mono text-white/80">{item.category}</span>
                      </div>
                    </div>
                  </div>

                  {/* Label under cube */}
                  <span className="mt-4 text-sm font-semibold text-white tracking-wide group-hover:text-[#bac964] transition-colors">
                    {item.name}
                  </span>
                  <span className="text-[11px] font-mono text-white/40">
                    {item.tag}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* ================= Comprehensive Skills Categorization ================= */}
        <div className="pt-12 border-t border-white/10">
          <div className="text-center mb-6">
            <span className="text-xs font-mono tracking-widest text-white/60 uppercase">
              Full Technical Competency Matrix
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            <button
              type="button"
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                activeCategory === 'all'
                  ? 'bg-[#bac964] text-[#222222] font-bold shadow-md'
                  : 'bg-[#333333] text-white/70 hover:text-white border border-white/10'
              }`}
            >
              All Categories
            </button>
            {SKILL_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                  activeCategory === cat.id
                    ? 'bg-[#bac964] text-[#222222] font-bold shadow-md'
                    : 'bg-[#333333] text-white/70 hover:text-white border border-white/10'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Grid of Skill Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCategories.map((category) => (
              <div
                key={category.id}
                className="bg-[#333333] p-6 rounded-[10px] border border-white/5 hover:border-[#bac964]/30 transition-all duration-200"
              >
                <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
                  <h5 className="text-base font-bold text-white tracking-wide">
                    {category.name}
                  </h5>
                  <span className="text-xs font-mono text-[#bac964]">
                    {category.skills.length} items
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded text-xs font-mono bg-[#222222] text-white/85 border border-white/10 hover:border-[#bac964] hover:text-[#bac964] transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
