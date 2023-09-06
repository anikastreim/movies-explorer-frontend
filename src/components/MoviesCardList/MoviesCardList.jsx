import MoviesCard from '../MoviesCard/MoviesCard';
import {moviesData} from '../../utils/constants';
import './MoviesCardList.css';

function MoviesCardList({isSaved}) {
  return (
    <section className='movies-card-list'>
      <ul className='movies-card-list__container'>
        {moviesData.map((movie) => (
          <li key={movie.id}>
            <MoviesCard movie={movie} isSaved={isSaved} />
          </li>
        ))}
      </ul>
      {!isSaved && (
        <button type='button' aria-label='more' className='movies-card-list__button'>
          Ещё
        </button>
      )}
    </section>
  )
};

export default MoviesCardList;