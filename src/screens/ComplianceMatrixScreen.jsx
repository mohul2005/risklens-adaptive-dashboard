import React from 'react';
import { KPICard } from '../components/financial/KPICard';
import { Table } from '../components/core/Table';
import { Badge } from '../components/core/Badge';
import { Button } from '../components/core/Button';
import { ShieldCheck, Download, CheckCircle2 } from 'lucide-react';
import { COMPLIANCE_BREACHES, INITIAL_RISK_SUMMARY } from '../mockData/riskData';

export const ComplianceMatrixScreen = () => {
  const columns = [
    { key: 'id', title: 'Breach ID' },
    { key: 'rule', title: 'Regulatory Policy Rule' },
    { key: 'entity', title: 'Security / Portfolio Entity' },
    { key: 'value', title: 'Current Metric', render: (val) => <span className="text-red-400 font-bold">{val}</span> },
    { key: 'limit', title: 'Allowed Limit', render: (val) => <span className="text-slate-400">{val}</span> },
    { key: 'severity', title: 'Severity', render: (val) => <Badge variant={val === 'Critical' ? 'critical' : val === 'High' ? 'breach' : 'warning'}>{val}</Badge> },
    { key: 'owner', title: 'Responsible Manager' },
    { key: 'status', title: 'Resolution Status', render: (val) => <Badge variant={val === 'Resolved' ? 'safe' : 'neutral'}>{val}</Badge> }
  ];

  return (
    <div className="flex flex-col gap-5 animate-fade-in">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <KPICard title="Liquidity Coverage Ratio (LCR)" value="142.5%" delta="Min 100% Basel III" isPositiveDelta={true} status="Safe" />
        <KPICard title="Net Stable Funding Ratio" value="118.2%" delta="Min 100% Basel III" isPositiveDelta={true} status="Safe" />
        <KPICard title="FRTB Default Risk Charge" value="$18.4M" delta="Within Buffer" isPositiveDelta={true} status="Safe" />
        <KPICard title="Open Policy Breaches" value="2 Active" delta="1 Critical" isPositiveDelta={false} status="Breach" />
      </div>

      <div className="bg-slate-900/90 border border-slate-800 rounded-lg p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-amber-400" />
            <h3 className="text-sm font-bold text-slate-100">FRTB & SEC Regulatory Breach Monitoring Grid</h3>
          </div>
          <Button size="sm" variant="secondary" icon={Download}>Export Regulatory Package (PDF)</Button>
        </div>
        <Table columns={columns} data={COMPLIANCE_BREACHES} density="standard" />
      </div>
    </div>
  );
};
