import React from 'react';
import { clsx } from 'clsx';

export const Badge = ({
  children,
  variant = 'safe', // 'safe', 'warning', 'breach', 'critical', 'info', 'neutral'
  size = 'md', // 'sm', 'md'
  className
}) => {
  const styles = {
    safe: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
    warning: 'bg-amber-500/15 text-amber-400 border-amber-500/30',
    breach: 'bg-orange-500/15 text-orange-400 border-orange-500/30',
    critical: 'bg-red-500/15 text-red-400 border-red-500/30',
    info: 'bg-cyan-500/15 text-cyan-400 border-cyan-500/30',
    neutral: 'bg-slate-800 text-slate-300 border-slate-700'
  };

  const sizes = {
    sm: 'text-[10px] px-1.5 py-0.5 font-semibold uppercase tracking-wider',
    md: 'text-xs px-2.5 py-0.5 font-medium'
  };

  return (
    <span
      className={clsx(
        "inline-flex items-center rounded border font-mono tracking-tight",
        styles[variant],
        sizes[size],
        className
      )}
    >
      {children}
    </span>
  );
};
