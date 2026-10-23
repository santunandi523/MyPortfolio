import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  User,
  GraduationCap,
  Code2,
  Terminal,
  Briefcase,
  Flame,
  Award,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Layers,
  Server,
  Coffee,
  Database,
  ShieldCheck,
} from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export const AboutPage: React.FC = () => {
  const { profile, skills } = usePortfolio();

  const careerMilestones = [
    {
      period: '2020',
      title: 'Secondary Examination Scholastic Distinction (94.14%)',
      institution: 'West Bengal Board of Secondary Education',
      description: 'Graduated in top 0.5% statewide with 98 in Mathematics and 97 in Physical Science, building the rigorous analytical and algorithmic foundation for computer science.',
    },
    {
      period: '2022',
      title: 'Higher Secondary Completion (82.8%) — Pure Science',
      institution: 'West Bengal Council of Higher Secondary Education',
      description: 'Completed Class XII in Pure Science (Physics, Chemistry, Mathematics, Computer Applications) before enrolling in Computer Science Engineering.',
    },
    {
      period: '2024 – Expected 2028',
      title: 'Bachelor of Engineering in CSE (8.25 CGPA)',
      institution: 'Chandigarh University, Mohali',
      description: 'Pursuing B.E. Computer Science and Engineering. Deep dive into Data Structures & Algorithms, Object-Oriented Java, Operating Systems, Computer Networks, and Database Management Systems.',
    },
    {
      period: '2023 – 2024',
      title: 'Competitive Programming Escalation (850+ Solved, 1660 Rating)',
      institution: 'LeetCode, Codolio, Codeforces, CodeChef',
      description: 'Consistent daily problem-solving discipline earning 50-day and 100-day continuous streaks, achieving 1660 LeetCode contest rating and solving over 850 algorithm problems across platforms.',
    },
    {
      period: '2024 – 2025',
      title: 'Engineering Production Systems: FoodyHub & PackSure',
      institution: 'Full Stack Engineering Milestones',
      description: 'Architected FoodyHub (Spring Boot, Razorpay, AWS S3, Gemini AI) and PackSure (Spring Boot 3, Python FastAPI, OpenCV, PaddleOCR compliance engine) into production-grade systems.',
    },
    {
      period: '2025 – 2026',
      title: 'Upcoming: Industry Internship & Full-Time Software Engineering',
      institution: 'Career Target',
      description: 'Actively seeking Software Engineering Internships and Full-Time roles at forward-thinking technology companies to build high-scale, resilient backend and full-stack software.',
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20">
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#301934] border border-[#F4B942]/40 text-xs font-bold text-[#F4B942] uppercase tracking-wider">
          <User className="w-4 h-4" /> Professional Biography
        </div>
        <h1 className="text-4xl sm:text-5xl font-black font-display text-[#E8EDF2] tracking-tight">
          About Santu Nandi
        </h1>
        <p className="text-sm sm:text-base text-[#A592AD] leading-relaxed">
          Java Full Stack Developer, Computer Science Engineering student at Chandigarh University, and relentless algorithmic problem solver.
        </p>
      </div>

      {/* Narrative & Philosophy Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Biography Details */}
        <div className="lg:col-span-7 space-y-6">
          <div className="rounded-2xl bg-[#261329] border border-[#E8EDF2]/15 p-6 md:p-8 space-y-5 shadow-md">
            <h2 className="text-2xl font-black text-[#E8EDF2] flex items-center gap-2">
              <Coffee className="w-6 h-6 text-[#F4B942]" /> Engineering Background & Ethos
            </h2>

            <div className="space-y-4 text-xs sm:text-sm text-[#A592AD] leading-relaxed">
              <p>
                My software engineering journey began with a strong foundation in mathematical logic and competitive problem solving. Born and raised in West Bengal, I achieved a 94.14% aggregate in my secondary school board examinations (ranking among the top 0.5% statewide), which established my passion for analytical rigor.
              </p>
              <p>
                At <strong className="text-[#E8EDF2]">Chandigarh University</strong>, I channeled this curiosity into Computer Science Engineering, currently maintaining an <strong className="text-[#F4B942]">8.25 CGPA (5th Sem)</strong>. I found my true passion at the intersection of modern Java microservices and clean, deterministic backend architecture.
              </p>
              <p>
                Rather than treating code as just syntax, I treat every project as a resilient production product. When developing <strong className="text-[#E8EDF2]">FoodyHub</strong>, I handled concurrency bottlenecks using pessimistic locks and integrated Razorpay cryptographic webhooks alongside Gemini AI. With <strong className="text-[#E8EDF2]">PackSure</strong>, I bridged Python computer vision OCR with a Spring Boot 3 regulatory rules engine to automate Legal Metrology packaging compliance.
              </p>
            </div>

            {/* Quick Badges Strip */}
            <div className="pt-4 border-t border-[#E8EDF2]/10 flex flex-wrap gap-2 text-xs">
              <span className="px-3 py-1 rounded-lg bg-[#160A18] text-[#F4B942] font-semibold border border-[#F4B942]/20">
                850+ DSA Solved
              </span>
              <span className="px-3 py-1 rounded-lg bg-[#160A18] text-[#E8EDF2] font-semibold border border-[#E8EDF2]/10">
                LeetCode 1660 Rating
              </span>
              <span className="px-3 py-1 rounded-lg bg-[#160A18] text-[#E8EDF2] font-semibold border border-[#E8EDF2]/10">
                Java 17 & Spring Boot 3
              </span>
              <span className="px-3 py-1 rounded-lg bg-[#160A18] text-emerald-400 font-semibold border border-emerald-500/20">
                CU B.E. CSE Expected 2028
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Key Focus Areas Bento */}
        <div className="lg:col-span-5 space-y-4">
          <div className="rounded-2xl bg-[#261329] border border-[#E8EDF2]/15 p-6 space-y-4">
            <h3 className="text-base font-bold text-[#E8EDF2] flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#F4B942]" /> Development Philosophy
            </h3>

            <div className="space-y-3 text-xs text-[#A592AD]">
              <div className="p-3.5 rounded-xl bg-[#1A0A1C] border border-[#E8EDF2]/10 space-y-1">
                <strong className="text-[#E8EDF2] block">1. Deterministic System Behavior</strong>
                <p>Never rely on probabilistic guesswork for mission-critical checks. Business rules, ledgers, and compliance checks must always produce verifiable outputs.</p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#1A0A1C] border border-[#E8EDF2]/10 space-y-1">
                <strong className="text-[#E8EDF2] block">2. Algorithmic Rigor in Daily Engineering</strong>
                <p>850+ problem solutions aren't just for interviews—they cultivate an innate instinct for time-space tradeoffs, hash indexing, and pointer synchronization.</p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#1A0A1C] border border-[#E8EDF2]/10 space-y-1">
                <strong className="text-[#E8EDF2] block">3. Clean Separation of Concerns</strong>
                <p>Strict boundaries between presentation, stateless authentication, transaction boundaries, and resilient external API integrations.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 10: TECHNICAL SKILLS WITHOUT MEANINGLESS PERCENTAGE BARS */}
      <div className="space-y-8">
        <div className="pb-3 border-b border-[#E8EDF2]/15 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#F4B942] mb-1">
              <Code2 className="w-4 h-4" /> Section 10 Engineering Inventory
            </div>
            <h2 className="text-2xl font-black text-[#E8EDF2]">
              Technical Skills & Practical Capabilities
            </h2>
            <p className="text-xs sm:text-sm text-[#A592AD] mt-0.5">
              Organized by engineering domains with practical experience notes and connected project implementations instead of arbitrary percentage bars.
            </p>
          </div>
        </div>

        {/* Skill Category Cards */}
        <div className="space-y-6">
          {skills.map((group, gIdx) => (
            <div
              key={gIdx}
              className="rounded-2xl bg-[#261329] border border-[#E8EDF2]/15 p-6 md:p-8 space-y-5 shadow-sm"
            >
              <div>
                <h3 className="text-lg font-bold text-[#E8EDF2] flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#F4B942]"></span>
                  {group.category}
                </h3>
                <p className="text-xs text-[#A592AD] mt-1">{group.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {group.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-4 rounded-xl bg-[#1A0A1C] border border-[#E8EDF2]/10 hover:border-[#F4B942]/40 transition-all flex flex-col justify-between space-y-3"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="text-xs font-bold text-[#E8EDF2]">{skill.name}</h4>
                        <span
                          className={`text-[9px] uppercase font-bold px-2 py-0.5 rounded ${
                            skill.level === 'Core'
                              ? 'bg-[#F4B942]/15 text-[#F4B942] border border-[#F4B942]/30'
                              : 'bg-[#301934] text-[#E8EDF2] border border-[#E8EDF2]/15'
                          }`}
                        >
                          {skill.level}
                        </span>
                      </div>
                      <p className="text-[11px] text-[#A592AD] leading-relaxed">
                        {skill.experience}
                      </p>
                    </div>

                    {skill.linkedProjects.length > 0 && (
                      <div className="pt-2 border-t border-[#E8EDF2]/10 flex items-center gap-1.5 text-[10px]">
                        <span className="text-[#A592AD]">Applied In:</span>
                        {skill.linkedProjects.map((p, pIdx) => (
                          <span
                            key={pIdx}
                            className="bg-[#301934] text-[#F4B942] font-semibold px-1.5 py-0.5 rounded"
                          >
                            {p}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CAREER TIMELINE */}
      <div className="space-y-8">
        <div className="pb-3 border-b border-[#E8EDF2]/15">
          <h2 className="text-2xl font-black text-[#E8EDF2] flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-[#F4B942]" /> Academic & Development Timeline
          </h2>
          <p className="text-xs sm:text-sm text-[#A592AD] mt-0.5">
            Key steps from early secondary school honors to modern full-stack engineering milestones.
          </p>
        </div>

        <div className="relative border-l-2 border-[#301934] ml-4 md:ml-6 pl-6 md:pl-8 space-y-10">
          {careerMilestones.map((m, idx) => (
            <div key={idx} className="relative group">
              {/* Dot Beacon */}
              <div className="absolute -left-[31px] md:-left-[39px] top-1 w-4 h-4 rounded-full bg-[#1E0F21] border-2 border-[#F4B942] group-hover:scale-125 transition-transform shadow"></div>

              <div className="p-5 rounded-2xl bg-[#261329] border border-[#E8EDF2]/15 space-y-2 group-hover:border-[#F4B942]/50 transition-all">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-mono font-bold text-[#F4B942] px-2.5 py-0.5 rounded bg-[#301934] border border-[#F4B942]/30">
                    {m.period}
                  </span>
                  <span className="text-xs text-[#A592AD] font-semibold">{m.institution}</span>
                </div>

                <h3 className="text-base font-bold text-[#E8EDF2] leading-snug">
                  {m.title}
                </h3>

                <p className="text-xs text-[#A592AD] leading-relaxed">
                  {m.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
