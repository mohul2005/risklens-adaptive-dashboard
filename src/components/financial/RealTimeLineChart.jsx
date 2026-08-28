import React, { useState } from 'react';
import { Play, Pause, RefreshCw } from 'lucide-react';
import { Card } from '../core/Card';
import { Button } from '../core/Button';

export const RealTimeLineChart = ({
  data = [],
  title = "Historical PnL vs 1D 95% VaR & 99% CVaR",
  isLive = true
}) => {
  const [hoveredPoint, setHoveredPoint] = useState(null);
  const [confidenceLevel, setConfidenceLevel] = useState('95');

  // Compute SVG chart coordinates
  const height = 220;
  const width = 500;
  const padding = 30;

  const minVal = -2.5;
  const maxVal = 3.0;

  const getX = (idx) => padding + (idx / (data.length - 1)) * (width - 2 * padding);
  const getY = (val) => height - padding - ((val - minVal) / (maxVal - minVal)) * (height - 2 * padding);

  const pnlPoints = data.map((d, i) => `${getX(i)},${getY(d.pnl)}`).join(' ');
  const varPoints = data.map((d, i) => `${getX(i)},${getY(d.var95)}`).join(' ');
  const cvarPoints = data.map((d, i) => `${getX(i)},${getY(d.cvar99)}`).join(' ');

  return (
    <Card
      title={title}
      actions={
        <div className="flex items-center gap-2">
          <div className="flex bg-slate-950 p-0.5 rounded border border-slate-800 text-[10px] font-mono">
            <button
              onClick={() => setConfidenceLevel('95')}
              className={`px-2 py-0.5 rounded ${confidenceLevel === '95' ? 'bg-cyan-600 text-white font-bold' : 'text-slate-400'}`}
            >
              95% VaR
            </button>
            <button
              onClick={() => setConfidenceLevel('99')}
              className={`px-2 py-0.5 rounded ${confidenceLevel === '99' ? 'bg-red-600 text-white font-bold' : 'text-slate-400'}`}
            >
              99% CVaR
            </button>
          </div>
        </div>
      }
    >
      <div className="relative w-full overflow-hidden">
        {/* SVG Chart Container */}
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto overflow-visible">
          {/* Zero Line */}
          <line
            x1={padding}
            y1={getY(0)}
            x2={width - padding}
            y2={getY(0)}
            stroke="#475569"
            strokeDasharray="4 4"
            strokeWidth="1"
          />

          {/* Grid lines */}
          {[-2, -1, 1, 2].map((val) => (
            <line
              key={val}
              x1={padding}
              y1={getY(val)}
              x2={width - padding}
              y2={getY(val)}
              stroke="#1E293B"
              strokeWidth="1"
            />
          ))}

          {/* PnL Line (Cyan/Emerald) */}
          <polyline
            fill="none"
            stroke="#10B981"
            strokeWidth="2.5"
            points={pnlPoints}
          />

          {/* VaR Line (Amber) */}
          {confidenceLevel === '95' && (
            <polyline
              fill="none"
              stroke="#F59E0B"
              strokeWidth="2"
              strokeDasharray="6 3"
              points={varPoints}
            />
          )}

          {/* CVaR Line (Red) */}
          {confidenceLevel === '99' && (
            <polyline
              fill="none"
              stroke="#EF4444"
              strokeWidth="2"
              strokeDasharray="4 2"
              points={cvarPoints}
            />
          )}

          {/* Data Points */}
          {data.map((d, i) => (
            <g key={i} className="cursor-pointer" onMouseEnter={() => setHoveredPoint(d)}>
              <circle
                cx={getX(i)}
                cy={getY(d.pnl)}
                r="4"
                fill="#10B981"
                className="hover:r-6 transition-all"
              />
              <circle
                cx={getX(i)}
                cy={getY(confidenceLevel === '95' ? d.var95 : d.cvar99)}
                r="3.5"
                fill={confidenceLevel === '95' ? "#F59E0B" : "#EF4444"}
              />
            </g>
          ))}
        </svg>

        {/* Legend Banner */}
        <div className="mt-3 flex items-center justify-between text-xs border-t border-slate-800 pt-2 font-mono">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" /> Daily PnL (%)
            </span>
            <span className="flex items-center gap-1.5 text-amber-400">
              <span className="w-2.5 h-0.5 bg-amber-500 inline-block" /> 1D 95% VaR
            </span>
            <span className="flex items-center gap-1.5 text-red-400">
              <span className="w-2.5 h-0.5 bg-red-500 inline-block" /> 1D 99% CVaR (Expected Shortfall)
            </span>
          </div>

          {hoveredPoint && (
            <div className="bg-slate-950 px-2 py-1 rounded border border-slate-700 text-[11px] text-cyan-300">
              {hoveredPoint.date}: PnL <span className={hoveredPoint.pnl >= 0 ? 'text-emerald-400' : 'text-red-400'}>{hoveredPoint.pnl}%</span> | VaR: <span className="text-amber-400">{hoveredPoint.var95}%</span>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};
