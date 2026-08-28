import React from 'react';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { Badge } from '../core/Badge';
import { Tooltip } from '../core/Tooltip';
import { clsx } from 'clsx';

export const KPICard = ({
  title,
  value,
  delta,
  isPositiveDelta = true,
  status = 'safe',
  formula,
  tooltipContent,
  sparklineData = [12, 14, 11, 15, 18, 16, 21, 19, 24]
}) => {
  // Generate SVG path for sparkline
  const min = Math.min(...sparklineData);
  const max = Math.max(...sparklineData);
  const range = max - min || 1;
  const points = sparklineData.map((val, idx) => {
    const x = (idx / (sparklineData.length - 1)) * 100;
    const y = 30 - ((val - min) / range) * 25;
    return `${x},${y}`;
  }).join(' ');

  const badgeVariants = {
    Safe: 'safe',
    Warning: 'warning',
    Breach: 'breach',
    Critical: 'critical'
  };

  return (
    <div className="bg-slate-900/90 border border-slate-800 hover:border-slate-700 rounded-lg p-4 shadow-card-dark transition-all duration-200 flex flex-col justify-between relative overflow-hidden group">
      {/* Background glow on hover */}
      <div className="absolute -right-8 -top-8 w-24 h-24 bg-cyan-500/5 rounded-full blur-xl group-hover:bg-cyan-500/10 transition-all" />

      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-1.5">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{title}</span>
          {tooltipContent && <Tooltip content={tooltipContent} formula={formula} />}
        </div>
        {status && <Badge variant={badgeVariants[status] || 'safe'}>{status}</Badge>}
      </div>

      <div className="flex items-baseline justify-between mt-1">
        <div className="font-mono text-2xl font-bold text-slate-100 tracking-tight">{value}</div>

        {/* Sparkline visualization */}
        <div className="w-20 h-7 opacity-80 group-hover:opacity-100 transition-opacity">
          <svg className="w-full h-full overflow-visible" viewBox="0 0 100 30">
            <polyline
              fill="none"
              stroke={status === 'Breach' || status === 'Critical' ? '#EF4444' : '#06B6D4'}
              strokeWidth="2"
              points={points}
            />
          </svg>
        </div>
      </div>

      {delta && (
        <div className="mt-2.5 pt-2 border-t border-slate-800/60 flex items-center gap-1.5 text-xs">
          {isPositiveDelta ? (
            <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
          ) : (
            <TrendingDown className="w-3.5 h-3.5 text-red-400" />
          )}
          <span className={clsx("font-mono font-medium", isPositiveDelta ? "text-emerald-400" : "text-red-400")}>
            {delta}
          </span>
        </div>
      )}
    </div>
  );
};
