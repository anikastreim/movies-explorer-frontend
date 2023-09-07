import { useState } from 'react';
import {Link} from 'react-router-dom';
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
      <main>
        <section className='profile'>
          <div className='profile__container'>
            <h1 className='profile__title'>Привет, Юлия!</h1>
            <form className='profile__form'>
              <label className='profile__label'>
                Имя
                <input type='text' className='profile__input' required minLength='2' maxLength='30' disabled={!isEdit} placeholder='Введите имя:' value='Юлия' />
              </label>
              <label className='profile__label'>
                E-mail
                <input type='text' className='profile__input' required disabled={!isEdit} placeholder='Введите E-mail:' value='pochta@yandex.ru' />
              </label>
                <div className='profile__buttons'>
                {isEdit
                  ?
                  <>
                    <p className='profile__error'>При обновлении профиля произошла ошибка.</p>
                    <button className='profile__save button' onClick={handleEdit} type='submit' disabled>Сохранить</button>
                  </>
                  :
                  <>
                    <button className='profile__edit button' onClick={handleEdit} type='submit'>Редактировать</button>
                    <Link to='/' className='profile__signout button'>Выйти из аккаунта</Link>
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