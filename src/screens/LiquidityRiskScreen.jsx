import React from 'react';
import { LiquidityLadderChart } from '../components/financial/LiquidityLadderChart';
import { KPICard } from '../components/financial/KPICard';

export const LiquidityRiskScreen = () => {
  return (
    <div className="flex flex-col gap-5 animate-fade-in">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <KPICard title="Liquidity Coverage Ratio (LCR)" value="142.5%" status="Safe" delta="Target >100%" />
        <KPICard title="Net Stable Funding Ratio (NSFR)" value="118.2%" status="Safe" delta="Target >100%" />
        <KPICard title="Concentration Top 5 Assets" value="28.4%" status="Warning" delta="Limit 25.0%" />
      </div>
      <LiquidityLadderChart />
    </div>
  );
};
