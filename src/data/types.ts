export type TechSkills = {
  core: string[];
  architecture: string[];
  stateData: string[];
  uiUx: string[];
  infraTesting: string[];
  aiProductivity: string[];
};

export type Experience = {
  timeline: string;
  role: string;
  company: string;
  location: string;
  link: string;
  description: string[];
  tags: string[];
};

export type Project = {
  link?: string;
  thumbnail?: string;
  title: string;
  summary: string;
  challenges: string[];
  tags: string[];
};
