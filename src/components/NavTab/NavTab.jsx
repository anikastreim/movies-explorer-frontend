import './NavTab.css';

function NavTab() {
  return (
    <nav className='nav-tab__nav'>
      <ul className='nav-tab__links'>
        <li>
          <a className='nav-tab__link link' href='#about-project'>О проекте</a>
        </li>
        <li>
          <a className='nav-tab__link link' href='#techs'>Технологии</a>
        </li>
        <li>
          <a className='nav-tab__link link' href='#about-me'>Студент</a>
        </li>
      </ul>
    </nav>
  )
};

export default NavTab;