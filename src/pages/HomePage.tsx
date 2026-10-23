import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Download,
  Award,
  GraduationCap,
  Briefcase,
  Terminal,
  ShieldCheck,
  ExternalLink,
  Sparkles,
  Zap,
  CheckCircle2,
  FileCheck2,
  Eye,
  Mail,
  Flame,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/icons/BrandIcons';
import { usePortfolio } from '../context/PortfolioContext';
import { StatCounter } from '../components/StatCounter';

export const HomePage: React.FC = () => {
  const { profile, academicVault, codingStats, projects, openDocumentViewer, openRecruiterView } = usePortfolio();

  return (
    <div className="w-full space-y-24 pb-16">
      {/* HERO SECTION — Digital Identity */}
      <section id="hero" className="relative pt-12 md:pt-20 lg:pt-24 overflow-hidden">
        {/* Ambient Aubergine & Marigold Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none">
          <div className="absolute top-10 left-1/4 w-96 h-96 bg-[#301934] rounded-full blur-[140px] opacity-70"></div>
          <div className="absolute top-20 right-1/4 w-80 h-80 bg-[#F4B942]/10 rounded-full blur-[120px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content Column */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-6"
            >
              {/* Availability Indicator */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#301934] border border-[#F4B942]/40 shadow-sm text-xs text-[#E8EDF2]">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="font-medium">{profile.status}</span>
              </div>

              {/* Main Heading & Role */}
              <div className="space-y-2">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black font-display tracking-tight text-[#E8EDF2] leading-[1.08]">
                  Santu <span className="text-[#F4B942]">Nandi</span>
                </h1>
                <p className="text-lg sm:text-xl font-semibold text-[#E8EDF2]/90">
                  Java Full Stack Developer | Computer Science Engineering Student
                </p>
                <p className="text-sm font-mono text-[#F4B942] tracking-wide">
                  Chandigarh University • B.E. CSE (CGPA: {profile.keyStats.universityCgpa})
                </p>
              </div>

              {/* Editorial Intro */}
              <p className="text-sm sm:text-base text-[#A592AD] leading-relaxed max-w-2xl">
                Engineering high-concurrency backend services, robust microservices, and modern React user experiences. Experienced in Java 17, Spring Boot, Spring Security, PostgreSQL, and AWS S3, supported by a verifiable record of <strong className="text-[#E8EDF2] font-semibold">{profile.keyStats.dsaSolved}+ algorithmic solutions</strong> and a <strong className="text-[#F4B942] font-semibold">{profile.keyStats.leetcodeRating} LeetCode contest rating</strong>.
              </p>

              {/* Primary Call-to-Actions */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  to="/projects"
                  className="px-6 py-3 rounded-xl text-sm font-bold bg-[#F4B942] text-[#301934] hover:bg-[#ffc957] transition-all shadow-lg marigold-glow flex items-center gap-2 group"
                >
                  <span>Explore My Work</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  to="/resume"
                  className="px-6 py-3 rounded-xl text-sm font-semibold bg-[#301934] text-[#E8EDF2] border border-[#E8EDF2]/25 hover:border-[#F4B942]/60 hover:bg-[#3D1E42] transition-all flex items-center gap-2"
                >
                  <Download className="w-4 h-4 text-[#F4B942]" />
                  <span>Download Resume</span>
                </Link>

                <Link
                  to="/achievements"
                  className="px-5 py-3 rounded-xl text-sm font-medium text-[#E8EDF2]/90 hover:text-[#F4B942] hover:bg-[#301934]/40 transition-all flex items-center gap-2"
                >
                  <Award className="w-4 h-4 text-[#F4B942]" />
                  <span>Achievements</span>
                </Link>
              </div>

              {/* Social Links Row */}
              <div className="pt-4 border-t border-[#E8EDF2]/10 flex flex-wrap items-center gap-4 text-xs text-[#A592AD]">
                <span className="font-semibold text-[#E8EDF2]/80">Connect & Profiles:</span>
                <div className="flex items-center gap-3">
                  <a
                    href={profile.socials.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-[#261329] border border-[#E8EDF2]/15 text-[#E8EDF2] hover:text-[#F4B942] hover:border-[#F4B942]/40 transition-all"
                    title="GitHub"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={profile.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-[#261329] border border-[#E8EDF2]/15 text-[#E8EDF2] hover:text-[#F4B942] hover:border-[#F4B942]/40 transition-all"
                    title="LinkedIn"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={profile.socials.leetcode}
                    target="_blank"
                    rel="noreferrer"
                    className="px-2.5 py-1.5 rounded-lg bg-[#261329] border border-[#E8EDF2]/15 text-xs text-[#E8EDF2] hover:text-[#F4B942] hover:border-[#F4B942]/40 transition-all font-mono font-medium"
                    title="LeetCode Profile"
                  >
                    LeetCode: 1660
                  </a>
                  <a
                    href={profile.socials.codolio}
                    target="_blank"
                    rel="noreferrer"
                    className="px-2.5 py-1.5 rounded-lg bg-[#261329] border border-[#E8EDF2]/15 text-xs text-[#E8EDF2] hover:text-[#F4B942] hover:border-[#F4B942]/40 transition-all font-mono font-medium"
                    title="Codolio Profile"
                  >
                    Codolio: 850+
                  </a>
                  <a
                    href={`mailto:${profile.email}`}
                    className="p-2 rounded-lg bg-[#261329] border border-[#E8EDF2]/15 text-[#E8EDF2] hover:text-[#F4B942] hover:border-[#F4B942]/40 transition-all"
                    title="Email Santu Nandi"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right Profile & Command Center Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-5"
            >
              <div className="relative mx-auto max-w-md">
                {/* Silver Border Frame */}
                <div className="relative rounded-2xl bg-gradient-to-b from-[#301934] to-[#1E0F21] p-1 border-2 border-[#E8EDF2]/25 shadow-2xl silver-border-glow">
                  {/* Inner Content Card */}
                  <div className="rounded-xl bg-[#261329] p-6 space-y-6">
                    {/* Top Identity Badge */}
                    <div className="flex items-center justify-between border-b border-[#E8EDF2]/10 pb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#301934] to-[#4A2552] border border-[#F4B942] flex items-center justify-center text-[#F4B942] font-black text-xl shadow-md">
                          SN
                        </div>
                        <div>
                          <h3 className="font-bold text-[#E8EDF2] text-sm flex items-center gap-1.5">
                            Santu Nandi
                            <CheckCircle2 className="w-4 h-4 text-[#F4B942]" />
                          </h3>
                          <span className="text-[11px] text-[#A592AD]">Developer Command Center</span>
                        </div>
                      </div>

                      <button
                        onClick={openRecruiterView}
                        className="px-2.5 py-1 rounded-md bg-[#F4B942]/15 text-[#F4B942] border border-[#F4B942]/30 text-xs font-semibold hover:bg-[#F4B942] hover:text-[#301934] transition-all flex items-center gap-1"
                      >
                        <Zap className="w-3 h-3" />
                        <span>Quick View</span>
                      </button>
                    </div>

                    {/* Verified Quick Stats Bento */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3 rounded-lg bg-[#1A0A1C] border border-[#E8EDF2]/10">
                        <div className="flex items-center justify-between text-[#A592AD] text-[10px] uppercase font-semibold">
                          <span>DSA Solved</span>
                          <Terminal className="w-3 h-3 text-[#F4B942]" />
                        </div>
                        <div className="text-2xl font-black text-[#E8EDF2] mt-1">
                          <StatCounter value={850} suffix="+" />
                        </div>
                        <span className="text-[10px] text-emerald-400">Multi-Platform Solved</span>
                      </div>

                      <div className="p-3 rounded-lg bg-[#1A0A1C] border border-[#E8EDF2]/10">
                        <div className="flex items-center justify-between text-[#A592AD] text-[10px] uppercase font-semibold">
                          <span>LeetCode Rating</span>
                          <Flame className="w-3 h-3 text-[#F4B942]" />
                        </div>
                        <div className="text-2xl font-black text-[#F4B942] mt-1">
                          <StatCounter value={profile.keyStats.leetcodeRating} />
                        </div>
                        <span className="text-[10px] text-[#A592AD]">Top 12% Worldwide</span>
                      </div>

                      <div className="p-3 rounded-lg bg-[#1A0A1C] border border-[#E8EDF2]/10">
                        <div className="flex items-center justify-between text-[#A592AD] text-[10px] uppercase font-semibold">
                          <span>University CGPA</span>
                          <GraduationCap className="w-3 h-3 text-[#F4B942]" />
                        </div>
                        <div className="text-2xl font-black text-[#E8EDF2] mt-1">
                          <StatCounter value={profile.keyStats.universityCgpa} decimals={2} suffix=" / 10" />
                        </div>
                        <span className="text-[10px] text-[#A592AD]">Chandigarh University</span>
                      </div>

                      <div className="p-3 rounded-lg bg-[#1A0A1C] border border-[#E8EDF2]/10">
                        <div className="flex items-center justify-between text-[#A592AD] text-[10px] uppercase font-semibold">
                          <span>Class X Merit</span>
                          <Award className="w-3 h-3 text-[#F4B942]" />
                        </div>
                        <div className="text-2xl font-black text-[#F4B942] mt-1">
                          <StatCounter value={94.14} decimals={2} suffix="%" />
                        </div>
                        <span className="text-[10px] text-emerald-400">Top 0.5% Statewide</span>
                      </div>
                    </div>

                    {/* Academic Vault Spotlight Teaser */}
                    <div className="p-3.5 rounded-lg bg-gradient-to-r from-[#301934] to-[#251228] border border-[#F4B942]/30 flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <FileCheck2 className="w-5 h-5 text-[#F4B942]" />
                        <div>
                          <p className="text-xs font-bold text-[#E8EDF2]">The Academic Vault</p>
                          <p className="text-[10px] text-[#A592AD]">3 Authenticated Documents Ready</p>
                        </div>
                      </div>
                      <Link
                        to="/education"
                        className="text-xs text-[#F4B942] hover:underline flex items-center gap-1 font-semibold"
                      >
                        Enter Vault <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 5 SPOTLIGHT: THE ACADEMIC VAULT */}
      <section id="education" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-4 border-b border-[#E8EDF2]/15">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#F4B942] mb-1">
              <ShieldCheck className="w-4 h-4" /> Signature Feature
            </div>
            <h2 className="text-3xl font-black text-[#E8EDF2] font-display">
              The Academic Vault
            </h2>
            <p className="text-xs sm:text-sm text-[#A592AD] mt-1">
              Digital archive preserving original educational milestones, verified board marksheets, and official transcripts.
            </p>
          </div>

          <Link
            to="/education"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#F4B942] hover:text-[#ffc957] transition-colors"
          >
            <span>Explore Full Vault & Transcripts</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 3 Academic Vault Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {academicVault.map((record) => (
            <div
              key={record.id}
              className="rounded-2xl bg-[#261329] border border-[#E8EDF2]/15 p-6 hover:border-[#F4B942]/60 transition-all flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-[#160A18] text-[#F4B942] border border-[#F4B942]/20">
                    {record.level.toUpperCase()}
                  </span>
                  <span className="flex items-center gap-1 text-[11px] text-emerald-400 font-semibold">
                    <ShieldCheck className="w-3.5 h-3.5" /> Verified
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-bold text-[#E8EDF2] leading-snug group-hover:text-[#F4B942] transition-colors">
                    {record.title}
                  </h3>
                  <p className="text-xs text-[#A592AD] mt-1">{record.institution}</p>
                </div>

                {/* Score Big Display */}
                <div className="p-3 rounded-xl bg-[#1D0C1F] border border-[#E8EDF2]/10 flex items-center justify-between">
                  <span className="text-xs text-[#A592AD]">{record.scoreLabel}</span>
                  <span className="text-xl font-black text-[#F4B942] font-mono">
                    {record.scoreValue}
                  </span>
                </div>

                <p className="text-xs text-[#A592AD] line-clamp-2">
                  {record.highlights[0]}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-4 border-t border-[#E8EDF2]/10 flex items-center gap-2">
                <button
                  onClick={() => openDocumentViewer(record)}
                  className="flex-1 py-2 rounded-lg text-xs font-bold bg-[#F4B942] text-[#301934] hover:bg-[#ffc957] transition-all flex items-center justify-center gap-1.5 shadow"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Open Document</span>
                </button>
                <Link
                  to="/education"
                  className="px-3 py-2 rounded-lg text-xs font-semibold bg-[#301934] text-[#E8EDF2] border border-[#E8EDF2]/20 hover:border-[#F4B942]/40 transition-colors"
                  title="View Breakdown"
                >
                  Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 9 SPOTLIGHT: FEATURED PRODUCTION PROJECTS */}
      <section id="projects" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-4 border-b border-[#E8EDF2]/15">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#F4B942] mb-1">
              <Briefcase className="w-4 h-4" /> Production Systems
            </div>
            <h2 className="text-3xl font-black text-[#E8EDF2] font-display">
              Featured Engineering Projects
            </h2>
            <p className="text-xs sm:text-sm text-[#A592AD] mt-1">
              Mission-critical full-stack architectures built with Java 17, Spring Boot, React, and automated algorithms.
            </p>
          </div>

          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#F4B942] hover:text-[#ffc957] transition-colors"
          >
            <span>View All Architecture Case Studies</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 2 Flagship Project Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl bg-[#261329] border border-[#E8EDF2]/15 overflow-hidden hover:border-[#F4B942]/60 transition-all flex flex-col justify-between group"
            >
              <div className="p-6 md:p-8 space-y-5">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded bg-[#301934] text-[#F4B942] border border-[#F4B942]/30 font-semibold">
                    {project.category}
                  </span>
                  <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> {project.status}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-black text-[#E8EDF2] group-hover:text-[#F4B942] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A592AD] mt-2 leading-relaxed">
                    {project.tagline}
                  </p>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 7).map((tech, i) => (
                    <span
                      key={i}
                      className="text-[11px] font-medium bg-[#1D0C1F] text-[#E8EDF2] px-2.5 py-1 rounded border border-[#E8EDF2]/10"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 7 && (
                    <span className="text-[11px] font-medium bg-[#301934] text-[#F4B942] px-2 py-1 rounded">
                      +{project.technologies.length - 7} more
                    </span>
                  )}
                </div>

                {/* Highlights List */}
                <div className="p-4 rounded-xl bg-[#1B0B1D] border border-[#E8EDF2]/10 space-y-2 text-xs text-[#A592AD]">
                  <p className="font-semibold text-[#E8EDF2] flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#F4B942]" /> Key Implementation Highlights:
                  </p>
                  <ul className="list-disc list-inside space-y-1 pl-1">
                    {project.keyFeatures.slice(0, 3).map((feat, idx) => (
                      <li key={idx}>
                        <strong className="text-[#E8EDF2]">{feat.title}:</strong> {feat.description.slice(0, 80)}...
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer CTAs */}
              <div className="p-6 bg-[#301934] border-t border-[#E8EDF2]/10 flex flex-wrap items-center justify-between gap-3">
                <Link
                  to={`/projects/${project.slug}`}
                  className="px-4 py-2 rounded-lg text-xs font-bold bg-[#F4B942] text-[#301934] hover:bg-[#ffc957] transition-all flex items-center gap-1.5 shadow"
                >
                  <span>Full Case Study & Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <div className="flex items-center gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-[#E8EDF2] hover:text-[#F4B942] flex items-center gap-1"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>Repository</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 6 SPOTLIGHT: CODING HALL OF FAME */}
      <section id="achievements" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-4 border-b border-[#E8EDF2]/15">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#F4B942] mb-1">
              <Flame className="w-4 h-4" /> Competitive Programming
            </div>
            <h2 className="text-3xl font-black text-[#E8EDF2] font-display">
              Coding Hall of Fame
            </h2>
            <p className="text-xs sm:text-sm text-[#A592AD] mt-1">
              Rigorous problem solving records across LeetCode, Codolio, Codeforces, CodeChef, and GeeksforGeeks.
            </p>
          </div>

          <Link
            to="/achievements"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#F4B942] hover:text-[#ffc957] transition-colors"
          >
            <span>View All Platform Stats & Badges</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Coding Cards Bento */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {codingStats.slice(0, 3).map((platform) => (
            <div
              key={platform.id}
              className="rounded-2xl bg-[#261329] border border-[#E8EDF2]/15 p-6 hover:border-[#F4B942]/60 transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-[#E8EDF2]">{platform.platform}</span>
                  <span className="font-mono text-xs text-[#A592AD]">@{platform.username}</span>
                </div>

                <div className="p-4 rounded-xl bg-[#1B0B1D] border border-[#E8EDF2]/10 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-semibold text-[#A592AD] block">
                      {platform.rating ? 'Contest Rating' : 'Problems Solved'}
                    </span>
                    <span className="text-2xl font-black text-[#F4B942] font-mono">
                      {platform.rating || `${platform.problemsSolved}+`}
                    </span>
                  </div>
                  <span className="text-xs text-emerald-400 font-semibold px-2 py-1 rounded bg-emerald-500/10 border border-emerald-500/20">
                    {platform.ratingTier || 'Verified Profile'}
                  </span>
                </div>

                {platform.topicBreakdown && (
                  <div className="space-y-1.5 text-xs">
                    <span className="text-[10px] text-[#A592AD] font-semibold uppercase block">
                      Top Problem Domains:
                    </span>
                    <div className="space-y-1">
                      {platform.topicBreakdown.slice(0, 3).map((topic, idx) => (
                        <div key={idx} className="flex items-center justify-between text-xs text-[#A592AD]">
                          <span>{topic.topic}</span>
                          <span className="font-mono text-[#E8EDF2] font-semibold">{topic.solved} solved</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-[#E8EDF2]/10 flex items-center justify-between">
                <span className="text-[10px] text-[#A592AD]">Updated: {platform.lastUpdated}</span>
                <a
                  href={platform.profileUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-[#F4B942] hover:underline flex items-center gap-1 font-semibold"
                >
                  Public Profile <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* RECRUITER CALLOUT BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-[#301934] via-[#3E1C44] to-[#1E0F21] border-2 border-[#F4B942]/40 p-8 md:p-12 text-center md:text-left relative overflow-hidden shadow-2xl">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-xl">
              <span className="inline-block px-3 py-1 rounded-full bg-[#F4B942] text-[#301934] text-xs font-bold uppercase tracking-wider">
                Recruiter Direct Channel
              </span>
              <h3 className="text-2xl md:text-3xl font-black text-[#E8EDF2] font-display">
                Need a 60-Second Profile Overview?
              </h3>
              <p className="text-xs sm:text-sm text-[#E8EDF2]/80 leading-relaxed">
                Review verified graduation timeline, core Java and Spring microservice stack, top algorithmic milestones, and contact information in one single interactive view.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={openRecruiterView}
                className="px-6 py-3.5 rounded-xl text-sm font-bold bg-[#F4B942] text-[#301934] hover:bg-[#ffc957] transition-all shadow-lg flex items-center gap-2 marigold-glow"
              >
                <Zap className="w-4 h-4" />
                <span>Launch Recruiter Quick View</span>
              </button>

              <Link
                to="/contact"
                className="px-6 py-3.5 rounded-xl text-sm font-semibold bg-[#1E0F21] text-[#E8EDF2] border border-[#E8EDF2]/25 hover:border-[#F4B942] transition-colors"
              >
                Schedule an Interview
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
