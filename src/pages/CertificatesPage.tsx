import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  Search,
  FileCheck2,
  ShieldCheck,
  Eye,
  ExternalLink,
  Download,
  Calendar,
  Building,
  Award,
  ArrowUpDown,
  Sparkles,
} from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';
import { CertificateItem } from '../types';

export const CertificatesPage: React.FC = () => {
  const { certificates, openDocumentViewer } = usePortfolio();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortOrder, setSortOrder] = useState<'latest' | 'oldest'>('latest');

  const categories = useMemo(() => {
    return ['All', ...Array.from(new Set(certificates.map((c) => c.category)))];
  }, [certificates]);

  const filteredCertificates = useMemo(() => {
    return certificates
      .filter((cert) => {
        const matchesCategory = selectedCategory === 'All' || cert.category === selectedCategory;
        const matchesQuery =
          cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          cert.issuer.toLowerCase().includes(searchQuery.toLowerCase()) ||
          cert.skills.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));
        return matchesCategory && matchesQuery;
      })
      .sort((a, b) => {
        return sortOrder === 'latest' ? b.id.localeCompare(a.id) : a.id.localeCompare(b.id);
      });
  }, [certificates, selectedCategory, searchQuery, sortOrder]);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#301934] border border-[#F4B942]/40 text-xs font-bold text-[#F4B942] uppercase tracking-wider">
          <Award className="w-4 h-4" /> Verified Credentials & Marksheets
        </div>
        <h1 className="text-4xl sm:text-5xl font-black font-display text-[#E8EDF2] tracking-tight">
          Certificate Gallery
        </h1>
        <p className="text-sm sm:text-base text-[#A592AD] leading-relaxed">
          Inspect original authenticated credentials, proctored certifications, and official board marksheets with high-resolution document previews and verified ledger breakdowns.
        </p>
      </div>

      {/* Filter & Search Bar */}
      <div className="rounded-2xl bg-[#261329] border border-[#E8EDF2]/15 p-5 space-y-4 shadow-md">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Search Input */}
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#A592AD]" />
            <input
              type="text"
              placeholder="Search by skill, title, or issuing organization..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#1A0A1C] border border-[#E8EDF2]/15 rounded-xl pl-10 pr-4 py-2.5 text-xs text-[#E8EDF2] placeholder-[#A592AD]/60 focus:outline-none focus:border-[#F4B942] transition-colors"
            />
          </div>

          {/* Sort Controls */}
          <div className="flex items-center gap-2 w-full md:w-auto justify-end">
            <button
              onClick={() => setSortOrder(sortOrder === 'latest' ? 'oldest' : 'latest')}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#1A0A1C] border border-[#E8EDF2]/15 text-xs text-[#E8EDF2] hover:border-[#F4B942]/50 transition-colors"
            >
              <ArrowUpDown className="w-3.5 h-3.5 text-[#F4B942]" />
              <span>Sort: {sortOrder === 'latest' ? 'Most Recent' : 'Oldest'}</span>
            </button>
          </div>
        </div>

        {/* Category Chips */}
        <div className="flex flex-wrap gap-2 pt-2 border-t border-[#E8EDF2]/10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all border ${
                selectedCategory === cat
                  ? 'bg-[#F4B942] text-[#301934] border-[#F4B942] shadow-sm'
                  : 'bg-[#1E0F21] text-[#E8EDF2]/80 border-[#E8EDF2]/10 hover:border-[#F4B942]/40 hover:text-[#E8EDF2]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between text-xs text-[#A592AD]">
        <span>
          Showing <strong className="text-[#F4B942]">{filteredCertificates.length}</strong> authenticated document{filteredCertificates.length !== 1 ? 's' : ''}
          {selectedCategory !== 'All' && ` in ${selectedCategory}`}
        </span>
        <span>Click any document to inspect full-screen or download PDF</span>
      </div>

      {/* Certificate Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCertificates.map((cert) => (
          <div
            key={cert.id}
            className="rounded-2xl bg-[#261329] border border-[#E8EDF2]/15 hover:border-[#F4B942]/60 transition-all flex flex-col justify-between overflow-hidden group shadow-md"
          >
            {/* Top Preview Frame with Scanned Document Backdrop */}
            <div
              onClick={() => openDocumentViewer(cert)}
              className="cursor-pointer relative h-56 bg-[#140816] border-b border-[#E8EDF2]/10 overflow-hidden group-hover:border-[#F4B942]/40 transition-colors"
            >
              {cert.thumbnailUrl ? (
                <div className="absolute inset-0 overflow-hidden flex items-center justify-center bg-[#1A0A1C]">
                  <img
                    src={cert.thumbnailUrl}
                    alt={cert.title}
                    className="w-full h-full object-cover object-top filter brightness-90 group-hover:scale-105 group-hover:brightness-100 transition-all duration-300"
                  />
                  {/* Aubergine Gradient Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#261329] via-[#301934]/40 to-transparent pointer-events-none" />
                </div>
              ) : (
                <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none select-none">
                  <FileCheck2 className="w-36 h-36 text-[#F4B942]" />
                </div>
              )}

              {/* Badges on Top */}
              <div className="absolute top-3 inset-x-3 flex items-center justify-between z-10">
                <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-[#301934]/90 backdrop-blur-sm text-[#F4B942] border border-[#F4B942]/40 font-semibold shadow">
                  {cert.category}
                </span>
                <span className="text-[11px] font-semibold text-emerald-300 flex items-center gap-1 bg-[#1E0F21]/90 backdrop-blur-sm border border-emerald-500/30 px-2 py-0.5 rounded-full shadow">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Authentic
                </span>
              </div>

              {/* Hover Overlay Hint */}
              <div className="absolute inset-0 bg-[#301934]/85 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2 text-xs font-bold text-[#F4B942] z-20">
                <div className="w-10 h-10 rounded-full bg-[#1E0F21] border border-[#F4B942] flex items-center justify-center shadow-lg">
                  <Eye className="w-5 h-5 text-[#F4B942]" />
                </div>
                <span>Inspect Document & Ledger</span>
              </div>
            </div>

            {/* Bottom Details Section */}
            <div className="p-5 space-y-4 flex-1 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="space-y-1.5">
                  <h3 className="text-sm font-bold text-[#E8EDF2] leading-snug group-hover:text-[#F4B942] transition-colors">
                    {cert.title}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-[#A592AD]">
                    <Building className="w-3.5 h-3.5 text-[#F4B942] shrink-0" />
                    <span className="truncate">{cert.issuer}</span>
                    <span>•</span>
                    <Calendar className="w-3.5 h-3.5 text-[#F4B942] shrink-0" />
                    <span>{cert.issueDate}</span>
                  </div>
                </div>

                {/* Demonstrated Competencies */}
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#A592AD] tracking-wider block mb-1.5">
                    Demonstrated Competencies:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {cert.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] bg-[#1A0A1C] text-[#E8EDF2]/90 px-2 py-0.5 rounded border border-[#E8EDF2]/10"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Credential ID */}
                {cert.credentialId && (
                  <div className="text-[10px] font-mono text-[#A592AD] pt-1">
                    Credential ID: <span className="text-[#E8EDF2] font-semibold">{cert.credentialId}</span>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-[#E8EDF2]/10 flex items-center justify-between gap-2">
                <button
                  onClick={() => openDocumentViewer(cert)}
                  className="flex-1 py-2 rounded-lg text-xs font-bold bg-[#F4B942] text-[#301934] hover:bg-[#ffc957] transition-all flex items-center justify-center gap-1.5 shadow"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Inspect Document</span>
                </button>

                {cert.documentUrl && (
                  <a
                    href={cert.documentUrl}
                    download
                    className="p-2 rounded-lg bg-[#1A0A1C] border border-[#E8EDF2]/15 text-[#E8EDF2] hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
                    title="Download Authentic PDF"
                  >
                    <Download className="w-4 h-4" />
                  </a>
                )}

                {cert.verificationUrl && cert.verificationUrl !== '#' && (
                  <a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-[#1A0A1C] border border-[#E8EDF2]/15 text-[#E8EDF2] hover:text-[#F4B942] hover:border-[#F4B942]/40 transition-colors"
                    title="Verify at Institutional Source"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
