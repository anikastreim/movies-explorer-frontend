import {NavLink} from 'react-router-dom';
import {useState} from 'react';
import burger from '../../images/burger.svg';
import close from '../../images/close.svg';
import './Navigation.css';

function Navigation() {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  function handleOpenMenu() {
    setIsMenuOpened(!isMenuOpened);
  };
  return (
    <div className='navigation'>
      <button type='button' className='navigation__burger button' onClick={handleOpenMenu}>
        {isMenuOpened ?
          <img className='navigation__close' src={close} alt='cross' />
        :  
          <img className='navigation__menu' src={burger} alt='burger-menu' />
        }
      </button>
      <nav className={`navigation__container ${isMenuOpened ? 'navigation__container_opened' : ''}`}>
        <ul className={`navigation__links ${isMenuOpened ? 'navigation__links_opened' : ''}`}>
          <li className='navigation__links-item navigation__links-item_type_main'>
            <NavLink to='/' className={({isActive}) => `navigation__link link ${isActive ? 'navigation__link_active' : ''}`}>
              Главная
            </NavLink>
          </li>
          <li className='navigation__links-item'>
            <NavLink to='/movies' className={({isActive}) => `navigation__link link ${isActive ? 'navigation__link_active' : ''}`}>
              Фильмы
            </NavLink>
          </li>
          <li className='navigation__links-item'>
            <NavLink to='/saved-movies' className={({isActive}) => `navigation__link link ${isActive ? 'navigation__link_active' : ''}`}>
              Сохранённые фильмы
            </NavLink>
          </li>
          <li className='navigation__links-item'>
            <NavLink to='/profile' className='navigation__link link navigation__link_type_profile'>
              Аккаунт
              <span className='navigation__icon' />
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;