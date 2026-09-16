import { Project, SkillCategory, ExperienceItem, EducationItem, TraineeItem, CertificationItem } from './types';

export const PERSONAL_INFO = {
  name: 'Mustafa Essam El Din',
  headline: 'Full-Stack Web Developer',
  focus: 'NestJS · Node.js · Laravel · React.js',
  shortIntro:
    'Full-Stack Web Developer skilled in creating scalable web applications with NestJS, Node.js, Laravel, and React.js. Specialized in RESTful API engineering, multi-role access control, and database design & optimization.',
  about:
    'I am a results-driven Full-Stack Web Developer with a strong focus on backend architecture, database optimization, and high-performance web systems. Having earned a Bachelor\'s Degree in Computer Science from Menoufia University (Faculty of Electronic Engineering, GPA 3.2), I apply solid software engineering principles including OOP, SOLID, design patterns, and relational database indexing to build maintainable, scalable software.',
  secondaryAbout:
    'My practical experience spans architecting multi-module ERP systems, e-learning management platforms handling 100+ concurrent users with sub-200ms query latency, high-volume e-commerce backends, and responsive React applications integrating third-party APIs. I am particularly interested in clean architectural patterns, robust RBAC security models, real-time event-driven communication with WebSockets, and database performance tuning.',
  location: 'Menofia, Egypt',
  email: 'mostafaessam9511@gmail.com',
  phone: '+20 111 860 6952',
  linkedin: 'https://www.linkedin.com/in/mostafa-essam-384413203/',
  github: 'https://github.com/MostafaEssam2002',
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'backend',
    name: 'Backend & Frameworks',
    skills: ['Nest JS', 'Node.js', 'Express.js', 'Laravel', 'RESTful API Design', 'GraphQL'],
  },
  {
    id: 'languages',
    name: 'Programming Languages',
    skills: ['TypeScript', 'JavaScript', 'PHP', 'Python', 'C++'],
  },
  {
    id: 'frontend',
    name: 'Frontend & UI',
    skills: ['React.js', 'JavaScript', 'HTML', 'CSS', 'Bootstrap'],
  },
  {
    id: 'databases',
    name: 'Databases & ORM',
    skills: ['MySQL', 'SQL Server', 'MongoDB', 'Redis', 'Prisma ORM'],
  },
  {
    id: 'security',
    name: 'Authentication & Security',
    skills: [
      'JWT Authentication',
      'OAuth',
      'Role-Based Access Control (RBAC)',
      'Middleware Authentication',
      'OWASP Top 10',
    ],
  },
  {
    id: 'realtime-devops',
    name: 'Real-Time & DevOps',
    skills: [
      'WebSocket',
      'Socket.io',
      'Docker (Basic)',
      'Git & GitHub',
      'Linux',
      'Postman',
      'Swagger',
      'npm',
    ],
  },
  {
    id: 'concepts',
    name: 'Core Concepts & Practices',
    skills: [
      'OOP',
      'SOLID Principles',
      'Design Patterns',
      'Data Structures & Algorithms',
      'Agile Methodology',
      'Clean Code Principles',
    ],
  },
];

export const LANGUAGES_LIST = [
  { name: 'Arabic', proficiency: 'Native' },
  { name: 'English', proficiency: 'B1' },
];

export const SOFT_SKILLS = [
  'Problem Solving',
  'Team Collaboration',
  'Critical Thinking',
  'Communication Skills',
  'Fast Learner',
];

