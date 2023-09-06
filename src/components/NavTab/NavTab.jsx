import './NavTab.css';

function NavTab() {
  return (
    <section className='nav-tab'>
      <nav className='nav-tab__nav'>
        <ul className='nav-tab__links'>
          <li>
            <a className='nav-tab__link' href='#about-project'>О проекте</a>
          </li>
          <li>
            <a className='nav-tab__link' href='#techs'>Технологии</a>
          </li>
          <li>
            <a className='nav-tab__link' href='#about-me'>Студент</a>
          </li>
        </ul>
      </nav>
    </section>
  )
};

export default NavTab;