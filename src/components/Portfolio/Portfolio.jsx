import './Portfolio.css';

function Portfolio() {
  return (
    <section className='portfolio'>
      <h4 className='portfolio__title'>Портфолио</h4>
      <ul className='portfolio__links'>
        <li className='portfolio__item'>
          <a className='portfolio__link link' href='https://github.com/anikastreim/how-to-learn' target='_blank' rel='noreferrer'>Статичный сайт<span className='portfolio__icon'></span></a>
        </li>
        <li className='portfolio__item'>
          <a className='portfolio__link link' href='https://github.com/anikastreim/russian-travel' target='_blank' rel='noreferrer'>Адаптивный сайт<span className='portfolio__icon'></span></a>
        </li>
        <li className='portfolio__item'>
          <a className='portfolio__link link' href='https://github.com/anikastreim/react-mesto-api-full-gha' target='_blank' rel='noreferrer'>Одностраничное приложение<span className='portfolio__icon'></span></a>
        </li>
      </ul>
    </section>
  )
};

export default Portfolio;