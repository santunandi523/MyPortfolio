import React, { useState } from 'react';
import { FileText, Image as ImageIcon, ExternalLink, Download, ShieldCheck, Award, CheckCircle2, } from 'lucide-react';
import { Class10MarksheetRender } from './Class10MarksheetRender';
import { Class12MarksheetRender } from './Class12MarksheetRender';
export const CertificateRender = ({ certificate, isRedacted = false }) => {
    const [viewMode, setViewMode] = useState('scanned');
    // If the certificate is Class 10 or Class 12 marksheet, delegate to the dedicated renderers
    if (certificate.id === 'cert-wbbse-class10') {
        return <Class10MarksheetRender isRedacted={isRedacted}/>;
    }
    if (certificate.id === 'cert-wbchse-class12') {
        return <Class12MarksheetRender isRedacted={isRedacted}/>;
    }
    const isNptel = certificate.id === 'cert-nptel-ml-elite' || certificate.title.includes('NPTEL');
    const isApnaCollege = certificate.id === 'cert-apna-college-dsa' || certificate.issuer.includes('Apna College');
    const isLinkedIn = certificate.id === 'cert-linkedin-career-skills' || certificate.issuer.includes('LinkedIn');
    const isInfosys = certificate.id === 'cert-infosys-ethereum' || certificate.issuer.includes('Infosys');
    const scannedImagePath = certificate.thumbnailUrl || '/certificates/nptel_machine_learning_original.jpg';
    const pdfDownloadPath = certificate.documentUrl || '/certificates/nptel_machine_learning_santu_nandi.pdf';
    return (<div className="w-full max-w-[860px] flex flex-col items-center">
      {/* Header View Switcher */}
      <div className="w-full flex flex-wrap items-center justify-between gap-3 bg-[#241227] px-4 py-2.5 rounded-t-xl border-x-2 border-t-2 border-[#E8EDF2]/20 text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#F4B942] animate-pulse"></span>
          <span className="font-bold text-[#E8EDF2] tracking-wide truncate max-w-sm sm:max-w-md">
            {certificate.title}
          </span>
        </div>

        <div className="flex items-center gap-1.5 bg-[#140816] p-1 rounded-lg border border-[#E8EDF2]/15">
          <button onClick={() => setViewMode('scanned')} className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold transition-all ${viewMode === 'scanned'
            ? 'bg-[#F4B942] text-[#301934] shadow-sm'
            : 'text-[#E8EDF2]/80 hover:text-[#E8EDF2]'}`}>
            <ImageIcon className="w-3.5 h-3.5"/>
            <span>Document Preview</span>
          </button>
          <button onClick={() => setViewMode('pdf')} className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold transition-all ${viewMode === 'pdf'
            ? 'bg-[#F4B942] text-[#301934] shadow-sm'
            : 'text-[#E8EDF2]/80 hover:text-[#E8EDF2]'}`}>
            <FileText className="w-3.5 h-3.5"/>
            <span>Native PDF</span>
          </button>
          <button onClick={() => setViewMode('ledger')} className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold transition-all ${viewMode === 'ledger'
            ? 'bg-[#F4B942] text-[#301934] shadow-sm'
            : 'text-[#E8EDF2]/80 hover:text-[#E8EDF2]'}`}>
            <Award className="w-3.5 h-3.5"/>
            <span>Credential Ledger</span>
          </button>
        </div>
      </div>

      {/* VIEW MODE 1: HIGH-RES RASTERIZED DOCUMENT PREVIEW */}
      {viewMode === 'scanned' && (<div className="w-full bg-[#180A1A] p-4 sm:p-6 rounded-b-xl border-2 border-t-0 border-[#E8EDF2]/20 shadow-2xl flex flex-col items-center">
          {/* Action Bar */}
          <div className="w-full flex flex-wrap items-center justify-between gap-2 bg-[#2D1631] px-4 py-2 rounded-lg border border-[#E8EDF2]/15 text-xs text-[#E8EDF2] mb-4">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#F4B942]"/>
              <span>Verified Certificate issued by {certificate.issuer}</span>
            </div>
            <div className="flex items-center gap-3">
              <a href={scannedImagePath} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-[#F4B942] hover:underline font-medium">
                Full Resolution Image <ExternalLink className="w-3 h-3"/>
              </a>
              <span className="text-[#E8EDF2]/30">•</span>
              <a href={pdfDownloadPath} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-emerald-400 hover:underline font-medium">
                Open Original PDF <ExternalLink className="w-3 h-3"/>
              </a>
              <span className="text-[#E8EDF2]/30">•</span>
              <a href={pdfDownloadPath} download className="flex items-center gap-1 text-[#F4B942] hover:underline font-semibold">
                Download PDF <Download className="w-3 h-3"/>
              </a>
            </div>
          </div>

          {/* High-Resolution Certificate Frame */}
          <div className="relative w-full overflow-hidden rounded-lg border-4 border-[#F4B942]/60 bg-[#FAF8F5] shadow-2xl flex items-center justify-center p-2 sm:p-4">
            <img src={scannedImagePath} alt={certificate.title} className="w-full max-h-[82vh] object-contain rounded shadow"/>
          </div>

          {/* Verification Details Footer */}
          <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-2.5 mt-4 text-xs">
            <div className="bg-[#261329] p-2.5 rounded-lg border border-[#E8EDF2]/10 text-center">
              <span className="text-[10px] uppercase text-[#A592AD] block font-semibold">Issuing Body</span>
              <strong className="text-xs text-[#E8EDF2] truncate block" title={certificate.issuer}>
                {certificate.issuer}
              </strong>
            </div>
            <div className="bg-[#261329] p-2.5 rounded-lg border border-[#E8EDF2]/10 text-center">
              <span className="text-[10px] uppercase text-[#A592AD] block font-semibold">Issue Date</span>
              <strong className="text-xs text-emerald-400">{certificate.issueDate}</strong>
            </div>
            <div className="bg-[#261329] p-2.5 rounded-lg border border-[#E8EDF2]/10 text-center">
              <span className="text-[10px] uppercase text-[#A592AD] block font-semibold">Credential ID</span>
              <strong className="text-xs text-[#E8EDF2] font-mono truncate block" title={certificate.credentialId}>
                {isRedacted ? '████████████' : certificate.credentialId || 'AUTHENTIC'}
              </strong>
            </div>
            <div className="bg-[#261329] p-2.5 rounded-lg border border-[#E8EDF2]/10 text-center">
              <span className="text-[10px] uppercase text-[#A592AD] block font-semibold">Status</span>
              <strong className="text-xs text-[#F4B942] flex items-center justify-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400"/> Authenticated
              </strong>
            </div>
          </div>
        </div>)}

      {/* VIEW MODE 2: NATIVE EMBEDDED PDF VIEWER */}
      {viewMode === 'pdf' && (<div className="w-full bg-[#180A1A] p-4 sm:p-6 rounded-b-xl border-2 border-t-0 border-[#E8EDF2]/20 shadow-2xl flex flex-col items-center">
          <div className="w-full flex items-center justify-between px-3 py-1.5 text-xs text-[#A592AD] mb-3">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <strong className="text-[#E8EDF2]">Native PDF Rendering</strong> (100% Vector Fonts & Signatures)
            </span>
            <div className="flex items-center gap-3">
              <a href={pdfDownloadPath} target="_blank" rel="noreferrer" className="text-[#F4B942] hover:underline font-semibold flex items-center gap-1">
                <ExternalLink className="w-3.5 h-3.5"/> Open in Full Window
              </a>
              <span className="text-[#E8EDF2]/30">•</span>
              <a href={pdfDownloadPath} download className="text-emerald-400 hover:underline font-semibold flex items-center gap-1">
                <Download className="w-3.5 h-3.5"/> Download File
              </a>
            </div>
          </div>

          <div className="w-full h-[80vh] rounded-xl overflow-hidden border border-[#E8EDF2]/20 bg-[#2B152F] shadow-inner">
            <iframe src={`${pdfDownloadPath}#view=FitH`} title={certificate.title} className="w-full h-full border-none rounded-xl"/>
          </div>
        </div>)}

      {/* VIEW MODE 3: DIGITAL CREDENTIAL LEDGER */}
      {viewMode === 'ledger' && (<div className="w-full bg-[#FFFFFF] text-[#1E0F21] p-6 sm:p-12 rounded-b-xl shadow-2xl border-8 border-[#301934] relative overflow-hidden font-serif select-none">
          {/* Decorative Gold Accent Border */}
          <div className="absolute inset-3 border-2 border-[#F4B942] pointer-events-none"></div>

          {/* Watermark */}
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none">
            <span className="text-8xl font-black text-[#301934] rotate-[-25deg]">
              {isNptel ? 'IIT MADRAS' : isApnaCollege ? 'APNA COLLEGE' : isLinkedIn ? 'LINKEDIN' : isInfosys ? 'INFOSYS' : 'VERIFIED'}
            </span>
          </div>

          {/* Top Verified Ribbon */}
          <div className="absolute top-0 right-0 bg-[#F4B942] text-[#301934] text-xs font-sans font-bold px-4 py-1.5 shadow uppercase tracking-wider flex items-center gap-1.5 z-10">
            <Award className="w-3.5 h-3.5"/>
            Verified Credential
          </div>

          {/* Institution Header */}
          <div className="text-center mb-6 pt-2">
            <div className="inline-block px-3 py-1 rounded bg-[#301934] text-[#F4B942] font-sans text-xs font-bold uppercase tracking-widest mb-2">
              {certificate.issuer}
            </div>
            <p className="text-xs font-sans uppercase font-semibold text-[#66546B] tracking-wider">
              Certificate of Completion & Professional Proficiency
            </p>
            <p className="text-xs font-sans text-[#77667A] mt-1">This is to certify that</p>
          </div>

          {/* Candidate Name */}
          <div className="text-center mb-6">
            <h1 className="text-3xl sm:text-4xl font-bold text-[#301934] uppercase tracking-wide border-b-2 border-[#F4B942] inline-block pb-2 px-8">
              SANTU NANDI
            </h1>
            <p className="text-xs font-sans text-[#443048] mt-2 max-w-lg mx-auto">
              has successfully completed all requirements and demonstrated technical competency in
            </p>
          </div>

          {/* Course Details Card */}
          <div className="text-center mb-6 bg-[#FDFBF7] p-5 rounded-lg border border-[#F0E6D2]">
            <h2 className="text-xl sm:text-2xl font-black text-[#301934] font-sans tracking-tight">
              {certificate.title}
            </h2>

            {isNptel && (<div className="flex flex-wrap items-center justify-center gap-3 mt-3 text-xs font-sans">
                <span className="bg-[#301934] text-[#F4B942] px-3 py-1 rounded-full font-bold">
                  Consolidated Score: 67% (Elite)
                </span>
                <span className="bg-[#E8EDF2] text-[#301934] px-3 py-1 rounded-full font-semibold border border-[#D5DEE5]">
                  Online Assignments: 23.25 / 25
                </span>
                <span className="bg-[#E8EDF2] text-[#301934] px-3 py-1 rounded-full font-semibold border border-[#D5DEE5]">
                  Proctored Exam: 43.37 / 75
                </span>
                <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full font-bold">
                  4 Credit Course
                </span>
              </div>)}

            {isApnaCollege && (<div className="flex flex-wrap items-center justify-center gap-3 mt-3 text-xs font-sans">
                <span className="bg-[#301934] text-[#F4B942] px-3 py-1 rounded-full font-bold">
                  Alpha Batch (DSA with Java)
                </span>
                <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full font-bold">
                  Instructor: Shradha Khapra
                </span>
                <span className="bg-[#E8EDF2] text-[#301934] px-3 py-1 rounded-full font-semibold border border-[#D5DEE5]">
                  Comprehensive Java OOP & Algorithms
                </span>
              </div>)}

            {isLinkedIn && (<div className="flex flex-wrap items-center justify-center gap-3 mt-3 text-xs font-sans">
                <span className="bg-[#0A66C2] text-white px-3 py-1 rounded-full font-bold">
                  LinkedIn Learning Certified
                </span>
                <span className="bg-[#E8EDF2] text-[#301934] px-3 py-1 rounded-full font-semibold border border-[#D5DEE5]">
                  Completed: Jan 18, 2025
                </span>
              </div>)}

            {isInfosys && (<div className="flex flex-wrap items-center justify-center gap-3 mt-3 text-xs font-sans">
                <span className="bg-[#007CC3] text-white px-3 py-1 rounded-full font-bold">
                  Infosys Springboard Certified
                </span>
                <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full font-bold">
                  Completed: July 7, 2025
                </span>
              </div>)}
          </div>

          {/* Skills Breakdown */}
          <div className="mb-6 text-center">
            <span className="text-[10px] font-sans uppercase font-bold text-[#6D5A72] tracking-wider block mb-2">
              Demonstrated Competencies:
            </span>
            <div className="flex flex-wrap items-center justify-center gap-1.5 font-sans">
              {certificate.skills.map((skill, idx) => (<span key={idx} className="text-[11px] font-medium bg-[#F2EDE4] text-[#301934] px-2.5 py-0.5 rounded-full border border-[#DED7CA]">
                  {skill}
                </span>))}
            </div>
          </div>

          {/* Metadata & Signatories */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-end pt-6 border-t border-[#E5E0D5] text-xs font-sans">
            <div>
              <span className="text-[#6D5A72] block text-[10px] uppercase font-semibold">Date of Issuance:</span>
              <strong className="text-sm text-[#301934]">{certificate.issueDate}</strong>
              <span className="text-[#6D5A72] block text-[10px] uppercase font-semibold mt-2">Credential ID:</span>
              <strong className="text-xs text-[#301934] font-mono break-all">
                {isRedacted ? '████████████' : certificate.credentialId || 'VERIFIED'}
              </strong>
            </div>

            <div className="text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full border-4 border-[#F4B942] bg-[#301934] text-[#F4B942] flex flex-col items-center justify-center p-1 text-[8px] font-bold text-center uppercase shadow-inner">
                <span>AUTHENTIC</span>
                <span className="text-[#F4B942] font-black">VERIFIED</span>
              </div>
              {certificate.verificationUrl && certificate.verificationUrl !== '#' && (<a href={certificate.verificationUrl} target="_blank" rel="noreferrer" className="text-[10px] text-[#0A66C2] hover:underline mt-1 font-semibold flex items-center gap-0.5">
                  Verify Online <ExternalLink className="w-2.5 h-2.5"/>
                </a>)}
            </div>

            <div className="text-right">
              <div className="font-serif italic text-sm text-[#301934] mb-0.5 font-semibold">
                {isNptel ? 'Prof. Andrew Thangaraj' : isApnaCollege ? 'Shradha Khapra' : isLinkedIn ? 'Dani Burlison' : isInfosys ? 'Thirumala Arohi' : 'Authorized Signatory'}
              </div>
              <div className="border-t border-[#301934] pt-1 text-[10px] uppercase font-semibold text-[#5A455C]">
                {isNptel ? 'NPTEL Coordinator • IIT Madras' : isApnaCollege ? 'Co-Founder, Apna College' : isLinkedIn ? 'Head of Global Content, Learning' : isInfosys ? 'Executive VP & Global Head ETA, Infosys' : 'Certification Authority'}
              </div>
            </div>
          </div>
        </div>)}
    </div>);
};
