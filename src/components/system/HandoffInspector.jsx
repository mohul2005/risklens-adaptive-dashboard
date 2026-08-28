import React, { useState } from 'react';
import { Modal } from '../core/Modal';
import { Button } from '../core/Button';
import { Tabs } from '../core/Tabs';
import { Copy, Check, Download, Code, Layers, Palette, Shield } from 'lucide-react';
import { DESIGN_TOKENS } from '../../tokens/designTokens';

export const HandoffInspector = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('tokens');
  const [copied, setCopied] = useState(false);

  const tabs = [
    { id: 'tokens', label: 'Design Tokens', icon: Palette },
    { id: 'components', label: 'Component APIs (40+)', icon: Layers },
    { id: 'states', label: 'State Matrix & WCAG', icon: Shield },
    { id: 'code', label: 'JSON Export', icon: Code }
  ];

  const handleCopyJson = () => {
    navigator.clipboard.writeText(JSON.stringify(DESIGN_TOKENS, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="RiskLens Engineering Design Handoff Specification (Production Handoff)"
      maxWidth="max-w-4xl"
      footer={
        <div className="flex items-center gap-3">
          <Button variant="secondary" icon={copied ? Check : Copy} onClick={handleCopyJson}>
            {copied ? "Copied Tokens JSON!" : "Copy Tokens JSON"}
          </Button>
          <Button variant="primary" onClick={onClose}>Done</Button>
        </div>
      }
    >
      <div className="flex flex-col gap-4">
        <Tabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />

        {activeTab === 'tokens' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-xs">
            {/* Color Tokens */}
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
              <h4 className="font-sans font-bold text-slate-100 mb-3 text-sm">Brand & Risk Color Palette</h4>
              <div className="flex flex-col gap-2">
                {Object.entries(DESIGN_TOKENS.colors.brand).map(([key, val]) => (
                  <div key={key} className="flex items-center justify-between p-2 bg-slate-900 rounded border border-slate-800">
                    <div className="flex items-center gap-2">
                      <span className="w-4 h-4 rounded border border-white/20" style={{ backgroundColor: val.hex }} />
                      <span className="text-slate-200 capitalize font-bold">{key}</span>
                    </div>
                    <div className="text-[11px] text-slate-400">
                      <code className="text-cyan-300 mr-2">{val.hex}</code>
                      <span>rgb({val.rgb})</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Density & Typography */}
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex flex-col gap-4">
              <div>
                <h4 className="font-sans font-bold text-slate-100 mb-2 text-sm">Typography Standards</h4>
                <div className="text-[11px] text-slate-300 flex flex-col gap-1.5">
                  <div>Primary Body: <code className="text-cyan-300">{DESIGN_TOKENS.typography.fontFamilies.sans}</code></div>
                  <div>Telemetry / Data: <code className="text-cyan-300">{DESIGN_TOKENS.typography.fontFamilies.mono}</code></div>
                </div>
              </div>

              <div>
                <h4 className="font-sans font-bold text-slate-100 mb-2 text-sm">Bloomberg Grid Density Tokens</h4>
                <div className="bg-slate-900 p-2.5 rounded border border-slate-800 text-[11px] flex flex-col gap-1">
                  <div>Compact Row Height: <code className="text-amber-300">32px (Font 12px)</code></div>
                  <div>Standard Row Height: <code className="text-emerald-300">40px (Font 13px)</code></div>
                  <div>Touch Row Height: <code className="text-cyan-300">48px (Font 14px)</code></div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'components' && (
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-xs font-mono">
            <h4 className="font-sans font-bold text-slate-100 mb-3 text-sm">Component Inventory (40 Components Specs)</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
              {[
                "1. Button (Primary/Secondary/Danger/Ghost/Icon)",
                "2. IconButton (Tooltip + Badge)",
                "3. TextInput (Prefix icon + Clear button)",
                "4. NumberInput (Precision + Units)",
                "5. DropdownSelect (Single/Multi + Search)",
                "6. DateRangePicker (Presets + Custom)",
                "7. ToggleSwitch (Standard + High Contrast)",
                "8. RangeSlider (Threshold limits)",
                "9. Checkbox & RadioGroup",
                "10. SegmentedControl (Density)",
                "11. SearchBar (Cmd+K Modal Launcher)",
                "12. ExportMenu (CSV, PDF, JSON)",
                "13. SidebarNav (Collapsible)",
                "14. HeaderBar (Breakpoint + Persona)",
                "15. Breadcrumbs (Routing trail)",
                "16. TabBar (Scrolling + Badges)",
                "17. ModalDialog (Backdrop + Focus trap)",
                "18. DrawerPanel (Slide-out detail)",
                "19. CardContainer (Expand + Fullscreen)",
                "20. Tooltip (Formula + Definition)",
                "21. KPIMetricCard (Delta + Sparkline)",
                "22. DataTable (Sort + Sticky header)",
                "23. StatusBadge (Safe/Warning/Breach)",
                "24. AlertBanner (Inline + Toast)",
                "25. AuditTrailFeed (Chronological)",
                "26. GreeksSummaryCard (5 Greeks)",
                "27. ScenarioBadge (Historic Shocks)",
                "28. ComplianceRatioGauge (Basel LCR)",
                "29. CodeJsonViewer (Syntax highlight)",
                "30. TreeList (Asset hierarchy)",
                "31. RealTimeLineChart (VaR/PnL)",
                "32. MonteCarloDistributionChart (100k)",
                "33. AssetCorrelationHeatmap (NxN)",
                "34. DrawdownWaterfallChart (Peak-trough)",
                "35. GreeksSensitivitySurface (3D/2D)",
                "36. StressTestComparisonBarChart",
                "37. PortfolioSectorTreemap (% NAV)",
                "38. FactorAttributionRadarChart (Barra)",
                "39. LiquidityLadderChart (Horizon)",
                "40. TickerTape (Streaming market data)"
              ].map((comp, idx) => (
                <div key={idx} className="p-2 bg-slate-900 rounded border border-slate-800 text-slate-300">
                  {comp}
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'states' && (
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-xs font-mono flex flex-col gap-3">
            <h4 className="font-sans font-bold text-slate-100 text-sm">Interactive State Machine Requirements</h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              <div className="p-3 bg-slate-900 rounded border border-slate-800">
                <span className="text-slate-400 block text-[10px]">Default State</span>
                <span className="text-slate-100 font-bold">Standard Opacity</span>
              </div>
              <div className="p-3 bg-slate-900 rounded border border-slate-800">
                <span className="text-slate-400 block text-[10px]">Hover State</span>
                <span className="text-cyan-300 font-bold">Border Highlight & Glow</span>
              </div>
              <div className="p-3 bg-slate-900 rounded border border-slate-800">
                <span className="text-slate-400 block text-[10px]">Focus Visible</span>
                <span className="text-cyan-400 font-bold">2px Outline Ring</span>
              </div>
              <div className="p-3 bg-slate-900 rounded border border-slate-800">
                <span className="text-slate-400 block text-[10px]">Disabled State</span>
                <span className="text-slate-500 font-bold">50% Opacity</span>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'code' && (
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-xs font-mono">
            <pre className="text-cyan-300 overflow-x-auto p-3 bg-slate-900 rounded border border-slate-800 max-h-72">
              {JSON.stringify(DESIGN_TOKENS, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </Modal>
  );
};
