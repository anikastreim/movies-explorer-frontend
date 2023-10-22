import { useLocation } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import './MoviesCard.css';

function MoviesCard({ movie, onSaveMovie, onDeleteMovie }) { 
  const location = useLocation();
  const isSavedMoviesPage = location.pathname === '/saved-movies';
  const currentUser = useContext(CurrentUserContext);
  const { duration, trailerLink, image, nameRU } = movie;
  const imgLink = isSavedMoviesPage ? image : `https://api.nomoreparties.co${image.url}`;
  const convertDuration = () => {
    const minutes = duration % 60;
    const hours = Math.floor(duration / 60);
    if (hours > 0) {
      return `${hours}ч ${minutes}м`
    } else if (hours > 0) {
      return `${hours}ч`
    } else {
      return `${minutes}м`
    }
  };

  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const savedMovies = JSON.parse(localStorage.getItem(`savedMovies_${currentUser._id}`)) || [];
    const isMovieSaved = savedMovies.some((savedMovie) => savedMovie.movieId === movie.id);
    setIsSaved(isMovieSaved);
  }, [movie, currentUser._id]);

  function handleSaveMovie(e) {
    e.preventDefault();
    onSaveMovie(movie);
    setIsSaved(!isSaved);

    const savedMovies = JSON.parse(localStorage.getItem(`savedMovies_${currentUser._id}`)) || [];
    if (isSaved) {
      const updatedSavedMovies = savedMovies.filter((savedMovie) => savedMovie.movieId !== movie.id);
      localStorage.setItem(`savedMovies_${currentUser._id}`, JSON.stringify(updatedSavedMovies));
    } else {
      savedMovies.push({ movieId: movie.id });
      localStorage.setItem(`savedMovies_${currentUser._id}`, JSON.stringify(savedMovies));
    }
  }

  function handleDeleteMovie(e) {
    e.preventDefault();
    const savedMovies = JSON.parse(localStorage.getItem(`savedMovies_${currentUser._id}`)) || [];
    const updatedSavedMovies = savedMovies.filter((savedMovie) => savedMovie.movieId !== movie.movieId);
    localStorage.setItem(`savedMovies_${currentUser._id}`, JSON.stringify(updatedSavedMovies));
    onDeleteMovie(movie._id);
    setIsSaved(false);
  }
  
  return (
    <article className='movies-card'>
      <a className='movies-card__link' href={trailerLink} target="_blank" rel="noreferrer">
        <img className='movies-card__image' src={imgLink} alt={nameRU} />
      </a>
      <div className='movies-card__constainer'>
        <div className='movies-card__description'>
          <h2 className='movies-card__title'>{nameRU}</h2>
          {isSavedMoviesPage
            ?
            <button type='button' aria-label='delete' className='movies-card__delete button' onClick={handleDeleteMovie} />
            :
            <button type='button' aria-label='save' className={`movies-card__save ${isSaved ? 'movies-card__save_active' : ''} button`} onClick={handleSaveMovie}/>
          }
        </div>
        <p className='movies-card__duration'>{convertDuration()}</p>
      </div>
    </article>
  )
};

export default MoviesCard;