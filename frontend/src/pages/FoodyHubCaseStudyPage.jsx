import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, ShieldCheck, Sparkles, Server, Layers, CheckCircle2, AlertTriangle, Bot, } from 'lucide-react';
import { GithubIcon } from '../components/icons/BrandIcons';
import { usePortfolio } from '../context/PortfolioContext';
export const FoodyHubCaseStudyPage = () => {
    const { projects } = usePortfolio();
    const project = projects.find((p) => p.slug === 'foodyhub') || projects[0];
    // Interactive AI Assistant Simulator State
    const [cartCategory, setCartCategory] = useState('High-Protein');
    const [aiGenerating, setAiGenerating] = useState(false);
    const [aiSuggestion, setAiSuggestion] = useState({
        dishRecommendation: 'Grilled Rosemary Chicken Breast with Quinoa Bowl',
        macroBreakdown: 'Protein: 48g | Carbs: 32g | Fats: 12g | Calories: 430 kcal',
        nutritionInsight: 'High bioavailable protein with complex low-glycemic carbohydrates for sustained muscle recovery.',
        allergenAlert: 'Contains: None. Gluten-free and Dairy-free.',
    });
    const handleSimulateAiPrompt = (category) => {
        setCartCategory(category);
        setAiGenerating(true);
        setTimeout(() => {
            if (category === 'Keto') {
                setAiSuggestion({
                    dishRecommendation: 'Pan-Seared Atlantic Salmon with Creamy Avocado Spinach Salad',
                    macroBreakdown: 'Protein: 36g | Carbs: 6g | Fats: 38g | Calories: 510 kcal',
                    nutritionInsight: 'Optimal ketogenic macro ratio with rich Omega-3 fatty acids for anti-inflammatory wellness.',
                    allergenAlert: 'Contains: Fish, Dairy (Grass-fed butter).',
                });
            }
            else if (category === 'Vegan') {
                setAiSuggestion({
                    dishRecommendation: 'Mediterranean Roasted Chickpea & Tempeh Buddha Bowl',
                    macroBreakdown: 'Protein: 28g | Carbs: 54g | Fats: 14g | Calories: 450 kcal',
                    nutritionInsight: 'Complete plant protein profile combining legumes and fermented tempeh with high dietary fiber.',
                    allergenAlert: 'Contains: Soy, Sesame (Tahini drizzle).',
                });
            }
            else if (category === 'Comfort') {
                setAiSuggestion({
                    dishRecommendation: 'Artisanal Sourdough Woodfired Truffle Mushroom Pizza',
                    macroBreakdown: 'Protein: 22g | Carbs: 68g | Fats: 24g | Calories: 580 kcal',
                    nutritionInsight: 'Long-fermented naturally leavened dough reducing glycemic spike; rich prebiotic umami flavor.',
                    allergenAlert: 'Contains: Gluten, Dairy (Fior di Latte Mozzarella).',
                });
            }
            else {
                setAiSuggestion({
                    dishRecommendation: 'Grilled Rosemary Chicken Breast with Quinoa Bowl',
                    macroBreakdown: 'Protein: 48g | Carbs: 32g | Fats: 12g | Calories: 430 kcal',
                    nutritionInsight: 'High bioavailable protein with complex low-glycemic carbohydrates for sustained muscle recovery.',
                    allergenAlert: 'Contains: None. Gluten-free and Dairy-free.',
                });
            }
            setAiGenerating(false);
        }, 450);
    };
    return (<div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Back Link */}
      <div>
        <Link to="/projects" className="inline-flex items-center gap-2 text-xs font-bold text-[#F4B942] hover:underline">
          <ArrowLeft className="w-4 h-4"/>
          <span>Back to All Projects</span>
        </Link>
      </div>

      {/* Case Study Header Banner */}
      <div className="space-y-6">
        <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#A592AD]">
          <span className="text-[#F4B942] uppercase font-semibold">
            Case Study • E-Commerce & AI
          </span>
          <span>•</span>
          <span>Role: {project.role}</span>
          <span>•</span>
          <span>{project.duration}</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-[#E8EDF2] tracking-tight leading-tight">
          {project.title}
        </h1>

        <p className="text-base sm:text-lg text-[#A592AD] leading-relaxed max-w-4xl">
          {project.tagline}
        </p>

        {/* Tech Stack Chips */}
        <div className="flex flex-wrap gap-2 pt-2">
          {project.technologies.map((t, idx) => (<span key={idx} className="text-xs font-semibold bg-[#261329] text-[#E8EDF2] px-3 py-1 rounded-lg border border-[#E8EDF2]/15 shadow-sm">
              {t}
            </span>))}
        </div>

        {/* Repository & Demo Bar */}
        <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-[#E8EDF2]/10">
          <a href={project.githubUrl} target="_blank" rel="noreferrer" className="px-5 py-2.5 rounded-xl text-xs font-bold bg-[#F4B942] text-[#301934] hover:bg-[#ffc957] transition-all flex items-center gap-2 shadow marigold-glow">
            <GithubIcon className="w-4 h-4"/>
            <span>GitHub Repository</span>
          </a>

          <a href={project.liveUrl} target="_blank" rel="noreferrer" className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-[#261329] text-[#E8EDF2] border border-[#E8EDF2]/20 hover:border-[#F4B942]/50 transition-colors flex items-center gap-2">
            <ExternalLink className="w-4 h-4 text-[#F4B942]"/>
            <span>Live Demonstration</span>
          </a>
        </div>
      </div>

      {/* Problem & Solution Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="rounded-2xl bg-[#261329] border border-[#E8EDF2]/15 p-6 md:p-8 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
            <AlertTriangle className="w-4 h-4"/> The Problem Space
          </div>
          <h3 className="text-xl font-bold text-[#E8EDF2]">
            High Concurrency & Lack of Intelligent Nutritional Context
          </h3>
          <p className="text-xs sm:text-sm text-[#A592AD] leading-relaxed">
            {project.problemStatement}
          </p>
        </div>

        <div className="rounded-2xl bg-[#261329] border border-[#E8EDF2]/15 p-6 md:p-8 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider">
            <CheckCircle2 className="w-4 h-4"/> The Architectural Solution
          </div>
          <h3 className="text-xl font-bold text-[#E8EDF2]">
            Stateless Spring Boot 3 & Gemini 1.5 Multimodal Intelligence
          </h3>
          <p className="text-xs sm:text-sm text-[#A592AD] leading-relaxed">
            {project.solution}
          </p>
        </div>
      </div>

      {/* INTERACTIVE FEATURE: GEMINI AI FOOD ASSISTANT SIMULATOR */}
      <div className="rounded-3xl bg-gradient-to-br from-[#301934] to-[#1E0F21] border-2 border-[#F4B942]/40 p-6 sm:p-8 md:p-10 shadow-2xl relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#E8EDF2]/15">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#F4B942]">
              <Sparkles className="w-4 h-4"/> Interactive Simulation
            </div>
            <h3 className="text-2xl font-black text-[#E8EDF2]">
              Gemini AI Nutritional Intelligence Engine
            </h3>
            <p className="text-xs text-[#A592AD]">
              Test how FoodyHub parses dietary constraints and calculates macro distributions using Google Gemini API.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {['High-Protein', 'Keto', 'Vegan', 'Comfort'].map((cat) => (<button key={cat} onClick={() => handleSimulateAiPrompt(cat)} className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all border ${cartCategory === cat
                ? 'bg-[#F4B942] text-[#301934] border-[#F4B942] shadow'
                : 'bg-[#1E0F21] text-[#E8EDF2]/80 border-[#E8EDF2]/15 hover:border-[#F4B942]/40'}`}>
                {cat} Plan
              </button>))}
          </div>
        </div>

        {/* Live Output Terminal */}
        <div className="mt-6 rounded-2xl bg-[#120914] border border-[#E8EDF2]/15 p-6 font-mono text-xs text-[#E8EDF2] space-y-4">
          <div className="flex items-center justify-between text-[11px] text-[#A592AD] border-b border-[#E8EDF2]/10 pb-3 font-mono">
            <span className="flex items-center gap-2 text-[#E8EDF2]">
              <Bot className="w-4 h-4 text-[#F4B942]"/> Gemini 1.5 Nutritional Recommendation Schema
            </span>
            <span className="text-xs text-[#A592AD]">Active Model Demonstration</span>
          </div>

          {aiGenerating ? (<div className="py-8 text-center text-[#F4B942] animate-pulse">
              Querying Gemini structured schema for {cartCategory} meal recommendation...
            </div>) : (<div className="space-y-3">
              <div>
                <span className="text-[#A592AD] block text-[10px] uppercase font-bold">Suggested Dish:</span>
                <span className="text-base font-bold text-[#F4B942] font-sans">
                  {aiSuggestion.dishRecommendation}
                </span>
              </div>

              <div className="p-3 rounded-lg bg-[#261329] border border-[#E8EDF2]/10">
                <span className="text-[10px] text-[#A592AD] uppercase font-bold block">Calculated Macronutrients:</span>
                <span className="text-emerald-300 font-semibold">{aiSuggestion.macroBreakdown}</span>
              </div>

              <div>
                <span className="text-[#A592AD] block text-[10px] uppercase font-bold">Clinical Nutritional Rationale:</span>
                <p className="text-xs text-[#E8EDF2]/90 font-sans leading-relaxed">
                  {aiSuggestion.nutritionInsight}
                </p>
              </div>

              <div className="text-[11px] text-amber-300/90 pt-1">
                ⚠️ {aiSuggestion.allergenAlert}
              </div>
            </div>)}
        </div>
      </div>

      {/* SYSTEM ARCHITECTURE & COMPONENTS */}
      <div className="space-y-6">
        <div className="pb-3 border-b border-[#E8EDF2]/15">
          <h2 className="text-2xl font-black text-[#E8EDF2] flex items-center gap-2">
            <Layers className="w-5 h-5 text-[#F4B942]"/> System Architecture Decomposition
          </h2>
          <p className="text-xs sm:text-sm text-[#A592AD] mt-1">
            {project.architectureDescription}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {project.architectureComponents.map((comp, idx) => (<div key={idx} className="p-5 rounded-2xl bg-[#261329] border border-[#E8EDF2]/15 space-y-2 hover:border-[#F4B942]/50 transition-all">
              <span className="text-[10px] font-mono font-bold text-[#F4B942] uppercase tracking-wider block">
                0{idx + 1} • {comp.layer}
              </span>
              <h4 className="text-sm font-bold text-[#E8EDF2]">{comp.tech}</h4>
              <p className="text-xs text-[#A592AD] leading-relaxed">
                {comp.description}
              </p>
            </div>))}
        </div>
      </div>

      {/* KEY ENGINEERING DECISIONS */}
      <div className="space-y-6">
        <div className="pb-3 border-b border-[#E8EDF2]/15">
          <h2 className="text-2xl font-black text-[#E8EDF2] flex items-center gap-2">
            <Server className="w-5 h-5 text-[#F4B942]"/> Critical Engineering Decisions
          </h2>
          <p className="text-xs sm:text-sm text-[#A592AD] mt-1">
            Architectural tradeoffs, failure mode evaluations, and rationale.
          </p>
        </div>

        <div className="space-y-4">
          {project.engineeringDecisions.map((dec, idx) => (<div key={idx} className="rounded-2xl bg-[#261329] border border-[#E8EDF2]/15 p-6 space-y-3">
              <h3 className="text-base font-bold text-[#E8EDF2] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#F4B942]"></span>
                {dec.decision}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="p-3.5 rounded-xl bg-[#1A0A1C] border border-[#E8EDF2]/10 space-y-1">
                  <span className="text-[10px] uppercase font-bold text-[#F4B942] tracking-wider block">
                    Technical Rationale:
                  </span>
                  <p className="text-[#E8EDF2]/90 leading-relaxed">{dec.rationale}</p>
                </div>
                <div className="p-3.5 rounded-xl bg-[#1A0A1C] border border-[#E8EDF2]/10 space-y-1">
                  <span className="text-[10px] uppercase font-bold text-[#A592AD] tracking-wider block">
                    Alternatives Evaluated & Dismissed:
                  </span>
                  <p className="text-[#A592AD] leading-relaxed">{dec.alternativesConsidered}</p>
                </div>
              </div>
            </div>))}
        </div>
      </div>

      {/* CHALLENGES AND SOLUTIONS */}
      <div className="space-y-6">
        <div className="pb-3 border-b border-[#E8EDF2]/15">
          <h2 className="text-2xl font-black text-[#E8EDF2] flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#F4B942]"/> Technical Roadblocks & Resolutions
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {project.challengesAndLearnings.map((item, idx) => (<div key={idx} className="p-6 rounded-2xl bg-[#261329] border border-[#E8EDF2]/15 space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-[10px] font-mono text-amber-400 uppercase font-bold">
                  Roadblock 0{idx + 1}
                </span>
                <p className="text-xs font-semibold text-[#E8EDF2] leading-snug">
                  {item.challenge}
                </p>
              </div>

              <div className="pt-3 border-t border-[#E8EDF2]/10">
                <span className="text-[10px] uppercase font-bold text-emerald-400 tracking-wider block mb-1">
                  Production Fix:
                </span>
                <p className="text-xs text-[#A592AD] leading-relaxed">
                  {item.resolution}
                </p>
              </div>
            </div>))}
        </div>
      </div>
    </div>);
};
