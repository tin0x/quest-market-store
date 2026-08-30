import React, { useState } from 'react';
import Slider from '@shared/ui/slider/Slider.tsx';
import VideoPlayer from '@shared/ui/video-player/VideoPlayer.tsx';
import GallerySlideItem from '@entities/game/ui/gallery-slide-item/GallerySlideItem.tsx';
import type { GallerySliderWidgetProps } from '@widgets/gallery-slider-widget/types.ts';

const GallerySliderWidget: React.FC<GallerySliderWidgetProps> = ({ cover, videoId, screenshots }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  if (!videoId || !screenshots.length) return null;

  const gallery = [
    ...(videoId ? [{ type: 'video', src: videoId }] : []),
    ...screenshots.map((screenshot) => ({ type: 'image', src: screenshot })),
  ];
  const activeSlide = gallery[currentIndex];
  const coverStub = cover ?? '';

  return (
    <div className="flex flex-col gap-7">
      <div className="aspect-video w-full overflow-hidden rounded-md">
        {activeSlide.type === 'image' ? (
          <GallerySlideItem src={activeSlide.src} activeSlide />
        ) : (
          <VideoPlayer videoId={activeSlide.src} cover={cover} />
        )}
      </div>
      <Slider options={{ dragFree: true }}>
        {gallery.map((slide, index) => (
          <li
            key={slide.src}
            className="ml-10 min-w-0 flex-[0_0_calc(25%-0.75rem)] cursor-grab first:ml-0 active:cursor-grabbing"
          >
            <button className="w-full" onClick={() => setCurrentIndex(index)}>
              <GallerySlideItem
                className="aspect-video"
                src={slide.type === 'image' ? slide.src : coverStub}
                activeSlide={index === currentIndex}
                isVideo={slide.type === 'video'}
              />
            </button>
          </li>
        ))}
      </Slider>
    </div>
  );
};

export default GallerySliderWidget;
