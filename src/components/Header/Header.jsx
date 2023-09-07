import {Link} from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import Logo from '../Logo/Logo';
import './Header.css';

function Header({isAuth})  {
  return (
    <header className={`header ${isAuth ? ''  : 'header_type_landing'}`}>
      <div className='header__container'>
        <Logo />
        {isAuth ?
        <Navigation />
        :
        <div className='header__auth'> 
          <Link to='/signup' className='header__signup button'>Регистрация</Link>
          <Link to='/signin' className='header__signin button'>Войти</Link>
        </div>
        }
      </div>
    </header>
  )
};

export default Header;