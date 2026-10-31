import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Download, ExternalLink, Eye, Terminal, BookOpen, Layers } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/icons/BrandIcons';
import { usePortfolio } from '../context/PortfolioContext';
import { RotatingTitle } from '../components/RotatingTitle';

export const HomePage = () => {
  const { profile, academicVault, codingStats, projects, openDocumentViewer, openRecruiterView } = usePortfolio();

  return (
    <div className="w-full space-y-28 pb-20">
      {/* ─── HERO SECTION: Personal & Editorial ─── */}
      <section id="hero" className="pt-10 sm:pt-16 md:pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-7">
              <div className="space-y-3">
                <span className="text-xs font-mono tracking-wider uppercase text-[#F4B942]">
                  Portfolio & Technical Profile
                </span>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-display tracking-tight text-[#E8EDF2] leading-[1.08] min-h-[1.2em] flex items-baseline">
                  <RotatingTitle />
                </h1>
                <p className="text-lg sm:text-xl font-medium text-[#F4B942]/95 font-sans">
                  Crafting resilient backend services, distributed systems & full-stack applications.
                </p>
                <p className="text-xs sm:text-sm text-[#A592AD] font-mono">
                  Chandigarh University • B.E. Computer Science & Engineering (8.25 CGPA)
                </p>
              </div>

              {/* Natural, Honest First-Person Introduction */}
              <div className="space-y-4 text-sm sm:text-base text-[#E8EDF2]/80 leading-relaxed font-sans max-w-2xl">
                <p>
                  I build web applications and backend systems with a focus on reliability, clean architecture, and performance. My work centers on Java 17 and Spring Boot for backend services, coupled with modern React interfaces and scalable databases.
                </p>
                <p className="text-[#A592AD]">
                  Beyond writing features, I care deeply about how software behaves in edge cases and under load. A daily practice in competitive programming — with over 850 algorithm problems solved and a 1660 LeetCode contest rating — shapes how I approach structure, data efficiency, and problem solving.
                </p>
              </div>

              {/* Key Highlights Line */}
              <div className="pt-2 pb-1 border-y border-[#E8EDF2]/10 flex flex-wrap gap-x-8 gap-y-2 text-xs font-mono text-[#A592AD]">
                <div>
                  <span className="text-[#E8EDF2] font-semibold">850+</span> Problems Solved
                </div>
                <div>
                  <span className="text-[#F4B942] font-semibold">1660</span> LeetCode Rating
                </div>
                <div>
                  <span className="text-[#E8EDF2] font-semibold">8.25</span> CU CGPA
                </div>
                <div>
                  <span className="text-[#E8EDF2] font-semibold">94.14%</span> Class 10 Distinction
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  to="/projects"
                  className="px-5 py-2.5 rounded-md text-xs font-semibold bg-[#F4B942] text-[#301934] hover:bg-[#ffc957] transition-colors inline-flex items-center gap-2"
                >
                  <span>View Selected Work</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <Link
                  to="/education"
                  className="px-5 py-2.5 rounded-md text-xs font-medium bg-[#301934] text-[#E8EDF2] border border-[#E8EDF2]/15 hover:border-[#F4B942]/60 transition-colors"
                >
                  Academic Records
                </Link>

                <Link
                  to="/resume"
                  className="px-4 py-2.5 rounded-md text-xs font-medium text-[#A592AD] hover:text-[#E8EDF2] transition-colors inline-flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5 text-[#F4B942]" />
                  <span>Resume</span>
                </Link>
              </div>

              {/* Verified External Profile Links */}
              <div className="flex items-center gap-4 pt-2 text-xs text-[#A592AD]">
                <span className="text-[11px] font-mono uppercase tracking-wider">Profiles:</span>
                <div className="flex items-center gap-3">
                  <a
                    href={profile.socials.github}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#F4B942] transition-colors flex items-center gap-1"
                  >
                    <GithubIcon className="w-3.5 h-3.5" /> GitHub
                  </a>
                  <a
                    href={profile.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#F4B942] transition-colors flex items-center gap-1"
                  >
                    <LinkedinIcon className="w-3.5 h-3.5" /> LinkedIn
                  </a>
                  <a
                    href={profile.socials.leetcode}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#F4B942] transition-colors"
                  >
                    LeetCode
                  </a>
                  <a
                    href={profile.socials.codolio}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#F4B942] transition-colors"
                  >
                    Codolio
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Authentic Photograph & Profile Presentation */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="w-full max-w-sm space-y-3">
                <div className="relative rounded-lg overflow-hidden border border-[#E8EDF2]/15 bg-[#1A0A1C] shadow-lg">
                  <img
                    src="/documents/santu_nandi_profile.jpg"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/documents/santu_nandi_student_photo.jpeg';
                    }}
                    alt="Santu Nandi"
                    className="w-full h-96 object-cover object-top transition-all duration-300 hover:scale-[1.01]"
                  />
                  <div className="p-4 bg-[#180A1A] border-t border-[#E8EDF2]/10 space-y-1">
                    <p className="text-xs font-semibold text-[#E8EDF2]">Santu Nandi</p>
                    <p className="text-[11px] text-[#A592AD]">
                      B.E. Computer Science & Engineering • Chandigarh University
                    </p>
                    <p className="text-[10px] font-mono text-[#F4B942] pt-1">
                      Available for Software Engineering Roles & Internships (2025–2026)
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between text-[11px] text-[#A592AD] px-1">
                  <span>Student ID: 24BCS10650</span>
                  <button
                    onClick={openRecruiterView}
                    className="text-[#F4B942] hover:underline font-medium"
                  >
                    60-Second Overview
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 1: ACADEMIC ARCHIVE ─── */}
      <section id="education" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 pb-4 border-b border-[#E8EDF2]/10">
          <div>
            <span className="text-xs font-mono text-[#F4B942] tracking-wider uppercase">01 / Education</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#E8EDF2] font-display mt-1">
              Academic Qualifications & Records
            </h2>
            <p className="text-xs sm:text-sm text-[#A592AD] mt-1 max-w-xl">
              Original academic milestones from secondary board examinations to current university transcripts at Chandigarh University.
            </p>
          </div>
          <Link
            to="/education"
            className="text-xs font-medium text-[#F4B942] hover:underline flex items-center gap-1 shrink-0"
          >
            <span>View Full Academic Archive</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Minimal Editorial Document Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {academicVault.map((record) => (
            <div
              key={record.id}
              className="group flex flex-col justify-between border-b md:border-b-0 md:border-r last:border-r-0 border-[#E8EDF2]/10 pb-8 md:pb-0 md:pr-8 last:pr-0 space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-[#A592AD]">
                  <span className="uppercase text-[#F4B942]">{record.level}</span>
                  <span>{record.passingYear}</span>
                </div>

                <h3 className="font-bold text-base text-[#E8EDF2] group-hover:text-[#F4B942] transition-colors leading-snug">
                  {record.title}
                </h3>
                <p className="text-xs text-[#A592AD] leading-relaxed">
                  {record.institution}
                </p>

                {/* Score badge */}
                <div className="py-1 px-2.5 rounded-md bg-[#301934]/60 border border-[#E8EDF2]/10 inline-flex items-center gap-1.5 flex-wrap">
                  <span className="text-[11px] text-[#A592AD]">{record.scoreLabel}:</span>
                  <span className="text-xs font-mono font-bold text-[#F4B942]">
                    {record.scoreValue.includes('(') ? record.scoreValue.split('(')[0].trim() : record.scoreValue}
                  </span>
                  {record.scoreValue.includes('(') && (
                    <span className="px-1.5 py-0.5 rounded text-[9px] font-sans font-medium bg-[#F4B942]/10 text-[#F4B942] border border-[#F4B942]/20 whitespace-nowrap">
                      {record.scoreValue.match(/\((.*?)\)/)?.[1] || '5th Sem Pending'}
                    </span>
                  )}
                </div>

                <p className="text-xs text-[#A592AD]/90 line-clamp-2 leading-relaxed">
                  {record.highlights[0]}
                </p>
              </div>

              {/* Document Thumbnail Preview Frame */}
              <div className="pt-2 space-y-2">
                <div
                  onClick={() => openDocumentViewer(record)}
                  className="cursor-pointer relative rounded-md overflow-hidden border border-[#E8EDF2]/15 bg-[#140816] h-36 group/thumb"
                >
                  <img
                    src={record.previewUrl}
                    alt={record.documentTitle}
                    className="w-full h-full object-cover object-top opacity-85 group-hover/thumb:opacity-100 group-hover/thumb:scale-[1.02] transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-[#301934]/50 opacity-0 group-hover/thumb:opacity-100 transition-opacity flex items-center justify-center gap-1.5 text-xs text-[#F4B942] font-semibold backdrop-blur-[2px]">
                    <Eye className="w-4 h-4" />
                    <span>Inspect Document</span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-[11px] text-[#A592AD]">
                  <span className="truncate max-w-[200px]">{record.documentTitle}</span>
                  <button
                    onClick={() => openDocumentViewer(record)}
                    className="text-[#F4B942] hover:underline font-medium shrink-0"
                  >
                    Open
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── SECTION 2: FEATURED ENGINEERING PROJECTS ─── */}
      <section id="projects" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-4 border-b border-[#E8EDF2]/10">
          <div>
            <span className="text-xs font-mono text-[#F4B942] tracking-wider uppercase">02 / Software Architecture</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#E8EDF2] font-display mt-1">
              Selected Engineering Projects
            </h2>
            <p className="text-xs sm:text-sm text-[#A592AD] mt-1 max-w-xl">
              End-to-end full-stack architectures developed with Java 17, Spring Boot, React, and automated algorithms.
            </p>
          </div>
          <Link
            to="/projects"
            className="text-xs font-medium text-[#F4B942] hover:underline flex items-center gap-1 shrink-0"
          >
            <span>Read All Case Studies</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Editorial Project Features */}
        <div className="space-y-16">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-b border-[#E8EDF2]/10 pb-16 last:border-b-0"
            >
              {/* Project Narrative */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-3 text-xs font-mono text-[#A592AD]">
                  <span className="text-[#F4B942] font-semibold">0{idx + 1} / Project</span>
                  <span>•</span>
                  <span>{project.category}</span>
                  <span>•</span>
                  <span>{project.status}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-[#E8EDF2] font-display tracking-tight">
                  {project.title}
                </h3>

                <p className="text-sm text-[#E8EDF2]/90 leading-relaxed font-sans">
                  {project.tagline}
                </p>

                <div className="space-y-2 text-xs sm:text-sm text-[#A592AD] leading-relaxed pt-1">
                  <p>
                    <strong className="text-[#E8EDF2]">The Problem:</strong> {project.problemStatement}
                  </p>
                  <p>
                    <strong className="text-[#E8EDF2]">Solution & Contribution:</strong> {project.solution}
                  </p>
                </div>

                {/* Tech List */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.technologies.slice(0, 8).map((tech, i) => (
                    <span
                      key={i}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#1E0F21] text-[#E8EDF2]/90 border border-[#E8EDF2]/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4 pt-4">
                  <Link
                    to={`/projects/${project.slug}`}
                    className="text-xs font-semibold text-[#F4B942] hover:underline inline-flex items-center gap-1.5"
                  >
                    <span>Read Architecture Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-[#A592AD] hover:text-[#E8EDF2] inline-flex items-center gap-1.5 transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>

              {/* Architectural Highlights / Decision Ledger */}
              <div className="lg:col-span-5 bg-[#180A1A] border border-[#E8EDF2]/10 rounded-lg p-5 space-y-4">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#F4B942] block">
                  Engineering Decisions & Highlights
                </span>
                <div className="space-y-3">
                  {project.keyFeatures.slice(0, 3).map((feat, fIdx) => (
                    <div key={fIdx} className="space-y-0.5 text-xs border-b border-[#E8EDF2]/5 pb-2.5 last:border-b-0 last:pb-0">
                      <p className="font-semibold text-[#E8EDF2]">{feat.title}</p>
                      <p className="text-[11px] text-[#A592AD] leading-relaxed">{feat.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── SECTION 3: COMPETITIVE PROGRAMMING ─── */}
      <section id="achievements" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 pb-4 border-b border-[#E8EDF2]/10">
          <div>
            <span className="text-xs font-mono text-[#F4B942] tracking-wider uppercase">03 / Algorithms</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#E8EDF2] font-display mt-1">
              Competitive Programming & Problem Solving
            </h2>
            <p className="text-xs sm:text-sm text-[#A592AD] mt-1 max-w-xl">
              Consistent daily practice across algorithms, dynamic programming, tree algorithms, and computational complexity.
            </p>
          </div>
          <Link
            to="/achievements"
            className="text-xs font-medium text-[#F4B942] hover:underline flex items-center gap-1 shrink-0"
          >
            <span>Detailed Problem Breakdown</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Editorial Grid of Platforms */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {codingStats.slice(0, 3).map((stat) => (
            <div
              key={stat.id}
              className="p-5 rounded-lg border border-[#E8EDF2]/10 bg-[#160A18] flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-[#E8EDF2]">{stat.platform}</span>
                  <span className="font-mono text-[#A592AD]">@{stat.username}</span>
                </div>

                <div className="pt-2">
                  <span className="text-[11px] text-[#A592AD] block uppercase font-mono">
                    {stat.rating ? 'Contest Rating' : 'Problems Solved'}
                  </span>
                  <span className="text-2xl font-bold font-mono text-[#F4B942]">
                    {stat.rating ? stat.rating : `${stat.problemsSolved}+`}
                  </span>
                </div>

                {stat.topicBreakdown && (
                  <div className="pt-2 space-y-1">
                    <span className="text-[10px] uppercase font-mono text-[#A592AD] block">Domains:</span>
                    {stat.topicBreakdown.slice(0, 3).map((topic, i) => (
                      <div key={i} className="flex justify-between text-xs text-[#A592AD]">
                        <span>{topic.topic}</span>
                        <span className="font-mono text-[#E8EDF2]">{topic.solved} solved</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="pt-3 border-t border-[#E8EDF2]/10 flex items-center justify-between text-xs">
                <span className="text-[10px] text-[#A592AD]">Updated: {stat.lastUpdated}</span>
                <a
                  href={stat.profileUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#F4B942] hover:underline flex items-center gap-1 font-medium"
                >
                  Profile <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── SECTION 4: PERSONAL INVITATION ─── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-xl border border-[#E8EDF2]/15 bg-[#180A1A] p-8 sm:p-12">
          <div className="max-w-2xl space-y-4">
            <span className="text-xs font-mono text-[#F4B942] uppercase tracking-wider block">
              Opportunities & Collaboration
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-[#E8EDF2]">
              Looking for a disciplined, engineering-focused teammate?
            </h3>
            <p className="text-xs sm:text-sm text-[#A592AD] leading-relaxed">
              I am actively preparing for software engineering internships and junior engineering roles for 2025–2026. If you're building software where architecture, algorithmic rigor, and clean execution matter, I would be glad to connect.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                to="/contact"
                className="px-5 py-2.5 rounded-md text-xs font-semibold bg-[#F4B942] text-[#301934] hover:bg-[#ffc957] transition-colors"
              >
                Send a Message
              </Link>
              <a
                href={`mailto:${profile.email}`}
                className="px-5 py-2.5 rounded-md text-xs font-medium text-[#E8EDF2] border border-[#E8EDF2]/15 hover:border-[#F4B942]/60 transition-colors"
              >
                {profile.email}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
