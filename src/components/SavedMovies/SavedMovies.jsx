import { useState, useEffect } from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

function SavedMovies({ savedMovies, onDeleteMovie, loggedIn }) {
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isShortMovie, setIsShortMovie] = useState(false);

  useEffect(() => {
    handleSearchMovies(searchQuery);
  }, [savedMovies, isShortMovie]);

  function handleSearchMovies(movieSearch) {
    setSearchQuery(movieSearch);
    const filteredCardsArray = savedMovies.filter(movie => {
      return (movie.nameEN.toLowerCase().includes(movieSearch.toLowerCase()) || movie.nameRU.toLowerCase().includes(movieSearch.toLowerCase()))
        && (isShortMovie ? movie.duration < 41 : true);
    });
    setFilteredMovies(filteredCardsArray);
  }

  function handleCheckbox() {
    setIsShortMovie(!isShortMovie);
  }

  return (
    <>
      <Header loggedIn={loggedIn} />
      <main>
        <SearchForm onSubmit={handleSearchMovies} onChange={handleCheckbox} isShortMovie={isShortMovie} />
        {filteredMovies.length > 0 ? (
          <MoviesCardList movies={filteredMovies} onDeleteMovie={onDeleteMovie} isShortMovie={isShortMovie} />
        ) : null}
      </main>
      <Footer />
    </>
  )
}

export default SavedMovies;