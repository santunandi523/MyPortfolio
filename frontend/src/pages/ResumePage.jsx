import React, { useState } from 'react';
import { Download, Printer, FileText, ShieldCheck, Calendar, Mail, Phone, MapPin, ExternalLink, GraduationCap, Briefcase, Award, Terminal, Code2, } from 'lucide-react';
import { GithubIcon, LinkedinIcon, CodolioIcon } from '../components/icons/BrandIcons';
import { usePortfolio } from '../context/PortfolioContext';
export const ResumePage = () => {
    const { profile } = usePortfolio();
    const [viewMode, setViewMode] = useState('pdf');
    const [downloadNotice, setDownloadNotice] = useState(null);
    const pdfUrl = '/documents/santu_nandi_resume.pdf';
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = 'Santu_Nandi_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setDownloadNotice('Official resume PDF downloaded: Santu_Nandi_Resume.pdf');
        setTimeout(() => setDownloadNotice(null), 4000);
    };
    const handlePrint = () => {
        window.print();
    };
    return (<div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Top Header Controls */}
      <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-6 pb-6 border-b border-[#E8EDF2]/10">
        <div className="space-y-1">
          <span className="text-xs font-mono uppercase tracking-wider text-[#F4B942]">
            Curriculum Vitae
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold font-display text-[#E8EDF2]">
            Resume
          </h1>
          <p className="text-xs sm:text-sm text-[#A592AD]">
            Download the official PDF resume or review the web version below.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={handleDownload}
            className="px-5 py-2.5 rounded-md text-xs font-semibold bg-[#F4B942] text-[#301934] hover:bg-[#ffc957] transition-colors flex items-center gap-2 shadow"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download PDF</span>
          </button>

          <a
            href={pdfUrl}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2.5 rounded-md text-xs font-medium text-[#E8EDF2] border border-[#E8EDF2]/15 hover:border-[#F4B942]/60 transition-colors flex items-center gap-1.5"
          >
            <ExternalLink className="w-3.5 h-3.5 text-[#F4B942]" />
            <span>Open in Tab</span>
          </a>

          <button
            onClick={handlePrint}
            className="px-4 py-2.5 rounded-md text-xs font-medium text-[#E8EDF2] border border-[#E8EDF2]/15 hover:border-[#F4B942]/60 transition-colors flex items-center gap-2"
          >
            <Printer className="w-3.5 h-3.5 text-[#F4B942]" />
            <span>Print</span>
          </button>
        </div>
      </div>

      {/* Download Alert Toast */}
      {downloadNotice && (
        <div className="bg-[#301934] border border-[#F4B942]/40 text-[#F4B942] px-4 py-2.5 rounded-md text-xs font-medium text-center">
          {downloadNotice}
        </div>
      )}

      {/* View Switcher Bar */}
      <div className="flex items-center justify-between gap-4 text-xs pb-2">
        <div className="flex items-center gap-1 bg-[#1A0A1C] p-1 rounded-md border border-[#E8EDF2]/10">
          <button
            onClick={() => setViewMode('pdf')}
            className={`px-3 py-1.5 rounded text-xs font-medium transition-colors ${
              viewMode === 'pdf'
                ? 'bg-[#301934] text-[#F4B942] border border-[#F4B942]/30'
                : 'text-[#E8EDF2]/70 hover:text-[#E8EDF2]'
            }`}
          >
            PDF Document
          </button>
          <button
            onClick={() => setViewMode('ats')}
            className={`px-3 py-1.5 rounded text-xs font-medium transition-colors ${
              viewMode === 'ats'
                ? 'bg-[#301934] text-[#F4B942] border border-[#F4B942]/30'
                : 'text-[#E8EDF2]/70 hover:text-[#E8EDF2]'
            }`}
          >
            Web Version
          </button>
        </div>

        <span className="text-[11px] font-mono text-[#A592AD]">
          Last updated: October 2026
        </span>
      </div>

      {/* VIEW MODE 1: EMBEDDED ORIGINAL PDF DOCUMENT */}
      {viewMode === 'pdf' && (<div className="rounded-2xl bg-[#1B0B1D] border-2 border-[#E8EDF2]/20 p-2 sm:p-4 shadow-2xl space-y-3">
          <div className="flex items-center justify-between px-3 py-1.5 text-xs text-[#A592AD]">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <strong className="text-[#E8EDF2]">santu_nandi_resume.pdf</strong> (Exact uploaded candidate document)
            </span>
            <a href={pdfUrl} download="Santu_Nandi_Resume.pdf" className="text-[#F4B942] hover:underline font-semibold flex items-center gap-1">
              <Download className="w-3.5 h-3.5"/> Direct Download
            </a>
          </div>

          <div className="w-full h-[90vh] rounded-xl overflow-hidden border border-[#E8EDF2]/20 bg-[#2B152F] shadow-inner">
            <iframe src={`${pdfUrl}#view=FitH`} title="Santu Nandi Resume PDF" className="w-full h-full border-none rounded-xl"/>
          </div>
        </div>)}

      {/* VIEW MODE 2: ATS STRUCTURED WEB SHEET */}
      {viewMode === 'ats' && (<div className="vault-document-frame rounded-2xl bg-[#FFFFFF] text-[#1E0F21] p-8 sm:p-12 md:p-16 shadow-2xl border-4 border-[#E8EDF2]/80 font-sans max-w-4xl mx-auto select-text">
          {/* Resume Header */}
          <div className="border-b-2 border-[#301934] pb-6 space-y-3 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h2 className="text-3xl font-black text-[#301934] tracking-tight uppercase font-serif">
                  SANTU NANDI
                </h2>
                <div className="flex flex-wrap items-center gap-3 text-xs text-[#475569] mt-1.5">
                  <span className="flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5 text-[#301934]"/>
                    <strong className="text-[#1E293B]">(+91) 6297395234</strong>
                  </span>
                  <span>|</span>
                  <a href="mailto:santunandi523@gmail.com" className="hover:underline flex items-center gap-1 text-[#1E293B]">
                    <Mail className="w-3.5 h-3.5 text-[#301934]"/>
                    <span>santunandi523@gmail.com</span>
                  </a>
                  <span>|</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#301934]"/>
                    <span>Bankura, WB</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Socials / Links Bar */}
            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs font-medium text-[#2563EB]">
              <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1 text-[#0A66C2] font-semibold">
                <LinkedinIcon className="w-3.5 h-3.5"/>
                <span>linkedin.com/in/santunandi2116</span>
              </a>
              <span>|</span>
              <a href={profile.socials.github} target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1 text-[#1E293B] font-semibold">
                <GithubIcon className="w-3.5 h-3.5"/>
                <span>github.com/santunandi523</span>
              </a>
              <span>|</span>
              <a href={profile.socials.codolio} target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1 text-[#EA580C] font-semibold">
                <CodolioIcon className="w-3.5 h-3.5"/>
                <span>codolio.com/profile/santunandi</span>
              </a>
            </div>
          </div>

          {/* Resume Sections */}
          <div className="pt-6 space-y-7 text-xs leading-relaxed text-[#334155]">
            {/* SUMMARY */}
            <div className="space-y-2">
              <h3 className="text-xs font-black uppercase tracking-wider text-[#301934] border-b border-[#CBD5E1] pb-1">
                SUMMARY
              </h3>
              <p className="text-justify text-[11.5px] leading-relaxed text-[#334155]">
                Computer Science undergraduate at Chandigarh University with hands-on experience building full-stack applications using Java, Spring Boot, React.js, and SQL/NoSQL databases. Strong foundation in Data Structures and Algorithms, with 850+ coding problems solved and experience developing REST APIs, payment workflows, and AI-powered application features. Seeking a Software Development Internship to build reliable, scalable applications.
              </p>
            </div>

            {/* TECHNICAL SKILLS */}
            <div className="space-y-2">
              <h3 className="text-xs font-black uppercase tracking-wider text-[#301934] border-b border-[#CBD5E1] pb-1 flex items-center gap-1.5">
                <Terminal className="w-4 h-4 text-[#301934]"/> TECHNICAL SKILLS
              </h3>
              <div className="space-y-1 text-xs">
                <p>
                  <strong className="text-[#1E293B]">Languages:</strong> Java, SQL, JavaScript, C++, Python
                </p>
                <p>
                  <strong className="text-[#1E293B]">Web Technologies:</strong> React, HTML, Spring-boot, CSS, JavaScript (ES6+), MongoDB, SQL
                </p>
                <p>
                  <strong className="text-[#1E293B]">Core Concepts:</strong> Data Structures & Algorithms, Object-Oriented Programming (OOP), OS, DBMS
                </p>
              </div>
            </div>

            {/* ACADEMIC PROJECTS */}
            <div className="space-y-4">
              <h3 className="text-xs font-black uppercase tracking-wider text-[#301934] border-b border-[#CBD5E1] pb-1 flex items-center gap-1.5">
                <Briefcase className="w-4 h-4 text-[#301934]"/> ACADEMIC PROJECTS
              </h3>

              {/* FoodyHub */}
              <div className="space-y-1.5">
                <div className="flex justify-between items-baseline flex-wrap gap-1">
                  <h4 className="font-bold text-xs text-[#1E293B]">
                    FoodyHub | AI-Powered Online Food Delivery Application
                  </h4>
                  <span className="text-[11px] font-bold text-[#64748B]">Aug 2026</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-[11px] text-[#334155] pl-1">
                  <li>Developed a full-stack food delivery application using Java 17, Spring Boot, React 19, and MongoDB, supporting menu browsing, cart management, checkout, and order tracking.</li>
                  <li>Integrated Gemini 1.5 Flash AI assistant with backend tool calling and NLP fallbacks for personalized food recommendations, nutritional analysis, and budget-based meal planning.</li>
                  <li>Implemented JWT authentication and role-based access control (RBAC) using Spring Security to secure customer and admin REST APIs.</li>
                  <li>Integrated Razorpay payment gateway with payment signature verification and order status synchronization for secure checkout.</li>
                  <li>Built an admin dashboard for catalog and order management, integrated AWS S3 for image storage, and developed responsive UI with React Router v7 and Bootstrap 5.</li>
                </ul>
              </div>

              {/* PackSure */}
              <div className="space-y-1.5 pt-2">
                <div className="flex justify-between items-baseline flex-wrap gap-1">
                  <h4 className="font-bold text-xs text-[#1E293B]">
                    PackSure | Full-Stack AI-Based Compliance System
                  </h4>
                  <span className="text-[11px] font-bold text-[#64748B]">April 2026</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-[11px] text-[#334155] pl-1">
                  <li>Developed a full-stack product compliance platform using Java 17, Spring Boot 3, React 19, and PostgreSQL to automate packaged goods inspections against Legal Metrology regulations.</li>
                  <li>Built a computer vision and OCR pipeline using Python, FastAPI, OpenCV, and PaddleOCR to extract packaging declarations, including MRP, net quantity, dates, and consumer care details.</li>
                  <li>Engineered a rule-based compliance engine in Spring Boot to evaluate regulatory requirements, calculate compliance scores, and flag packaging violations.</li>
                  <li>Developed a React-based inspection dashboard with OCR confidence metrics, bounding-box visualization, and human-in-the-loop review for correcting extracted data.</li>
                  <li>Implemented Spring Security, JWT, and role-based access control (RBAC).</li>
                </ul>
              </div>
            </div>

            {/* EDUCATION */}
            <div className="space-y-3">
              <h3 className="text-xs font-black uppercase tracking-wider text-[#301934] border-b border-[#CBD5E1] pb-1 flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-[#301934]"/> EDUCATION
              </h3>

              <div className="space-y-2.5">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-xs text-[#1E293B]">Chandigarh University</h4>
                    <p className="text-[11px] text-[#475569]">B.E. Computer Science | CGPA: 8.25 (5th Sem)</p>
                  </div>
                  <div className="text-right">
                    <span className="text-[11px] font-bold text-[#64748B]">Expected 2028</span>
                  </div>
                </div>

                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-xs text-[#1E293B]">Hoomgarh Chandabila High School</h4>
                    <p className="text-[11px] text-[#475569]">XII (WBCHSE) | Score: 82.8%</p>
                  </div>
                  <div className="text-right">
                    <span className="text-[11px] font-bold text-[#64748B]">2024</span>
                  </div>
                </div>

                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-xs text-[#1E293B]">Hoomgarh Chandabila High School</h4>
                    <p className="text-[11px] text-[#475569]">X (WBBSE) | Score: 94.14%</p>
                  </div>
                  <div className="text-right">
                    <span className="text-[11px] font-bold text-[#64748B]">2022</span>
                  </div>
                </div>
              </div>
            </div>

            {/* ACHIEVEMENTS & CERTIFICATIONS */}
            <div className="space-y-2">
              <h3 className="text-xs font-black uppercase tracking-wider text-[#301934] border-b border-[#CBD5E1] pb-1 flex items-center gap-1.5">
                <Award className="w-4 h-4 text-[#301934]"/> ACHIEVEMENTS & CERTIFICATIONS
              </h3>
              <ul className="list-disc list-inside space-y-1.5 text-[11px] text-[#334155] pl-1">
                <li>
                  <strong className="text-[#1E293B]">Competitive Programming:</strong> Solved 850+ DSA problems across LeetCode, CodeChef, HackerRank and GeeksforGeeks (Contest Rating: 1660 | Leetcode).
                </li>
                <li>
                  <strong className="text-[#1E293B]">Technical Certifications:</strong> Machine Learning — NPTEL, Java Programming for Beginners & Software Engineering — IBM, Data Structures & Algorithms (Alpha) — Apna College, Career Skills in Software Development — LinkedIn Learning, Ethereum Blockchain — Infosys Springboard.
                </li>
                <li>
                  <strong className="text-[#1E293B]">Merit Scholarships:</strong> Recipient of National Scholarship Portal (NSP), Swami Vivekananda Merit-cum-Means (SVMCM), and NMMS merit awards.
                </li>
              </ul>
            </div>
          </div>
        </div>)}
    </div>);
};
