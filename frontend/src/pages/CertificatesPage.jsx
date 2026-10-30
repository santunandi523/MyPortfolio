import React, { useState, useMemo } from 'react';
import { Eye, ExternalLink, Calendar, Building } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export const CertificatesPage = () => {
  const { certificates, openDocumentViewer } = usePortfolio();
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = useMemo(() => {
    return ['All', ...Array.from(new Set(certificates.map((c) => c.category)))];
  }, [certificates]);

  const filteredCertificates = useMemo(() => {
    if (selectedCategory === 'All') return certificates;
    return certificates.filter((cert) => cert.category === selectedCategory);
  }, [certificates, selectedCategory]);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Editorial Header */}
      <div className="max-w-3xl space-y-3">
        <span className="text-xs font-mono uppercase tracking-wider text-[#F4B942]">
          Credentials & Training
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-[#E8EDF2] tracking-tight">
          Certifications & Coursework
        </h1>
        <p className="text-sm sm:text-base text-[#A592AD] leading-relaxed font-sans">
          Specialized professional tracks and academic certifications in Java full stack engineering, advanced data structures, and machine learning. Each credential can be viewed directly in high resolution.
        </p>
      </div>

      {/* Category Filter Chips */}
      <div className="flex flex-wrap gap-2 pb-4 border-b border-[#E8EDF2]/10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
              selectedCategory === cat
                ? 'bg-[#F4B942] text-[#301934]'
                : 'bg-[#1E0F21] text-[#E8EDF2]/80 hover:text-[#E8EDF2] hover:bg-[#301934]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Certificate Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCertificates.map((cert) => (
          <div
            key={cert.id}
            className="group flex flex-col justify-between border border-[#E8EDF2]/10 rounded-lg overflow-hidden bg-[#180A1A] hover:border-[#F4B942]/40 transition-colors"
          >
            {/* Thumbnail Preview */}
            <div
              onClick={() => openDocumentViewer(cert)}
              className="cursor-pointer relative h-48 bg-[#140816] overflow-hidden border-b border-[#E8EDF2]/10"
            >
              {cert.thumbnailUrl ? (
                <img
                  src={cert.thumbnailUrl}
                  alt={cert.title}
                  className="w-full h-full object-cover object-top opacity-85 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-300"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-xs text-[#A592AD]">
                  Certificate Document
                </div>
              )}
              <div className="absolute inset-0 bg-[#301934]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1.5 text-xs text-[#F4B942] font-semibold backdrop-blur-[2px]">
                <Eye className="w-4 h-4" />
                <span>View Certificate</span>
              </div>
            </div>

            {/* Content Meta */}
            <div className="p-5 space-y-3 flex flex-col justify-between flex-1">
              <div className="space-y-2">
                <span className="text-[10px] font-mono text-[#F4B942] uppercase tracking-wider block">
                  {cert.category}
                </span>
                <h3 className="font-bold text-base text-[#E8EDF2] group-hover:text-[#F4B942] transition-colors leading-snug">
                  {cert.title}
                </h3>
                <p className="text-xs text-[#A592AD]">
                  {cert.issuer}
                </p>
              </div>

              {/* Skills list if present */}
              {cert.skills && cert.skills.length > 0 && (
                <div className="flex flex-wrap gap-1 pt-1">
                  {cert.skills.slice(0, 4).map((skill, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-mono text-[#A592AD] bg-[#120914] px-2 py-0.5 rounded border border-[#E8EDF2]/5"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}

              {/* Bottom Actions & Date */}
              <div className="pt-4 border-t border-[#E8EDF2]/10 flex items-center justify-between text-xs text-[#A592AD]">
                <span className="font-mono text-[11px]">{cert.issueDate}</span>
                <button
                  onClick={() => openDocumentViewer(cert)}
                  className="text-[#F4B942] hover:underline font-medium inline-flex items-center gap-1"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Inspect</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
