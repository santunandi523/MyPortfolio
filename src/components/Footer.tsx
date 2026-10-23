import React from 'react';
import { Link } from 'react-router-dom';
import {
  Mail,
  ArrowUp,
  ShieldCheck,
  Heart,
  Code2,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons/BrandIcons';
import { usePortfolio } from '../context/PortfolioContext';

export const Footer: React.FC = () => {
  const { profile } = usePortfolio();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#160B18] border-t border-[#E8EDF2]/10 text-[#E8EDF2] pt-16 pb-12 mt-20 relative overflow-hidden">
      {/* Background ambient gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-[#301934]/30 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-[#E8EDF2]/10">
          {/* Col 1: Brand & Philosophy */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#301934] border border-[#F4B942]/70 flex items-center justify-center text-[#F4B942] font-black text-base shadow">
                SN
              </div>
              <div>
                <h3 className="font-extrabold text-lg text-[#E8EDF2]">{profile.name}</h3>
                <p className="text-xs text-[#A592AD]">Java Full Stack Developer • Chandigarh University</p>
              </div>
            </div>

            <p className="text-xs text-[#A592AD] leading-relaxed max-w-md">
              Specialized in high-concurrency Java 17 / Spring Boot backend architectures, verified algorithmic engineering (850+ solved, LeetCode 1660 rating), and modern React client interfaces.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#261329] border border-emerald-500/30 text-emerald-400 text-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Available for Summer & Fall Opportunities</span>
            </div>
          </div>

          {/* Col 2: Navigation Sitemap */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#F4B942] mb-4">
              Explore Portfolio
            </h4>
            <ul className="space-y-2 text-xs text-[#A592AD]">
              <li>
                <Link to="/education" className="hover:text-[#E8EDF2] transition-colors">
                  Academic Vault (Class 10, 12, CU)
                </Link>
              </li>
              <li>
                <Link to="/achievements" className="hover:text-[#E8EDF2] transition-colors">
                  Coding Hall of Fame & Badges
                </Link>
              </li>
              <li>
                <Link to="/certificates" className="hover:text-[#E8EDF2] transition-colors">
                  Verified Certificate Gallery
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-[#E8EDF2] transition-colors">
                  Featured Projects (FoodyHub & PackSure)
                </Link>
              </li>
              <li>
                <Link to="/resume" className="hover:text-[#E8EDF2] transition-colors">
                  Resume Center & PDF Viewer
                </Link>
              </li>
              <li>
                <Link to="/admin" className="hover:text-[#E8EDF2] transition-colors text-amber-300/80">
                  Admin Command Center
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Coding Profiles & Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#F4B942] mb-4">
              Verified Profiles
            </h4>
            <div className="space-y-2 text-xs text-[#A592AD]">
              <div>
                <a
                  href={profile.socials.leetcode}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#F4B942] transition-colors flex items-center justify-between"
                >
                  <span>LeetCode (Santu_2004)</span>
                  <span className="font-mono text-[#F4B942]">1660</span>
                </a>
              </div>
              <div>
                <a
                  href={profile.socials.codolio}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#F4B942] transition-colors flex items-center justify-between"
                >
                  <span>Codolio Portfolio</span>
                  <span className="font-mono text-[#E8EDF2]">850+ Solved</span>
                </a>
              </div>
              <div>
                <a
                  href={profile.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#F4B942] transition-colors flex items-center justify-between"
                >
                  <span>GitHub Profile</span>
                  <span className="font-mono text-[#A592AD]">@santunandi523</span>
                </a>
              </div>
              <div>
                <a
                  href={profile.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#F4B942] transition-colors flex items-center justify-between"
                >
                  <span>LinkedIn Network</span>
                  <span className="text-emerald-400 text-[10px]">Connected</span>
                </a>
              </div>
            </div>

            <div className="flex items-center gap-2 mt-5">
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-[#261329] border border-[#E8EDF2]/15 text-[#E8EDF2] hover:text-[#F4B942] transition-colors"
                title="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-[#261329] border border-[#E8EDF2]/15 text-[#E8EDF2] hover:text-[#F4B942] transition-colors"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="p-2 rounded-lg bg-[#261329] border border-[#E8EDF2]/15 text-[#E8EDF2] hover:text-[#F4B942] transition-colors"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <button
                onClick={scrollToTop}
                className="p-2 rounded-lg bg-[#261329] border border-[#E8EDF2]/15 text-[#E8EDF2] hover:text-[#F4B942] transition-colors ml-auto"
                title="Scroll to Top"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-wrap items-center justify-between gap-4 text-xs text-[#A592AD]">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Santu Nandi. All rights reserved.</span>
            <span>•</span>
            <span className="text-[#F4B942]">Identity Palette: Ice Silver • Deep Aubergine • Marigold</span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <span className="flex items-center gap-1 text-emerald-400">
              <ShieldCheck className="w-3.5 h-3.5" /> Authenticated Academic Documents
            </span>
            <Link to="/admin" className="hover:text-[#F4B942] transition-colors">
              Admin Portal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
