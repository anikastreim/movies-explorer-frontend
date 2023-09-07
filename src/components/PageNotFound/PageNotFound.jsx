import { useNavigate } from 'react-router-dom';
import './PageNotFound.css';

function PageNotFound() {
  const navigate = useNavigate();
  function goBack() {
    navigate(-1);
  }
  return (
    <main>
      <section className='not-found'>
        <div className='not-found__container'>
          <h1 className='not-found__title'>404</h1>
          <p className='not-found__subtitle'>Страница не найдена</p>
        </div>
	    <button className='not-found__button' type='button' onClick={goBack}>Назад</button>	
      </section>
    </main>
  )
};

export default PageNotFound;