import React, { useState } from 'react';
import { Card } from '../core/Card';
import { Slider } from '../core/Slider';

export const MonteCarloChart = () => {
  const [simulations, setSimulations] = useState(100000);
  const [selectedConfidence, setSelectedConfidence] = useState(99);

  // Generate normal distribution histogram bins
  const bins = [
    { range: '< -$30M', count: 120, isTailCVaR: true },
    { range: '-$30M to -$25M', count: 480, isTailCVaR: true },
    { range: '-$25M to -$20M', count: 1850, isTailCVaR: selectedConfidence === 99 },
    { range: '-$20M to -$15M', count: 4200, isTailVaR: selectedConfidence === 95 },
    { range: '-$15M to -$10M', count: 9800 },
    { range: '-$10M to -$5M', count: 18400 },
    { range: '-$5M to $0M', count: 24500 },
    { range: '$0M to +$5M', count: 22100 },
    { range: '+$5M to +$10M', count: 12400 },
    { range: '+$10M to +$15M', count: 4800 },
    { range: '> +$15M', count: 1450 }
  ];

  const maxCount = 25000;

  return (
    <Card
      title="Monte Carlo Risk Distribution (100,000 Simulated Paths)"
      subtitle="Parametric Gaussian & Student-t Heavy Tail Simulation"
    >
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 bg-slate-950/60 p-3 rounded-lg border border-slate-800 text-xs font-mono">
          <div>
            <span className="text-slate-400 block text-[10px]">1D 95% Parametric VaR</span>
            <span className="text-amber-400 font-bold text-sm">-$14.25M</span>
          </div>
          <div>
            <span className="text-slate-400 block text-[10px]">1D 99% Monte Carlo CVaR</span>
            <span className="text-red-400 font-bold text-sm">-$22.80M</span>
          </div>
          <div>
            <span className="text-slate-400 block text-[10px]">Expected Shortfall (Tail Loss)</span>
            <span className="text-red-500 font-bold text-sm">-$28.45M</span>
          </div>
        </div>

        {/* Distribution Bars */}
        <div className="h-44 flex items-end gap-1.5 pt-4 pb-2 px-2 border-b border-slate-800">
          {bins.map((bin, idx) => {
            const barHeightPct = (bin.count / maxCount) * 100;
            let barColor = 'bg-slate-700';
            if (bin.isTailCVaR) barColor = 'bg-red-600 shadow-glow-red';
            else if (bin.isTailVaR) barColor = 'bg-amber-500';

            return (
              <div key={idx} className="flex-1 flex flex-col items-center gap-1 group relative">
                <div
                  style={{ height: `${barHeightPct}%` }}
                  className={`w-full rounded-t transition-all duration-300 ${barColor} group-hover:brightness-125`}
                />
                {/* Tooltip on hover */}
                <div className="absolute bottom-full mb-2 hidden group-hover:flex flex-col bg-slate-950 text-slate-100 border border-slate-700 p-2 rounded text-[10px] whitespace-nowrap z-30 font-mono shadow-xl">
                  <span>Range: {bin.range}</span>
                  <span>Scenarios: {bin.count.toLocaleString()}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Distribution Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-1">
          <div className="w-full sm:w-64">
            <Slider
              label="Simulated Paths"
              value={simulations}
              min={10000}
              max={500000}
              step={10000}
              onChange={setSimulations}
            />
          </div>

          <div className="flex items-center gap-2 text-xs font-mono">
            <span className="text-slate-400">Tail Cutoff:</span>
            <button
              onClick={() => setSelectedConfidence(95)}
              className={`px-3 py-1 rounded border ${selectedConfidence === 95 ? 'bg-amber-500/20 text-amber-300 border-amber-500' : 'bg-slate-800 text-slate-400 border-slate-700'}`}
            >
              95% VaR Line
            </button>
            <button
              onClick={() => setSelectedConfidence(99)}
              className={`px-3 py-1 rounded border ${selectedConfidence === 99 ? 'bg-red-500/20 text-red-300 border-red-500' : 'bg-slate-800 text-slate-400 border-slate-700'}`}
            >
              99% CVaR Tail Area
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
};
