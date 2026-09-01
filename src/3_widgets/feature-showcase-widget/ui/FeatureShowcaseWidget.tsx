import React, { useLayoutEffect, useRef, useState } from 'react';
import { tabs } from '@widgets/feature-showcase-widget/constants.ts';
import { cn } from '@shared/lib/utils/cn.ts';
import { ShowCaseItem } from '@entities/game';
import type { FeatureShowcaseWidgetProps } from '@widgets/feature-showcase-widget/types.ts';
import ArrowIcon from '@shared/assets/icons/arrow-down.svg?react';
import QueryPlaceholder from '@shared/ui/query-placeholder/QueryPlaceholder.tsx';
import FeatureShowcaseSkeleton from '@shared/ui/skeletons/feature-showcase-skeleton/FeatureShowcaseSkeleton.tsx';

const FeatureShowcaseWidget: React.FC<FeatureShowcaseWidgetProps> = ({ storyline, isLoading, isError, refetch }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].type);
  const [showMore, setShowMore] = useState(false);
  const [showcaseHeight, setShowcaseHeight] = useState(0);
  const descriptionRef = useRef<HTMLUListElement>(null);

  const renderContent = () => {
    if (isLoading) return <FeatureShowcaseSkeleton />;
    if (isError) return <QueryPlaceholder type="error" onClick={refetch} />;

    return (
      <>
        <ul className="flex border-b-4 border-cyan-900/50">
          {tabs.map((tab, i) => (
            <li key={i}>
              <button
                className={cn(
                  'text-text-secondary hover:text-text-primary -mb-1 cursor-pointer border-b-4 border-transparent px-20 pb-3 text-xl font-bold transition-colors hover:border-b-cyan-300',
                  {
                    ['text-text-primary border-b-cyan-300']: tab.type === activeTab,
                  },
                )}
                onClick={() => setActiveTab(tab.type)}
              >
                {tab.title}
              </button>
            </li>
          ))}
        </ul>
        {activeTab === 'description' && (
          <div
            className={cn('max-h-40 overflow-hidden transition-all duration-400', {
              ['max-h-300']: showMore,
            })}
          >
            <ul className="flex flex-col gap-5" ref={descriptionRef}>
              {storyline.map((story, i) => (
                <li key={i}>
                  <ShowCaseItem text={story.text} />
                </li>
              ))}
            </ul>
          </div>
        )}
        {showcaseHeight >= 170 && (
          <button
            className="flex max-w-max cursor-pointer items-center gap-2 py-2 text-xl font-bold"
            onClick={() => setShowMore((prev) => !prev)}
          >
            <ArrowIcon className={cn('h-5 w-5 transition-transform duration-300', { ['rotate-180']: showMore })} />
            {showMore ? 'Show Less' : 'Show More'}
          </button>
        )}
      </>
    );
  };

  useLayoutEffect(() => {
    if (descriptionRef.current) {
      setShowcaseHeight(descriptionRef.current.scrollHeight);
    }
  }, [storyline]);

  return <section className="flex flex-col gap-5">{renderContent()}</section>;
};

export default FeatureShowcaseWidget;
