import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { GithubIcon } from '../components/icons/BrandIcons';
import { usePortfolio } from '../context/PortfolioContext';

export const ProjectsPage = () => {
  const { projects } = usePortfolio();

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24">
      {/* Editorial Header */}
      <div className="max-w-3xl space-y-3">
        <span className="text-xs font-mono uppercase tracking-wider text-[#F4B942]">
          Selected Works
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-[#E8EDF2] tracking-tight">
          Engineering Case Studies
        </h1>
        <p className="text-sm sm:text-base text-[#A592AD] leading-relaxed font-sans">
          A detailed look into full-stack systems I've designed and engineered. Each project represents an end-to-end architecture addressing real operational challenges, from concurrent transactional commerce to automated legal compliance.
        </p>
      </div>

      {/* ─── EDITORIAL CASE STUDIES ─── */}
      <div className="space-y-28">
        {projects.map((project, index) => {
          const isEven = index % 2 === 0;

          return (
            <article
              key={project.id}
              className="border-t border-[#E8EDF2]/10 pt-12 space-y-10"
            >
              {/* Project Title & Metadata Bar */}
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4">
                <div>
                  <span className="text-xs font-mono text-[#F4B942] uppercase tracking-wider">
                    Case Study 0{index + 1} • {project.category}
                  </span>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#E8EDF2] font-display mt-1">
                    {project.title}
                  </h2>
                  <p className="text-xs sm:text-sm font-mono text-[#A592AD] mt-1">
                    Role: {project.role} • {project.duration}
                  </p>
                </div>

                <div className="flex items-center gap-4 text-xs">
                  <Link
                    to={`/projects/${project.slug}`}
                    className="px-4 py-2 rounded-md font-semibold bg-[#F4B942] text-[#301934] hover:bg-[#ffc957] transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#A592AD] hover:text-[#E8EDF2] inline-flex items-center gap-1.5 transition-colors font-medium"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>Source</span>
                  </a>
                </div>
              </div>

              {/* Asymmetric Alternating Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                {/* Left/Narrative Column */}
                <div className={`${isEven ? 'lg:col-span-7' : 'lg:col-span-7 lg:order-2'} space-y-6`}>
                  <p className="text-base text-[#E8EDF2]/90 leading-relaxed font-sans">
                    {project.tagline}
                  </p>

                  <div className="space-y-4 text-xs sm:text-sm text-[#A592AD] leading-relaxed">
                    <div>
                      <h3 className="font-semibold text-xs font-mono text-[#E8EDF2] uppercase tracking-wider mb-1">
                        The Problem
                      </h3>
                      <p>{project.problemStatement}</p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-xs font-mono text-[#E8EDF2] uppercase tracking-wider mb-1">
                        My Contribution & Solution
                      </h3>
                      <p>{project.solution}</p>
                    </div>
                  </div>

                  {/* Technologies Used */}
                  <div className="space-y-2 pt-2">
                    <span className="text-[10px] font-mono uppercase text-[#A592AD] tracking-wider block">
                      Technology Stack
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-xs font-mono px-2.5 py-1 rounded bg-[#1A0A1C] text-[#E8EDF2] border border-[#E8EDF2]/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right/Architectural Column */}
                <div className={`${isEven ? 'lg:col-span-5' : 'lg:col-span-5 lg:order-1'} bg-[#180A1A] border border-[#E8EDF2]/10 rounded-lg p-6 space-y-5`}>
                  <div>
                    <span className="text-xs font-mono text-[#F4B942] uppercase tracking-wider block">
                      Key Engineering Decisions
                    </span>
                    <p className="text-xs text-[#A592AD] mt-1">
                      Architectural trade-offs chosen for resilience and maintainability.
                    </p>
                  </div>

                  <div className="space-y-4 text-xs">
                    {project.engineeringDecisions && project.engineeringDecisions.length > 0 ? (
                      project.engineeringDecisions.map((dec, dIdx) => (
                        <div key={dIdx} className="space-y-1 border-b border-[#E8EDF2]/5 pb-3 last:border-b-0 last:pb-0">
                          <p className="font-semibold text-[#E8EDF2]">{dec.decision}</p>
                          <p className="text-[11px] text-[#A592AD] leading-relaxed">{dec.rationale}</p>
                        </div>
                      ))
                    ) : (
                      project.keyFeatures.slice(0, 3).map((feat, fIdx) => (
                        <div key={fIdx} className="space-y-1 border-b border-[#E8EDF2]/5 pb-3 last:border-b-0 last:pb-0">
                          <p className="font-semibold text-[#E8EDF2]">{feat.title}</p>
                          <p className="text-[11px] text-[#A592AD] leading-relaxed">{feat.description}</p>
                        </div>
                      ))
                    )}
                  </div>

                  <div className="pt-2 border-t border-[#E8EDF2]/10">
                    <Link
                      to={`/projects/${project.slug}`}
                      className="text-xs font-semibold text-[#F4B942] hover:underline inline-flex items-center gap-1"
                    >
                      <span>Explore full technical breakdown</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};
