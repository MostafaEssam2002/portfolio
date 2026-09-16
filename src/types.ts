export interface Project {
  id: string;
  title: string;
  subtitle: string;
  role: string;
  period: string;
  type: 'Freelance' | 'Professional Experience' | 'Platform';
  category: 'NestJS' | 'Laravel' | 'React' | 'Python' | 'Full-Stack';
  summary: string;
  technologies: string[];
  metrics: { label: string; value: string }[];
  bulletPoints: string[];
  architectureDetails?: {
    databaseEntities?: string;
    apiEndpoints?: string;
    security?: string;
    realtime?: string;
    optimization?: string;
  };
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  skills: string[];
}

export interface ExperienceItem {
  id: string;
  title: string;
  companyOrContext: string;
  roleType: 'Freelance' | 'Professional Experience';
  period: string;
  technologies: string[];
  points: string[];
  projectUrl?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  gpa?: string;
  details?: string[];
}

export interface TraineeItem {
  program: string;
  institution: string;
  location: string;
  period: string;
}

export interface CertificationItem {
  title: string;
  year: string;
}
