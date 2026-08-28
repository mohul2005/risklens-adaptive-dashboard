import React from 'react';
import { Card } from '../core/Card';
import { Table } from '../core/Table';
import { Badge } from '../core/Badge';

export const GreeksGrid = ({ greeksData = [] }) => {
  const columns = [
    { key: 'assetClass', title: 'Asset Class / Desk', sortable: true },
    { key: 'delta', title: 'Delta ($M)', align: 'right', render: (val) => <span className={val >= 0 ? "text-emerald-400" : "text-red-400"}>${val.toFixed(1)}M</span> },
    { key: 'gamma', title: 'Gamma (γ)', align: 'right', render: (val) => <span className="text-cyan-300">{val.toFixed(2)}</span> },
    { key: 'vega', title: 'Vega ($K/1%)', align: 'right', render: (val) => <span className="text-amber-300">${val.toFixed(1)}K</span> },
    { key: 'theta', title: 'Theta ($K/Day)', align: 'right', render: (val) => <span className="text-red-400">${val.toFixed(1)}K</span> },
    { key: 'rho', title: 'Rho ($K/100bps)', align: 'right', render: (val) => <span className="text-slate-300">${val.toFixed(1)}K</span> },
    { key: 'navPct', title: 'NAV %', align: 'right', render: (val) => <Badge variant="info">{val}%</Badge> }
  ];

  return (
    <Card
      title="Option Greeks & First/Second Order Sensitivity Matrix"
      subtitle="Sub-second Black-Scholes & Local Volatility Analytical Greeks"
    >
      <Table columns={columns} data={greeksData} density="compact" />
    </Card>
  );
};
