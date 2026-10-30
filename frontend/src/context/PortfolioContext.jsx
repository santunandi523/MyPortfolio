import React, { createContext, useContext, useState } from 'react';
import { storageService } from '../services/storageService';
const PortfolioContext = createContext(undefined);
export const PortfolioProvider = ({ children }) => {
    const [profile, setProfile] = useState(storageService.getProfile);
    const [academicVault, setAcademicVault] = useState(storageService.getAcademicVault);
    const [codingStats, setCodingStats] = useState(storageService.getCodingStats);
    const [certificates, setCertificates] = useState(storageService.getCertificates);
    const [badges, setBadges] = useState(storageService.getBadges);
    const [projects, setProjects] = useState(storageService.getProjects);
    const [skills, setSkills] = useState(storageService.getSkills);
    // Global modals
    const [activeDocument, setActiveDocument] = useState(null);
    const [isRecruiterViewOpen, setIsRecruiterViewOpen] = useState(false);
    const openDocumentViewer = (doc) => {
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
    const updateProfile = (updated) => {
        setProfile(updated);
        storageService.saveProfile(updated);
    };
    const updateAcademicVault = (updated) => {
        setAcademicVault(updated);
        storageService.saveAcademicVault(updated);
    };
    const updateCodingStats = (updated) => {
        setCodingStats(updated);
        storageService.saveCodingStats(updated);
    };
    const updateCertificates = (updated) => {
        setCertificates(updated);
        storageService.saveCertificates(updated);
    };
    const updateBadges = (updated) => {
        setBadges(updated);
        storageService.saveBadges(updated);
    };
    const updateProjects = (updated) => {
        setProjects(updated);
        storageService.saveProjects(updated);
    };
    const updateSkills = (updated) => {
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
    const importData = (json) => {
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
    return (<PortfolioContext.Provider value={{
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
        }}>
      {children}
    </PortfolioContext.Provider>);
};
export const usePortfolio = () => {
    const context = useContext(PortfolioContext);
    if (!context) {
        throw new Error('usePortfolio must be used within a PortfolioProvider');
    }
    return context;
};
