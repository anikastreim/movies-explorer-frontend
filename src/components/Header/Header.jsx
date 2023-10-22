import { Link, useLocation } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import Logo from '../Logo/Logo';
import './Header.css';

function Header({loggedIn})  {
  const location = useLocation();
  return (
    <header className={`header ${location.pathname === '/' ? 'header_type_landing' : ''}`}>
      <div className='header__container'>
        <Logo />
        {loggedIn ?
        <Navigation />
        :
        <div className='header__auth'> 
          <Link to='/signup' className='header__signup link'>Регистрация</Link>
          <Link to='/signin' className='header__signin button'>Войти</Link>
        </div>
        }
      </div>
    </header>
  )
};

export default Header;