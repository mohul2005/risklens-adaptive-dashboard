import React from 'react';
import {
  ShieldAlert,
  Monitor,
  Tablet,
  Smartphone,
  UserCheck,
  Eye,
  FileCode,
  Sparkles,
  Search,
  Bell
} from 'lucide-react';
import { PERSONAS } from '../../personas/personaConfigs';
import { TickerBanner } from '../financial/TickerBanner';

export const Header = ({
  activePersona,
  onPersonaChange,
  activeBreakpoint,
  onBreakpointChange,
  isHighContrast,
  onToggleHighContrast,
  onOpenAccessibilityModal,
  onOpenHandoffModal,
  onOpenCmdKSearch
}) => {
  return (
    <header className="sticky top-0 z-40 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 shadow-md">
      {/* Live Market Ticker */}
      <TickerBanner />

      {/* Main Controls Bar */}
      <div className="px-4 py-2.5 flex items-center justify-between gap-4">
        {/* Brand & Platform Info */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-600 to-emerald-500 flex items-center justify-center shadow-glow-cyan">
            <ShieldAlert className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-base font-bold text-slate-100 tracking-tight">RiskLens</h1>
              <span className="bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 text-[10px] font-mono px-1.5 py-0.5 rounded font-bold">
                $25M Series B
              </span>
            </div>
            <p className="text-[11px] text-slate-400 font-sans">Adaptive Institutional Risk Architecture</p>
          </div>
        </div>

        {/* Global Search Button (Cmd+K) */}
        <button
          onClick={onOpenCmdKSearch}
          className="hidden md:flex items-center gap-2 bg-slate-950/80 hover:bg-slate-800 border border-slate-700/80 text-slate-400 text-xs px-3 py-1.5 rounded-lg w-56 transition-colors"
        >
          <Search className="w-3.5 h-3.5" />
          <span>Search assets, ISINs, risk rules...</span>
          <kbd className="ml-auto text-[10px] font-mono bg-slate-800 border border-slate-700 px-1.5 rounded text-slate-300">⌘K</kbd>
        </button>

        {/* System Controls & Switchers */}
        <div className="flex items-center gap-3">
          {/* Breakpoint Switcher (1440px / 768px / 375px) */}
          <div className="flex bg-slate-950 p-1 rounded-lg border border-slate-800" title="Simulate Viewport Breakpoints">
            <button
              onClick={() => onBreakpointChange('desktop')}
              className={`p-1.5 rounded text-xs flex items-center gap-1 transition-colors ${
                activeBreakpoint === 'desktop' ? 'bg-cyan-600 text-white font-bold' : 'text-slate-400 hover:text-slate-200'
              }`}
              title="Desktop 1440px Viewport"
            >
              <Monitor className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">1440px</span>
            </button>
            <button
              onClick={() => onBreakpointChange('tablet')}
              className={`p-1.5 rounded text-xs flex items-center gap-1 transition-colors ${
                activeBreakpoint === 'tablet' ? 'bg-cyan-600 text-white font-bold' : 'text-slate-400 hover:text-slate-200'
              }`}
              title="Tablet 768px Viewport"
            >
              <Tablet className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">768px</span>
            </button>
            <button
              onClick={() => onBreakpointChange('mobile')}
              className={`p-1.5 rounded text-xs flex items-center gap-1 transition-colors ${
                activeBreakpoint === 'mobile' ? 'bg-cyan-600 text-white font-bold' : 'text-slate-400 hover:text-slate-200'
              }`}
              title="Mobile 375px Viewport"
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">375px</span>
            </button>
          </div>

          {/* Persona Selector */}
          <div className="flex items-center gap-1.5 bg-slate-950 px-2.5 py-1 rounded-lg border border-slate-800">
            <UserCheck className="w-4 h-4 text-cyan-400" />
            <select
              value={activePersona.id}
              onChange={(e) => onPersonaChange(e.target.value)}
              className="bg-transparent text-xs text-slate-100 font-semibold focus:outline-none cursor-pointer"
            >
              {Object.values(PERSONAS).map((p) => (
                <option key={p.id} value={p.id} className="bg-slate-900 text-slate-100">
                  {p.title} ({p.shortName})
                </option>
              ))}
            </select>
          </div>

          {/* Accessibility Inspector Button */}
          <button
            onClick={onOpenAccessibilityModal}
            className="p-2 rounded-lg bg-slate-950 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-cyan-300 transition-colors flex items-center gap-1.5 text-xs"
            title="WCAG 2.1 AA Accessibility Inspector"
          >
            <Eye className="w-4 h-4 text-cyan-400" />
            <span className="hidden lg:inline">WCAG AA</span>
          </button>

          {/* Design Handoff Spec Button */}
          <button
            onClick={onOpenHandoffModal}
            className="p-2 rounded-lg bg-cyan-950/80 hover:bg-cyan-900/80 border border-cyan-700/60 text-cyan-200 transition-colors flex items-center gap-1.5 text-xs font-semibold"
            title="Open Handoff Spec Inspector"
          >
            <FileCode className="w-4 h-4 text-cyan-300" />
            <span className="hidden lg:inline">Design Handoff</span>
          </button>
        </div>
      </div>
    </header>
  );
};
