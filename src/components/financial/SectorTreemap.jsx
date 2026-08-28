import React from 'react';
import { Card } from '../core/Card';

export const SectorTreemap = ({ sectors = [] }) => {
  return (
    <Card
      title="Portfolio Sector NAV & Risk Contribution Treemap"
      subtitle="Box Size = % NAV Allocation | Color Intensity = % Risk Contribution"
    >
      <div className="grid grid-cols-6 gap-2 h-52">
        {sectors.map((sec, idx) => {
          // Determine grid col span based on size
          const colSpan = sec.size > 30 ? 'col-span-2 row-span-2' : sec.size > 14 ? 'col-span-2' : 'col-span-1';

          return (
            <div
              key={sec.name}
              style={{ backgroundColor: sec.color + '25', borderColor: sec.color + '60' }}
              className={`${colSpan} p-3 rounded-lg border flex flex-col justify-between hover:brightness-125 transition-all cursor-pointer group`}
            >
              <div>
                <span className="text-xs font-bold text-slate-100 block group-hover:text-cyan-300">{sec.name}</span>
                <span className="text-[10px] font-mono text-slate-400">NAV: {sec.size}%</span>
              </div>
              <div className="text-right">
                <span className="text-[10px] text-slate-400 block">Risk Contrib:</span>
                <span className="text-xs font-mono font-bold text-slate-100" style={{ color: sec.color }}>
                  {sec.riskContrib}%
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
};
