import React, { useState } from 'react';
import { ArrowUpDown, ArrowUp, ArrowDown } from 'lucide-react';
import { clsx } from 'clsx';

export const Table = ({
  columns = [],
  data = [],
  density = 'standard', // 'compact', 'standard'
  onRowClick,
  className
}) => {
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState('asc');

  const handleSort = (key) => {
    if (sortColumn === key) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(key);
      setSortDirection('asc');
    }
  };

  const sortedData = [...data].sort((a, b) => {
    if (!sortColumn) return 0;
    const valA = a[sortColumn];
    const valB = b[sortColumn];
    if (typeof valA === 'number' && typeof valB === 'number') {
      return sortDirection === 'asc' ? valA - valB : valB - valA;
    }
    return sortDirection === 'asc'
      ? String(valA).localeCompare(String(valB))
      : String(valB).localeCompare(String(valA));
  });

  const rowPadding = density === 'compact' ? 'py-1.5 px-2.5 text-xs' : 'py-2.5 px-3 text-xs';

  return (
    <div className={clsx("w-full overflow-x-auto border border-slate-800 rounded-lg bg-slate-900/60", className)}>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-slate-800 bg-slate-950/80 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
            {columns.map((col) => (
              <th
                key={col.key}
                onClick={() => col.sortable !== false && handleSort(col.key)}
                className={clsx(
                  rowPadding,
                  col.sortable !== false && "cursor-pointer hover:text-slate-200 select-none",
                  col.align === 'right' && "text-right"
                )}
              >
                <div className={clsx("inline-flex items-center gap-1", col.align === 'right' && "justify-end w-full")}>
                  <span>{col.title}</span>
                  {col.sortable !== false && (
                    sortColumn === col.key ? (
                      sortDirection === 'asc' ? <ArrowUp className="w-3 h-3 text-cyan-400" /> : <ArrowDown className="w-3 h-3 text-cyan-400" />
                    ) : (
                      <ArrowUpDown className="w-3 h-3 opacity-40 hover:opacity-100" />
                    )
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-800/60 font-mono">
          {sortedData.map((row, idx) => (
            <tr
              key={row.id || idx}
              onClick={() => onRowClick && onRowClick(row)}
              className={clsx(
                "hover:bg-slate-800/50 transition-colors",
                onRowClick && "cursor-pointer"
              )}
            >
              {columns.map((col) => (
                <td
                  key={col.key}
                  className={clsx(rowPadding, "text-slate-200", col.align === 'right' && "text-right")}
                >
                  {col.render ? col.render(row[col.key], row) : row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
