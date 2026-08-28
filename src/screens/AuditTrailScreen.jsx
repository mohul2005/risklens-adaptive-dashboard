import React from 'react';
import { Card } from '../components/core/Card';
import { Table } from '../components/core/Table';
import { Button } from '../components/core/Button';
import { Download, History, ShieldCheck } from 'lucide-react';
import { AUDIT_LOGS } from '../mockData/riskData';

export const AuditTrailScreen = () => {
  const columns = [
    { key: 'id', title: 'Log ID' },
    { key: 'timestamp', title: 'Timestamp (UTC)' },
    { key: 'user', title: 'User / System Bot', render: (val) => <span className="text-cyan-300 font-semibold">{val}</span> },
    { key: 'action', title: 'Executed Action' },
    { key: 'ip', title: 'IP Address / Source', render: (val) => <span className="text-slate-400 font-mono">{val}</span> }
  ];

  return (
    <div className="flex flex-col gap-5 animate-fade-in">
      <Card title="Immutable Audit Trail & Governance Log Stream">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
            <span className="text-xs text-slate-300">Cryptographically Signed SOC2 Type II Audit Log</span>
          </div>
          <Button size="sm" variant="secondary" icon={Download}>Export CSV Log File</Button>
        </div>
        <Table columns={columns} data={AUDIT_LOGS} density="compact" />
      </Card>
    </div>
  );
};
