import {
  ProfileInfo,
  AcademicRecord,
  CodingPlatformStat,
  CertificateItem,
  AchievementBadge,
  ProjectDetail,
  SkillGroup,
} from '../types';
import {
  initialProfileData,
  initialAcademicVault,
  initialCodingStats,
  initialCertificates,
  initialBadges,
  initialProjects,
  initialSkills,
} from '../data/portfolioData';

const STORAGE_KEYS = {
  PROFILE: 'santu_portfolio_profile_v5',
  ACADEMIC_VAULT: 'santu_portfolio_academic_v5',
  CODING_STATS: 'santu_portfolio_coding_v5',
  CERTIFICATES: 'santu_portfolio_certs_v5',
  BADGES: 'santu_portfolio_badges_v5',
  PROJECTS: 'santu_portfolio_projects_v5',
  SKILLS: 'santu_portfolio_skills_v5',
  ADMIN_AUTH: 'santu_portfolio_admin_auth',
};

// Admin default passkey
export const DEFAULT_ADMIN_PIN = 'admin2026';

export const storageService = {
  getProfile(): ProfileInfo {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.PROFILE);
      return data ? JSON.parse(data) : initialProfileData;
    } catch {
      return initialProfileData;
    }
  },

  saveProfile(profile: ProfileInfo): void {
    localStorage.setItem(STORAGE_KEYS.PROFILE, JSON.stringify(profile));
  },

  getAcademicVault(): AcademicRecord[] {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.ACADEMIC_VAULT);
      return data ? JSON.parse(data) : initialAcademicVault;
    } catch {
      return initialAcademicVault;
    }
  },

  saveAcademicVault(vault: AcademicRecord[]): void {
    localStorage.setItem(STORAGE_KEYS.ACADEMIC_VAULT, JSON.stringify(vault));
  },

  getCodingStats(): CodingPlatformStat[] {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.CODING_STATS);
      return data ? JSON.parse(data) : initialCodingStats;
    } catch {
      return initialCodingStats;
    }
  },

  saveCodingStats(stats: CodingPlatformStat[]): void {
    localStorage.setItem(STORAGE_KEYS.CODING_STATS, JSON.stringify(stats));
  },

  getCertificates(): CertificateItem[] {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.CERTIFICATES);
      return data ? JSON.parse(data) : initialCertificates;
    } catch {
      return initialCertificates;
    }
  },

  saveCertificates(certs: CertificateItem[]): void {
    localStorage.setItem(STORAGE_KEYS.CERTIFICATES, JSON.stringify(certs));
  },

  getBadges(): AchievementBadge[] {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.BADGES);
      return data ? JSON.parse(data) : initialBadges;
    } catch {
      return initialBadges;
    }
  },

  saveBadges(badges: AchievementBadge[]): void {
    localStorage.setItem(STORAGE_KEYS.BADGES, JSON.stringify(badges));
  },

  getProjects(): ProjectDetail[] {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.PROJECTS);
      return data ? JSON.parse(data) : initialProjects;
    } catch {
      return initialProjects;
    }
  },

  saveProjects(projects: ProjectDetail[]): void {
    localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(projects));
  },

  getSkills(): SkillGroup[] {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.SKILLS);
      return data ? JSON.parse(data) : initialSkills;
    } catch {
      return initialSkills;
    }
  },

  saveSkills(skills: SkillGroup[]): void {
    localStorage.setItem(STORAGE_KEYS.SKILLS, JSON.stringify(skills));
  },

  // Auth management
  isAdminAuthenticated(): boolean {
    return localStorage.getItem(STORAGE_KEYS.ADMIN_AUTH) === 'true';
  },

  setAdminAuthenticated(auth: boolean): void {
    if (auth) {
      localStorage.setItem(STORAGE_KEYS.ADMIN_AUTH, 'true');
    } else {
      localStorage.removeItem(STORAGE_KEYS.ADMIN_AUTH);
    }
  },

  // Full backup & restore
  exportAllData(): string {
    const backup = {
      profile: this.getProfile(),
      academicVault: this.getAcademicVault(),
      codingStats: this.getCodingStats(),
      certificates: this.getCertificates(),
      badges: this.getBadges(),
      projects: this.getProjects(),
      skills: this.getSkills(),
      exportedAt: new Date().toISOString(),
    };
    return JSON.stringify(backup, null, 2);
  },

  importAllData(jsonString: string): boolean {
    try {
      const data = JSON.parse(jsonString);
      if (data.profile) this.saveProfile(data.profile);
      if (data.academicVault) this.saveAcademicVault(data.academicVault);
      if (data.codingStats) this.saveCodingStats(data.codingStats);
      if (data.certificates) this.saveCertificates(data.certificates);
      if (data.badges) this.saveBadges(data.badges);
      if (data.projects) this.saveProjects(data.projects);
      if (data.skills) this.saveSkills(data.skills);
      return true;
    } catch (e) {
      console.error('Failed to import backup data:', e);
      return false;
    }
  },

  resetToDefaults(): void {
    localStorage.removeItem(STORAGE_KEYS.PROFILE);
    localStorage.removeItem(STORAGE_KEYS.ACADEMIC_VAULT);
    localStorage.removeItem(STORAGE_KEYS.CODING_STATS);
    localStorage.removeItem(STORAGE_KEYS.CERTIFICATES);
    localStorage.removeItem(STORAGE_KEYS.BADGES);
    localStorage.removeItem(STORAGE_KEYS.PROJECTS);
    localStorage.removeItem(STORAGE_KEYS.SKILLS);
  },
};
