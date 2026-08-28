// Real-Time Simulated Financial Risk Telemetry & Market Data

export const INITIAL_RISK_SUMMARY = {
  nav: 2450800000, // $2.45B
  var95_1d: 14250000, // $14.25M
  var95_pct: 0.58, // 0.58%
  cvar99_1d: 22800000, // $22.80M
  cvar99_pct: 0.93, // 0.93%
  sharpeRatio: 2.14,
  maxDrawdown: -4.12,
  beta: 1.08,
  stressLossMax: 68500000, // $68.5M under Lehman Shock
  capitalAdequacyRatio: 16.8, // % (Target >10.5%)
  lcr: 142.5, // Liquidity Coverage Ratio % (Target >100%)
  nsfr: 118.2, // Net Stable Funding Ratio %
  activeBreaches: 2,
  pendingApprovals: 3
};

export const TIME_SERIES_VAR_PNL = [
  { date: '08/01', pnl: +1.2, var95: -0.85, cvar99: -1.35 },
  { date: '08/05', pnl: -0.4, var95: -0.87, cvar99: -1.38 },
  { date: '08/10', pnl: +2.1, var95: -0.82, cvar99: -1.30 },
  { date: '08/15', pnl: -1.1, var95: -0.92, cvar99: -1.45 },
  { date: '08/20', pnl: +0.8, var95: -0.89, cvar99: -1.40 },
  { date: '08/25', pnl: -0.2, var95: -0.91, cvar99: -1.42 },
  { date: '08/28', pnl: +1.8, var95: -0.88, cvar99: -1.39 }
];

export const GREEKS_MATRIX = [
  { assetClass: 'US Equities Tech', delta: 485.2, gamma: 12.4, vega: 84.1, theta: -14.2, rho: 3.8, navPct: 35.4 },
  { assetClass: 'US IG Corporate Bonds', delta: 120.4, gamma: 1.2, vega: 18.5, theta: -4.1, rho: 42.1, navPct: 22.1 },
  { assetClass: 'Global Macro FX / Rates', delta: -85.1, gamma: 4.8, vega: 62.3, theta: -8.9, rho: 88.4, navPct: 18.5 },
  { assetClass: 'Commodities Energy', delta: 210.0, gamma: 8.9, vega: 44.1, theta: -11.5, rho: 2.1, navPct: 14.0 },
  { assetClass: 'Digital Assets / Crypto', delta: 45.8, gamma: 18.7, vega: 112.4, theta: -28.4, rho: 0.4, navPct: 10.0 }
];

export const CORRELATION_MATRIX = {
  assets: ['US Tech', 'US IG Debt', 'EU Equities', 'EM Debt', 'Gold', 'Crypto'],
  matrix: [
    [ 1.00,  0.15,  0.78,  0.42, -0.22,  0.55],
    [ 0.15,  1.00,  0.28,  0.64,  0.31, -0.05],
    [ 0.78,  0.28,  1.00,  0.51, -0.18,  0.48],
    [ 0.42,  0.64,  0.51,  1.00,  0.12,  0.25],
    [-0.22,  0.31, -0.18,  0.12,  1.00, -0.10],
    [ 0.55, -0.05,  0.48,  0.25, -0.10,  1.00]
  ]
};

export const STRESS_TEST_SCENARIOS = [
  { id: 'lehman_2008', name: '2008 Great Financial Crisis', equityShock: -42, rateShockBps: -250, volShockPct: +120, estimatedLossM: -68.5, status: 'Breach' },
  { id: 'covid_2020', name: '2020 COVID Market Crash', equityShock: -34, rateShockBps: -150, volShockPct: +180, estimatedLossM: -52.1, status: 'Breach' },
  { id: 'fed_2022', name: '2022 Aggressive Rate Hikes', equityShock: -22, rateShockBps: +300, volShockPct: +45, estimatedLossM: -31.4, status: 'Caution' },
  { id: 'oil_shock_2026', name: 'Middle East Geopolitical Oil Spike', equityShock: -15, rateShockBps: +75, volShockPct: +85, estimatedLossM: -24.8, status: 'Safe' },
  { id: 'tech_decouple', name: 'Global Supply Chain & Tech Tariff Shock', equityShock: -28, rateShockBps: +50, volShockPct: +95, estimatedLossM: -44.2, status: 'Caution' }
];

