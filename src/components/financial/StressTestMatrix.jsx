import React, { useState } from 'react';
import { Card } from '../core/Card';
import { Badge } from '../core/Badge';
import { Button } from '../core/Button';
import { Play } from 'lucide-react';

export const StressTestMatrix = ({ scenarios = [] }) => {
  const [activeScenario, setActiveScenario] = useState(scenarios[0] || null);
  const [customRateShift, setCustomRateShift] = useState(100);

  return (
    <Card
      title="Macroeconomic Stress Testing & Scenario Engine"
      subtitle="Simulates Historic Shocks & Custom Rate/Equity/Vol Curve Shifts"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Scenario List */}
        <div className="lg:col-span-1 flex flex-col gap-2">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Select Scenario</span>
          {scenarios.map((sc) => (
            <button
              key={sc.id}
              onClick={() => setActiveScenario(sc)}
              className={`p-3 rounded-lg border text-left transition-all ${
                activeScenario?.id === sc.id
                  ? 'bg-slate-800 border-cyan-500 shadow-glow-cyan'
                  : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold text-slate-100">{sc.name}</span>
                <Badge variant={sc.status === 'Breach' ? 'critical' : sc.status === 'Caution' ? 'warning' : 'safe'}>
                  {sc.status}
                </Badge>
              </div>
              <div className="text-[11px] font-mono text-slate-400 flex items-center justify-between">
                <span>Est Loss:</span>
                <span className="text-red-400 font-bold">{sc.estimatedLossM}M</span>
              </div>
            </button>
          ))}
        </div>

        {/* Scenario Detail & Simulator */}
        {activeScenario && (
          <div className="lg:col-span-2 bg-slate-950/80 p-4 rounded-lg border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-3">
                <h4 className="text-sm font-bold text-cyan-400">{activeScenario.name} Shocks</h4>
                <Button size="sm" variant="primary" icon={Play}>Run Full Simulation</Button>
              </div>

              <div className="grid grid-cols-3 gap-3 mb-4 font-mono text-xs">
                <div className="bg-slate-900 p-2.5 rounded border border-slate-800">
                  <span className="text-slate-400 text-[10px] block">Equity Drop</span>
                  <span className="text-red-400 font-bold text-sm">{activeScenario.equityShock}%</span>
                </div>
                <div className="bg-slate-900 p-2.5 rounded border border-slate-800">
                  <span className="text-slate-400 text-[10px] block">Yield Curve Shift</span>
                  <span className="text-amber-400 font-bold text-sm">{activeScenario.rateShockBps} bps</span>
                </div>
                <div className="bg-slate-900 p-2.5 rounded border border-slate-800">
                  <span className="text-slate-400 text-[10px] block">Implied Vol Shock</span>
                  <span className="text-cyan-300 font-bold text-sm">+{activeScenario.volShockPct}%</span>
                </div>
              </div>

              <div className="bg-red-500/10 border border-red-500/30 p-3 rounded text-xs text-red-200">
                <span className="font-bold block mb-1">Impact Analysis:</span>
                Under this scenario, portfolio NAV will contract by <span className="font-mono font-bold text-red-400">{activeScenario.estimatedLossM}M</span>, breaching the firm-wide Risk Appetite limit of $40M. Immediate hedging or rebalancing is recommended for US Tech & High Yield exposures.
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800 text-xs text-slate-400 flex items-center justify-between">
              <span>Historical Baseline: FRTB Standardized Approach</span>
              <span className="font-mono text-slate-300">Confidence: 99.9% Extreme Value Theory</span>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};
