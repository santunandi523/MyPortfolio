import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, ShieldCheck, ScanLine, CheckSquare, Layers, Server, AlertTriangle, CheckCircle2, } from 'lucide-react';
import { GithubIcon } from '../components/icons/BrandIcons';
import { usePortfolio } from '../context/PortfolioContext';
export const PackSureCaseStudyPage = () => {
    const { projects } = usePortfolio();
    const project = projects.find((p) => p.slug === 'packsure') || projects[1];
    // Interactive Bounding Box Inspector State
    const tags = [
        {
            id: 'mrp',
            label: 'Maximum Retail Price (MRP)',
            extractedText: 'MRP ₹ 249.00 (INCL. OF ALL TAXES)',
            statutoryRule: 'Legal Metrology Rule 6(1)(e): Must include "inclusive of all taxes" declaration.',
            isCompliant: true,
            confidence: 98.4,
            bbox: { top: '32%', left: '18%', width: '45%', height: '12%' },
            reason: 'Pass: Proper rupee symbol, price format, and mandatory statutory suffix present.',
        },
        {
            id: 'net-qty',
            label: 'Net Quantity Specification',
            extractedText: 'NET QTY: 500 g',
            statutoryRule: 'Legal Metrology Rule 11: Metric units must follow standardized SI abbreviations (g, kg, ml).',
            isCompliant: true,
            confidence: 96.8,
            bbox: { top: '48%', left: '20%', width: '38%', height: '10%' },
            reason: 'Pass: Metric symbol "g" complies with standard unit declarations.',
        },
        {
            id: 'dates',
            label: 'Manufacture & Expiry Dates',
            extractedText: 'MFG: 08/2024 • USE BY: 08/2025',
            statutoryRule: 'Legal Metrology Rule 6(1)(d): Month and year format mandatory for commodities subject to perishability.',
            isCompliant: true,
            confidence: 94.2,
            bbox: { top: '62%', left: '16%', width: '52%', height: '11%' },
            reason: 'Pass: Dual Month/Year numerical format strictly valid.',
        },
        {
            id: 'origin',
            label: 'Country of Origin & Mfg Address',
            extractedText: 'MFD BY: HERBAL BIOSCIENCES LTD, PLOT 42, GUJARAT, INDIA. COUNTRY OF ORIGIN: INDIA',
            statutoryRule: 'Legal Metrology Rule 6(1)(a): Complete registered manufacturer postal address and country of origin required.',
            isCompliant: true,
            confidence: 92.1,
            bbox: { top: '76%', left: '12%', width: '64%', height: '15%' },
            reason: 'Pass: Registered jurisdiction and explicit origin tag verified against company registry.',
        },
    ];
    const [activeTagId, setActiveTagId] = useState('mrp');
    const activeTag = tags.find((t) => t.id === activeTagId) || tags[0];
    return (<div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Back Link */}
      <div>
        <Link to="/projects" className="inline-flex items-center gap-2 text-xs font-bold text-[#F4B942] hover:underline">
          <ArrowLeft className="w-4 h-4"/>
          <span>Back to All Projects</span>
        </Link>
      </div>

      {/* Header Banner */}
      <div className="space-y-6">
        <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#A592AD]">
          <span className="text-[#F4B942] uppercase font-semibold">
            Case Study • Computer Vision & Compliance
          </span>
          <span>•</span>
          <span>Role: {project.role}</span>
          <span>•</span>
          <span>{project.duration}</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-[#E8EDF2] tracking-tight leading-tight">
          {project.title}
        </h1>

        <p className="text-base sm:text-lg text-[#A592AD] leading-relaxed max-w-4xl">
          {project.tagline}
        </p>

        {/* Tech Stack Chips */}
        <div className="flex flex-wrap gap-2 pt-2">
          {project.technologies.map((t, idx) => (<span key={idx} className="text-xs font-semibold bg-[#261329] text-[#E8EDF2] px-3 py-1 rounded-lg border border-[#E8EDF2]/15 shadow-sm">
              {t}
            </span>))}
        </div>

        {/* Repository & Demo Bar */}
        <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-[#E8EDF2]/10">
          <a href={project.githubUrl} target="_blank" rel="noreferrer" className="px-5 py-2.5 rounded-xl text-xs font-bold bg-[#F4B942] text-[#301934] hover:bg-[#ffc957] transition-all flex items-center gap-2 shadow marigold-glow">
            <GithubIcon className="w-4 h-4"/>
            <span>GitHub Repository</span>
          </a>

          <a href={project.liveUrl} target="_blank" rel="noreferrer" className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-[#261329] text-[#E8EDF2] border border-[#E8EDF2]/20 hover:border-[#F4B942]/50 transition-colors flex items-center gap-2">
            <ExternalLink className="w-4 h-4 text-[#F4B942]"/>
            <span>Live Demonstration</span>
          </a>
        </div>
      </div>

      {/* Problem & Solution Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="rounded-2xl bg-[#261329] border border-[#E8EDF2]/15 p-6 md:p-8 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
            <AlertTriangle className="w-4 h-4"/> The Problem Space
          </div>
          <h3 className="text-xl font-bold text-[#E8EDF2]">
            Manual Statutory Label Audits at E-Commerce Scale
          </h3>
          <p className="text-xs sm:text-sm text-[#A592AD] leading-relaxed">
            {project.problemStatement}
          </p>
        </div>

        <div className="rounded-2xl bg-[#261329] border border-[#E8EDF2]/15 p-6 md:p-8 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider">
            <CheckCircle2 className="w-4 h-4"/> The Architectural Solution
          </div>
          <h3 className="text-xl font-bold text-[#E8EDF2]">
            Decoupled Vision Pipeline & Deterministic Spring Boot Rules
          </h3>
          <p className="text-xs sm:text-sm text-[#A592AD] leading-relaxed">
            {project.solution}
          </p>
        </div>
      </div>

      {/* INTERACTIVE FEATURE: BOUNDING BOX & STATUTORY RULES INSPECTOR */}
      <div className="rounded-3xl bg-gradient-to-br from-[#301934] to-[#1E0F21] border-2 border-[#F4B942]/40 p-6 sm:p-8 md:p-10 shadow-2xl space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#E8EDF2]/15">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#F4B942]">
              <ScanLine className="w-4 h-4"/> Interactive Demo Component
            </div>
            <h3 className="text-2xl font-black text-[#E8EDF2]">
              Legal Metrology Bounding Box Canvas Inspector
            </h3>
            <p className="text-xs text-[#A592AD]">
              Click any statutory declaration clause to inspect its localized bounding box, OCR confidence score, and deterministic rule verdict.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Simulated Product Package with Active Bounding Box */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-[360px] aspect-[3/4] bg-[#F2F4F7] rounded-2xl border-4 border-[#301934] p-6 shadow-2xl flex flex-col justify-between overflow-hidden select-none">
              {/* Product Branding Header */}
              <div className="text-center border-b border-gray-300 pb-3">
                <span className="text-[9px] font-sans font-bold uppercase tracking-widest text-emerald-700 block">
                  100% Certified Organic
                </span>
                <h4 className="text-xl font-black text-gray-900 tracking-tight font-serif">
                  AURA BOTANICS
                </h4>
                <p className="text-[10px] text-gray-600 font-sans">Cold-Pressed Extra Virgin Olive Oil</p>
              </div>

              {/* Mock Nutritional & Legal Text on package */}
              <div className="space-y-4 my-auto text-[10px] font-mono text-gray-700 leading-tight">
                <div className="p-1.5 rounded bg-gray-100">
                  <span className="font-bold text-gray-900">MRP ₹ 249.00 (INCL. OF ALL TAXES)</span>
                </div>
                <div className="p-1.5 rounded bg-gray-100">
                  <span className="font-bold text-gray-900">NET QTY: 500 g</span>
                </div>
                <div className="p-1.5 rounded bg-gray-100">
                  <span>MFG: 08/2024 • USE BY: 08/2025</span>
                </div>
                <div className="p-1.5 rounded bg-gray-100 text-[8px]">
                  <span>MFD BY: HERBAL BIOSCIENCES LTD, PLOT 42, GUJARAT, INDIA. ORIGIN: INDIA</span>
                </div>
              </div>

              <div className="text-center text-[9px] text-gray-500 border-t pt-2">
                BARCODE: 8901234567890 • FSSAI LIC NO. 10014022002491
              </div>

              {/* Dynamic Bounding Box Highlight Overlay */}
              <motion.div key={activeTag.id} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="absolute border-2 border-emerald-500 bg-emerald-500/20 rounded pointer-events-none shadow-lg z-20 flex items-start" style={{
            top: activeTag.bbox.top,
            left: activeTag.bbox.left,
            width: activeTag.bbox.width,
            height: activeTag.bbox.height,
        }}>
                <span className="bg-emerald-600 text-white font-mono text-[8px] font-bold px-1.5 py-0.5 rounded-br uppercase tracking-wider">
                  {activeTag.confidence}% Conf
                </span>
              </motion.div>
            </div>
          </div>

          {/* Interactive Selector & Rule Verdicts */}
          <div className="lg:col-span-6 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#A592AD]">
              Select Statutory Declaration Zone:
            </h4>

            <div className="space-y-2.5">
              {tags.map((tag) => {
            const isSelected = tag.id === activeTag.id;
            return (<div key={tag.id} onClick={() => setActiveTagId(tag.id)} className={`cursor-pointer p-4 rounded-xl border transition-all ${isSelected
                    ? 'bg-[#301934] border-[#F4B942] shadow-md'
                    : 'bg-[#220F26] border-[#E8EDF2]/10 hover:border-[#E8EDF2]/30'}`}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-[#E8EDF2] flex items-center gap-1.5">
                        <CheckSquare className="w-3.5 h-3.5 text-[#F4B942]"/>
                        {tag.label}
                      </span>
                      <span className="text-[10px] font-mono text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded">
                        {tag.confidence}% Match
                      </span>
                    </div>

                    <p className="font-mono text-[11px] text-[#F4B942] truncate">
                      "{tag.extractedText}"
                    </p>
                  </div>);
        })}
            </div>

            {/* Active Rule Verdict Card */}
            <div className="p-4 rounded-xl bg-[#120914] border border-[#E8EDF2]/15 space-y-2 text-xs">
              <div className="flex items-center justify-between border-b border-[#E8EDF2]/10 pb-2">
                <span className="font-bold text-[#E8EDF2] flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400"/>
                  Deterministic Rule Verdict:
                </span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold text-[10px] uppercase">
                  COMPLIANT
                </span>
              </div>
              <p className="text-[11px] text-[#A592AD]">
                <strong>Statutory Clause:</strong> {activeTag.statutoryRule}
              </p>
              <p className="text-[11px] text-emerald-400">
                <strong>Evaluation:</strong> {activeTag.reason}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ARCHITECTURAL BREAKDOWN */}
      <div className="space-y-6">
        <div className="pb-3 border-b border-[#E8EDF2]/15">
          <h2 className="text-2xl font-black text-[#E8EDF2] flex items-center gap-2">
            <Layers className="w-5 h-5 text-[#F4B942]"/> Microservices Architecture & Pipeline
          </h2>
          <p className="text-xs sm:text-sm text-[#A592AD] mt-1">
            {project.architectureDescription}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {project.architectureComponents.map((comp, idx) => (<div key={idx} className="p-5 rounded-2xl bg-[#261329] border border-[#E8EDF2]/15 space-y-2 hover:border-[#F4B942]/50 transition-all">
              <span className="text-[10px] font-mono font-bold text-[#F4B942] uppercase tracking-wider block">
                0{idx + 1} • {comp.layer}
              </span>
              <h4 className="text-sm font-bold text-[#E8EDF2]">{comp.tech}</h4>
              <p className="text-xs text-[#A592AD] leading-relaxed">
                {comp.description}
              </p>
            </div>))}
        </div>
      </div>

      {/* KEY ENGINEERING DECISIONS */}
      <div className="space-y-6">
        <div className="pb-3 border-b border-[#E8EDF2]/15">
          <h2 className="text-2xl font-black text-[#E8EDF2] flex items-center gap-2">
            <Server className="w-5 h-5 text-[#F4B942]"/> Critical Engineering Decisions
          </h2>
        </div>

        <div className="space-y-4">
          {project.engineeringDecisions.map((dec, idx) => (<div key={idx} className="rounded-2xl bg-[#261329] border border-[#E8EDF2]/15 p-6 space-y-3">
              <h3 className="text-base font-bold text-[#E8EDF2] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#F4B942]"></span>
                {dec.decision}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="p-3.5 rounded-xl bg-[#1A0A1C] border border-[#E8EDF2]/10 space-y-1">
                  <span className="text-[10px] uppercase font-bold text-[#F4B942] tracking-wider block">
                    Technical Rationale:
                  </span>
                  <p className="text-[#E8EDF2]/90 leading-relaxed">{dec.rationale}</p>
                </div>
                <div className="p-3.5 rounded-xl bg-[#1A0A1C] border border-[#E8EDF2]/10 space-y-1">
                  <span className="text-[10px] uppercase font-bold text-[#A592AD] tracking-wider block">
                    Alternatives Evaluated & Dismissed:
                  </span>
                  <p className="text-[#A592AD] leading-relaxed">{dec.alternativesConsidered}</p>
                </div>
              </div>
            </div>))}
        </div>
      </div>

      {/* ROADBLOCKS & RESOLUTIONS */}
      <div className="space-y-6">
        <div className="pb-3 border-b border-[#E8EDF2]/15">
          <h2 className="text-2xl font-black text-[#E8EDF2] flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#F4B942]"/> Technical Roadblocks & Resolutions
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {project.challengesAndLearnings.map((item, idx) => (<div key={idx} className="p-6 rounded-2xl bg-[#261329] border border-[#E8EDF2]/15 space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-[10px] font-mono text-amber-400 uppercase font-bold">
                  Roadblock 0{idx + 1}
                </span>
                <p className="text-xs font-semibold text-[#E8EDF2] leading-snug">
                  {item.challenge}
                </p>
              </div>

              <div className="pt-3 border-t border-[#E8EDF2]/10">
                <span className="text-[10px] uppercase font-bold text-emerald-400 tracking-wider block mb-1">
                  Production Fix:
                </span>
                <p className="text-xs text-[#A592AD] leading-relaxed">
                  {item.resolution}
                </p>
              </div>
            </div>))}
        </div>
      </div>
    </div>);
};
