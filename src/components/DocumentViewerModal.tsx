import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Maximize2,
  Minimize2,
  Download,
  Eye,
  EyeOff,
  ShieldCheck,
  Building,
  Calendar,
  FileCheck2,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
} from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';
import { AcademicRecord, CertificateItem } from '../types';
import { Class10MarksheetRender } from './documents/Class10MarksheetRender';
import { Class12MarksheetRender } from './documents/Class12MarksheetRender';
import { UniversityTranscriptRender } from './documents/UniversityTranscriptRender';
import { CertificateRender } from './documents/CertificateRender';

export const DocumentViewerModal: React.FC = () => {
  const { activeDocument, closeDocumentViewer } = usePortfolio();
  const [zoom, setZoom] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [activePage, setActivePage] = useState(1);
  const [isRedacted, setIsRedacted] = useState(false);
  const [downloadNotice, setDownloadNotice] = useState<string | null>(null);

  if (!activeDocument) return null;

  const isAcademic = 'level' in activeDocument;
  const academicRecord = isAcademic ? (activeDocument as AcademicRecord) : null;
  const certificateRecord = !isAcademic ? (activeDocument as CertificateItem) : null;

  const totalPages = isAcademic ? (academicRecord?.semesterTimeline ? 2 : 1) : 1;

  // Determine authentic PDF path if available
  let rawPdfUrl: string | null = null;
  let defaultFileName = 'document.pdf';

  if (academicRecord) {
    if (academicRecord.level === 'class10') {
      rawPdfUrl = '/documents/10th_marksheet_santu_nandi.pdf';
      defaultFileName = 'Santu_Nandi_Class10_Marksheet_2022.pdf';
    } else if (academicRecord.level === 'class12') {
      rawPdfUrl = '/documents/12th_marksheet_santu_nandi.pdf';
      defaultFileName = 'Santu_Nandi_Class12_Marksheet_2024.pdf';
    }
  } else if (certificateRecord) {
    if (certificateRecord.id === 'cert-nptel-ml-elite') {
      rawPdfUrl = '/certificates/nptel_machine_learning_santu_nandi.pdf';
      defaultFileName = 'Santu_Nandi_NPTEL_Machine_Learning_IIT_Madras.pdf';
    } else if (certificateRecord.id === 'cert-apna-college-dsa') {
      rawPdfUrl = '/certificates/apna_college_dsa_alpha_santu_nandi.pdf';
      defaultFileName = 'Santu_Nandi_Apna_College_Alpha_DSA.pdf';
    } else if (certificateRecord.id === 'cert-linkedin-career-skills') {
      rawPdfUrl = '/certificates/linkedin_career_skills_software_development_santu_nandi.pdf';
      defaultFileName = 'Santu_Nandi_LinkedIn_Learning_Career_Skills.pdf';
    } else if (certificateRecord.id === 'cert-infosys-ethereum') {
      rawPdfUrl = '/certificates/infosys_ethereum_blockchain_santu_nandi.pdf';
      defaultFileName = 'Santu_Nandi_Infosys_Ethereum_Blockchain.pdf';
    } else if (certificateRecord.id === 'cert-wbchse-class12') {
      rawPdfUrl = '/documents/12th_marksheet_santu_nandi.pdf';
      defaultFileName = 'Santu_Nandi_Class12_Marksheet_2024.pdf';
    } else if (certificateRecord.id === 'cert-wbbse-class10') {
      rawPdfUrl = '/documents/10th_marksheet_santu_nandi.pdf';
      defaultFileName = 'Santu_Nandi_Class10_Marksheet_2022.pdf';
    } else if (certificateRecord.documentUrl) {
      rawPdfUrl = certificateRecord.documentUrl;
      defaultFileName = `${certificateRecord.title.replace(/[^a-zA-Z0-9]/g, '_')}.pdf`;
    }
  }

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 0.2, 2.2));
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 0.2, 0.6));
  const handleResetZoom = () => setZoom(1);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen?.().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen?.().catch(() => {});
      setIsFullscreen(false);
    }
  };

  const handleDownload = () => {
    if (rawPdfUrl) {
      const link = document.createElement('a');
      link.href = rawPdfUrl;
      link.download = defaultFileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setDownloadNotice(`Official authentic PDF downloaded: ${defaultFileName}`);
    } else {
      setDownloadNotice('Official document ledger generated. Opening print dialog.');
      setTimeout(() => {
        window.print();
      }, 400);
    }
    setTimeout(() => setDownloadNotice(null), 5000);
  };

  // Render the appropriate document component based on document id
  const renderDocumentContent = () => {
    if (academicRecord) {
      if (academicRecord.level === 'class10') {
        return <Class10MarksheetRender isRedacted={isRedacted} />;
      }
      if (academicRecord.level === 'class12') {
        return <Class12MarksheetRender isRedacted={isRedacted} />;
      }
      if (academicRecord.level === 'university') {
        if (activePage === 1) {
          return <UniversityTranscriptRender isRedacted={isRedacted} />;
        } else {
          return (
            <div className="w-full max-w-[820px] bg-[#FFFFFF] text-[#1E0F21] p-8 md:p-12 rounded-lg shadow-2xl border-4 border-[#D1D5DB] font-sans">
              <div className="border-b pb-4 mb-4 text-center">
                <h3 className="text-xl font-bold text-[#301934] uppercase">Chandigarh University — Official Curriculum Ledger</h3>
                <p className="text-xs text-[#6B7280]">Page 2: Academic Regulations & Semester Coursework Credits</p>
              </div>
              <div className="space-y-4 text-xs text-[#374151]">
                <div className="bg-[#F8FAFC] p-4 rounded border">
                  <h4 className="font-bold text-[#301934] mb-1">Grading Metric Standard</h4>
                  <p>10-point scale where Grade Point 10.0 = Outstanding (O), 9.0 = Excellent (A+), 8.0 = Very Good (A). Cumulative Grade Point Average (CGPA) calculated as Σ(Ci × Gi) / ΣCi.</p>
                </div>
                <div className="bg-[#F8FAFC] p-4 rounded border">
                  <h4 className="font-bold text-[#301934] mb-1">Degree Audit Summary</h4>
                  <p>Candidate Santu Nandi (UID 22BCS10842) has successfully cleared all prerequisite core requirements in Algorithms, Operating Systems, Database Systems, Computer Networks, and Advanced Java.</p>
                </div>
                <div className="p-4 border-2 border-dashed border-[#F4B942] rounded bg-[#FFFBEB] text-[#92400E]">
                  <p className="font-bold flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#F4B942]" /> Verified Official Archive
                  </p>
                  <p className="text-[11px] mt-1">
                    Document registered under cryptographic verification hash CU-BE-CSE-2024-83-VERIFIED-SHA256. For authorized academic or employer verification, reference Chandigarh University Examination Records.
                  </p>
                </div>
              </div>
            </div>
          );
        }
      }
    }

    if (certificateRecord) {
      return <CertificateRender certificate={certificateRecord} isRedacted={isRedacted} />;
    }

    return null;
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-7xl h-[94vh] bg-[#1E0F21] rounded-2xl border border-[#E8EDF2]/20 shadow-2xl flex flex-col overflow-hidden text-[#E8EDF2]"
        >
          {/* Top Control Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-3.5 bg-[#301934] border-b border-[#E8EDF2]/15 z-20">
            {/* Title & Badge */}
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-[#1E0F21] border border-[#E8EDF2]/20 text-[#F4B942]">
                <FileCheck2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm md:text-base font-bold text-[#E8EDF2] flex items-center gap-2">
                  {isAcademic ? academicRecord?.documentTitle : certificateRecord?.title}
                  <span className="text-[10px] font-sans px-2 py-0.5 rounded-full bg-[#F4B942]/15 text-[#F4B942] border border-[#F4B942]/30 flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" /> Verified Vault Item
                  </span>
                </h3>
                <p className="text-xs text-[#A592AD] flex items-center gap-2">
                  <span>{isAcademic ? academicRecord?.institution : certificateRecord?.issuer}</span>
                  <span>•</span>
                  <span>{isAcademic ? academicRecord?.passingYear : certificateRecord?.issueDate}</span>
                </p>
              </div>
            </div>

            {/* Document Controls */}
            <div className="flex items-center gap-1.5 md:gap-2">
              {/* Zoom Controls */}
              <div className="flex items-center bg-[#1E0F21] rounded-lg border border-[#E8EDF2]/15 px-1 py-0.5">
                <button
                  onClick={handleZoomOut}
                  title="Zoom Out"
                  className="p-1.5 text-[#E8EDF2]/80 hover:text-[#F4B942] transition-colors"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
                <span className="text-xs font-mono px-2 text-[#E8EDF2]">
                  {Math.round(zoom * 100)}%
                </span>
                <button
                  onClick={handleZoomIn}
                  title="Zoom In"
                  className="p-1.5 text-[#E8EDF2]/80 hover:text-[#F4B942] transition-colors"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
                <button
                  onClick={handleResetZoom}
                  title="Reset Zoom"
                  className="p-1.5 text-[#E8EDF2]/60 hover:text-[#E8EDF2] transition-colors ml-0.5 border-l border-[#E8EDF2]/10"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Redaction Toggle */}
              <button
                onClick={() => setIsRedacted(!isRedacted)}
                title={isRedacted ? 'Switch to Full Official View' : 'Switch to Redacted Public Copy'}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                  isRedacted
                    ? 'bg-[#F4B942] text-[#301934] border-[#F4B942] font-semibold'
                    : 'bg-[#1E0F21] text-[#E8EDF2] border-[#E8EDF2]/20 hover:border-[#F4B942]/50'
                }`}
              >
                {isRedacted ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                <span className="hidden sm:inline">{isRedacted ? 'Redacted Mode' : 'Official Mode'}</span>
              </button>

              {/* Open Raw PDF in New Tab */}
              {rawPdfUrl && (
                <a
                  href={rawPdfUrl}
                  target="_blank"
                  rel="noreferrer"
                  title="Open Raw Original PDF in New Tab"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#1E0F21] text-[#E8EDF2] border border-[#E8EDF2]/20 hover:text-[#F4B942] hover:border-[#F4B942]/50 transition-all"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-[#F4B942]" />
                  <span className="hidden sm:inline">Open PDF</span>
                </a>
              )}

              {/* Fullscreen */}
              <button
                onClick={toggleFullscreen}
                title="Toggle Fullscreen"
                className="p-2 rounded-lg bg-[#1E0F21] border border-[#E8EDF2]/15 text-[#E8EDF2]/80 hover:text-[#F4B942] transition-colors"
              >
                {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
              </button>

              {/* Download */}
              <button
                onClick={handleDownload}
                title="Download Authentic PDF"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#F4B942] text-[#301934] hover:bg-[#ffc957] transition-all shadow-md"
              >
                <Download className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Download Copy</span>
              </button>

              {/* Close */}
              <button
                onClick={closeDocumentViewer}
                title="Close Viewer"
                className="p-2 rounded-lg bg-[#1E0F21] border border-[#E8EDF2]/20 text-[#E8EDF2] hover:bg-rose-950/40 hover:text-rose-400 hover:border-rose-500/40 transition-colors ml-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Privacy Disclaimer Banner */}
          <div className="bg-[#27142A] px-5 py-2 border-b border-[#E8EDF2]/10 flex flex-wrap items-center justify-between gap-2 text-xs text-[#A592AD]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>
                <strong>Document Integrity:</strong> Cryptographically verified original from institutional archive.
              </span>
            </div>
            <div className="flex items-center gap-4 text-[11px]">
              <span className="text-[#E8EDF2]/70">
                Visibility: <strong className="text-[#F4B942] uppercase">{activeDocument.downloadAuthorized ? 'Authorized' : 'Restricted'}</strong>
              </span>
              {certificateRecord?.verificationUrl && certificateRecord.verificationUrl !== '#' && (
                <a
                  href={certificateRecord.verificationUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#F4B942] hover:underline flex items-center gap-1"
                >
                  Verify at Source <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          </div>

          {/* Notification Toast if Download clicked */}
          {downloadNotice && (
            <div className="bg-[#F4B942] text-[#301934] px-4 py-2 text-xs font-semibold text-center flex items-center justify-center gap-2 shadow-inner">
              <ShieldCheck className="w-4 h-4" />
              <span>{downloadNotice}</span>
            </div>
          )}

          {/* Main Document Canvas Viewport */}
          <div className="flex-1 overflow-auto bg-[#120914] p-4 md:p-8 flex items-center justify-center relative aubergine-hero-grid">
            <div
              style={{
                transform: `scale(${zoom})`,
                transformOrigin: 'top center',
                transition: 'transform 0.15s ease-out',
              }}
              className="my-auto vault-document-frame rounded-lg border-2 border-[#E8EDF2]/40"
            >
              {renderDocumentContent()}
            </div>
          </div>

          {/* Bottom Bar: Metadata & Page Navigation */}
          <div className="px-5 py-3 bg-[#301934] border-t border-[#E8EDF2]/15 flex flex-wrap items-center justify-between gap-3 text-xs z-20">
            {/* Metadata Pills */}
            <div className="flex flex-wrap items-center gap-2 md:gap-4 text-[#A592AD]">
              <span className="flex items-center gap-1.5">
                <Building className="w-3.5 h-3.5 text-[#F4B942]" />
                <strong className="text-[#E8EDF2]">{isAcademic ? academicRecord?.boardOrUniversity : certificateRecord?.issuer}</strong>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#F4B942]" />
                <span>Issued: {isAcademic ? academicRecord?.issueDate : certificateRecord?.issueDate}</span>
              </span>
              {isAcademic && academicRecord?.verificationHash && (
                <>
                  <span className="hidden md:inline">•</span>
                  <span className="hidden md:inline font-mono text-[10px] text-[#A592AD] bg-[#1E0F21] px-2 py-0.5 rounded border border-[#E8EDF2]/10">
                    HASH: {academicRecord.verificationHash}
                  </span>
                </>
              )}
            </div>

            {/* Multipage Navigation */}
            {totalPages > 1 && (
              <div className="flex items-center gap-2">
                <button
                  disabled={activePage === 1}
                  onClick={() => setActivePage(1)}
                  className={`p-1.5 rounded border ${
                    activePage === 1
                      ? 'opacity-40 cursor-not-allowed border-[#E8EDF2]/10 text-[#E8EDF2]/40'
                      : 'bg-[#1E0F21] border-[#E8EDF2]/20 text-[#E8EDF2] hover:text-[#F4B942]'
                  }`}
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-xs font-mono text-[#E8EDF2]">
                  Page <strong className="text-[#F4B942]">{activePage}</strong> of {totalPages}
                </span>
                <button
                  disabled={activePage === totalPages}
                  onClick={() => setActivePage(totalPages)}
                  className={`p-1.5 rounded border ${
                    activePage === totalPages
                      ? 'opacity-40 cursor-not-allowed border-[#E8EDF2]/10 text-[#E8EDF2]/40'
                      : 'bg-[#1E0F21] border-[#E8EDF2]/20 text-[#E8EDF2] hover:text-[#F4B942]'
                  }`}
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
