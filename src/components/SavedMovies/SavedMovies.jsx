import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

function SavedMovies() {
  return (
    <>
      <Header isAuth={true} />
      <main>
        <SearchForm />
        <MoviesCardList isSaved={true} />
      </main>
      <Footer />
    </>
  )
};

export default SavedMovies;