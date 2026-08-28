import React from 'react';
import { clsx } from 'clsx';

export const Tabs = ({
  tabs = [],
  activeTab,
  onChange,
  className
}) => {
  return (
    <div className={clsx("flex items-center gap-1 border-b border-slate-800 pb-0 overflow-x-auto", className)}>
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => onChange(tab.id)}
            className={clsx(
              "px-3.5 py-2 text-xs font-medium border-b-2 transition-all duration-150 whitespace-nowrap flex items-center gap-2 focus:outline-none focus-visible:ring-1 focus-visible:ring-cyan-500",
              isActive
                ? "border-cyan-400 text-cyan-400 font-semibold bg-cyan-500/10 rounded-t-md"
                : "border-transparent text-slate-400 hover:text-slate-200 hover:border-slate-700"
            )}
          >
            {tab.icon && <tab.icon className="w-3.5 h-3.5" />}
            <span>{tab.label}</span>
            {tab.badge && (
              <span className={clsx(
                "px-1.5 py-0.2 text-[10px] rounded font-mono font-bold",
                isActive ? "bg-cyan-500/20 text-cyan-300" : "bg-slate-800 text-slate-400"
              )}>
                {tab.badge}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
};
