import React from 'react';
import {
  LayoutDashboard,
  PieChart,
  Activity,
  ShieldCheck,
  TrendingDown,
  Zap,
  Grid,
  BellRing,
  Sliders,
  Coins,
  History,
  FileCode,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { clsx } from 'clsx';

export const SCREENS_LIST = [
  { id: 'cro_executive', title: '1. CRO Executive Summary', icon: LayoutDashboard, category: 'Executive' },
  { id: 'pm_overview', title: '2. PM Overview & Risk Budget', icon: PieChart, category: 'Portfolio' },
  { id: 'analyst_greeks', title: '3. Analyst Sensitivity & Greeks', icon: Activity, category: 'Analytics' },
  { id: 'compliance_matrix', title: '4. Compliance & Breach Matrix', icon: ShieldCheck, category: 'Compliance' },
  { id: 'monte_carlo', title: '5. Monte Carlo VaR Engine', icon: TrendingDown, category: 'Analytics' },
  { id: 'stress_testing', title: '6. Macro Stress Testing Engine', icon: Zap, category: 'Analytics' },
  { id: 'asset_risk', title: '7. Asset Risk & Factor Matrix', icon: Grid, category: 'Portfolio' },
  { id: 'live_alerts', title: '8. Live Incident Alert Center', icon: BellRing, category: 'Operations' },
  { id: 'scenario_sandbox', title: '9. "What-If" Scenario Sandbox', icon: Sliders, category: 'Portfolio' },
  { id: 'liquidity_risk', title: '10. Liquidity & Counterparty', icon: Coins, category: 'Risk' },
  { id: 'audit_trail', title: '11. Audit Trail & Handoff Logs', icon: History, category: 'Compliance' },
  { id: 'handoff_spec', title: '12. Design System & Handoff Spec', icon: FileCode, category: 'System' }
];

export const Sidebar = ({
  activeScreen,
  onScreenSelect,
  activePersona,
  isCollapsed,
  onToggleCollapse
}) => {
  return (
    <aside
      className={clsx(
        "bg-slate-950 border-r border-slate-800 flex flex-col transition-all duration-200 z-30 shrink-0 select-none",
        isCollapsed ? "w-16" : "w-64"
      )}
    >
      {/* Persona Badge Header */}
      <div className="p-3 border-b border-slate-800/80 flex items-center justify-between">
        {!isCollapsed && (
          <div>
            <span className="text-[10px] uppercase tracking-wider text-slate-500 font-bold block">ACTIVE ROLE</span>
            <span className="text-xs font-bold text-cyan-400 font-mono truncate block">{activePersona.title}</span>
          </div>
        )}
        <button
          onClick={onToggleCollapse}
          className="text-slate-400 hover:text-white p-1 rounded hover:bg-slate-800 transition-colors mx-auto"
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {isCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
        </button>
      </div>

      {/* Navigation Links */}
      <div className="p-2 flex-1 overflow-y-auto flex flex-col gap-1">
        {SCREENS_LIST.map((screen) => {
          const Icon = screen.icon;
          const isActive = activeScreen === screen.id;
          const isRoleRecommended = activePersona.allowedScreens.includes(screen.id);

          return (
            <button
              key={screen.id}
              onClick={() => onScreenSelect(screen.id)}
              className={clsx(
                "w-full flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-medium transition-all text-left group relative",
                isActive
                  ? "bg-cyan-600/20 text-cyan-300 border border-cyan-500/40 shadow-glow-cyan"
                  : "text-slate-400 hover:text-slate-100 hover:bg-slate-900",
                !isRoleRecommended && "opacity-60"
              )}
              title={screen.title}
            >
              <Icon className={clsx("w-4 h-4 shrink-0", isActive ? "text-cyan-400" : "text-slate-400 group-hover:text-slate-200")} />
              {!isCollapsed && (
                <span className="truncate flex-1 font-sans">{screen.title}</span>
              )}
              {!isCollapsed && isRoleRecommended && (
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" title="Recommended for Role" />
              )}
            </button>
          );
        })}
      </div>

      {/* User Info Footer */}
      {!isCollapsed && (
        <div className="p-3 border-t border-slate-800/80 bg-slate-900/40 text-xs">
          <div className="font-semibold text-slate-200 truncate">{activePersona.user}</div>
          <div className="text-[10px] text-slate-500 font-mono truncate">Series B Risk Lens Suite v2.4</div>
        </div>
      )}
    </aside>
  );
};
