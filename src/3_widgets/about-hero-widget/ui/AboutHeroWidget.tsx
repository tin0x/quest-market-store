import React from 'react';
import Container from '@shared/ui/container/Container.tsx';
import Button from '@shared/ui/button/Button.tsx';
import heroWallpaper from '@shared/assets/images/wallpaper-1.webp';

const AboutHeroWidget: React.FC = () => {
  return (
    <section>
      <Container>
        <div
          className="flex h-132.5 flex-col items-center gap-8 rounded-md bg-cover bg-no-repeat py-30"
          style={{ backgroundImage: `url(${heroWallpaper})` }}
        >
          <h1 className="text-[60px] font-bold">About Us</h1>
          <div className="w-1/2 text-center text-[22px]">
            <p>
              Quest Market is dedicated to bring you the best games from around the world. Our mission is to provide an
              unparallel gaming platform where your passion for play can thrive
            </p>
          </div>
          <Button
            className="rounded-lg border-white px-10 py-3 text-xl font-normal"
            type="button"
            variant="transparent"
            text="Browse Games"
            asLink
            pathTo="/browse"
          />
        </div>
      </Container>
    </section>
  );
};

export default AboutHeroWidget;
