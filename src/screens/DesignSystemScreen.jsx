import React, { useState } from 'react';
import { Button } from '../components/core/Button';
import { Input } from '../components/core/Input';
import { Dropdown } from '../components/core/Dropdown';
import { Badge } from '../components/core/Badge';
import { KPICard } from '../components/financial/KPICard';
import { Card } from '../components/core/Card';
import { Tabs } from '../components/core/Tabs';
import { Slider, Toggle } from '../components/core/Slider';
import { DESIGN_TOKENS } from '../tokens/designTokens';
import { Sparkles, Layers, ShieldCheck, CheckCircle2, Eye } from 'lucide-react';

export const DesignSystemScreen = () => {
  const [activeTab, setActiveTab] = useState('components');
  const [inputValue, setInputValue] = useState('NVDA US Equity');
  const [dropdownValue, setDropdownValue] = useState('cro');
  const [sliderVal, setSliderVal] = useState(65);
  const [toggleVal, setToggleVal] = useState(true);

  const tabs = [
    { id: 'components', label: 'Component Showcase (40+ Variants)' },
    { id: 'tokens', label: 'Design Tokens & Color Palette' },
    { id: 'wcag', label: 'WCAG 2.1 AA Contrast Matrix' }
  ];

  return (
    <div className="flex flex-col gap-6 animate-fade-in">
      <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5 shadow-card-dark">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-cyan-600/20 text-cyan-300 border border-cyan-500/30 rounded-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-base font-bold text-slate-100">{DESIGN_TOKENS.system.name} v{DESIGN_TOKENS.system.version}</h2>
              <p className="text-xs text-slate-400">Institutional adaptive design system built for RiskLens Technologies ($25M Series B)</p>
            </div>
          </div>
          <Badge variant="info">WCAG 2.1 AA Certified</Badge>
        </div>
      </div>

      <Tabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />

      {activeTab === 'components' && (
        <div className="flex flex-col gap-6">
          {/* Buttons Showcase */}
          <Card title="1. Button System (Variants & States)">
            <div className="flex flex-wrap items-center gap-3">
              <Button variant="primary">Primary Button</Button>
              <Button variant="secondary">Secondary Button</Button>
              <Button variant="danger">Danger / Limit Breach</Button>
              <Button variant="ghost">Ghost Button</Button>
              <Button variant="primary" isLoading={true}>Loading</Button>
              <Button variant="primary" isDisabled={true}>Disabled</Button>
              <Button variant="icon" icon={Sparkles} ariaLabel="Icon Button" />
            </div>
          </Card>

          {/* Form Inputs Showcase */}
          <Card title="2. Inputs & Select Controls">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Input
                label="Search Security (ISIN)"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                isClearable={true}
              />
              <Dropdown
                label="User Persona Switcher"
                value={dropdownValue}
                onChange={setDropdownValue}
                options={[
                  { value: 'cro', label: 'Chief Risk Officer (CRO)' },
                  { value: 'pm', label: 'Senior Portfolio Manager (PM)' },
                  { value: 'analyst', label: 'Junior Risk Analyst' },
                  { value: 'compliance', label: 'Compliance Officer' }
                ]}
              />
              <div className="flex flex-col gap-2">
                <Slider label="Risk Tolerance Ceiling" value={sliderVal} onChange={setSliderVal} unit="%" />
                <Toggle label="Live WebSocket Streaming Stream" checked={toggleVal} onChange={setToggleVal} />
              </div>
            </div>
          </Card>

          {/* Badges Showcase */}
          <Card title="3. Status Badges & Indicators">
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="safe">Safe (Pass)</Badge>
              <Badge variant="warning">Warning (Caution)</Badge>
              <Badge variant="breach">Breach Limit</Badge>
              <Badge variant="critical">Critical Emergency</Badge>
              <Badge variant="info">Info / Notice</Badge>
              <Badge variant="neutral">Neutral System</Badge>
            </div>
          </Card>

          {/* KPI Cards Showcase */}
          <Card title="4. Financial KPI Cards">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <KPICard title="1D 95% VaR" value="$14.25M" delta="-1.4% MoM" isPositiveDelta={true} status="Safe" />
              <KPICard title="1D 99% CVaR" value="$22.80M" delta="Expected Shortfall" isPositiveDelta={false} status="Warning" />
              <KPICard title="Limit Breaches" value="2 Active" delta="Immediate Action" isPositiveDelta={false} status="Breach" />
            </div>
          </Card>
        </div>
      )}

      {activeTab === 'tokens' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 font-mono text-xs">
          <div className="bg-slate-900 border border-slate-800 rounded-lg p-4">
            <h3 className="font-sans font-bold text-slate-100 mb-3 text-sm">Brand Colors</h3>
            <div className="flex flex-col gap-2">
              {Object.entries(DESIGN_TOKENS.colors.brand).map(([key, val]) => (
                <div key={key} className="flex items-center justify-between p-2 bg-slate-950 rounded border border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded" style={{ backgroundColor: val.hex }} />
                    <span className="text-slate-200 capitalize font-bold">{key}</span>
                  </div>
                  <span className="text-cyan-300">{val.hex}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-lg p-4">
            <h3 className="font-sans font-bold text-slate-100 mb-3 text-sm">Typography Standards</h3>
            <div className="flex flex-col gap-3 font-sans">
              <div>
                <span className="text-xs text-slate-400 block">Sans Font: Inter</span>
                <span className="text-base text-slate-100 font-semibold">The quick brown fox jumps over the lazy dog.</span>
              </div>
              <div className="font-mono">
                <span className="text-xs text-slate-400 block">Mono Font: JetBrains Mono</span>
                <span className="text-sm text-cyan-300 font-bold">$2,450,800,000 NAV | VaR95: 0.58%</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'wcag' && (
        <div className="bg-slate-900 border border-slate-800 rounded-lg p-4">
          <h3 className="font-sans font-bold text-slate-100 mb-3 text-sm flex items-center gap-2">
            <Eye className="w-4 h-4 text-cyan-400" /> WCAG 2.1 Level AA Compliance Matrix
          </h3>
          <div className="border border-slate-800 rounded overflow-hidden font-mono text-xs">
            <table className="w-full text-left">
              <thead className="bg-slate-950 text-slate-400">
                <tr>
                  <th className="p-2.5">Text & Background Target</th>
                  <th className="p-2.5">Measured Contrast</th>
                  <th className="p-2.5">Audit Standard</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 bg-slate-900/60">
                {DESIGN_TOKENS.wcagContrastMatrix.map((item, idx) => (
                  <tr key={idx}>
                    <td className="p-2.5 text-slate-200">{item.text}</td>
                    <td className="p-2.5 text-cyan-400 font-bold">{item.ratio}</td>
                    <td className="p-2.5 text-emerald-400 font-bold">{item.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};
