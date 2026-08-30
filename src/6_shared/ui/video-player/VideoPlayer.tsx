import React, { useState } from 'react';
import PlayIcon from '@shared/assets/icons/play.svg?react';
import type { VideoPlayerProps } from '@shared/ui/video-player/types.ts';
import { cn } from '@shared/lib/utils/cn.ts';

const VideoPlayer: React.FC<VideoPlayerProps> = ({ className, videoId, cover }) => {
  const [showVideoPlayer, setShowVideoPlayer] = useState(false);

  const renderContent = () => {
    if (!showVideoPlayer) {
      return (
        <div
          className="flex h-full w-full items-center justify-center rounded-md bg-cover bg-no-repeat"
          style={cover ? { backgroundImage: `url(${cover})` } : { backgroundColor: 'black' }}
        >
          <button
            className="rounded-circle cursor-pointer bg-black/50 transition-transform hover:scale-95"
            type="button"
            onClick={() => setShowVideoPlayer(true)}
          >
            <PlayIcon className="text-text-primary h-60 w-60 px-5 py-3" />
          </button>
        </div>
      );
    }

    return (
      <iframe
        className="h-full w-full rounded-md"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    );
  };

  return <div className={cn('aspect-video', className)}>{renderContent()}</div>;
};

export default VideoPlayer;
