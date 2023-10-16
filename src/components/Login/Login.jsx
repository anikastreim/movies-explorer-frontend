import {Link} from 'react-router-dom';
import useFormWithValidation from '../../hooks/useFormWithValidation';
import Logo from '../Logo/Logo';
import './Login.css';

function Login({ handleLogin }) {
  const { values, handleChange, errors, isValid } = useFormWithValidation();

  function onLogin(e) {
    e.preventDefault();
    handleLogin(values);
  };

  return (
    <main>
      <section className='login'>
        <div className='login__container'>
          <Logo />
          <h1 className='login__title'>Рады видеть!</h1>
          <form onSubmit={onLogin} className='login__form'>
            <label className='login__label'>
              E-mail
              <input onChange={handleChange} value={values.email} required type='email' name='email' placeholder='Email' className='login__input' />
            </label>
            <label className='login__label'>
              Пароль
              <input onChange={handleChange} value={values.password} required type='password' name='password' placeholder='Пароль' minLength='6' maxLength='127' className='login__input' />
            </label>
            <div className='login__submit'>
              <span className={`register__error ${errors.email || errors.password ? 'register__error_visible' : ''}`}>Неправильная почта или пароль</span>
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