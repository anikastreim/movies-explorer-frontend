import {Link} from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import Logo from '../Logo/Logo';
import './Header.css';

function Header({isAuth})  {
  return (
    <header className={`header ${isAuth ? ''  : 'header__landing'}`}>
      <div className='header__container'>
        <Logo />
        {isAuth ?
        <Navigation />
        :
        <div className='header__auth'> 
          <Link to='/signup' className='header__signup'>Регистрация</Link>
          <Link to='/signin'><button className='header__signin'>Войти</button></Link>
        </div>
        }
      </div>
    </header>
  )
};

export default Header;