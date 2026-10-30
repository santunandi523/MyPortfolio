import React from 'react';
import { Eye, Download, ExternalLink, Calendar, MapPin, Award, BookOpen } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export const EducationVaultPage = () => {
  const { academicVault, openDocumentViewer } = usePortfolio();

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20">
      {/* Editorial Page Header */}
      <div className="max-w-3xl space-y-3">
        <span className="text-xs font-mono uppercase tracking-wider text-[#F4B942]">
          Academic Archive
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-[#E8EDF2] tracking-tight">
          Education & Formal Qualifications
        </h1>
        <p className="text-sm sm:text-base text-[#A592AD] leading-relaxed font-sans">
          A personal academic archive documenting my educational path from secondary school in West Bengal to undergraduate studies in Computer Science & Engineering at Chandigarh University. Original marksheets and transcripts can be viewed directly below.
        </p>
      </div>

      {/* ─── 3 DISTINCT VISUAL SECTIONS ─── */}
      <div className="space-y-24">
        {academicVault.map((record, index) => (
          <section
            key={record.id}
            id={record.level}
            className="pt-8 border-t border-[#E8EDF2]/10 space-y-8"
          >
            {/* Section Heading & Meta */}
            <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4">
              <div>
                <span className="text-xs font-mono text-[#F4B942] uppercase tracking-wider">
                  0{index + 1} • {record.level === 'university' ? 'Undergraduate Degree' : record.level === 'class12' ? 'Higher Secondary' : 'Secondary School'}
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#E8EDF2] font-display mt-1">
                  {record.title}
                </h2>
                <p className="text-sm text-[#A592AD] mt-1">
                  {record.institution} — <span className="text-[#E8EDF2]/80">{record.boardOrUniversity}</span>
                </p>
              </div>

              <div className="flex items-center gap-4 text-xs font-mono text-[#A592AD]">
                <span>{record.duration || record.passingYear}</span>
                <span>•</span>
                <span className="text-[#F4B942] font-semibold text-sm">
                  {record.scoreLabel}: {record.scoreValue}
                </span>
              </div>
            </div>

            {/* Asymmetric Two-Column Presentation: Details & Original Document */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Left Column: Academic Breakdown & Highlights */}
              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-3">
                  <h3 className="text-xs font-mono uppercase tracking-wider text-[#A592AD]">
                    Key Highlights & Distinction Details
                  </h3>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#E8EDF2]/85 leading-relaxed">
                    {record.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2.5">
                        <span className="text-[#F4B942] mt-1 shrink-0">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Subject Scores / Semester Timeline if present */}
                {record.subjectScores && record.subjectScores.length > 0 && (
                  <div className="space-y-3 pt-2">
                    <h3 className="text-xs font-mono uppercase tracking-wider text-[#A592AD]">
                      Subject Scores
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {record.subjectScores.map((subj, sIdx) => (
                        <div
                          key={sIdx}
                          className="flex items-center justify-between p-2.5 rounded bg-[#1A0A1C] border border-[#E8EDF2]/10"
                        >
                          <span className="text-[#E8EDF2]/90">{subj.subject}</span>
                          <span className="font-mono font-semibold text-[#F4B942]">
                            {subj.score} {subj.maxScore ? `/ ${subj.maxScore}` : ''}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Semester Timeline for University */}
                {record.semesterTimeline && record.semesterTimeline.length > 0 && (
                  <div className="space-y-3 pt-2">
                    <h3 className="text-xs font-mono uppercase tracking-wider text-[#A592AD]">
                      Semester-by-Semester Progression
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {record.semesterTimeline.map((sem, sIdx) => (
                        <div
                          key={sIdx}
                          className="p-3 rounded bg-[#1A0A1C] border border-[#E8EDF2]/10 space-y-1"
                        >
                          <div className="flex items-center justify-between font-mono">
                            <span className="font-semibold text-[#E8EDF2]">{sem.semester}</span>
                            <span className="text-[#F4B942] font-bold">SGPA: {sem.sgpa}</span>
                          </div>
                          <p className="text-[11px] text-[#A592AD]">
                            Cumulative CGPA: {sem.cgpa} • {sem.credits} Credits ({sem.status})
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column: Visual Document Preview Frame */}
              <div className="lg:col-span-5 space-y-3">
                <div className="relative rounded-lg overflow-hidden border border-[#E8EDF2]/15 bg-[#140816] shadow-lg group">
                  <img
                    src={record.previewUrl}
                    alt={record.documentTitle}
                    className="w-full h-80 sm:h-96 object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#120914] via-transparent to-transparent opacity-60 pointer-events-none" />

                  {/* Open in Fullscreen Overlay */}
                  <div className="absolute bottom-4 inset-x-4 flex items-center justify-between">
                    <button
                      onClick={() => openDocumentViewer(record)}
                      className="px-4 py-2 rounded-md text-xs font-semibold bg-[#F4B942] text-[#301934] hover:bg-[#ffc957] transition-colors flex items-center gap-1.5 shadow"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>View Full Document</span>
                    </button>

                    <span className="text-[11px] font-mono text-[#E8EDF2]/80 bg-[#120914]/80 px-2.5 py-1 rounded border border-[#E8EDF2]/10 backdrop-blur-sm">
                      {record.documentSize}
                    </span>
                  </div>
                </div>

                <div className="text-xs text-[#A592AD] space-y-1 px-1">
                  <p className="text-[#E8EDF2] font-medium">{record.documentTitle}</p>
                  <p className="text-[11px]">{record.documentType}</p>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};
