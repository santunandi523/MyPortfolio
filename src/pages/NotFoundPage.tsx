import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, ShieldAlert } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 text-center">
      <div className="max-w-md space-y-6">
        <div className="w-16 h-16 mx-auto rounded-2xl bg-[#301934] border-2 border-[#F4B942] flex items-center justify-center text-[#F4B942] shadow-xl">
          <ShieldAlert className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <h1 className="text-5xl font-black font-display text-[#E8EDF2]">404</h1>
          <h2 className="text-xl font-bold text-[#E8EDF2]">Document or Route Not Found</h2>
          <p className="text-xs text-[#A592AD] leading-relaxed">
            The requested resource could not be located in Santu Nandi's digital vault. It may have been archived or moved.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Link
            to="/"
            className="px-5 py-2.5 rounded-xl text-xs font-bold bg-[#F4B942] text-[#301934] hover:bg-[#ffc957] transition-all flex items-center gap-2 shadow marigold-glow"
          >
            <Home className="w-4 h-4" />
            <span>Return to Portfolio Home</span>
          </Link>

          <Link
            to="/education"
            className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-[#261329] text-[#E8EDF2] border border-[#E8EDF2]/20 hover:border-[#F4B942]/50 transition-colors"
          >
            Explore Academic Vault
          </Link>
        </div>
      </div>
    </div>
  );
};
