import React from 'react';
import { KPICard } from '../components/financial/KPICard';
import { GreeksGrid } from '../components/financial/GreeksGrid';
import { CorrelationHeatmap } from '../components/financial/CorrelationHeatmap';
import { GREEKS_MATRIX, CORRELATION_MATRIX } from '../mockData/riskData';

export const AnalystGreeksScreen = () => {
  return (
    <div className="flex flex-col gap-5 animate-fade-in">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
        <KPICard title="Portfolio Delta" value="$485.2M" delta="+12.4" isPositiveDelta={true} status="Safe" />
        <KPICard title="Option Gamma (γ)" value="12.4" delta="Sub-second calc" isPositiveDelta={true} status="Safe" />
        <KPICard title="Portfolio Vega" value="$84.1K" delta="High Tech Vol" isPositiveDelta={false} status="Warning" />
        <KPICard title="Daily Theta Decay" value="-$14.2K" delta="Net Earned" isPositiveDelta={true} status="Safe" />
        <KPICard title="Rho Sensitivity" value="$3.8K" delta="Per 100bps" isPositiveDelta={true} status="Safe" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <GreeksGrid greeksData={GREEKS_MATRIX} />
        <CorrelationHeatmap correlationData={CORRELATION_MATRIX} />
      </div>
    </div>
  );
};
