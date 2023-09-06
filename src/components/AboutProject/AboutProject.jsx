import SectionTitle from '../SectionTitle/SectionTitle';
import './AboutProject.css';

function AboutProject() {
  return (
    <section className='about-project'>
      <SectionTitle title='О проекте' />
      <div className='about-project__container'>
        <article className='about-project__info'>
          <h3 className='about-project__info-title'>Дипломный проект включал 5 этапов</h3>
          <p className='about-project__info-subtitle'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </article>
        <article className='about-project__info'>
          <h3 className='about-project__info-title'>На выполнение диплома ушло 5 недель</h3>
          <p className='about-project__info-subtitle'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </article>
      </div>
      <div className='about-project__time'>
        <div className='about-project__time-items'>
          <p className='about-project__time-period about-project__time-items_backend'>1 неделя</p>
          <p className='about-project__time-tech'>Back-end</p>
        </div>
        <div className='about-project__time-items'>
          <p className='about-project__time-period about-project__time-items_frontend'>4 недели</p>
          <p className='about-project__time-tech'>Front-end</p>
        </div>
      </div>
    </section>
  )
};

export default AboutProject;