import React from 'react';
import GamepadLoaderIcon from '@shared/assets/icons/gamepad-loader.svg?react';

const Loader: React.FC = () => {
  return <GamepadLoaderIcon className="animate-wobble absolute top-1/2 left-1/2 h-60 w-60 -translate-1/2" />;
};

export default Loader;
