import { type RefObject, useEffect } from 'react';

export const useClickOutside = (ref: RefObject<null | HTMLElement>, callBack: () => void) => {
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!ref.current) return;

      const target = e.target as Node;

      if (!ref.current.contains(target)) {
        callBack();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [callBack, ref]);
};