export const PROJECTS: Project[] = [
  {
    id: 'ertiqa-lms',
    title: 'Ertiqa – Educational Management System',
    subtitle: 'Scalable multi-role LMS platform with 22+ entities and sub-200ms query performance',
    role: 'Backend & System Architect',
    period: '12/2025 – 05/2026',
    type: 'Professional Experience',
    category: 'NestJS',
    summary:
      'Architected and engineered a comprehensive Learning Management System using NestJS, Prisma ORM, and MySQL. Supports Students, Teachers, and Admins with CASL RBAC, real-time messaging, and high-frequency sub-200ms database response times.',
    technologies: [
      'NestJS',
      'Prisma ORM',
      'MySQL',
      'CASL (RBAC)',
      'JWT',
      'Socket.io',
      'Docker',
      'Paymob',
    ],
    metrics: [
      { label: 'Database Entities', value: '22+' },
      { label: 'RESTful APIs', value: '60+' },
      { label: 'Concurrent Users', value: '100+' },
      { label: 'Query Latency', value: 'Sub-200ms' },
    ],
    bulletPoints: [
      'Architected and developed a scalable LMS platform using NestJS, Prisma ORM, and MySQL with 22+ database entities, supporting multi-role access (Students, Teachers, Admins) and enabling 100+ concurrent users with secure RBAC (CASL) and JWT authentication.',
      'Engineered 60+ RESTful APIs handling courses, quizzes, assignments, attendance, and progress tracking, implementing complex business logic (quiz scoring, progress calculation, cascading deletes) to ensure data integrity and maintainability.',
      'Optimized database performance through indexing and efficient relational design, achieving sub-200ms response times for high-frequency queries, improving system scalability and responsiveness.',
      'Integrated real-time communication using WebSockets (Socket.io) for instant messaging and live notifications with message tracking, significantly enhancing user engagement and real-time interaction.',
      'Implemented scalable system features including subscription & one-time payments (Paymob), file/media uploads, and containerized deployment using Docker, improving deployment efficiency, system reliability, and portability.',
    ],
    architectureDetails: {
      databaseEntities: '22+ normalized entities with relational integrity and cascading deletes',
      apiEndpoints: '60+ fully documented RESTful endpoints with validation pipes',
      security: 'Role-Based Access Control via CASL and stateless JWT authentication',
      realtime: 'Socket.io bidirectional event bus with live notification tracking',
      optimization: 'Relational indexing achieving sub-200ms response times under load',
    },
    githubUrl: 'https://github.com/MostafaEssam2002/center_education',
    imageUrl: '/projects/ertiqa.jpg',
  },
  {
    id: 'car-showroom-erp',
    title: 'Full-Stack Car Showroom ERP System',
    subtitle: 'Comprehensive automotive dealership management with automated data backups',
    role: 'Full-Stack Developer (Freelance)',
    period: '02/2026 – 03/2026',
    type: 'Freelance',
    category: 'NestJS',
    summary:
      'Delivered an enterprise management platform managing 6+ core modules across inventory, installments, and sales. Boosted operational efficiency by ~40% with automated database backups and Arabic localization.',
    technologies: ['NestJS', 'TypeScript', 'Prisma ORM', 'SQL', 'RBAC', 'Automated Backups'],
    metrics: [
      { label: 'Core Modules', value: '6+' },
      { label: 'Efficiency Gain', value: '~40%' },
      { label: 'Localization', value: 'Arabic Support' },
      { label: 'Data Safety', value: 'Auto-Backups' },
    ],
    bulletPoints: [
      'Architected and developed a scalable Car Showroom Management System using NestJS, TypeScript, Prisma ORM, and SQL, managing 6+ core modules including customers, dealers, inventory, sales, installments, and expenses, improving operational efficiency by ~40%.',
      'Enhanced system scalability and performance through optimized database design and efficient query handling, while implementing secure authentication, Arabic language support, and automated data backup functionality for reliable business operations.',
    ],
    architectureDetails: {
      databaseEntities: 'Normalized relational schemas managing inventory, customers, deals & payments',
      security: 'Session authentication & role guards for dealership staff vs management',
      optimization: 'Efficient query aggregation for sales analytics and installment scheduling',
    },
    githubUrl: 'https://github.com/MostafaEssam2002',
    imageUrl: '/projects/car-erp.jpg',
  },
  {
    id: 'ecommerce-backend',
    title: 'E-Commerce Backend System',
    subtitle: 'High-performance commerce engine with discount validation and 30% faster queries',
    role: 'Backend Architect',
    period: '09/2025 – 11/2025',
    type: 'Professional Experience',
    category: 'Laravel',
    summary:
      'Engineered an enterprise-grade e-commerce backend in Laravel featuring 13+ database entities, 50+ RESTful APIs, 3-role RBAC, discount rules, RTL multilingual support, and a verified review aggregation system.',
    technologies: ['Laravel', 'MySQL', 'RESTful APIs', 'RBAC', 'RTL Multilingual', 'Analytics'],
    metrics: [
      { label: 'Database Entities', value: '13+' },
      { label: 'REST APIs', value: '50+' },
      { label: 'User Roles', value: '3 (Admin/Seller/Cust)' },
      { label: 'Speed Gain', value: '30% Faster' },
    ],
    bulletPoints: [
      'Architected and developed a scalable e-commerce platform using Laravel, featuring 13+ database entities, 50+ RESTful APIs, and RBAC-based access control for 3 user roles (Admin, Seller, Customer), enabling secure and efficient system operations.',
      'Engineered a high-performance order and cart management system with discount validation and optimized relational design, supporting high transaction volumes while reducing query latency and improving overall system efficiency.',
      'Built a multilingual (Arabic/English) e-commerce platform with RTL support, integrated analytics dashboard, and scalable rating system (5-star aggregation, verified reviews), improving user experience and enabling 30% faster data retrieval through optimized queries.',
    ],
    architectureDetails: {
      databaseEntities: '13+ relational models with optimized indexing and foreign key constraints',
      apiEndpoints: '50+ REST endpoints covering catalog, cart, orders, reviews, and analytics',
      security: 'Role-Based Access Control separating Admin, Seller, and Customer privileges',
      optimization: 'Strategic query caching and index tuning yielding 30% faster response times',
    },
    githubUrl: 'https://github.com/MostafaEssam2002/E-commerce',
    imageUrl: '/projects/ecommerce.jpg',
  },
  {
    id: 'wazifa-job-board',
    title: 'Wazifa – Job Board Platform',
    subtitle: 'Recruitment portal with resume processing, application tracking, and admin moderation',
    role: 'Full-Stack Developer',
    period: '09/2024 – 10/2024',
    type: 'Professional Experience',
    category: 'Laravel',
    summary:
      'Developed a full-stack job board connecting employers with job seekers. Features resume uploads, application pipeline tracking, search/filtering, and multi-tier admin approval workflow.',
    technologies: ['Laravel', 'MySQL', 'Bootstrap', 'JavaScript', 'HTML', 'CSS'],
    metrics: [
      { label: 'User Roles', value: '3 Roles' },
      { label: 'Workflow', value: 'Admin Approval' },
      { label: 'Notifications', value: 'Real-time System' },
      { label: 'Responsiveness', value: 'Mobile-First' },
    ],
    bulletPoints: [
      'Developed a full-stack Job Board platform using Laravel, MySQL, Bootstrap, JavaScript, HTML, and CSS, connecting employers with job seekers through a scalable recruitment management system.',
      'Implemented core recruitment features including job posting management, resume uploads, application tracking, and advanced search and filtering capabilities to improve job discovery and hiring workflows.',
      'Designed a secure multi-role management system for Employers, Candidates, and Administrators, alongside an admin approval workflow for enhanced platform control and content moderation.',
      'Built a responsive mobile-friendly interface with an integrated notification system, ensuring seamless user experience and real-time engagement across devices.',
    ],
    architectureDetails: {
      security: 'Role isolation for Candidates, Employers, and Admins with moderation gateways',
      optimization: 'Database queries indexed for job search keyword and location filtering',
    },
    githubUrl: 'https://github.com/MostafaEssam2002/wazifa',
    imageUrl: '/projects/wazifa.jpg',
  },
  {
    id: 'zakker-islamic-platform',
    title: 'Zakker – Comprehensive Islamic Web Platform',
    subtitle: 'React 19 platform with Quran reader, audio sync, daily Wird engine, and prayer times',
    role: 'Frontend & Architecture Engineer',
    period: '05/2026 – 06/2026',
    type: 'Platform',
    category: 'React',
    summary:
      'Built an Islamic web platform in React 19 combining a page-based Quran reader with audio recitation and tafsir, custom Wird scheduling engine with makeup logic, and 4+ external REST APIs under timeout protection.',
    technologies: [
      'React 19',
      'React Router',
      'SCSS',
      'Custom Hooks',
      'External APIs',
      'localStorage',
    ],
    metrics: [
      { label: 'External APIs', value: '4+ Integrated' },
      { label: 'Framework', value: 'React 19' },
      { label: 'Storage Logic', value: 'useWird & usePin' },
      { label: 'Policies', value: 'HTTPS / CSP / CORS' },
    ],
    bulletPoints: [
      'Built a full-featured Islamic platform using React 19, React Router, and SCSS, combining a page-based Quran reader (with audio recitation, tafsir, and ayah pinning), an Azkar counter system, and live Islamic radio streaming, integrating 4+ external REST APIs (Aladhan, QuranHub, Quranenc, Islamic Network) through a centralized, timeout-protected data layer.',
      'Designed a smart daily "Wird" (Quran reading plan) engine with automated scheduling, missed-day makeup logic, and progress tracking via custom hooks (useWird, usePin) and localStorage persistence, alongside geolocation-based prayer-time tracking with live countdowns, while enforcing HTTPS, CSP, and CORS policies across the app.',
    ],
    architectureDetails: {
      apiEndpoints: 'Centralized resilient client for Aladhan, QuranHub, Quranenc, and Islamic Network',
      security: 'Strict HTTPS enforcement, CSP headers, and CORS policy compliance',
      optimization: 'Custom hook architecture with persistent local caching minimizing re-renders',
    },
    githubUrl: 'https://github.com/MostafaEssam2002/azkar',
    liveUrl: 'https://zakker-ten.vercel.app/',
    imageUrl: '/projects/zakker.png',
  },
  {
    id: 'image-processing-suite',
    title: 'Image Processing & Computer Vision Suite',
    subtitle: 'Python, OpenCV & CustomTkinter desktop vision suite',
    role: 'Computer Vision / Python Developer',
    period: '04/2025 – 05/2025',
    type: 'Platform',
    category: 'Python',
    summary:
      'Developed an interactive desktop image processing and computer vision suite in Python using OpenCV, NumPy, scikit-image, and CustomTkinter. Features spatial filtering, edge detection algorithms (Canny, Sobel, Laplacian, LoG), Hough transforms, noise injection, and real-time histogram analysis.',
    technologies: [
      'Python',
      'OpenCV',
      'NumPy',
      'scikit-image',
      'CustomTkinter',
      'Matplotlib',
      'Pillow',
    ],
    metrics: [
      { label: 'CV Algorithms', value: '15+ Implemented' },
      { label: 'Transforms', value: 'Hough & Spatial' },
      { label: 'GUI Framework', value: 'CustomTkinter' },
      { label: 'Edge Detection', value: 'Canny / Sobel / LoG' },
    ],
    bulletPoints: [
      'Architected and developed a full-featured desktop image processing application using Python, OpenCV, scikit-image, and CustomTkinter, providing an interactive graphical workspace for digital image analysis.',
      'Implemented multi-stage edge detection pipelines including Canny, Sobel, Prewitt, Laplacian of Gaussian (LoG), Zero-Crossing, and morphological thinning/skeletonization algorithms.',
      'Engineered spatial filtering operations (Gaussian blur, median, box, high-pass) and global feature extractors including Hough transform for line and circle detection.',
      'Integrated real-time Matplotlib histogram visualization and histogram equalization, contrast/brightness adjustments, and parametric noise modeling (Gaussian, Poisson, Salt & Pepper).',
    ],
    architectureDetails: {
      databaseEntities: 'NumPy N-dimensional array processing pipelines with vectorization',
      apiEndpoints: 'Interactive GUI event loops connecting CustomTkinter to OpenCV/scikit-image computation routines',
      security: 'Safe file handling with MIME type validation for PNG, JPG, BMP, and GIF formats',
      optimization: 'Vectorized matrix transformations via NumPy and memory-efficient PIL rendering',
    },
    githubUrl: 'https://github.com/MostafaEssam2002/Image_processing_project',
    imageUrl: '/projects/vision-suite.jpg',
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'exp-car-showroom',
    title: 'Full-Stack Car Showroom ERP System',
    companyOrContext: 'Freelance Project',
    roleType: 'Freelance',
    period: '02/2026 – 03/2026',
    technologies: ['NestJS', 'TypeScript', 'Prisma ORM', 'SQL', 'RBAC'],
    points: [
      'Architected and developed a scalable Car Showroom Management System using NestJS, TypeScript, Prisma ORM, and SQL, managing 6+ core modules including customers, dealers, inventory, sales, installments, and expenses, improving operational efficiency by ~40%.',
      'Enhanced system scalability and performance through optimized database design and efficient query handling, while implementing secure authentication, Arabic language support, and automated data backup functionality for reliable business operations.',
    ],
  },
  {
    id: 'exp-ertiqa',
    title: 'Ertiqa – Educational Management System',
    companyOrContext: 'Professional Project',
    roleType: 'Professional Experience',
    period: '12/2025 – 05/2026',
    technologies: ['NestJS', 'Prisma ORM', 'MySQL', 'Socket.io', 'Docker', 'Paymob'],
    projectUrl: 'https://github.com/MostafaEssam2002/center_education',
    points: [
      'Architected and developed a scalable LMS platform using NestJS, Prisma ORM, and MySQL with 22+ database entities, supporting multi-role access (Students, Teachers, Admins) and enabling 100+ concurrent users with secure RBAC (CASL) and JWT authentication.',
      'Engineered 60+ RESTful APIs handling courses, quizzes, assignments, attendance, and progress tracking, implementing complex business logic (quiz scoring, progress calculation, cascading deletes) to ensure data integrity and maintainability.',
      'Optimized database performance through indexing and efficient relational design, achieving sub-200ms response times for high-frequency queries, improving system scalability and responsiveness.',
      'Integrated real-time communication using WebSockets (Socket.io) for instant messaging and live notifications with message tracking, significantly enhancing user engagement and real-time interaction.',
      'Implemented scalable system features including subscription & one-time payments (Paymob), file/media uploads, and containerized deployment using Docker, improving deployment efficiency, system reliability, and portability.',
    ],
  },
  {
    id: 'exp-ecommerce',
    title: 'E-Commerce Backend System',
    companyOrContext: 'Professional Project',
    roleType: 'Professional Experience',
    period: '09/2025 – 11/2025',
    technologies: ['Laravel', 'MySQL', 'REST APIs', 'RBAC'],
    projectUrl: 'https://github.com/MostafaEssam2002/E-commerce',
    points: [
      'Architected and developed a scalable e-commerce platform using Laravel, featuring 13+ database entities, 50+ RESTful APIs, and RBAC-based access control for 3 user roles (Admin, Seller, Customer), enabling secure and efficient system operations.',
      'Engineered a high-performance order and cart management system with discount validation and optimized relational design, supporting high transaction volumes while reducing query latency and improving overall system efficiency.',
      'Built a multilingual (Arabic/English) e-commerce platform with RTL support, integrated analytics dashboard, and scalable rating system (5-star aggregation, verified reviews), improving user experience and enabling 30% faster data retrieval through optimized queries.',
    ],
  },
  {
    id: 'exp-zakker',
    title: 'Zakker – Comprehensive Islamic Web Platform',
    companyOrContext: 'Web Platform Development',
    roleType: 'Professional Experience',
    period: '05/2026 – 06/2026',
    technologies: ['React 19', 'React Router', 'SCSS', 'REST APIs', 'Custom Hooks'],
    projectUrl: 'https://zakker-ten.vercel.app/',
    points: [
      'Built a full-featured Islamic platform using React 19, React Router, and SCSS, combining a page-based Quran reader (with audio recitation, tafsir, and ayah pinning), an Azkar counter system, and live Islamic radio streaming, integrating 4+ external REST APIs through a centralized data layer.',
      'Designed a smart daily "Wird" (Quran reading plan) engine with automated scheduling, missed-day makeup logic, and progress tracking via custom hooks (useWird, usePin) and localStorage persistence, alongside geolocation-based prayer-time tracking with live countdowns.',
    ],
  },
  {
    id: 'exp-wazifa',
    title: 'Wazifa – Job Board Platform',
    companyOrContext: 'Web Platform Development',
    roleType: 'Professional Experience',
    period: '09/2024 – 10/2024',
    technologies: ['Laravel', 'MySQL', 'Bootstrap', 'JavaScript', 'HTML', 'CSS'],
    projectUrl: 'https://github.com/MostafaEssam2002/wazifa',
    points: [
      'Developed a full-stack Job Board platform using Laravel, MySQL, Bootstrap, JavaScript, HTML, and CSS, connecting employers with job seekers through a scalable recruitment management system.',
      'Implemented core recruitment features including job posting management, resume uploads, application tracking, and advanced search and filtering capabilities to improve job discovery and hiring workflows.',
      'Designed a secure multi-role management system for Employers, Candidates, and Administrators, alongside an admin approval workflow for enhanced platform control and content moderation.',
      'Built a responsive mobile-friendly interface with an integrated notification system, ensuring seamless user experience and real-time engagement across devices.',
    ],
  },
];

