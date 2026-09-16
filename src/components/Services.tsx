import React from 'react';
import { Server, Layout, Database, ShieldCheck, ArrowRight } from 'lucide-react';

interface ServicesProps {
  onSelectService?: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const services = [
    {
      id: 'backend-api',
      icon: Server,
      title: 'Backend & RESTful APIs',
      description:
        'Architecting secure, high-performance RESTful APIs using NestJS, Node.js, and Laravel. Specialized in CASL Role-Based Access Control, JWT authentication, and sub-200ms database response times.',
      linkText: 'Backend Architecture',
      targetHash: '#portfolio',
    },
    {
      id: 'fullstack-web',
      icon: Layout,
      title: 'Full-Stack Web Development',
      description:
        'Building full-featured web applications and platforms connecting dynamic React.js frontend interfaces to scalable backend APIs with clean state management, modular components, and responsive design.',
      linkText: 'Full-Stack Solutions',
      targetHash: '#portfolio',
    },
    {
      id: 'database-systems',
      icon: Database,
      title: 'Database Design & Optimization',
      description:
        'Designing normalized relational database schemas with MySQL, SQL Server, and Prisma ORM. Implementing indexing strategies, foreign key constraints, Redis caching, and automated data backup systems.',
      linkText: 'Database Engineering',
      targetHash: '#portfolio',
    },
  ];

  return (
    <section id="Services" className="py-20 bg-[#222222] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading matching reference site */}
        <div className="text-center mb-16">
          <span className="text-3xl sm:text-4xl font-light text-white flex items-center justify-center gap-2">
            My <h4 className="text-3xl sm:text-4xl font-extrabold text-[#bac964] inline-block m-0">Services</h4>
          </span>
          <p className="text-white/50 text-sm sm:text-base mt-3 max-w-xl mx-auto">
            Specialized engineering capabilities derived from real enterprise projects and validated diploma accreditations.
          </p>
        </div>

        {/* 3-Column Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="item-Services services-card-radius bg-[#333333] p-8 flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-black/40 border border-white/5"
              >
                {/* Circular Accent Icon */}
                <div className="w-20 h-20 rounded-full bg-[#b2c251] flex items-center justify-center text-[#333333] mb-6 shadow-md shadow-[#b2c251]/20 transition-transform duration-300 hover:scale-110">
                  <Icon className="w-9 h-9 stroke-[2.2]" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-white mb-3 tracking-wide">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-white/50 text-sm leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Action Link */}
                <a
                  href={item.targetHash}
                  className="mt-auto inline-flex items-center text-[#bac964] text-sm font-medium hover:text-[#89BF55] group transition-colors"
                >
                  <span className="transition-all duration-300 group-hover:mr-1">
                    {item.linkText}
                  </span>
                  <ArrowRight className="w-4 h-4 ml-1.5 transition-transform duration-300 group-hover:translate-x-1.5" />
                </a>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
