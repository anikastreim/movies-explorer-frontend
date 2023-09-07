import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

function SearchForm() {
  return (
    <section className='search-form'>
      <form className='search-form__form' name='search'>
        <div className='search-form__container'>
          <input required type='text' name='search' placeholder='Фильм' className='search-form__input' />
          <button type='submit' aria-label='search' className='search-form__button button' />
        </div>
        <FilterCheckbox />
      </form>
    </section>
  )
};

export default SearchForm;