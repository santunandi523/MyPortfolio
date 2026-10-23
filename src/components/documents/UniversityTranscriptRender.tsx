import React from 'react';

interface Props {
  isRedacted?: boolean;
}

export const UniversityTranscriptRender: React.FC<Props> = ({ isRedacted = false }) => {
  return (
    <div className="w-full max-w-[820px] bg-[#FFFFFF] text-[#1E0F21] p-8 md:p-12 rounded-lg shadow-2xl border-4 border-[#D1D5DB] relative overflow-hidden font-sans select-none">
      {/* Official Watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none">
        <span className="text-8xl font-black tracking-widest text-[#301934] rotate-[-30deg]">CHANDIGARH UNIVERSITY</span>
      </div>

      {/* Verified Security Ribbon */}
      <div className="absolute top-0 right-0 bg-[#F4B942] text-[#301934] text-xs font-bold px-4 py-1 rounded-bl-lg shadow uppercase tracking-wider flex items-center gap-1.5">
        <span className="w-2 h-2 rounded-full bg-[#301934] animate-pulse"></span>
        Official University Transcript
      </div>

      {/* Header */}
      <div className="text-center border-b-2 border-[#301934] pb-6 mb-6">
        <div className="flex items-center justify-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-full bg-[#301934] text-[#F4B942] flex items-center justify-center font-bold font-serif text-lg">
            CU
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-[#301934] uppercase font-serif">
              Chandigarh University
            </h2>
            <p className="text-[11px] font-semibold text-[#66546B] uppercase tracking-widest">
              NAAC A+ Accredited University • Gharuan, Mohali, Punjab, India
            </p>
          </div>
        </div>
        <p className="text-sm font-semibold text-[#301934] mt-2">
          Consolidated Academic Statement & Semester Grade Progression
        </p>
        <p className="text-xs text-[#6B7280]">
          Bachelor of Engineering (B.E.) — Computer Science & Engineering (2022 – 2026)
        </p>
      </div>

      {/* Student Details Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs bg-[#F8FAFC] p-4 rounded-lg border border-[#E2E8F0] mb-6">
        <div>
          <span className="text-[#64748B] text-[10px] uppercase font-semibold block">Student Name:</span>
          <strong className="text-sm text-[#301934] uppercase">SANTU NANDI</strong>
        </div>
        <div>
          <span className="text-[#64748B] text-[10px] uppercase font-semibold block">University UID:</span>
          <strong className="text-sm text-[#301934]">
            {isRedacted ? '█████████' : '22BCS10842'}
          </strong>
        </div>
        <div>
          <span className="text-[#64748B] text-[10px] uppercase font-semibold block">Degree / Major:</span>
          <strong className="text-sm text-[#301934]">B.E. Computer Science</strong>
        </div>
        <div>
          <span className="text-[#64748B] text-[10px] uppercase font-semibold block">Current CGPA:</span>
          <span className="inline-block bg-[#301934] text-[#F4B942] px-2 py-0.5 rounded text-sm font-extrabold">
            8.30 / 10.0
          </span>
        </div>
      </div>

      {/* Semester Breakdown Table */}
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-xs border-collapse border border-[#CBD5E1]">
          <thead>
            <tr className="bg-[#301934] text-[#E8EDF2] uppercase text-[10px] tracking-wider text-left">
              <th className="p-2 border border-[#482850]">Semester</th>
              <th className="p-2 border border-[#482850] text-center">SGPA</th>
              <th className="p-2 border border-[#482850] text-center">CGPA</th>
              <th className="p-2 border border-[#482850] text-center">Credits</th>
              <th className="p-2 border border-[#482850]">Key Core Subjects</th>
              <th className="p-2 border border-[#482850] text-center">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#E2E8F0] text-[#1E293B]">
            <tr className="hover:bg-[#F8FAFC]">
              <td className="p-2 font-bold text-[#301934] border border-[#CBD5E1]">Semester I</td>
              <td className="p-2 text-center font-bold text-[#301934] border border-[#CBD5E1]">8.42</td>
              <td className="p-2 text-center font-semibold text-[#475569] border border-[#CBD5E1]">8.42</td>
              <td className="p-2 text-center border border-[#CBD5E1]">22</td>
              <td className="p-2 border border-[#CBD5E1] text-[11px] text-[#475569]">
                Engineering Math I, C Programming, Digital Logic, Basic Electrical
              </td>
              <td className="p-2 text-center border border-[#CBD5E1]">
                <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-emerald-100 text-emerald-800">PASSED</span>
              </td>
            </tr>
            <tr className="bg-[#F8FAFC] hover:bg-[#F1F5F9]">
              <td className="p-2 font-bold text-[#301934] border border-[#CBD5E1]">Semester II</td>
              <td className="p-2 text-center font-bold text-[#301934] border border-[#CBD5E1]">8.25</td>
              <td className="p-2 text-center font-semibold text-[#475569] border border-[#CBD5E1]">8.34</td>
              <td className="p-2 text-center border border-[#CBD5E1]">22</td>
              <td className="p-2 border border-[#CBD5E1] text-[11px] text-[#475569]">
                Data Structures in C++, OOP in Java, Discrete Math, Computer Org
              </td>
              <td className="p-2 text-center border border-[#CBD5E1]">
                <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-emerald-100 text-emerald-800">PASSED</span>
              </td>
            </tr>
            <tr className="hover:bg-[#F8FAFC]">
              <td className="p-2 font-bold text-[#301934] border border-[#CBD5E1]">Semester III</td>
              <td className="p-2 text-center font-bold text-[#301934] border border-[#CBD5E1]">8.35</td>
              <td className="p-2 text-center font-semibold text-[#475569] border border-[#CBD5E1]">8.34</td>
              <td className="p-2 text-center border border-[#CBD5E1]">24</td>
              <td className="p-2 border border-[#CBD5E1] text-[11px] text-[#475569]">
                Design & Analysis of Algorithms, DBMS, Operating Systems, Theory of Computation
              </td>
              <td className="p-2 text-center border border-[#CBD5E1]">
                <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-emerald-100 text-emerald-800">PASSED</span>
              </td>
            </tr>
            <tr className="bg-[#F8FAFC] hover:bg-[#F1F5F9]">
              <td className="p-2 font-bold text-[#301934] border border-[#CBD5E1]">Semester IV</td>
              <td className="p-2 text-center font-bold text-[#301934] border border-[#CBD5E1]">8.30</td>
              <td className="p-2 text-center font-semibold text-[#475569] border border-[#CBD5E1]">8.33</td>
              <td className="p-2 text-center border border-[#CBD5E1]">24</td>
              <td className="p-2 border border-[#CBD5E1] text-[11px] text-[#475569]">
                Computer Networks, Software Engineering, Advanced Java & J2EE, Probability & Stats
              </td>
              <td className="p-2 text-center border border-[#CBD5E1]">
                <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-emerald-100 text-emerald-800">PASSED</span>
              </td>
            </tr>
            <tr className="hover:bg-[#F8FAFC]">
              <td className="p-2 font-bold text-[#301934] border border-[#CBD5E1]">Semester V</td>
              <td className="p-2 text-center font-bold text-[#301934] border border-[#CBD5E1]">8.40</td>
              <td className="p-2 text-center font-semibold text-[#475569] border border-[#CBD5E1]">8.35</td>
              <td className="p-2 text-center border border-[#CBD5E1]">23</td>
              <td className="p-2 border border-[#CBD5E1] text-[11px] text-[#475569]">
                Distributed Systems, Web Tech (Spring & React), Info Security, Microservices
              </td>
              <td className="p-2 text-center border border-[#CBD5E1]">
                <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-emerald-100 text-emerald-800">PASSED</span>
              </td>
            </tr>
            <tr className="bg-[#F8FAFC] hover:bg-[#F1F5F9]">
              <td className="p-2 font-bold text-[#301934] border border-[#CBD5E1]">Semester VI</td>
              <td className="p-2 text-center font-bold text-[#301934] border border-[#CBD5E1]">8.32</td>
              <td className="p-2 text-center font-semibold text-[#475569] border border-[#CBD5E1]">8.30</td>
              <td className="p-2 text-center border border-[#CBD5E1]">23</td>
              <td className="p-2 border border-[#CBD5E1] text-[11px] text-[#475569]">
                AI & Machine Learning, Compiler Design, System Design & Scalability, Capstone I
              </td>
              <td className="p-2 text-center border border-[#CBD5E1]">
                <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-emerald-100 text-emerald-800">PASSED</span>
              </td>
            </tr>
            <tr className="bg-[#FEFCE8]">
              <td className="p-2 font-bold text-[#854D0E] border border-[#CBD5E1]">Semester VII</td>
              <td className="p-2 text-center font-semibold text-[#854D0E] border border-[#CBD5E1]">In Progress</td>
              <td className="p-2 text-center font-semibold text-[#854D0E] border border-[#CBD5E1]">8.30 (Proj)</td>
              <td className="p-2 text-center border border-[#CBD5E1]">20</td>
              <td className="p-2 border border-[#CBD5E1] text-[11px] text-[#854D0E]">
                Cloud Native Systems, CI/CD DevOps, Capstone Phase II, Industry Project
              </td>
              <td className="p-2 text-center border border-[#CBD5E1]">
                <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-amber-100 text-amber-800">CURRENT</span>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr className="bg-[#301934] text-[#E8EDF2] font-bold">
              <td colSpan={2} className="p-2.5 border border-[#482850] uppercase tracking-wider text-[11px]">
                CUMULATIVE GRADE POINT AVERAGE (CGPA)
              </td>
              <td className="p-2.5 border border-[#482850] text-center text-sm font-extrabold text-[#F4B942]">
                8.30 / 10.0
              </td>
              <td className="p-2.5 border border-[#482850] text-center text-xs text-[#E8EDF2]">
                138 Credits
              </td>
              <td colSpan={2} className="p-2.5 border border-[#482850] text-right text-[10px] text-[#F4B942] uppercase tracking-wider">
                FIRST DIVISION WITH DISTINCTION TRACK
              </td>
            </tr>
          </tfoot>
        </table>
      </div>

      {/* Verification footer */}
      <div className="flex items-end justify-between pt-4 border-t border-[#E2E8F0] text-xs">
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 rounded-full border-2 border-dashed border-[#301934] flex items-center justify-center p-1 text-[8px] text-center font-bold text-[#301934] uppercase rotate-[-6deg]">
            CU REGISTRAR SEAL 2024
          </div>
          <div>
            <p className="text-[10px] text-[#64748B]">Digital Verification QR & Barcode</p>
            <p className="font-mono text-[9px] text-[#301934]">VERIFY-UID: 22BCS10842-CU-830-SHA256</p>
          </div>
        </div>

        <div className="text-right">
          <div className="font-serif italic text-sm text-[#301934] mb-1 font-semibold">Dr. S. K. Sharma</div>
          <div className="border-t border-[#301934] pt-1 text-[10px] uppercase font-semibold text-[#64748B]">
            Controller of Examinations • Chandigarh University
          </div>
        </div>
      </div>
    </div>
  );
};
