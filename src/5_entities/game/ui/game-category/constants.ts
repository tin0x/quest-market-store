import actionHero from '@shared/assets/images/action-hero.webp';
import actionCover from '@shared/assets/images/action-cover.webp';
import adventureHero from '@shared/assets/images/adventure-hero.webp';
import adventureCover from '@shared/assets/images/adventure-cover.webp';
import arcadeHero from '@shared/assets/images/arcade-hero.webp';
import arcadeCover from '@shared/assets/images/arcade-cover.webp';
import fpsHero from '@shared/assets/images/fps-hero.webp';
import fpsCover from '@shared/assets/images/fps-cover.webp';
import fightingHero from '@shared/assets/images/fighting-hero.webp';
import fightingCover from '@shared/assets/images/fighting-cover.webp';
import rpgHero from '@shared/assets/images/rpg-hero.webp';
import rpgCover from '@shared/assets/images/rpg-cover.webp';
import singleHero from '@shared/assets/images/single-hero.webp';
import singleCover from '@shared/assets/images/single-cover.webp';
import vrHero from '@shared/assets/images/vr-hero.webp';
import vrCover from '@shared/assets/images/vr-cover.webp';

export const gamesCategories = [
  {
    heroImage: actionHero,
    cover: actionCover,
    genre: 'Action',
    pathTo: '/browse',
  },
  {
    heroImage: adventureHero,
    cover: adventureCover,
    genre: 'Adventure',
    pathTo: '/browse',
  },
  {
    heroImage: arcadeHero,
    cover: arcadeCover,
    genre: 'Arcade',
    pathTo: '/browse',
  },
  {
    heroImage: fpsHero,
    cover: fpsCover,
    genre: 'FPS',
    pathTo: '/browse',
  },
  {
    heroImage: fightingHero,
    cover: fightingCover,
    genre: 'Fighting',
    pathTo: '/browse',
  },
  {
    heroImage: rpgHero,
    cover: rpgCover,
    genre: 'RPG',
    pathTo: '/browse',
  },
  {
    heroImage: singleHero,
    cover: singleCover,
    genre: 'Single-Player',
    pathTo: '/browse',
  },
  {
    heroImage: vrHero,
    cover: vrCover,
    genre: 'VR',
    pathTo: '/browse',
  },
];
