import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Zap, Flame, GraduationCap, Briefcase, ExternalLink, } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';
export const AchievementConstellation = () => {
    const { badges } = usePortfolio();
    const [selectedBadge, setSelectedBadge] = useState(null);
    const [activeCategory, setActiveCategory] = useState('all');
    const categories = [
        { id: 'all', label: 'All Milestones' },
        { id: 'contest', label: 'Contests & CP' },
        { id: 'coding', label: 'Coding Streaks' },
        { id: 'project', label: 'Engineered Systems' },
        { id: 'academic', label: 'Academic Honors' },
    ];
    const filteredBadges = activeCategory === 'all'
        ? badges
        : badges.filter((b) => b.category === activeCategory);
    const getBadgeIcon = (category, isHighlight) => {
        switch (category) {
            case 'contest':
                return <Zap className={`w-5 h-5 ${isHighlight ? 'text-[#F4B942]' : 'text-[#E8EDF2]'}`}/>;
            case 'coding':
                return <Flame className={`w-5 h-5 ${isHighlight ? 'text-[#F4B942]' : 'text-[#E8EDF2]'}`}/>;
            case 'academic':
                return <GraduationCap className={`w-5 h-5 ${isHighlight ? 'text-[#F4B942]' : 'text-[#E8EDF2]'}`}/>;
            case 'project':
                return <Briefcase className={`w-5 h-5 ${isHighlight ? 'text-[#F4B942]' : 'text-[#E8EDF2]'}`}/>;
            default:
                return <Award className={`w-5 h-5 ${isHighlight ? 'text-[#F4B942]' : 'text-[#E8EDF2]'}`}/>;
        }
    };
    return (<div className="w-full space-y-6">
      {/* Category Pills */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (<button key={cat.id} onClick={() => setActiveCategory(cat.id)} className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all border ${activeCategory === cat.id
                ? 'bg-[#F4B942] text-[#301934] border-[#F4B942] shadow-sm'
                : 'bg-[#261329] text-[#E8EDF2]/80 border-[#E8EDF2]/10 hover:border-[#F4B942]/40 hover:text-[#E8EDF2]'}`}>
              {cat.label}
            </button>))}
        </div>

        <span className="text-xs text-[#A592AD]">
          Showing <strong className="text-[#F4B942]">{filteredBadges.length}</strong> verified achievements
        </span>
      </div>

      {/* Constellation Badge Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredBadges.map((badge) => {
            const isSelected = selectedBadge?.id === badge.id;
            return (<motion.div key={badge.id} layout onClick={() => setSelectedBadge(isSelected ? null : badge)} className={`cursor-pointer rounded-xl p-5 border transition-all relative overflow-hidden flex flex-col justify-between ${badge.isHighlight
                    ? 'bg-gradient-to-br from-[#301934] to-[#200F23] border-[#F4B942]/40 hover:border-[#F4B942] marigold-glow-subtle'
                    : 'bg-[#220F26] border-[#E8EDF2]/10 hover:border-[#E8EDF2]/30'}`}>
              {badge.isHighlight && (<div className="absolute top-0 right-0 bg-[#F4B942] text-[#301934] text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-bl">
                  Key Milestone
                </div>)}

              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className={`p-2.5 rounded-xl border ${badge.isHighlight
                    ? 'bg-[#3D1E42] border-[#F4B942]/50'
                    : 'bg-[#1A0A1C] border-[#E8EDF2]/10'}`}>
                    {getBadgeIcon(badge.category, badge.isHighlight)}
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#A592AD] uppercase tracking-wider block">
                      {badge.issuer}
                    </span>
                    <h4 className="text-sm font-bold text-[#E8EDF2] leading-snug">
                      {badge.title}
                    </h4>
                  </div>
                </div>

                <p className="text-xs text-[#A592AD] leading-relaxed line-clamp-3">
                  {badge.description}
                </p>
              </div>

              {/* Connected Skills and Projects */}
              <div className="mt-4 pt-3 border-t border-[#E8EDF2]/10">
                <div className="flex flex-wrap items-center justify-between gap-2 text-[10px]">
                  <div className="flex flex-wrap gap-1">
                    {badge.connectedSkills.slice(0, 2).map((skill, idx) => (<span key={idx} className="px-2 py-0.5 rounded bg-[#160A18] text-[#E8EDF2]/90 border border-[#E8EDF2]/10">
                        {skill}
                      </span>))}
                    {badge.connectedSkills.length > 2 && (<span className="text-[#A592AD]">+{badge.connectedSkills.length - 2}</span>)}
                  </div>

                  <span className="text-[#F4B942] font-medium flex items-center gap-1">
                    {badge.dateEarned}
                  </span>
                </div>
              </div>

              {/* Expanded details if selected */}
              <AnimatePresence>
                {isSelected && (<motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="mt-3 pt-3 border-t border-[#F4B942]/30 space-y-2 text-xs">
                    {badge.connectedProjects.length > 0 && (<div>
                        <span className="text-[10px] text-[#A592AD] block font-semibold uppercase">
                          Demonstrated In Projects:
                        </span>
                        <div className="flex flex-wrap gap-1.5 mt-1">
                          {badge.connectedProjects.map((p, idx) => (<span key={idx} className="px-2 py-0.5 rounded bg-[#F4B942]/15 text-[#F4B942] font-semibold text-[10px]">
                              {p}
                            </span>))}
                        </div>
                      </div>)}

                    {badge.verificationUrl && badge.verificationUrl !== '#' && (<a href={badge.verificationUrl} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()} className="inline-flex items-center gap-1.5 text-xs text-[#F4B942] hover:underline font-semibold pt-1">
                        Source Verification Record <ExternalLink className="w-3 h-3"/>
                      </a>)}
                  </motion.div>)}
              </AnimatePresence>
            </motion.div>);
        })}
      </div>
    </div>);
};
