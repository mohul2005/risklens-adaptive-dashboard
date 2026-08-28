import React from 'react';
import { Card } from '../core/Card';

export const LiquidityLadderChart = () => {
  const buckets = [
    { label: '< 1 Day (T+0)', navPct: 42, amountM: 1029.3, status: 'Safe' },
    { label: '1 - 5 Days', navPct: 35, amountM: 857.8, status: 'Safe' },
    { label: '5 - 10 Days', navPct: 13, amountM: 318.6, status: 'Safe' },
    { label: '> 10 Days (Illiquid)', navPct: 10, amountM: 245.1, status: 'Warning' }
  ];

  return (
    <Card
      title="Days-to-Liquidate Horizon (Liquidity Ladder)"
      subtitle="Assumes 20% Daily Volume Participation Limit"
    >
      <div className="flex flex-col gap-3">
        {buckets.map((b) => (
          <div key={b.label} className="flex flex-col gap-1 text-xs">
            <div className="flex justify-between font-mono">
              <span className="text-slate-300 font-medium">{b.label}</span>
              <span className="text-cyan-400 font-bold">${b.amountM}M ({b.navPct}%)</span>
            </div>
            <div className="w-full bg-slate-950 h-2.5 rounded-full overflow-hidden border border-slate-800">
              <div
                style={{ width: `${b.navPct}%` }}
                className={`h-full rounded ${b.navPct > 40 ? 'bg-emerald-500' : b.status === 'Warning' ? 'bg-amber-500' : 'bg-cyan-500'}`}
              />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
