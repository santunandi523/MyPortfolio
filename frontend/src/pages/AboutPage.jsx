import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';

export const AboutPage = () => {
  const { profile, skills } = usePortfolio();

  const careerMilestones = [
    {
      period: '2024 – Expected 2028',
      title: 'Bachelor of Engineering in Computer Science & Engineering',
      institution: 'Chandigarh University, Mohali (UID: 24BCS10650)',
      description:
        'Currently pursuing B.E. Computer Science. Completed Semesters 1 through 4 with a cumulative 8.25 CGPA (Sem 3: 8.70, Sem 2: 8.60, Sem 4: 8.04, Sem 1: 7.62); 5th Semester is currently in-progress.',
    },
    {
      period: '2023 – Present',
      title: 'Algorithmic Problem Solving & Daily Practice',
      institution: 'LeetCode, Codolio, Codeforces, CodeChef',
      description:
        'Maintained a consistent daily practice in algorithms and data structures, solving over 850 problems across platforms and attaining a 1660 LeetCode contest rating.',
    },
    {
      period: '2024 – 2025',
      title: 'Full-Stack Software Development: FoodyHub & PackSure',
      institution: 'Personal Engineering Work',
      description:
        'Built FoodyHub (a full-stack food commerce application with Java 17, Spring Boot, Razorpay, and Gemini AI) and PackSure (an automated packaging compliance pipeline combining OpenCV/OCR with Spring Boot rules).',
    },
    {
      period: '2022',
      title: 'Higher Secondary Education (Class XII) — Pure Science (82.8%)',
      institution: 'West Bengal Council of Higher Secondary Education (WBCHSE)',
      description:
        'Completed Class XII with an 82.8% aggregate in Pure Science (Physics, Chemistry, Mathematics), earning distinctions in Mathematics, English, and Biology.',
    },
    {
      period: '2020',
      title: 'Secondary Education (Class X) — Madhyamik (94.14%)',
      institution: 'West Bengal Board of Secondary Education (WBBSE)',
      description:
        'Graduated in the top 0.5% statewide in West Bengal with 659 out of 700 marks, including 98 in Mathematics and 97 in Physical Science.',
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24">
      {/* Editorial Header */}
      <div className="max-w-3xl space-y-3">
        <span className="text-xs font-mono uppercase tracking-wider text-[#F4B942]">
          Background & Biography
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-[#E8EDF2] tracking-tight">
          About Santu Nandi
        </h1>
        <p className="text-sm sm:text-base text-[#A592AD] leading-relaxed font-sans">
          Java Full Stack Developer and Computer Science Engineering student at Chandigarh University, driven by a passion for backend systems, algorithmic thinking, and clean software architecture.
        </p>
      </div>

      {/* ─── PERSONAL NARRATIVE & STORY ─── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border-t border-[#E8EDF2]/10 pt-12">
        {/* Main Narrative */}
        <div className="lg:col-span-8 space-y-6 text-sm sm:text-base text-[#E8EDF2]/85 leading-relaxed font-sans">
          <h2 className="text-2xl font-bold text-[#E8EDF2] font-display">
            How I Got Into Software Engineering
          </h2>

          <p>
            I started exploring software development through Java and gradually became interested in building complete applications. I enjoy working on backend systems, solving algorithmic problems, and developing products that solve practical problems.
          </p>

          <p>
            My education began in West Bengal, where a deep interest in mathematics led me to achieve a 94.14% aggregate in my secondary board examinations (ranking in the top 0.5% statewide with 98 in Mathematics and 97 in Physical Science). I continued through Pure Science in Class XII with an 82.8% aggregate, cementing my appreciation for analytical discipline.
          </p>

          <p>
            At Chandigarh University, I focused that analytical foundation on Computer Science & Engineering. Across my first four semesters, I maintained an 8.25 cumulative CGPA, diving deep into data structures, database design, operating systems, and object-oriented architecture.
          </p>

          <p>
            When building software, I care about structure and reliability. While developing <strong className="text-[#F4B942]">FoodyHub</strong>, I worked on concurrent order checkout flows, transaction boundaries, and cryptographic payment verification. With <strong className="text-[#F4B942]">PackSure</strong>, I paired an OCR vision microservice with a deterministic Spring Boot rules engine to audit packaged commodity labels against Indian Legal Metrology regulations.
          </p>
        </div>

        {/* Aside: Portrait & Guiding Principles */}
        <div className="lg:col-span-4 space-y-6">
          <div className="rounded-lg overflow-hidden border border-[#E8EDF2]/15 bg-[#180A1A]">
            <img
              src="/documents/santu_nandi_profile.jpg"
              alt="Santu Nandi"
              className="w-full h-72 object-cover object-top"
            />
            <div className="p-3.5 bg-[#140816] border-t border-[#E8EDF2]/10 text-xs">
              <p className="font-semibold text-[#E8EDF2]">Santu Nandi</p>
              <p className="text-[11px] text-[#A592AD]">UID: 24BCS10650 • Chandigarh University</p>
            </div>
          </div>

          <div className="bg-[#180A1A] border border-[#E8EDF2]/10 rounded-lg p-6 space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-[#F4B942] block">
              Guiding Principles
            </span>

            <div className="space-y-4 text-xs text-[#A592AD] leading-relaxed">
              <div>
                <p className="font-semibold text-[#E8EDF2] mb-0.5">Correctness Over Shortcuts</p>
                <p>Reliable software handles edge cases explicitly. I prefer deterministic business rules and clean contracts over guesswork.</p>
              </div>

              <div>
                <p className="font-semibold text-[#E8EDF2] mb-0.5">Algorithms Inform Architecture</p>
                <p>Solving 850+ problems isn't just a contest habit—it gives me an immediate intuition for data structures, cache efficiency, and algorithmic complexity.</p>
              </div>

              <div>
                <p className="font-semibold text-[#E8EDF2] mb-0.5">Clear Separation of Concerns</p>
                <p>Keeping controllers thin, service logic cohesive, and persistence decoupled ensures systems remain testable and easy to evolve.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ─── EDUCATIONAL & DEVELOPMENT TIMELINE ─── */}
      <div className="border-t border-[#E8EDF2]/10 pt-12 space-y-8">
        <div>
          <span className="text-xs font-mono text-[#F4B942] uppercase tracking-wider">Timeline</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#E8EDF2] font-display mt-1">
            Education & Milestones
          </h2>
        </div>

        <div className="space-y-8 border-l border-[#E8EDF2]/15 pl-6 sm:pl-8 ml-2">
          {careerMilestones.map((milestone, idx) => (
            <div key={idx} className="relative space-y-2">
              <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3 h-3 rounded-full bg-[#301934] border-2 border-[#F4B942]" />
              <span className="text-xs font-mono text-[#F4B942] block">
                {milestone.period}
              </span>
              <h3 className="text-base sm:text-lg font-bold text-[#E8EDF2]">
                {milestone.title}
              </h3>
              <p className="text-xs font-mono text-[#A592AD]">
                {milestone.institution}
              </p>
              <p className="text-xs sm:text-sm text-[#A592AD] leading-relaxed max-w-3xl pt-1">
                {milestone.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ─── TECHNICAL SKILLS & DOMAINS ─── */}
      <div className="border-t border-[#E8EDF2]/10 pt-12 space-y-8">
        <div>
          <span className="text-xs font-mono text-[#F4B942] uppercase tracking-wider">Competencies</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#E8EDF2] font-display mt-1">
            Technical Stack & Capabilities
          </h2>
          <p className="text-xs sm:text-sm text-[#A592AD] mt-1">
            Hands-on technologies and frameworks used across my projects and problem-solving practice.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((group, gIdx) => (
            <div key={gIdx} className="space-y-3">
              <div className="border-b border-[#E8EDF2]/10 pb-2">
                <h3 className="font-bold text-sm text-[#E8EDF2]">{group.category}</h3>
                <p className="text-[11px] text-[#A592AD]">{group.description}</p>
              </div>

              <div className="space-y-2">
                {group.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-2.5 rounded bg-[#160A18] border border-[#E8EDF2]/10 flex items-center justify-between text-xs"
                  >
                    <span className="font-medium text-[#E8EDF2]">{skill.name}</span>
                    <span className="text-[10px] font-mono text-[#F4B942]">{skill.level}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
