import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';
import { clsx } from 'clsx';

export const Dropdown = ({
  label,
  options = [],
  value,
  onChange,
  placeholder = 'Select option...',
  className
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectedOption = options.find(o => o.value === value);

  return (
    <div className="flex flex-col gap-1.5 w-full text-left relative" ref={dropdownRef}>
      {label && <label className="text-xs font-medium text-slate-300">{label}</label>}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={clsx(
          "w-full bg-slate-900 border border-slate-700 hover:border-slate-600 rounded-md px-3 py-2 text-sm text-left flex items-center justify-between text-slate-100 transition-colors focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500",
          className
        )}
      >
        <span className={clsx(!selectedOption && "text-slate-500")}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <ChevronDown className={clsx("w-4 h-4 text-slate-400 transition-transform duration-200", isOpen && "rotate-180")} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 z-50 bg-slate-900 border border-slate-700 rounded-md shadow-xl max-h-60 overflow-y-auto py-1">
          {options.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => {
                onChange(opt.value);
                setIsOpen(false);
              }}
              className={clsx(
                "w-full text-left px-3 py-2 text-xs flex items-center justify-between hover:bg-slate-800 transition-colors",
                value === opt.value ? "text-cyan-400 font-semibold bg-slate-800/60" : "text-slate-300"
              )}
            >
              <span>{opt.label}</span>
              {value === opt.value && <Check className="w-3.5 h-3.5 text-cyan-400" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