export const SECTOR_TREEMAP = [
  { name: 'Information Tech', size: 35, riskContrib: 42, color: '#06B6D4' },
  { name: 'Financials & Banking', size: 22, riskContrib: 18, color: '#3B82F6' },
  { name: 'Energy & Utilities', size: 15, riskContrib: 14, color: '#F59E0B' },
  { name: 'Healthcare & Pharma', size: 12, riskContrib: 8, color: '#10B981' },
  { name: 'Consumer Discretionary', size: 10, riskContrib: 11, color: '#8B5CF6' },
  { name: 'Communication Services', size: 6, riskContrib: 7, color: '#EC4899' }
];

export const FACTOR_ATTRIBUTION = [
  { factor: 'Value', exposure: +0.25, benchmark: +0.10 },
  { factor: 'Momentum', exposure: +0.68, benchmark: +0.40 },
  { factor: 'Size (Small Cap)', exposure: -0.15, benchmark: +0.05 },
  { factor: 'Volatility', exposure: +0.45, benchmark: +0.20 },
  { factor: 'Quality', exposure: +0.82, benchmark: +0.75 },
  { factor: 'Dividend Yield', exposure: -0.30, benchmark: +0.15 }
];

export const COMPLIANCE_BREACHES = [
  { id: 'BR-9041', rule: 'Single Issuer Concentration (>5.0% NAV)', entity: 'NVIDIA Corp (NVDA)', value: '5.82%', limit: '5.00%', severity: 'Critical', owner: 'S. Chen (PM)', timestamp: '2026-08-28 14:22:10', status: 'Open' },
  { id: 'BR-9042', rule: 'Unhedged FX Volatility Threshold', entity: 'EUR/USD Forward Book', value: '18.4% Vol', limit: '15.0% Vol', severity: 'High', owner: 'M. Vance (Risk)', timestamp: '2026-08-28 11:05:44', status: 'Under Review' },
  { id: 'BR-8998', rule: 'Gross Leverage Limit (3.0x NAV)', entity: 'Global Arbitrage Fund', value: '2.88x', limit: '3.00x', severity: 'Warning', owner: 'S. Chen (PM)', timestamp: '2026-08-27 16:50:12', status: 'Approved Exception' },
  { id: 'BR-8940', rule: 'Illiquid Asset Holding (>10 Days to Liquidate)', entity: 'Private Credit Tranche B', value: '12.4%', limit: '10.0%', severity: 'Medium', owner: 'K. Patel (Compliance)', timestamp: '2026-08-26 09:14:30', status: 'Resolved' }
];

export const AUDIT_LOGS = [
  { id: 'LOG-771', user: 'CRO (J. Sterling)', action: 'Overrode Stress Test Limit Breach BR-8998', timestamp: '2026-08-28 15:40:12', ip: '192.168.10.45' },
  { id: 'LOG-770', user: 'System Bot', action: 'Executed Automated Monte Carlo Simulation (100,000 iterations)', timestamp: '2026-08-28 15:00:00', ip: '10.0.4.12' },
  { id: 'LOG-769', user: 'Senior PM (S. Chen)', action: 'Submitted Rebalance Order #8841 for $45M NVDA Reduction', timestamp: '2026-08-28 14:45:22', ip: '192.168.10.88' },
  { id: 'LOG-768', user: 'Compliance (K. Patel)', action: 'Generated Monthly FRTB Regulatory Handoff Package PDF', timestamp: '2026-08-28 12:10:05', ip: '192.168.10.12' },
  { id: 'LOG-767', user: 'Junior Analyst (A. Wong)', action: 'Exported Option Delta Skew Surface CSV dataset', timestamp: '2026-08-28 10:15:33', ip: '192.168.10.99' }
];

export const LIVE_TICKER_DATA = [
  { symbol: 'S&P 500', price: '5,640.25', change: '+0.45%', positive: true },
  { symbol: 'Nasdaq 100', price: '19,820.10', change: '+0.82%', positive: true },
  { symbol: 'US 10Y Yield', price: '3.84%', change: '-4bps', positive: true },
  { symbol: 'VIX Volatility', price: '14.85', change: '-2.1%', positive: true },
  { symbol: 'EUR/USD', price: '1.0924', change: '+0.12%', positive: true },
  { symbol: 'BTC/USD', price: '64,250.00', change: '-1.45%', positive: false },
  { symbol: 'Brent Crude', price: '$78.40', change: '+1.10%', positive: true },
  { symbol: 'Gold (Oz)', price: '$2,512.60', change: '+0.35%', positive: true }
];
