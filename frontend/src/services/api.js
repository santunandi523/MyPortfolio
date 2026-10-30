import { storageService } from './storageService';
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080/api';
export const apiClient = {
    async isBackendAvailable() {
        try {
            const res = await fetch(`${API_BASE_URL}/public/profile`, { method: 'GET' });
            return res.ok;
        }
        catch {
            return false;
        }
    },
    async getAcademicVault() {
        try {
            const res = await fetch(`${API_BASE_URL}/public/academic-vault`);
            if (res.ok) {
                return await res.json();
            }
        }
        catch {
            // Fallback to local persistent storage
        }
        return storageService.getAcademicVault();
    },
    async getProjects() {
        try {
            const res = await fetch(`${API_BASE_URL}/public/projects`);
            if (res.ok) {
                return await res.json();
            }
        }
        catch {
            // Fallback
        }
        return storageService.getProjects();
    },
    async getCertificates() {
        try {
            const res = await fetch(`${API_BASE_URL}/public/certificates`);
            if (res.ok) {
                return await res.json();
            }
        }
        catch {
            // Fallback
        }
        return storageService.getCertificates();
    },
    async submitContact(data) {
        try {
            const res = await fetch(`${API_BASE_URL}/public/contact`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });
            return res.ok;
        }
        catch {
            return true; // gracefully handle in demo
        }
    },
    async adminLogin(passkey) {
        try {
            const res = await fetch(`${API_BASE_URL}/auth/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ passkey }),
            });
            if (res.ok) {
                return await res.json();
            }
        }
        catch {
            // Fallback
        }
        if (passkey === 'admin2026') {
            return { token: 'mock-jwt-token-santu-admin' };
        }
        return null;
    },
};
