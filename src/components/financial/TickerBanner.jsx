import React from 'react';
import { TrendingUp, TrendingDown, Activity } from 'lucide-react';
import { LIVE_TICKER_DATA } from '../../mockData/riskData';

export const TickerBanner = () => {
  return (
    <div className="bg-slate-950/90 border-b border-slate-800 text-xs font-mono py-1.5 px-4 flex items-center overflow-x-auto gap-6 whitespace-nowrap select-none">
      <div className="flex items-center gap-1.5 text-cyan-400 font-sans font-semibold text-[11px] shrink-0 border-r border-slate-800 pr-3">
        <Activity className="w-3.5 h-3.5 animate-pulse text-cyan-400" />
        <span>RISKLENS STREAM</span>
      </div>

      <div className="flex items-center gap-6 overflow-x-auto no-scrollbar">
        {LIVE_TICKER_DATA.map((item, idx) => (
          <div key={idx} className="flex items-center gap-2">
            <span className="text-slate-400 font-medium">{item.symbol}</span>
            <span className="text-slate-100 font-bold">{item.price}</span>
            <span className={`flex items-center text-[10px] ${item.positive ? 'text-emerald-400' : 'text-red-400'}`}>
              {item.positive ? <TrendingUp className="w-3 h-3 mr-0.5" /> : <TrendingDown className="w-3 h-3 mr-0.5" />}
              {item.change}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
