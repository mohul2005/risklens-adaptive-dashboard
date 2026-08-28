import React from 'react';
import { clsx } from 'clsx';

export const Slider = ({
  label,
  value,
  min = 0,
  max = 100,
  step = 1,
  onChange,
  unit = '',
  className
}) => {
  return (
    <div className={clsx("flex flex-col gap-1.5 w-full text-left", className)}>
      <div className="flex items-center justify-between text-xs">
        {label && <span className="font-medium text-slate-300">{label}</span>}
        <span className="font-mono text-cyan-400 font-bold">{value}{unit}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
      />
      <div className="flex justify-between text-[10px] font-mono text-slate-500">
        <span>{min}{unit}</span>
        <span>{max}{unit}</span>
      </div>
    </div>
  );
};

export const Toggle = ({
  label,
  checked,
  onChange,
  className
}) => {
  return (
    <label className={clsx("inline-flex items-center gap-2.5 cursor-pointer select-none", className)}>
      <div className="relative">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="sr-only"
        />
        <div className={clsx("w-9 h-5 rounded-full transition-colors", checked ? "bg-cyan-600" : "bg-slate-800 border border-slate-700")} />
        <div className={clsx("absolute left-0.5 top-0.5 w-4 h-4 rounded-full bg-white transition-transform duration-200", checked && "translate-x-4")} />
      </div>
      {label && <span className="text-xs text-slate-300 font-medium">{label}</span>}
    </label>
  );
};
