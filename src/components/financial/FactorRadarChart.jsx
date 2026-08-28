import React from 'react';
import { Card } from '../core/Card';

export const FactorRadarChart = ({ factors = [] }) => {
  return (
    <Card
      title="Barra Style Factor Exposures vs Benchmark"
      subtitle="Standardized Z-Score Factor Tilt (Value, Momentum, Volatility, Quality)"
    >
      <div className="flex flex-col gap-3">
        {factors.map((f) => (
          <div key={f.factor} className="flex flex-col gap-1 text-xs">
            <div className="flex justify-between font-mono">
              <span className="text-slate-300 font-medium">{f.factor}</span>
              <div className="flex items-center gap-3 text-[11px]">
                <span className="text-cyan-400">Portfolio: {f.exposure > 0 ? `+${f.exposure}` : f.exposure}</span>
                <span className="text-slate-500">BM: {f.benchmark > 0 ? `+${f.benchmark}` : f.benchmark}</span>
              </div>
            </div>

            {/* Dual Bar Comparison */}
            <div className="w-full bg-slate-950 h-3 rounded-full overflow-hidden flex items-center relative border border-slate-800">
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-700 z-10" />
              {/* Portfolio bar */}
              <div
                style={{
                  left: f.exposure >= 0 ? '50%' : `${50 + f.exposure * 40}%`,
                  width: `${Math.abs(f.exposure) * 40}%`
                }}
                className={`absolute h-full rounded ${f.exposure >= 0 ? 'bg-cyan-500' : 'bg-red-500'}`}
              />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
