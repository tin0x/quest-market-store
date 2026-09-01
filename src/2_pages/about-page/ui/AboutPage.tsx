import React from 'react';
import AboutHeroWidget from '@widgets/about-hero-widget/ui/AboutHeroWidget.tsx';
import { OffersWidget } from '@widgets/offers-widget';
import { StatInfoWidget } from '@widgets/stat-info-wiget';

const AboutPage: React.FC = () => {
  return (
    <div className="flex flex-col gap-30 py-10">
      <AboutHeroWidget />
      <OffersWidget />
      <StatInfoWidget />
    </div>
  );
};

export default AboutPage;