export const EDUCATION: EducationItem = {
  degree: "Bachelor's Degree in Computer Science",
  institution: 'Faculty of Electronic Engineering – Menoufia University',
  location: 'Menouf, Egypt',
  period: '2020 – 2025',
  gpa: '3.2',
  details: [
    'Rigorous foundation in Computer Science fundamentals: Object-Oriented Programming (OOP), Data Structures & Algorithms, Database Systems, Computer Networks, and Software Engineering methodologies.',
    'Graduated with cumulative GPA 3.2.',
  ],
};

export const TRAINEE_PROGRAMS: TraineeItem[] = [
  {
    program: 'Full Stack Web Development (PHP Track)',
    institution: 'Information Technology Institute (ITI), Creativa',
    location: 'Menoufia, Egypt',
    period: 'July 2025',
  },
  {
    program: 'Full Stack Web Development (PHP Track)',
    institution: 'Information Technology Institute (ITI), Creativa',
    location: 'Menoufia, Egypt',
    period: 'July 2024',
  },
  {
    program: 'JavaScript Training',
    institution: 'YALLA EXPAND',
    location: 'Egypt',
    period: 'July 2026 – August 2026',
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    title: 'Node.js, Nest.js, PostgreSQL, GraphQL, and Security',
    year: '2026',
  },
];
