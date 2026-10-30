import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, Unlock, Save, RotateCcw, Download, Upload, CheckCircle2, Terminal, Briefcase, User, GraduationCap, } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';
import { storageService, DEFAULT_ADMIN_PIN } from '../services/storageService';
export const AdminDashboardPage = () => {
    const { profile, updateProfile, academicVault, updateAcademicVault, codingStats, updateCodingStats, certificates, updateCertificates, badges, updateBadges, projects, updateProjects, resetAllData, exportData, importData, } = usePortfolio();
    // Authentication State
    const [isAuthenticated, setIsAuthenticated] = useState(() => storageService.isAdminAuthenticated());
    const [pinInput, setPinInput] = useState('');
    const [authError, setAuthError] = useState('');
    // Active Tab
    const [activeTab, setActiveTab] = useState('profile');
    const [saveSuccessMessage, setSaveSuccessMessage] = useState(null);
    // Form states initialized from context
    const [profileForm, setProfileForm] = useState(profile);
    const [academicForm, setAcademicForm] = useState(academicVault);
    const [codingForm, setCodingForm] = useState(codingStats);
    const [importJsonText, setImportJsonText] = useState('');
    const triggerSaveNotification = (msg) => {
        setSaveSuccessMessage(msg);
        setTimeout(() => setSaveSuccessMessage(null), 3000);
    };
    const handleLogin = (e) => {
        e.preventDefault();
        if (pinInput === DEFAULT_ADMIN_PIN) {
            setIsAuthenticated(true);
            storageService.setAdminAuthenticated(true);
            setAuthError('');
        }
        else {
            setAuthError('Invalid Security Passkey. Default key is: admin2026');
        }
    };
    const handleLogout = () => {
        setIsAuthenticated(false);
        storageService.setAdminAuthenticated(false);
    };
    // Handlers for saves
    const handleSaveProfile = () => {
        updateProfile(profileForm);
        triggerSaveNotification('Profile & Digital Identity updated successfully.');
    };
    const handleSaveAcademic = () => {
        updateAcademicVault(academicForm);
        triggerSaveNotification('Academic records & document visibility saved.');
    };
    const handleSaveCoding = () => {
        updateCodingStats(codingForm);
        triggerSaveNotification('Coding statistics & contest ratings updated.');
    };
    const handleExportBackup = () => {
        const dataStr = exportData();
        const blob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `santu-portfolio-backup-${new Date().toISOString().slice(0, 10)}.json`;
        link.click();
        triggerSaveNotification('JSON data backup successfully downloaded.');
    };
    const handleImportBackup = () => {
        if (!importJsonText.trim())
            return;
        const ok = importData(importJsonText);
        if (ok) {
            setProfileForm(storageService.getProfile());
            setAcademicForm(storageService.getAcademicVault());
            setCodingForm(storageService.getCodingStats());
            triggerSaveNotification('Backup restored into live state successfully.');
            setImportJsonText('');
        }
        else {
            alert('Failed to parse JSON backup. Please ensure valid JSON structure.');
        }
    };
    const handleResetDefaults = () => {
        if (window.confirm('Reset all portfolio data to factory defaults? Any unsaved local edits will be cleared.')) {
            resetAllData();
            setProfileForm(storageService.getProfile());
            setAcademicForm(storageService.getAcademicVault());
            setCodingForm(storageService.getCodingStats());
            triggerSaveNotification('Reset to factory defaults completed.');
        }
    };
    // If not authenticated, render Login Gate
    if (!isAuthenticated) {
        return (<div className="min-h-[75vh] flex items-center justify-center px-4">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="w-full max-w-md bg-[#261329] border-2 border-[#E8EDF2]/20 rounded-3xl p-8 space-y-6 shadow-2xl silver-border-glow text-[#E8EDF2]">
          <div className="text-center space-y-2">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-[#301934] border border-[#F4B942] flex items-center justify-center text-[#F4B942] shadow">
              <Lock className="w-7 h-7"/>
            </div>
            <h1 className="text-2xl font-black font-display text-[#E8EDF2]">Admin Command Center</h1>
            <p className="text-xs text-[#A592AD]">Enter authorized security passkey to manage credentials & documents.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4 text-xs">
            <div className="space-y-1.5">
              <label className="text-[#E8EDF2] font-semibold block">Security Passkey</label>
              <input type="password" placeholder="Enter passkey (e.g. admin2026)" value={pinInput} onChange={(e) => setPinInput(e.target.value)} className="w-full bg-[#1A0A1C] border border-[#E8EDF2]/15 rounded-xl px-4 py-3 text-sm text-[#E8EDF2] focus:outline-none focus:border-[#F4B942]"/>
              {authError && <p className="text-rose-400 text-xs mt-1">{authError}</p>}
            </div>

            <button type="submit" className="w-full py-3 rounded-xl text-xs font-bold bg-[#F4B942] text-[#301934] hover:bg-[#ffc957] transition-all flex items-center justify-center gap-2 shadow marigold-glow">
              <Unlock className="w-4 h-4"/>
              <span>Authenticate & Enter Dashboard</span>
            </button>
          </form>

          <div className="text-center text-[11px] text-[#A592AD] pt-2 border-t border-[#E8EDF2]/10">
            Default configured passkey: <code className="text-[#F4B942] bg-[#160A18] px-1.5 py-0.5 rounded font-mono">admin2026</code>
          </div>
        </motion.div>
      </div>);
    }
    return (<div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10 text-[#E8EDF2]">
      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E8EDF2]/15">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono uppercase font-bold text-[#F4B942] bg-[#301934] px-2.5 py-0.5 rounded border border-[#F4B942]/30">
              Admin Session Active
            </span>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          </div>
          <h1 className="text-3xl font-black font-display text-[#E8EDF2] mt-1">
            Admin Management Center
          </h1>
          <p className="text-xs text-[#A592AD]">
            Modify projects, academic marks, visibility rules, and credentials without editing source code.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button onClick={handleLogout} className="px-4 py-2 rounded-xl text-xs font-semibold bg-[#261329] border border-[#E8EDF2]/20 hover:text-rose-400 transition-colors">
            Lock Session
          </button>
        </div>
      </div>

      {/* Notification Toast */}
      {saveSuccessMessage && (<div className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-4 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 shadow">
          <CheckCircle2 className="w-4 h-4"/>
          <span>{saveSuccessMessage}</span>
        </div>)}

      {/* Tabs Row */}
      <div className="flex flex-wrap gap-2 border-b border-[#E8EDF2]/15 pb-3">
        {[
            { id: 'profile', label: 'Profile & Status', icon: User },
            { id: 'academic', label: 'Academic Vault & Visibility', icon: GraduationCap },
            { id: 'coding', label: 'Coding Stats & Badges', icon: Terminal },
            { id: 'projects', label: 'Projects Overview', icon: Briefcase },
            { id: 'backup', label: 'Export / Import Backup', icon: Save },
        ].map((tab) => {
            const Icon = tab.icon;
            return (<button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 border ${activeTab === tab.id
                    ? 'bg-[#F4B942] text-[#301934] border-[#F4B942] shadow'
                    : 'bg-[#261329] text-[#E8EDF2]/80 border-[#E8EDF2]/10 hover:border-[#F4B942]/40'}`}>
              <Icon className="w-3.5 h-3.5"/>
              <span>{tab.label}</span>
            </button>);
        })}
      </div>

      {/* Tab 1: Profile & Identity */}
      {activeTab === 'profile' && (<div className="rounded-2xl bg-[#261329] border border-[#E8EDF2]/15 p-6 md:p-8 space-y-6">
          <div className="flex items-center justify-between border-b border-[#E8EDF2]/10 pb-4">
            <h2 className="text-lg font-bold text-[#E8EDF2]">Personal Identity & Headline Settings</h2>
            <button onClick={handleSaveProfile} className="px-5 py-2 rounded-xl text-xs font-bold bg-[#F4B942] text-[#301934] hover:bg-[#ffc957] transition-all flex items-center gap-1.5 shadow">
              <Save className="w-4 h-4"/>
              <span>Save Profile Changes</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="space-y-1.5">
              <label className="font-semibold block">Full Name</label>
              <input type="text" value={profileForm.name} onChange={(e) => setProfileForm({ ...profileForm, name: e.target.value })} className="w-full bg-[#1A0A1C] border border-[#E8EDF2]/15 rounded-xl p-3 focus:outline-none focus:border-[#F4B942]"/>
            </div>

            <div className="space-y-1.5">
              <label className="font-semibold block">Professional Title</label>
              <input type="text" value={profileForm.title} onChange={(e) => setProfileForm({ ...profileForm, title: e.target.value })} className="w-full bg-[#1A0A1C] border border-[#E8EDF2]/15 rounded-xl p-3 focus:outline-none focus:border-[#F4B942]"/>
            </div>

            <div className="space-y-1.5 sm:col-span-2">
              <label className="font-semibold block">Recruitment Availability Status Indicator</label>
              <input type="text" value={profileForm.status} onChange={(e) => setProfileForm({ ...profileForm, status: e.target.value })} className="w-full bg-[#1A0A1C] border border-[#E8EDF2]/15 rounded-xl p-3 focus:outline-none focus:border-[#F4B942]"/>
            </div>

            <div className="space-y-1.5 sm:col-span-2">
              <label className="font-semibold block">Executive Bio</label>
              <textarea rows={3} value={profileForm.bio} onChange={(e) => setProfileForm({ ...profileForm, bio: e.target.value })} className="w-full bg-[#1A0A1C] border border-[#E8EDF2]/15 rounded-xl p-3 focus:outline-none focus:border-[#F4B942]"/>
            </div>

            <div className="space-y-1.5">
              <label className="font-semibold block">Email</label>
              <input type="email" value={profileForm.email} onChange={(e) => setProfileForm({ ...profileForm, email: e.target.value })} className="w-full bg-[#1A0A1C] border border-[#E8EDF2]/15 rounded-xl p-3 focus:outline-none focus:border-[#F4B942]"/>
            </div>

            <div className="space-y-1.5">
              <label className="font-semibold block">Phone</label>
              <input type="text" value={profileForm.phone} onChange={(e) => setProfileForm({ ...profileForm, phone: e.target.value })} className="w-full bg-[#1A0A1C] border border-[#E8EDF2]/15 rounded-xl p-3 focus:outline-none focus:border-[#F4B942]"/>
            </div>

            <div className="space-y-1.5">
              <label className="font-semibold block">LinkedIn Profile URL</label>
              <input type="text" value={profileForm.socials.linkedin} onChange={(e) => setProfileForm({
                ...profileForm,
                socials: { ...profileForm.socials, linkedin: e.target.value },
            })} className="w-full bg-[#1A0A1C] border border-[#E8EDF2]/15 rounded-xl p-3 focus:outline-none focus:border-[#F4B942]"/>
            </div>

            <div className="space-y-1.5">
              <label className="font-semibold block">GitHub Profile URL</label>
              <input type="text" value={profileForm.socials.github} onChange={(e) => setProfileForm({
                ...profileForm,
                socials: { ...profileForm.socials, github: e.target.value },
            })} className="w-full bg-[#1A0A1C] border border-[#E8EDF2]/15 rounded-xl p-3 focus:outline-none focus:border-[#F4B942]"/>
            </div>

            <div className="space-y-1.5">
              <label className="font-semibold block">LeetCode Profile URL</label>
              <input type="text" value={profileForm.socials.leetcode} onChange={(e) => setProfileForm({
                ...profileForm,
                socials: { ...profileForm.socials, leetcode: e.target.value },
            })} className="w-full bg-[#1A0A1C] border border-[#E8EDF2]/15 rounded-xl p-3 focus:outline-none focus:border-[#F4B942]"/>
            </div>

            <div className="space-y-1.5">
              <label className="font-semibold block">Codolio Profile URL</label>
              <input type="text" value={profileForm.socials.codolio} onChange={(e) => setProfileForm({
                ...profileForm,
                socials: { ...profileForm.socials, codolio: e.target.value },
            })} className="w-full bg-[#1A0A1C] border border-[#E8EDF2]/15 rounded-xl p-3 focus:outline-none focus:border-[#F4B942]"/>
            </div>
          </div>
        </div>)}

      {/* Tab 2: Academic Vault & Document Privacy */}
      {activeTab === 'academic' && (<div className="rounded-2xl bg-[#261329] border border-[#E8EDF2]/15 p-6 md:p-8 space-y-6">
          <div className="flex items-center justify-between border-b border-[#E8EDF2]/10 pb-4">
            <div>
              <h2 className="text-lg font-bold text-[#E8EDF2]">Academic Records & Document Permissions</h2>
              <p className="text-xs text-[#A592AD]">Configure CGPA, percentages, and document visibility (Public vs Redacted).</p>
            </div>
            <button onClick={handleSaveAcademic} className="px-5 py-2 rounded-xl text-xs font-bold bg-[#F4B942] text-[#301934] hover:bg-[#ffc957] transition-all flex items-center gap-1.5 shadow">
              <Save className="w-4 h-4"/>
              <span>Save Academic Records</span>
            </button>
          </div>

          <div className="space-y-6">
            {academicForm.map((rec, idx) => (<div key={rec.id} className="p-5 rounded-xl bg-[#1A0A1C] border border-[#E8EDF2]/10 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm text-[#F4B942]">{rec.title}</span>
                  <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-[#301934] text-[#E8EDF2]">
                    {rec.level}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div className="space-y-1">
                    <label className="text-[#A592AD] font-semibold block">{rec.scoreLabel}</label>
                    <input type="text" value={rec.scoreValue} onChange={(e) => {
                    const copy = [...academicForm];
                    copy[idx].scoreValue = e.target.value;
                    setAcademicForm(copy);
                }} className="w-full bg-[#261329] border border-[#E8EDF2]/15 rounded-lg p-2 font-mono font-bold text-[#F4B942]"/>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[#A592AD] font-semibold block">Passing / Expected Year</label>
                    <input type="text" value={rec.passingYear} onChange={(e) => {
                    const copy = [...academicForm];
                    copy[idx].passingYear = e.target.value;
                    setAcademicForm(copy);
                }} className="w-full bg-[#261329] border border-[#E8EDF2]/15 rounded-lg p-2 text-[#E8EDF2]"/>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[#A592AD] font-semibold block">Document Visibility Mode</label>
                    <select value={rec.visibility} onChange={(e) => {
                    const copy = [...academicForm];
                    copy[idx].visibility = e.target.value;
                    setAcademicForm(copy);
                }} className="w-full bg-[#261329] border border-[#E8EDF2]/15 rounded-lg p-2 text-[#E8EDF2]">
                      <option value="public">Public (Full Document Preview)</option>
                      <option value="redacted">Redacted (Sensory Redaction Bar)</option>
                      <option value="private">Private (Restricted Access)</option>
                    </select>
                  </div>
                </div>
              </div>))}
          </div>
        </div>)}

      {/* Tab 3: Coding Stats */}
      {activeTab === 'coding' && (<div className="rounded-2xl bg-[#261329] border border-[#E8EDF2]/15 p-6 md:p-8 space-y-6">
          <div className="flex items-center justify-between border-b border-[#E8EDF2]/10 pb-4">
            <div>
              <h2 className="text-lg font-bold text-[#E8EDF2]">Coding Platform Ratings & Solved Problems</h2>
              <p className="text-xs text-[#A592AD]">Never fabricate rankings; update verified statistics with timestamps.</p>
            </div>
            <button onClick={handleSaveCoding} className="px-5 py-2 rounded-xl text-xs font-bold bg-[#F4B942] text-[#301934] hover:bg-[#ffc957] transition-all flex items-center gap-1.5 shadow">
              <Save className="w-4 h-4"/>
              <span>Save Coding Stats</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            {codingForm.map((stat, idx) => (<div key={stat.id} className="p-4 rounded-xl bg-[#1A0A1C] border border-[#E8EDF2]/10 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm text-[#E8EDF2]">{stat.platform}</span>
                  <span className="font-mono text-xs text-[#A592AD]">@{stat.username}</span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="space-y-1">
                    <label className="text-[#A592AD] text-[11px] block">Contest Rating</label>
                    <input type="number" value={stat.rating || ''} onChange={(e) => {
                    const copy = [...codingForm];
                    copy[idx].rating = Number(e.target.value);
                    setCodingForm(copy);
                }} className="w-full bg-[#261329] border border-[#E8EDF2]/15 rounded-lg p-2 font-mono font-bold text-[#F4B942]"/>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[#A592AD] text-[11px] block">Problems Solved</label>
                    <input type="number" value={stat.problemsSolved} onChange={(e) => {
                    const copy = [...codingForm];
                    copy[idx].problemsSolved = Number(e.target.value);
                    setCodingForm(copy);
                }} className="w-full bg-[#261329] border border-[#E8EDF2]/15 rounded-lg p-2 font-mono font-bold text-[#E8EDF2]"/>
                  </div>
                </div>
              </div>))}
          </div>
        </div>)}

      {/* Tab 4: Projects */}
      {activeTab === 'projects' && (<div className="rounded-2xl bg-[#261329] border border-[#E8EDF2]/15 p-6 md:p-8 space-y-6">
          <div className="border-b border-[#E8EDF2]/10 pb-4">
            <h2 className="text-lg font-bold text-[#E8EDF2]">Flagship Project Details</h2>
            <p className="text-xs text-[#A592AD]">Review production system metadata and case studies.</p>
          </div>

          <div className="space-y-4 text-xs">
            {projects.map((proj) => (<div key={proj.id} className="p-4 rounded-xl bg-[#1A0A1C] border border-[#E8EDF2]/10 space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-sm text-[#E8EDF2]">{proj.title}</h4>
                  <span className="font-mono text-xs text-[#F4B942]">{proj.status}</span>
                </div>
                <p className="text-[#A592AD] text-xs">{proj.tagline}</p>
                <div className="pt-2 flex items-center justify-between text-[11px]">
                  <span className="text-[#A592AD]">GitHub: {proj.githubUrl}</span>
                  <a href={`/projects/${proj.slug}`} className="text-[#F4B942] hover:underline font-bold">
                    View Case Study
                  </a>
                </div>
              </div>))}
          </div>
        </div>)}

      {/* Tab 5: Backup & Restore */}
      {activeTab === 'backup' && (<div className="rounded-2xl bg-[#261329] border border-[#E8EDF2]/15 p-6 md:p-8 space-y-6">
          <div className="border-b border-[#E8EDF2]/10 pb-4">
            <h2 className="text-lg font-bold text-[#E8EDF2]">Portfolio State Backup & Disaster Recovery</h2>
            <p className="text-xs text-[#A592AD]">
              Export the entire website configuration to an immutable JSON file, import a backup, or restore initial factory settings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
            {/* Export Card */}
            <div className="p-5 rounded-xl bg-[#1A0A1C] border border-[#E8EDF2]/10 space-y-3">
              <h3 className="font-bold text-sm text-[#E8EDF2] flex items-center gap-1.5">
                <Download className="w-4 h-4 text-[#F4B942]"/> Export Live State to JSON
              </h3>
              <p className="text-[#A592AD]">
                Save all current profile settings, academic marksheets, coding numbers, and projects to a backup JSON file on your machine.
              </p>
              <button onClick={handleExportBackup} className="px-4 py-2.5 rounded-xl text-xs font-bold bg-[#F4B942] text-[#301934] hover:bg-[#ffc957] transition-all flex items-center gap-1.5 shadow">
                <Download className="w-3.5 h-3.5"/>
                <span>Export JSON Backup File</span>
              </button>
            </div>

            {/* Reset Defaults Card */}
            <div className="p-5 rounded-xl bg-[#1A0A1C] border border-[#E8EDF2]/10 space-y-3">
              <h3 className="font-bold text-sm text-rose-400 flex items-center gap-1.5">
                <RotateCcw className="w-4 h-4"/> Reset Factory Defaults
              </h3>
              <p className="text-[#A592AD]">
                Clear all custom local changes and reload the verified authentic default dataset (850+ DSA, 1660 LeetCode, CU 8.25 CGPA, WB 94.14%).
              </p>
              <button onClick={handleResetDefaults} className="px-4 py-2.5 rounded-xl text-xs font-bold bg-rose-600 text-white hover:bg-rose-700 transition-all flex items-center gap-1.5 shadow">
                <RotateCcw className="w-3.5 h-3.5"/>
                <span>Reset to Factory Defaults</span>
              </button>
            </div>
          </div>

          {/* Import JSON Text */}
          <div className="p-5 rounded-xl bg-[#1A0A1C] border border-[#E8EDF2]/10 space-y-3 text-xs">
            <h3 className="font-bold text-sm text-[#E8EDF2] flex items-center gap-1.5">
              <Upload className="w-4 h-4 text-[#F4B942]"/> Restore from JSON Backup
            </h3>
            <textarea rows={4} placeholder="Paste valid portfolio backup JSON string here..." value={importJsonText} onChange={(e) => setImportJsonText(e.target.value)} className="w-full bg-[#261329] border border-[#E8EDF2]/15 rounded-xl p-3 font-mono text-[11px] text-[#E8EDF2] focus:outline-none focus:border-[#F4B942]"/>
            <button onClick={handleImportBackup} disabled={!importJsonText.trim()} className="px-4 py-2 rounded-xl text-xs font-bold bg-[#301934] text-[#E8EDF2] border border-[#E8EDF2]/20 hover:border-[#F4B942] transition-all disabled:opacity-40">
              Parse & Restore Backup
            </button>
          </div>
        </div>)}
    </div>);
};
