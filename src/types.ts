export interface Project {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  highlights: string[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
  skills: string[];
}

export interface Certificate {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialUrl: string;
  iconName: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100 for dynamic animation, though we show chips
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: string;
}

export interface GitHubStats {
  username: string;
  name: string;
  avatarUrl: string;
  bio: string;
  publicRepos: number;
  followers: number;
  following: number;
  createdAt: string;
  languages: { name: string; percentage: number; color: string }[];
  stats: {
    totalStars: number;
    totalCommits: number;
    totalPRs: number;
    contributions: number;
  };
  calendar?: {
    date: string;
    count: number;
    level: number;
  }[];
  streaks?: {
    currentStreak: number;
    longestStreak: number;
  };
}
