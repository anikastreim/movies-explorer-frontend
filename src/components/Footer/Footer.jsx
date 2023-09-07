import './Footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <p className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className='footer__info'>
        <p className='footer__copyright'>&copy; 2023</p>
        <nav className='footer__nav'>
          <ul className='footer__links'>
            <li>
              <a className='footer__link link' href='https://practicum.yandex.ru/' target='_blank' rel='noreferrer'>Яндекс.Практикум</a>
            </li>
            <li>
              <a className='footer__link link' href='https://github.com/anikastreim' target='_blank' rel='noreferrer'>Github</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
};

export default Footer;