import React, { useState } from 'react';
import {
  FileText,
  Image as ImageIcon,
  ExternalLink,
  Download,
  ShieldCheck,
  Award,
  CheckCircle2,
  Building,
  School,
  Calendar,
} from 'lucide-react';

interface Props {
  isRedacted?: boolean;
}

export const Class10MarksheetRender: React.FC<Props> = ({ isRedacted = false }) => {
  const [viewMode, setViewMode] = useState<'scanned' | 'ledger'>('scanned');

  const scannedImagePath = '/documents/10th_marksheet_original.jpg';
  const pdfDownloadPath = '/documents/10th_marksheet_santu_nandi.pdf';

  return (
    <div className="w-full max-w-[840px] flex flex-col items-center">
      {/* View Mode Switcher Header */}
      <div className="w-full flex flex-wrap items-center justify-between gap-3 bg-[#241227] px-4 py-2.5 rounded-t-xl border-x-2 border-t-2 border-[#E8EDF2]/20 text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#F4B942] animate-pulse"></span>
          <span className="font-bold text-[#E8EDF2] tracking-wide">
            Madhyamik Pariksha 2022 • Original Board Document
          </span>
        </div>

        <div className="flex items-center gap-1.5 bg-[#140816] p-1 rounded-lg border border-[#E8EDF2]/15">
          <button
            onClick={() => setViewMode('scanned')}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold transition-all ${
              viewMode === 'scanned'
                ? 'bg-[#F4B942] text-[#301934] shadow-sm'
                : 'text-[#E8EDF2]/80 hover:text-[#E8EDF2]'
            }`}
          >
            <ImageIcon className="w-3.5 h-3.5" />
            <span>Scanned Original</span>
          </button>
          <button
            onClick={() => setViewMode('ledger')}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold transition-all ${
              viewMode === 'ledger'
                ? 'bg-[#F4B942] text-[#301934] shadow-sm'
                : 'text-[#E8EDF2]/80 hover:text-[#E8EDF2]'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Structured Ledger</span>
          </button>
        </div>
      </div>

      {/* VIEW MODE 1: SCANNED ORIGINAL DOCUMENT */}
      {viewMode === 'scanned' && (
        <div className="w-full bg-[#180A1A] p-4 sm:p-6 rounded-b-xl border-2 border-t-0 border-[#E8EDF2]/20 shadow-2xl flex flex-col items-center">
          {/* Quick action bar */}
          <div className="w-full flex flex-wrap items-center justify-between gap-2 bg-[#2D1631] px-4 py-2 rounded-lg border border-[#E8EDF2]/15 text-xs text-[#E8EDF2] mb-4">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Authentic scanned marksheet issued by West Bengal Board of Secondary Education</span>
            </div>
            <div className="flex items-center gap-2">
              <a
                href={scannedImagePath}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-[#F4B942] hover:underline font-medium"
              >
                Open Full Resolution <ExternalLink className="w-3 h-3" />
              </a>
              <span className="text-[#E8EDF2]/30">•</span>
              <a
                href={pdfDownloadPath}
                download="Santu_Nandi_Class10_Marksheet_2022.pdf"
                className="flex items-center gap-1 text-emerald-400 hover:underline font-medium"
              >
                Download PDF (557 KB) <Download className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* High-Resolution Document Display Frame */}
          <div className="relative w-full overflow-hidden rounded-lg border-4 border-[#C8D1D9] bg-[#FAF8F5] shadow-2xl flex items-center justify-center p-2 sm:p-4">
            <img
              src={scannedImagePath}
              alt="Official Scanned Class 10 Marksheet - Santu Nandi (Madhyamik Pariksha 2022)"
              className="w-full max-h-[82vh] object-contain rounded shadow"
            />
          </div>

          {/* Key Facts Pill Footer */}
          <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-2.5 mt-4 text-xs">
            <div className="bg-[#261329] p-2.5 rounded-lg border border-[#E8EDF2]/10 text-center">
              <span className="text-[10px] uppercase text-[#A592AD] block font-semibold">Aggregate Score</span>
              <strong className="text-sm text-[#F4B942]">659 / 700 (94.14%)</strong>
            </div>
            <div className="bg-[#261329] p-2.5 rounded-lg border border-[#E8EDF2]/10 text-center">
              <span className="text-[10px] uppercase text-[#A592AD] block font-semibold">Awarded Grade</span>
              <strong className="text-sm text-emerald-400">AA (Outstanding)</strong>
            </div>
            <div className="bg-[#261329] p-2.5 rounded-lg border border-[#E8EDF2]/10 text-center">
              <span className="text-[10px] uppercase text-[#A592AD] block font-semibold">Roll & Number</span>
              <strong className="text-xs text-[#E8EDF2] font-mono">
                {isRedacted ? '██████ No: ████' : '500721N No: 0179'}
              </strong>
            </div>
            <div className="bg-[#261329] p-2.5 rounded-lg border border-[#E8EDF2]/10 text-center">
              <span className="text-[10px] uppercase text-[#A592AD] block font-semibold">Institution</span>
              <strong className="text-[11px] text-[#E8EDF2] truncate block" title="Hoomgarih Chandabila High School">
                Hoomgarih Chandabila H.S.
              </strong>
            </div>
          </div>
        </div>
      )}

      {/* VIEW MODE 2: STRUCTURED DIGITAL LEDGER */}
      {viewMode === 'ledger' && (
        <div className="w-full bg-[#FAF8F5] text-[#1E0F21] p-6 sm:p-10 rounded-b-xl shadow-2xl border-2 border-t-0 border-[#D8D2C5] relative overflow-hidden font-serif select-none">
          {/* Watermark */}
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none">
            <span className="text-9xl font-bold tracking-widest text-[#301934] rotate-[-30deg]">WBBSE</span>
          </div>

          {/* Verified Security Ribbon */}
          <div className="absolute top-0 right-0 bg-[#F4B942] text-[#301934] text-xs font-sans font-bold px-4 py-1 rounded-bl-lg shadow uppercase tracking-wider flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#301934] animate-pulse"></span>
            Verified Board Record
          </div>

          {/* Header */}
          <div className="text-center border-b-2 border-[#1E0F21] pb-5 mb-5">
            <p className="text-xs font-sans tracking-widest uppercase font-semibold text-[#66546B]">
              West Bengal Board of Secondary Education
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#301934] uppercase mt-1">
              Madhyamik Pariksha (Secondary Examination), 2022
            </h2>
            <p className="text-xs font-sans font-medium text-[#443048] mt-1">
              Official Statement of Marks & Evaluation Ledger
            </p>
            <div className="mt-2 text-xs font-sans text-[#77667A] flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              <span>Year: <strong>2022</strong></span>
              <span>Category: <strong>Regular</strong></span>
              <span>Serial No: <strong>{isRedacted ? '████████' : 'M/017565'}</strong></span>
              <span>Index No: <strong>{isRedacted ? '██████' : 'L1-092'}</strong></span>
            </div>
          </div>

          {/* Candidate Details Grid */}
          <div className="grid grid-cols-2 gap-3 text-xs font-sans bg-[#F2EDE4] p-4 rounded-lg border border-[#E0D9CC] mb-5">
            <div>
              <span className="text-[#6D5A72] block text-[11px]">Candidate Name:</span>
              <strong className="text-sm text-[#301934] uppercase">SANTU NANDI</strong>
            </div>
            <div>
              <span className="text-[#6D5A72] block text-[11px]">Roll & No:</span>
              <strong className="text-sm text-[#301934] font-mono">
                {isRedacted ? '██████ No: ████' : '500721N No. 0179'}
              </strong>
            </div>
            <div>
              <span className="text-[#6D5A72] block text-[11px]">Institution / School:</span>
              <strong className="text-xs text-[#301934]">Hoomgarih Chandabila High School</strong>
            </div>
            <div>
              <span className="text-[#6D5A72] block text-[11px]">Overall Awarded Grade:</span>
              <strong className="text-sm text-emerald-800 font-bold">Grade AA (Outstanding)</strong>
            </div>
          </div>

          {/* Subject Table */}
          <div className="overflow-x-auto mb-5">
            <table className="w-full text-xs font-sans border-collapse border border-[#C9C0B0]">
              <thead>
                <tr className="bg-[#301934] text-[#E8EDF2] uppercase text-[11px] tracking-wider text-left">
                  <th className="p-2.5 border border-[#4A2952]">Subject Code & Title</th>
                  <th className="p-2.5 border border-[#4A2952] text-center">Written (90)</th>
                  <th className="p-2.5 border border-[#4A2952] text-center">Oral / Proj (10)</th>
                  <th className="p-2.5 border border-[#4A2952] text-center">Total (100)</th>
                  <th className="p-2.5 border border-[#4A2952] text-center">Grade</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E0D9CC] text-[#2D1B32]">
                <tr className="bg-white">
                  <td className="p-2 border border-[#C9C0B0] font-medium">First Language (Bengali)</td>
                  <td className="p-2 border border-[#C9C0B0] text-center">82</td>
                  <td className="p-2 border border-[#C9C0B0] text-center">10</td>
                  <td className="p-2 border border-[#C9C0B0] text-center font-bold">92</td>
                  <td className="p-2 border border-[#C9C0B0] text-center font-bold text-emerald-800">AA (Outstanding)</td>
                </tr>
                <tr className="bg-[#FAF8F5]">
                  <td className="p-2 border border-[#C9C0B0] font-medium">Second Language (English)</td>
                  <td className="p-2 border border-[#C9C0B0] text-center">83</td>
                  <td className="p-2 border border-[#C9C0B0] text-center">10</td>
                  <td className="p-2 border border-[#C9C0B0] text-center font-bold">93</td>
                  <td className="p-2 border border-[#C9C0B0] text-center font-bold text-emerald-800">AA (Outstanding)</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-2 border border-[#C9C0B0] font-bold text-[#301934]">Mathematics</td>
                  <td className="p-2 border border-[#C9C0B0] text-center">87</td>
                  <td className="p-2 border border-[#C9C0B0] text-center">10</td>
                  <td className="p-2 border border-[#C9C0B0] text-center font-extrabold text-[#301934] bg-[#FDF5E2]">97</td>
                  <td className="p-2 border border-[#C9C0B0] text-center font-bold text-emerald-800">AA (Outstanding)</td>
                </tr>
                <tr className="bg-[#FAF8F5]">
                  <td className="p-2 border border-[#C9C0B0] font-bold text-[#301934]">Physical Science</td>
                  <td className="p-2 border border-[#C9C0B0] text-center">86</td>
                  <td className="p-2 border border-[#C9C0B0] text-center">10</td>
                  <td className="p-2 border border-[#C9C0B0] text-center font-extrabold text-[#301934] bg-[#FDF5E2]">96</td>
                  <td className="p-2 border border-[#C9C0B0] text-center font-bold text-emerald-800">AA (Outstanding)</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-2 border border-[#C9C0B0] font-medium">Life Science</td>
                  <td className="p-2 border border-[#C9C0B0] text-center">85</td>
                  <td className="p-2 border border-[#C9C0B0] text-center">10</td>
                  <td className="p-2 border border-[#C9C0B0] text-center font-bold">95</td>
                  <td className="p-2 border border-[#C9C0B0] text-center font-bold text-emerald-800">AA (Outstanding)</td>
                </tr>
                <tr className="bg-[#FAF8F5]">
                  <td className="p-2 border border-[#C9C0B0] font-medium">History</td>
                  <td className="p-2 border border-[#C9C0B0] text-center">80</td>
                  <td className="p-2 border border-[#C9C0B0] text-center">10</td>
                  <td className="p-2 border border-[#C9C0B0] text-center font-bold">90</td>
                  <td className="p-2 border border-[#C9C0B0] text-center font-bold text-emerald-800">AA (Outstanding)</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-2 border border-[#C9C0B0] font-medium">Geography</td>
                  <td className="p-2 border border-[#C9C0B0] text-center">86</td>
                  <td className="p-2 border border-[#C9C0B0] text-center">10</td>
                  <td className="p-2 border border-[#C9C0B0] text-center font-bold">96</td>
                  <td className="p-2 border border-[#C9C0B0] text-center font-bold text-emerald-800">AA (Outstanding)</td>
                </tr>
              </tbody>
              <tfoot>
                <tr className="bg-[#301934] text-[#E8EDF2] font-bold">
                  <td colSpan={3} className="p-3 border border-[#4A2952] uppercase tracking-wider">
                    GRAND TOTAL & PERCENTAGE
                  </td>
                  <td className="p-3 border border-[#4A2952] text-center text-sm font-extrabold text-[#F4B942]">
                    659 / 700
                  </td>
                  <td className="p-3 border border-[#4A2952] text-center text-sm font-extrabold text-[#F4B942]">
                    94.14% (GRADE AA)
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>

          {/* Signatures & Seal */}
          <div className="flex items-end justify-between pt-4 border-t border-[#D5CDBD] text-xs font-sans">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-full border-2 border-dashed border-[#8E2800] flex items-center justify-center p-1 text-[8px] text-center font-bold text-[#8E2800] uppercase rotate-[-12deg]">
                WBBSE SEAL 2022
              </div>
              <div>
                <p className="text-[10px] text-[#6E5A71]">Digitally Authenticated Board Archive</p>
                <p className="font-mono text-[9px] text-[#301934]">HASH: WBBSE-X-2022-M017565-659-AA-VERIFIED</p>
              </div>
            </div>

            <div className="text-right">
              <div className="font-serif italic text-sm text-[#301934] mb-1 font-semibold">K. Bandyopadhyay</div>
              <div className="border-t border-[#1E0F21] pt-1 text-[10px] uppercase font-semibold text-[#5A455C]">
                Secretary / Deputy Secretary (Examination)
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
