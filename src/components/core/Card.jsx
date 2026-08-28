import React, { useState } from 'react';
import { Maximize2, Minimize2, ChevronUp, ChevronDown } from 'lucide-react';
import { clsx } from 'clsx';

export const Card = ({
  title,
  subtitle,
  actions,
  children,
  className,
  isCollapsible = false,
  allowFullscreen = false,
  badge
}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  return (
    <div
      className={clsx(
        "bg-slate-900/90 border border-slate-800 rounded-lg shadow-card-dark transition-all duration-200 flex flex-col overflow-hidden",
        isFullscreen ? "fixed inset-4 z-50 bg-slate-950 border-cyan-500/50 shadow-2xl" : "",
        className
      )}
    >
      {(title || actions || badge) && (
        <div className="px-4 py-3 border-b border-slate-800/80 flex items-center justify-between bg-slate-900/40">
          <div className="flex items-center gap-2.5">
            {title && <h3 className="text-sm font-semibold text-slate-100 tracking-tight">{title}</h3>}
            {badge}
            {subtitle && <span className="text-xs text-slate-400 font-normal">{subtitle}</span>}
          </div>
          <div className="flex items-center gap-2">
            {actions}
            {allowFullscreen && (
              <button
                type="button"
                onClick={() => setIsFullscreen(!isFullscreen)}
                className="text-slate-400 hover:text-white p-1 rounded hover:bg-slate-800 transition-colors"
                aria-label={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
              >
                {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
              </button>
            )}
            {isCollapsible && (
              <button
                type="button"
                onClick={() => setIsCollapsed(!isCollapsed)}
                className="text-slate-400 hover:text-white p-1 rounded hover:bg-slate-800 transition-colors"
                aria-label={isCollapsed ? "Expand card" : "Collapse card"}
              >
                {isCollapsed ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronUp className="w-3.5 h-3.5" />}
              </button>
            )}
          </div>
        </div>
      )}
      {!isCollapsed && (
        <div className="p-4 flex-1 overflow-auto text-slate-200">
          {children}
        </div>
      )}
    </div>
  );
};
