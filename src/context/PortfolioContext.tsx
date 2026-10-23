import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  ProfileInfo,
  AcademicRecord,
  CodingPlatformStat,
  CertificateItem,
  AchievementBadge,
  ProjectDetail,
  SkillGroup,
} from '../types';
import { storageService } from '../services/storageService';

interface PortfolioContextType {
  profile: ProfileInfo;
  academicVault: AcademicRecord[];
  codingStats: CodingPlatformStat[];
  certificates: CertificateItem[];
  badges: AchievementBadge[];
  projects: ProjectDetail[];
  skills: SkillGroup[];
  activeDocument: AcademicRecord | CertificateItem | null;
  openDocumentViewer: (doc: AcademicRecord | CertificateItem) => void;
  closeDocumentViewer: () => void;
  isRecruiterViewOpen: boolean;
  openRecruiterView: () => void;
  closeRecruiterView: () => void;
  updateProfile: (updated: ProfileInfo) => void;
  updateAcademicVault: (updated: AcademicRecord[]) => void;
  updateCodingStats: (updated: CodingPlatformStat[]) => void;
  updateCertificates: (updated: CertificateItem[]) => void;
  updateBadges: (updated: AchievementBadge[]) => void;
  updateProjects: (updated: ProjectDetail[]) => void;
  updateSkills: (updated: SkillGroup[]) => void;
  resetAllData: () => void;
  exportData: () => string;
  importData: (json: string) => boolean;
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export const PortfolioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [profile, setProfile] = useState<ProfileInfo>(storageService.getProfile);
  const [academicVault, setAcademicVault] = useState<AcademicRecord[]>(storageService.getAcademicVault);
  const [codingStats, setCodingStats] = useState<CodingPlatformStat[]>(storageService.getCodingStats);
  const [certificates, setCertificates] = useState<CertificateItem[]>(storageService.getCertificates);
  const [badges, setBadges] = useState<AchievementBadge[]>(storageService.getBadges);
  const [projects, setProjects] = useState<ProjectDetail[]>(storageService.getProjects);
  const [skills, setSkills] = useState<SkillGroup[]>(storageService.getSkills);

  // Global modals
  const [activeDocument, setActiveDocument] = useState<AcademicRecord | CertificateItem | null>(null);
  const [isRecruiterViewOpen, setIsRecruiterViewOpen] = useState(false);

  const openDocumentViewer = (doc: AcademicRecord | CertificateItem) => {
    setActiveDocument(doc);
  };

  const closeDocumentViewer = () => {
    setActiveDocument(null);
  };

  const openRecruiterView = () => {
    setIsRecruiterViewOpen(true);
  };

  const closeRecruiterView = () => {
    setIsRecruiterViewOpen(false);
  };

  const updateProfile = (updated: ProfileInfo) => {
    setProfile(updated);
    storageService.saveProfile(updated);
  };

  const updateAcademicVault = (updated: AcademicRecord[]) => {
    setAcademicVault(updated);
    storageService.saveAcademicVault(updated);
  };

  const updateCodingStats = (updated: CodingPlatformStat[]) => {
    setCodingStats(updated);
    storageService.saveCodingStats(updated);
  };

  const updateCertificates = (updated: CertificateItem[]) => {
    setCertificates(updated);
    storageService.saveCertificates(updated);
  };

  const updateBadges = (updated: AchievementBadge[]) => {
    setBadges(updated);
    storageService.saveBadges(updated);
  };

  const updateProjects = (updated: ProjectDetail[]) => {
    setProjects(updated);
    storageService.saveProjects(updated);
  };

  const updateSkills = (updated: SkillGroup[]) => {
    setSkills(updated);
    storageService.saveSkills(updated);
  };

  const resetAllData = () => {
    storageService.resetToDefaults();
    setProfile(storageService.getProfile());
    setAcademicVault(storageService.getAcademicVault());
    setCodingStats(storageService.getCodingStats());
    setCertificates(storageService.getCertificates());
    setBadges(storageService.getBadges());
    setProjects(storageService.getProjects());
    setSkills(storageService.getSkills());
  };

  const exportData = () => storageService.exportAllData();

  const importData = (json: string) => {
    const success = storageService.importAllData(json);
    if (success) {
      setProfile(storageService.getProfile());
      setAcademicVault(storageService.getAcademicVault());
      setCodingStats(storageService.getCodingStats());
      setCertificates(storageService.getCertificates());
      setBadges(storageService.getBadges());
      setProjects(storageService.getProjects());
      setSkills(storageService.getSkills());
    }
    return success;
  };

  return (
    <PortfolioContext.Provider
      value={{
        profile,
        academicVault,
        codingStats,
        certificates,
        badges,
        projects,
        skills,
        activeDocument,
        openDocumentViewer,
        closeDocumentViewer,
        isRecruiterViewOpen,
        openRecruiterView,
        closeRecruiterView,
        updateProfile,
        updateAcademicVault,
        updateCodingStats,
        updateCertificates,
        updateBadges,
        updateProjects,
        updateSkills,
        resetAllData,
        exportData,
        importData,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
};
