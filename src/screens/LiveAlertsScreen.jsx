import React from 'react';
import { Card } from '../components/core/Card';
import { Badge } from '../components/core/Badge';
import { Button } from '../components/core/Button';
import { Bell, ShieldAlert, CheckCircle2, UserCheck } from 'lucide-react';
import { COMPLIANCE_BREACHES } from '../mockData/riskData';

export const LiveAlertsScreen = () => {
  return (
    <div className="flex flex-col gap-5 animate-fade-in">
      <Card title="Live Risk Breach Alerts & Escalation Workflow">
        <div className="flex flex-col gap-3">
          {COMPLIANCE_BREACHES.map((alert) => (
            <div key={alert.id} className="p-4 bg-slate-950 rounded-lg border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-slate-700 transition-colors">
              <div className="flex items-start gap-3">
                <ShieldAlert className={`w-5 h-5 mt-0.5 ${alert.severity === 'Critical' ? 'text-red-400' : 'text-amber-400'}`} />
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono text-xs text-slate-400">{alert.id}</span>
                    <span className="text-sm font-bold text-slate-100">{alert.rule}</span>
                    <Badge variant={alert.severity === 'Critical' ? 'critical' : 'warning'}>{alert.severity}</Badge>
                  </div>
                  <div className="text-xs text-slate-400">
                    Entity: <span className="text-slate-200 font-semibold">{alert.entity}</span> | Value: <span className="text-red-400 font-bold">{alert.value}</span> (Limit: {alert.limit})
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Button size="sm" variant="secondary" icon={UserCheck}>Reassign ({alert.owner})</Button>
                <Button size="sm" variant="primary" icon={CheckCircle2}>Acknowledge Incident</Button>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};
