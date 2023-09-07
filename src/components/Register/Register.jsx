import {Link} from 'react-router-dom';
import Logo from '../Logo/Logo';
import './Register.css';

function Register() {
  return (
    <main>
      <section className='register'>
        <div className='register__container'>
          <Logo />
          <h1 className='register__title'>Добро пожаловать!</h1>
          <form className='register__form'>
            <label className='register__label'>
              Имя
              <input required type='text' name='name' placeholder='Имя' minLength='2' maxLength='30' className='register__input' />
            </label>
            <label className='register__label'>
              E-mail
              <input required type='email' name='email' placeholder='Email' className='register__input' />
            </label>
            <label className='register__label'>
              Пароль
              <input required type='password' name='password' placeholder='Пароль' minLength='6' maxLength='127' className='register__input' />
              <span className='register__error'>Что-то пошло не так...</span>
            </label>
            <div className='register__submit'>
              <button type='submit' aria-label='sign up' className='register__button button'>Зарегистрироваться</button>
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