import useFormWithValidation from '../../hooks/useFormWithValidation';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';
import { useEffect, useState } from 'react';

function SearchForm({ onSubmit, onChange, isShortMovie, pageType }) {
  const { values, handleChange, errors, isValid } = useFormWithValidation();
  const [lastSearchQuery, setLastSearchQuery] = useState('');

  useEffect(() => {
    const storedSearchQuery = localStorage.getItem(`${pageType}_searchQuery`);
    if (pageType === 'Movies') {
      setLastSearchQuery(storedSearchQuery);
    }
  }, [pageType]);

  useEffect(() => {
    if (pageType === 'SavedMovies') {
      setLastSearchQuery('');
      localStorage.removeItem(`${pageType}_searchQuery`);
    }
  }, [pageType]);

  function handleSearch(e) {
    e.preventDefault();
    onSubmit(values.search, isShortMovie);
    localStorage.setItem(`${pageType}_searchQuery`, values.search);
    setLastSearchQuery(values.search);
  }

  return (
    <section className='search-form'>
      <form className='search-form__form' onSubmit={handleSearch} name='search'>
        <div className='search-form__container'>
          <input value={values.search || ''} onChange={handleChange} required type='text' name='search' placeholder='Фильм' className='search-form__input' />
          <button type='submit' aria-label='search' className='search-form__button button' disabled={!isValid} />
        </div>
        <span className="search-form__error">{errors.search ? 'Введите ключевое слово' : ''}</span>
        <FilterCheckbox onChange={onChange} value={isShortMovie} />
      </form>
    </section>
  );
}

export default SearchForm;