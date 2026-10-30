import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Mail, GraduationCap, Briefcase, Terminal, ExternalLink, Phone, CheckCircle2, Copy, Eye, } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons/BrandIcons';
import { usePortfolio } from '../context/PortfolioContext';
export const RecruiterQuickViewModal = () => {
    const { isRecruiterViewOpen, closeRecruiterView, profile, projects, academicVault, openDocumentViewer, } = usePortfolio();
    const [copied, setCopied] = React.useState(false);
    if (!isRecruiterViewOpen)
        return null;
    const handleCopyEmail = () => {
        navigator.clipboard.writeText(profile.email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
    };
    const handleOpenDoc = (level) => {
        const doc = academicVault.find((r) => r.level === level);
        if (doc) {
            closeRecruiterView();
            setTimeout(() => {
                openDocumentViewer(doc);
            }, 150);
        }
    };
    return (<AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8 bg-black/80 backdrop-blur-md overflow-hidden">
        <motion.div initial={{ opacity: 0, scale: 0.94, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.94, y: 20 }} transition={{ duration: 0.25 }} className="relative w-full max-w-4xl max-h-[92vh] bg-[#1E0F21] rounded-2xl border border-[#E8EDF2]/20 shadow-2xl flex flex-col overflow-hidden text-[#E8EDF2]">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 bg-[#261329] border-b border-[#E8EDF2]/10">
            <div>
              <h3 className="font-bold text-base text-[#E8EDF2]">Candidate Overview</h3>
              <p className="text-xs text-[#A592AD]">Key education, technologies, flagship projects, and contact channels</p>
            </div>

            <button onClick={closeRecruiterView} className="p-1.5 rounded-md text-[#A592AD] hover:text-[#E8EDF2] hover:bg-[#E8EDF2]/10 transition-colors">
              <X className="w-5 h-5"/>
            </button>
          </div>

          {/* Modal Body */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {/* Identity & Availability Hero Strip */}
            <div className="p-4 rounded-xl bg-[#261329] border border-[#E8EDF2]/10 flex flex-wrap items-center justify-between gap-4">
              <div>
                <h4 className="text-xl font-extrabold text-[#E8EDF2] flex items-center gap-2">
                  {profile.name}
                  <span className="text-xs font-normal text-[#F4B942] border border-[#F4B942]/30 px-2 py-0.5 rounded-full">
                    Java Full Stack
                  </span>
                </h4>
                <p className="text-xs text-[#A592AD] mt-1">{profile.title}</p>
                <div className="flex items-center gap-2 mt-2 text-xs text-emerald-400 font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  <span>{profile.status}</span>
                </div>
              </div>

              {/* Direct Actions */}
              <div className="flex flex-wrap items-center gap-2">
                <a href="/resume" onClick={closeRecruiterView} className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold bg-[#F4B942] text-[#301934] hover:bg-[#ffc957] transition-all shadow">
                  <Download className="w-4 h-4"/>
                  <span>Resume Center</span>
                </a>
                <button onClick={handleCopyEmail} className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold bg-[#301934] text-[#E8EDF2] border border-[#E8EDF2]/20 hover:border-[#F4B942]/60 transition-all">
                  {copied ? <CheckCircle2 className="w-4 h-4 text-emerald-400"/> : <Copy className="w-4 h-4"/>}
                  <span>{copied ? 'Email Copied!' : 'Copy Email'}</span>
                </button>
              </div>
            </div>

            {/* Bento Highlights Grid (5 Cards: LeetCode, DSA, CGPA, Class XII HS, Class X Madhyamik) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 text-center">
              <div className="p-3.5 rounded-xl bg-[#261329] border border-[#E8EDF2]/10">
                <span className="text-[10px] text-[#A592AD] uppercase tracking-wider block font-semibold">LeetCode Rating</span>
                <span className="text-2xl font-black text-[#F4B942]">{profile.keyStats.leetcodeRating}</span>
                <span className="text-[10px] text-emerald-400 block mt-0.5">Top 12% Globally</span>
              </div>
              <div className="p-3.5 rounded-xl bg-[#261329] border border-[#E8EDF2]/10">
                <span className="text-[10px] text-[#A592AD] uppercase tracking-wider block font-semibold">DSA Solved</span>
                <span className="text-2xl font-black text-[#E8EDF2]">{profile.keyStats.dsaSolved}+</span>
                <span className="text-[10px] text-[#A592AD] block mt-0.5">Multi-Platform</span>
              </div>
              <div className="p-3.5 rounded-xl bg-[#261329] border border-[#E8EDF2]/10">
                <span className="text-[10px] text-[#A592AD] uppercase tracking-wider block font-semibold">B.E. CSE CGPA</span>
                <span className="text-2xl font-black text-[#F4B942]">{profile.keyStats.universityCgpa} / 10</span>
                <span className="text-[10px] text-[#A592AD] block mt-0.5">5th Sem • CU</span>
              </div>
              <div className="p-3.5 rounded-xl bg-[#261329] border border-[#F4B942]/30 bg-gradient-to-b from-[#261329] to-[#301934]/50">
                <span className="text-[10px] text-[#F4B942] uppercase tracking-wider block font-bold">Class XII (HS)</span>
                <span className="text-2xl font-black text-[#F4B942]">{profile.keyStats.class12Percentage}%</span>
                <span className="text-[10px] text-emerald-400 block mt-0.5 font-semibold">Grade A+ (WBCHSE)</span>
              </div>
              <div className="p-3.5 rounded-xl bg-[#261329] border border-[#E8EDF2]/10 col-span-2 sm:col-span-1">
                <span className="text-[10px] text-[#A592AD] uppercase tracking-wider block font-semibold">Class X Merit</span>
                <span className="text-2xl font-black text-[#E8EDF2]">{profile.keyStats.class10Percentage}%</span>
                <span className="text-[10px] text-emerald-400 block mt-0.5 font-semibold">Grade AA (WBBSE)</span>
              </div>
            </div>

            {/* Core Technical Stack */}
            <div>
              <h5 className="text-xs font-bold uppercase tracking-wider text-[#A592AD] mb-2 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-[#F4B942]"/> Verified Technical Stack
              </h5>
              <div className="flex flex-wrap gap-2 text-xs">
                {['Java 17/21 (Advanced)', 'Spring Boot 3', 'Spring Security & JWT', 'React 19', 'TypeScript', 'PostgreSQL', 'MySQL', 'MongoDB', 'Docker', 'AWS S3', 'REST APIs', 'Gemini API', 'Git & CI/CD'].map((tech, i) => (<span key={i} className="px-2.5 py-1 rounded-md bg-[#301934] border border-[#E8EDF2]/15 text-[#E8EDF2] font-medium">
                    {tech}
                  </span>))}
              </div>
            </div>

            {/* Flagship Projects */}
            <div>
              <h5 className="text-xs font-bold uppercase tracking-wider text-[#A592AD] mb-3 flex items-center gap-1.5">
                <Briefcase className="w-3.5 h-3.5 text-[#F4B942]"/> Production Software Deliverables
              </h5>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {projects.map((proj) => (<div key={proj.id} className="p-4 rounded-xl bg-[#261329] border border-[#E8EDF2]/10 hover:border-[#F4B942]/40 transition-all flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <h6 className="font-bold text-sm text-[#E8EDF2]">{proj.title.split('—')[0]}</h6>
                        <span className="text-[10px] px-2 py-0.5 rounded bg-[#F4B942]/20 text-[#F4B942] font-semibold">
                          {proj.status}
                        </span>
                      </div>
                      <p className="text-xs text-[#A592AD] mt-1.5 line-clamp-2">{proj.tagline}</p>
                    </div>

                    <div className="mt-3 pt-3 border-t border-[#E8EDF2]/10 flex items-center justify-between">
                      <div className="flex flex-wrap gap-1 text-[10px] text-[#A592AD]">
                        {proj.technologies.slice(0, 3).map((t, idx) => (<span key={idx} className="bg-[#1E0F21] px-1.5 py-0.5 rounded">
                            {t}
                          </span>))}
                      </div>
                      <a href={`/projects/${proj.slug}`} onClick={closeRecruiterView} className="text-xs text-[#F4B942] hover:underline flex items-center gap-1 font-semibold">
                        Case Study <ExternalLink className="w-3 h-3"/>
                      </a>
                    </div>
                  </div>))}
              </div>
            </div>

            {/* Academic Credentials with Direct Marksheet Inspection */}
            <div>
              <h5 className="text-xs font-bold uppercase tracking-wider text-[#A592AD] mb-2 flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5 text-[#F4B942]"/> Academic Credentials & Original Marksheets
              </h5>
              <div className="space-y-2 text-xs">
                {/* 1. Chandigarh University */}
                <div className="p-3 rounded-lg bg-[#261329] border border-[#E8EDF2]/10 flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <strong className="text-[#E8EDF2]">Chandigarh University — B.E. Computer Science & Engineering</strong>
                    <p className="text-[11px] text-[#A592AD]">Current Cumulative CGPA: 8.25 / 10.0 • Expected Graduation 2028</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-[#F4B942] bg-[#1E0F21] px-2.5 py-1 rounded border border-[#F4B942]/20">
                      8.25 CGPA
                    </span>
                    <button onClick={() => handleOpenDoc('university')} className="px-2.5 py-1 rounded bg-[#301934] text-[#F4B942] hover:bg-[#F4B942] hover:text-[#301934] font-semibold text-[11px] border border-[#F4B942]/30 transition-all flex items-center gap-1" title="Inspect Transcript">
                      <Eye className="w-3 h-3"/> Inspect
                    </button>
                  </div>
                </div>

                {/* 2. Higher Secondary (Class XII) Marksheet */}
                <div className="p-3 rounded-lg bg-[#261329] border border-[#F4B942]/30 flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <strong className="text-[#E8EDF2] flex items-center gap-1.5">
                      West Bengal Council (Higher Secondary Class XII) — 2024
                      <span className="text-[10px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-1.5 py-0.2 rounded font-mono">
                        Original Scanned
                      </span>
                    </strong>
                    <p className="text-[11px] text-[#A592AD]">
                      Hoomgarh Chandabila High School • Science Stream • Grand Total: 414 / 500 (Grade A+)
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-[#F4B942] bg-[#1E0F21] px-2.5 py-1 rounded border border-[#F4B942]/30">
                      82.8% (A+)
                    </span>
                    <button onClick={() => handleOpenDoc('class12')} className="px-3 py-1 rounded bg-[#F4B942] text-[#301934] hover:bg-[#ffc957] font-bold text-[11px] transition-all flex items-center gap-1 shadow" title="Inspect Original HS Marksheet">
                      <Eye className="w-3 h-3"/> Inspect Marksheet
                    </button>
                  </div>
                </div>

                {/* 3. Secondary Education (Class X) Marksheet */}
                <div className="p-3 rounded-lg bg-[#261329] border border-[#E8EDF2]/10 flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <strong className="text-[#E8EDF2] flex items-center gap-1.5">
                      West Bengal Board (Madhyamik Class X) — 2022
                      <span className="text-[10px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-1.5 py-0.2 rounded font-mono">
                        Original Scanned
                      </span>
                    </strong>
                    <p className="text-[11px] text-[#A592AD]">
                      Hoomgarh Chandabila High School • Score: 659 / 700 • Grade AA (Outstanding) • Top 0.5% State
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-[#F4B942] bg-[#1E0F21] px-2.5 py-1 rounded border border-[#F4B942]/20">
                      94.14% (AA)
                    </span>
                    <button onClick={() => handleOpenDoc('class10')} className="px-3 py-1 rounded bg-[#301934] text-[#F4B942] hover:bg-[#F4B942] hover:text-[#301934] font-bold text-[11px] border border-[#F4B942]/30 transition-all flex items-center gap-1" title="Inspect Original Class 10 Marksheet">
                      <Eye className="w-3 h-3"/> Inspect Marksheet
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Contacts */}
          <div className="p-4 bg-[#301934] border-t border-[#E8EDF2]/15 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex flex-wrap items-center gap-3">
              <a href={`mailto:${profile.email}`} className="flex items-center gap-1.5 text-[#E8EDF2] hover:text-[#F4B942] transition-colors">
                <Mail className="w-3.5 h-3.5 text-[#F4B942]"/>
                <span>{profile.email}</span>
              </a>
              <span className="text-[#E8EDF2]/30 hidden sm:inline">•</span>
              <a href={`tel:${profile.phone}`} className="flex items-center gap-1.5 text-[#E8EDF2] hover:text-[#F4B942] transition-colors">
                <Phone className="w-3.5 h-3.5 text-[#F4B942]"/>
                <span>{profile.phone}</span>
              </a>
            </div>

            <div className="flex items-center gap-2">
              <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="p-1.5 rounded bg-[#1E0F21] border border-[#E8EDF2]/15 text-[#E8EDF2] hover:text-[#F4B942] transition-colors" title="LinkedIn">
                <LinkedinIcon className="w-4 h-4"/>
              </a>
              <a href={profile.socials.github} target="_blank" rel="noreferrer" className="p-1.5 rounded bg-[#1E0F21] border border-[#E8EDF2]/15 text-[#E8EDF2] hover:text-[#F4B942] transition-colors" title="GitHub">
                <GithubIcon className="w-4 h-4"/>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>);
};
