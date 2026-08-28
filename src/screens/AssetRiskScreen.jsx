import React from 'react';
import { SectorTreemap } from '../components/financial/SectorTreemap';
import { FactorRadarChart } from '../components/financial/FactorRadarChart';
import { CorrelationHeatmap } from '../components/financial/CorrelationHeatmap';
import { SECTOR_TREEMAP, FACTOR_ATTRIBUTION, CORRELATION_MATRIX } from '../mockData/riskData';

export const AssetRiskScreen = () => {
  return (
    <div className="flex flex-col gap-5 animate-fade-in">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <SectorTreemap sectors={SECTOR_TREEMAP} />
        <FactorRadarChart factors={FACTOR_ATTRIBUTION} />
      </div>
      <CorrelationHeatmap correlationData={CORRELATION_MATRIX} />
    </div>
  );
};
