import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons/BrandIcons';
import { usePortfolio } from '../context/PortfolioContext';

export const Footer = () => {
  const { profile } = usePortfolio();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full border-t border-[#E8EDF2]/10 bg-[#120914] text-[#E8EDF2] pt-16 pb-12 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-10 pb-12 border-b border-[#E8EDF2]/10">
          {/* Identity & Statement */}
          <div className="space-y-3 max-w-md">
            <div className="flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-md bg-[#301934] border border-[#F4B942]/40 flex items-center justify-center text-[#F4B942] font-semibold text-xs">
                SN
              </span>
              <h3 className="font-bold text-base text-[#E8EDF2]">Santu Nandi</h3>
            </div>
            <p className="text-xs text-[#A592AD] leading-relaxed">
              Java Full Stack Developer and Computer Science undergraduate at Chandigarh University. Passionate about resilient backend architectures, clean API design, and algorithmic problem solving.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap gap-x-12 gap-y-4 text-xs">
            <div className="space-y-2">
              <span className="text-[11px] font-semibold text-[#A592AD] uppercase tracking-wider block">
                Index
              </span>
              <ul className="space-y-1.5 text-[#E8EDF2]/80">
                <li><Link to="/about" className="hover:text-[#F4B942] transition-colors">About</Link></li>
                <li><Link to="/education" className="hover:text-[#F4B942] transition-colors">Education</Link></li>
                <li><Link to="/projects" className="hover:text-[#F4B942] transition-colors">Projects</Link></li>
                <li><Link to="/achievements" className="hover:text-[#F4B942] transition-colors">Achievements</Link></li>
              </ul>
            </div>

            <div className="space-y-2">
              <span className="text-[11px] font-semibold text-[#A592AD] uppercase tracking-wider block">
                Profiles
              </span>
              <ul className="space-y-1.5 text-[#E8EDF2]/80">
                <li>
                  <a href={profile.socials.github} target="_blank" rel="noreferrer" className="hover:text-[#F4B942] transition-colors flex items-center gap-1.5">
                    <GithubIcon className="w-3.5 h-3.5" /> GitHub
                  </a>
                </li>
                <li>
                  <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-[#F4B942] transition-colors flex items-center gap-1.5">
                    <LinkedinIcon className="w-3.5 h-3.5" /> LinkedIn
                  </a>
                </li>
                <li>
                  <a href={profile.socials.leetcode} target="_blank" rel="noreferrer" className="hover:text-[#F4B942] transition-colors">
                    LeetCode
                  </a>
                </li>
                <li>
                  <a href={profile.socials.codolio} target="_blank" rel="noreferrer" className="hover:text-[#F4B942] transition-colors">
                    Codolio
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A592AD]">
          <p>© {new Date().getFullYear()} Santu Nandi. Thoughtfully designed & built with Java, React, and MongoDB.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-xs text-[#E8EDF2]/75 hover:text-[#F4B942] transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
