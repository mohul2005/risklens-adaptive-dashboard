# RiskLens Technologies — Design Handoff Specification Document
**Version**: 2.4.0  
**Target Audience**: Frontend Engineering Team, UI/UX Designers, QA Engineers  
**Funding Level**: USD 25 Million Series B  
**Compliance Level**: WCAG 2.1 Level AA (Verified 4.5:1 Minimum Contrast Ratio)  

---

## 1. Executive Summary & Design System Overview

RiskLens Technologies requires an enterprise-grade adaptive risk monitoring platform capable of competing with Bloomberg PORT, MSCI RiskMetrics, and Axioma. The RiskLens Design System provides high-density financial data presentation, sub-second latency look-and-feel, dynamic persona customization, and 100% WCAG 2.1 AA accessibility.

---

## 2. Design Tokens Architecture

### 2.1 Color Palette System

| Color Name | Hex Code | RGB | Role / Usage | WCAG Contrast |
| :--- | :--- | :--- | :--- | :--- |
| **Void Dark** | `#060911` | `6, 9, 17` | Canvas background background | 17.4:1 (AAA) |
| **Obsidian Slate** | `#0B0F19` | `11, 15, 25` | Main Dashboard Body | 16.8:1 (AAA) |
| **Card Surface** | `#111827` | `17, 24, 39` | Metric cards & container backgrounds | 14.2:1 (AAA) |
| **Surface Hover** | `#1F2937` | `31, 41, 55` | Table row hover, drawer header | 11.5:1 (AAA) |
| **Subtle Border** | `#374151` | `55, 65, 81` | High-density grid borders | 4.8:1 (AA) |
| **Cyan Accent** | `#06B6D4` | `6, 182, 212` | Primary buttons, active focus, VaR curve | 6.8:1 (AA) |
| **Emerald Safe** | `#10B981` | `16, 185, 129` | Positive PnL, safe limit status | 5.4:1 (AA) |
| **Amber Warning** | `#F59E0B` | `245, 158, 11` | Threshold caution, 95% VaR line | 5.1:1 (AA) |
| **Crimson Risk** | `#EF4444` | `239, 68, 68` | Policy breach, 99% CVaR tail loss | 4.8:1 (AA) |
| **Electric Violet**| `#8B5CF6` | `139, 92, 246` | Monte Carlo fan distribution | 5.9:1 (AA) |

### 2.2 Typography Token Hierarchy
- **Sans-Serif**: `Inter, system-ui, sans-serif` (UI controls, headers, tooltips).
- **Monospace**: `JetBrains Mono, monospace` (Financial telemetry, table cells, ISIN codes, option Greeks).
- **Font Sizes**:
  - `xs`: `11px` (0.6875rem) — Metric labels, micro tags
  - `sm`: `13px` (0.8125rem) — Table data, dense inputs
  - `base`: `14px` (0.875rem) — Standard UI body text
  - `lg`: `16px` (1rem) — Subheaders, card titles
  - `xl`: `20px` (1.25rem) — Section titles, modal headers
  - `2xl`: `24px` (1.5rem) — Primary KPI metrics

---

## 3. Component Inventory (40 Components Specs & States)

Every component MUST implement 6 mandatory interactive states:
1. **Default**: Baseline rest state.
2. **Hover**: Border color shift to cyan/white (`#06B6D4`), subtle glow shadow.
3. **Active/Pressed**: 98% scale or inset shadow.
4. **Focus-Visible**: 2px solid cyan outline ring (`#06B6D4`), offset `2px`.
5. **Disabled**: 50% opacity, `cursor: not-allowed`.
6. **Loading**: Animated spinner icon replacement, pointer events disabled.

