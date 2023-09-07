import './MoviesCard.css';

function MoviesCard({movie, isSaved}) { 
  const {title, link, duration} = movie;
  const hours = Math.floor(duration / 60);
  const minutes = duration % 60;
  function handleLikeButtonClick(button) {
    button.target.classList.toggle('movies-card__save_active');
  };
  return (
    <article className='movies-card'>
      <img className='movies-card__image' src={link} alt={title} />
      <div className='movies-card__constainer'>
        <div className='movies-card__description'>
          <h2 className='movies-card__title'>{title}</h2>
          {isSaved
            ?
            <button type='button' aria-label='delete' className='movies-card__delete button' />
            :
            <button type='button' aria-label='save' className='movies-card__save button' onClick={handleLikeButtonClick}/>
          }
        </div>
        <p className='movies-card__duration'>{`${hours}ч ${minutes}м`}</p>
      </div>
    </article>
  )
};

export default MoviesCard;