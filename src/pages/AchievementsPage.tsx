import React from 'react';
import { motion } from 'framer-motion';
import {
  Flame,
  Award,
  Zap,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  TrendingUp,
  Terminal,
  Layers,
  Code2,
} from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';
import { AchievementConstellation } from '../components/AchievementConstellation';
import { StatCounter } from '../components/StatCounter';

export const AchievementsPage: React.FC = () => {
  const { codingStats, profile } = usePortfolio();

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20">
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#301934] border border-[#F4B942]/40 text-xs font-bold text-[#F4B942] uppercase tracking-wider">
          <Flame className="w-4 h-4" /> Competitive Engineering
        </div>
        <h1 className="text-4xl sm:text-5xl font-black font-display text-[#E8EDF2] tracking-tight">
          Coding Hall of Fame
        </h1>
        <p className="text-sm sm:text-base text-[#A592AD] leading-relaxed">
          Verifiable algorithmic achievements, contest ratings, problem counts, and platform badges aggregated from LeetCode, Codolio, Codeforces, CodeChef, and GeeksforGeeks.
        </p>
      </div>

      {/* Aggregate KPI Bento Banner */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-5 rounded-2xl bg-[#261329] border border-[#E8EDF2]/15 text-center">
          <span className="text-[10px] uppercase font-bold text-[#A592AD] tracking-wider block">
            Total DSA Challenges
          </span>
          <span className="text-3xl sm:text-4xl font-black text-[#E8EDF2] font-mono mt-1 block">
            <StatCounter value={850} suffix="+" />
          </span>
          <span className="text-xs text-emerald-400 font-medium mt-1 block">Cross-Platform Verified</span>
        </div>

        <div className="p-5 rounded-2xl bg-[#261329] border border-[#E8EDF2]/15 text-center">
          <span className="text-[10px] uppercase font-bold text-[#A592AD] tracking-wider block">
            LeetCode Contest Rating
          </span>
          <span className="text-3xl sm:text-4xl font-black text-[#F4B942] font-mono mt-1 block">
            <StatCounter value={1660} />
          </span>
          <span className="text-xs text-[#F4B942] font-medium mt-1 block">Top 12% Worldwide</span>
        </div>

        <div className="p-5 rounded-2xl bg-[#261329] border border-[#E8EDF2]/15 text-center">
          <span className="text-[10px] uppercase font-bold text-[#A592AD] tracking-wider block">
            Continuous Streak
          </span>
          <span className="text-3xl sm:text-4xl font-black text-[#E8EDF2] font-mono mt-1 block">
            <StatCounter value={142} suffix=" Days" />
          </span>
          <span className="text-xs text-emerald-400 font-medium mt-1 block">Active Habit</span>
        </div>

        <div className="p-5 rounded-2xl bg-[#261329] border border-[#E8EDF2]/15 text-center">
          <span className="text-[10px] uppercase font-bold text-[#A592AD] tracking-wider block">
            Codolio Master Profile
          </span>
          <span className="text-lg font-black text-[#F4B942] font-mono mt-2 block">
            @santunandi
          </span>
          <a
            href={profile.socials.codolio}
            target="_blank"
            rel="noreferrer"
            className="text-xs text-[#E8EDF2] hover:underline flex items-center justify-center gap-1 mt-1"
          >
            Open Profile <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* PLATFORM CARDS SECTION */}
      <div className="space-y-6">
        <div className="flex items-center justify-between pb-3 border-b border-[#E8EDF2]/15">
          <h2 className="text-2xl font-black text-[#E8EDF2] flex items-center gap-2">
            <Terminal className="w-5 h-5 text-[#F4B942]" /> Verified Platform Dashboards
          </h2>
          <span className="text-xs text-[#A592AD]">
            Last Synchronized: <strong className="text-[#E8EDF2]">October 2026</strong>
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {codingStats.map((platform) => (
            <div
              key={platform.id}
              className="rounded-2xl bg-[#261329] border border-[#E8EDF2]/15 p-6 hover:border-[#F4B942]/60 transition-all flex flex-col justify-between group shadow-md"
            >
              <div className="space-y-4">
                {/* Platform Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-[#301934] border border-[#F4B942]/40 flex items-center justify-center text-[#F4B942] font-bold text-xs">
                      {platform.platform.slice(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-[#E8EDF2]">{platform.platform}</h3>
                      <span className="text-xs font-mono text-[#A592AD]">@{platform.username}</span>
                    </div>
                  </div>

                  <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-500/15 border border-emerald-500/30 px-2 py-0.5 rounded-full flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" /> Verified
                  </span>
                </div>

                {/* Rating / Problems Solved Big Tile */}
                <div className="p-4 rounded-xl bg-[#1B0B1D] border border-[#E8EDF2]/10 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-semibold text-[#A592AD] block">
                      {platform.rating ? 'Contest Rating' : 'Problems Solved'}
                    </span>
                    <span className="text-2xl font-black text-[#F4B942] font-mono mt-0.5 block">
                      {platform.rating || `${platform.problemsSolved}+`}
                    </span>
                  </div>

                  <div className="text-right">
                    <span className="text-[10px] uppercase font-semibold text-[#A592AD] block">
                      Tier / Standing
                    </span>
                    <span className="text-xs font-bold text-[#E8EDF2] mt-0.5 block">
                      {platform.ratingTier || 'Active Member'}
                    </span>
                  </div>
                </div>

                {/* Topic Breakdown if available */}
                {platform.topicBreakdown && (
                  <div className="space-y-2 text-xs pt-1">
                    <span className="text-[10px] uppercase font-bold text-[#A592AD] tracking-wider block">
                      Algorithmic Distribution
                    </span>
                    <div className="space-y-1.5">
                      {platform.topicBreakdown.map((t, idx) => (
                        <div key={idx} className="space-y-0.5">
                          <div className="flex items-center justify-between text-[11px]">
                            <span className="text-[#E8EDF2]/90">{t.topic}</span>
                            <span className="font-mono text-[#F4B942] font-semibold">{t.solved}</span>
                          </div>
                          <div className="w-full h-1.5 rounded-full bg-[#160A18] overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-[#301934] to-[#F4B942] rounded-full"
                              style={{ width: `${Math.min((t.solved / 150) * 100, 100)}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Badges preview if available */}
                {platform.badges && platform.badges.length > 0 && (
                  <div className="space-y-1.5 pt-2">
                    <span className="text-[10px] uppercase font-bold text-[#A592AD] tracking-wider block">
                      Official Platform Badges
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {platform.badges.map((b, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded bg-[#301934] border border-[#F4B942]/30 text-[10px] text-[#F4B942] font-medium"
                        >
                          {b.title}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Card Footer */}
              <div className="mt-6 pt-4 border-t border-[#E8EDF2]/10 flex items-center justify-between text-xs">
                <span className="text-[10px] text-[#A592AD]">Recorded: {platform.lastUpdated}</span>
                <a
                  href={platform.profileUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="font-bold text-[#F4B942] hover:underline flex items-center gap-1"
                >
                  <span>Profile Link</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 8: ACHIEVEMENT CONSTELLATION */}
      <div className="space-y-6 pt-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-3 border-b border-[#E8EDF2]/15">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#F4B942] mb-1">
              <Zap className="w-4 h-4" /> Section 8 Showcase
            </div>
            <h2 className="text-2xl font-black text-[#E8EDF2] flex items-center gap-2">
              <Award className="w-5 h-5 text-[#F4B942]" /> Achievement Constellation
            </h2>
            <p className="text-xs sm:text-sm text-[#A592AD] mt-1">
              Cross-connecting algorithmic ratings, academic milestones, and engineering systems to the skills they substantiate.
            </p>
          </div>
        </div>

        {/* Interactive Constellation Component */}
        <AchievementConstellation />
      </div>
    </div>
  );
};
