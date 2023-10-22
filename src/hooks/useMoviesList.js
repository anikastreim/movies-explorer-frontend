import { useState, useEffect } from 'react';

function useMoviesList() {
  const [cardsPerRow, setCardsPerRow] = useState(3);
  const [cardsPerColumn, setCardsPerColumn] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1280) {
        setCardsPerRow(4);
        setCardsPerColumn(3);
      } else if (screenWidth >= 768) {
        setCardsPerRow(4);
        setCardsPerColumn(2);
      } else if (screenWidth >= 320) {
        setCardsPerRow(5);
        setCardsPerColumn(1);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return { cardsPerRow, cardsPerColumn };
}

export default useMoviesList;