import React, { useState } from 'react';
import { HelpCircle } from 'lucide-react';
import { clsx } from 'clsx';

export const Tooltip = ({
  content,
  formula,
  children,
  position = 'top'
}) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className="relative inline-flex items-center"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      onFocus={() => setIsVisible(true)}
      onBlur={() => setIsVisible(false)}
    >
      {children || <HelpCircle className="w-3.5 h-3.5 text-slate-400 hover:text-cyan-400 cursor-help transition-colors" />}
      {isVisible && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-50 w-64 bg-slate-950 border border-slate-700 text-slate-100 text-xs p-3 rounded-lg shadow-2xl pointer-events-none animate-fade-in">
          <p className="font-normal text-slate-300 leading-relaxed">{content}</p>
          {formula && (
            <div className="mt-2 pt-2 border-t border-slate-800 font-mono text-[10px] text-cyan-300 bg-slate-900/80 p-1.5 rounded">
              <span className="text-slate-400 font-sans block text-[9px] mb-0.5">Formula:</span>
              {formula}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
