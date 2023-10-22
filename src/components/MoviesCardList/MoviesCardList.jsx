import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';
import useMoviesList from '../../hooks/useMoviesList';

function MoviesCardList({ movies, onDeleteMovie, onSaveMovie }) {
  const location = useLocation();
  const isSavedMoviesPage = location.pathname === '/saved-movies';
  const { cardsPerRow, cardsPerColumn } = useMoviesList();
  const initialVisibleCards = cardsPerRow * cardsPerColumn;
  const [visibleCards, setVisibleCards] = useState(initialVisibleCards);

  useEffect(() => {
    setVisibleCards(initialVisibleCards);
    }, [initialVisibleCards]);
  
  useEffect(() => {
    if (isSavedMoviesPage) {
      setVisibleCards(movies.length);
    }
  }, [movies.length, isSavedMoviesPage, visibleCards]);

  function handleShowMore() {
    if (window.innerWidth >= 320 && window.innerWidth < 768 && !isSavedMoviesPage) {
      setVisibleCards((prevVisibleCards) => prevVisibleCards + cardsPerColumn * 2);
    } else {
      setVisibleCards((prevVisibleCards) => prevVisibleCards + cardsPerColumn);
    }
  }

  return (
    <section className='movies-card-list'>
      {movies.length !== 0 ? (
        <ul className='movies-card-list__container'>
          {movies.slice(0, visibleCards).map((movie) => (
            <li key={isSavedMoviesPage ? movie._id : movie.id}>
              <MoviesCard movie={movie} isSavedMoviesPage={isSavedMoviesPage} onDeleteMovie={onDeleteMovie} onSaveMovie={onSaveMovie} />
            </li>
          ))}
        </ul>
      ) : (
        <p className='movies-card-list__error'>Ничего не найдено</p>
      )}
      {!isSavedMoviesPage && visibleCards < movies.length && (
        <button type='button' aria-label='more' className='movies-card-list__button button' onClick={handleShowMore}>Ещё</button>
      )}
    </section>
  );
}

export default MoviesCardList;