import SectionTitle from '../SectionTitle/SectionTitle';
import Portfolio from '../Portfolio/Portfolio';
import photo from '../../images/photo.jpg';
import './AboutMe.css';

function AboutMe() {
  return (
    <section className='about-me' id ='about-me'>
      <SectionTitle title='Студент' />
      <div className='about-me__info'>
        <div className='about-me__description'>
          <h3 className='about-me__title'>Юлия</h3>
          <p className='about-me__subtitle'>Фронтенд-разработчица, 22 года</p>
          <p className='about-me__text'>Я&nbsp;пошла на&nbsp;курсы по&nbsp;веб-разработке, потому что хотела освоить новую профессию. Бладоря фронтенд-разработке у&nbsp;меня появилась возможность создавать красивые и&nbsp;функциональные веб-сайты, реализовать свои творческие и&nbsp;профессиональные амбиции, развиваться в&nbsp;динамичной и&nbsp;востребованной отрасли.</p>
          <a className='about-me__link' href='https://github.com/anikastreim' target='_blank' rel='noreferrer'>Github</a>
        </div>
        <img className='about-me__photo' src={photo} alt='Фотография студентки Яднекс Практикума Юлии Соколовой' />
      </div>
      <Portfolio />
    </section>
  )
};

export default AboutMe;