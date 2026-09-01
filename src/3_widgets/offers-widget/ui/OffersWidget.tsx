import React from 'react';
import Container from '@shared/ui/container/Container.tsx';
import libraryWallpaper from '@shared/assets/images/wallpaper-2.webp';
import filledCartWallpaper from '@shared/assets/images/wallpaper-3.webp';
import gameWallpaper from '@shared/assets/images/wallpaper-4.webp';
import HeadingDescription from '@shared/ui/heading-description/ui/HeadingDescription.tsx';

const OffersWidget: React.FC = () => {
  return (
    <section>
      <Container className="flex flex-col gap-10">
        <h2 className="text-center text-[60px] font-bold">What We Offer</h2>
        <div className="flex flex-col gap-20">
          <div
            className="relative h-125 overflow-hidden rounded-md bg-cover bg-no-repeat px-20 py-32.5"
            style={{ backgroundImage: `url(${libraryWallpaper})` }}
          >
            <div className="absolute inset-0 bg-linear-to-r from-[#070f2b] via-[#070f2b]/95 to-transparent"></div>
            <div className="relative z-10 flex h-full flex-col justify-center p-8">
              <HeadingDescription
                className="w-1/2"
                title="Massive Game Library"
                text="Dive into a vast collection of thousands of titles across every genre and platform. From action-packed shooters and immersive RPGs to relaxing puzzle games, our library grows every week to bring you the latest hits and timeless classics. Whether you’re a casual gamer or a hardcore enthusiast, you’ll always find something new to play."
              />
            </div>
          </div>
          <div
            className="relative h-125 overflow-hidden rounded-md bg-cover bg-no-repeat px-20 py-32.5"
            style={{ backgroundImage: `url(${filledCartWallpaper})` }}
          >
            <div className="absolute inset-0 bg-linear-to-l from-[#070f2b] via-[#070f2b]/95 to-transparent"></div>
            <div className="relative z-10 flex h-full flex-col items-end justify-center p-8">
              <HeadingDescription
                className="w-1/2 text-right"
                title="Exclusive Deals"
                text=" Unlock offers you won’t find anywhere else. We partner directly with publishers to bring you incredible discounts, limited-time bundles, and exclusive pre-order bonuses. With deals dropping regularly, you’ll always have a reason to check back and grab your next favorite game at the best price."
              />
            </div>
          </div>
          <div
            className="relative h-125 overflow-hidden rounded-md bg-cover bg-no-repeat px-20 py-32.5"
            style={{ backgroundImage: `url(${gameWallpaper})` }}
          >
            <div className="absolute inset-0 bg-linear-to-r from-[#070f2b] via-[#070f2b]/95 to-transparent"></div>
            <div className="relative z-10 flex h-full flex-col justify-center p-8">
              <HeadingDescription
                className="w-1/2"
                title="Gamers First"
                text="Our mission is to put players at the heart of everything we do. From lightning-fast downloads to responsive customer support, every feature is designed with your gaming experience in mind. We listen to our community, adapt to your feedback, and constantly improve to make sure your journey is smooth, exciting, and rewarding."
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default OffersWidget;
