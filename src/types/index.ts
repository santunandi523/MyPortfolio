export interface ProfileInfo {
  name: string;
  title: string;
  role: string;
  institution: string;
  location: string;
  bio: string;
  detailedBio: string;
  status: string;
  isAvailableForHire: boolean;
  avatarUrl: string;
  email: string;
  phone: string;
  socials: {
    github: string;
    linkedin: string;
    leetcode: string;
    codolio: string;
    codeforces?: string;
    codechef?: string;
    geeksforgeeks?: string;
    hackerrank?: string;
  };
  keyStats: {
    dsaSolved: number;
    leetcodeRating: number;
    universityCgpa: number;
    class10Percentage: number;
    class12Percentage: number;
    verifiedCertificates: number;
    productionProjects: number;
  };
}

export type DocumentVisibility = 'public' | 'redacted' | 'private';

export interface AcademicRecord {
  id: string;
  level: 'class10' | 'class12' | 'university';
  title: string;
  institution: string;
  boardOrUniversity: string;
  scoreLabel: string;
  scoreValue: string;
  passingYear: string;
  duration?: string;
  location: string;
  highlights: string[];
  documentTitle: string;
  documentType: string;
  documentSize: string;
  visibility: DocumentVisibility;
  isVerified: boolean;
  verificationHash: string;
  issueDate: string;
  previewUrl: string;
  downloadAuthorized: boolean;
  subjectScores?: { subject: string; score: string; maxScore?: string; grade?: string }[];
  semesterTimeline?: {
    semester: string;
    sgpa: string;
    cgpa: string;
    credits: number;
    keySubjects: string[];
    status: 'completed' | 'in-progress' | 'upcoming';
  }[];
}

export interface CodingPlatformStat {
  id: string;
  platform: 'LeetCode' | 'Codeforces' | 'CodeChef' | 'GeeksforGeeks' | 'HackerRank' | 'Codolio';
  username: string;
  profileUrl: string;
  rating?: number;
  ratingTier?: string;
  globalRank?: string;
  problemsSolved: number;
  streakDays?: number;
  contestsCount?: number;
  badgesCount?: number;
  lastUpdated: string;
  isVerified: boolean;
  topicBreakdown?: { topic: string; solved: number }[];
  badges?: {
    title: string;
    icon: string;
    description: string;
    dateEarned: string;
  }[];
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  expirationDate?: string;
  credentialId?: string;
  verificationUrl?: string;
  category: 'Java & Spring Boot' | 'Data Structures & Algorithms' | 'Competitive Programming' | 'Web Development' | 'Artificial Intelligence' | 'Cloud & DevOps' | 'Database Systems' | 'Academic Board Qualifications' | 'Other';
  skills: string[];
  thumbnailUrl: string;
  documentUrl: string;
  isVerified: boolean;
  downloadAuthorized: boolean;
}

export interface AchievementBadge {
  id: string;
  title: string;
  issuer: string;
  category: 'coding' | 'contest' | 'academic' | 'project' | 'open-source';
  dateEarned: string;
  description: string;
  verificationUrl?: string;
  connectedSkills: string[];
  connectedProjects: string[];
  isHighlight: boolean;
}

export interface ProjectDetail {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  featured: boolean;
  category: string;
  status: 'Production Ready' | 'Active Development' | 'Prototype';
  role: string;
  duration: string;
  githubUrl: string;
  liveUrl?: string;
  technologies: string[];
  overview: string;
  problemStatement: string;
  solution: string;
  architectureDescription: string;
  architectureComponents: {
    layer: string;
    tech: string;
    description: string;
  }[];
  keyFeatures: {
    title: string;
    description: string;
    iconName: string;
  }[];
  engineeringDecisions: {
    decision: string;
    rationale: string;
    alternativesConsidered: string;
  }[];
  challengesAndLearnings: {
    challenge: string;
    resolution: string;
  }[];
  screenshots: {
    title: string;
    description: string;
    caption: string;
  }[];
}

export interface SkillGroup {
  category: string;
  description: string;
  skills: {
    name: string;
    level: 'Core' | 'Advanced' | 'Intermediate' | 'Familiar';
    experience: string;
    linkedProjects: string[];
    iconName?: string;
  }[];
}
