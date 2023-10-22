import { useEffect, useState } from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import { moviesApi } from '../../utils/MoviesApi';
import Preloader from '../Preloader/Preloader';

function Movies({  onDeleteMovie, onSaveMovie, savedMovies, loggedIn }) {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isShortMovie, setIsShortMovie] = useState(() => {
    const storedValue = JSON.parse(localStorage.getItem('isShortMovie'));
    return storedValue !== null ? storedValue : false;
  });
  const [showResults, setShowResults] = useState(false);
  const [searched, setSearched] = useState(false);
  
  useEffect(() => {
    const lastSearchQuery = localStorage.getItem('searchQuery');
    const lastIsShortMovie = JSON.parse(localStorage.getItem('isShortMovie'));
    const lastFilteredMovies = JSON.parse(localStorage.getItem('filteredMovies'));

    if (lastSearchQuery) {
      handleSearchMovies(lastSearchQuery, lastIsShortMovie, lastFilteredMovies);
    }
  }, []);

  useEffect(() => {
    if (searched) {
      handleFilterMovies(movies, localStorage.getItem('searchQuery'));
      setShowResults(true);
    }
  }, [movies, isShortMovie, searched]);

  function handleCheckbox() {
    setIsShortMovie(isShortMovie => {
      const newValue = !isShortMovie;
      localStorage.setItem('isShortMovie', JSON.stringify(newValue));
      return newValue;
    });
  }

  function handleFilterMovies(movies, movieSearch) {
    const filteredCardsArray = movies.filter(movie => {
      return (movie.nameEN.toLowerCase().includes(movieSearch.toLowerCase()) || movie.nameRU.toLowerCase().includes(movieSearch.toLowerCase()))
        && (isShortMovie ? movie.duration < 41 : movie.duration > 0);
    });
    localStorage.setItem('filteredMovies', JSON.stringify(filteredCardsArray));
    setFilteredMovies(filteredCardsArray);
  }

  async function handleSearchMovies(movieSearch) {
    setIsLoading(true);
    setSearched(true);
    try {
      if (movies.length === 0) {
        const movies = await moviesApi.getInitialMovies();
        setMovies(movies);
        localStorage.setItem('allMovies', JSON.stringify(movies));
      }
      handleFilterMovies(movies, movieSearch);
      localStorage.setItem('searchQuery', movieSearch);
      localStorage.setItem('isShortMovie', isShortMovie);
    } catch (err) {
      setMessage('Ошибка при загрузке данных');
    }
    setIsLoading(false);
  }
  
  return (
    <>
      <Header loggedIn={loggedIn} />
      <main>
        <SearchForm onSubmit={handleSearchMovies} onChange={handleCheckbox} isShortMovie={isShortMovie} pageType="Movies" />
        {isLoading ? (
          <Preloader />
        ) : showResults ? (
          <MoviesCardList movies={filteredMovies} onDeleteMovie={onDeleteMovie} onSaveMovie={onSaveMovie} savedMovies={savedMovies} />
        ) : (
          null
        )}
      </main>
      <Footer />
    </>
  )
};

export default Movies;