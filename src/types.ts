export type TabType = 'home' | 'about' | 'articles' | 'projects';

export interface WorkExperience {
  id: string;
  company: string;
  role: string;
  period: string;
  location?: string;
  highlights: string[];
  color: string;
}

export interface Education {
  school: string;
  degree: string;
  major: string;
  period: string;
  description: string;
}

export interface SkillItem {
  name: string;
  category: 'office' | 'procurement' | 'ai' | 'admin' | 'design';
  level: number; // 0 - 100
  desc: string;
  iconName: string;
  color: string;
}

export interface Article {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  summary: string;
  content: string;
  coverColor: string;
  likes: number;
  tags: string[];
  featured?: boolean;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  period: string;
  role: string;
  summary: string;
  details: string[];
  metrics?: string;
  tools: string[];
  badgeColor: string;
  featured?: boolean;
  coverImageSvgType?: 'procurement' | 'design' | 'homestay' | 'ai' | 'teaching';
}

export interface ContactMessage {
  name: string;
  email: string;
  message: string;
  subject: string;
  date: string;
}
