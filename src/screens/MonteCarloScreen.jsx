import React from 'react';
import { MonteCarloChart } from '../components/financial/MonteCarloChart';
import { RealTimeLineChart } from '../components/financial/RealTimeLineChart';
import { TIME_SERIES_VAR_PNL } from '../mockData/riskData';

export const MonteCarloScreen = () => {
  return (
    <div className="flex flex-col gap-5 animate-fade-in">
      <MonteCarloChart />
      <RealTimeLineChart data={TIME_SERIES_VAR_PNL} title="Monte Carlo Simulated Path Envelope vs Historical PnL" />
    </div>
  );
};
