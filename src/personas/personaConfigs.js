// RiskLens Persona Configurations & Role-Based Layout Definitions

export const PERSONAS = {
  cro: {
    id: 'cro',
    title: 'Chief Risk Officer',
    shortName: 'CRO',
    user: 'Jonathan Sterling, CFA',
    badgeColor: 'bg-violet-500/20 text-violet-300 border-violet-500/40',
    description: 'Executive oversight, capital adequacy, enterprise risk appetite, macroeconomic stress testing.',
    defaultScreen: 'cro_executive',
    allowedScreens: ['cro_executive', 'pm_overview', 'compliance_matrix', 'stress_testing', 'monte_carlo', 'audit_trail', 'handoff_spec'],
    keyMetrics: [
      { label: 'Firm-Wide 1D 95% VaR', value: '$14.25M', status: 'Safe', delta: '-1.4% MoM' },
      { label: 'Capital Adequacy Ratio', value: '16.8%', status: 'Safe', delta: 'Target >10.5%' },
      { label: 'Max Stress Loss (2008)', value: '$68.5M', status: 'Warning', delta: '2.8% of NAV' },
      { label: 'Active Policy Breaches', value: '2', status: 'Breach', delta: 'Action Required' }
    ]
  },
  pm: {
    id: 'pm',
    title: 'Senior Portfolio Manager',
    shortName: 'Senior PM',
    user: 'Sarah Chen, MFE',
    badgeColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40',
    description: 'Portfolio return vs risk budget, asset class allocation, drawdown limits, scenario sandbox.',
    defaultScreen: 'pm_overview',
    allowedScreens: ['pm_overview', 'asset_risk', 'scenario_sandbox', 'liquidity_risk', 'monte_carlo', 'live_alerts', 'handoff_spec'],
    keyMetrics: [
      { label: 'Portfolio NAV', value: '$2.45B', status: 'Safe', delta: '+4.2% YTD' },
      { label: 'Active Risk Budget', value: '82.4%', status: 'Safe', delta: '17.6% Headroom' },
      { label: 'Sharpe Ratio (1Y)', value: '2.14', status: 'Safe', delta: '+0.3 vs Benchmark' },
      { label: 'Max Drawdown (YTD)', value: '-4.12%', status: 'Safe', delta: 'Limit -10.0%' }
    ]
  },
  analyst: {
    id: 'analyst',
    title: 'Junior Risk Analyst',
    shortName: 'Junior Analyst',
    user: 'Alex Wong',
    badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
    description: 'Quantitative sensitivity, option Greeks, Monte Carlo iterations, volatility surface diagnostics.',
    defaultScreen: 'analyst_greeks',
    allowedScreens: ['analyst_greeks', 'monte_carlo', 'stress_testing', 'asset_risk', 'live_alerts', 'audit_trail', 'handoff_spec'],
    keyMetrics: [
      { label: 'Portfolio Delta ($/%)', value: '$485.2M', status: 'Safe', delta: '+12.4' },
      { label: 'Option Gamma', value: '12.4', status: 'Safe', delta: 'Sub-second calc' },
      { label: 'Portfolio Vega ($/1% Vol)', value: '$84.1M', status: 'Warning', delta: 'High Tech Exposure' },
      { label: 'Daily Theta Decay', value: '-$14.2K', status: 'Safe', delta: 'Net Earned' }
    ]
  },
  compliance: {
    id: 'compliance',
    title: 'Compliance Officer',
    shortName: 'Compliance',
    user: 'Kavita Patel, JD',
    badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
    description: 'Regulatory compliance (Basel III/IV, FRTB), breach monitoring, audit trail, regulatory handoffs.',
    defaultScreen: 'compliance_matrix',
    allowedScreens: ['compliance_matrix', 'audit_trail', 'live_alerts', 'cro_executive', 'liquidity_risk', 'handoff_spec'],
    keyMetrics: [
      { label: 'Liquidity Coverage (LCR)', value: '142.5%', status: 'Safe', delta: 'Min 100%' },
      { label: 'Net Stable Funding (NSFR)', value: '118.2%', status: 'Safe', delta: 'Min 100%' },
      { label: 'Open Breaches', value: '2 Active', status: 'Breach', delta: '1 Critical' },
      { label: 'Audit Log Trail', value: '100% Verified', status: 'Safe', delta: 'Immutable' }
    ]
  }
};
