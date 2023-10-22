import { useState } from 'react';
import { Link } from 'react-router-dom'; 
import useFormWithValidation from '../../hooks/useFormWithValidation';
import Logo from '../Logo/Logo';
import './Register.css';

function Register({ handleRegister }) {
  const { values, handleChange, errors, isValid } = useFormWithValidation();
  const [errorMessage, setErrorMessage] = useState('');

  function handleInputFocus() {
    setErrorMessage('');
  }

  async function onRegister(e) {
    e.preventDefault();
    const success = await handleRegister(values);
    if (success) {
      setErrorMessage('');
    } else {
      setErrorMessage('Пользователь с таким email уже зарегистрирован');
    }
  }

  return (
    <main>
      <section className='register'>
        <div className='register__container'>
          <Logo />
          <h1 className='register__title'>Добро пожаловать!</h1>
          <form onSubmit={onRegister} className='register__form'>
            <label className='register__label'>
              Имя
              <input onChange={handleChange} onFocus={handleInputFocus} value={values.name} required type='text' name='name' placeholder='Имя' minLength='2' maxLength='30' className='register__input' />
              <span className={`register__error ${errors.name ? 'register__error_visible' : ''}`}>{errors.name}</span>
            </label>
            <label className='register__label'>
              E-mail
              <input onChange={handleChange} onFocus={handleInputFocus} value={values.email} pattern='^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$' required type='email' name='email' placeholder='Email' className='register__input' />
              <span className={`register__error ${errors.email ? 'register__error_visible' : ''}`}>{errors.email}</span>
            </label>
            <label className='register__label'>
              Пароль
              <input onChange={handleChange} onFocus={handleInputFocus} value={values.password} required type='password' name='password' placeholder='Пароль' minLength='6' maxLength='127' className='register__input' />
              <span className={`register__error ${errors.password ? 'register__error_visible' : ''}`}>{errors.password}</span>
            </label>
            <div className='register__submit'>
              <span className={`register__error ${errorMessage ? 'register__error_visible' : ''}`}>{errorMessage}</span>
              <button type='submit' aria-label='sign up' className='register__button button' disabled={!isValid}>Зарегистрироваться</button>
              <div className='register__signin'>
                <p className='register__text'>Уже зарегистрированы? <Link to='/signin' className='register__link link'>Войти</Link></p>
              </div>
            </div>
          </form>
        </div>
      </section>
    </main>
  )
};

export default Register;