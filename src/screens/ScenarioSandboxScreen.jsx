import React, { useState } from 'react';
import { Card } from '../components/core/Card';
import { Slider } from '../components/core/Slider';
import { KPICard } from '../components/financial/KPICard';
import { Button } from '../components/core/Button';
import { RefreshCw, Play } from 'lucide-react';

export const ScenarioSandboxScreen = () => {
  const [techWeight, setTechWeight] = useState(35);
  const [rateShift, setRateShift] = useState(50);
  const [volShift, setVolShift] = useState(20);

  // Simulated live recalculation of VaR based on sandbox sliders
  const simulatedVaR = (14.25 * (1 + (techWeight - 35) * 0.02 + rateShift * 0.003 + volShift * 0.01)).toFixed(2);
  const simulatedCVaR = (22.80 * (1 + (techWeight - 35) * 0.02 + rateShift * 0.003 + volShift * 0.01)).toFixed(2);

  return (
    <div className="flex flex-col gap-5 animate-fade-in">
      <Card
        title='"What-If" Trade & Macro Shock Sandbox'
        subtitle="Simulate position sizing adjustments and interest rate/volatility shocks in real-time"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
          <Slider
            label="Tech Allocation Weight (% NAV)"
            value={techWeight}
            min={10}
            max={60}
            step={1}
            unit="%"
            onChange={setTechWeight}
          />
          <Slider
            label="Fed Yield Curve Parallel Shift"
            value={rateShift}
            min={-200}
            max={300}
            step={10}
            unit=" bps"
            onChange={setRateShift}
          />
          <Slider
            label="Equity Implied Volatility Bump"
            value={volShift}
            min={0}
            max={100}
            step={5}
            unit="%"
            onChange={setVolShift}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 bg-slate-950 p-4 rounded-lg border border-slate-800">
          <KPICard title="Baseline 1D 95% VaR" value="$14.25M" status="Safe" />
          <KPICard
            title="Simulated 1D 95% VaR"
            value={`$${simulatedVaR}M`}
            delta={`${((simulatedVaR - 14.25) / 14.25 * 100).toFixed(1)}% Change`}
            isPositiveDelta={simulatedVaR <= 14.25}
            status={simulatedVaR > 18 ? 'Breach' : simulatedVaR > 15 ? 'Warning' : 'Safe'}
          />
          <KPICard
            title="Simulated 1D 99% CVaR"
            value={`$${simulatedCVaR}M`}
            delta="Expected Shortfall"
            isPositiveDelta={simulatedCVaR <= 22.8}
            status={simulatedCVaR > 28 ? 'Critical' : 'Warning'}
          />
        </div>

        <div className="mt-4 flex items-center justify-end gap-3">
          <Button
            variant="secondary"
            icon={RefreshCw}
            onClick={() => { setTechWeight(35); setRateShift(50); setVolShift(20); }}
          >
            Reset Sandbox Baseline
          </Button>
          <Button variant="primary" icon={Play}>
            Apply Trade Order to Desk
          </Button>
        </div>
      </Card>
    </div>
  );
};
