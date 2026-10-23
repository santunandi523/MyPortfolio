import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Briefcase,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Layers,
  Server,
  Code2,
  ShieldCheck,
  ExternalLink,
} from 'lucide-react';
import { GithubIcon } from '../components/icons/BrandIcons';
import { usePortfolio } from '../context/PortfolioContext';

export const ProjectsPage: React.FC = () => {
  const { projects } = usePortfolio();

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#301934] border border-[#F4B942]/40 text-xs font-bold text-[#F4B942] uppercase tracking-wider">
          <Briefcase className="w-4 h-4" /> Production Deliverables
        </div>
        <h1 className="text-4xl sm:text-5xl font-black font-display text-[#E8EDF2] tracking-tight">
          Featured Engineering Projects
        </h1>
        <p className="text-sm sm:text-base text-[#A592AD] leading-relaxed">
          Deep-dive case studies into high-concurrency microservices, AI-augmented commerce systems, and automated regulatory compliance pipelines.
        </p>
      </div>

      {/* Flagship Projects Showcase */}
      <div className="space-y-12">
        {projects.map((project, idx) => (
          <div
            key={project.id}
            className="rounded-3xl bg-[#261329] border-2 border-[#E8EDF2]/15 overflow-hidden hover:border-[#F4B942]/60 transition-all shadow-xl silver-border-glow"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Left Details Column */}
              <div className="lg:col-span-7 p-6 sm:p-8 md:p-10 space-y-6 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-xs font-mono uppercase font-bold px-3 py-1 rounded-full bg-[#301934] text-[#F4B942] border border-[#F4B942]/30">
                      Flagship System 0{idx + 1}
                    </span>
                    <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/15 border border-emerald-500/30 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> {project.status}
                    </span>
                    <span className="text-xs text-[#A592AD] font-mono">
                      Role: {project.role}
                    </span>
                  </div>

                  <div>
                    <h2 className="text-2xl sm:text-3xl font-black text-[#E8EDF2] tracking-tight">
                      {project.title}
                    </h2>
                    <p className="text-sm text-[#A592AD] mt-2 leading-relaxed">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs font-medium bg-[#1A0A1C] text-[#E8EDF2] px-2.5 py-1 rounded-lg border border-[#E8EDF2]/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Summary Overview */}
                  <p className="text-xs sm:text-sm text-[#A592AD] leading-relaxed pt-2">
                    {project.overview}
                  </p>
                </div>

                {/* Bottom Actions */}
                <div className="pt-6 border-t border-[#E8EDF2]/10 flex flex-wrap items-center gap-4">
                  <Link
                    to={`/projects/${project.slug}`}
                    className="px-6 py-3 rounded-xl text-xs font-bold bg-[#F4B942] text-[#301934] hover:bg-[#ffc957] transition-all flex items-center gap-2 shadow marigold-glow"
                  >
                    <span>Read Architecture Case Study</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-3 rounded-xl text-xs font-semibold bg-[#1A0A1C] text-[#E8EDF2] border border-[#E8EDF2]/20 hover:border-[#F4B942]/50 transition-colors flex items-center gap-2"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>View GitHub Repo</span>
                  </a>
                </div>
              </div>

              {/* Right Architecture & Highlights Preview Column */}
              <div className="lg:col-span-5 bg-[#1E0F21] p-6 sm:p-8 border-t lg:border-t-0 lg:border-l border-[#E8EDF2]/10 flex flex-col justify-between space-y-6">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#F4B942] flex items-center gap-1.5 mb-4">
                    <Layers className="w-4 h-4" /> Architectural Highlights
                  </h3>

                  <div className="space-y-3">
                    {project.keyFeatures.slice(0, 4).map((feat, fIdx) => (
                      <div
                        key={fIdx}
                        className="p-3.5 rounded-xl bg-[#28132B] border border-[#E8EDF2]/10 space-y-1"
                      >
                        <h4 className="text-xs font-bold text-[#E8EDF2] flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5 text-[#F4B942]" /> {feat.title}
                        </h4>
                        <p className="text-[11px] text-[#A592AD] leading-relaxed">
                          {feat.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#160A18] border border-[#E8EDF2]/10 text-xs text-[#A592AD] flex items-center justify-between">
                  <div>
                    <span className="text-[#E8EDF2] font-semibold block">Case Study Specs</span>
                    <span className="text-[10px]">Data Flow, Decisions & Bounding Box Logic</span>
                  </div>
                  <Link
                    to={`/projects/${project.slug}`}
                    className="text-[#F4B942] font-bold hover:underline flex items-center gap-1"
                  >
                    Inspect <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
