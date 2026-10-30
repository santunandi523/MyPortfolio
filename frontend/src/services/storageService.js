import { initialProfileData, initialAcademicVault, initialCodingStats, initialCertificates, initialBadges, initialProjects, initialSkills, } from '../data/portfolioData';
const STORAGE_KEYS = {
    PROFILE: 'santu_portfolio_profile_v6',
    ACADEMIC_VAULT: 'santu_portfolio_academic_v6',
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
    getProfile() {
        try {
            const data = localStorage.getItem(STORAGE_KEYS.PROFILE);
            return data ? JSON.parse(data) : initialProfileData;
        }
        catch {
            return initialProfileData;
        }
    },
    saveProfile(profile) {
        localStorage.setItem(STORAGE_KEYS.PROFILE, JSON.stringify(profile));
    },
    getAcademicVault() {
        try {
            const data = localStorage.getItem(STORAGE_KEYS.ACADEMIC_VAULT);
            return data ? JSON.parse(data) : initialAcademicVault;
        }
        catch {
            return initialAcademicVault;
        }
    },
    saveAcademicVault(vault) {
        localStorage.setItem(STORAGE_KEYS.ACADEMIC_VAULT, JSON.stringify(vault));
    },
    getCodingStats() {
        try {
            const data = localStorage.getItem(STORAGE_KEYS.CODING_STATS);
            return data ? JSON.parse(data) : initialCodingStats;
        }
        catch {
            return initialCodingStats;
        }
    },
    saveCodingStats(stats) {
        localStorage.setItem(STORAGE_KEYS.CODING_STATS, JSON.stringify(stats));
    },
    getCertificates() {
        try {
            const data = localStorage.getItem(STORAGE_KEYS.CERTIFICATES);
            return data ? JSON.parse(data) : initialCertificates;
        }
        catch {
            return initialCertificates;
        }
    },
    saveCertificates(certs) {
        localStorage.setItem(STORAGE_KEYS.CERTIFICATES, JSON.stringify(certs));
    },
    getBadges() {
        try {
            const data = localStorage.getItem(STORAGE_KEYS.BADGES);
            return data ? JSON.parse(data) : initialBadges;
        }
        catch {
            return initialBadges;
        }
    },
    saveBadges(badges) {
        localStorage.setItem(STORAGE_KEYS.BADGES, JSON.stringify(badges));
    },
    getProjects() {
        try {
            const data = localStorage.getItem(STORAGE_KEYS.PROJECTS);
            return data ? JSON.parse(data) : initialProjects;
        }
        catch {
            return initialProjects;
        }
    },
    saveProjects(projects) {
        localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(projects));
    },
    getSkills() {
        try {
            const data = localStorage.getItem(STORAGE_KEYS.SKILLS);
            return data ? JSON.parse(data) : initialSkills;
        }
        catch {
            return initialSkills;
        }
    },
    saveSkills(skills) {
        localStorage.setItem(STORAGE_KEYS.SKILLS, JSON.stringify(skills));
    },
    // Auth management
    isAdminAuthenticated() {
        return localStorage.getItem(STORAGE_KEYS.ADMIN_AUTH) === 'true';
    },
    setAdminAuthenticated(auth) {
        if (auth) {
            localStorage.setItem(STORAGE_KEYS.ADMIN_AUTH, 'true');
        }
        else {
            localStorage.removeItem(STORAGE_KEYS.ADMIN_AUTH);
        }
    },
    // Full backup & restore
    exportAllData() {
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
    importAllData(jsonString) {
        try {
            const data = JSON.parse(jsonString);
            if (data.profile)
                this.saveProfile(data.profile);
            if (data.academicVault)
                this.saveAcademicVault(data.academicVault);
            if (data.codingStats)
                this.saveCodingStats(data.codingStats);
            if (data.certificates)
                this.saveCertificates(data.certificates);
            if (data.badges)
                this.saveBadges(data.badges);
            if (data.projects)
                this.saveProjects(data.projects);
            if (data.skills)
                this.saveSkills(data.skills);
            return true;
        }
        catch (e) {
            console.error('Failed to import backup data:', e);
            return false;
        }
    },
    resetToDefaults() {
        localStorage.removeItem(STORAGE_KEYS.PROFILE);
        localStorage.removeItem(STORAGE_KEYS.ACADEMIC_VAULT);
        localStorage.removeItem(STORAGE_KEYS.CODING_STATS);
        localStorage.removeItem(STORAGE_KEYS.CERTIFICATES);
        localStorage.removeItem(STORAGE_KEYS.BADGES);
        localStorage.removeItem(STORAGE_KEYS.PROJECTS);
        localStorage.removeItem(STORAGE_KEYS.SKILLS);
    },
};
