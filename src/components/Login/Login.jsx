import { useState } from 'react';
import {Link} from 'react-router-dom';
import useFormWithValidation from '../../hooks/useFormWithValidation';
import Logo from '../Logo/Logo';
import './Login.css';

function Login({ handleLogin }) {
  const { values, handleChange, errors, isValid } = useFormWithValidation();
  const [errorMessage, setErrorMessage] = useState('');

  function handleInputFocus() {
    setErrorMessage('');
  }

  function onLogin(e) {
    e.preventDefault();
    const success = handleLogin(values);
    if (success) {
      setErrorMessage('');
    } else {
      setErrorMessage('Неправильная почта или пароль');
    }
  }

  return (
    <main>
      <section className='login'>
        <div className='login__container'>
          <Logo />
          <h1 className='login__title'>Рады видеть!</h1>
          <form onSubmit={onLogin} className='login__form'>
            <label className='login__label'>
              E-mail
              <input onChange={handleChange} onFocus={handleInputFocus} value={values.email} required type='email' name='email' placeholder='Email' className='login__input' />
              <span className={`login__error ${errors.email ? 'login__error_visible' : ''}`}>{errors.email}</span>
            </label>
            <label className='login__label'>
              Пароль
              <input onChange={handleChange} onFocus={handleInputFocus} value={values.password} required type='password' name='password' placeholder='Пароль' minLength='6' maxLength='127' className='login__input' />
              <span className={`login__error ${errors.password ? 'login__error_visible' : ''}`}>{errors.password}</span>
            </label>
            <div className='login__submit'>
            <span className={`login__error ${errorMessage ? 'login__error_visible' : ''}`}>{errorMessage}</span>
              <button type='submit' aria-label='sign in' className='login__button button' disabled={!isValid}>Войти</button>
              <div className='login__signin'>
                <p className='login__text'>Ещё не зарегистрированы? <Link to='/signup' className='login__link link'>Регистрация</Link></p>
              </div>
            </div>
          </form>
        </div>
      </section>
    </main>
  )
};

export default Login;