import React from 'react';
import { ExternalLink, Terminal, Award, Calendar, CheckCircle2 } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';
import { AchievementConstellation } from '../components/AchievementConstellation';

export const AchievementsPage = () => {
  const { codingStats, profile } = usePortfolio();

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20">
      {/* Editorial Header */}
      <div className="max-w-3xl space-y-3">
        <span className="text-xs font-mono uppercase tracking-wider text-[#F4B942]">
          Algorithmic Journey
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-[#E8EDF2] tracking-tight">
          Competitive Programming & Problem Solving
        </h1>
        <p className="text-sm sm:text-base text-[#A592AD] leading-relaxed font-sans">
          A disciplined focus on data structures, algorithmic design patterns, and time-space complexity. Over the past three years, this daily practice has strengthened my ability to write performant, bug-resilient backend services.
        </p>
      </div>

      {/* ─── OVERVIEW METRICS (CLEAN & RESTRAINED) ─── */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-y border-[#E8EDF2]/10 py-6">
        <div>
          <span className="text-[11px] font-mono text-[#A592AD] uppercase tracking-wider block">
            Total Problems Solved
          </span>
          <span className="text-2xl sm:text-3xl font-bold font-mono text-[#E8EDF2] mt-1 block">
            850+
          </span>
          <span className="text-xs text-[#A592AD]">Across 5 Platforms</span>
        </div>

        <div>
          <span className="text-[11px] font-mono text-[#A592AD] uppercase tracking-wider block">
            LeetCode Contest Rating
          </span>
          <span className="text-2xl sm:text-3xl font-bold font-mono text-[#F4B942] mt-1 block">
            1660
          </span>
          <span className="text-xs text-[#A592AD]">Top 12% Worldwide</span>
        </div>

        <div>
          <span className="text-[11px] font-mono text-[#A592AD] uppercase tracking-wider block">
            Longest Active Streak
          </span>
          <span className="text-2xl sm:text-3xl font-bold font-mono text-[#E8EDF2] mt-1 block">
            140+ Days
          </span>
          <span className="text-xs text-[#A592AD]">Continuous Problem Solving</span>
        </div>

        <div>
          <span className="text-[11px] font-mono text-[#A592AD] uppercase tracking-wider block">
            Aggregated Profile
          </span>
          <span className="text-lg font-bold font-mono text-[#F4B942] mt-2 block">
            Codolio Verified
          </span>
          <a
            href={profile.socials.codolio}
            target="_blank"
            rel="noreferrer"
            className="text-xs text-[#E8EDF2] hover:underline inline-flex items-center gap-1 mt-1"
          >
            Open Profile <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* ─── PLATFORM PROFILES ─── */}
      <div className="space-y-6">
        <div>
          <span className="text-xs font-mono text-[#F4B942] uppercase tracking-wider">Platform Breakdown</span>
          <h2 className="text-2xl font-bold text-[#E8EDF2] font-display mt-1">
            Coding Profiles & Performance
          </h2>
          <p className="text-xs sm:text-sm text-[#A592AD] mt-1">
            Direct public profiles reflecting contest participation and verified problem counts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {codingStats.map((platform) => (
            <div
              key={platform.id}
              className="p-6 rounded-lg border border-[#E8EDF2]/10 bg-[#180A1A] flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-base text-[#E8EDF2]">{platform.platform}</h3>
                    <span className="text-xs font-mono text-[#A592AD]">@{platform.username}</span>
                  </div>
                  <span className="text-xs font-mono text-[#F4B942] bg-[#301934] px-2.5 py-1 rounded border border-[#F4B942]/20">
                    {platform.rating ? `Rating: ${platform.rating}` : `${platform.problemsSolved}+ Solved`}
                  </span>
                </div>

                {/* Topic Breakdown if available */}
                {platform.topicBreakdown && platform.topicBreakdown.length > 0 && (
                  <div className="space-y-2 pt-2 border-t border-[#E8EDF2]/5">
                    <span className="text-[10px] font-mono uppercase text-[#A592AD] block">
                      Core Topic Distribution
                    </span>
                    <div className="space-y-1.5">
                      {platform.topicBreakdown.map((topic, tIdx) => (
                        <div key={tIdx} className="flex justify-between text-xs text-[#A592AD]">
                          <span>{topic.topic}</span>
                          <span className="font-mono text-[#E8EDF2]">{topic.solved} problems</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-[#E8EDF2]/10 flex items-center justify-between text-xs">
                <span className="text-[11px] text-[#A592AD]">Updated: {platform.lastUpdated}</span>
                <a
                  href={platform.profileUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#F4B942] hover:underline flex items-center gap-1 font-medium"
                >
                  View Profile <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ─── MEANINGFUL MILESTONES ─── */}
      <div className="space-y-6 pt-6 border-t border-[#E8EDF2]/10">
        <div>
          <span className="text-xs font-mono text-[#F4B942] uppercase tracking-wider">Milestones</span>
          <h2 className="text-2xl font-bold text-[#E8EDF2] font-display mt-1">
            Key Algorithmic Milestones
          </h2>
          <p className="text-xs sm:text-sm text-[#A592AD] mt-1">
            Documented achievements reflecting disciplined problem solving and contest ranking. Click any milestone to explore connected projects and credentials.
          </p>
        </div>

        <AchievementConstellation />
      </div>
    </div>
  );
};