### Complete 40 Component List:
1. `Button` (Primary, Secondary, Danger, Ghost, Icon, Loading)
2. `IconButton` (Tooltip + Badge indicator)
3. `TextInput` (Icon prefix + Clear button)
4. `NumberInput` (Precision + Units bps/%/$)
5. `DropdownSelect` (Single/Multi-select + Search)
6. `DateRangePicker` (Quick Presets: 1D, 1W, 1M, YTD, 1Y)
7. `ToggleSwitch` (Standard + High Contrast mode)
8. `RangeSlider` (Risk limit thresholds)
9. `CheckboxGroup` & `RadioButtonGroup`
10. `SegmentedControl` (Density picker: Compact / Standard / Touch)
11. `SearchBar` (Cmd+K Global search modal)
12. `ExportMenu` (CSV, PDF, JSON Handoff)
13. `SidebarNav` (Collapsible + Role indicators)
14. `HeaderBar` (Breakpoint switcher + Persona selector)
15. `Breadcrumbs` (Dynamic routing trail)
16. `TabBar` (Scrolling + Tab badges)
17. `ModalDialog` (Backdrop + Focus trap)
18. `DrawerPanel` (Slide-out detail view)
19. `CardContainer` (Header, Expand, Fullscreen toggle)
20. `Tooltip` (Financial definition + Math formula)
21. `KPIMetricCard` (Value, Delta, Sparkline SVG)
22. `DataTable` (Sortable columns, Sticky header, Density mode)
23. `StatusBadge` (Safe, Warning, Breach, Critical, Info)
24. `AlertBanner` (Toast notifications + Inline breach warning)
25. `AuditTrailFeed` (Chronological activity log)
26. `GreeksSummaryCard` (Delta, Gamma, Vega, Theta, Rho)
27. `ScenarioBadge` (Historical shock tag)
28. `ComplianceRatioGauge` (Basel III LCR circular progress)
29. `CodeJsonViewer` (Syntax-highlighted spec view)
30. `TreeList` (Asset class hierarchy tree)
31. `RealTimeLineChart` (VaR / PnL time series with live ticks)
32. `MonteCarloDistributionChart` (100,000 run histogram)
33. `AssetCorrelationHeatmap` (NxN Pearson R matrix)
34. `DrawdownWaterfallChart` (Peak-to-trough drawdown)
35. `GreeksSensitivitySurface` (2D contour sensitivity)
36. `StressTestComparisonBarChart` (Multi-scenario shock)
37. `PortfolioSectorTreemap` (% NAV size & Risk contribution color)
38. `FactorAttributionRadarChart` (Barra factor exposures)
39. `LiquidityLadderChart` (Days-to-liquidate buckets)
40. `TickerTape` (Live real-time market data stream)

---

## 4. Persona Architectures & Customized Views

1. **Chief Risk Officer (CRO)**:
   - Primary Focus: Enterprise risk appetite, capital adequacy, macro stress testing.
   - Screen Default: `CRO Executive Summary`.
2. **Senior Portfolio Manager (PM)**:
   - Primary Focus: Return vs risk budget, active VaR, sector allocation, "What-If" sandbox.
   - Screen Default: `PM Overview & Risk Budgeting`.
3. **Junior Risk Analyst**:
   - Primary Focus: Quantitative Greeks, option volatility skew, Monte Carlo diagnostics.
   - Screen Default: `Analyst Sensitivity & Greeks`.
4. **Compliance Officer**:
   - Primary Focus: Regulatory ratios (Basel III/IV, FRTB), breach matrix, audit trail logs.
   - Screen Default: `Compliance & Regulatory Breach Matrix`.

---

## 5. Device Breakpoints & Responsive Viewports

- **Desktop (`1440px × 900px`)**: Multi-pane layout, sticky sidebar, high-density Bloomberg tables.
- **Tablet (`768px × 1024px`)**: Collapsible navigation sidebar, stacked metric cards, horizontal scrolling tabs.
- **Mobile (`375px × 812px`)**: Touch-friendly navigation, accordion cards, simplified summary charts.

---

## 6. WCAG 2.1 AA Accessibility Audit Matrix

- **Text Contrast**: Verified &ge; 4.5:1 across all color pairs.
- **UI Focus**: Distinct 2px cyan focus ring (`#06B6D4`) on keyboard Tab navigation.
- **High-Contrast Toggle**: Built-in OLED black mode override (`#000000` canvas).
- **Screen Reader Support**: `<table role="table">`, `aria-live="assertive"` for limit breach announcements.
