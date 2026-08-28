import React from 'react';
import { Card } from '../core/Card';

export const WaterfallDrawdownChart = () => {
  const drawdowns = [
    { period: 'Jan Peak', val: 0.0 },
    { period: 'Feb Selloff', val: -1.8 },
    { period: 'Mar Bounce', val: +0.6 },
    { period: 'Apr Tech Dip', val: -2.4 },
    { period: 'May Rally', val: +1.1 },
    { period: 'Jun Hikes', val: -3.2 },
    { period: 'Jul Rebound', val: +1.6 },
    { period: 'Aug Current', val: -4.12 }
  ];

  return (
    <Card
      title="Peak-to-Trough Portfolio Drawdown Curve"
      subtitle="Maximum Drawdown Limit: -10.0% | Current: -4.12%"
    >
      <div className="h-44 flex items-end gap-2 pt-4 pb-2 border-b border-slate-800">
        {drawdowns.map((d, i) => {
          const isDrawdown = d.val <= 0;
          const heightPct = Math.min(Math.abs(d.val) * 18, 100);

          return (
            <div key={i} className="flex-1 flex flex-col items-center gap-1 group">
              <span className="text-[10px] font-mono text-slate-400 group-hover:text-slate-200">
                {d.val}%
              </span>
              <div
                style={{ height: `${heightPct}%` }}
                className={`w-full rounded-t transition-all ${
                  isDrawdown ? 'bg-red-500/80 group-hover:bg-red-400' : 'bg-emerald-500/80 group-hover:bg-emerald-400'
                }`}
              />
              <span className="text-[9px] font-mono text-slate-500 truncate w-full text-center">
                {d.period}
              </span>
            </div>
          );
        })}
      </div>
    </Card>
  );
};
