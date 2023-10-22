import './FilterCheckbox.css';

function FilterCheckbox({ onChange, value }) {
  return (
    <label className='filter-checkbox button'>
      <input checked={value} onChange={onChange} type='checkbox' className='filter-checkbox__tumbler' />
      <span className='filter-checkbox__text'>Короткометражки</span>
    </label>
  )
};

export default FilterCheckbox;