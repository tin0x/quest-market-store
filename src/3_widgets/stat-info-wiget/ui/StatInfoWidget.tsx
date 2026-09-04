import React from 'react';
import Container from '@shared/ui/container/Container.tsx';
import { globalStat } from '@widgets/stat-info-wiget/constants.ts';
import MetricCard from '@shared/ui/metric-card/MetricCard.tsx';

const StatInfoWidget: React.FC = () => {
  return (
    <section>
      <Container>
        <ul className="grid grid-cols-1 gap-20 md:grid-cols-3 md:flex-row">
          {globalStat.map((stat) => (
            <li className="flex-1" key={stat.name}>
              <MetricCard subtitle={stat.name} value={stat.value} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default StatInfoWidget;
