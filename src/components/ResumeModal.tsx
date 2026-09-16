import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data';
import { 
  X, 
  Printer, 
  Copy, 
  Check, 
  Download, 
  ExternalLink,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github
} from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const rawCv = `Mustafa Essam El Din
Menofia, Egypt | +20 111 860 6952 | mostafaessam9511@gmail.com
LinkedIn: https://www.linkedin.com/in/mostafa-essam-384413203/
GitHub: https://github.com/MostafaEssam2002

PROFESSIONAL SUMMARY
I am a results-driven Full-Stack Web Developer skilled in creating scalable web applications using a range of technologies including NestJS, Node.js, Laravel, and React.js. My expertise includes developing RESTful APIs and multi-role management systems, as well as database design and optimization. With a strong focus on performance and user experience, I have successfully completed various projects in e-learning, e-commerce, and business management domains.

TECHNICAL SKILLS
Programming Languages: JavaScript, TypeScript, Python, PHP, C++.
Frameworks & Libraries: Node.js, Express.js, Nest JS, Laravel, React.
Front-End Development: HTML, CSS, JavaScript, BootStrap, React.js.
Tools & DevOps: Git, GitHub, Linux, Docker(Basic), Postman, REST API, Swagger, npm.
Databases: MySQL, SQL Server, MongoDB, Redis, Prisma ORM.
Authentication & Security: JWT, OAuth, Role-Based Access Control (RBAC), Middleware Authentication, OWASP Top 10.
Real-Time Technologies: WebSocket, Socket.io.
Development Practices: RESTful API Design, GraphQL, Agile Methodology, Clean Code Principles.
Core Concepts: OOP, SOLID principles, Design Patterns, Data Structures & Algorithms.

FREELANCE
Full-Stack Car Showroom ERP System (Nest JS): 02/2026 - 03/2026
- Architected and developed a scalable Car Showroom Management System using NestJS, TypeScript, Prisma ORM, and SQL, managing 6+ core modules including customers, dealers, inventory, sales, installments, and expenses, improving operational efficiency by ~40%.
- Enhanced system scalability and performance through optimized database design and efficient query handling, while implementing secure authentication, Arabic language support, and automated data backup functionality for reliable business operations.

PROFESSIONAL EXPERIENCE
Ertiqa – Educational Management System (Nest JS): 12/2025 - 05/2026
- Architected and developed a scalable LMS platform using NestJS, Prisma ORM, and MySQL with 22+ database entities, supporting multi-role access (Students, Teachers, Admins) and enabling 100+ concurrent users with secure RBAC (CASL) and JWT authentication.
- Engineered 60+ RESTful APIs handling courses, quizzes, assignments, attendance, and progress tracking, implementing complex business logic (quiz scoring, progress calculation, cascading deletes) to ensure data integrity and maintainability.
- Optimized database performance through indexing and efficient relational design, achieving sub-200ms response times for high-frequency queries, improving system scalability and responsiveness.
- Integrated real-time communication using WebSockets (Socket.io) for instant messaging and live notifications with message tracking, significantly enhancing user engagement and real-time interaction.
- Implemented scalable system features including subscription & one-time payments (Paymob), file/media uploads, and containerized deployment using Docker, improving deployment efficiency, system reliability, and portability.

E-Commerce Backend System (Laravel): 09/2025 – 11/2025
- Architected and developed a scalable e-commerce platform using Laravel, featuring 13+ database entities, 50+ RESTful APIs, and RBAC-based access control for 3 user roles (Admin, Seller, Customer), enabling secure and efficient system operations.
- Engineered a high-performance order and cart management system with discount validation and optimized relational design, supporting high transaction volumes while reducing query latency and improving overall system efficiency.
- Built a multilingual (Arabic/English) e-commerce platform with RTL support, integrated analytics dashboard, and scalable rating system (5-star aggregation, verified reviews), improving user experience and enabling 30% faster data retrieval through optimized queries.

Wazifa – Job Board Platform (Laravel): 09/2024 – 10/2024
- Developed a full-stack Job Board platform using Laravel, MySQL, Bootstrap, JavaScript, HTML, and CSS, connecting employers with job seekers through a scalable recruitment management system.
- Implemented core recruitment features including job posting management, resume uploads, application tracking, and advanced search and filtering capabilities to improve job discovery and hiring workflows.
- Designed a secure multi-role management system for Employers, Candidates, and Administrators, alongside an admin approval workflow for enhanced platform control and content moderation.
- Built a responsive mobile-friendly interface with an integrated notification system, ensuring seamless user experience and real-time engagement across devices.

Zakker – Comprehensive Islamic Web Platform (React): 05/2026 – 06/2026
- Built a full-featured Islamic platform using React 19, React Router, and SCSS, combining a page-based Quran reader (with audio recitation, tafsir, and ayah pinning), an Azkar counter system, and live Islamic radio streaming, integrating 4+ external REST APIs (Aladhan, QuranHub, Quranenc, Islamic Network) through a centralized, timeout-protected data layer.
- Designed a smart daily "Wird" (Quran reading plan) engine with automated scheduling, missed-day makeup logic, and progress tracking via custom hooks (useWird, usePin) and localStorage persistence, alongside geolocation-based prayer-time tracking with live countdowns, while enforcing HTTPS, CSP, and CORS policies across the app.

EDUCATION
Bachelor's Degree in Computer Science 2020/2025
Faculty of Electronic Engineering – Menoufia University, Menouf, Egypt
GPA: 3.2

TRAINEE
- Full Stack Web Development (PHP Track) Information Technology Institute (ITI), Creativa – Menoufia July 2024
- Full Stack Web Development (PHP Track) Information Technology Institute (ITI), Creativa – Menoufia July 2025
- Java Script Training — YALLA EXPAND (JUL 2026 - AUG 2026)

CERTIFICATIONS
Node.js, Nest.js, PostgreSQL, GraphQL, and Security (2026)

LANGUAGES
- Arabic — Native
- English — B1

SOFT SKILLS
Problem Solving, Team Collaboration, Critical Thinking, Communication Skills, Fast Learner`;

    navigator.clipboard.writeText(rawCv);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-stone-950/80 backdrop-blur-xs overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
    >
      <div 
        className="relative w-full max-w-4xl my-6 bg-white dark:bg-stone-900 rounded-xl border border-stone-200 dark:border-stone-800 shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Controls Bar */}
        <div className="flex items-center justify-between px-6 py-3 border-b border-stone-200 dark:border-stone-800 bg-stone-100/80 dark:bg-stone-900 print:hidden">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-medium text-stone-700 dark:text-stone-300">
              Verified Developer CV (Document View)
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              id="resume-copy-btn"
              onClick={handleCopyText}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md text-xs font-medium bg-stone-200 dark:bg-stone-800 hover:bg-stone-300 dark:hover:bg-stone-700 text-stone-800 dark:text-stone-200 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy Text'}</span>
            </button>

            <button
              type="button"
              id="resume-print-btn"
              onClick={handlePrint}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md text-xs font-medium bg-stone-900 text-stone-50 hover:bg-stone-800 dark:bg-stone-100 dark:text-stone-900 dark:hover:bg-white transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close CV preview"
              className="p-1.5 rounded-md text-stone-500 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100 hover:bg-stone-200 dark:hover:bg-stone-800 transition-colors ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable CV Content */}
        <div className="p-8 sm:p-12 overflow-y-auto max-h-[82vh] bg-white text-stone-900 font-sans space-y-6 select-text print:p-0 print:max-h-none print:overflow-visible">
          
          {/* Header with Photo */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-stone-300 pb-5">
            <div className="text-center sm:text-left space-y-1.5 flex-1">
              <h1 id="resume-modal-title" className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-950">
                Mustafa Essam El Din
              </h1>
              <p className="text-xs font-mono text-stone-700">
                Menofia, Egypt | +20 111 860 6952 | mostafaessam9511@gmail.com
              </p>
              <div className="flex flex-wrap justify-center sm:justify-start gap-3 text-xs font-mono text-stone-800">
                <a 
                  href={PERSONAL_INFO.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#0e7490] hover:text-[#0891b2] hover:underline"
                >
                  LinkedIn: https://www.linkedin.com/in/mostafa-essam-384413203/
                </a>
                <span>|</span>
                <a 
                  href={PERSONAL_INFO.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#0e7490] hover:text-[#0891b2] hover:underline"
                >
                  GitHub: https://github.com/MostafaEssam2002
                </a>
              </div>
            </div>
            <div className="w-20 h-20 rounded-xl overflow-hidden border border-stone-300 shadow-sm shrink-0">
              <img
                src="/mostafa.jpg"
                alt="Mustafa Essam El Din"
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-bold font-mono uppercase tracking-wider text-stone-900 border-b border-stone-300 pb-1 mb-2">
              Professional Summary
            </h2>
            <p className="text-xs leading-relaxed text-stone-800">
              I am a results-driven Full-Stack Web Developer skilled in creating scalable web applications using a range of technologies including NestJS, Node.js, Laravel, and React.js. My expertise includes developing RESTful APIs and multi-role management systems, as well as database design and optimization. With a strong focus on performance and user experience, I have successfully completed various projects in e-learning, e-commerce, and business management domains.
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-bold font-mono uppercase tracking-wider text-stone-900 border-b border-stone-300 pb-1 mb-2">
              Technical Skills
            </h2>
            <div className="text-xs space-y-1 text-stone-800">
              <p><strong>Programming Languages:</strong> JavaScript, TypeScript, Python, PHP, C++.</p>
              <p><strong>Frameworks & Libraries:</strong> Node.js, Express.js, Nest JS, Laravel, React.</p>
              <p><strong>Front-End Development:</strong> HTML, CSS, JavaScript, BootStrap, React.js.</p>
              <p><strong>Tools & DevOps:</strong> Git, GitHub, Linux, Docker (Basic), Postman, REST API, Swagger, npm.</p>
              <p><strong>Databases:</strong> MySQL, SQL Server, MongoDB, Redis, Prisma ORM.</p>
              <p><strong>Authentication & Security:</strong> JWT, OAuth, Role-Based Access Control (RBAC), Middleware Authentication, OWASP Top 10.</p>
              <p><strong>Real-Time Technologies:</strong> WebSocket, Socket.io.</p>
              <p><strong>Development Practices:</strong> RESTful API Design, GraphQL, Agile Methodology, Clean Code Principles.</p>
              <p><strong>Core Concepts:</strong> OOP, SOLID principles, Design Patterns, Data Structures & Algorithms.</p>
            </div>
          </div>

          {/* Freelance */}
          <div>
            <h2 className="text-xs font-bold font-mono uppercase tracking-wider text-stone-900 border-b border-stone-300 pb-1 mb-2">
              Freelance
            </h2>
            <div className="space-y-1.5">
              <div className="flex justify-between items-baseline text-xs font-semibold text-stone-950">
                <span>Full-Stack Car Showroom ERP System (Nest JS):</span>
                <span className="font-mono font-normal text-stone-600">02/2026 – 03/2026</span>
              </div>
              <ul className="list-disc list-outside pl-4 text-xs space-y-1 text-stone-800">
                <li>
                  Architected and developed a scalable Car Showroom Management System using NestJS, TypeScript, Prisma ORM, and SQL, managing 6+ core modules including customers, dealers, inventory, sales, installments, and expenses, improving operational efficiency by ~40%.
                </li>
                <li>
                  Enhanced system scalability and performance through optimized database design and efficient query handling, while implementing secure authentication, Arabic language support, and automated data backup functionality for reliable business operations.
                </li>
              </ul>
            </div>
          </div>

          {/* Professional Experience */}
          <div>
            <h2 className="text-xs font-bold font-mono uppercase tracking-wider text-stone-900 border-b border-stone-300 pb-1 mb-2">
              Professional Experience
            </h2>
            <div className="space-y-3.5">
              
              {/* Ertiqa */}
              <div className="space-y-1">
                <div className="flex justify-between items-baseline text-xs font-semibold">
                  <a
                    href="https://github.com/MostafaEssam2002/center_education"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0e7490] hover:text-[#0891b2] hover:underline"
                  >
                    Ertiqa – Educational Management System (Nest JS):
                  </a>
                  <span className="font-mono font-normal text-stone-600">12/2025 – 05/2026</span>
                </div>
                <ul className="list-disc list-outside pl-4 text-xs space-y-1 text-stone-800">
                  <li>
                    Architected and developed a scalable LMS platform using NestJS, Prisma ORM, and MySQL with 22+ database entities, supporting multi-role access (Students, Teachers, Admins) and enabling 100+ concurrent users with secure RBAC (CASL) and JWT authentication.
                  </li>
                  <li>
                    Engineered 60+ RESTful APIs handling courses, quizzes, assignments, attendance, and progress tracking, implementing complex business logic (quiz scoring, progress calculation, cascading deletes) to ensure data integrity and maintainability.
                  </li>
                  <li>
                    Optimized database performance through indexing and efficient relational design, achieving sub-200ms response times for high-frequency queries, improving system scalability and responsiveness.
                  </li>
                  <li>
                    Integrated real-time communication using WebSockets (Socket.io) for instant messaging and live notifications with message tracking, significantly enhancing user engagement and real-time interaction.
                  </li>
                  <li>
                    Implemented scalable system features including subscription & one-time payments (Paymob), file/media uploads, and containerized deployment using Docker, improving deployment efficiency, system reliability, and portability.
                  </li>
                </ul>
              </div>

              {/* E-Commerce */}
              <div className="space-y-1">
                <div className="flex justify-between items-baseline text-xs font-semibold">
                  <a
                    href="https://github.com/MostafaEssam2002/E-commerce"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0e7490] hover:text-[#0891b2] hover:underline"
                  >
                    E-Commerce Backend System (Laravel):
                  </a>
                  <span className="font-mono font-normal text-stone-600">09/2025 – 11/2025</span>
                </div>
                <ul className="list-disc list-outside pl-4 text-xs space-y-1 text-stone-800">
                  <li>
                    Architected and developed a scalable e-commerce platform using Laravel, featuring 13+ database entities, 50+ RESTful APIs, and RBAC-based access control for 3 user roles (Admin, Seller, Customer), enabling secure and efficient system operations.
                  </li>
                  <li>
                    Engineered a high-performance order and cart management system with discount validation and optimized relational design, supporting high transaction volumes while reducing query latency and improving overall system efficiency.
                  </li>
                  <li>
                    Built a multilingual (Arabic/English) e-commerce platform with RTL support, integrated analytics dashboard, and scalable rating system (5-star aggregation, verified reviews), improving user experience and enabling 30% faster data retrieval through optimized queries.
                  </li>
                </ul>
              </div>

              {/* Wazifa */}
              <div className="space-y-1">
                <div className="flex justify-between items-baseline text-xs font-semibold">
                  <a
                    href="https://github.com/MostafaEssam2002/wazifa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0e7490] hover:text-[#0891b2] hover:underline"
                  >
                    Wazifa – Job Board Platform (Laravel):
                  </a>
                  <span className="font-mono font-normal text-stone-600">09/2024 – 10/2024</span>
                </div>
                <ul className="list-disc list-outside pl-4 text-xs space-y-1 text-stone-800">
                  <li>
                    Developed a full-stack Job Board platform using Laravel, MySQL, Bootstrap, JavaScript, HTML, and CSS, connecting employers with job seekers through a scalable recruitment management system.
                  </li>
                  <li>
                    Implemented core recruitment features including job posting management, resume uploads, application tracking, and advanced search and filtering capabilities to improve job discovery and hiring workflows.
                  </li>
                  <li>
                    Designed a secure multi-role management system for Employers, Candidates, and Administrators, alongside an admin approval workflow for enhanced platform control and content moderation.
                  </li>
                  <li>
                    Built a responsive mobile-friendly interface with an integrated notification system, ensuring seamless user experience and real-time engagement across devices.
                  </li>
                </ul>
              </div>

              {/* Zakker */}
              <div className="space-y-1">
                <div className="flex justify-between items-baseline text-xs font-semibold">
                  <a
                    href="https://zakker-ten.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0e7490] hover:text-[#0891b2] hover:underline"
                  >
                    Zakker – Comprehensive Islamic Web Platform (React):
                  </a>
                  <span className="font-mono font-normal text-stone-600">05/2026 – 06/2026</span>
                </div>
                <ul className="list-disc list-outside pl-4 text-xs space-y-1 text-stone-800">
                  <li>
                    Built a full-featured Islamic platform using React 19, React Router, and SCSS, combining a page-based Quran reader (with audio recitation, tafsir, and ayah pinning), an Azkar counter system, and live Islamic radio streaming, integrating 4+ external REST APIs (Aladhan, QuranHub, Quranenc, Islamic Network) through a centralized, timeout-protected data layer.
                  </li>
                  <li>
                    Designed a smart daily &quot;Wird&quot; (Quran reading plan) engine with automated scheduling, missed-day makeup logic, and progress tracking via custom hooks (useWird, usePin) and localStorage persistence, alongside geolocation-based prayer-time tracking with live countdowns, while enforcing HTTPS, CSP, and CORS policies across the app.
                  </li>
                </ul>
              </div>

              {/* Image Processing & Computer Vision Suite */}
              <div className="space-y-1">
                <div className="flex justify-between items-baseline text-xs font-semibold">
                  <a
                    href="https://github.com/MostafaEssam2002/Image_processing_project"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0e7490] hover:text-[#0891b2] hover:underline"
                  >
                    Image Processing &amp; Computer Vision Suite (Python):
                  </a>
                  <span className="font-mono font-normal text-stone-600">04/2025 – 05/2025</span>
                </div>
                <ul className="list-disc list-outside pl-4 text-xs space-y-1 text-stone-800">
                  <li>
                    Architected and developed a full-featured desktop image processing application using Python, OpenCV, scikit-image, and CustomTkinter, providing an interactive graphical workspace for digital image analysis and computer vision experimentation.
                  </li>
                  <li>
                    Implemented multi-stage edge detection algorithms (Canny, Sobel, Prewitt, Laplacian of Gaussian, Zero-Crossing, morphological thinning), spatial filtering (Gaussian blur, median, box, high-pass), Hough transforms for line/circle detection, and real-time histogram analysis.
                  </li>
                </ul>
              </div>

            </div>
          </div>

          {/* Education & Trainee */}
          <div>
            <h2 className="text-xs font-bold font-mono uppercase tracking-wider text-stone-900 border-b border-stone-300 pb-1 mb-2">
              Education & Trainee
            </h2>
            <div className="text-xs space-y-2 text-stone-800">
              <div className="flex justify-between items-baseline">
                <div>
                  <strong>Bachelor&apos;s Degree in Computer Science</strong> (GPA: 3.2)<br />
                  Faculty of Electronic Engineering – Menoufia University, Menouf, Egypt
                </div>
                <span className="font-mono text-stone-600">2020/2025</span>
              </div>

              <div className="pt-1">
                <p className="font-semibold text-stone-950">Trainee Programs:</p>
                <ul className="list-disc list-outside pl-4 space-y-0.5 mt-0.5">
                  <li>Full Stack Web Development (PHP Track) Information Technology Institute (ITI), Creativa – Menoufia July 2024</li>
                  <li>Full Stack Web Development (PHP Track) Information Technology Institute (ITI), Creativa – Menoufia July 2025</li>
                  <li>Java Script Training — YALLA EXPAND (JUL 2026 - AUG 2026)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Certifications, Languages, Soft Skills */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 border-t border-stone-200 text-xs text-stone-800">
            <div>
              <p className="font-semibold text-stone-950 mb-0.5">Certifications</p>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0e7490] hover:text-[#0891b2] hover:underline block"
              >
                Node.js, Nest.js, PostgreSQL, GraphQL, and Security (2026)
              </a>
            </div>
            <div>
              <p className="font-semibold text-stone-950 mb-0.5">Languages</p>
              <p>Arabic — Native<br />English — B1</p>
            </div>
            <div>
              <p className="font-semibold text-stone-950 mb-0.5">Soft Skills</p>
              <p>Problem Solving, Team Collaboration, Critical Thinking, Communication Skills, Fast Learner</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
