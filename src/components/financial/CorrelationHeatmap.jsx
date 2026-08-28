import React, { useState } from 'react';
import { Card } from '../core/Card';

export const CorrelationHeatmap = ({ correlationData }) => {
  const [hoveredCell, setHoveredCell] = useState(null);
  const { assets, matrix } = correlationData;

  const getHeatmapColor = (val) => {
    if (val === 1.0) return 'bg-slate-800 text-slate-400 font-bold';
    if (val > 0.6) return 'bg-red-500/80 text-white font-semibold shadow-glow-red';
    if (val > 0.3) return 'bg-orange-500/60 text-white';
    if (val > 0.0) return 'bg-cyan-900/60 text-cyan-200';
    if (val < 0.0) return 'bg-emerald-900/70 text-emerald-200 font-semibold';
    return 'bg-slate-900 text-slate-300';
  };

  return (
    <Card
      title="Cross-Asset Correlation Matrix (30D Rolling Pearson R)"
      subtitle="Identifies Diversification Breakdown & Tail Correlation Spikes"
    >
      <div className="overflow-x-auto">
        <table className="w-full text-center border-collapse">
          <thead>
            <tr>
              <th className="p-2 text-left text-xs font-semibold text-slate-400 border-b border-slate-800">Asset</th>
              {assets.map((asset) => (
                <th key={asset} className="p-2 text-xs font-semibold text-slate-300 border-b border-slate-800 min-w-[70px]">
                  {asset}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="font-mono text-xs">
            {matrix.map((row, rowIdx) => (
              <tr key={assets[rowIdx]}>
                <td className="p-2 text-left font-semibold text-slate-300 border-r border-slate-800 bg-slate-950/40">
                  {assets[rowIdx]}
                </td>
                {row.map((val, colIdx) => (
                  <td
                    key={colIdx}
                    onMouseEnter={() => setHoveredCell({ row: assets[rowIdx], col: assets[colIdx], val })}
                    onMouseLeave={() => setHoveredCell(null)}
                    className={`p-2.5 transition-all duration-150 cursor-pointer border border-slate-800/40 ${getHeatmapColor(val)} hover:scale-105`}
                  >
                    {val > 0 ? `+${val.toFixed(2)}` : val.toFixed(2)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-3 flex items-center justify-between text-xs border-t border-slate-800 pt-2 font-mono">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1"><span className="w-3 h-3 bg-red-500 rounded inline-block" /> High Correlation (&gt;0.6)</span>
          <span className="flex items-center gap-1"><span className="w-3 h-3 bg-cyan-900 rounded inline-block" /> Moderate (0.0 to 0.3)</span>
          <span className="flex items-center gap-1"><span className="w-3 h-3 bg-emerald-900 rounded inline-block" /> Inverse (&lt;0.0)</span>
        </div>
        {hoveredCell && (
          <div className="text-cyan-300 bg-slate-950 px-2 py-0.5 rounded border border-slate-700">
            {hoveredCell.row} vs {hoveredCell.col}: <span className="font-bold">{hoveredCell.val > 0 ? `+${hoveredCell.val}` : hoveredCell.val}</span>
          </div>
        )}
      </div>
    </Card>
  );
};
