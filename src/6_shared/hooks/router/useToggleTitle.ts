import { useEffect } from 'react';

export const useToggleTitle = (title: string) => {
  useEffect(() => {
    document.title = `Quest Market | ${title}`;
  }, [title]);
};
