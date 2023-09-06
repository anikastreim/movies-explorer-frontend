import { useState } from 'react';
import Header from '../Header/Header';
import './Profile.css';

function Profile() {
    const [isEdit, setIsEdit] = useState(false);

    function handleEdit() {
      setIsEdit(!isEdit);
    }

  return (
    <>
    <Header isAuth={true} />
      <main className='profile'>
        <div className='profile__container'>
          <h1 className='profile__title'>Привет, Юлия!</h1>
          <form className='profile__form'>
            <label className='profile__label'>
              Имя
              <input type='text' className='profile__input' required minLength='2' maxLength='30' disabled={!isEdit} placeholder='Введите имя:' value='Юлия' />
            </label>
            <label className='profile__label'>
              E-mail
              <input type='text' className='profile__input' required value='pochta@yandex.ru' placeholder='Введите E-mail:' disabled />
            </label>
              <div className='profile__buttons'>
              {isEdit
                ?
                <>
                  <p className='profile__error'>При обновлении профиля произошла ошибка.</p>
                  <button className='profile__save' onClick={handleEdit} type='submit' disabled>Сохранить</button>
                </>
                :
                <>
                  <button className='profile__edit' onClick={handleEdit} type='button'>Редактировать</button>
                  <button className='profile__signout' type='button'>Выйти из аккаунта</button>
                </>
              }
            </div>
          </form>
        </div>
      </main>
    </>
  )
};

export default Profile;