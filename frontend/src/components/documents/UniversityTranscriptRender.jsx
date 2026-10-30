import React, { useState } from 'react';
import { FileText, Image as ImageIcon, ExternalLink, Download, ShieldCheck, ChevronLeft, ChevronRight, Clock, } from 'lucide-react';
export const UniversityTranscriptRender = ({ isRedacted = false, activePage: parentPage, onPageChange, }) => {
    const [internalPage, setInternalPage] = useState(1);
    const [viewMode, setViewMode] = useState('scanned');
    const currentPage = parentPage !== undefined ? parentPage : internalPage;
    const handlePageSelect = (page) => {
        if (onPageChange) {
            onPageChange(page);
        }
        else {
            setInternalPage(page);
        }
    };
    const pdfDownloadPath = '/documents/bachelor_of_engineering_cse_santu_nandi.pdf';
    const page1ImagePath = '/documents/cu_be_cse_result_page_1.png';
    const page2ImagePath = '/documents/cu_be_cse_result_page_2.png';
    const currentImagePath = currentPage === 1 ? page1ImagePath : page2ImagePath;
    return (<div className="w-full max-w-[860px] flex flex-col items-center">
      {/* Top Controller Header */}
      <div className="w-full flex flex-wrap items-center justify-between gap-3 bg-[#241227] px-4 py-2.5 rounded-t-xl border-x-2 border-t-2 border-[#E8EDF2]/20 text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#F4B942] animate-pulse"></span>
          <span className="font-bold text-[#E8EDF2] tracking-wide">
            Chandigarh University • B.E. Computer Science & Engineering Result
          </span>
          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
            5th Sem Pending
          </span>
        </div>

        {/* View Switcher & Page Controls */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 bg-[#140816] p-1 rounded-lg border border-[#E8EDF2]/15">
            <button onClick={() => setViewMode('scanned')} className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold transition-all ${viewMode === 'scanned'
            ? 'bg-[#F4B942] text-[#301934] shadow-sm'
            : 'text-[#E8EDF2]/80 hover:text-[#E8EDF2]'}`}>
              <ImageIcon className="w-3.5 h-3.5"/>
              <span>Official Result Doc</span>
            </button>
            <button onClick={() => setViewMode('ledger')} className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold transition-all ${viewMode === 'ledger'
            ? 'bg-[#F4B942] text-[#301934] shadow-sm'
            : 'text-[#E8EDF2]/80 hover:text-[#E8EDF2]'}`}>
              <FileText className="w-3.5 h-3.5"/>
              <span>Digital Ledger</span>
            </button>
          </div>

          {/* Page Selector Pill */}
          <div className="flex items-center bg-[#140816] rounded-lg border border-[#E8EDF2]/15 p-1 text-xs text-[#E8EDF2]">
            <button onClick={() => handlePageSelect(1)} className={`px-2.5 py-1 rounded font-semibold transition-all ${currentPage === 1 ? 'bg-[#301934] text-[#F4B942]' : 'hover:text-[#F4B942]'}`}>
              P. 1
            </button>
            <button onClick={() => handlePageSelect(2)} className={`px-2.5 py-1 rounded font-semibold transition-all ${currentPage === 2 ? 'bg-[#301934] text-[#F4B942]' : 'hover:text-[#F4B942]'}`}>
              P. 2
            </button>
          </div>
        </div>
      </div>

      {/* VIEW MODE 1: AUTHENTIC SCANNED / OFFICIAL DOCUMENT VIEW */}
      {viewMode === 'scanned' && (<div className="w-full bg-[#180A1A] p-4 sm:p-6 rounded-b-xl border-2 border-t-0 border-[#E8EDF2]/20 shadow-2xl flex flex-col items-center">
          {/* Quick Action & Meta Banner */}
          <div className="w-full flex flex-wrap items-center justify-between gap-2 bg-[#2D1631] px-4 py-2.5 rounded-lg border border-[#E8EDF2]/15 text-xs text-[#E8EDF2] mb-4">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0"/>
              <span className="font-medium">
                Official Chandigarh University UIMS Result Statement (UID: {isRedacted ? '█████████' : '24BCS10650'}) • Page {currentPage} of 2
              </span>
            </div>
            <div className="flex items-center gap-3">
              <a href={currentImagePath} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-[#F4B942] hover:underline font-medium">
                Full Resolution <ExternalLink className="w-3 h-3"/>
              </a>
              <span className="text-[#E8EDF2]/30">•</span>
              <a href={pdfDownloadPath} download="Santu_Nandi_BE_CSE_Chandigarh_University_Result.pdf" className="flex items-center gap-1 text-emerald-400 hover:underline font-medium">
                Download PDF (201 KB) <Download className="w-3 h-3"/>
              </a>
            </div>
          </div>

          {/* High-Resolution Document Render Frame */}
          <div className="relative w-full overflow-hidden rounded-lg border-4 border-[#C8D1D9] bg-[#FFFFFF] shadow-2xl flex items-center justify-center p-2 sm:p-4">
            <img src={currentImagePath} alt={`Chandigarh University B.E. CSE Student's Final Result - Page ${currentPage}`} className="w-full max-h-[82vh] object-contain rounded shadow"/>
          </div>

          {/* Bottom Page Navigation Controls */}
          <div className="w-full flex items-center justify-between mt-4 text-xs">
            <button onClick={() => handlePageSelect(1)} disabled={currentPage === 1} className={`flex items-center gap-1 px-3 py-1.5 rounded-lg border transition-all ${currentPage === 1
                ? 'opacity-40 border-[#E8EDF2]/10 text-[#A592AD] cursor-not-allowed'
                : 'bg-[#261329] border-[#E8EDF2]/20 text-[#E8EDF2] hover:border-[#F4B942]'}`}>
              <ChevronLeft className="w-4 h-4"/> Previous Page (Page 1)
            </button>

            <span className="font-mono text-[#F4B942] font-semibold">
              Viewing Page {currentPage} / 2
            </span>

            <button onClick={() => handlePageSelect(2)} disabled={currentPage === 2} className={`flex items-center gap-1 px-3 py-1.5 rounded-lg border transition-all ${currentPage === 2
                ? 'opacity-40 border-[#E8EDF2]/10 text-[#A592AD] cursor-not-allowed'
                : 'bg-[#261329] border-[#E8EDF2]/20 text-[#E8EDF2] hover:border-[#F4B942]'}`}>
              Next Page (Page 2) <ChevronRight className="w-4 h-4"/>
            </button>
          </div>

          {/* Quick Metrics Bar */}
          <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-2.5 mt-4 text-xs">
            <div className="bg-[#261329] p-2.5 rounded-lg border border-[#E8EDF2]/10 text-center">
              <span className="text-[10px] uppercase text-[#A592AD] block font-semibold">Cumulative CGPA</span>
              <strong className="text-sm text-[#F4B942]">8.25 / 10.0</strong>
            </div>
            <div className="bg-[#261329] p-2.5 rounded-lg border border-[#E8EDF2]/10 text-center">
              <span className="text-[10px] uppercase text-[#A592AD] block font-semibold">Current Status</span>
              <strong className="text-xs text-amber-400 flex items-center justify-center gap-1 mt-0.5">
                <Clock className="w-3.5 h-3.5"/> 5th Sem Pending
              </strong>
            </div>
            <div className="bg-[#261329] p-2.5 rounded-lg border border-[#E8EDF2]/10 text-center">
              <span className="text-[10px] uppercase text-[#A592AD] block font-semibold">Completed Credits</span>
              <strong className="text-sm text-[#E8EDF2]">97.00 Credits</strong>
            </div>
            <div className="bg-[#261329] p-2.5 rounded-lg border border-[#E8EDF2]/10 text-center">
              <span className="text-[10px] uppercase text-[#A592AD] block font-semibold">University UID</span>
              <strong className="text-xs text-[#E8EDF2] font-mono">
                {isRedacted ? '█████████' : '24BCS10650'}
              </strong>
            </div>
          </div>
        </div>)}

      {/* VIEW MODE 2: INTERACTIVE DIGITAL LEDGER (MATCHING OFFICIAL UIMS LAYOUT) */}
      {viewMode === 'ledger' && (<div className="w-full bg-[#FFFFFF] text-[#1E0F21] p-6 sm:p-10 rounded-b-xl shadow-2xl border-2 border-t-0 border-[#D1D5DB] font-sans">
          {/* Official CU Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b-2 border-[#1E0F21] mb-6">
            <div className="flex items-center gap-3">
              <img src="/documents/cu_logo.jpeg" alt="Chandigarh University Logo" className="h-12 w-auto object-contain" onError={(e) => {
                e.target.style.display = 'none';
            }}/>
              <div>
                <h1 className="text-lg sm:text-xl font-bold tracking-tight text-[#B91C1C] uppercase font-serif">
                  CHANDIGARH UNIVERSITY
                </h1>
                <p className="text-[10px] text-[#6B7280] font-semibold tracking-wide">
                  Discover . Learn . Empower • Gharuan, Mohali, Punjab
                </p>
              </div>
            </div>

            <div className="text-right">
              <div className="text-base font-bold text-[#1E0F21]">Student Results</div>
              <div className="text-xs text-[#4B5563] font-medium">Student's Final Result</div>
              <div className="text-[10px] text-[#6B7280] flex items-center gap-2 justify-end mt-1">
                <span>Result Type: <strong className="text-[#1E0F21]">Final</strong></span>
                <span>•</span>
                <span className="text-blue-700 underline cursor-pointer">Print</span>
              </div>
            </div>
          </div>

          {/* Degree & Student Metadata */}
          <div className="border border-[#CBD5E1] bg-[#F8FAFC] p-4 rounded-lg mb-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-1.5 text-xs text-[#1E293B]">
              <div className="text-sm font-extrabold text-[#301934] uppercase tracking-wide">
                CS201-BACHELOR OF ENGINEERING - COMPUTER SCIENCE & ENGINEERING
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 pt-1 font-mono">
                <div>
                  <span className="text-[#64748B] font-sans">UID: </span>
                  <strong className="text-[#1E0F21]">{isRedacted ? '█████████' : '24BCS10650'}</strong>
                </div>
                <div>
                  <span className="text-[#64748B] font-sans">Name: </span>
                  <strong className="text-[#1E0F21]">SANTU NANDI</strong>
                </div>
                <div>
                  <span className="text-[#64748B] font-sans">Father's Name: </span>
                  <strong className="text-[#1E0F21]">SAMAR NANDI</strong>
                </div>
                <div>
                  <span className="text-[#64748B] font-sans">Mother's Name: </span>
                  <strong className="text-[#1E0F21]">PRATIMA NANDI</strong>
                </div>
                <div className="col-span-full pt-1">
                  <span className="text-[#64748B] font-sans">Cumulative CGPA: </span>
                  <span className="px-2 py-0.5 rounded bg-[#301934] text-[#F4B942] font-black text-sm">
                    8.25
                  </span>
                  <span className="ml-2 text-[11px] text-[#059669] font-bold font-sans">
                    (Semesters 1 – 4 Completed • 5th Semester Pending)
                  </span>
                </div>
              </div>
            </div>

            {/* Student Photo */}
            <div className="shrink-0 flex flex-col items-center">
              <div className="w-24 h-28 border-2 border-[#94A3B8] rounded overflow-hidden shadow-sm bg-gray-100 flex items-center justify-center">
                <img src="/documents/santu_nandi_student_photo.jpeg" alt="Santu Nandi" className="w-full h-full object-cover"/>
              </div>
              <span className="text-[9px] text-[#64748B] uppercase font-semibold mt-1">Student Photo</span>
            </div>
          </div>

          {/* SEMESTER 4 TABLE */}
          <div className="mb-6">
            <div className="bg-[#1E293B] text-[#F8FAFC] px-3 py-1.5 font-bold text-xs flex items-center justify-between rounded-t">
              <span className="uppercase tracking-wider">Semester : 4</span>
              <span className="text-[#F4B942] font-mono text-sm">SGPA : 8.04</span>
            </div>
            <table className="w-full text-xs border border-[#CBD5E1] border-collapse">
              <thead>
                <tr className="bg-[#F1F5F9] text-[#334155] text-left uppercase text-[10px]">
                  <th className="p-2 border border-[#CBD5E1] w-28">Subject Code</th>
                  <th className="p-2 border border-[#CBD5E1]">Subject Name</th>
                  <th className="p-2 border border-[#CBD5E1] text-center w-20">Credits</th>
                  <th className="p-2 border border-[#CBD5E1] text-center w-16">Grade</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2E8F0] font-mono text-[11px]">
                <tr>
                  <td className="p-2 border border-[#CBD5E1]">24CSH-206</td>
                  <td className="p-2 border border-[#CBD5E1] font-sans font-medium">Design and Analysis of Algorithms</td>
                  <td className="p-2 border border-[#CBD5E1] text-center">4.00</td>
                  <td className="p-2 border border-[#CBD5E1] text-center font-bold text-emerald-700">A</td>
                </tr>
                <tr className="bg-[#F8FAFC]">
                  <td className="p-2 border border-[#CBD5E1]">24CSH-207</td>
                  <td className="p-2 border border-[#CBD5E1] font-sans font-medium">Object Oriented Programming using Java</td>
                  <td className="p-2 border border-[#CBD5E1] text-center">3.00</td>
                  <td className="p-2 border border-[#CBD5E1] text-center font-bold text-blue-700">B</td>
                </tr>
                <tr>
                  <td className="p-2 border border-[#CBD5E1]">24CSP-209</td>
                  <td className="p-2 border border-[#CBD5E1] font-sans font-medium">Competitive Coding–I</td>
                  <td className="p-2 border border-[#CBD5E1] text-center">1.00</td>
                  <td className="p-2 border border-[#CBD5E1] text-center font-bold text-emerald-700">B+</td>
                </tr>
                <tr className="bg-[#F8FAFC]">
                  <td className="p-2 border border-[#CBD5E1]">24CSP-210</td>
                  <td className="p-2 border border-[#CBD5E1] font-sans font-medium">Full Stack Development-I</td>
                  <td className="p-2 border border-[#CBD5E1] text-center">2.00</td>
                  <td className="p-2 border border-[#CBD5E1] text-center font-bold text-emerald-700">B+</td>
                </tr>
                <tr>
                  <td className="p-2 border border-[#CBD5E1]">24CSR-208</td>
                  <td className="p-2 border border-[#CBD5E1] font-sans font-medium">Semester Mini Project</td>
                  <td className="p-2 border border-[#CBD5E1] text-center">2.00</td>
                  <td className="p-2 border border-[#CBD5E1] text-center font-bold text-emerald-700">B+</td>
                </tr>
                <tr className="bg-[#F8FAFC]">
                  <td className="p-2 border border-[#CBD5E1]">24CST-205</td>
                  <td className="p-2 border border-[#CBD5E1] font-sans font-medium">Operating Systems</td>
                  <td className="p-2 border border-[#CBD5E1] text-center">3.00</td>
                  <td className="p-2 border border-[#CBD5E1] text-center font-bold text-emerald-700">B+</td>
                </tr>
                <tr>
                  <td className="p-2 border border-[#CBD5E1]">24CST-208</td>
                  <td className="p-2 border border-[#CBD5E1] font-sans font-medium">Software Engineering</td>
                  <td className="p-2 border border-[#CBD5E1] text-center">3.00</td>
                  <td className="p-2 border border-[#CBD5E1] text-center font-bold text-emerald-700">B+</td>
                </tr>
                <tr className="bg-[#F8FAFC]">
                  <td className="p-2 border border-[#CBD5E1]">24CST-211</td>
                  <td className="p-2 border border-[#CBD5E1] font-sans font-medium">Introduction to Machine Learning (Through SWAYAM)</td>
                  <td className="p-2 border border-[#CBD5E1] text-center">3.00</td>
                  <td className="p-2 border border-[#CBD5E1] text-center font-bold text-emerald-700">B+</td>
                </tr>
                <tr>
                  <td className="p-2 border border-[#CBD5E1]">24TDP-291</td>
                  <td className="p-2 border border-[#CBD5E1] font-sans font-medium">SOFT SKILLS - II</td>
                  <td className="p-2 border border-[#CBD5E1] text-center">2.00</td>
                  <td className="p-2 border border-[#CBD5E1] text-center font-bold text-emerald-700">B+</td>
                </tr>
                <tr className="bg-[#F8FAFC]">
                  <td className="p-2 border border-[#CBD5E1]">24TDT-292</td>
                  <td className="p-2 border border-[#CBD5E1] font-sans font-medium">APTITUDE - II</td>
                  <td className="p-2 border border-[#CBD5E1] text-center">4.00</td>
                  <td className="p-2 border border-[#CBD5E1] text-center font-bold text-emerald-700">B+</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* SEMESTER 3 TABLE */}
          <div className="mb-6">
            <div className="bg-[#1E293B] text-[#F8FAFC] px-3 py-1.5 font-bold text-xs flex items-center justify-between rounded-t">
              <span className="uppercase tracking-wider">Semester : 3</span>
              <span className="text-[#F4B942] font-mono text-sm">SGPA : 8.70</span>
            </div>
            <table className="w-full text-xs border border-[#CBD5E1] border-collapse">
              <thead>
                <tr className="bg-[#F1F5F9] text-[#334155] text-left uppercase text-[10px]">
                  <th className="p-2 border border-[#CBD5E1] w-28">Subject Code</th>
                  <th className="p-2 border border-[#CBD5E1]">Subject Name</th>
                  <th className="p-2 border border-[#CBD5E1] text-center w-20">Credits</th>
                  <th className="p-2 border border-[#CBD5E1] text-center w-16">Grade</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2E8F0] font-mono text-[11px]">
                <tr>
                  <td className="p-2 border border-[#CBD5E1]">24CSH-202</td>
                  <td className="p-2 border border-[#CBD5E1] font-sans font-medium">Advanced Data Structures and Algorithms</td>
                  <td className="p-2 border border-[#CBD5E1] text-center">4.00</td>
                  <td className="p-2 border border-[#CBD5E1] text-center font-bold text-emerald-700">A</td>
                </tr>
                <tr className="bg-[#F8FAFC]">
                  <td className="p-2 border border-[#CBD5E1]">24CSH-204</td>
                  <td className="p-2 border border-[#CBD5E1] font-sans font-medium">Database Management System</td>
                  <td className="p-2 border border-[#CBD5E1] text-center">4.00</td>
                  <td className="p-2 border border-[#CBD5E1] text-center font-bold text-emerald-700">A</td>
                </tr>
                <tr>
                  <td className="p-2 border border-[#CBD5E1]">24CSP-203</td>
                  <td className="p-2 border border-[#CBD5E1] font-sans font-medium">Python Programming</td>
                  <td className="p-2 border border-[#CBD5E1] text-center">2.00</td>
                  <td className="p-2 border border-[#CBD5E1] text-center font-bold text-emerald-700">A</td>
                </tr>
                <tr className="bg-[#F8FAFC]">
                  <td className="p-2 border border-[#CBD5E1]">24CST-201</td>
                  <td className="p-2 border border-[#CBD5E1] font-sans font-medium">Computer Organization and Architecture</td>
                  <td className="p-2 border border-[#CBD5E1] text-center">3.00</td>
                  <td className="p-2 border border-[#CBD5E1] text-center font-bold text-emerald-700">B+</td>
                </tr>
                <tr>
                  <td className="p-2 border border-[#CBD5E1]">24GPT-121</td>
                  <td className="p-2 border border-[#CBD5E1] font-sans font-medium">General Proficiency-1</td>
                  <td className="p-2 border border-[#CBD5E1] text-center">1.00</td>
                  <td className="p-2 border border-[#CBD5E1] text-center font-bold text-emerald-700">A</td>
                </tr>
                <tr className="bg-[#F8FAFC]">
                  <td className="p-2 border border-[#CBD5E1]">24SMT-242</td>
                  <td className="p-2 border border-[#CBD5E1] font-sans font-medium">Discrete Mathematics</td>
                  <td className="p-2 border border-[#CBD5E1] text-center">4.00</td>
                  <td className="p-2 border border-[#CBD5E1] text-center font-bold text-emerald-700">A</td>
                </tr>
                <tr>
                  <td className="p-2 border border-[#CBD5E1]">24TDP-211</td>
                  <td className="p-2 border border-[#CBD5E1] font-sans font-medium">Soft Skills- 1</td>
                  <td className="p-2 border border-[#CBD5E1] text-center">1.00</td>
                  <td className="p-2 border border-[#CBD5E1] text-center font-bold text-blue-700">B</td>
                </tr>
                <tr className="bg-[#F8FAFC]">
                  <td className="p-2 border border-[#CBD5E1]">24UCI-203</td>
                  <td className="p-2 border border-[#CBD5E1] font-sans font-medium">Social Internship (Community Engagement and Social Responsibility)</td>
                  <td className="p-2 border border-[#CBD5E1] text-center">2.00</td>
                  <td className="p-2 border border-[#CBD5E1] text-center font-bold text-emerald-700">B+</td>
                </tr>
                <tr>
                  <td className="p-2 border border-[#CBD5E1]">24UCT-296</td>
                  <td className="p-2 border border-[#CBD5E1] font-sans font-medium">Universal Human Values, Ethics and Life Skills-2</td>
                  <td className="p-2 border border-[#CBD5E1] text-center">2.00</td>
                  <td className="p-2 border border-[#CBD5E1] text-center font-bold text-emerald-700">A</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* SEMESTER 2 TABLE */}
          <div className="mb-6">
            <div className="bg-[#1E293B] text-[#F8FAFC] px-3 py-1.5 font-bold text-xs flex items-center justify-between rounded-t">
              <span className="uppercase tracking-wider">Semester : 2</span>
              <span className="text-[#F4B942] font-mono text-sm">SGPA : 8.60</span>
            </div>
            <table className="w-full text-xs border border-[#CBD5E1] border-collapse">
              <thead>
                <tr className="bg-[#F1F5F9] text-[#334155] text-left uppercase text-[10px]">
                  <th className="p-2 border border-[#CBD5E1] w-28">Subject Code</th>
                  <th className="p-2 border border-[#CBD5E1]">Subject Name</th>
                  <th className="p-2 border border-[#CBD5E1] text-center w-20">Credits</th>
                  <th className="p-2 border border-[#CBD5E1] text-center w-16">Grade</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2E8F0] font-mono text-[11px]">
                <tr>
                  <td className="p-2 border border-[#CBD5E1]">24CSH-103</td>
                  <td className="p-2 border border-[#CBD5E1] font-sans font-medium">Basic Data Structures Using C++</td>
                  <td className="p-2 border border-[#CBD5E1] text-center">4.00</td>
                  <td className="p-2 border border-[#CBD5E1] text-center font-bold text-purple-700">A+</td>
                </tr>
                <tr className="bg-[#F8FAFC]">
                  <td className="p-2 border border-[#CBD5E1]">24ECP-103</td>
                  <td className="p-2 border border-[#CBD5E1] font-sans font-medium">Emerging & Disruptive Technologies Workshop (IoT, AR-VR, Robotics)</td>
                  <td className="p-2 border border-[#CBD5E1] text-center">2.00</td>
                  <td className="p-2 border border-[#CBD5E1] text-center font-bold text-emerald-700">B+</td>
                </tr>
                <tr>
                  <td className="p-2 border border-[#CBD5E1]">24MEP-101</td>
                  <td className="p-2 border border-[#CBD5E1] font-sans font-medium">Workshop Technology</td>
                  <td className="p-2 border border-[#CBD5E1] text-center">1.00</td>
                  <td className="p-2 border border-[#CBD5E1] text-center font-bold text-emerald-700">A</td>
                </tr>
                <tr className="bg-[#F8FAFC]">
                  <td className="p-2 border border-[#CBD5E1]">24PCP-111</td>
                  <td className="p-2 border border-[#CBD5E1] font-sans font-medium">Communication Skills -II</td>
                  <td className="p-2 border border-[#CBD5E1] text-center">2.00</td>
                  <td className="p-2 border border-[#CBD5E1] text-center font-bold text-blue-700">B</td>
                </tr>
                <tr>
                  <td className="p-2 border border-[#CBD5E1]">24SMT-125</td>
                  <td className="p-2 border border-[#CBD5E1] font-sans font-medium">Mathematics-II</td>
                  <td className="p-2 border border-[#CBD5E1] text-center">5.00</td>
                  <td className="p-2 border border-[#CBD5E1] text-center font-bold text-emerald-700">A</td>
                </tr>
                <tr className="bg-[#F8FAFC]">
                  <td className="p-2 border border-[#CBD5E1]">24SPH-141</td>
                  <td className="p-2 border border-[#CBD5E1] font-sans font-medium">Engineering Physics</td>
                  <td className="p-2 border border-[#CBD5E1] text-center">4.00</td>
                  <td className="p-2 border border-[#CBD5E1] text-center font-bold text-emerald-700">B+</td>
                </tr>
                <tr>
                  <td className="p-2 border border-[#CBD5E1]">24SZT-148</td>
                  <td className="p-2 border border-[#CBD5E1] font-sans font-medium">Biology for Engineers</td>
                  <td className="p-2 border border-[#CBD5E1] text-center">3.00</td>
                  <td className="p-2 border border-[#CBD5E1] text-center font-bold text-emerald-700">B+</td>
                </tr>
                <tr className="bg-[#F8FAFC]">
                  <td className="p-2 border border-[#CBD5E1]">24TDT-152</td>
                  <td className="p-2 border border-[#CBD5E1] font-sans font-medium">APTITUDE -I</td>
                  <td className="p-2 border border-[#CBD5E1] text-center">2.00</td>
                  <td className="p-2 border border-[#CBD5E1] text-center font-bold text-emerald-700">A</td>
                </tr>
                <tr>
                  <td className="p-2 border border-[#CBD5E1]">24UCT-102</td>
                  <td className="p-2 border border-[#CBD5E1] font-sans font-medium">Academic Writing Skills and IPR</td>
                  <td className="p-2 border border-[#CBD5E1] text-center">1.00</td>
                  <td className="p-2 border border-[#CBD5E1] text-center font-bold text-emerald-700">B+</td>
                </tr>
                <tr className="bg-[#F8FAFC]">
                  <td className="p-2 border border-[#CBD5E1]">24UCT-103</td>
                  <td className="p-2 border border-[#CBD5E1] font-sans font-medium">Universal Human Values, Ethics and Life Skills-1</td>
                  <td className="p-2 border border-[#CBD5E1] text-center">1.00</td>
                  <td className="p-2 border border-[#CBD5E1] text-center font-bold text-emerald-700">A</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* SEMESTER 1 TABLE */}
          <div className="mb-6">
            <div className="bg-[#1E293B] text-[#F8FAFC] px-3 py-1.5 font-bold text-xs flex items-center justify-between rounded-t">
              <span className="uppercase tracking-wider">Semester : 1</span>
              <span className="text-[#F4B942] font-mono text-sm">SGPA : 7.62</span>
            </div>
            <table className="w-full text-xs border border-[#CBD5E1] border-collapse">
              <thead>
                <tr className="bg-[#F1F5F9] text-[#334155] text-left uppercase text-[10px]">
                  <th className="p-2 border border-[#CBD5E1] w-28">Subject Code</th>
                  <th className="p-2 border border-[#CBD5E1]">Subject Name</th>
                  <th className="p-2 border border-[#CBD5E1] text-center w-20">Credits</th>
                  <th className="p-2 border border-[#CBD5E1] text-center w-16">Grade</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2E8F0] font-mono text-[11px]">
                <tr>
                  <td className="p-2 border border-[#CBD5E1]">24CSH-101</td>
                  <td className="p-2 border border-[#CBD5E1] font-sans font-medium">Introduction to Problem Solving</td>
                  <td className="p-2 border border-[#CBD5E1] text-center">4.00</td>
                  <td className="p-2 border border-[#CBD5E1] text-center font-bold text-emerald-700">B+</td>
                </tr>
                <tr className="bg-[#F8FAFC]">
                  <td className="p-2 border border-[#CBD5E1]">24CSP-102</td>
                  <td className="p-2 border border-[#CBD5E1] font-sans font-medium">Design Thinking</td>
                  <td className="p-2 border border-[#CBD5E1] text-center">1.00</td>
                  <td className="p-2 border border-[#CBD5E1] text-center font-bold text-emerald-700">A</td>
                </tr>
                <tr>
                  <td className="p-2 border border-[#CBD5E1]">24CST-110</td>
                  <td className="p-2 border border-[#CBD5E1] font-sans font-medium">Life Skills and Mentoring</td>
                  <td className="p-2 border border-[#CBD5E1] text-center">1.00</td>
                  <td className="p-2 border border-[#CBD5E1] text-center font-bold text-blue-700">Qualified</td>
                </tr>
                <tr className="bg-[#F8FAFC]">
                  <td className="p-2 border border-[#CBD5E1]">24ECH-101</td>
                  <td className="p-2 border border-[#CBD5E1] font-sans font-medium">Fundamental of Electrical and Digital Electronics</td>
                  <td className="p-2 border border-[#CBD5E1] text-center">4.00</td>
                  <td className="p-2 border border-[#CBD5E1] text-center font-bold text-emerald-700">A</td>
                </tr>
                <tr>
                  <td className="p-2 border border-[#CBD5E1]">24ECP-102</td>
                  <td className="p-2 border border-[#CBD5E1] font-sans font-medium">IT, HW and AI Workshop</td>
                  <td className="p-2 border border-[#CBD5E1] text-center">1.00</td>
                  <td className="p-2 border border-[#CBD5E1] text-center font-bold text-amber-700">C+</td>
                </tr>
                <tr className="bg-[#F8FAFC]">
                  <td className="p-2 border border-[#CBD5E1]">24MEP-102</td>
                  <td className="p-2 border border-[#CBD5E1] font-sans font-medium">Computer Graphics Using CAD Lab</td>
                  <td className="p-2 border border-[#CBD5E1] text-center">1.00</td>
                  <td className="p-2 border border-[#CBD5E1] text-center font-bold text-blue-700">B</td>
                </tr>
                <tr>
                  <td className="p-2 border border-[#CBD5E1]">24PCH-110</td>
                  <td className="p-2 border border-[#CBD5E1] font-sans font-medium">Communication Skills -I</td>
                  <td className="p-2 border border-[#CBD5E1] text-center">2.00</td>
                  <td className="p-2 border border-[#CBD5E1] text-center font-bold text-blue-700">B</td>
                </tr>
                <tr className="bg-[#F8FAFC]">
                  <td className="p-2 border border-[#CBD5E1]">24SMT-121</td>
                  <td className="p-2 border border-[#CBD5E1] font-sans font-medium">Mathematics -I</td>
                  <td className="p-2 border border-[#CBD5E1] text-center">5.00</td>
                  <td className="p-2 border border-[#CBD5E1] text-center font-bold text-blue-700">B</td>
                </tr>
                <tr>
                  <td className="p-2 border border-[#CBD5E1]">24SPH-143</td>
                  <td className="p-2 border border-[#CBD5E1] font-sans font-medium">Semiconductor Physics</td>
                  <td className="p-2 border border-[#CBD5E1] text-center">3.00</td>
                  <td className="p-2 border border-[#CBD5E1] text-center font-bold text-blue-700">B</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* CURRENT SEMESTER 5 STATUS BANNER */}
          <div className="p-4 rounded-lg bg-amber-50 border border-amber-200 text-amber-900 mb-6 flex items-start gap-3">
            <Clock className="w-5 h-5 text-amber-600 shrink-0 mt-0.5"/>
            <div className="text-xs">
              <strong className="block text-sm font-bold text-amber-800">
                Semester 5 Status: Currently In Progress (Pending)
              </strong>
              <p className="mt-0.5 text-amber-700">
                Coursework for the 5th semester is currently active. SGPAs from completed semesters (Sem 1: 7.62, Sem 2: 8.60, Sem 3: 8.70, Sem 4: 8.04) establish a cumulative 8.25 CGPA across 97 completed university credit units.
              </p>
            </div>
          </div>

          {/* Official Disclaimer */}
          <div className="pt-4 border-t border-[#E2E8F0] text-[10px] text-[#64748B] leading-relaxed italic">
            <strong>Disclaimer:</strong> Chandigarh University is not responsible for any inadvertent error that may have crept in the results being published on the UIMS. The results published on the UIMS are for immediate information to the examinees & not for legal purpose. These cannot be treated as original marks. Original marks shall be issued by the University separately. In case of any discrepancy, University records shall be final.
            <div className="mt-1 font-mono not-italic text-[9px] text-[#94A3B8]">
              Verification Reference: CS201-24BCS10650-825-CU-UIMS • Chandigarh University Examination Division
            </div>
          </div>
        </div>)}
    </div>);
};
