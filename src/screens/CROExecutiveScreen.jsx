import React from 'react';
import { KPICard } from '../components/financial/KPICard';
import { RealTimeLineChart } from '../components/financial/RealTimeLineChart';
import { StressTestMatrix } from '../components/financial/StressTestMatrix';
import { SectorTreemap } from '../components/financial/SectorTreemap';
import { Table } from '../components/core/Table';
import { Badge } from '../components/core/Badge';
import { INITIAL_RISK_SUMMARY, TIME_SERIES_VAR_PNL, STRESS_TEST_SCENARIOS, SECTOR_TREEMAP, COMPLIANCE_BREACHES } from '../mockData/riskData';

export const CROExecutiveScreen = () => {
  const breachColumns = [
    { key: 'id', title: 'Breach ID' },
    { key: 'rule', title: 'Compliance Policy Rule' },
    { key: 'entity', title: 'Entity / Asset Class' },
    { key: 'value', title: 'Current Exposure', render: (val) => <span className="text-red-400 font-bold">{val}</span> },
    { key: 'limit', title: 'Threshold Limit', render: (val) => <span className="text-slate-400">{val}</span> },
    { key: 'severity', title: 'Severity', render: (val) => <Badge variant={val === 'Critical' ? 'critical' : 'warning'}>{val}</Badge> }
  ];

  return (
    <div className="flex flex-col gap-5 animate-fade-in">
      {/* Top KPI Banner */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <KPICard
          title="Firm-Wide 1D 95% VaR"
          value="$14.25M"
          delta="-1.4% vs Last Week"
          isPositiveDelta={true}
          status="Safe"
          tooltipContent="1-Day 95% Value at Risk across all firm trading desks."
          formula="VaR_95 = NAV * Z_0.95 * σ_portfolio * sqrt(1/252)"
        />
        <KPICard
          title="Capital Adequacy Ratio"
          value="16.8%"
          delta="Target >10.5%"
          isPositiveDelta={true}
          status="Safe"
          tooltipContent="Basel III Minimum Capital Adequacy Requirement."
        />
        <KPICard
          title="Max Stress Loss (2008)"
          value="$68.5M"
          delta="2.8% of Total NAV"
          isPositiveDelta={false}
          status="Warning"
          tooltipContent="Simulated portfolio loss under 2008 Lehman Brothers bankruptcy scenario."
        />
        <KPICard
          title="Active Limit Breaches"
          value="2 Critical"
          delta="Action Required"
          isPositiveDelta={false}
          status="Breach"
          tooltipContent="Current regulatory and internal risk policy limit breaches."
        />
      </div>

      {/* Main Analytical Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2">
          <RealTimeLineChart data={TIME_SERIES_VAR_PNL} />
        </div>
        <div className="lg:col-span-1">
          <SectorTreemap sectors={SECTOR_TREEMAP} />
        </div>
      </div>

      {/* Stress Testing & Breach Feed */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2">
          <StressTestMatrix scenarios={STRESS_TEST_SCENARIOS} />
        </div>
        <div className="lg:col-span-1 bg-slate-900/90 border border-slate-800 rounded-lg p-4 flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-bold text-slate-100 mb-1">Executive Risk Appetite Summary</h3>
            <p className="text-xs text-slate-400 mb-3">CRO Directive for Q3 2026</p>

            <div className="flex flex-col gap-2.5 text-xs text-slate-300">
              <div className="p-2.5 bg-slate-950 rounded border border-slate-800">
                <span className="font-bold text-cyan-400 block mb-0.5">1. Equity Sector Cap</span>
                Information Tech NAV cap set at <span className="font-mono text-slate-100">35.0%</span>.
              </div>
              <div className="p-2.5 bg-slate-950 rounded border border-slate-800">
                <span className="font-bold text-amber-400 block mb-0.5">2. Rates Sensitivity</span>
                Maintain net portfolio duration within <span className="font-mono text-slate-100">3.5 years ± 0.5y</span>.
              </div>
              <div className="p-2.5 bg-slate-950 rounded border border-slate-800">
                <span className="font-bold text-emerald-400 block mb-0.5">3. Minimum Liquidity Buffer</span>
                Ensure 1-Day liquidity horizon remains above <span className="font-mono text-slate-100">$1.0 Billion</span>.
              </div>
            </div>
          </div>
          <div className="mt-4 pt-2 border-t border-slate-800 text-[11px] text-slate-500 font-mono text-center">
            Signed by Chief Risk Officer — J. Sterling
          </div>
        </div>
      </div>

      {/* Breach Table */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-lg p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-bold text-slate-100">Active Regulatory & Risk Policy Breaches</h3>
          <Badge variant="breach">2 Action Items</Badge>
        </div>
        <Table columns={breachColumns} data={COMPLIANCE_BREACHES.slice(0, 2)} density="compact" />
      </div>
    </div>
  );
};
