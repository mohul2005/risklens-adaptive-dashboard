import React, { useState, useEffect } from 'react';
import { Header } from './components/system/Header';
import { Sidebar } from './components/system/Sidebar';
import { AccessibilityInspector } from './components/system/AccessibilityInspector';
import { HandoffInspector } from './components/system/HandoffInspector';
import { Modal } from './components/core/Modal';
import { Input } from './components/core/Input';
import { PERSONAS } from './personas/personaConfigs';

// 12 Screens
import { CROExecutiveScreen } from './screens/CROExecutiveScreen';
import { PMOverviewScreen } from './screens/PMOverviewScreen';
import { AnalystGreeksScreen } from './screens/AnalystGreeksScreen';
import { ComplianceMatrixScreen } from './screens/ComplianceMatrixScreen';
import { MonteCarloScreen } from './screens/MonteCarloScreen';
import { StressTestingScreen } from './screens/StressTestingScreen';
import { AssetRiskScreen } from './screens/AssetRiskScreen';
import { LiveAlertsScreen } from './screens/LiveAlertsScreen';
import { ScenarioSandboxScreen } from './screens/ScenarioSandboxScreen';
import { LiquidityRiskScreen } from './screens/LiquidityRiskScreen';
import { AuditTrailScreen } from './screens/AuditTrailScreen';
import { DesignSystemScreen } from './screens/DesignSystemScreen';

export function App() {
  const [activePersona, setActivePersona] = useState(PERSONAS.cro);
  const [activeScreen, setActiveScreen] = useState('cro_executive');
  const [activeBreakpoint, setActiveBreakpoint] = useState('desktop'); // 'desktop', 'tablet', 'mobile'
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  // Modals
  const [isAccessibilityOpen, setIsAccessibilityOpen] = useState(false);
  const [isHandoffOpen, setIsHandoffOpen] = useState(false);
  const [isCmdKOpen, setIsCmdKOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Handle Persona Switching
  const handlePersonaChange = (personaId) => {
    const selected = PERSONAS[personaId];
    if (selected) {
      setActivePersona(selected);
      setActiveScreen(selected.defaultScreen);
    }
  };

  // Keyboard Cmd+K listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsCmdKOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Screen Router
  const renderScreen = () => {
    switch (activeScreen) {
      case 'cro_executive': return <CROExecutiveScreen />;
      case 'pm_overview': return <PMOverviewScreen />;
      case 'analyst_greeks': return <AnalystGreeksScreen />;
      case 'compliance_matrix': return <ComplianceMatrixScreen />;
      case 'monte_carlo': return <MonteCarloScreen />;
      case 'stress_testing': return <StressTestingScreen />;
      case 'asset_risk': return <AssetRiskScreen />;
      case 'live_alerts': return <LiveAlertsScreen />;
      case 'scenario_sandbox': return <ScenarioSandboxScreen />;
      case 'liquidity_risk': return <LiquidityRiskScreen />;
      case 'audit_trail': return <AuditTrailScreen />;
      case 'handoff_spec': return <DesignSystemScreen />;
      default: return <CROExecutiveScreen />;
    }
  };

  // Breakpoint frame styles
  const getBreakpointWrapperClass = () => {
    if (activeBreakpoint === 'tablet') {
      return "max-w-[768px] mx-auto border-x border-cyan-500/30 shadow-2xl my-4 rounded-xl overflow-hidden bg-slate-900";
    }
    if (activeBreakpoint === 'mobile') {
      return "max-w-[375px] mx-auto border-x border-cyan-500/30 shadow-2xl my-4 rounded-xl overflow-hidden bg-slate-900";
    }
    return "w-full";
  };

  return (
    <div className={`min-h-screen bg-[#0B0F19] text-slate-100 flex flex-col ${isHighContrast ? 'high-contrast' : ''}`}>
      {/* Header Bar */}
      <Header
        activePersona={activePersona}
        onPersonaChange={handlePersonaChange}
        activeBreakpoint={activeBreakpoint}
        onBreakpointChange={setActiveBreakpoint}
        isHighContrast={isHighContrast}
        onToggleHighContrast={() => setIsHighContrast(!isHighContrast)}
        onOpenAccessibilityModal={() => setIsAccessibilityOpen(true)}
        onOpenHandoffModal={() => setIsHandoffOpen(true)}
        onOpenCmdKSearch={() => setIsCmdKOpen(true)}
      />

      {/* Main Workspace Layout */}
      <div className="flex-1 flex overflow-hidden">
        {/* Navigation Sidebar */}
        <Sidebar
          activeScreen={activeScreen}
          onScreenSelect={setActiveScreen}
          activePersona={activePersona}
          isCollapsed={isSidebarCollapsed}
          onToggleCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
        />

        {/* Dynamic Viewport Container */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6 bg-[#0B0F19]/50">
          <div className={getBreakpointWrapperClass()}>
            {renderScreen()}
          </div>
        </main>
      </div>

      {/* Modals & Inspectors */}
      <AccessibilityInspector
        isOpen={isAccessibilityOpen}
        onClose={() => setIsAccessibilityOpen(false)}
        isHighContrast={isHighContrast}
        onToggleHighContrast={() => setIsHighContrast(!isHighContrast)}
      />

      <HandoffInspector
        isOpen={isHandoffOpen}
        onClose={() => setIsHandoffOpen(false)}
      />

      {/* Global Cmd+K Search Dialog */}
      <Modal
        isOpen={isCmdKOpen}
        onClose={() => setIsCmdKOpen(false)}
        title="Global Financial Risk Search (Cmd+K)"
        maxWidth="max-w-xl"
      >
        <div className="flex flex-col gap-4 font-mono">
          <Input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Type ticker, security name, rule ID (e.g. NVDA, BR-9041)..."
            isClearable={true}
          />
          <div className="text-xs text-slate-400">
            Quick Navigation Presets:
            <div className="mt-2 flex flex-wrap gap-2">
              {['NVDA Single Issuer Breach', 'Basel III LCR Ratio', '2008 Lehman Shock Model', 'Delta Option Skew'].map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => { setSearchQuery(item); }}
                  className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-cyan-300 rounded border border-slate-700"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default App;
