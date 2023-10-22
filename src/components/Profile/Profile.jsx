import { useContext, useState, useEffect } from 'react';
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import useFormWithValidation from '../../hooks/useFormWithValidation';
import Header from '../Header/Header';
import './Profile.css';

function Profile({ onSignOut, onSubmit, loggedIn }) {
  const { values, handleChange, errors, isValid, setValues } = useFormWithValidation();
  const [isEdit, setIsEdit] = useState(false);
  const [initialValues, setInitialValues] = useState({});
  const [isDataChanged, setIsDataChanged] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    setValues({
      name: currentUser.name,
      email: currentUser.email,
    });
    setInitialValues({
      name: currentUser.name,
      email: currentUser.email,
    });
  }, [currentUser]);

  useEffect(() => {
    if (initialValues && JSON.stringify(values) !== JSON.stringify(initialValues)) {
      setIsDataChanged(true);
    } else {
      setIsDataChanged(false);
    }
  }, [values, initialValues]);

  function handleFieldChange(e) {
    handleChange(e);
    setIsSuccess(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(values);
    setInitialValues(values);
    setIsDataChanged(false);
    setIsSuccess(true);
  }

  return (
    <>
    <Header loggedIn={loggedIn} />
      <main>
        <section className='profile'>
          <div className='profile__container'>
            <h1 className='profile__title'>Привет, {currentUser.name}!</h1>
            <form onSubmit={handleSubmit} className='profile__form'>
              <label className='profile__label'>
                Имя
                <input onChange={handleFieldChange} name='name' value={values.name ?? currentUser.name} type='text' className='profile__input' required minLength='2' maxLength='30' disabled={!isEdit} placeholder='Введите имя:' />
              </label>
              <label className='profile__label'>
                E-mail
                <input onChange={handleFieldChange} name='email' value={values.email ?? currentUser.email} type='text' className='profile__input' required disabled={!isEdit} placeholder='Введите E-mail:' />
              </label>
                <div className='profile__buttons'>
                {isEdit
                  ?
                  <>
                    {isSuccess ? <span className='profile__message'>Данные профиля обновлены</span> : null}
                    <button className='profile__save button' type='submit' disabled={!isDataChanged || !isValid}>Сохранить</button>
                  </>
                  :
                  <>
                    <button onClick={() => setIsEdit(true)} className='profile__edit button' type='submit'>Редактировать</button>
                    <button onClick={onSignOut} className='profile__signout button' type='submit'>Выйти из аккаунта</button>
                  </>
                }
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  )
};

export default Profile;