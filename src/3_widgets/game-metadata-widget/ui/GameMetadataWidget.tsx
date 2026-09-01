import React from 'react';
import { MetadataItem } from '@entities/game';
import type { GameMetaDataWidgetProps } from '@widgets/game-metadata-widget/types.ts';
import QueryPlaceholder from '@shared/ui/query-placeholder/QueryPlaceholder.tsx';
import GameMetadataSkeleton from '@shared/ui/skeletons/game-metadata-skeleton/GameMetadataSkeleton.tsx';

const GameMetadataWidget: React.FC<GameMetaDataWidgetProps> = ({ gameMetadata, isLoading, isError, refetch }) => {
  const renderContent = () => {
    if (isLoading) return <GameMetadataSkeleton />;
    if (isError) return <QueryPlaceholder type="error" onClick={refetch} />;

    return (
      <>
        {gameMetadata.map((meta) => (
          <li className="border-t last:border-b" key={meta.subtitle}>
            <MetadataItem subtitle={meta.subtitle} value={meta.value} />
          </li>
        ))}
      </>
    );
  };

  return <ul className="flex flex-col">{renderContent()}</ul>;
};

export default GameMetadataWidget;
