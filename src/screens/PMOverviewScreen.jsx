import React from 'react';
import { KPICard } from '../components/financial/KPICard';
import { RealTimeLineChart } from '../components/financial/RealTimeLineChart';
import { FactorRadarChart } from '../components/financial/FactorRadarChart';
import { WaterfallDrawdownChart } from '../components/financial/WaterfallDrawdownChart';
import { SectorTreemap } from '../components/financial/SectorTreemap';
import { TIME_SERIES_VAR_PNL, FACTOR_ATTRIBUTION, SECTOR_TREEMAP } from '../mockData/riskData';

export const PMOverviewScreen = () => {
  return (
    <div className="flex flex-col gap-5 animate-fade-in">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <KPICard title="Portfolio Total NAV" value="$2.45B" delta="+4.2% YTD" isPositiveDelta={true} status="Safe" />
        <KPICard title="Risk Budget Utilisation" value="82.4%" delta="17.6% Headroom" isPositiveDelta={true} status="Safe" />
        <KPICard title="Sharpe Ratio (1Y)" value="2.14" delta="+0.3 vs Benchmark" isPositiveDelta={true} status="Safe" />
        <KPICard title="Max Drawdown (YTD)" value="-4.12%" delta="Limit -10.0%" isPositiveDelta={true} status="Safe" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2">
          <RealTimeLineChart data={TIME_SERIES_VAR_PNL} title="Portfolio Cumulative PnL vs Risk Budget (1D 95% VaR)" />
        </div>
        <div className="lg:col-span-1">
          <FactorRadarChart factors={FACTOR_ATTRIBUTION} />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <SectorTreemap sectors={SECTOR_TREEMAP} />
        <WaterfallDrawdownChart />
      </div>
    </div>
  );
};
