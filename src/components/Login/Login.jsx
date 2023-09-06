import {Link} from 'react-router-dom';
import Logo from '../Logo/Logo';
import './Login.css';

function Login() {
  return (
    <main className='login'>
      <div className='login__container'>
        <Logo />
        <h1 className='login__title'>Рады видеть!</h1>
        <form className='login__form'>
          <label className='login__label'>
            E-mail
            <input required type='email' name='email' placeholder='Email' className='login__input' />
          </label>
          <label className='login__label'>
            Пароль
            <input required type='password' name='password' placeholder='Пароль' minLength='6' className='login__input' />
          </label>
          <div className='login__submit'>
            <button type='submit' aria-label='sign in' className='login__button'>Войти</button>
            <div className='login__signin'>
              <p className='login__text'>Ещё не зарегистрированы? <Link to='/signup' className='login__link'>Регистрация</Link></p>
            </div>
          </div>
        </form>
      </div>
    </main>
  )
};

export default Login;