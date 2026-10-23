import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  GraduationCap,
  Download,
  Eye,
  FileCheck2,
  Calendar,
  Building,
  CheckCircle2,
  Lock,
  Layers,
  Sparkles,
  Award,
  AlertCircle,
  ExternalLink,
} from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';
import { AcademicRecord } from '../types';

export const EducationVaultPage: React.FC = () => {
  const { academicVault, openDocumentViewer } = usePortfolio();
  const [selectedRecordId, setSelectedRecordId] = useState<string>(academicVault[0]?.id || '');

  const activeRecord = academicVault.find((r) => r.id === selectedRecordId) || academicVault[0];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#301934] border border-[#F4B942]/40 text-xs font-bold text-[#F4B942] uppercase tracking-wider">
          <ShieldCheck className="w-4 h-4" /> Cryptographically Verified Archive
        </div>
        <h1 className="text-4xl sm:text-5xl font-black font-display text-[#E8EDF2] tracking-tight">
          The Academic Vault
        </h1>
        <p className="text-sm sm:text-base text-[#A592AD] leading-relaxed">
          A verifiable digital archive presenting academic qualifications alongside their authentic institutional marksheets, transcripts, and evaluation ledgers.
        </p>
      </div>

      {/* Security & Document Privacy Model Advisory */}
      <div className="rounded-2xl bg-[#261329] border border-[#E8EDF2]/15 p-6 shadow-md">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-xl bg-[#301934] border border-[#F4B942]/30 text-[#F4B942] mt-0.5">
              <Lock className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-[#E8EDF2] flex items-center gap-2">
                Document Visibility & Integrity Model
                <span className="text-[10px] uppercase font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded">
                  Privacy-First
                </span>
              </h4>
              <p className="text-xs text-[#A592AD] max-w-3xl leading-relaxed">
                All records feature public metadata, optional redacted preview modes to protect registration IDs, and access-controlled original files. Note: public client renders can be copied even if the download button is restricted; sensitive master records are protected on authenticated backend storage.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 self-end md:self-center shrink-0">
            <span className="text-xs font-mono text-[#F4B942] bg-[#1A0A1C] px-3 py-1.5 rounded-lg border border-[#F4B942]/30">
              CU-WB-VERIFIED-2026
            </span>
          </div>
        </div>
      </div>

      {/* Main Vault Interactive Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Archive Level Selector Cards */}
        <div className="lg:col-span-5 space-y-4">
          <h3 className="text-xs font-bold uppercase tracking-wider text-[#A592AD] flex items-center gap-1.5">
            <Layers className="w-4 h-4 text-[#F4B942]" /> Qualifications Archive
          </h3>

          <div className="space-y-3">
            {academicVault.map((record) => {
              const isSelected = record.id === activeRecord.id;

              return (
                <div
                  key={record.id}
                  onClick={() => setSelectedRecordId(record.id)}
                  className={`cursor-pointer rounded-2xl p-5 border transition-all text-left relative overflow-hidden ${
                    isSelected
                      ? 'bg-gradient-to-r from-[#301934] to-[#241127] border-[#F4B942] shadow-lg marigold-glow-subtle'
                      : 'bg-[#220F26] border-[#E8EDF2]/10 hover:border-[#E8EDF2]/30'
                  }`}
                >
                  {isSelected && (
                    <div className="absolute top-0 right-0 w-2 h-full bg-[#F4B942]"></div>
                  )}

                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-[#160A18] text-[#F4B942] border border-[#F4B942]/20 font-bold">
                      {record.level.toUpperCase()}
                    </span>
                    <span className="text-xs font-mono font-bold text-[#F4B942]">
                      {record.scoreValue}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-[#E8EDF2] leading-snug">
                    {record.title}
                  </h4>
                  <p className="text-xs text-[#A592AD] mt-1">{record.institution}</p>

                  <div className="mt-4 pt-3 border-t border-[#E8EDF2]/10 flex items-center justify-between text-xs">
                    <span className="text-[#A592AD] text-[11px]">{record.passingYear}</span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        openDocumentViewer(record);
                      }}
                      className="text-xs font-bold text-[#F4B942] hover:underline flex items-center gap-1"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Inspect Document</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Active Record Comprehensive Dossier */}
        <div className="lg:col-span-7">
          <div className="rounded-2xl bg-[#261329] border-2 border-[#E8EDF2]/20 p-6 md:p-8 space-y-8 silver-border-glow">
            {/* Dossier Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E8EDF2]/15">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono uppercase font-bold text-[#F4B942]">
                    Official Dossier #{activeRecord.id}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  <span className="text-xs text-emerald-400 font-semibold">Active Record</span>
                </div>
                <h2 className="text-2xl font-black text-[#E8EDF2] mt-1">
                  {activeRecord.title}
                </h2>
                <p className="text-xs text-[#A592AD] mt-0.5">{activeRecord.boardOrUniversity}</p>
              </div>

              {/* Document Action Button */}
              <button
                onClick={() => openDocumentViewer(activeRecord)}
                className="px-5 py-2.5 rounded-xl text-xs font-bold bg-[#F4B942] text-[#301934] hover:bg-[#ffc957] transition-all flex items-center gap-2 shadow marigold-glow self-start sm:self-auto"
              >
                <Eye className="w-4 h-4" />
                <span>Open Custom Viewer</span>
              </button>
            </div>

            {/* Score & Institution Bento Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
              <div className="p-4 rounded-xl bg-[#1B0B1D] border border-[#E8EDF2]/10">
                <span className="text-[10px] uppercase font-semibold text-[#A592AD] block">
                  {activeRecord.scoreLabel}
                </span>
                <span className="text-2xl font-black text-[#F4B942] font-mono mt-1 block">
                  {activeRecord.scoreValue}
                </span>
              </div>

              <div className="p-4 rounded-xl bg-[#1B0B1D] border border-[#E8EDF2]/10">
                <span className="text-[10px] uppercase font-semibold text-[#A592AD] block">
                  Passing / Target Year
                </span>
                <span className="text-lg font-bold text-[#E8EDF2] font-mono mt-1 block">
                  {activeRecord.passingYear.split(' ')[0]}
                </span>
              </div>

              <div className="p-4 rounded-xl bg-[#1B0B1D] border border-[#E8EDF2]/10">
                <span className="text-[10px] uppercase font-semibold text-[#A592AD] block">
                  Verification Status
                </span>
                <span className="text-sm font-bold text-emerald-400 mt-1 flex items-center justify-center gap-1">
                  <ShieldCheck className="w-4 h-4" /> Authenticated
                </span>
              </div>
            </div>

            {/* Key Academic Milestones & Highlights */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#A592AD] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#F4B942]" /> Scholastic Distinctions & Milestones
              </h4>
              <div className="space-y-2">
                {activeRecord.highlights.map((highlight, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-lg bg-[#1D0C1F] border border-[#E8EDF2]/10 text-xs text-[#E8EDF2] flex items-start gap-2.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#F4B942] shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* If University: Semester-wise SGPA / CGPA Progression Timeline */}
            {activeRecord.semesterTimeline && (
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#A592AD] flex items-center gap-1.5">
                  <GraduationCap className="w-3.5 h-3.5 text-[#F4B942]" /> Semester-wise SGPA & CGPA Timeline
                </h4>
                <div className="overflow-x-auto rounded-xl border border-[#E8EDF2]/15">
                  <table className="w-full text-xs text-left">
                    <thead className="bg-[#301934] text-[#E8EDF2] uppercase text-[10px]">
                      <tr>
                        <th className="p-3">Semester</th>
                        <th className="p-3 text-center">SGPA</th>
                        <th className="p-3 text-center">CGPA</th>
                        <th className="p-3 text-center">Credits</th>
                        <th className="p-3">Core Subjects Covered</th>
                        <th className="p-3 text-center">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E8EDF2]/10 bg-[#1D0C1F]">
                      {activeRecord.semesterTimeline.map((sem, idx) => (
                        <tr key={idx} className="hover:bg-[#301934]/30 transition-colors">
                          <td className="p-3 font-bold text-[#E8EDF2]">{sem.semester}</td>
                          <td className="p-3 text-center font-mono font-bold text-[#F4B942]">
                            {sem.sgpa}
                          </td>
                          <td className="p-3 text-center font-mono text-[#E8EDF2]">
                            {sem.cgpa}
                          </td>
                          <td className="p-3 text-center font-mono text-[#A592AD]">
                            {sem.credits}
                          </td>
                          <td className="p-3 text-[#A592AD] text-[11px]">
                            {sem.keySubjects.join(', ')}
                          </td>
                          <td className="p-3 text-center">
                            <span
                              className={`px-2 py-0.5 rounded text-[9px] font-bold uppercase ${
                                sem.status === 'completed'
                                  ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                                  : 'bg-amber-500/15 text-amber-400 border border-amber-500/30'
                              }`}
                            >
                              {sem.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* If Class 10 or 12: Subject Scores Table */}
            {activeRecord.subjectScores && (
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#A592AD] flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-[#F4B942]" /> Subject-wise Official Board Scoreboard
                </h4>
                <div className="overflow-x-auto rounded-xl border border-[#E8EDF2]/15">
                  <table className="w-full text-xs text-left">
                    <thead className="bg-[#301934] text-[#E8EDF2] uppercase text-[10px]">
                      <tr>
                        <th className="p-3">Subject Name</th>
                        <th className="p-3 text-center">Score Obtained</th>
                        <th className="p-3 text-center">Maximum Marks</th>
                        <th className="p-3 text-center">Awarded Grade</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E8EDF2]/10 bg-[#1D0C1F]">
                      {activeRecord.subjectScores.map((sub, idx) => (
                        <tr key={idx} className="hover:bg-[#301934]/30 transition-colors">
                          <td className="p-3 font-semibold text-[#E8EDF2]">{sub.subject}</td>
                          <td className="p-3 text-center font-mono font-bold text-[#F4B942]">
                            {sub.score}
                          </td>
                          <td className="p-3 text-center font-mono text-[#A592AD]">
                            {sub.maxScore || '100'}
                          </td>
                          <td className="p-3 text-center font-semibold text-emerald-400">
                            {sub.grade || 'Outstanding'}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Document Card Action Preview Frame */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-[#301934] to-[#200F23] border border-[#F4B942]/30 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#160A18] text-[#F4B942]">
                  <FileCheck2 className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-bold text-xs text-[#E8EDF2]">{activeRecord.documentTitle}</h5>
                  <p className="text-[11px] text-[#A592AD]">
                    Format: {activeRecord.documentType} • File Size: {activeRecord.documentSize}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => openDocumentViewer(activeRecord)}
                  className="px-4 py-2 rounded-lg text-xs font-bold bg-[#F4B942] text-[#301934] hover:bg-[#ffc957] transition-all flex items-center gap-1.5 shadow"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Inspect Document</span>
                </button>

                {activeRecord.level === 'class10' && (
                  <a
                    href="/documents/10th_marksheet_santu_nandi.pdf"
                    download="Santu_Nandi_Class10_Marksheet_2022.pdf"
                    className="p-2 rounded-lg bg-[#160A18] border border-[#E8EDF2]/15 text-[#E8EDF2] hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
                    title="Download Official PDF (557 KB)"
                  >
                    <Download className="w-4 h-4" />
                  </a>
                )}

                {activeRecord.level === 'class12' && (
                  <a
                    href="/documents/12th_marksheet_santu_nandi.pdf"
                    download="Santu_Nandi_Class12_Marksheet_2024.pdf"
                    className="p-2 rounded-lg bg-[#160A18] border border-[#E8EDF2]/15 text-[#E8EDF2] hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
                    title="Download Official PDF (754 KB)"
                  >
                    <Download className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
