import React from 'react';
import { StressTestMatrix } from '../components/financial/StressTestMatrix';
import { STRESS_TEST_SCENARIOS } from '../mockData/riskData';

export const StressTestingScreen = () => {
  return (
    <div className="flex flex-col gap-5 animate-fade-in">
      <StressTestMatrix scenarios={STRESS_TEST_SCENARIOS} />
    </div>
  );
};
